# Joe John - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, React 19, and TypeScript. This portfolio showcases my frontend development skills, projects, and provides a seamless way for potential clients and employers to get in touch.

## 🚀 Live Demo

[View Live Portfolio](https://yourdomain.com) 

## ✨ Features

### 🎨 **Modern Design & User Experience**

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Dark/Light Mode**: Toggle between themes with persistent user preference
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Interactive Elements**: Hover effects, smooth scrolling, and micro-interactions

### 🏗️ **Technical Architecture**

- **Next.js 15**: Latest version with App Router for optimal performance
- **React 19**: Cutting-edge React features and improved performance
- **TypeScript**: Full type safety throughout the application
- **Server & Client Components**: Optimized rendering strategy
- **Tailwind CSS**: Utility-first CSS framework for rapid styling

### 📱 **Core Sections**

1. **Hero Section**: Introduction with animated skill tags and call-to-action buttons
2. **Projects Showcase**: Interactive project cards with live demos and source code
3. **About Me**: Personal story, skills, and career goals
4. **Contact Form**: Functional contact form with EmailJS integration
5. **Footer**: Social links and additional contact information

### 🛠️ **Key Functionalities**

- **Contact Form**: EmailJS integration for sending emails directly from the website
- **Theme Management**: Context-based theme switching with localStorage persistence
- **Form Validation**: Client-side validation with real-time error feedback
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance Optimized**: Image optimization, lazy loading, and efficient bundling

## 🏛️ **Project Structure**

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and animations
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx          # Main page component
│   ├── error.tsx         # Error boundary
│   └── not-found.tsx     # 404 page
├── components/            # Reusable UI components
│   ├── Button.tsx        # Custom button component
│   ├── ContactForm.tsx   # Contact form with validation
│   ├── EmailJSInit.tsx   # EmailJS initialization
│   ├── Header.tsx        # Navigation header
│   └── ProjectCard.tsx   # Project display card
├── context/              # React Context providers
│   └── ThemeContext.tsx  # Theme management
├── data/                 # Static data
│   └── projects.ts       # Project information
├── hooks/                # Custom React hooks
│   └── useContactForm.ts # Contact form logic
├── sections/             # Page sections
│   ├── About.tsx         # About section
│   ├── Contact.tsx       # Contact section
│   ├── Footer.tsx        # Footer component
│   ├── Hero.tsx          # Hero section (server)
│   ├── HeroClient.tsx    # Hero section (client)
│   └── Projects.tsx      # Projects section
├── types/                # TypeScript definitions
│   └── index.ts          # Shared types
└── utils/                # Utility functions
    ├── constants.ts      # App constants
    └── emailjs.ts        # EmailJS utilities
```

## 🛠️ **Technologies Used**

### **Frontend Framework & Libraries**

- **Next.js 15.5.2** - React framework with App Router
- **React 19.1.0** - Latest React with concurrent features
- **TypeScript 5** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion 12.23.12** - Animation library

### **UI & Icons**

- **Lucide React 0.542.0** - Beautiful icon library
- **tw-animate-css 1.3.8** - Tailwind animation utilities

### **Email & Communication**

- **EmailJS 4.4.1** - Client-side email service

### **Development Tools**

- **ESLint 9** - Code linting
- **Turbopack** - Fast bundler for development

## 🚀 **Getting Started**

### **Prerequisites**

- Node.js 18+
- npm, yarn, pnpm, or bun

### **Installation**

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/my_portfolio.git
   cd my_portfolio
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

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:

   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 **EmailJS Setup**

To enable the contact form functionality:

1. **Create an EmailJS account** at [emailjs.com](https://emailjs.com)
2. **Set up a service** (Gmail, Outlook, etc.)
3. **Create an email template** with placeholders: `{{name}}`, `{{email}}`, `{{message}}`
4. **Get your credentials** and add them to `.env.local`
5. **Test the form** to ensure emails are being sent

## 🎨 **Customization**

### **Personal Information**

- Update personal details in `src/sections/Hero.tsx`
- Modify contact information in `src/sections/Contact.tsx`
- Update social links in `src/sections/Footer.tsx`

### **Projects**

- Edit project data in `src/data/projects.ts`
- Add/remove projects by modifying the `projects` array
- Update project images and links

### **Styling**

- Modify colors and themes in `src/app/globals.css`
- Update Tailwind configuration for custom design tokens
- Customize animations in the CSS file

### **Content**

- Update the About section in `src/sections/About.tsx`
- Modify skills list in `src/sections/Hero.tsx`
- Update metadata in `src/app/layout.tsx`

## 🏗️ **Build & Deployment**

### **Build for Production**

```bash
npm run build
# or
yarn build
# or
pnpm build
# or
bun build
```

### **Start Production Server**

```bash
npm start
# or
yarn start
# or
pnpm start
# or
bun start
```

### **Deployment Options**

- **Vercel** (Recommended): Connect your GitHub repository
- **Netlify**: Deploy with continuous integration
- **AWS Amplify**: Full-stack deployment
- **Railway**: Simple deployment platform


## 🌙 **Theme System**

- **Automatic Detection**: Respects user's system preference
- **Manual Toggle**: Theme switcher in header
- **Persistence**: Saves preference in localStorage
- **Smooth Transitions**: Animated theme changes

## ⚡ **Performance Features**

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **Server Components**: Reduced client-side JavaScript
- **Turbopack**: Fast development builds
- **SEO Optimization**: Meta tags and structured data

## 🔧 **Development Features**

- **TypeScript**: Full type safety
- **ESLint**: Code quality enforcement
- **Hot Reload**: Fast development iteration
- **Error Boundaries**: Graceful error handling
- **404 Page**: Custom not-found page

## 📊 **Project Showcase**

The portfolio includes several featured projects:

1. **Urban Threads** - E-commerce platform with React, TypeScript, Redux
2. **Recipe Hub** - Recipe management app with local persistence
3. **Inventory Management** - Product management with real-time updates
4. **Destino** - Travel destination explorer

Each project includes:

- Live demo links
- GitHub repository links
- Technology stack tags
- Project descriptions
- Responsive images

## 🤝 **Contributing**

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


## 🙏 **Acknowledgments**

- **Next.js Team** - For the amazing framework
- **Vercel** - For hosting and deployment platform
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For smooth animations
- **Lucide** - For beautiful icons
- **EmailJS** - For contact form functionality

---

**Built with ❤️ by Joe John**

