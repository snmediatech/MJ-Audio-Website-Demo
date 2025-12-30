import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Home, Settings, Volume2, Waves, Sliders, MessageSquare, ArrowRight, CheckCircle, Phone } from 'lucide-react';
import { services, businessInfo } from '../mock';

const iconMap = {
  Home, Settings, Volume2, Waves, Sliders, MessageSquare
};

export const SolutionsPage = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-zinc-950 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
          <Badge className="mb-6 bg-lime-600/20 text-lime-500 border-lime-600/50">
            Our Solutions
          </Badge>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl">
            Complete Home Theater
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600 mt-2">
              Solutions & Services
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            End-to-end home cinema services from design consultation to professional installation, 
            calibration, and ongoing support.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              const isEven = index % 2 === 0;
              
              return (
                <div key={service.id} id={service.slug} className="scroll-mt-24">
                  <Card className="bg-zinc-900/50 border-lime-900/20 backdrop-blur-sm hover:border-lime-600/30 transition-all duration-300">
                    <CardContent className="p-0">
                      <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                        {/* Image/Icon Section */}
                        <div className={`bg-gradient-to-br from-lime-900/20 to-zinc-900 p-12 flex items-center justify-center ${!isEven ? 'lg:col-start-2' : ''}`}>
                          <div className="w-32 h-32 bg-lime-600/20 rounded-2xl flex items-center justify-center">
                            <IconComponent className="w-16 h-16 text-lime-500" />
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="p-12">
                          <Badge className="mb-4 bg-lime-600/20 text-lime-500 border-lime-600/50">
                            Service {index + 1}
                          </Badge>
                          <h2 className="text-4xl font-bold text-white mb-6">
                            {service.title}
                          </h2>
                          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                            {service.longDescription}
                          </p>

                          <div className="space-y-4 mb-8">
                            <h3 className="text-xl font-semibold text-white">Key Features:</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {service.features.map((feature, idx) => (
                                <div key={idx} className="flex items-center space-x-3">
                                  <CheckCircle className="w-5 h-5 text-lime-500 flex-shrink-0" />
                                  <span className="text-gray-300">{feature}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <Link to="/contact">
                            <Button className="bg-lime-600 hover:bg-lime-700 text-white transition-all duration-300">
                              Get a Quote
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-lime-600/20 text-lime-500 border-lime-600/50">
              Our Process
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              How We Work
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A systematic approach to delivering exceptional home cinema experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", desc: "Understand your vision, space, and requirements" },
              { step: "02", title: "Design", desc: "Custom solution with equipment selection and layout" },
              { step: "03", title: "Installation", desc: "Professional setup with precision and care" },
              { step: "04", title: "Calibration", desc: "Fine-tuning for optimal performance" }
            ].map((process, index) => (
              <Card key={index} className="bg-zinc-900/50 border-lime-900/20 backdrop-blur-sm hover:border-lime-600/50 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="text-6xl font-bold text-lime-500/20 mb-4 group-hover:text-lime-500/40 transition-colors duration-300">
                    {process.step}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-lime-500 transition-colors duration-300">
                    {process.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {process.desc}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-lime-900/20 via-lime-800/10 to-lime-900/20 border-y border-lime-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact us for a free consultation and let's create your perfect home cinema
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-10 py-6 text-lg shadow-lg shadow-lime-600/30">
                Schedule Consultation
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
