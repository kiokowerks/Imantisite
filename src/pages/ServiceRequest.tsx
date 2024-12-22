import React from 'react';
import { useParams } from 'react-router-dom';
import ServiceRequestForm from '../components/ServiceRequestForm';

const serviceOptions = {
  business: [
    {
      value: 'business-strategy',
      label: 'Business Strategy',
      description: 'Comprehensive business planning and strategic development services to create a roadmap for success.'
    },
    {
      value: 'market-analysis',
      label: 'Market Analysis',
      description: 'In-depth market research and competitive analysis services for informed decision-making.'
    },
    {
      value: 'feasibility-studies',
      label: 'Feasibility Studies',
      description: 'Detailed project viability and risk assessment services.'
    }
  ],
  support: [
    {
      value: 'accounting-payroll',
      label: 'Accounting & Payroll',
      description: 'Comprehensive financial management services including bookkeeping, payroll, and tax planning.'
    },
    {
      value: 'hr-management',
      label: 'HR Management',
      description: 'Complete human resource solutions including recruitment, training, and performance management.'
    },
    {
      value: 'digital-marketing',
      label: 'Digital Marketing',
      description: 'Strategic online presence and marketing campaign management services.'
    }
  ],
  training: [
    {
      value: 'workshops',
      label: 'Workshops',
      description: 'Interactive learning sessions for developing essential business skills.'
    },
    {
      value: 'leadership-programs',
      label: 'Leadership Programs',
      description: 'Comprehensive leadership development training programs.'
    },
    {
      value: 'mentorship',
      label: 'Mentorship',
      description: 'One-on-one guidance and support from experienced business professionals.'
    }
  ]
};

const ServiceRequest = () => {
  const { type } = useParams<{ type: 'business' | 'support' | 'training' }>();
  
  if (!type || !serviceOptions[type]) {
    return <div>Invalid service type</div>;
  }

  return (
    <div className="pt-16">
      <div className="bg-gradient-to-r from-[#003366] to-[#004080] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold mb-4">Request Service</h1>
          <p className="text-xl text-gray-200">
            Fill out the form below to request our services
          </p>
        </div>
      </div>
      <ServiceRequestForm
        serviceType={type}
        options={serviceOptions[type]}
      />
    </div>
  );
};

export default ServiceRequest;