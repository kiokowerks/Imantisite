import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import ScrollButton from './ui/ScrollButton';

const Blog = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const sortedPosts = [...blogPosts].sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      checkScroll();
    }
    return () => container?.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (container) {
      const scrollAmount = window.innerWidth < 640 ? 300 : 400;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="blog" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#282c64] sm:text-4xl mb-4">
            News and Highlights
          </h2>
          <p className="text-xl text-gray-600">
            Stay updated with the latest trends and insights in African business
          </p>
        </div>

        <div className="relative">
          {canScrollLeft && (
            <ScrollButton 
              direction="left" 
              onClick={() => scroll('left')} 
            />
          )}
          
          <div 
            ref={scrollContainerRef}
            className="overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory"
          >
            <div className="flex gap-6" style={{ minWidth: 'min-content' }}>
              {sortedPosts.map((post) => (
                <motion.div
                  key={post.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col w-[300px] sm:w-[400px] flex-shrink-0 snap-start"
                  whileHover={{ y: -5 }}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#282c64] text-white px-4 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-[#282c64] mb-2 line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                    
                    <div className="mt-auto">
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <span>{post.date}</span>
                        <span className="mx-2">•</span>
                        <span>{post.author}</span>
                      </div>
                      
                      <Link
                        to={`/blog/${post.id}`}
                        className="inline-flex items-center justify-center w-full bg-[#282c64] text-white px-4 py-2 rounded-lg hover:bg-[#363b7d] transition-colors duration-300"
                      >
                        Read Article
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {canScrollRight && (
            <ScrollButton 
              direction="right" 
              onClick={() => scroll('right')} 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Blog;