# Personal Portfolio

A modern, responsive personal portfolio built with React, Next.js, TypeScript, Tailwind CSS, and shadcn/ui.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, React, TypeScript, and Tailwind CSS
- **Beautiful UI Components**: Using shadcn/ui for consistent, accessible components
- **Fully Responsive**: Looks great on all devices
- **Smooth Animations**: Custom animations and transitions
- **Dark Mode Ready**: Built-in dark mode support with theme toggle
- **SEO Optimized**: Meta tags and semantic HTML for better SEO
- **Fast Performance**: Optimized for speed with Next.js

## 📦 Sections

- **Hero**: Eye-catching landing section with call-to-action buttons
- **About**: Personal information and highlights
- **Projects**: Showcase of your work with project cards
- **Skills**: Display your technical skills organized by category
- **Contact**: Contact form and information

## 🛠️ Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   cd portfolio-1
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and visit [http://localhost:3000](http://localhost:3000)

## 🎨 Customization

### 1. Personal Information

Update the following files with your information:

#### `components/sections/Hero.tsx`
- Change "Your Name" to your actual name
- Update the title/role
- Modify the description
- Update social media links (GitHub, LinkedIn, Email)

#### `components/sections/About.tsx`
- Update the about text
- Modify the quick facts (location, availability, etc.)
- Customize the highlights

#### `components/sections/Contact.tsx`
- Update contact information (email, phone, location)
- Modify the form submission logic (connect to your backend or email service)

#### `app/layout.tsx`
- Update the metadata title and description

### 2. Projects

Edit `components/sections/Projects.tsx` to add your actual projects:

```typescript
const projects = [
  {
    title: "Your Project Name",
    description: "Project description",
    tags: ["Tech", "Stack", "Used"],
    github: "https://github.com/yourusername/project",
    demo: "https://yourproject.com",
    image: "bg-gradient-to-br from-blue-500 to-cyan-500",
  },
  // Add more projects...
];
```

### 3. Skills

Update `components/sections/Skills.tsx` with your skills:

```typescript
const skillCategories = [
  {
    category: "Frontend",
    skills: ["Your", "Skills", "Here"],
    color: "from-blue-500 to-cyan-500",
  },
  // Add more categories...
];
```

### 4. Styling & Colors

The portfolio uses Tailwind CSS and shadcn/ui. To customize colors:

1. **Edit theme colors** in `app/globals.css`:
   - Modify CSS variables for colors
   - Supports both light and dark modes

2. **Add custom gradients** or animations in `app/globals.css`

### 5. Adding New Components

To add more shadcn/ui components:

```bash
npx shadcn@latest add [component-name]
```

Available components: [shadcn/ui components](https://ui.shadcn.com/docs/components)

## 🎯 Project Structure

```
portfolio-1/
├── app/
│   ├── favicon.ico
│   ├── globals.css          # Global styles and animations
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page component
├── components/
│   ├── ui/                   # shadcn/ui components
│   │   ├── badge.tsx
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── Navigation.tsx        # Navigation bar
│   └── sections/             # Portfolio sections
│       ├── About.tsx
│       ├── Contact.tsx
│       ├── Hero.tsx
│       ├── Projects.tsx
│       └── Skills.tsx
├── lib/
│   └── utils.ts              # Utility functions
├── public/                   # Static assets
├── components.json           # shadcn/ui configuration
├── next.config.ts            # Next.js configuration
├── package.json
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Other Platforms

You can also deploy on:
- **Netlify**: Connect your Git repository
- **AWS Amplify**: Use the Amplify Console
- **GitHub Pages**: Build and deploy static export

## 📱 Adding a Contact Form Backend

The contact form currently logs to console. To make it functional:

### Option 1: EmailJS
```bash
npm install @emailjs/browser
```
Configure EmailJS in your account and update the form submission handler.

### Option 2: Formspree
Add `action="https://formspree.io/f/your-form-id"` to the form.

### Option 3: API Route
Create an API route in Next.js:
```typescript
// app/api/contact/route.ts
export async function POST(request: Request) {
  const data = await request.json();
  // Send email using nodemailer or other service
  return Response.json({ success: true });
}
```

## 🎨 Customizing Animations

Add or modify animations in `app/globals.css`:

```css
@keyframes your-animation {
  from { /* start state */ }
  to { /* end state */ }
}

.animate-your-animation {
  animation: your-animation 1s ease-in-out;
}
```

## 🌐 SEO Optimization

1. Update metadata in `app/layout.tsx`
2. Add Open Graph tags for social sharing
3. Create a `robots.txt` file
4. Add a sitemap

## 📄 License

Feel free to use this portfolio template for your own personal use.

## 💡 Tips

- Replace placeholder text with your actual information
- Add real project screenshots instead of gradient backgrounds
- Test on multiple devices and browsers
- Optimize images before adding them
- Keep the design clean and professional
- Update your portfolio regularly with new projects

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize it for your own use!

## 📧 Support

If you have questions or need help customizing your portfolio, feel free to open an issue.

---

Built with ❤️ using Next.js, TypeScript, Tailwind CSS, and shadcn/ui
