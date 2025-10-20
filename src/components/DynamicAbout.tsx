import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Award, Sparkles, MapPin } from "lucide-react";
import { RestaurantConfig } from "@/types/restaurant";

interface DynamicAboutProps {
  config: RestaurantConfig;
}

const DynamicAbout = ({ config }: DynamicAboutProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const element = document.getElementById("about");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="about" className="relative py-16 sm:py-24 px-4 sm:px-6 bg-gradient-to-b from-background to-background/95">
      {/* Grain overlay */}
      <div className="grain-overlay" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-4 sm:mb-6">
            Experience {config.name}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            {config.philosophy}
          </p>
        </motion.div>

        {/* Info cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {/* Philosophy card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-card/50 backdrop-blur-lg border-border/50 hover:border-primary/50 transition-all duration-300 h-full group hover:shadow-lg">
              <CardHeader>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-serif text-foreground">Our Cuisines</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {config.cuisines.map((cuisine, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 rounded-md text-sm text-foreground"
                    >
                      {cuisine}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Signature Dishes card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-card/50 backdrop-blur-lg border-border/50 hover:border-primary/50 transition-all duration-300 h-full group hover:shadow-lg sm:col-span-2 md:col-span-1">
              <CardHeader>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                  <Utensils className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-serif text-foreground">Signature Dishes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                  {config.signatureDishes.slice(0, 6).map((dish, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{dish.name}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>

          {/* Experience card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Card className="bg-card/50 backdrop-blur-lg border-border/50 hover:border-primary/50 transition-all duration-300 h-full group hover:shadow-lg sm:col-span-2 md:col-span-1">
              <CardHeader>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-serif text-foreground">The Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {config.experience}
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Special Offers (if available) */}
        {config.specialOffers && config.specialOffers.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mb-12 sm:mb-16"
          >
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl font-serif text-foreground text-center">
                  Special Offers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {config.specialOffers.map((offer, index) => (
                    <li key={index} className="flex items-start text-sm sm:text-base text-foreground">
                      <span className="text-primary mr-2 text-xl">🎉</span>
                      <span>{offer}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Location info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 sm:mt-16 text-center px-4"
        >
          <div className="inline-block w-full sm:w-auto bg-card/30 backdrop-blur-lg border border-border/50 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-6 h-6 text-primary" />
              <h3 className="text-xl sm:text-2xl font-serif text-foreground">Visit Us</h3>
            </div>
            <p className="text-sm sm:text-base text-muted-foreground mb-2">{config.address.street}</p>
            <p className="text-sm sm:text-base text-muted-foreground mb-2">{config.address.area}</p>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              {config.address.city} - {config.address.pincode}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center text-xs sm:text-sm text-muted-foreground">
              <div>
                <span className="text-primary font-semibold">Lunch:</span> {config.hours.lunch}
              </div>
              <div className="hidden sm:block border-l border-border" />
              <div>
                <span className="text-primary font-semibold">Dinner:</span> {config.hours.dinner}
              </div>
            </div>
            <p className="mt-4 text-xs sm:text-sm text-muted-foreground italic">
              Reservations recommended • Walk-ins welcome
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DynamicAbout;
