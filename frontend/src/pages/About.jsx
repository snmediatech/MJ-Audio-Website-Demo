import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Award, Target, Eye, Heart, Users, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import { stats, expertise, aboutContent, businessInfo } from '../mock';

export const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-zinc-950 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
          <Badge className="mb-6 bg-lime-600/20 text-lime-500 border-lime-600/50">
            About MJ Audio
          </Badge>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl">
            Crafting Cinematic Experiences
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600 mt-2">
              Since {businessInfo.established}
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            We are South India's premier home theater specialists, dedicated to transforming 
            ordinary spaces into extraordinary cinema experiences through expert design, 
            installation, and calibration.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Founded in {businessInfo.established}, MJ Audio began with a singular vision: 
                to bring cinema-grade audio-visual experiences into homes across South India. 
                What started as a passion project has evolved into a trusted name synonymous 
                with excellence in home theater solutions.
              </p>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Over the years, we've completed more than {stats[1].value} premium home cinema 
                installations, each one meticulously designed and calibrated to deliver an 
                unparalleled viewing experience. Our commitment to quality, innovation, and 
                customer satisfaction has made us the preferred choice for discerning clients.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Today, MJ Audio stands as a beacon of expertise in home theater design, 
                installation, and calibration, backed by industry certifications and partnerships 
                with world's leading audio-visual brands.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="bg-zinc-900/50 border-lime-900/20 backdrop-blur-sm hover:border-lime-600/50 transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="text-5xl font-bold text-lime-500 mb-2">{stat.value}</div>
                    <div className="text-gray-400">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="bg-zinc-900/50 border-lime-900/20 backdrop-blur-sm">
              <CardContent className="p-10">
                <div className="w-16 h-16 bg-lime-600/20 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-lime-500" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {aboutContent.mission}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50 border-lime-900/20 backdrop-blur-sm">
              <CardContent className="p-10">
                <div className="w-16 h-16 bg-lime-600/20 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-lime-500" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-6">Our Vision</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {aboutContent.vision}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-lime-600/20 text-lime-500 border-lime-600/50">
              Our Values
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aboutContent.values.map((value, index) => (
              <Card key={index} className="bg-zinc-900/30 border-lime-900/20 backdrop-blur-sm hover:border-lime-600/50 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 bg-lime-600/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-lime-600/30 transition-colors duration-300">
                    <CheckCircle className="w-6 h-6 text-lime-500" />
                  </div>
                  <p className="text-white font-semibold text-lg">{value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-lime-600/20 text-lime-500 border-lime-600/50">
              Our Expertise
            </Badge>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Why Clients Trust Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((item, index) => {
              const iconMap = { Award, Users, TrendingUp, Heart };
              const IconComponent = iconMap[item.icon] || Award;
              return (
                <Card key={index} className="bg-zinc-900/50 border-lime-900/20 backdrop-blur-sm hover:border-lime-600/50 transition-all duration-300 group">
                  <CardContent className="p-8 flex items-start space-x-6">
                    <div className="w-14 h-14 bg-lime-600/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-lime-600/30 transition-colors duration-300">
                      <IconComponent className="w-7 h-7 text-lime-500" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-lime-500 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-lime-900/20 via-lime-800/10 to-lime-900/20 border-y border-lime-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Let's Build Your Dream Cinema Together
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Experience the MJ Audio difference. Schedule a consultation to discuss your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-10 py-6 text-lg shadow-lg shadow-lime-600/30 hover:shadow-lime-600/50 transition-all duration-300">
                Contact Us Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="border-2 border-lime-600 text-lime-500 hover:bg-lime-600/10 px-10 py-6 text-lg transition-all duration-300">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
