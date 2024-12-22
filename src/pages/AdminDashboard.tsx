import React, { useState } from 'react';
import { Plus, Image, Edit, Trash2 } from 'lucide-react';
import { motion } from 'framer-motion';
import BlogPostModal from '../components/ui/BlogPostModal';
import GalleryModal from '../components/ui/GalleryModal';
import DeleteConfirmationModal from '../components/ui/DeleteConfirmationModal';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<'blog' | 'gallery'>('blog');
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [itemToDelete, setItemToDelete] = useState<{ type: 'post' | 'image'; id: number } | null>(null);

  const [posts, setPosts] = useState([
    { id: 1, title: 'Empowering African Entrepreneurs', status: 'Published', date: '2024-03-01' },
    { id: 2, title: 'The Future of Business in Kenya', status: 'Draft', date: '2024-03-02' },
  ]);

  const [images, setImages] = useState([
    { 
      id: 1, 
      title: 'Leadership Workshop', 
      category: 'Training and Development',
      url: 'https://images.unsplash.com/photo-1552664730-d307ca884978'
    },
    { 
      id: 2, 
      title: 'Business Strategy Session', 
      category: 'Business Solutions',
      url: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8'
    },
  ]);

  const handleEditPost = (post: any) => {
    setSelectedPost(post);
    setIsPostModalOpen(true);
  };

  const handleEditImage = (image: any) => {
    setSelectedImage(image);
    setIsGalleryModalOpen(true);
  };

  const handleDeleteClick = (type: 'post' | 'image', id: number) => {
    setItemToDelete({ type, id });
    setIsDeleteModalOpen(true);
  };

  const handleDelete = () => {
    if (!itemToDelete) return;

    if (itemToDelete.type === 'post') {
      setPosts(posts.filter(post => post.id !== itemToDelete.id));
    } else {
      setImages(images.filter(image => image.id !== itemToDelete.id));
    }

    setIsDeleteModalOpen(false);
    setItemToDelete(null);
  };

  const handlePostSubmit = (formData: any) => {
    if (selectedPost) {
      // Update existing post
      setPosts(posts.map(post => 
        post.id === selectedPost.id 
          ? { ...post, ...formData }
          : post
      ));
    } else {
      // Create new post
      setPosts([...posts, { id: Date.now(), ...formData }]);
    }
    setIsPostModalOpen(false);
    setSelectedPost(null);
  };

  const handleImageSubmit = (formData: any) => {
    if (selectedImage) {
      // Update existing image
      setImages(images.map(image => 
        image.id === selectedImage.id 
          ? { ...image, ...formData }
          : image
      ));
    } else {
      // Create new image
      setImages([...images, { id: Date.now(), ...formData }]);
    }
    setIsGalleryModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-[#282c64]">Admin Dashboard</h1>
            <div className="flex gap-4">
              {activeTab === 'blog' ? (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedPost(null);
                    setIsPostModalOpen(true);
                  }}
                  className="bg-[#282c64] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#363b7d] transition-colors duration-300"
                >
                  <Plus className="h-5 w-5" />
                  Create New Post
                </motion.button>
              ) : (
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setSelectedImage(null);
                    setIsGalleryModalOpen(true);
                  }}
                  className="bg-[#282c64] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#363b7d] transition-colors duration-300"
                >
                  <Image className="h-5 w-5" />
                  Add Photos
                </motion.button>
              )}
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            <button
              onClick={() => setActiveTab('blog')}
              className={`px-4 py-2 rounded-lg ${
                activeTab === 'blog'
                  ? 'bg-[#282c64] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              } transition-colors duration-300`}
            >
              Blog Posts
            </button>
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-4 py-2 rounded-lg ${
                activeTab === 'gallery'
                  ? 'bg-[#282c64] text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              } transition-colors duration-300`}
            >
              Gallery
            </button>
          </div>

          {activeTab === 'blog' ? (
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b">
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Title</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Date</th>
                    <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {posts.map((post) => (
                    <tr key={post.id} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4 text-sm text-gray-800">{post.title}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs ${
                          post.status === 'Published'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {post.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">{post.date}</td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleEditPost(post)}
                            className="text-blue-600 hover:text-blue-800"
                          >
                            <Edit className="h-5 w-5" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleDeleteClick('post', post.id)}
                            className="text-red-600 hover:text-red-800"
                          >
                            <Trash2 className="h-5 w-5" />
                          </motion.button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {images.map((image) => (
                <div key={image.id} className="relative group">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                    <div className="absolute inset-0 p-4 text-white">
                      <h3 className="text-lg font-semibold">{image.title}</h3>
                      <p className="text-sm opacity-75">{image.category}</p>
                      <div className="absolute bottom-4 right-4 flex gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleEditImage(image)}
                          className="p-2 bg-blue-500 rounded-full hover:bg-blue-600"
                        >
                          <Edit className="h-4 w-4" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleDeleteClick('image', image.id)}
                          className="p-2 bg-red-500 rounded-full hover:bg-red-600"
                        >
                          <Trash2 className="h-4 w-4" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <BlogPostModal
        isOpen={isPostModalOpen}
        onClose={() => {
          setIsPostModalOpen(false);
          setSelectedPost(null);
        }}
        onSubmit={handlePostSubmit}
        post={selectedPost}
      />

      <GalleryModal
        isOpen={isGalleryModalOpen}
        onClose={() => {
          setIsGalleryModalOpen(false);
          setSelectedImage(null);
        }}
        onSubmit={handleImageSubmit}
        image={selectedImage}
      />

      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          setIsDeleteModalOpen(false);
          setItemToDelete(null);
        }}
        onConfirm={handleDelete}
        type={itemToDelete?.type}
      />
    </div>
  );
};

export default AdminDashboard;