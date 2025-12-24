import React from 'react';
import NewsletterForm from './components/NewsletterForm';
import BackgroundPattern from './components/BackgroundPattern';

function App() {
  return (
    <div className="min-h-screen relative flex items-center justify-center p-4 font-primary">
      {/* Background */}
      <BackgroundPattern />
      
      {/* Content */}
      <div className="relative z-10 w-full max-w-md animate-fade-in">
        <NewsletterForm />
        
        {/* Powered by Websparks AI */}
        <div className="text-center mt-8">
          <p className="text-white/80 text-sm flex items-center justify-center">
            <i className="bi bi-lightning-charge mr-2"></i>
            Powered by Websparks AI
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
