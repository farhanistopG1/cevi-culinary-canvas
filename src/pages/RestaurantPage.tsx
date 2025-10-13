import { useParams } from "react-router-dom";
import { useRestaurantConfig } from "@/hooks/useRestaurantConfig";
import DynamicHero from "@/components/DynamicHero";
import DynamicAbout from "@/components/DynamicAbout";
import FloatingCTA from "@/components/FloatingCTA";

const RestaurantPage = () => {
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const { config, loading, error } = useRestaurantConfig(restaurantId || 'cevi');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading restaurant...</p>
        </div>
      </div>
    );
  }

  if (error || !config) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Restaurant Not Found</h1>
          <p className="text-muted-foreground mb-8">{error || 'Unable to load restaurant configuration'}</p>
          <a href="/" className="text-primary hover:underline">Return to Home</a>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background" style={{
      '--primary-color': config.theme.primaryColor,
      '--secondary-color': config.theme.secondaryColor,
      '--accent-color': config.theme.accentColor,
    } as React.CSSProperties}>
      <DynamicHero config={config} />
      <DynamicAbout config={config} />
      <FloatingCTA phone={config.phone} />
    </main>
  );
};

export default RestaurantPage;
