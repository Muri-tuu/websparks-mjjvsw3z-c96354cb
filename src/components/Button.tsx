import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  onClick, 
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false
}) => {
  const baseClasses = "font-semibold rounded-lg transition-all duration-300 flex items-center justify-center";
  
  const variantClasses = {
    primary: "bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl",
    secondary: "bg-white border border-secondary-200 hover:bg-secondary-50 text-secondary-700"
  };
  
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  const disabledClasses = disabled || loading 
    ? "opacity-50 cursor-not-allowed" 
    : "hover:scale-105 active:scale-95";

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses}`}
    >
      {loading && (
        <i className="bi bi-arrow-clockwise animate-spin mr-2"></i>
      )}
      {children}
    </button>
  );
};

export default Button;
