import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { MapPin, Calendar, Monitor, ArrowRight } from 'lucide-react';
import { projects } from '../mock';

export const PortfolioPage = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-zinc-950 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
          <Badge className="mb-6 bg-lime-600/20 text-lime-500 border-lime-600/50">
            Our Work
          </Badge>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl">
            Completed Projects
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600 mt-2">
              & Success Stories
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Explore our portfolio of premium home cinema installations across South India. 
            Each project showcases our commitment to excellence and attention to detail.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project) => (
              <Card key={project.id} className="bg-zinc-900/50 border-lime-900/20 backdrop-blur-sm hover:border-lime-600/50 transition-all duration-300 group overflow-hidden">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
                  <Badge className="absolute top-4 right-4 bg-lime-600 text-white border-0">
                    {project.year}
                  </Badge>
                </div>
                
                <CardContent className="p-8">
                  <Badge variant="outline" className="mb-4 border-lime-600/50 text-lime-500">
                    {project.type}
                  </Badge>
                  
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-lime-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center space-x-3 text-gray-300">
                      <MapPin className="w-5 h-5 text-lime-500" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Monitor className="w-5 h-5 text-lime-500" />
                      <span>{project.system}</span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300">
                      <Calendar className="w-5 h-5 text-lime-500" />
                      <span>Completed in {project.year}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Placeholder for more projects */}
          <div className="mt-16 text-center">
            <Card className="bg-zinc-900/30 border-lime-900/20 backdrop-blur-sm border-dashed">
              <CardContent className="p-16 text-center">
                <div className="w-20 h-20 bg-lime-600/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Monitor className="w-10 h-10 text-lime-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">More Projects Coming Soon</h3>
                <p className="text-gray-400 mb-6 max-w-md mx-auto">
                  We're constantly working on new premium home cinema installations. 
                  Check back soon for more completed projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-lime-900/20 via-lime-800/10 to-lime-900/20 border-y border-lime-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Want a Cinema Like These?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's create your custom home theater solution. Schedule a consultation today.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-10 py-6 text-lg shadow-lg shadow-lime-600/30">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
