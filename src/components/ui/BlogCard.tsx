import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../types/blog';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] flex-shrink-0 snap-start"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-40 sm:h-48">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-[#282c64] text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <div className="mb-4">
          <h3 className="text-base sm:text-lg font-semibold text-[#282c64] mb-2 line-clamp-2">
            {post.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 line-clamp-3">
            {post.excerpt}
          </p>
        </div>
        
        <div className="mt-auto">
          <div className="flex items-center text-xs sm:text-sm text-gray-500 mb-4">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.author}</span>
          </div>
          
          <Link
            to={`/blog/${post.id}`}
            className="inline-flex items-center justify-center w-full bg-[#282c64] text-white px-4 py-2 rounded-lg hover:bg-[#363b7d] transition-colors duration-300 text-sm sm:text-base"
          >
            Read Article
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogCard;