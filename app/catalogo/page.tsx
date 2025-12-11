'use client';

import Header from '@/components/Header';
import { useState, useEffect } from 'react';
import { ShoppingCart, Package, Tag, Sparkles, TrendingUp, Lock, X, Edit2, Save, Upload, LogOut, Loader2, Trash2 } from 'lucide-react';


interface Producto {
  id: number;
  nombre: string;
  precio: number;
  categoria: string;
  imagen: string;
  destacado?: boolean;
  nuevo?: boolean;
}

const PRODUCTOS_INICIALES: Producto[] = [
  { id: 1, nombre: "Letrero MDF 3mm", precio: 120, categoria: "letras", imagen: "https://via.placeholder.com/300x200?text=Letrero+MDF", destacado: true },
  { id: 2, nombre: "Decoración Mandala", precio: 250, categoria: "decoracion", imagen: "https://via.placeholder.com/300x200?text=Mandala", nuevo: true },
  { id: 3, nombre: "Llaveros personalizados", precio: 60, categoria: "regalos", imagen: "https://via.placeholder.com/300x200?text=Llaveros" },
  { id: 4, nombre: "Nombre en acrílico", precio: 180, categoria: "personalizados", imagen: "https://via.placeholder.com/300x200?text=Acrilico", destacado: true },
  { id: 5, nombre: "Portarretratos", precio: 150, categoria: "decoracion", imagen: "https://via.placeholder.com/300x200?text=Portarretratos" },
  { id: 6, nombre: "Letrero Luminoso", precio: 300, categoria: "letras", imagen: "https://via.placeholder.com/300x200?text=Letrero+Luminoso", nuevo: true },
  { id: 7, nombre: "Separadores de Libros", precio: 45, categoria: "regalos", imagen: "https://via.placeholder.com/300x200?text=Separadores" },
  { id: 8, nombre: "Calendario Perpetuo", precio: 200, categoria: "decoracion", imagen: "https://via.placeholder.com/300x200?text=Calendario" },
];

const CATEGORIA_INFO = {
  letras: { icon: Package, color: 'from-[#2959c7] to-[#1e47a1]' },
  decoracion: { icon: Sparkles, color: 'from-[#ff2e55] to-[#e91e63]' },
  regalos: { icon: Tag, color: 'from-[#2959c7] to-[#ff2e55]' },
  personalizados: { icon: TrendingUp, color: 'from-[#ff2e55] to-[#2959c7]' },
};

// ⚠️ CAMBIA ESTE PIN POR EL TUYO
const PIN_ADMIN = "superadmin123";

// ⚠️ CAMBIA ESTA API KEY POR LA TUYA DE IMGBB
const IMGBB_API_KEY = "fbadb457fc27dfb1ce4386a1c6dcda46";

export default function Catalogo() {
  const [productos, setProductos] = useState<Producto[]>(PRODUCTOS_INICIALES);
  const [filtro, setFiltro] = useState('todos');
  const [showPinModal, setShowPinModal] = useState(false);
  const [pinInput, setPinInput] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editData, setEditData] = useState<Partial<Producto>>({});
  const [loading, setLoading] = useState(true);
  const [pinError, setPinError] = useState('');
  const [uploadingImage, setUploadingImage] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState<number | null>(null);

  const categorias = ['todos', ...new Set(productos.map(p => p.categoria))];

  // Cargar productos al inicio
  useEffect(() => {
    cargarProductos();
  }, []);

  const cargarProductos = () => {
    try {
      const saved = localStorage.getItem('productos-catalogo');
      if (saved) {
        setProductos(JSON.parse(saved));
      }
    } catch (error) {
      console.log('No hay productos guardados, usando productos iniciales');
    } finally {
      setLoading(false);
    }
  };

  const guardarProductos = (nuevosProductos: Producto[]) => {
    try {
      localStorage.setItem('productos-catalogo', JSON.stringify(nuevosProductos));
      setProductos(nuevosProductos);
      alert('✅ Cambios guardados correctamente');
    } catch (error) {
      console.error('Error al guardar productos:', error);
      alert('❌ Error al guardar los cambios');
    }
  };

  const subirImagenAImgBB = async (file: File): Promise<string | null> => {
    setUploadingImage(true);
    
    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch(`https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setUploadingImage(false);
        return data.data.url;
      } else {
        throw new Error('Error al subir imagen');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('❌ Error al subir la imagen. Verifica tu API Key de ImgBB');
      setUploadingImage(false);
      return null;
    }
  };

  const handlePinSubmit = () => {
    if (pinInput === PIN_ADMIN) {
      setIsAdmin(true);
      setShowPinModal(false);
      setPinInput('');
      setPinError('');
    } else {
      setPinError('PIN incorrecto');
    }
  };

  const handleFiltro = (categoria: string) => {
    setFiltro(categoria);
  };

  const productosFiltrados = filtro === 'todos' 
    ? productos 
    : productos.filter(p => p.categoria === filtro);

  const agregarCarrito = (id: number) => {
  const producto = productos.find(p => p.id === id);
  if (producto) {
    const carrito = JSON.parse(localStorage.getItem("carrito") || "[]");

    const itemExistente = carrito.find((item: any) => item.id === String(id));

    if (itemExistente) {
      itemExistente.cantidad = (itemExistente.cantidad || 1) + 1;
      const newQuantity = itemExistente.cantidad;

      window.dispatchEvent(
        new CustomEvent("cartAction", {
          detail: { message: `Cantidad actualizada a ${newQuantity}` }
        })
      );
    } else {
      carrito.push({
        id: String(id),
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: 1
      });

      window.dispatchEvent(
        new CustomEvent("cartAction", {
          detail: { message: `¡${producto.nombre} agregado al carrito!` }
        })
      );
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));
    window.dispatchEvent(new Event("cartUpdated"));

    const button = document.getElementById(`btn-${id}`);
    if (button) {
      button.textContent = "¡Agregado!";
      setTimeout(() => {
        button.innerHTML =
          `<svg class="inline" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
             <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
           </svg> Agregar`;
      }, 1000);
    }
  }
};

  const iniciarEdicion = (producto: Producto) => {
    setEditingId(producto.id);
    setEditData(producto);
  };

  const cancelarEdicion = () => {
    setEditingId(null);
    setEditData({});
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 5000000) {
      alert('La imagen es muy grande. Máximo 5MB.');
      return;
    }

    const imageUrl = await subirImagenAImgBB(file);
    
    if (imageUrl) {
      setEditData({ ...editData, imagen: imageUrl });
      alert('✅ Imagen subida correctamente');
    }
  };

  const guardarEdicion = () => {
    if (editingId !== null) {
      const nuevosProductos = productos.map(p => 
        p.id === editingId ? { ...p, ...editData } : p
      );
      guardarProductos(nuevosProductos);
      setEditingId(null);
      setEditData({});
    }
  };

  const eliminarProducto = (id: number) => {
    const nuevosProductos = productos.filter(p => p.id !== id);
    guardarProductos(nuevosProductos);
    setShowDeleteConfirm(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-[#ff2e55] mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando catálogo...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-black">
      {/* Header - Descomenta la siguiente línea cuando importes tu Header */}
      /<Header />
      
      {/* Botón flotante de admin */}
      {!isAdmin && (
        <button
          onClick={() => setShowPinModal(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-[#2959c7] to-[#1e47a1] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50"
          title="Acceso Admin"
        >
          <Lock size={24} />
        </button>
      )}

      {/* Indicador de modo admin */}
      {isAdmin && (
        <div className="fixed top-6 right-6 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 z-50">
          <Edit2 size={18} />
          <span className="font-bold">Modo Admin</span>
          <button
            onClick={() => setIsAdmin(false)}
            className="ml-2 hover:bg-white/20 p-1 rounded-full transition"
          >
            <LogOut size={18} />
          </button>
        </div>
      )}

      {/* Modal PIN */}
      {showPinModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Acceso Administrador</h2>
              <button
                onClick={() => {
                  setShowPinModal(false);
                  setPinInput('');
                  setPinError('');
                }}
                className="text-gray-400 hover:text-gray-600"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-semibold mb-2">Ingresa tu PIN</label>
              <input
                type="password"
                value={pinInput}
                onChange={(e) => {
                  setPinInput(e.target.value);
                  setPinError('');
                }}
                onKeyPress={(e) => e.key === 'Enter' && handlePinSubmit()}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-[#2959c7] focus:outline-none text-lg"
                placeholder="Escribe tu PIN"
                autoFocus
              />
              {pinError && (
                <p className="text-red-500 text-sm mt-2">{pinError}</p>
              )}
            </div>

            <button
              onClick={handlePinSubmit}
              className="w-full bg-gradient-to-r from-[#2959c7] to-[#1e47a1] text-white py-3 rounded-xl font-bold hover:opacity-90 transition"
            >
              Ingresar
            </button>
          </div>
        </div>
      )}

      <div className="pt-8">
        {/* Hero Section */}
        <div className="relative py-20 text-center text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff2e55] via-[#fe3158] to-[#2959c7]"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#2959c7] rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">NUESTRO CATÁLOGO</h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Descubre productos únicos hechos con precisión láser
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white p-6 rounded-2xl border border-gray-200 text-center">
              <p className="text-3xl font-bold bg-gradient-to-r from-[#2959c7] to-[#ff2e55] bg-clip-text text-transparent">{productos.length}</p>
              <p className="text-sm text-gray-600 mt-1">Productos</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 text-center">
              <p className="text-3xl font-bold bg-gradient-to-r from-[#ff2e55] to-[#2959c7] bg-clip-text text-transparent">{categorias.length - 1}</p>
              <p className="text-sm text-gray-600 mt-1">Categorías</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 text-center">
              <p className="text-3xl font-bold bg-gradient-to-r from-[#2959c7] to-[#ff2e55] bg-clip-text text-transparent">{productos.filter(p => p.nuevo).length}</p>
              <p className="text-sm text-gray-600 mt-1">Nuevos</p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-200 text-center">
              <p className="text-3xl font-bold bg-gradient-to-r from-[#ff2e55] to-[#2959c7] bg-clip-text text-transparent">{productos.filter(p => p.destacado).length}</p>
              <p className="text-sm text-gray-600 mt-1">Destacados</p>
            </div>
          </div>

          {/* Filtros */}
          <div className="mb-12">
            <div className="inline-block mb-6 px-4 py-2 bg-gradient-to-r from-[#ff2e55]/10 to-[#2959c7]/10 rounded-full">
              <span className="text-sm font-semibold bg-gradient-to-r from-[#ff2e55] to-[#2959c7] bg-clip-text text-transparent">
                FILTRAR POR CATEGORÍA
              </span>
            </div>
            <div className="flex flex-wrap gap-3 justify-start">
              {categorias.map(cat => {
                const isActive = filtro === cat;
                const Icon = cat !== 'todos' ? CATEGORIA_INFO[cat as keyof typeof CATEGORIA_INFO]?.icon : Package;
                const gradientColor = cat !== 'todos' ? CATEGORIA_INFO[cat as keyof typeof CATEGORIA_INFO]?.color : 'from-[#2959c7] to-[#ff2e55]';
                
                return (
                  <button
                    key={cat}
                    onClick={() => handleFiltro(cat)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      isActive
                        ? `bg-gradient-to-r ${gradientColor} text-white shadow-lg transform scale-105`
                        : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                    }`}
                  >
                    {Icon && <Icon size={18} />}
                    <span>{cat.charAt(0).toUpperCase() + cat.slice(1)}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grid de productos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {productosFiltrados.map(producto => {
              const enEdicion = editingId === producto.id;
              const datos = enEdicion ? editData : producto;
              
              return (
                <div
                  key={producto.id}
                  className={`group bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-lg border-2 ${
                    enEdicion ? 'border-green-500 scale-105' : 'border-gray-200 hover:scale-105 hover:shadow-2xl'
                  }`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={datos.imagen || producto.imagen}
                      alt={datos.nombre || producto.nombre}
                      className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Admin: Editar imagen */}
                    {isAdmin && enEdicion && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        {uploadingImage ? (
                          <div className="bg-white text-gray-800 px-4 py-2 rounded-lg flex items-center gap-2">
                            <Loader2 size={20} className="animate-spin" />
                            <span>Subiendo...</span>
                          </div>
                        ) : (
                          <label className="cursor-pointer bg-white text-gray-800 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-100 transition">
                            <Upload size={20} />
                            <span>Cambiar Imagen</span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleImageUpload}
                              className="hidden"
                              disabled={uploadingImage}
                            />
                          </label>
                        )}
                      </div>
                    )}
                    
                    {/* Badges */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2">
                      {datos.nuevo && (
                        <span className="bg-gradient-to-r from-[#ff2e55] to-[#fe3158] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                          NUEVO
                        </span>
                      )}
                      {datos.destacado && (
                        <span className="bg-gradient-to-r from-[#2959c7] to-[#1e47a1] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                          DESTACADO
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="p-5">
                    {enEdicion ? (
                      // Modo edición
                      <div className="space-y-3">
                        <input
                          type="text"
                          value={datos.nombre}
                          onChange={(e) => setEditData({ ...editData, nombre: e.target.value })}
                          className="w-full px-3 py-2 border rounded-lg font-bold"
                          placeholder="Nombre"
                        />
                        
                        <input
                          type="number"
                          value={datos.precio}
                          onChange={(e) => setEditData({ ...editData, precio: Number(e.target.value) })}
                          className="w-full px-3 py-2 border rounded-lg text-2xl font-bold"
                          placeholder="Precio"
                        />

                        <select
                          value={datos.categoria}
                          onChange={(e) => setEditData({ ...editData, categoria: e.target.value })}
                          className="w-full px-3 py-2 border rounded-lg"
                        >
                          <option value="letras">Letras</option>
                          <option value="decoracion">Decoración</option>
                          <option value="regalos">Regalos</option>
                          <option value="personalizados">Personalizados</option>
                        </select>

                        <div className="flex gap-2">
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={datos.nuevo || false}
                              onChange={(e) => setEditData({ ...editData, nuevo: e.target.checked })}
                              className="w-4 h-4"
                            />
                            <span className="text-sm">Nuevo</span>
                          </label>
                          
                          <label className="flex items-center gap-2 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={datos.destacado || false}
                              onChange={(e) => setEditData({ ...editData, destacado: e.target.checked })}
                              className="w-4 h-4"
                            />
                            <span className="text-sm">Destacado</span>
                          </label>
                        </div>

                        <div className="flex gap-2">
                          <button
                            onClick={guardarEdicion}
                            className="flex-1 bg-green-500 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 transition"
                          >
                            <Save size={18} />
                            Guardar
                          </button>
                          <button
                            onClick={cancelarEdicion}
                            className="flex-1 bg-gray-500 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-600 transition"
                          >
                            <X size={18} />
                            Cancelar
                          </button>
                        </div>

                        <button
                          onClick={() => setShowDeleteConfirm(producto.id)}
                          className="w-full bg-red-500 text-white py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-red-600 transition"
                        >
                          <Trash2 size={18} />
                          Eliminar Producto
                        </button>
                      </div>
                    ) : (
                      // Modo normal
                      <>
                        <div className="mb-3">
                          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                            {producto.categoria}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold mb-3 group-hover:text-[#ff2e55] transition-colors">
                          {producto.nombre}
                        </h3>
                        <div className="flex items-center justify-between mb-4">
                          <p className="text-gray-600 text-3xl font-bold">
                            ${producto.precio}
                          </p>
                          <span className="text-xs text-gray-500">MXN</span>
                        </div>
                        
                        {isAdmin ? (
                          <button
                            onClick={() => iniciarEdicion(producto)}
                            className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105"
                          >
                            <Edit2 size={20} />
                            Editar
                          </button>
                        ) : (
                          <button
                            onClick={() => agregarCarrito(producto.id)}
                            className="w-full bg-gradient-to-r from-[#ff2e55] to-[#fe3158] hover:from-[#fe3158] hover:to-[#ff2e55] text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-xl transform hover:scale-105"
                          >
                            <ShoppingCart size={20} />
                            Agregar
                          </button>
                        )}
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Empty State */}
          {productosFiltrados.length === 0 && (
            <div className="text-center py-20">
              <Package size={64} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-2xl font-bold mb-2">No hay productos</h3>
              <p className="text-gray-600">
                No se encontraron productos en esta categoría
              </p>
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-20 text-center bg-gradient-to-br from-[#2959c7] to-[#ff2e55] rounded-3xl p-12 md:p-16 text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">¿No encuentras lo que buscas?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Creamos productos personalizados según tus necesidades. ¡Contáctanos!
              </p>
              <button className="inline-block bg-white text-[#2959c7] px-8 py-4 rounded-xl font-bold text-lg hover:transform hover:scale-105 transition-all duration-300 shadow-xl">
                Contactar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal de confirmación para eliminar */}
      {showDeleteConfirm !== null && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl">
            <div className="text-center mb-6">
              <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
                <Trash2 size={32} className="text-red-500" />
              </div>
              <h2 className="text-2xl font-bold mb-2">¿Eliminar producto?</h2>
              <p className="text-gray-600">Esta acción no se puede deshacer</p>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={() => setShowDeleteConfirm(null)}
                className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-300 transition"
              >
                Cancelar
              </button>
              <button
                onClick={() => eliminarProducto(showDeleteConfirm)}
                className="flex-1 bg-red-500 text-white py-3 rounded-xl font-bold hover:bg-red-600 transition"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}