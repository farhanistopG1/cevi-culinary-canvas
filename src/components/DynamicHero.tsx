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
    <section className="relative min-h-[65vh] flex items-end pb-8 overflow-hidden bg-gradient-to-b from-background to-background/95">
      {/* Subtle background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
      
      {/* Compact hero content - Apple style */}
      <div className="relative z-10 w-full px-4 max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-3"
        >
          {/* Tight title - 18-36px range */}
          <h1 
            className="font-serif font-bold text-foreground leading-[1.1] tracking-tight"
            style={{ fontSize: 'clamp(1.125rem, 4.5vw, 2.25rem)' }}
          >
            {config.name}
          </h1>

          {/* Compact tagline */}
          <p 
            className="text-primary/90 font-medium uppercase tracking-wide"
            style={{ fontSize: 'clamp(0.75rem, 2vw, 0.875rem)', letterSpacing: '0.1em' }}
          >
            {config.tagline}
          </p>

          {/* Concise description */}
          <p 
            className="text-muted-foreground leading-snug max-w-xl"
            style={{ fontSize: 'clamp(0.875rem, 2vw, 1rem)' }}
          >
            {config.description}
          </p>

          {/* Compact cuisine tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {config.cuisines.slice(0, 3).map((cuisine, index) => (
              <span
                key={index}
                className="px-2 py-0.5 bg-primary/10 rounded text-xs text-foreground/80"
              >
                {cuisine}
              </span>
            ))}
          </div>

          {/* Tight CTA buttons */}
          <div className="flex gap-2 pt-3">
            <Button
              onClick={handleReservation}
              className="flex-1 h-11 bg-primary hover:bg-primary/90 text-primary-foreground font-medium text-sm rounded-lg shadow-sm"
            >
              <Phone className="mr-1.5 h-4 w-4" />
              Call Now
            </Button>

            <Button
              onClick={scrollToAbout}
              variant="outline"
              className="flex-1 h-11 border-primary/30 text-foreground hover:bg-primary/5 font-medium text-sm rounded-lg"
            >
              <Utensils className="mr-1.5 h-4 w-4" />
              View Analysis
            </Button>
          </div>

          {/* Compact highlights */}
          <div className="flex gap-2 pt-2 text-xs">
            {config.highlights.slice(0, 2).map((highlight, index) => (
              <div
                key={index}
                className="flex items-center gap-1 px-2 py-1 bg-primary/5 rounded text-foreground/70"
              >
                {highlight.includes('★') && <span className="text-primary">★</span>}
                <span>{highlight}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Minimal scroll hint */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-muted-foreground/50"
      >
        <ChevronDown className="w-5 h-5" />
      </motion.button>
    </section>
  );
};

export default DynamicHero;
