import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Home, Volume2, Monitor, Armchair, Waves, Music, Check, ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { services, brands, businessInfo } from '../mock';
import { Link } from 'react-router-dom';

const iconMap = {
  Home: Home,
  Volume2: Volume2,
  Monitor: Monitor,
  Armchair: Armchair,
  Waves: Waves,
  Music: Music
};

export const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1710131459450-7c384b8be18f"
            alt="Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
          <Badge className="mb-6 bg-lime-600/20 text-lime-500 border-lime-600/50">
            Our Services
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Premium Home Theater
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600 mt-2">
              Solutions & Services
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Expert installation, premium products, and comprehensive after-sales support for your perfect home cinema experience.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <Card key={service.id} className="bg-zinc-900/50 border-lime-900/20 backdrop-blur-sm hover:border-lime-600/50 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-16 h-16 bg-lime-600/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-lime-600/30 transition-colors duration-300">
                        <IconComponent className="w-8 h-8 text-lime-500" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-lime-500 transition-colors duration-300">
                          {service.title}
                        </h3>
                        <p className="text-gray-400 leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-5 h-5 bg-lime-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-lime-500" />
                          </div>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link to="/contact">
                      <Button variant="outline" className="w-full border-lime-600/50 text-lime-500 hover:bg-lime-600/10 transition-all duration-300">
                        Get Quote
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-lime-600/20 text-lime-500 border-lime-600/50">
              Trusted Brands
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              We Work With The Best
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Premium audio-visual brands for superior quality and performance
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {brands.map((brand, index) => (
              <Card key={index} className="bg-zinc-900/50 border-lime-900/20 backdrop-blur-sm hover:border-lime-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-lime-600/10">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{brand.name}</h3>
                  <p className="text-lime-500 text-sm">{brand.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-zinc-950 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose MJ Audio?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Expert Installation", description: "Professional team with years of experience in home theater setup" },
              { title: "Premium Quality", description: "Only the best brands and products for superior performance" },
              { title: "Value for Money", description: "Competitive pricing without compromising on quality" },
              { title: "After-Sales Support", description: "Comprehensive maintenance and repair services" },
              { title: "Custom Solutions", description: "Tailored designs to match your space and preferences" },
              { title: "Trusted by 500+", description: "Join hundreds of satisfied customers across Tirunelveli" }
            ].map((item, index) => (
              <Card key={index} className="bg-zinc-900/30 border-lime-900/20 backdrop-blur-sm hover:border-lime-600/50 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-lime-900/20 via-lime-800/10 to-lime-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Get Started Today
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Contact us for a free consultation and personalized quote
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-6 shadow-lg shadow-lime-600/30 transition-all duration-300">
                Book Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href={`tel:${businessInfo.phone}`}>
              <Button size="lg" variant="outline" className="border-2 border-lime-600 text-lime-500 hover:bg-lime-600/10 px-8 py-6 transition-all duration-300">
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
