
import { ExternalLink, Github, BarChart3, Users, ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Sales Performance Dashboard',
      description: 'Interactive dashboard analyzing sales performance across multiple regions with real-time KPI tracking and predictive analytics.',
      icon: <BarChart3 className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['Python', 'Tableau', 'SQL', 'Machine Learning'],
      metrics: ['40% increase in sales efficiency', '25% reduction in processing time'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: 'Customer Segmentation Analysis',
      description: 'Advanced clustering analysis to identify customer segments and optimize marketing strategies using unsupervised machine learning.',
      icon: <Users className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['R', 'K-means', 'Power BI', 'Statistical Analysis'],
      metrics: ['30% improvement in campaign ROI', '5 distinct customer segments identified'],
      links: {
        demo: '#',
        github: '#'
      }
    },
    {
      title: 'E-commerce Analytics Platform',
      description: 'Comprehensive analytics platform tracking user behavior, conversion rates, and revenue optimization for an e-commerce business.',
      icon: <ShoppingCart className="w-6 h-6" />,
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      tags: ['JavaScript', 'D3.js', 'PostgreSQL', 'ETL'],
      metrics: ['15% increase in conversion rate', 'Real-time analytics for 100k+ users'],
      links: {
        demo: '#',
        github: '#'
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real-world data analysis projects that delivered measurable business impact 
            and drove strategic decision-making.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border-0 bg-white"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 text-data-blue-600">
                  {project.icon}
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-data-blue-600 transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="secondary"
                      className="bg-data-blue-50 text-data-blue-700 hover:bg-data-blue-100 transition-colors duration-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900">Key Results:</h4>
                  {project.metrics.map((metric) => (
                    <div key={metric} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      {metric}
                    </div>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <Button 
                    size="sm" 
                    className="flex-1 bg-gradient-to-r from-data-blue-600 to-data-purple-600 hover:from-data-blue-700 hover:to-data-purple-700"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="border-data-blue-600 text-data-blue-600 hover:bg-data-blue-50"
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
