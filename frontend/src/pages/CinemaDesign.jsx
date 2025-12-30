import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Home, Volume2, Waves, Monitor, Armchair, Palette, 
  ArrowRight, CheckCircle, Phone, Lightbulb
} from 'lucide-react';
import { businessInfo } from '../mock';

export const CinemaDesignPage = () => {
  const designServices = [
    {
      icon: Home,
      title: "Room Planning",
      description: "Optimal room selection, dimensions, and layout planning for perfect acoustics and viewing angles"
    },
    {
      icon: Palette,
      title: "Aesthetic Design",
      description: "Custom interior design that seamlessly integrates technology with your home's aesthetic"
    },
    {
      icon: Waves,
      title: "Acoustic Engineering",
      description: "Scientific acoustic treatment design for optimal sound quality and isolation"
    },
    {
      icon: Lightbulb,
      title: "Lighting Design",
      description: "Ambient lighting control systems for the perfect cinema environment"
    },
    {
      icon: Armchair,
      title: "Seating Solutions",
      description: "Premium cinema seating selection and layout for maximum comfort"
    },
    {
      icon: Monitor,
      title: "Equipment Selection",
      description: "Expert guidance on selecting the best projectors, screens, and audio systems"
    }
  ];

  const designProcess = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We meet to understand your vision, budget, and space constraints"
    },
    {
      step: "02",
      title: "Site Survey",
      description: "Detailed room analysis including dimensions, acoustics, and ambient light"
    },
    {
      step: "03",
      title: "Design Proposal",
      description: "3D visualizations, equipment recommendations, and acoustic treatment plan"
    },
    {
      step: "04",
      title: "Final Approval",
      description: "Review and refinement until the design perfectly matches your expectations"
    }
  ];

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-zinc-950 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
          <Badge className="mb-6 bg-lime-600/20 text-lime-500 border-lime-600/50">
            Cinema Design & Installation
          </Badge>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl">
            Custom Home Cinema
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600 mt-2">
              Design & Installation
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed mb-8">
            Transform your space into a world-class cinema with our comprehensive design and installation services. 
            From concept to completion, we handle every detail of your home theater project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-6">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-2 border-lime-600 text-lime-500 hover:bg-lime-600/10 px-8 py-6">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Design Services */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-lime-600/20 text-lime-500 border-lime-600/50">
              Design Services
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Complete Design Solutions
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Every aspect of your home cinema carefully planned and executed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {designServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="bg-zinc-900/50 border-lime-900/20 backdrop-blur-sm hover:border-lime-600/50 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-lime-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-lime-600/30 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-lime-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-lime-500 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-lime-600/20 text-lime-500 border-lime-600/50">
              Our Process
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              How We Design Your Cinema
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {designProcess.map((process, index) => (
              <Card key={index} className="bg-zinc-900/50 border-lime-900/20 backdrop-blur-sm hover:border-lime-600/50 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="text-6xl font-bold text-lime-500/20 mb-4 group-hover:text-lime-500/40 transition-colors duration-300">
                    {process.step}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-lime-500 transition-colors duration-300">
                    {process.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {process.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <Badge className="mb-4 bg-lime-600/20 text-lime-500 border-lime-600/50">
                What's Included
              </Badge>
              <h2 className="text-4xl font-bold text-white mb-8">
                Comprehensive Installation Services
              </h2>
              <div className="space-y-4">
                {[
                  "Professional equipment installation and mounting",
                  "Custom cable management and concealment",
                  "Acoustic treatment installation",
                  "Lighting system integration",
                  "Seating installation and arrangement",
                  "Complete system calibration",
                  "Client training and handover",
                  "After-sales support and maintenance"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-lime-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-300 text-lg">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Card className="bg-zinc-900/50 border-lime-900/20 backdrop-blur-sm h-full">
                <CardContent className="p-12">
                  <h3 className="text-3xl font-bold text-white mb-6">
                    Why Choose Professional Installation?
                  </h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-lime-500 mb-2">Optimal Performance</h4>
                      <p className="text-gray-400">
                        Professional installation ensures every component performs at its best
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-lime-500 mb-2">Clean Aesthetics</h4>
                      <p className="text-gray-400">
                        Hidden wiring and seamless integration with your space
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-lime-500 mb-2">Future-Proof</h4>
                      <p className="text-gray-400">
                        Proper planning allows for easy upgrades and additions
                      </p>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-lime-500 mb-2">Peace of Mind</h4>
                      <p className="text-gray-400">
                        Warranty protection and ongoing professional support
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-lime-900/20 via-lime-800/10 to-lime-900/20 border-y border-lime-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let's Design Your Dream Cinema
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your home cinema project
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-10 py-6 text-lg shadow-lg shadow-lime-600/30">
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href={`tel:${businessInfo.phone}`}>
              <Button size="lg" variant="outline" className="border-2 border-lime-600 text-lime-500 hover:bg-lime-600/10 px-10 py-6 text-lg">
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
