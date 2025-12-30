import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { MapPin, Phone, Clock, Mail, MessageCircle, Send } from 'lucide-react';
import { businessInfo } from '../mock';
import { useToast } from '../hooks/use-toast';

export const ContactPage = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    toast({
      title: "Enquiry Submitted!",
      description: "We'll get back to you within 24 hours.",
    });
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      service: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1746439324737-2c9f9a3e81a6"
            alt="Contact"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/70"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10">
          <Badge className="mb-6 bg-lime-600/20 text-lime-500 border-lime-600/50">
            Get In Touch
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Let's Create Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600 mt-2">
              Dream Cinema
            </span>
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Visit our showroom or reach out to us. We're here to help you build the perfect home theater experience.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gradient-to-b from-black to-zinc-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <Card className="bg-zinc-900/50 border-lime-900/20 backdrop-blur-sm hover:border-lime-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-lime-600/10">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-lime-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-lime-500" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <a href={`tel:${businessInfo.phone}`} className="text-gray-400 hover:text-lime-500 transition-colors duration-300 text-sm">
                  {businessInfo.phone}
                </a>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50 border-lime-900/20 backdrop-blur-sm hover:border-lime-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-lime-600/10">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-lime-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-lime-500" />
                </div>
                <h3 className="text-white font-semibold mb-2">WhatsApp</h3>
                <a href={`https://wa.me/${businessInfo.whatsapp}?text=Hi, I'm interested in home theater installation`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-lime-500 transition-colors duration-300 text-sm">
                  Chat with us
                </a>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50 border-lime-900/20 backdrop-blur-sm hover:border-lime-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-lime-600/10">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-lime-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-lime-500" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <a href={`mailto:${businessInfo.email}`} className="text-gray-400 hover:text-lime-500 transition-colors duration-300 text-sm">
                  {businessInfo.email}
                </a>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900/50 border-lime-900/20 backdrop-blur-sm hover:border-lime-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-lime-600/10">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-lime-600/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-lime-500" />
                </div>
                <h3 className="text-white font-semibold mb-2">Hours</h3>
                <p className="text-gray-400 text-sm">{businessInfo.hours}</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card className="bg-zinc-900/50 border-lime-900/20 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-gray-300 mb-2 block">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-zinc-800 border-lime-900/30 text-white focus:border-lime-600 transition-colors duration-300"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-gray-300 mb-2 block">Phone Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-zinc-800 border-lime-900/30 text-white focus:border-lime-600 transition-colors duration-300"
                      placeholder="Enter your phone"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-gray-300 mb-2 block">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-zinc-800 border-lime-900/30 text-white focus:border-lime-600 transition-colors duration-300"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <Label htmlFor="service" className="text-gray-300 mb-2 block">Service Interested In</Label>
                    <Input
                      id="service"
                      name="service"
                      type="text"
                      value={formData.service}
                      onChange={handleChange}
                      className="bg-zinc-800 border-lime-900/30 text-white focus:border-lime-600 transition-colors duration-300"
                      placeholder="e.g., Dolby Atmos Setup"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-300 mb-2 block">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-zinc-800 border-lime-900/30 text-white focus:border-lime-600 transition-colors duration-300 resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-lime-600 hover:bg-lime-700 text-white transition-all duration-300 shadow-lg shadow-lime-600/30 hover:shadow-lime-600/50">
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Address */}
            <div className="space-y-8">
              <Card className="bg-zinc-900/50 border-lime-900/20 backdrop-blur-sm">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 bg-lime-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-lime-500" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Visit Our Showroom</h3>
                      <p className="text-gray-400 leading-relaxed">{businessInfo.address}</p>
                    </div>
                  </div>
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=MJ+Audio+Tirunelveli" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="w-full border-lime-600/50 text-lime-500 hover:bg-lime-600/10 transition-all duration-300">
                      Get Directions
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* Google Maps Embed */}
              <Card className="bg-zinc-900/50 border-lime-900/20 backdrop-blur-sm overflow-hidden">
                <div className="w-full h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.8!2d77.7!3d8.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNDInMDAuMCJOIDc3wrA0MicwMC4wIkU!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="MJ Audio Location"
                  ></iframe>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-lime-900/20 via-lime-800/10 to-lime-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-gray-300 mb-6">
            Call us now or send a WhatsApp message for quick response
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${businessInfo.phone}`}>
              <Button size="lg" className="bg-lime-600 hover:bg-lime-700 text-white px-8 py-6 shadow-lg shadow-lime-600/30 transition-all duration-300">
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </Button>
            </a>
            <a href={`https://wa.me/${businessInfo.whatsapp}?text=Hi, I need assistance with home theater installation`} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-2 border-lime-600 text-lime-500 hover:bg-lime-600/10 px-8 py-6 transition-all duration-300">
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
