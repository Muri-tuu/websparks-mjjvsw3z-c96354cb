import React from 'react';

interface SocialButtonProps {
  icon: string;
  provider: string;
  onClick: () => void;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, provider, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center w-full px-4 py-3 bg-white border border-secondary-200 rounded-lg hover:bg-secondary-50 hover:border-secondary-300 transition-all duration-300 group"
    >
      <i className={`${icon} text-lg text-secondary-600 group-hover:text-secondary-700 mr-3`}></i>
      <span className="text-secondary-700 font-medium">Continue with {provider}</span>
    </button>
  );
};

export default SocialButton;
