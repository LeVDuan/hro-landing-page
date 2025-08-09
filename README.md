# HRO - HUST Red Owls Baseball Team Landing Page

[![Next.js](https://img.shields.io/badge/Next.js-14.2.31-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Material-UI](https://img.shields.io/badge/MUI-5.18.0-007FFF?logo=mui)](https://mui.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](LICENSE)

*English | [Tiếng Việt](README.vi.md)*

Official landing page for HUST Red Owls Baseball Team - The first and leading baseball club at Hanoi University of Science and Technology (HUST), Vietnam.

## 🦉 About HRO

HUST Red Owls (HRO) is the premier baseball club at Hanoi University of Science and Technology, established as part of the university's Sports and Arts Department. We are dedicated to promoting baseball culture in Vietnam and fostering a community of passionate players and fans.

### Our Mission
- Promote baseball as a sport in Vietnamese universities
- Build a strong community of baseball enthusiasts
- Compete at national and international levels
- Develop young talents in baseball

## 🚀 Key Features

### Website Capabilities
- **Bilingual Support**: Full Vietnamese and English language support
- **Team Showcase**: Comprehensive profiles of players, coaches, and management
- **Event Timeline**: Historical achievements and upcoming events
- **Media Gallery**: Dynamic photo gallery with Cloudinary integration
- **Contact System**: Direct contact form with EmailJS integration
- **Responsive Design**: Optimized for all devices
- **Seasonal Themes**: Special effects for holidays (Christmas, Lunar New Year)

### Technical Features
- **Performance Optimized**: Built with Next.js App Router for optimal loading
- **SEO Ready**: Server-side rendering with meta tags optimization
- **Analytics Integration**: Real-time tracking with Vercel Analytics
- **Type Safety**: Full TypeScript implementation
- **Modern UI**: Material-UI components with Tailwind CSS utilities

## 🛠️ Technology Stack

### Frontend Framework
- **Next.js 14.2.31** - React framework with App Router
- **React 18.3.1** - UI library
- **TypeScript 5.9.2** - Type-safe JavaScript

### UI & Styling
- **Material-UI 5.18.0** - Component library
- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **Emotion** - CSS-in-JS styling solution

### Services & Tools
- **Cloudinary** - Image and video management
- **EmailJS** - Email service for contact forms
- **Vercel Analytics** - Performance monitoring
- **next-intl 3.26.5** - Internationalization

## 📦 Installation

### Prerequisites
```bash
node --version  # Should be >= 18.17.0
npm --version   # Should be >= 9.0.0
```

### Setup Instructions
```bash
# Clone the repository
git clone https://github.com/LeVDuan/HRO-landing-page.git
cd HRO-landing-page

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your credentials

# Run development server
npm run dev
```

### Environment Configuration

Create a `.env.local` file with:

```env
# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
CLOUDINARY_FOLDER=hro-gallery

# EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Optional: Analytics
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id
```

## 🚀 Development

### Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (http://localhost:3000) |
| `npm run build` | Create production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint checks |
| `npm run lint:fix` | Auto-fix ESLint issues |
| `npm run format` | Format code with Prettier |

## 📁 Project Structure

```
HRO-landing-page/
├── public/                 # Static assets
│   ├── avatars/           # Team member photos
│   ├── landing-page/      # Landing page images
│   └── logos/             # HRO logos (seasonal variants)
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── (front-page)/  # Main landing page
│   │   ├── api/           # API routes
│   │   └── gallery/       # Gallery page
│   ├── components/        # React components
│   │   ├── layout/        # Layout components
│   │   └── dialogs/       # Dialog components
│   ├── configs/           # Configuration files
│   ├── contexts/          # React contexts
│   ├── fake-db/           # Team member data
│   ├── messages/          # i18n translations
│   ├── theme/             # MUI theme configuration
│   ├── types/             # TypeScript types
│   ├── utils/             # Utility functions
│   └── views/             # Page view components
│       ├── front-pages/   # Landing page sections
│       └── gallery/       # Gallery components
├── .env.example           # Environment template
├── next.config.mjs        # Next.js configuration
├── package.json           # Dependencies
└── tsconfig.json          # TypeScript configuration
```

## 🏗️ Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy automatically

### Manual Deployment
```bash
# Build for production
npm run build

# Start production server
npm start
```

## 📊 Performance

### Optimization Features
- Image optimization with Next.js Image component
- Lazy loading for gallery images
- Code splitting per route
- Font optimization
- CSS purging with Tailwind

### Metrics
- Lighthouse Score: 95+ (Performance)
- First Contentful Paint: < 1.2s
- Time to Interactive: < 3.5s

## 🤝 Contributing

We welcome contributions from the HRO community!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📱 Connect with HRO

- **Facebook**: [HUST Red Owls Baseball Team](https://www.facebook.com/HUSTRedOwlsBaseballTeam)
- **Instagram**: [@hustredowlsbaseballteam](https://www.instagram.com/hustredowlsbaseballteam/)
- **Email**: hustredowlsbaseballteam@gmail.com
- **Location**: Hanoi University of Science and Technology, Vietnam

## 🏆 Achievements

- National Baseball Championship participants
- University Sports Festival representatives
- Active member of Vietnam Baseball Federation

## 📄 License

This project is proprietary software for HUST Red Owls Baseball Team. All rights reserved.

## 🙏 Acknowledgments

- HUST Sports and Arts Department for continuous support
- All HRO members, coaches, and supporters
- Vietnam Baseball Federation
- Our sponsors and partners

---

**Version:** 0.3.0  
**Last Updated:** December 2024  
**Maintained by:** HRO Development Team

⚾ **Play Ball!** ⚾