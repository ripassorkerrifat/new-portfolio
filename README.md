# 🚀 Portfolio Website - Ripas Sorker Rifat

A modern, responsive portfolio website built with Next.js 15, featuring dynamic animations, interactive UI components, and a comprehensive admin dashboard for content management.

![Portfolio Preview](https://img.shields.io/badge/Next.js-15.5.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![MongoDB](https://img.shields.io/badge/MongoDB-8.18.1-green?style=for-the-badge&logo=mongodb)

## ✨ Features

### 🎨 **Frontend Features**
- **Interactive Hero Section** with Lottie animations and floating skill icons
- **Dynamic Skills Showcase** with blinking tech icons and spillover effects
- **Responsive Design** optimized for all device sizes
- **Glass Morphism UI** with modern visual effects
- **Smooth Animations** using CSS animations and transitions
- **Skills Marquee** displaying technical expertise
- **Project Gallery** with detailed project showcases
- **Contact Form** with form validation
- **Dark Theme** with custom CSS variables

### 🛠️ **Admin Dashboard**
- **Content Management System** for projects, experiences, and skills
- **Rich Text Editor** using Jodit React for blog posts
- **Image Upload** with Cloudinary integration
- **Form Validation** using React Hook Form and Zod
- **Authentication System** with JWT tokens
- **CRUD Operations** for all content types
- **Settings Management** for social links and resume

### 🔧 **Technical Features**
- **Server-Side Rendering** with Next.js App Router
- **API Routes** for backend functionality
- **MongoDB Integration** with Mongoose ODM
- **File Upload** handling with Multer
- **Type Safety** with TypeScript throughout
- **State Management** with Redux Toolkit
- **Custom Hooks** for reusable logic
- **Responsive Images** with Next.js Image optimization

## 🛠️ Tech Stack

### **Frontend**
- **Framework:** Next.js 15.5.2 with App Router
- **Language:** TypeScript 5.0
- **Styling:** Tailwind CSS 4.0
- **Animations:** Lottie React, CSS Animations
- **Icons:** React Icons, Lucide React
- **Forms:** React Hook Form with Zod validation
- **Rich Text:** Jodit React Editor

### **Backend**
- **Runtime:** Node.js
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT (jsonwebtoken)
- **File Upload:** Multer + Cloudinary
- **Password Hashing:** bcryptjs

### **Development Tools**
- **Build Tool:** Turbopack (Next.js)
- **Linting:** ESLint
- **Type Checking:** TypeScript
- **Package Manager:** npm/yarn/pnpm

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- MongoDB database (local or cloud)
- Cloudinary account for image uploads

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
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   # Database Configuration
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio?retryWrites=true&w=majority
   
   # Cloudinary Configuration
   CLOUDINARY_CLOUD_NAME=your_cloud_name_here
   CLOUDINARY_API_KEY=your_api_key_here
   CLOUDINARY_API_SECRET=your_api_secret_here
   
   # JWT Secret
   JWT_SECRET=your_jwt_secret_here
   
   # Environment
   NODE_ENV=development
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the portfolio.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/             # Reusable UI components
│   ├── banner.tsx         # Hero section with animations
│   ├── skills-marquee.tsx # Skills showcase component
│   └── ...
├── api/                   # API routes
├── lib/                   # Utility libraries
├── models/                # MongoDB models
├── hooks/                 # Custom React hooks
├── context/               # React context providers
├── types/                 # TypeScript type definitions
├── assets/                # Static assets (Lottie files, etc.)
└── utils/                 # Utility functions
```

## 🎨 Key Components

### **Banner Component**
- Interactive Lottie animation with hover effects
- Randomly scattered skill icons with blinking animations
- Spillover effect showing additional skills on hover
- Glass morphism design with gradient borders

### **Skills Marquee**
- Continuous scrolling showcase of technical skills
- Real skill icons from DevIcon CDN
- Hover effects with pause functionality
- Responsive design for all screen sizes

### **Admin Dashboard**
- Complete CRUD operations for content management
- Rich text editor for blog posts and descriptions
- Image upload and management
- Settings configuration for social links

## 🔧 Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack

# Production
npm run build        # Build for production with Turbopack
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint for code linting
```

## 🌟 Features Showcase

### **Interactive Animations**
- Lottie animations for engaging user experience
- Floating and blinking skill icons throughout the background
- Smooth hover effects and transitions
- Responsive animations that work on all devices

### **Modern UI/UX**
- Glass morphism design elements
- Gradient backgrounds and borders
- Smooth scrolling and navigation
- Mobile-first responsive design

### **Content Management**
- Dynamic content loading from MongoDB
- Admin dashboard for easy content updates
- Image optimization and management
- SEO-friendly structure

## 🚀 Deployment

### **Vercel (Recommended)**
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### **Other Platforms**
The application can be deployed on any platform that supports Node.js:
- Netlify
- Railway
- Heroku
- DigitalOcean App Platform

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Ripas Sorker Rifat**
- Portfolio: [Your Portfolio URL]
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]
- Email: [Your Email]

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Lottie](https://lottiefiles.com/) for beautiful animations
- [DevIcon](https://devicon.dev/) for the skill icons
- [MongoDB](https://www.mongodb.com/) for the database solution
- [Cloudinary](https://cloudinary.com/) for image management

---

⭐ **If you found this project helpful, please give it a star!** ⭐
