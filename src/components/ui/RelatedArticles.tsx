import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BlogPost } from '../../types/blog';
import { navigateToSection } from '../../utils/scrollToSection';
import { useNavigate } from 'react-router-dom';

interface RelatedArticlesProps {
  currentPostId: string;
  posts: BlogPost[];
}

const RelatedArticles = ({ currentPostId, posts }: RelatedArticlesProps) => {
  const navigate = useNavigate();
  const relatedPosts = posts
    .filter(post => post.id !== currentPostId)
    .slice(0, 3);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h3 className="text-xl font-semibold text-[#282c64] mb-6">Related Articles</h3>
      <div className="space-y-6">
        {relatedPosts.map((post) => (
          <motion.div
            key={post.id}
            whileHover={{ x: 4 }}
            className="group cursor-pointer"
            onClick={() => navigateToSection(navigate, `blog/${post.id}`)}
          >
            <div className="flex gap-4">
              <img
                src={post.image}
                alt={post.title}
                className="w-24 h-24 object-cover rounded-lg group-hover:shadow-md transition-shadow duration-300"
              />
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 group-hover:text-[#282c64] transition-colors duration-300 line-clamp-2 mb-2">
                  {post.title}
                </h4>
                <p className="text-sm text-gray-500">{post.date}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <Link
        to="/"
        onClick={(e) => {
          e.preventDefault();
          navigateToSection(navigate, 'blog');
        }}
        className="inline-block w-full text-center mt-6 text-[#282c64] hover:text-[#363b7d] font-medium transition-colors duration-300"
      >
        View All Articles
      </Link>
    </div>
  );
};

export default RelatedArticles;