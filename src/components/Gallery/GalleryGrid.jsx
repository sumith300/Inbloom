import { motion, AnimatePresence } from 'framer-motion';
import GalleryItem from './GalleryItem';
import { useModal } from '../../hooks/useModal';
import GalleryModal from './GalleryModal';

const GalleryGrid = ({ items }) => {
  const { selectedItem, openModal, closeModal } = useModal();

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <GalleryItem
              key={index}
              item={item}
              onClick={() => openModal(item)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <GalleryModal
            item={selectedItem}
            onClose={closeModal}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryGrid; 