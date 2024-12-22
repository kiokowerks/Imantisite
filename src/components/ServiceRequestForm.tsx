import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Input from './ui/Input';

interface ServiceRequestFormProps {
  serviceType: 'business' | 'support' | 'training';
  options: { value: string; label: string; description: string; }[];
}

const ServiceRequestForm = ({ serviceType, options }: ServiceRequestFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const response = await fetch('/send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          subject: `New Service Request: ${formData.service}`,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Thank you for your request. We will contact you soon!'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        });
      } else {
        throw new Error(data.message || 'Failed to send request');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Sorry, there was an error sending your request. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const getServiceDescription = (serviceValue: string) => {
    return options.find(option => option.value === serviceValue)?.description || '';
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-16">
      <div className="bg-white rounded-xl shadow-2xl p-8">
        <h2 className="text-2xl font-bold text-[#003366] mb-6">Request Service</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            label="Your Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <Input
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <Input
            label="Phone Number"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <div className="relative">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#9064ac] rounded-md focus:outline-none focus:ring-1 focus:ring-[#9064ac] focus:border-[#9064ac] transition duration-200"
              required
            >
              <option value="">Select a Service</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <label className="absolute -top-2.5 left-2 px-1 text-sm font-medium text-gray-700 bg-white">
              Select Service
            </label>
          </div>

          {formData.service && (
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700">{getServiceDescription(formData.service)}</p>
            </div>
          )}

          <Input
            label="Additional Details"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={4}
          />

          {status.message && (
            <div
              className={`p-4 rounded-md ${
                status.type === 'success'
                  ? 'bg-green-50 text-green-800'
                  : 'bg-red-50 text-red-800'
              }`}
            >
              {status.message}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-[#003366] text-white py-3 px-6 rounded-xl hover:bg-[#004080] transition duration-300 flex items-center justify-center gap-2 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Submit Request'}
            <Send className="h-5 w-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceRequestForm;