# HRO Landing Page

[![Next.js](https://img.shields.io/badge/Next.js-14.2.31-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Material-UI](https://img.shields.io/badge/MUI-5.18.0-007FFF?logo=mui)](https://mui.com/)
[![License](https://img.shields.io/badge/License-Proprietary-red)](LICENSE)

A high-performance, enterprise-grade landing page solution built with modern web technologies. Designed for optimal user experience, SEO performance, and scalability.

## 🚀 Key Features

### Core Capabilities
- **Responsive Design**: Fully adaptive layouts optimized for desktop, tablet, and mobile devices
- **Internationalization**: Multi-language support with next-intl for global reach
- **Performance Optimized**: Built-in lazy loading, image optimization, and code splitting
- **SEO Ready**: Server-side rendering with meta tags management and structured data
- **Analytics Integration**: Real-time performance monitoring with Vercel Analytics

### Technical Highlights
- **Type Safety**: Full TypeScript implementation for robust code quality
- **Modern Styling**: Material-UI components with Tailwind CSS utility classes
- **Cloud Integration**: Cloudinary for optimized image delivery and transformation
- **Email Services**: Integrated EmailJS for contact form functionality
- **Developer Experience**: Hot reload, ESLint, Prettier, and comprehensive tooling

## 📋 System Requirements

- **Node.js**: 18.17.0 or higher (LTS recommended)
- **npm**: 9.0.0 or higher
- **Operating System**: macOS, Windows (WSL2), or Linux
- **RAM**: Minimum 4GB (8GB recommended for development)

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
- **EmailJS** - Email service integration
- **Vercel Analytics** - Performance monitoring
- **next-intl 3.26.5** - Internationalization

## 📦 Installation

### Prerequisites Check
```bash
node --version  # Should be >= 18.17.0
npm --version   # Should be >= 9.0.0
```

### Clone Repository
```bash
git clone https://github.com/your-org/hro-landing-page.git
cd hro-landing-page
```

### Install Dependencies
```bash
npm ci  # For exact dependency installation
# or
npm install  # For fresh installation
```

### Environment Configuration

Create a `.env.local` file in the root directory:

```env
# Required: Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Required: EmailJS Configuration
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key

# Optional: Analytics (auto-configured on Vercel)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id

# Optional: Environment
NODE_ENV=development
```

## 🚀 Development

### Start Development Server
```bash
npm run dev
```
Application will be available at `http://localhost:3000`

### Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint for code quality |
| `npm run lint:fix` | Auto-fix ESLint issues |
| `npm run format` | Format code with Prettier |
| `npm run build:icons` | Generate icon bundle |

## 📁 Project Architecture

```
hro-landing-page/
├── .github/                 # GitHub configuration
│   └── workflows/          # CI/CD pipelines
├── public/                 # Static assets
│   ├── fonts/             # Custom fonts
│   ├── images/            # Static images
│   └── locales/           # Translation files
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── api/          # API routes
│   │   ├── gallery/      # Gallery page
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Home page
│   ├── assets/           # Application assets
│   │   └── iconify-icons/# Icon configuration
│   ├── components/       # React components
│   │   ├── common/       # Shared components
│   │   ├── sections/     # Page sections
│   │   └── ui/           # UI components
│   ├── config/           # Application configuration
│   ├── contexts/         # React Context providers
│   ├── core/             # Core utilities
│   ├── layouts/          # Layout components
│   ├── messages/         # i18n message files
│   ├── theme/            # Theme configuration
│   │   ├── colors.ts     # Color palette
│   │   ├── components.ts # Component overrides
│   │   └── index.ts      # Theme export
│   └── utils/            # Utility functions
├── .env.example           # Environment variables template
├── .eslintrc.json        # ESLint configuration
├── .prettierrc           # Prettier configuration
├── next.config.mjs       # Next.js configuration
├── package.json          # Dependencies and scripts
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🏗️ Build & Deployment

### Production Build
```bash
npm run build
```

Build output will be in `.next/` directory.

### Production Preview
```bash
npm run build && npm start
```

### Deployment Options

#### Vercel (Recommended)
1. Push code to GitHub/GitLab/Bitbucket
2. Import project on [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy (automatic on push to main)

#### Docker Deployment
```dockerfile
# Dockerfile example available in repository
docker build -t hro-landing-page .
docker run -p 3000:3000 hro-landing-page
```

#### Traditional Hosting
```bash
npm run build
npm start  # Requires Node.js on server
```

## 🔧 Configuration

### Next.js Configuration
See `next.config.mjs` for:
- Image optimization settings
- Internationalization routes
- Security headers
- Webpack customization

### TypeScript Configuration
See `tsconfig.json` for:
- Path aliases
- Compiler options
- Module resolution

## 🧪 Quality Assurance

### Code Quality
- ESLint for code linting
- Prettier for code formatting
- TypeScript for type checking
- Husky for pre-commit hooks (if configured)

### Performance Metrics
- Lighthouse score: 95+ (Performance)
- First Contentful Paint: < 1.2s
- Time to Interactive: < 3.5s
- Cumulative Layout Shift: < 0.1

## 📊 Monitoring

### Vercel Analytics
Automatic integration when deployed on Vercel:
- Real User Metrics (RUM)
- Web Vitals tracking
- Custom events tracking

### Error Tracking
Configure error tracking service in production:
```javascript
// Example: Sentry integration
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
```

## 🔒 Security

### Best Practices
- Environment variables for sensitive data
- Content Security Policy headers
- HTTPS enforcement
- Regular dependency updates
- Input sanitization

### Security Headers
Configured in `next.config.mjs`:
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

## 📖 API Documentation

### Gallery API
```
GET /api/gallery
```
Returns paginated gallery images from Cloudinary.

Query Parameters:
- `page` (number): Page number
- `limit` (number): Items per page

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Standards
- Follow ESLint configuration
- Write meaningful commit messages
- Add appropriate TypeScript types
- Update documentation as needed

## 📄 License

This project is proprietary software. All rights reserved.

## 🆘 Support

For technical support or questions:
- Create an issue in the repository
- Contact the development team
- Check documentation at [docs link]

## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and analytics
- Material-UI for the component library
- All contributors and maintainers

---

**Version:** 4.0.0  
**Last Updated:** December 2024  
**Maintained by:** HRO Development Team