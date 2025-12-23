# Portfolio

A modern, animated portfolio website built with Next.js 16, React 19, TypeScript, and Tailwind CSS. Features smooth scroll animations, 3D graphics with Three.js, and a fully responsive design with dark mode support.

## ✨ Features

- **Modern Tech Stack**: Built with Next.js 16 and React 19
- **Smooth Animations**: Custom scroll reveal animations and transitions
- **3D Graphics**: Interactive 3D elements powered by Three.js and React Three Fiber
- **Dark Mode**: Built-in theme switching with next-themes
- **Fully Responsive**: Mobile-first design that works on all devices
- **Type Safe**: Written in TypeScript for better code quality
- **UI Components**: Comprehensive UI library with Radix UI and shadcn/ui
- **Performance**: Optimized with Vercel Analytics and Speed Insights
- **Loading Screen**: Engaging initial loading experience

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or npm/pnpm/yarn
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/YngJesus/Portfolio.git
cd Portfolio
```

2. Install dependencies:

```bash
pnpm install
# or
npm install
```

3. Run the development server:

```bash
pnpm dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
Portfolio/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── hero-section.tsx
│   ├── about-section.tsx
│   ├── projects-section.tsx
│   ├── skills-section.tsx
│   ├── contact-section.tsx
│   ├── navigation.tsx
│   ├── animated-background.tsx
│   ├── loading-screen.tsx
│   └── ui/                # Reusable UI components
├── hooks/                 # Custom React hooks
│   ├── use-scroll-reveal.ts
│   ├── use-mobile.ts
│   └── use-toast.ts
├── lib/                   # Utility functions
│   └── utils.ts
├── public/                # Static assets
│   └── images/
└── styles/                # Additional styles
```

## 🛠️ Built With

### Core Technologies

- **[Next.js 16](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS

### UI & Animation

- **[Radix UI](https://www.radix-ui.com/)** - Headless UI components
- **[shadcn/ui](https://ui.shadcn.com/)** - Re-usable components
- **[Lucide React](https://lucide.dev/)** - Icon library
- **[Three.js](https://threejs.org/)** - 3D graphics library
- **[@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/)** - React renderer for Three.js
- **[@react-three/drei](https://github.com/pmndrs/drei)** - Useful helpers for react-three-fiber

### Form & Validation

- **[React Hook Form](https://react-hook-form.com/)** - Form management
- **[Zod](https://zod.dev/)** - Schema validation
- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** - Form validation resolvers

### Other Libraries

- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications
- **[date-fns](https://date-fns.org/)** - Date utility library
- **[Recharts](https://recharts.org/)** - Chart library

## 📜 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🎨 Customization

### Theme

The project uses next-themes for dark mode support. Customize colors in your `globals.css` file using CSS variables.

### Components

All UI components are located in the `components/ui/` directory and can be customized or replaced as needed.

### Content

Update the content in the section components:

- `hero-section.tsx` - Landing section
- `about-section.tsx` - About/bio section
- `projects-section.tsx` - Project showcase
- `skills-section.tsx` - Skills and technologies
- `contact-section.tsx` - Contact information

## 📊 Analytics

This project includes:

- **Vercel Analytics** - Web analytics
- **Vercel Speed Insights** - Performance monitoring

## 🚢 Deployment

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository to Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy!

Alternatively, you can deploy to any platform that supports Next.js:

```bash
pnpm build
pnpm start
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**YngJesus**

- GitHub: [@YngJesus](https://github.com/YngJesus)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## ⭐ Show your support

Give a ⭐️ if you like this project!
