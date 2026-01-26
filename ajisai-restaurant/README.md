# Ajisai Sushi & Steak - Portland, Oregon

A modern, SEO-optimized Next.js 14+ website for Ajisai, an upscale Japanese restaurant in Portland, Oregon.

## Features

- **Next.js 14+ App Router** - Modern React framework with server components
- **Tailwind CSS** - Utility-first styling with custom Ajisai color palette
- **SEO Optimized** - Complete meta tags, JSON-LD structured data, and semantic HTML
- **Responsive Design** - Mobile-first approach, looks great on all devices
- **Accessibility** - ARIA labels, semantic markup, and keyboard navigation

## Pages

- `/` - Home page with hero, featured dishes, and testimonials
- `/about` - Restaurant story, philosophy, and team
- `/menus` - Complete menu with all categories
- `/reservations` - Online booking form and private events
- `/contact` - Contact form, location map, and FAQ

## Tech Stack

- Next.js 14+
- React 19
- TypeScript
- Tailwind CSS
- Google Fonts (Playfair Display, Inter)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ajisai-restaurant
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
ajisai-restaurant/
├── public/
│   └── images/           # Restaurant photos (add your own)
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── menus/
│   │   │   └── page.tsx
│   │   ├── reservations/
│   │   │   └── page.tsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── ContactForm.tsx
│       ├── Footer.tsx
│       ├── Hero.tsx
│       ├── MapEmbed.tsx
│       ├── MenuSection.tsx
│       ├── Navbar.tsx
│       └── ReservationCallout.tsx
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

## Adding Images

Replace placeholder images in `public/images/` with high-quality restaurant photos:

| Image | Recommended Size | Description |
|-------|-----------------|-------------|
| hero-sushi.jpg | 1920x1080 | Main hero background |
| og-image.jpg | 1200x630 | Social media share image |
| chef-preparing.jpg | 800x1000 | Chef at work |
| omakase.jpg | 800x600 | Omakase dish |
| sashimi.jpg | 800x600 | Sashimi platter |
| rolls.jpg | 800x600 | Signature rolls |
| interior-*.jpg | 600x600 | Restaurant interior shots |
| menu-hero.jpg | 1920x800 | Menu page hero |
| Various food photos | 600x450 | Menu item photos |

## SEO Configuration

### Metadata
Each page has unique metadata configured in `generateMetadata`. Update the following for production:

1. **Domain**: Replace `ajisaisushisteak.com` with your actual domain
2. **Phone**: Update phone number throughout
3. **Address**: Update address in layout.tsx and footer

### JSON-LD Structured Data
Located in `src/app/layout.tsx`. Update:
- Restaurant name
- Address
- Phone number
- Coordinates
- Opening hours

## Deployment

### Deploy to Vercel

1. Push to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Deploy

Or use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

### Environment Variables

For production, set these in your hosting platform:
- `NEXT_PUBLIC_SITE_URL` - Your production URL

## Customization

### Colors
Edit colors in `src/app/globals.css`:
```css
:root {
  --color-burgundy: #722F37;
  --color-gold: #C9A962;
  --color-cream: #FAF8F5;
}
```

### Fonts
Modify fonts in `src/app/layout.tsx`:
```typescript
const playfair = Playfair_Display({ ... });
const inter = Inter({ ... });
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Private - All rights reserved.

---

Built with ❤️ for Ajisai Sushi & Steak, Portland, Oregon
