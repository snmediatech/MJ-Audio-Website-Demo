import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { brands } from '../mock';

export const BrandsPage = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden bg-gradient-to-b from-zinc-950 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
          <Badge className="mb-6 bg-lime-600/20 text-lime-500 border-lime-600/50">
            Premium Partners
          </Badge>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl">
            World-Class Brands
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600 mt-2">
              We Work With
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl leading-relaxed">
            Authorized partners of the world's leading audio-visual brands. 
            We bring you genuine products backed by manufacturer warranties and expert support.
          </p>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {brands.map((brand, index) => (
              <Card key={index} className="bg-zinc-900/50 border-lime-900/20 backdrop-blur-sm hover:border-lime-600/50 transition-all duration-300 group">
                <CardContent className="p-10 text-center">
                  {/* Brand Logo */}
                  <div className="w-full h-24 bg-zinc-800/30 rounded-xl flex items-center justify-center mx-auto mb-6 p-4 group-hover:bg-zinc-800/50 transition-colors duration-300">
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-lime-500 transition-colors duration-300">
                    {brand.name}
                  </h3>
                  
                  <p className="text-lime-500 text-sm mb-4">
                    {brand.category}
                  </p>

                  <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
                    <CheckCircle className="w-4 h-4 text-lime-500" />
                    <span>Authorized Partner</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Info Section */}
          <div className="mt-20">
            <Card className="bg-zinc-900/50 border-lime-900/20 backdrop-blur-sm">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold text-white mb-6">
                  Why Brand Partnership Matters
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                  <div>
                    <div className="w-12 h-12 bg-lime-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-6 h-6 text-lime-500" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Genuine Products</h3>
                    <p className="text-gray-400 text-sm">100% authentic products with manufacturer warranties</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-lime-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-6 h-6 text-lime-500" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Expert Support</h3>
                    <p className="text-gray-400 text-sm">Manufacturer-backed technical support and service</p>
                  </div>
                  <div>
                    <div className="w-12 h-12 bg-lime-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-6 h-6 text-lime-500" />
                    </div>
                    <h3 className="text-white font-semibold mb-2">Best Pricing</h3>
                    <p className="text-gray-400 text-sm">Competitive pricing with exclusive partner benefits</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-lime-900/20 via-lime-800/10 to-lime-900/20 border-y border-lime-900/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Ready to Experience Premium Quality?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Get expert recommendations on the best brands and products for your home cinema
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-10 py-6 text-lg shadow-lg shadow-lime-600/30">
              Schedule Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
