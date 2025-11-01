# Jeswin C N K - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. The design features a dark theme with gold accents, inspired by contemporary portfolio designs.

## Features

- ✨ Modern, responsive design with dark theme and gold accents
- 🎨 Smooth animations using Framer Motion
- 📱 Fully responsive layout
- 🚀 Built with Next.js 14 and TypeScript
- 🎯 Interactive navigation with smooth scrolling
- 💼 Portfolio showcase
- 📞 Contact information and social links

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Portfolio.tsx
│   ├── Experience.tsx
│   ├── Testimonial.tsx
│   └── Contact.tsx
├── public/
│   └── (your images here)
└── package.json
```

## Customization

### Personal Information
Update your personal information in:
- `components/Hero.tsx` - Name and title
- `components/About.tsx` - About section content
- `components/Contact.tsx` - Contact information
- `components/Experience.tsx` - Work experience
- `components/Skills.tsx` - Skills list

### Images
Place your images in the `public/` directory:
- Profile photo: `public/jeswin-photo-1.png` or `public/jeswin-photo-2.png`
- Portfolio project images: `public/project1.jpg`, etc.

## Build for Production

```bash
npm run build
npm start
```

## License

This project is private and personal.

