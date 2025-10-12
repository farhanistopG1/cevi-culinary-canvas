import { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleCall = () => {
    window.location.href = "tel:+919901560088";
  };

  const handleWhatsApp = () => {
    window.open("https://wa.me/919901560088", "_blank");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-50 flex flex-col gap-3"
        >
          {/* WhatsApp Button */}
          <Button
            onClick={handleWhatsApp}
            size="lg"
            className="rounded-full w-14 h-14 shadow-gold bg-green-deep hover:bg-green-deep/90 text-foreground p-0"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="w-6 h-6" />
          </Button>

          {/* Call Button */}
          <Button
            onClick={handleCall}
            size="lg"
            className="rounded-full w-14 h-14 shadow-gold bg-primary hover:bg-primary/90 text-primary-foreground p-0"
            aria-label="Call restaurant"
          >
            <Phone className="w-6 h-6" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingCTA;
