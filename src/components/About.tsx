import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Utensils, Award, Sparkles } from "lucide-react";
import grilledKebabPlatter from "@/assets/grilled-kebab-platter.png";
import redTandooriDish from "@/assets/red-tandoori-dish.png";

const About = () => {
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
            A Culinary Journey Through India
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            At CEVI, we celebrate the rich tapestry of Indian cuisine by bringing together the finest flavors from North India, 
            the coastal regions, Bengal, and Continental traditions. Each dish is a testament to our commitment to authenticity, 
            crafted with traditional recipes and presented with a modern flair.
          </p>
        </motion.div>

        {/* Feature images */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16"
        >
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl group">
            <img
              src={grilledKebabPlatter}
              alt="Signature Grilled Kebab Platter"
              className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6 sm:p-8">
              <p className="text-lg sm:text-xl font-serif text-foreground">Our Signature Kebabs</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl group">
            <img
              src={redTandooriDish}
              alt="Authentic Tandoori Specialties"
              className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent flex items-end p-6 sm:p-8">
              <p className="text-lg sm:text-xl font-serif text-foreground">Coastal Delicacies</p>
            </div>
          </div>
        </motion.div>

        {/* Info cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Philosophy card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-card/50 backdrop-blur-lg border-border/50 hover:border-primary/50 transition-all duration-300 h-full group hover:shadow-gold">
              <CardHeader>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-serif text-foreground">Our Philosophy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  "Food for the Senses" isn't just our tagline—it's our promise. Every dish is designed to create 
                  a multisensory experience, from the aromatic spices to the visual presentation, engaging all your senses 
                  in a symphony of flavors.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Signature Dishes card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="bg-card/50 backdrop-blur-lg border-border/50 hover:border-primary/50 transition-all duration-300 h-full group hover:shadow-gold sm:col-span-2 md:col-span-1">
              <CardHeader>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                  <Utensils className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-serif text-foreground">Signature Dishes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Kundapura Sukha Paneer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Stuffed Tangdi Kebab</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Chicken 65 Neer Dosa with Ghee Roast</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Cheese Chilli Cigar Rolls</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Patrani Machhi</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Bengali Fish Cutlet</span>
                  </li>
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
            <Card className="bg-card/50 backdrop-blur-lg border-border/50 hover:border-primary/50 transition-all duration-300 h-full group hover:shadow-gold sm:col-span-2 md:col-span-1">
              <CardHeader>
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-primary/20 transition-colors">
                  <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-serif text-foreground">The Experience</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  Step into our warm, brick-accented space where subtle lighting creates an intimate atmosphere. 
                  Our modern casual setting perfectly complements the traditional flavors we serve, making CEVI 
                  the ideal destination for both special celebrations and casual dining.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Location info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-12 sm:mt-16 text-center px-4"
        >
          <div className="inline-block w-full sm:w-auto bg-card/30 backdrop-blur-lg border border-border/50 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl sm:text-2xl font-serif text-foreground mb-3 sm:mb-4">Visit Us</h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-2">1508, 19th Main, Sector-1, HSR Layout</p>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">Bangalore - 560102</p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center text-xs sm:text-sm text-muted-foreground">
              <div>
                <span className="text-primary font-semibold">Lunch:</span> 11:00 AM - 3:30 PM
              </div>
              <div className="hidden sm:block border-l border-border" />
              <div>
                <span className="text-primary font-semibold">Dinner:</span> 6:30 PM - 10:30 PM
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

export default About;
