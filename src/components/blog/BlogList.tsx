import React, { useRef, useState, useEffect } from 'react';
import { blogPosts } from '../../data/blogPosts';
import BlogCard from '../ui/BlogCard';
import ScrollButton from '../ui/ScrollButton';
import useWindowSize from '../../hooks/useWindowSize';

const BlogList = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const { width } = useWindowSize();
  
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
      const scrollAmount = width < 640 ? 300 : 400; // Adjust scroll amount for mobile
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative">
      {canScrollLeft && width > 640 && (
        <ScrollButton 
          direction="left" 
          onClick={() => scroll('left')} 
        />
      )}
      
      <div 
        ref={scrollContainerRef}
        className="overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory"
      >
        <div className="flex gap-4 sm:gap-6" style={{ minWidth: 'min-content' }}>
          {sortedPosts.map((post) => (
            <div key={post.id} className="snap-start">
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>

      {canScrollRight && width > 640 && (
        <ScrollButton 
          direction="right" 
          onClick={() => scroll('right')} 
        />
      )}
    </div>
  );
};

export default BlogList;