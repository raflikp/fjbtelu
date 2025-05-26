import React, { useState } from "react";
import products from "../../data/products";

const Home = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className="bg-[#f9f9f9] min-h-screen font-sans">
      {/* Header */}
      <header className="bg-red-600 text-white px-8 py-5 shadow-lg sticky top-0 z-50">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <h1 className="text-2xl md:text-3xl font-bold tracking-wide">FJB TEL-U</h1>

          <div className="flex flex-col md:flex-row items-center gap-3 w-full md:w-auto">
            <div className="flex items-center gap-2 w-full md:w-auto">
              <button
                onClick={() => setShowFilter((prev) => !prev)}
                className="bg-white text-red-600 font-semibold px-4 py-2 rounded-full hover:bg-red-100 transition-all whitespace-nowrap"
              >
                Filter
              </button>
              <input
                type="text"
                placeholder="Cari produk terbaik hari ini..."
                className="bg-white rounded-full px-5 py-2 w-full md:w-80 text-black focus:outline-none focus:ring-2 focus:ring-red-300 placeholder:text-sm shadow-sm"
              />
            </div>
            <div className="flex gap-2">
              <button className="bg-white text-red-600 font-semibold px-4 py-2 rounded-full hover:bg-red-100 transition-all">
                Login
              </button>
              <button className="bg-white text-red-600 font-semibold px-4 py-2 rounded-full hover:bg-red-100 transition-all">
                Register
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Filter Section (conditional) */}
      {showFilter && (
        <section className="px-8 py-6 bg-white border-b border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            <div className="flex flex-col">
              <label className="text-sm text-gray-700 font-semibold mb-2">Kategori</label>
              <select className="p-2 border border-gray-300 rounded-lg shadow-sm">
                <option>Semua</option>
                <option>Dapur</option>
                <option>Elektronik</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-gray-700 font-semibold mb-2">Lokasi</label>
              <select className="p-2 border border-gray-300 rounded-lg shadow-sm">
                <option>Semua</option>
                <option>Bandung</option>
                <option>Jakarta</option>
              </select>
            </div>
            <div className="flex flex-col col-span-2">
              <label className="text-sm text-gray-700 font-semibold mb-2">Harga Maksimal</label>
              <input type="range" min="0" max="100" className="w-full accent-red-600" />
            </div>
          </div>
          <div className="mt-3 text-right">
            <button className="text-sm text-red-600 font-medium hover:underline">Reset Filter</button>
          </div>
        </section>
      )}

      {/* Product Section */}
      <main className="px-8 py-10">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-800">Produk Untuk Kamu</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-contain bg-white p-4 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="px-4 pb-4">
                <h3 className="text-base font-semibold text-gray-800 mb-1">{item.name}</h3>
                <p className="text-sm text-red-600 font-bold">Rp 150.000</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
