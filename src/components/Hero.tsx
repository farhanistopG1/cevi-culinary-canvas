import { motion } from "motion/react";
import { Phone, Utensils, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Floating, { FloatingElement } from "@/components/parallax-floating";
import restaurantExteriorNeon from "@/assets/restaurant-exterior-neon.png";
import grilledKebabPlatter from "@/assets/grilled-kebab-platter.png";
import redTandooriDish from "@/assets/red-tandoori-dish.png";
import greenCheeseKebabs from "@/assets/green-cheese-kebabs.png";
import restaurantExteriorEvening from "@/assets/restaurant-exterior-evening.png";

const Hero = () => {
  const handleReservation = () => {
    window.location.href = "tel:+919901560088";
  };

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Grain overlay */}
      <div className="grain-overlay" />

      {/* Parallax floating images - reduced opacity on mobile */}
      <Floating sensitivity={-1} easingFactor={0.05} className="z-0 hidden md:block">
        <FloatingElement depth={0.5} className="top-[10%] left-[5%] w-48 h-48 md:w-64 md:h-64 opacity-70">
          <motion.img
            src={restaurantExteriorEvening}
            alt="CEVI Restaurant Exterior Evening"
            className="w-full h-full object-cover rounded-2xl shadow-elegant transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.7, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </FloatingElement>

        <FloatingElement depth={1} className="top-[15%] right-[8%] w-56 h-56 md:w-72 md:h-72 opacity-80">
          <motion.img
            src={restaurantExteriorNeon}
            alt="CEVI Restaurant Neon Sign"
            className="w-full h-full object-cover rounded-2xl shadow-gold transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </FloatingElement>

        <FloatingElement depth={2} className="top-[60%] left-[10%] w-52 h-52 md:w-64 md:h-64 opacity-85">
          <motion.img
            src={grilledKebabPlatter}
            alt="Grilled Kebab Platter with Green Chutney"
            className="w-full h-full object-cover rounded-2xl shadow-elegant transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.85, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </FloatingElement>

        <FloatingElement depth={4} className="top-[65%] right-[12%] w-48 h-48 md:w-60 md:h-60 opacity-90">
          <motion.img
            src={redTandooriDish}
            alt="Red Tandoori Dish with Curry Leaves"
            className="w-full h-full object-cover rounded-2xl shadow-elegant transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.9, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </FloatingElement>

        <FloatingElement depth={1} className="bottom-[15%] left-[50%] -translate-x-1/2 w-44 h-44 md:w-56 md:h-56 opacity-75">
          <motion.img
            src={greenCheeseKebabs}
            alt="Green Cheese Filled Kebabs"
            className="w-full h-full object-cover rounded-2xl shadow-elegant transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.75, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </FloatingElement>
      </Floating>

      {/* Mobile-optimized background images */}
      <div className="absolute inset-0 z-0 md:hidden opacity-20">
        <motion.img
          src={restaurantExteriorNeon}
          alt="CEVI Restaurant"
          className="absolute top-10 right-0 w-40 h-40 object-cover rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 0.8 }}
        />
        <motion.img
          src={grilledKebabPlatter}
          alt="Grilled Kebab Platter"
          className="absolute bottom-32 left-0 w-36 h-36 object-cover rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl sm:text-7xl md:text-9xl font-serif font-bold text-foreground mb-4 sm:mb-6 tracking-tight">
            CEVI
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          <p className="text-xl sm:text-2xl md:text-3xl font-serif text-gold mb-3 sm:mb-4 tracking-widest">
            FOOD FOR THE SENSES
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-8 sm:mb-12 max-w-2xl mx-auto">
            Where Flavors Tell Stories
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto px-2"
        >
          <Button
            onClick={handleReservation}
            size="lg"
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl shadow-gold transition-all duration-300 active:scale-95 sm:hover:scale-105 touch-manipulation"
          >
            <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Reserve Your Table
          </Button>

          <Button
            onClick={scrollToAbout}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto border-2 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary font-semibold text-base sm:text-lg px-6 sm:px-8 py-5 sm:py-6 rounded-xl transition-all duration-300 active:scale-95 sm:hover:scale-105 touch-manipulation"
          >
            <Utensils className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            View Menu
          </Button>
        </motion.div>

        {/* Social proof badges - prominent and bold */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10 sm:mt-16 px-4"
        >
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
            <div className="flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-lg border border-primary/20">
              <span className="text-gold text-2xl sm:text-3xl">★</span>
              <span className="text-foreground font-bold text-base sm:text-lg md:text-xl">4.4/5 Rated</span>
            </div>
            <div className="flex items-center gap-2 bg-primary/10 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-lg border border-primary/20">
              <span className="text-foreground font-bold text-base sm:text-lg md:text-xl">992+ Happy Diners</span>
            </div>
            <div className="flex items-center gap-2 bg-gold/20 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-lg border border-gold/30">
              <span className="text-gold font-bold text-base sm:text-lg md:text-xl text-center">No 1 in HSR for Kundapura Cuisine</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 text-muted-foreground hover:text-primary active:text-primary transition-colors cursor-pointer touch-manipulation"
        aria-label="Scroll to About section"
      >
        <ChevronDown className="w-7 h-7 sm:w-8 sm:h-8 animate-bounce" />
      </motion.button>
    </section>
  );
};

export default Hero;
