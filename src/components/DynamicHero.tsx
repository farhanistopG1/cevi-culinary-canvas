import { motion } from "motion/react";
import { Phone, Utensils, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RestaurantConfig } from "@/types/restaurant";

interface DynamicHeroProps {
  config: RestaurantConfig;
}

const DynamicHero = ({ config }: DynamicHeroProps) => {
  const handleReservation = () => {
    window.location.href = `tel:${config.phone}`;
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Simplified gradient background - better performance */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-primary/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* FIXED: Fluid typography with clamp() */}
          <h1 
            className="font-serif font-bold text-foreground mb-4 tracking-tight leading-tight"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 5rem)' }}
          >
            {config.name}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* FIXED: Smaller tagline, better mobile readability */}
          <p 
            className="font-serif text-primary mb-3 tracking-widest uppercase leading-snug"
            style={{ fontSize: 'clamp(1rem, 3vw, 1.5rem)' }}
          >
            {config.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* FIXED: Better contrast, readable on mobile */}
          <p 
            className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' }}
          >
            {config.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-6"
        >
          {/* FIXED: Better wrapping on small screens */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {config.cuisines.map((cuisine, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-primary/10 backdrop-blur-sm rounded-full text-sm font-medium text-foreground border border-primary/20"
              >
                {cuisine}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center"
        >
          {/* FIXED: Guaranteed 48px touch target on all devices */}
          <Button
            onClick={handleReservation}
            size="lg"
            className="w-full sm:w-auto min-h-[48px] bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base px-6 py-3 rounded-xl shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-95"
          >
            <Phone className="mr-2 h-5 w-5" />
            Call {config.phone}
          </Button>

          <Button
            onClick={scrollToAbout}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto min-h-[48px] border-2 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary font-semibold text-base px-6 py-3 rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-95"
          >
            <Utensils className="mr-2 h-5 w-5" />
            Explore Menu
          </Button>
        </motion.div>

        {/* Rating badges - better mobile layout */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2 sm:gap-4"
        >
          {config.highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-primary/20"
            >
              {highlight.includes('★') && (
                <span className="text-primary text-xl font-bold">★</span>
              )}
              <span className="font-bold text-sm text-foreground">{highlight}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 text-muted-foreground hover:text-primary transition-colors cursor-pointer p-2"
        aria-label="Scroll to About section"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </motion.button>
    </section>
  );
};

export default DynamicHero;
