import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, CheckCircle, TrendingUp } from "lucide-react";

interface DynamicAboutProps {
  config: {
    restaurantName: string;
    hero: {
      title: string;
      subtitle: string;
    };
    analysis: {
      summary: string;
      keyIssues: string[];
      recommendations: string[];
    };
    cta: {
      primary: string;
      secondary: string;
    };
  };
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
    <section id="about" className="relative py-12 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-background to-background/95">
      {/* Grain overlay */}
      <div className="grain-overlay" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 
            className="font-serif font-bold text-foreground mb-3 sm:mb-4 leading-tight"
            style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)' }}
          >
            Website Analysis Summary
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-4 sm:mb-6" />
          <p 
            className="text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)' }}
          >
            {config.analysis.summary}
          </p>
        </motion.div>

        {/* Key Issues Card */}
        {config.analysis.keyIssues && config.analysis.keyIssues.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <Card className="bg-card/50 backdrop-blur-lg border-border/50 hover:border-red-500/30 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-500/10 rounded-lg flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                  </div>
                  <CardTitle 
                    className="font-serif text-foreground"
                    style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)' }}
                  >
                    Critical Issues Found
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {config.analysis.keyIssues.map((issue, index) => (
                    <li key={index} className="flex items-start gap-3 group/item">
                      <span className="text-red-500 mt-1 flex-shrink-0">•</span>
                      <span 
                        className="text-muted-foreground group-hover/item:text-foreground transition-colors leading-relaxed"
                        style={{ fontSize: 'clamp(0.9rem, 2.2vw, 1rem)' }}
                      >
                        {issue}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Recommendations Card */}
        {config.analysis.recommendations && config.analysis.recommendations.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-6"
          >
            <Card className="bg-card/50 backdrop-blur-lg border-border/50 hover:border-green-500/30 transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/10 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <CardTitle 
                    className="font-serif text-foreground"
                    style={{ fontSize: 'clamp(1.25rem, 3vw, 1.5rem)' }}
                  >
                    Recommended Fixes
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {config.analysis.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start gap-3 group/item">
                      <span className="text-green-500 mt-1 flex-shrink-0">✓</span>
                      <span 
                        className="text-muted-foreground group-hover/item:text-foreground transition-colors leading-relaxed"
                        style={{ fontSize: 'clamp(0.9rem, 2.2vw, 1rem)' }}
                      >
                        {rec}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 sm:mt-12"
        >
          <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
            <CardContent className="py-6 sm:py-8 text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <TrendingUp className="w-6 h-6 text-primary" />
                <h3 
                  className="font-serif text-foreground"
                  style={{ fontSize: 'clamp(1.25rem, 3.5vw, 1.75rem)' }}
                >
                  Ready to Transform Your Website?
                </h3>
              </div>
              <p 
                className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed"
                style={{ fontSize: 'clamp(0.9rem, 2.2vw, 1.05rem)' }}
              >
                We can fix these issues in 24-48 hours and get you ranking higher on Google.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                
                  href="tel:+919606171365"
                  className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-95"
                  style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)' }}
                >
                  {config.cta.primary}
                </a>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="inline-flex items-center justify-center min-h-[48px] px-6 py-3 border-2 border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary font-semibold rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-95"
                  style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.05rem)' }}
                >
                  {config.cta.secondary}
                </button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default DynamicAbout;
