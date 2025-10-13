import { useState, useEffect } from 'react';
import { RestaurantConfig } from '@/types/restaurant';

export const useRestaurantConfig = (restaurantId: string = 'cevi') => {
  const [config, setConfig] = useState<RestaurantConfig | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadConfig = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/clients/${restaurantId}.json`);
        
        if (!response.ok) {
          throw new Error(`Failed to load restaurant config: ${response.statusText}`);
        }
        
        const data: RestaurantConfig = await response.json();
        setConfig(data);
        setError(null);
      } catch (err) {
        console.error('Error loading restaurant config:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
        setConfig(null);
      } finally {
        setLoading(false);
      }
    };

    loadConfig();
  }, [restaurantId]);

  return { config, loading, error };
};
