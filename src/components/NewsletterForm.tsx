import React, { useState } from 'react';
import SocialButton from './SocialButton';
import InputField from './InputField';
import Button from './Button';

const NewsletterForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [emailError, setEmailError] = useState('');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) setEmailError('');
  };

  const handleSubmit = () => {
    if (!email) {
      setEmailError('Email is required');
      return;
    }
    
    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    window.setTimeout(() => {
      setIsLoading(false);
      alert('Thank you for subscribing! Welcome to our community.');
      setEmail('');
    }, 2000);
  };

  const handleSocialSignup = (provider: string) => {
    alert(`${provider} signup coming soon!`);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-2xl p-8 animate-slide-up">
      {/* Logo/Brand */}
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
          <i className="bi bi-envelope-heart text-white text-2xl"></i>
        </div>
        <h1 className="text-2xl font-bold text-secondary-900 mb-2">Subscribe to Our Newsletter</h1>
        <p className="text-secondary-600 text-sm leading-relaxed">
          Get the latest updates, exclusive content, and insider tips delivered straight to your inbox.
        </p>
      </div>

      {/* Social Signup Options */}
      <div className="space-y-3 mb-6">
        <SocialButton
          icon="bi bi-google"
          provider="Google"
          onClick={() => handleSocialSignup('Google')}
        />
        <SocialButton
          icon="bi bi-facebook"
          provider="Facebook"
          onClick={() => handleSocialSignup('Facebook')}
        />
      </div>

      {/* Divider */}
      <div className="relative mb-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-secondary-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-white text-secondary-500">Or continue with email</span>
        </div>
      </div>

      {/* Email Form */}
      <div className="space-y-4 mb-6">
        <InputField
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={handleEmailChange}
          icon="bi bi-envelope"
          error={emailError}
        />
        
        <Button
          onClick={handleSubmit}
          size="lg"
          loading={isLoading}
          disabled={!email}
        >
          {isLoading ? 'Subscribing...' : 'Subscribe Now'}
          {!isLoading && <i className="bi bi-arrow-right ml-2"></i>}
        </Button>
      </div>

      {/* Additional Links */}
      <div className="text-center space-y-2 mb-6">
        <div className="flex justify-center space-x-4 text-sm">
          <a href="#" className="text-secondary-500 hover:text-primary-600 transition-colors duration-300">
            Terms of Service
          </a>
          <span className="text-secondary-300">•</span>
          <a href="#" className="text-secondary-500 hover:text-primary-600 transition-colors duration-300">
            Privacy Policy
          </a>
          <span className="text-secondary-300">•</span>
          <a href="#" className="text-secondary-500 hover:text-primary-600 transition-colors duration-300">
            Help
          </a>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="text-center border-t border-secondary-100 pt-6">
        <div className="flex items-center justify-center mb-3">
          <i className="bi bi-shield-check text-primary-500 mr-2"></i>
          <span className="text-sm text-secondary-600">We respect your privacy</span>
        </div>
        <div className="flex items-center justify-center space-x-4 text-xs text-secondary-500">
          <div className="flex items-center">
            <i className="bi bi-lock text-primary-500 mr-1"></i>
            <span>Secure & Encrypted</span>
          </div>
          <span>•</span>
          <div className="flex items-center">
            <i className="bi bi-x-circle text-primary-500 mr-1"></i>
            <span>No Spam</span>
          </div>
          <span>•</span>
          <div className="flex items-center">
            <i className="bi bi-door-open text-primary-500 mr-1"></i>
            <span>Unsubscribe Anytime</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;
