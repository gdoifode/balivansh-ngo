"use client";
import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import gallery from "@/data/gallery.json";

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const selectedItem = gallery.find((g) => g.id === selectedImage);

  return (
    <>
      <section className="bg-earth-800 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-earth-50 font-marathi">
            गॅलरी
          </h1>
          <p className="text-field-400 tracking-widest uppercase text-sm mt-2">
            GALLERY
          </p>
          <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-field-500 via-saffron-500 to-field-500 rounded-full" />
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((item) => (
              <button
                key={item.id}
                onClick={() => setSelectedImage(item.id)}
                className="group relative h-64 rounded-xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={item.src}
                  alt={item.captionEn}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white text-sm font-marathi font-semibold">
                    {item.caption}
                  </p>
                  <span className="text-field-300 text-xs capitalize">
                    {item.category}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
          >
            <X size={32} />
          </button>
          <div
            className="relative max-w-4xl w-full max-h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedItem.src}
              alt={selectedItem.captionEn}
              width={1200}
              height={800}
              className="object-contain w-full h-auto max-h-[75vh] rounded-lg"
            />
            <div className="mt-3 text-center">
              <p className="text-white font-marathi text-lg">
                {selectedItem.caption}
              </p>
              <p className="text-earth-400 text-sm">{selectedItem.captionEn}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
