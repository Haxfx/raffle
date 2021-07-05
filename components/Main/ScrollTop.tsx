import { ReactElement, useEffect, useState } from 'react';
import { BiArrowToTop } from 'react-icons/bi';
import { motion } from 'framer-motion';

export const ScrollTop = (props): ReactElement => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', (e) => {
      toggleVisibility();
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.div {...props} animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
      <div className="fixed bottom-36 right-5">
        {isVisible && (
          <div
            role="button"
            onClick={() => scrollToTop()}
            onKeyDown={() => scrollToTop()}
            tabIndex={0}
            className="flex p-2 bg-orange-primary w-10 h-10 items-center justify-center justify-self-end rounded-xl"
          >
            <BiArrowToTop className="h-6 w-6" />
          </div>
        )}
      </div>
    </motion.div>
  );
};
