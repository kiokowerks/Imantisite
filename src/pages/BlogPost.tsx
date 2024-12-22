import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { motion } from 'framer-motion';
import { blogPosts } from '../data/blogPosts';
import { navigateToSection } from '../utils/scrollToSection';
import ShareButton from '../components/ui/ShareButton';
import RelatedArticles from '../components/ui/RelatedArticles';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Post not found</h2>
          <button
            onClick={() => navigateToSection(navigate, 'blog')}
            className="text-[#282c64] hover:text-[#363b7d] font-medium"
          >
            Return to Articles
          </button>
        </div>
      </div>
    );
  }

  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigateToSection(navigate, 'blog');
  };

  const paragraphs = post.content?.split('\n').filter(p => p.trim()) || [];
  const currentUrl = window.location.href;

  return (
    <div className="pt-16 sm:pt-20 pb-16 sm:pb-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 sm:h-[300px] md:h-[400px] object-cover rounded-xl shadow-lg"
              />
              <button
                onClick={handleBackClick}
                className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#282c64] px-3 sm:px-4 py-2 rounded-lg hover:bg-white transition-colors duration-300 flex items-center gap-2 text-sm sm:text-base"
              >
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Back to Articles</span>
                <span className="sm:hidden">Back</span>
              </button>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 sm:mt-8"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#282c64] mb-4">
                {post.title}
              </h1>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-gray-600 mb-6 sm:mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base">{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="text-sm sm:text-base">{post.author}</span>
                </div>
                <div className="sm:ml-auto">
                  <ShareButton url={currentUrl} title={post.title} />
                </div>
              </div>

              <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none">
                {paragraphs.map((paragraph, index) => (
                  <p 
                    key={index} 
                    className="mb-4 text-gray-700 text-[15px] sm:text-base leading-relaxed sm:leading-relaxed"
                  >
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Side Panel */}
          <div className="hidden lg:block">
            <div className="sticky top-24">
              <RelatedArticles currentPostId={post.id} posts={blogPosts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;