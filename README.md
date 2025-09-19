# Dune Movie Website React

A modern, responsive website dedicated to the Dune movie franchise built with React, TypeScript, and SCSS.

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

![Dune Movie Website Demo](assets/media/website.gif)

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
- **Build Tool**: Create React App

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── AuthorsSection.tsx
│   ├── BackToTopButton.tsx
│   ├── BuyBooksSection.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── LatestNewsSection.tsx
│   ├── MovieSection.tsx
│   ├── Navigation.tsx
│   ├── NovelsSection.tsx
│   ├── QuickLinksSection.tsx
│   ├── ScrollToTop.tsx
│   ├── SignUpSection.tsx
│   └── TrailerSection.tsx
├── hooks/              # Custom React hooks
│   ├── useMainFunctionality.ts
│   └── useNewsletter.ts
├── pages/              # Page components
│   ├── AuthorsPage.tsx
│   ├── BooksPage.tsx
│   └── NovelsPage.tsx
├── Sass/               # SCSS stylesheets
│   ├── components/     # Component-specific styles
│   ├── utilities/      # Variables, mixins, responsive
│   └── style.scss      # Main stylesheet
├── App.tsx             # Main application component
├── index.tsx           # Application entry point
└── index.css           # Global CSS styles
```

## 🎨 Design Features

### Color Palette

- **Primary Gold**: #be984f
- **Mid Gold**: #c0af70
- **Light Gold**: #cfb591
- **Dark Background**: #000000

### Typography

- **Headings**: Custom font with gold styling
- **Body Text**: Clean, readable fonts with proper contrast
- **Responsive Sizing**: Scales appropriately across devices

### Components

- **Navigation**: Collapsible mobile menu with smooth transitions
- **Trailers**: Responsive video grid with hover effects
- **Cards**: Hover animations and shadow effects
- **Forms**: Styled input fields with focus states

## 🚀 Getting Started

### 🌐 Demo

Demo: [View Demo]()

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/zbaharyilmaz/sass-dune-movie-website.git
   cd sass-dune-movie-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📄 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🌐 Pages

### Homepage (`/`)

- Hero section with Dune movie announcement
- Official trailers with "Show More" functionality
- Latest news and updates
- Quick links to other sections
- Newsletter signup

### Authors Page (`/authors`)

- Biographies of Frank Herbert, Brian Herbert, and Kevin J. Anderson
- Key achievements and works
- Timeline of Dune universe development

### Novels Page (`/novels`)

- Complete list of Dune novels
- Organized by series (Original Chronicles, Prelude, Legends)
- Publication years and descriptions

### Books Page (`/books`)

- Retailer links (Amazon, Barnes & Noble, Audiobooks)
- Direct purchase links
- Reading order recommendations

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

- **Code Splitting**: Automatic code splitting with React Router
- **Lazy Loading**: Images and components load as needed
- **Optimized Build**: Production build with minification
- **SCSS Compilation**: Efficient CSS preprocessing

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

## 📸 Screenshots

### Desktop View

![Desktop Screenshot](assets/images/desktop-screenshot.png)

### Mobile View

![Mobile Screenshot](assets/images/mobile-screenshot.png)

### Tablet View

![Tablet Screenshot](assets/images/tablet-screenshot.png)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**May the spice flow!** 🌌
