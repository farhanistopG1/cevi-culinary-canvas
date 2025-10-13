# Multi-Restaurant Platform - Deployment Guide

## 🎯 Overview
This is a dynamic multi-restaurant platform built with React, TypeScript, and Vite. Each restaurant has its own configuration and can be accessed via a unique URL.

## 🏪 Current Restaurants
1. **CEVI** - `/cevi` or `/`
2. **Coal Spark** - `/coal-spark`

## 📁 Project Structure

```
public/
  clients/
    cevi.json          # CEVI restaurant configuration
    coal-spark.json    # Coal Spark restaurant configuration
    cevi/              # CEVI images
    coal-spark/        # Coal Spark images
src/
  components/
    DynamicHero.tsx    # Dynamic hero component
    DynamicAbout.tsx   # Dynamic about component
  hooks/
    useRestaurantConfig.ts  # Hook to load restaurant data
  pages/
    RestaurantPage.tsx # Dynamic restaurant page
  types/
    restaurant.ts      # TypeScript types
```

## 🚀 Adding a New Restaurant

### Step 1: Create Configuration File
Create a new JSON file in `public/clients/[restaurant-id].json`:

```json
{
  "id": "your-restaurant-id",
  "name": "Restaurant Name",
  "tagline": "Your Tagline",
  "description": "Short description",
  "phone": "+91XXXXXXXXXX",
  "email": "info@restaurant.com",
  "address": {
    "street": "Street Address",
    "area": "Area",
    "city": "City",
    "pincode": "123456"
  },
  "cuisines": ["Cuisine 1", "Cuisine 2"],
  "hours": {
    "lunch": "12:00 PM - 3:30 PM",
    "dinner": "7:00 PM - 11:00 PM"
  },
  "rating": {
    "score": 4.5,
    "totalReviews": 1000
  },
  "highlights": ["Highlight 1", "Highlight 2"],
  "signatureDishes": [
    {
      "name": "Dish Name",
      "description": "Dish description"
    }
  ],
  "philosophy": "Restaurant philosophy text",
  "experience": "Restaurant experience text",
  "theme": {
    "primaryColor": "#D4AF37",
    "secondaryColor": "#8B7355",
    "accentColor": "#C9A961",
    "backgroundColor": "#0A0A0A"
  },
  "images": {
    "hero": "/clients/[restaurant-id]/hero.jpg",
    "gallery": []
  },
  "tags": ["Tag 1", "Tag 2"]
}
```

### Step 2: Add Images (Optional)
Create a folder: `public/clients/[restaurant-id]/`
Add your restaurant images here.

### Step 3: Access Your Restaurant
Your restaurant will be automatically available at:
`https://your-domain.com/[restaurant-id]`

## 📦 Deployment to Vercel

### Option 1: Deploy via Git (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Add multi-restaurant platform"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Vite
   - Click "Deploy"

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   cd /path/to/cevi-culinary-canvas
   vercel --prod
   ```

### Option 3: Manual Deployment

1. **Build the project:**
   ```bash
   npm install
   npm run build
   ```

2. **Deploy the `dist` folder:**
   - Go to Vercel dashboard
   - Create new project
   - Upload the `dist` folder
   - Configure build settings:
     - Build Command: `npm run build`
     - Output Directory: `dist`
     - Install Command: `npm install`

## 🔗 URL Structure

- **Homepage (CEVI):** `https://your-domain.com/`
- **CEVI:** `https://your-domain.com/cevi`
- **Coal Spark:** `https://your-domain.com/coal-spark`
- **New Restaurant:** `https://your-domain.com/[restaurant-id]`

## 🎨 Customization

### Changing Colors
Edit the `theme` section in your restaurant's JSON file:

```json
"theme": {
  "primaryColor": "#FF6B35",    // Main color
  "secondaryColor": "#F7931E",   // Secondary color
  "accentColor": "#C1440E",      // Accent color
  "backgroundColor": "#1A1A1A"   // Background
}
```

### Adding More Fields
Update `src/types/restaurant.ts` with new fields and then use them in components.

## 🔧 Environment Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📱 Features

✅ Multi-restaurant support
✅ Dynamic routing
✅ Responsive design
✅ SEO-friendly
✅ Fast loading with Vite
✅ TypeScript support
✅ Easy configuration via JSON
✅ No code changes needed for new restaurants

## 🐛 Troubleshooting

**Issue:** Restaurant page not loading
- **Solution:** Check if the JSON file exists in `public/clients/`
- **Solution:** Verify the restaurant ID matches the filename (without .json)

**Issue:** 404 on page refresh
- **Solution:** Vercel.json is configured to handle SPA routing

**Issue:** Images not showing
- **Solution:** Ensure images are in `public/clients/[restaurant-id]/`
- **Solution:** Check image paths in JSON configuration

## 📞 Support

For questions or issues, contact the development team or refer to the documentation.

## 🎉 Success!

Once deployed, your multi-restaurant platform will be live and you can add new restaurants simply by adding JSON configuration files - no redeployment needed!
