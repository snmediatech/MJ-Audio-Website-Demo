import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { 
  Phone, ArrowRight, Home, Settings, Volume2, Waves, Sliders, MessageSquare,
  Award, Users, Shield, Heart, Star, ChevronRight
} from 'lucide-react';
import { services, stats, whyChooseUs, testimonials, businessInfo } from '../mock';
import { BrandsCarousel } from '../components/BrandsShowcase';

const iconMap = {
  Home: Home,
  Settings: Settings,
  Volume2: Volume2,
  Waves: Waves,
  Sliders: Sliders,
  MessageSquare: MessageSquare,
  Award: Award,
  Users: Users,
  Shield: Shield,
  Heart: Heart
};

export const HomePage = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://customer-assets.emergentagent.com/job_mjaudiovision/artifacts/ix1hjac1_4.jpg"
            alt="MJ Audio Home Theater"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/60"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
          <div className="max-w-4xl">
            <Badge className="mb-6 bg-lime-600/20 text-lime-500 border-lime-600/50 hover:bg-lime-600/30 text-sm">
              Premium Home Theater Solutions Since {businessInfo.established}
            </Badge>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Elevate Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600 mt-2">
                Home Cinema Experience
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Expert home theater design, installation, and calibration services. 
              Transform your space into a cinematic masterpiece with Dolby Atmos, 4K projection, 
              and premium audio-visual solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/contact">
                <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white text-base px-8 py-6 shadow-lg shadow-lime-600/30 hover:shadow-lime-600/50 transition-all duration-300 transform hover:scale-105">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="border-2 border-lime-600 text-lime-500 hover:bg-lime-600/10 text-base px-8 py-6 transition-all duration-300">
                  View Our Projects
                  <ChevronRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-lime-900/30">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-4xl sm:text-5xl font-bold text-lime-500 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-24 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge className="mb-4 bg-lime-600/20 text-lime-500 border-lime-600/50">
                About MJ Audio
              </Badge>
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                South India's Premier
                <span className="block text-lime-500 mt-2">Home Theater Specialist</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                With over {stats[0].value} of experience, MJ Audio has established itself as the 
                leading provider of premium home cinema solutions in Tirunelveli and across South India.
              </p>
              <p className="text-gray-400 mb-8 leading-relaxed">
                We specialize in end-to-end home theater services - from initial design consultation 
                and acoustic planning to professional installation, calibration, and ongoing support. 
                Our certified team brings expertise in Dolby Atmos, 4K projection systems, and 
                high-fidelity audio solutions.
              </p>
              <Link to="/about">
                <Button variant="outline" className="border-2 border-lime-600 text-lime-500 hover:bg-lime-600/10 transition-all duration-300">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[iconMap.Award, iconMap.Users, iconMap.Shield, iconMap.Heart].map((Icon, index) => {
                const items = [
                  { title: "Certified", desc: "Professionals" },
                  { title: "15+ Years", desc: "Experience" },
                  { title: "Quality", desc: "Assured" },
                  { title: "Customer", desc: "Focused" }
                ];
                return (
                  <Card key={index} className="bg-zinc-900/50 border-lime-900/20 backdrop-blur-sm hover:border-lime-600/50 transition-all duration-300 group">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-lime-600/20 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-lime-600/30 transition-colors duration-300">
                        <Icon className="w-6 h-6 text-lime-500" />
                      </div>
                      <h3 className="text-white font-semibold mb-1">{items[index].title}</h3>
                      <p className="text-gray-400 text-sm">{items[index].desc}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-lime-600/20 text-lime-500 border-lime-600/50">
              Our Solutions
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Comprehensive Home Theater Services
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              From concept to completion, we deliver premium home cinema solutions 
              tailored to your space, preferences, and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = iconMap[service.icon];
              return (
                <Card key={service.id} className="bg-zinc-900/50 border-lime-900/20 backdrop-blur-sm hover:border-lime-600/50 transition-all duration-300 group hover:shadow-lg hover:shadow-lime-600/10">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-lime-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-lime-600/30 transition-colors duration-300">
                      <IconComponent className="w-8 h-8 text-lime-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-lime-500 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-lime-600/30 text-lime-500/80">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                    <Link to={`/solutions#${service.slug}`}>
                      <Button variant="ghost" className="text-lime-500 hover:text-lime-400 p-0 h-auto font-semibold">
                        Learn More
                        <ChevronRight className="ml-1 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link to="/solutions">
              <Button variant="outline" size="lg" className="border-2 border-lime-600 text-lime-500 hover:bg-lime-600/10 transition-all duration-300">
                View All Solutions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-gradient-to-b from-zinc-950 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-lime-600/20 text-lime-500 border-lime-600/50">
              Why Choose MJ Audio
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Excellence in Every Project
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="bg-zinc-900/30 border-lime-900/20 backdrop-blur-sm hover:border-lime-600/50 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-lime-600/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-lime-600/30 transition-colors duration-300">
                    <span className="text-3xl font-bold text-lime-500">{item.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <BrandsCarousel />

      {/* Testimonials Section */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-lime-600/20 text-lime-500 border-lime-600/50">
              Client Reviews
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Trusted by hundreds of satisfied customers across South India
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="bg-zinc-900/50 border-lime-900/20 backdrop-blur-sm hover:border-lime-600/50 transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-lime-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center space-x-4 pt-6 border-t border-lime-900/20">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                      <p className="text-lime-500 text-xs mt-1">{testimonial.project}</p>
                    </div>
                  </div>
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
            Ready to Create Your Dream Cinema?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our experts. Let's discuss your vision 
            and create a personalized home cinema solution for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-10 py-6 text-lg shadow-lg shadow-lime-600/30 hover:shadow-lime-600/50 transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href={`tel:${businessInfo.phone}`}>
              <Button size="lg" variant="outline" className="border-2 border-lime-600 text-lime-500 hover:bg-lime-600/10 px-10 py-6 text-lg transition-all duration-300">
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
