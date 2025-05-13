import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import itemArr from '@/ItemArr';

interface GalleryItem {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
}

const PopupGallery = ( { setOpenGallery }) => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Sample gallery items
  const galleryItems: GalleryItem[] = itemArr

  return (
        <div className= "fixed inset-0 bg-[rgba(0,0,0,0.3)] flex items-center justify-center z-50">
    <div className="h-[80%] w-[85%] overflow-y-auto bg-gradient-to-br from-white to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-purple-800 mb-12">
          Equipment Gallery
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              whileHover={{ y: -5 }}
              onClick={() => setSelectedItem(item)}
              layoutId={`card-${item.id}`}
            >
              <div className="h-48 overflow-hidden">
                <motion.img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold text-purple-700 mb-2">{item.title}</h3>
                <p className="text-gray-600 line-clamp-2 overflow-y-auto">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={() => setSelectedItem(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              layoutId={`card-${selectedItem.id}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
            >
              <div className="h-64 sm:h-96 overflow-hidden">
                <img 
                  src={selectedItem.imageUrl} 
                  alt={selectedItem.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <motion.h2 
                  className="text-2xl sm:text-3xl font-bold text-purple-800 mb-3"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {selectedItem.title}
                </motion.h2>
                <motion.p 
                  className="text-gray-700 text-lg"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {selectedItem.description}
                </motion.p>
                <motion.button
                  className="mt-6 px-6 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
                  onClick={() => setSelectedItem(null)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>

    
      <button className="absolute top-4 right-4 bg-purple-100 hover:bg-purple-200 text-purple-800 rounded-full p-2 transition-colors duration-200 z-10"
            aria-label="Close"
            onClick={() => {setOpenGallery(false)}}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
        </button>
    </div>
  );
};

export default PopupGallery;