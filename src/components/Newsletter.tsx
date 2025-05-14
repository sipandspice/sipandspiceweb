import { useState } from 'react';
import { Send } from 'lucide-react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      // In a real application, you would submit this to your backend
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl bg-gradient-to-r from-amber-800 to-amber-700 rounded-xl overflow-hidden shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-white mb-4">
              Join Our Flavor Community
            </h2>
            <p className="text-amber-100 mb-6">
              Subscribe to receive exclusive offers, brewing tips, recipes, and be the first to know about new products.
            </p>
            
            {isSubmitted ? (
              <div className="bg-white/10 border border-white/20 rounded-md p-4 text-white">
                <p className="font-medium">Thank you for subscribing!</p>
                <p className="text-sm mt-1">Check your email for a special welcome offer.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="w-full px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-white"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-white text-amber-800 hover:bg-amber-100 font-medium rounded-md transition-colors duration-300 flex items-center justify-center gap-2"
                >
                  Subscribe <Send size={16} />
                </button>
                <p className="text-amber-200 text-xs">
                  By subscribing, you agree to our Privacy Policy. We'll never share your information.
                </p>
              </form>
            )}
          </div>
          
          <div className="hidden md:block relative">
            <img
              src="https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Coffee and spices"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;