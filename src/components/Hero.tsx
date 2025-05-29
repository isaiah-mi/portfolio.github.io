
import { ArrowDown, BarChart3, TrendingUp, Database } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-data-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-data-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Floating icons */}
          <div className="relative mb-8">
            <div className="absolute -top-16 -left-16 text-data-blue-400 animate-bounce">
              <BarChart3 size={32} />
            </div>
            <div className="absolute -top-12 -right-12 text-data-purple-400 animate-bounce delay-300">
              <TrendingUp size={28} />
            </div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-data-blue-500 animate-bounce delay-500">
              <Database size={24} />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-data-blue-600 to-data-purple-600 bg-clip-text text-transparent">
              Isaiah Matthew
            </span>
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-600 mb-8 animate-slide-up">
            Data Analyst & Business Intelligence Specialist
          </h2>
          
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            I transform raw data into actionable insights that drive business growth. 
            With expertise in SQL, Python, PowerBI, Tableau, Excel and advanced analytics, I help organizations 
            make data-driven decisions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-data-blue-600 to-data-purple-600 hover:from-data-blue-700 hover:to-data-purple-700 px-8 py-3 text-lg"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-data-blue-600 text-data-blue-600 hover:bg-data-blue-50 px-8 py-3 text-lg"
            >
              Get In Touch
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce">
            <ArrowDown className="mx-auto text-gray-400" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
