// ─────────────────────────────────────────────────────────────
//  projects.js  —  Shaurya IT Services
//  Source of truth for all project data
// ─────────────────────────────────────────────────────────────

export const projects = [
  {
    name: "Foodify",
    tagline: "Full-stack food delivery platform",
    desc: "Built a full-featured food delivery Android app with admin panel and real-time order tracking according to client specifications.",
    category: "Android App",
    mockup: "/mocups/foodify.png",
    accentColor: "#f59e0b",
    year: "2024",
    clientRequirements: [
      "Real-time order tracking",
      "Admin dashboard",
      "Payment gateway integration",
      "User authentication",
    ],
    review: {
      clientName: "Rajesh Sharma",
      clientRole: "Restaurant Owner",
      rating: 5,
      text: "Exceeded expectations! The app is intuitive, fast, and our orders have increased by 40%. The team delivered on time and provided excellent support throughout.",
    },
    links: {
      apk: "https://drive.google.com/file/d/1f6yHNU5Z3On5HSfDvPt1VdME5bGcRCC6/view",
    },
  },
  {
    name: "Restrack",
    tagline: "Location-based hotel discovery app",
    desc: "A custom location-based hotel tracking app for Shivam Khandagale. Hotels register their business; users discover nearby options in real time.",
    category: "Tracking App",
    mockup: "/mocups/restrack.png",
    accentColor: "#63d4ff",
    year: "2024",
    clientRequirements: [
      "Hotel registration system",
      "Nearby hotel discovery",
      "Location-based tracking",
      "Admin management controls",
      "Fast performance optimisation",
      "Secure data storage",
    ],
    review: {
      clientName: "Shivam Khandagale",
      clientRole: "Business Owner",
      rating: 5,
      text: "The application works perfectly for our needs. Hotels can register easily, and customers can quickly find nearby options. Smooth performance and professional execution!",
    },
    links: {
      apk: "https://drive.google.com/file/d/1IxMZfCv6ZEwWOTSXxVt_ytDoZXvoSHaQ/view?usp=sharing",
    },
  },

  {
    name: "Swadyayam Web App",
    tagline: "E-commerce platform with Razorpay",
    desc: "A complete e-commerce platform with Firebase backend, Razorpay payment integration, and full inventory management as per client needs.",
    category: "Web App",
    mockup: "/mocups/swadyayam.png",
    accentColor: "#a855f7",
    year: "2024",
    clientRequirements: [
      "Secure payment processing",
      "Inventory management",
      "User accounts & wishlist",
      "Analytics dashboard",
    ],
    review: {
      clientName: "Priya Deshmukh",
      clientRole: "Music Studio Owner",
      rating: 5,
      text: "Outstanding work! The platform is scalable and performs beautifully. Our conversion rate improved significantly. Highly recommend their services!",
    },
    links: {
      view: "https://swadyayam.web.app/",
    },
  },

  {
    name: "Readme Gen AI",
    tagline: "AI-powered README generator",
    desc: "An AI-powered web tool that generates professional README files instantly, tailored to developer-friendly requirements.",
    category: "Web Tool",
    mockup: "/mocups/readmegen.png",
    accentColor: "#00ff9d",
    year: "2024",
    clientRequirements: [
      "AI-powered generation",
      "Customisable templates",
      "Export to markdown",
      "Fast processing",
    ],
    review: {
      clientName: "Alex Chen",
      clientRole: "Tech Lead",
      rating: 5,
      text: "This tool has saved us countless hours! The AI generates accurate READMEs quickly. The interface is clean and user-friendly. Perfect solution!",
    },
    links: {
      view: "https://readme-gen-fast.vercel.app/",
    },
  },

  {
    name: "Dots & Boxes",
    tagline: "Logic game with minimax AI",
    desc: "An advanced logic-based game with AI opponent using the minimax algorithm and multiplayer support — engineered as requested by the client.",
    category: "Game",
    mockup: "/mocups/dots.png",
    accentColor: "#fb923c",
    year: "2023",
    clientRequirements: [
      "AI opponent with difficulty levels",
      "Multiplayer mode",
      "Leaderboard system",
      "Smooth animations",
    ],
    review: {
      clientName: "Marcus Johnson",
      clientRole: "Game Publisher",
      rating: 5,
      text: "Fantastic game mechanics! The AI is challenging and the multiplayer works flawlessly. Users love it. Great attention to detail!",
    },
    links: {
      apk: "https://drive.google.com/file/d/194Axyep1ErMPwziXUIECjy62XMF7u8Zv/view",
    },
  },

  {
    name: "Tic Tac Toe",
    tagline: "Classic game, polished execution",
    desc: "A classic two-player game with clean architecture, smooth UI interactions, and performance optimisation tailored to client specifications.",
    category: "Game",
    mockup: "/mocups/tictactoe.png",
    accentColor: "#e879f9",
    year: "2023",
    clientRequirements: [
      "Two-player gameplay",
      "Score tracking",
      "Responsive design",
      "Easy to understand",
    ],
    review: {
      clientName: "Marcus Johnson",
      clientRole: "Game Publisher",
      rating: 5,
      text: "Excellent code quality and implementation. The game runs smoothly on all devices. Delivered ahead of schedule. Very professional team!",
    },
    links: {
      apk: "https://drive.google.com/file/d/1elN4tgYO1cdjd3SYIMAMqrs4rMIwYb6F/view",
    },
  },

  {
    name: "Shaurya Tools",
    tagline: "100+ productivity tools in one platform",
    desc: "An all-in-one productivity web platform with 100+ online tools — AI generators, developer utilities, converters, SEO tools, and text processors.",
    category: "Web Platform",
    mockup: "/mocups/shaurya.png",
    accentColor: "#63d4ff",
    year: "2024",
    clientRequirements: [
      "100+ fast-loading tools",
      "SEO-optimised structure",
      "Modern responsive UI/UX",
      "AI-powered automation tools",
      "No authentication required",
      "Scalable architecture",
      "Optimised performance & lazy loading",
    ],
    review: {
      clientName: "Aniket Jamunde",
      clientRole: "Founder & Developer",
      rating: 5,
      text: "Shaurya Tools represents my vision of building a complete productivity ecosystem in one place. I focused on speed, simplicity, and real-world usability. Every tool is crafted to solve practical problems efficiently.",
    },
    links: {
      view: "https://shauryatools.vercel.app/",
    },
  },
];