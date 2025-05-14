import React from 'react';
import { Facebook, Twitter, Instagram, MapPin, Mail, Phone, Coffee, Leaf, Droplet } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-white font-serif text-xl font-bold mb-4">Flavorful Origins</h3>
            <p className="mb-4 text-stone-400">
              Bringing the world's finest coffee, tea, and spices directly to your kitchen, sourced responsibly and delivered fresh.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors duration-300">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-stone-400 hover:text-amber-500 transition-colors duration-300">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Shop */}
          <div>
            <h3 className="text-white font-bold mb-4">Shop</h3>
            <ul className="space-y-2">
              <li>
                <a href="/coffee" className="text-stone-400 hover:text-amber-500 transition-colors duration-300 flex items-center gap-2">
                  <Coffee size={16} />
                  Coffee
                </a>
              </li>
              <li>
                <a href="/tea" className="text-stone-400 hover:text-amber-500 transition-colors duration-300 flex items-center gap-2">
                  <Leaf size={16} />
                  Tea
                </a>
              </li>
              <li>
                <a href="/spices" className="text-stone-400 hover:text-amber-500 transition-colors duration-300 flex items-center gap-2">
                  <Droplet size={16} />
                  Spices
                </a>
              </li>
              <li>
                <a href="/gift-sets" className="text-stone-400 hover:text-amber-500 transition-colors duration-300">
                  Gift Sets
                </a>
              </li>
              <li>
                <a href="/subscriptions" className="text-stone-400 hover:text-amber-500 transition-colors duration-300">
                  Subscriptions
                </a>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-white font-bold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-stone-400 hover:text-amber-500 transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="/sustainability" className="text-stone-400 hover:text-amber-500 transition-colors duration-300">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="/sourcing" className="text-stone-400 hover:text-amber-500 transition-colors duration-300">
                  Our Sourcing
                </a>
              </li>
              <li>
                <a href="/blog" className="text-stone-400 hover:text-amber-500 transition-colors duration-300">
                  Blog
                </a>
              </li>
              <li>
                <a href="/press" className="text-stone-400 hover:text-amber-500 transition-colors duration-300">
                  Press
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-amber-600 mt-0.5 flex-shrink-0" />
                <span>123 Flavor Street, Portland, OR 97201, USA</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-amber-600 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-amber-600 flex-shrink-0" />
                <a href="mailto:info@flavorfulorigins.com" className="hover:text-amber-500 transition-colors duration-300">
                  info@flavorfulorigins.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-stone-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-stone-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Flavorful Origins. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4 justify-center text-sm">
              <a href="/terms" className="text-stone-500 hover:text-amber-500 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="/privacy" className="text-stone-500 hover:text-amber-500 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/shipping" className="text-stone-500 hover:text-amber-500 transition-colors duration-300">
                Shipping Policy
              </a>
              <a href="/faq" className="text-stone-500 hover:text-amber-500 transition-colors duration-300">
                FAQ
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;