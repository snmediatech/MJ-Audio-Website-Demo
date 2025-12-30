import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Badge } from '../components/ui/badge';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { brands } from '../mock';

export const BrandsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      slidesToScroll: 1,
      breakpoints: {
        '(min-width: 1024px)': { slidesToScroll: 1 },
        '(min-width: 768px)': { slidesToScroll: 1 },
      }
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (emblaApi) {
      // Optional: Add event listeners if needed
    }
  }, [emblaApi]);

  return (
    <section className="py-24 bg-zinc-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-lime-600/20 text-lime-500 border-lime-600/50">
            Premium Partners
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Brands
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Authorized partners of world-class audio-visual brands
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {brands.map((brand, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 lg:w-1/5"
                  style={{ minWidth: 0 }}
                >
                  <div className="bg-zinc-900/50 backdrop-blur-md border border-lime-900/20 rounded-2xl p-8 hover:border-lime-600/50 hover:shadow-lg hover:shadow-lime-600/10 transition-all duration-300 group h-full flex items-center justify-center">
                    <div className="relative w-full h-24 flex items-center justify-center">
                      <img
                        src={brand.logo}
                        alt={brand.name}
                        className="max-w-full max-h-full object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-zinc-900/90 backdrop-blur-sm border border-lime-900/30 rounded-full flex items-center justify-center text-lime-500 hover:bg-lime-600 hover:text-white hover:border-lime-600 transition-all duration-300 shadow-lg z-10"
            aria-label="Previous brands"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-zinc-900/90 backdrop-blur-sm border border-lime-900/30 rounded-full flex items-center justify-center text-lime-500 hover:bg-lime-600 hover:text-white hover:border-lime-600 transition-all duration-300 shadow-lg z-10"
            aria-label="Next brands"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Text */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-sm max-w-3xl mx-auto">
            We are proud authorized partners of leading audio-visual brands, ensuring genuine products, 
            manufacturer warranties, and expert technical support for all our installations.
          </p>
        </div>
      </div>
    </section>
  );
};
