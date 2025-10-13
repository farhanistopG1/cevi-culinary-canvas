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

      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-radial from-primary/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-serif font-bold text-foreground mb-4 sm:mb-6 tracking-tight">
            {config.name}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <p className="text-2xl sm:text-3xl md:text-4xl font-serif text-primary mb-3 sm:mb-4 tracking-widest uppercase">
            {config.tagline}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto">
            {config.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {config.cuisines.map((cuisine, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-sm font-medium text-foreground border border-primary/20"
              >
                {cuisine}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center"
        >
          <Button
            onClick={handleReservation}
            size="lg"
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Call {config.phone}
          </Button>

          <Button
            onClick={scrollToAbout}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-2 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <Utensils className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Explore Menu
          </Button>
        </motion.div>

        {/* Rating badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 sm:mt-16 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-6 px-4"
        >
          {config.highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-primary/20"
            >
              {highlight.includes('★') && (
                <span className="text-primary text-2xl sm:text-xl font-bold">★</span>
              )}
              <span className="font-bold text-base sm:text-sm text-foreground">{highlight}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        aria-label="Scroll to About section"
      >
        <ChevronDown className="w-8 h-8 animate-bounce" />
      </motion.button>
    </section>
  );
};

export default DynamicHero;
