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
    <section className="relative min-h-[55vh] flex items-center overflow-hidden bg-gradient-to-b from-background via-background to-background/80">
      {/* Premium subtle gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent" />
      
      {/* Content with proper top spacing */}
      <div className="relative z-10 w-full px-5 pt-12 pb-8 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="space-y-4"
        >
          {/* Premium title - 20-32px */}
          <h1 
            className="font-serif font-bold text-foreground leading-[1.15] tracking-tight"
            style={{ fontSize: 'clamp(1.25rem, 4vw, 2rem)' }}
          >
            {config.name}
          </h1>

          {/* Subtle tagline */}
          <p 
            className="text-primary font-medium uppercase tracking-widest opacity-90"
            style={{ fontSize: 'clamp(0.688rem, 1.8vw, 0.813rem)', letterSpacing: '0.12em' }}
          >
            {config.tagline}
          </p>

          {/* Concise description */}
          <p 
            className="text-muted-foreground leading-relaxed opacity-85"
            style={{ fontSize: 'clamp(0.875rem, 2.2vw, 1rem)' }}
          >
            {config.description}
          </p>

          {/* Minimal cuisine tags */}
          <div className="flex flex-wrap gap-1.5">
            {config.cuisines.slice(0, 3).map((cuisine, index) => (
              <span
                key={index}
                className="px-2.5 py-1 bg-primary/8 rounded-md text-xs font-medium text-foreground/75"
              >
                {cuisine}
              </span>
            ))}
          </div>

          {/* Premium CTAs - Apple spacing */}
          <div className="flex gap-2.5 pt-2">
            <Button
              onClick={handleReservation}
              className="flex-1 h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-sm transition-all active:scale-[0.98]"
              style={{ fontSize: 'clamp(0.875rem, 2.2vw, 0.938rem)' }}
            >
              <Phone className="mr-2 h-4 w-4" />
              Call {config.phone}
            </Button>

            <Button
              onClick={scrollToAbout}
              variant="outline"
              className="flex-1 h-12 border-2 border-primary/25 text-foreground hover:bg-primary/5 hover:border-primary/40 font-semibold rounded-xl transition-all active:scale-[0.98]"
              style={{ fontSize: 'clamp(0.875rem, 2.2vw, 0.938rem)' }}
            >
              <Utensils className="mr-2 h-4 w-4" />
              View Menu
            </Button>
          </div>

          {/* Compact highlights */}
          {config.highlights && config.highlights.length > 0 && (
            <div className="flex gap-2 pt-1">
              {config.highlights.slice(0, 2).map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 bg-primary/5 rounded-lg"
                >
                  {highlight.includes('★') && (
                    <span className="text-primary text-sm">★</span>
                  )}
                  <span className="text-xs font-medium text-foreground/70">{highlight}</span>
                </div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Subtle scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-muted-foreground"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-5 h-5" />
      </motion.button>
    </section>
  );
};

export default DynamicHero;
