# Skandana Creations - Cinematographer Portfolio

A professional portfolio website for Anwar, a cinematographer and video editor specializing in wedding films, brand storytelling, and creative visual narratives.

## 🌟 Features

- **Full-screen opening video** with brand introduction
- **Interactive hero section** with 3 rotating slides
- **Portfolio folders** with organized video and photo collections
- **Advanced video player** with YouTube-like controls (play/pause, 10s forward/backward, fullscreen, volume)
- **Full-screen image viewer** with zoom, rotate, and pan functionality
- **Working contact form** that opens email client
- **Mobile-responsive design** with floating contact buttons
- **Nature-themed green design** with beautiful backgrounds
- **Smooth animations** and transitions throughout

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd skandana-creations
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173`
   - The website will automatically reload when you make changes

## 📁 Project Structure

```
src/
├── components/
│   ├── LoadingAnimation.tsx    # Full-screen opening video
│   ├── Navigation.tsx          # Main navigation bar
│   ├── HeroSection.tsx         # Hero with 3 slides
│   ├── ServicesSection.tsx     # Services showcase
│   ├── PortfolioSection.tsx    # Portfolio folders and media
│   ├── VideoPlayer.tsx         # Advanced video player
│   ├── ImageViewer.tsx         # Full-screen image viewer
│   ├── AboutSection.tsx        # About Anwar section
│   ├── ContactSection.tsx      # Contact form and info
│   ├── Footer.tsx              # Website footer
│   └── MobileContactButtons.tsx # Mobile floating buttons
├── App.tsx                     # Main app component
├── main.tsx                    # App entry point
└── index.css                   # Global styles and animations
```

## 🎬 Video Player Features

- **Play/Pause**: Click video or use play button
- **10-second skip**: Forward and backward buttons
- **Fullscreen**: Maximize/minimize functionality
- **Volume control**: Mute/unmute with visual feedback
- **Progress bar**: Seekable timeline
- **Auto-hide controls**: Controls fade after 3 seconds (like YouTube)
- **Keyboard shortcuts**: Spacebar to play/pause

## 🖼️ Image Viewer Features

- **Full-screen viewing**: Click any image to view in fullscreen
- **Zoom controls**: Zoom in/out with + and - buttons
- **Rotation**: Rotate images 90 degrees
- **Reset function**: Return to original size and rotation
- **Drag support**: Pan around zoomed images

## 📱 Mobile Features

- **Responsive design**: Optimized for all screen sizes
- **Floating contact buttons**: WhatsApp, Email, Instagram
- **Touch-friendly**: Large touch targets and smooth scrolling
- **Mobile navigation**: Collapsible hamburger menu

## 🎨 Customization

### Colors and Branding

The website uses a nature-inspired green theme. To customize colors, edit the Tailwind classes in the components:

- Primary green: `emerald-600`
- Secondary green: `green-500`
- Background: `emerald-50` to `green-100`

### Content Updates

1. **Personal Information**: Update contact details in `ContactSection.tsx`
2. **Portfolio Items**: Add/modify portfolio content in `PortfolioSection.tsx`
3. **About Section**: Edit bio and stats in `AboutSection.tsx`
4. **Services**: Modify service offerings in `ServicesSection.tsx`

### Adding New Portfolio Items

In `PortfolioSection.tsx`, add items to the `portfolioFolders` array:

```typescript
{
  id: 'unique-id',
  type: 'video' | 'image',
  src: 'path-to-media',
  poster: 'path-to-thumbnail', // for videos
  title: 'Media Title',
  description: 'Media Description'
}
```

## 🌐 Deployment to Netlify

### Method 1: Drag and Drop (Easiest)

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Upload to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Sign up/login to your account
   - Drag the `dist` folder to the deploy area
   - Your site will be live instantly!

### Method 2: Git Integration (Recommended)

1. **Push code to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select your repository
   - Set build settings:
     - **Build command**: `npm run build`
     - **Publish directory**: `dist`
   - Click "Deploy site"

3. **Automatic deployments**
   - Every time you push to GitHub, Netlify will automatically rebuild and deploy your site

### Method 3: Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Deploy**
   ```bash
   npm run build
   netlify deploy --prod --dir=dist
   ```

## 🔧 Configuration

### Environment Variables

If you need to add environment variables (for analytics, etc.), create a `.env` file:

```env
VITE_ANALYTICS_ID=your-analytics-id
VITE_CONTACT_EMAIL=anwar@skandana.com
```

### Custom Domain

To use a custom domain on Netlify:

1. Go to your site settings in Netlify
2. Click "Domain management"
3. Add your custom domain
4. Follow the DNS configuration instructions

## 📧 Contact Form Configuration

The contact form currently opens the user's default email client. To set up a backend for form submissions:

### Option 1: Netlify Forms (Recommended)

1. Add `netlify` attribute to the form in `ContactSection.tsx`:
   ```html
   <form netlify onSubmit={handleSubmit}>
   ```

2. Add a hidden input:
   ```html
   <input type="hidden" name="form-name" value="contact" />
   ```

### Option 2: External Services

- **Formspree**: Add action URL to form
- **EmailJS**: Integrate EmailJS SDK
- **Getform**: Use Getform endpoint

## 🎯 SEO Optimization

The website includes basic SEO optimization:

- Meta tags in `index.html`
- Semantic HTML structure
- Alt tags for images
- Proper heading hierarchy

To improve SEO further:

1. Add more specific meta descriptions
2. Include structured data (JSON-LD)
3. Optimize image file sizes
4. Add sitemap.xml

## 🚀 Performance Tips

- **Images**: Use WebP format for better compression
- **Videos**: Host videos on CDN for faster loading
- **Lazy loading**: Images load as needed
- **Code splitting**: Automatic with Vite

## 🐛 Troubleshooting

### Common Issues

1. **Videos not playing**
   - Check video URLs are accessible
   - Ensure HTTPS for external videos
   - Test in different browsers

2. **Build errors**
   - Clear node_modules: `rm -rf node_modules && npm install`
   - Check for TypeScript errors: `npm run build`

3. **Mobile issues**
   - Test on actual devices
   - Use browser dev tools mobile simulation
   - Check touch event handling

### Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📞 Support

For technical support or customization requests:

- **Email**: anwar@skandana.com
- **WhatsApp**: +1 (555) 123-4567
- **Instagram**: @skandana_creations

## 📄 License

This project is created for Skandana Creations. All rights reserved.

---

**Built with ❤️ using React, TypeScript, Tailwind CSS, and Vite**