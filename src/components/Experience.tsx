
import { Calendar, MapPin, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      title: 'Senior Data Analyst',
      company: 'TechCorp Solutions',
      period: '2021 - Present',
      location: 'San Francisco, CA',
      description: 'Leading data analytics initiatives for enterprise clients, developing predictive models and business intelligence solutions.',
      achievements: [
        'Increased client revenue by 35% through data-driven recommendations',
        'Built automated reporting systems reducing manual work by 60%',
        'Led cross-functional team of 5 analysts and engineers'
      ]
    },
    {
      title: 'Data Analyst',
      company: 'Analytics Pro',
      period: '2019 - 2021',
      location: 'Seattle, WA',
      description: 'Specialized in customer behavior analysis and marketing optimization for e-commerce and retail clients.',
      achievements: [
        'Developed customer segmentation models improving campaign ROI by 45%',
        'Created real-time dashboards for C-level executives',
        'Implemented A/B testing framework used across 10+ products'
      ]
    },
    {
      title: 'Junior Data Analyst',
      company: 'StartupData Inc.',
      period: '2018 - 2019',
      location: 'Austin, TX',
      description: 'Focused on financial data analysis and risk assessment for fintech applications.',
      achievements: [
        'Built fraud detection models with 92% accuracy',
        'Automated financial reporting reducing processing time by 50%',
        'Collaborated with product team to define key metrics'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A track record of delivering data-driven solutions that create measurable 
            business value across various industries.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-data-blue-500 to-data-purple-500 hidden md:block"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={exp.title} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-data-blue-500 to-data-purple-500 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                  
                  <Card className="md:ml-16 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-l-4 border-l-data-blue-500">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-lg font-semibold text-data-blue-600 mb-2">
                            {exp.company}
                          </p>
                        </div>
                        
                        <div className="flex flex-col md:items-end space-y-1">
                          <div className="flex items-center text-gray-600">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span className="text-sm font-medium">{exp.period}</span>
                          </div>
                          <div className="flex items-center text-gray-600">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-gray-900 flex items-center">
                          <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start">
                              <div className="w-2 h-2 bg-data-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
