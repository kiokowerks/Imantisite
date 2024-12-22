import React from 'react';

interface GoogleMapProps {
  apiKey: string;
  address: string;
  className?: string;
}

const GoogleMap = ({ apiKey, address, className = "h-80" }: GoogleMapProps) => {
  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${encodedAddress}`;

  return (
    <div className={`rounded-lg overflow-hidden ${className}`}>
      <iframe
        title="Location Map"
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
};

export default GoogleMap;