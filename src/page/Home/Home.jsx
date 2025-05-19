import React from "react";
import { FaHome, FaBell, FaUser } from "react-icons/fa";

const Home = () => {
  const products = ["Pisau", "Piso", "Mixer", "Spatula", "Talenan", "Blender"];

  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white shadow px-10 py-6 sticky top-0 z-50">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-red-600">Kitchen Shop</h1>
          <input
            type="text"
            placeholder="Cari produk..."
            className="border border-gray-300 rounded-md px-4 py-2 w-1/3 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
      </header>

      {/* Filter */}
      <section className="px-10 py-6 bg-white border-b">
        <div className="flex items-center gap-6 flex-wrap">
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Kategori</label>
            <select className="p-2 border rounded w-48">
              <option>Semua</option>
              <option>Dapur</option>
              <option>Elektronik</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">Lokasi</label>
            <select className="p-2 border rounded w-48">
              <option>Semua</option>
              <option>Bandung</option>
              <option>Jakarta</option>
            </select>
          </div>
          <div className="flex flex-col flex-1">
            <label className="text-sm text-gray-600 mb-1">Harga Maksimal</label>
            <input type="range" min="0" max="100" className="w-full" />
          </div>
          <button className="mt-6 text-sm text-red-600 hover:underline">
            Reset Filter
          </button>
        </div>
      </section>

      {/* Produk */}
      <main className="px-10 py-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Produk Terbaru</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="bg-red-500 text-white text-xs px-3 py-1">
                🔥 Flash Sale 00:59:55
              </div>
              <img
                src="https://via.placeholder.com/250x180"
                alt={item}
                className="w-full h-40 object-contain bg-white p-4"
              />
              <div className="p-4">
                <h3 className="text-md font-semibold text-gray-800">{item}</h3>
                <p className="text-sm text-gray-500">Rp 150.000</p>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="bg-white border-t shadow-inner px-10 py-4">
        <div className="flex justify-center gap-20">
          <div className="flex flex-col items-center text-red-600">
            <FaHome size={20} />
            <span className="text-xs">Home</span>
          </div>
          <div className="flex flex-col items-center text-gray-500 hover:text-red-600 transition">
            <FaBell size={20} />
            <span className="text-xs">Notifikasi</span>
          </div>
          <div className="flex flex-col items-center text-gray-500 hover:text-red-600 transition">
            <FaUser size={20} />
            <span className="text-xs">Profil</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
