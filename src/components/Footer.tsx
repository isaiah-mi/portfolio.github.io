
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold bg-gradient-to-r from-data-blue-400 to-data-purple-400 bg-clip-text text-transparent mb-2">
              Data Analyst
            </div>
            <p className="text-gray-400">
              Transforming data into insights, one analysis at a time.
            </p>
          </div>

          <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>by Alex Johnson</span>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Alex Johnson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
