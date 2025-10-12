import Hero from "@/components/Hero";
import About from "@/components/About";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <About />
      <FloatingCTA />
    </main>
  );
};

export default Index;
