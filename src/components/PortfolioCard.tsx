import React from 'react';

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ title, description, image }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
