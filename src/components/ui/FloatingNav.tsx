import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../Logo';
import useWindowSize from '../../hooks/useWindowSize';

const FloatingNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { width } = useWindowSize();
  const isMobile = width < 768;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Tools', href: '/tools' },
    { name: 'Contact', href: '/#contact' }
  ];

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href.includes('#')) {
      const sectionId = href.split('#')[1];
      const isHome = location.pathname === '/';
      
      if (!isHome) {
        navigate('/', { state: { scrollTo: sectionId } });
      } else {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(href);
    }
    
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'top-0' : 'top-0'}`}
    >
      <div className={`mx-2 sm:mx-4 rounded-xl transition-all duration-300 overflow-hidden
        before:absolute before:inset-0 before:z-[-1] 
        before:bg-white/95
        before:backdrop-blur-md
        relative
        ${isScrolled ? 'shadow-lg border border-white/50' : 'shadow-md'}
        after:absolute after:inset-0 after:z-[-2] 
        after:bg-gradient-to-b after:from-white/60 after:to-white/30
        after:backdrop-blur-xl`}
      >
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 relative z-10">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <Link to="/">
              <Logo />
            </Link>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <motion.div
                key={item.name}
                onHoverStart={() => setHoveredItem(item.name)}
                onHoverEnd={() => setHoveredItem(null)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={item.href}
                  onClick={(e) => handleNavigation(e, item.href)}
                  className="relative px-3 py-2 text-gray-800 transition-colors duration-300"
                >
                  <motion.span
                    className="relative z-10"
                    animate={{
                      color: hoveredItem === item.name || location.pathname === item.href 
                        ? '#282c64' 
                        : '#1f2937'
                    }}
                  >
                    {item.name}
                  </motion.span>
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-[#282c64] w-full origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ 
                      scaleX: hoveredItem === item.name || location.pathname === item.href ? 1 : 0,
                      opacity: hoveredItem === item.name || location.pathname === item.href ? 1 : 0
                    }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="relative w-10 h-10 rounded-lg bg-white/80 backdrop-blur-sm shadow-lg flex items-center justify-center focus:outline-none"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="w-5 h-0.5 bg-gray-600 absolute"
                animate={{
                  rotate: isOpen ? 45 : 0,
                  translateY: isOpen ? 0 : -4
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                className="w-5 h-0.5 bg-gray-600 absolute"
                animate={{
                  opacity: isOpen ? 0 : 1
                }}
                transition={{ duration: 0.2 }}
              />
              <motion.div
                className="w-5 h-0.5 bg-gray-600 absolute"
                animate={{
                  rotate: isOpen ? -45 : 0,
                  translateY: isOpen ? 0 : 4
                }}
                transition={{ duration: 0.2 }}
              />
            </motion.button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden"
            >
              <div className="px-4 pt-2 pb-3 space-y-2">
                {navigation.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Link
                      to={item.href}
                      onClick={(e) => handleNavigation(e, item.href)}
                      className={`block px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300
                        ${location.pathname === item.href
                          ? 'bg-[#282c64]/10 text-[#282c64]'
                          : 'text-gray-700 hover:bg-[#282c64]/5 hover:text-[#282c64]'
                        }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default FloatingNav;