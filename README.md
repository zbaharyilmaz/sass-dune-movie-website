# TS-Dune Website

A modern, responsive website dedicated to the Dune movie franchise built with React, TypeScript, SCSS, and Vite.

## 🌟 Features

- **Responsive Design**: Fully responsive across all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Dark theme with gold accents inspired by the Dune universe
- **Interactive Trailers**: YouTube-embedded trailers with "Show More" functionality
- **Multi-page Navigation**: Dedicated pages for Authors, Novels, and Books
- **Smooth Animations**: CSS animations and transitions for enhanced user experience
- **Newsletter Signup**: Email subscription functionality
- **Scroll to Top**: Automatic scroll to top when navigating between pages

## 🎬 Demo

Check out the live demo of the Dune Movie Website:

![Dune Movie Website Demo](https://raw.githubusercontent.com/zbaharyilmaz/sass-dune-movie-website/main/public/assets/media/website.gif)

_Experience the full Dune universe with smooth animations, responsive design, and interactive features._

### 🎯 Demo Highlights

- **Responsive Design**: See how the website adapts to different screen sizes
- **Interactive Trailers**: Watch embedded YouTube trailers with smooth transitions
- **Navigation**: Experience the smooth page transitions and mobile menu
- **Newsletter**: Test the email subscription functionality
- **Animations**: Enjoy the subtle hover effects and loading animations

## 📱 Responsive Breakpoints

- **Desktop**: 1220px and above
- **Tablet**: 600px - 1219px
- **Small Phones**: 481px - 600px
- **Extra Small Phones**: 320px - 480px

## 🛠️ Technologies Used

- **Frontend**: React 19.1.1
- **Language**: TypeScript 4.9.5
- **Styling**: SCSS/Sass 1.92.1
- **Routing**: React Router DOM 7.9.1
- **Email Service**: EmailJS 4.4.1
- **Build Tool**: Vite 7.1.6
- **Development**: Hot Module Replacement (HMR)

## 🚀 Getting Started

### 🌐 Demo

Demo: [](./public/assets/media/website.gif)

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/zbaharyilmaz/ts-dune-website.git
   cd ts-dune-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Preview Production Build

```bash
npm run preview
```

This serves the production build locally for testing.

## ⚡ Vite Benefits

- **Lightning Fast**: Development server starts in milliseconds
- **Hot Module Replacement**: Instant updates without page refresh
- **Optimized Builds**: Rollup-powered production builds
- **Native TypeScript**: Built-in TypeScript support
- **Modern Tooling**: ES modules and modern JavaScript features
- **Smaller Bundle Size**: Better tree-shaking and optimization

## 📄 Available Scripts

- `npm run dev` - Runs the app in development mode with Vite
- `npm run build` - Builds the app for production
- `npm run preview` - Preview the production build locally

## 📱 Responsive Features

### Mobile Navigation

- **Sticky Navigation**: Navigation bar stays at the top when scrolling
- **Hamburger Menu**: Touch-friendly hamburger menu for mobile devices
- **Collapsible Navigation**: Smooth dropdown menu with backdrop blur
- **Touch-Friendly Interface**: 44px minimum touch targets for all interactive elements
- **Optimized for Small Screens**: Special breakpoints for phones as small as 320px

### Grid Layouts

- Responsive grid systems for all content sections
- Auto-adjusting columns based on screen size
- Optimized spacing for different devices

### Typography

- Scalable font sizes
- Readable line heights
- Proper contrast ratios

### 📱 Mobile Phone Optimizations

- **Touch-Friendly Buttons**: All buttons meet iOS/Android touch target guidelines (44px minimum)
- **Responsive Videos**: YouTube trailers automatically adjust to screen size with 16:9 aspect ratio
- **Optimized Forms**: Larger input fields with better focus states for mobile keyboards
- **Sticky Navigation**: Navigation stays accessible while scrolling
- **Backdrop Blur**: Modern glassmorphism effect on mobile navigation
- **Smooth Animations**: Touch-optimized hover and active states
- **Viewport Optimization**: Prevents unwanted zooming and ensures proper scaling

## 🎯 Performance Optimizations

- **Vite Build Tool**: Lightning-fast development with Hot Module Replacement (HMR)
- **Code Splitting**: Automatic code splitting with React Router
- **Lazy Loading**: Images and components load as needed
- **Optimized Build**: Production build with Rollup bundling and minification
- **SCSS Compilation**: Efficient CSS preprocessing with Vite
- **Tree Shaking**: Automatic dead code elimination
- **ES Modules**: Native ES modules for faster loading

## 🔧 Customization

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.tsx`
3. Update navigation if needed

### Styling

- Modify SCSS variables in `src/Sass/utilities/_variables.scss`
- Add new styles in `src/Sass/style.scss`
- Component-specific styles in `src/Sass/components/`

### Content Updates

- Update content directly in component files
- Modify images in `public/assets/images/`
- Update links and external references

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**May the spice flow!** 🌌
