
import { Code, Database, BarChart3, Brain, PieChart, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Skills = () => {
  const skills = [
    {
      category: 'Programming',
      icon: <Code className="w-8 h-8" />,
      items: ['Python', 'R', 'SQL', 'JavaScript'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      category: 'Databases',
      icon: <Database className="w-8 h-8" />,
      items: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'],
      color: 'from-green-500 to-green-600'
    },
    {
      category: 'Visualization',
      icon: <BarChart3 className="w-8 h-8" />,
      items: ['Tableau', 'Power BI', 'D3.js', 'Plotly'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      category: 'Machine Learning',
      icon: <Brain className="w-8 h-8" />,
      items: ['Scikit-learn', 'TensorFlow', 'Pandas', 'NumPy'],
      color: 'from-red-500 to-red-600'
    },
    {
      category: 'Analytics',
      icon: <PieChart className="w-8 h-8" />,
      items: ['Statistical Analysis', 'A/B Testing', 'Regression', 'Clustering'],
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      category: 'Business Intelligence',
      icon: <TrendingUp className="w-8 h-8" />,
      items: ['KPI Development', 'Dashboard Design', 'ETL', 'Data Modeling'],
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for extracting insights from complex datasets 
            and building robust analytics solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={skill.category} 
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gradient-to-br from-gray-50 to-white"
            >
              <CardContent className="p-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {skill.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {skill.category}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span 
                      key={item}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
