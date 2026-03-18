# Modern Portfolio Website

A stunning, modern personal portfolio website built with Next.js 16, TypeScript, and Tailwind CSS. Features smooth animations, dark/light mode, and a responsive design that looks great on all devices.

## ✨ Features

- 🎨 **Modern Design**: Clean, professional UI with gradient backgrounds and glassmorphism effects
- 🌓 **Dark/Light Mode**: Toggle between themes with smooth transitions
- 📱 **Fully Responsive**: Optimized for mobile, tablet, and desktop
- ⚡ **Smooth Animations**: Powered by Framer Motion for engaging interactions
- 🎯 **3D Hover Effects**: Interactive project cards with tilt effects
- 📊 **Scroll Progress**: Visual indicator showing page scroll position
- ⌨️ **Typing Animation**: Dynamic text animation in the hero section
- 📧 **Contact Form**: Functional contact form with validation
- 🎭 **SEO Optimized**: Complete metadata for search engines

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: Next Themes
- **UI Components**: Radix UI

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── globals.css      # Global styles
│   │   ├── layout.tsx       # Root layout
│   │   └── page.tsx         # Home page
│   ├── components/          # React components
│   │   ├── ui/             # Reusable UI components
│   │   ├── navbar.tsx      # Navigation bar
│   │   ├── hero-section.tsx # Hero section
│   │   ├── about-section.tsx # About section
│   │   ├── skills-section.tsx # Skills section
│   │   ├── projects-section.tsx # Projects section
│   │   ├── contact-section.tsx # Contact section
│   │   ├── footer.tsx      # Footer
│   │   └── ...             # Other components
│   └── lib/                # Utilities and constants
│       ├── utils.ts        # Helper functions
│       └── constants.ts    # App constants
├── public/                 # Static assets
└── ...                     # Config files
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Personal Information

Update the following files to personalize your portfolio:

1. **Constants** (`src/lib/constants.ts`):
   - Update personal details
   - Modify skills and projects
   - Change social links

2. **SEO Metadata** (`src/app/layout.tsx`):
   - Update title and description
   - Add your name and information

3. **Content**:
   - Hero section text
   - About section content
   - Contact information

### Styling

- **Colors**: Modify CSS variables in `src/app/globals.css`
- **Fonts**: Update font imports in `src/app/layout.tsx`
- **Animations**: Adjust Framer Motion settings in components

### Adding Projects

1. Add project details to `PROJECTS` array in `src/lib/constants.ts`
2. Add project images to `public/projects/` directory
3. Update project links and descriptions

## 🌟 Sections

### 1. Hero Section
- Animated gradient background
- Typing animation for roles
- Call-to-action buttons
- Smooth scroll indicator

### 2. About Section
- Personal introduction
- Education timeline
- Work experience
- Professional summary

### 3. Skills Section
- Animated progress bars
- Skill categories
- Technology icons
- Proficiency indicators

### 4. Projects Section
- 3D hover tilt effects
- Project cards with images
- Tech stack badges
- GitHub and demo links

### 5. Contact Section
- Contact information
- Functional contact form
- Social media links
- Location details

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Connect your GitHub repository to [Vercel](https://vercel.com)
   - Vercel will automatically detect and deploy your Next.js app

### Other Platforms

- **Netlify**: Connect your repository and configure build settings
- **AWS**: Use AWS Amplify or S3 + CloudFront
- **DigitalOcean**: Use App Platform

### Environment Variables

For production, you may want to add:
- Contact form API endpoints
- Analytics tracking codes
- Social media API keys

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Lucide](https://lucide.dev/) - Beautiful icons

## 📞 Support

If you have any questions or need help, feel free to:
- Open an issue on GitHub
- Contact me through the portfolio website
- Reach out on social media

---

**Built with ❤️ by T.P.V.SAI DINESH**
