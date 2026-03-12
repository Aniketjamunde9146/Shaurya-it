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
      rating: 3,
      text: "Good app overall. The order tracking works well and the admin panel covers the basics. A few tweaks were needed post-delivery but the team was responsive.",
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
      rating: 4,
      text: "The application works well for our needs. Hotels can register easily and customers find nearby options quickly. A couple of minor UI changes were requested but handled fast.",
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
      rating: 4,
      text: "Really happy with the platform. The Razorpay integration works seamlessly and inventory management is solid. Would have liked a bit faster turnaround on revisions.",
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
      clientName: "Arjun Mehta",
      clientRole: "Tech Lead",
      rating: 5,
      text: "This tool has saved us countless hours! The AI generates accurate READMEs quickly. The interface is clean and user-friendly. Perfect solution for our dev team!",
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
      clientName: "Vikram Nair",
      clientRole: "Game Publisher",
      rating: 3,
      text: "The AI opponent and core mechanics are solid. Multiplayer works well. We had some back-and-forth on the animations but the team eventually got it right.",
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
      clientName: "Vikram Nair",
      clientRole: "Game Publisher",
      rating: 4,
      text: "Good quality code and clean implementation. Runs smoothly across devices. Delivered on time and communication throughout the project was professional.",
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

  {
    name: "VS Fitness Club",
    tagline: "High-energy gym landing page",
    desc: "A bold, conversion-focused gym landing page for VS Fitness Club, Nagpur — featuring hero slideshows, offer sections, WhatsApp integration, and scroll-reveal animations.",
    category: "Web App",
    mockup: "/mocups/vsfitness.png",
    accentColor: "#ef4444",
    year: "2025",
    clientRequirements: [
      "Auto-rotating hero slideshow",
      "Real gym photo integration",
      "WhatsApp popup with pre-filled messages",
      "Offer & membership sections",
      "Scroll-reveal animations",
      "Mobile-responsive design",
    ],
    review: {
      clientName: "Suresh Yadav",
      clientRole: "Gym Owner, Nagpur",
      rating: 5,
      text: "The website looks incredible! It perfectly captures the energy of our gym. Members love it and we're getting more enquiries through WhatsApp than ever before.",
    },
    links: {
      view: "https://vsfitnessclub.vercel.app/",
    },
  },

  {
    name: "Inkfinity Tattoo Studio",
    tagline: "Dark & artistic tattoo studio website",
    desc: "A visually striking website for Inkfinity Tattoo Studio — designed with a dark, edgy aesthetic to showcase the artist's portfolio and drive client bookings.",
    category: "Web App",
    mockup: "/mocups/inkfinity.png",
    accentColor: "#a78bfa",
    year: "2025",
    clientRequirements: [
      "Portfolio gallery",
      "Booking / enquiry system",
      "Dark artistic UI/UX",
      "Artist profile section",
      "Mobile-responsive design",
      "Social media integration",
    ],
    review: {
      clientName: "Rohan Tiwari",
      clientRole: "Tattoo Artist & Studio Owner",
      rating: 5,
      text: "This is exactly what we envisioned. The dark aesthetic matches our brand perfectly and the portfolio section really makes our work stand out. Bookings have gone up noticeably!",
    },
    links: {},
  },

  {
    name: "Black Pearl Tattoo",
    tagline: "Premium tattoo studio web presence",
    desc: "A premium, full-featured website for Black Pearl Tattoo — crafted to reflect the studio's high-end identity with an elegant dark theme, portfolio showcase, and seamless client booking flow.",
    category: "Web App",
    mockup: "/mocups/blackpearl.png",
    accentColor: "#f0c040",
    year: "2025",
    clientRequirements: [
      "Elegant dark theme",
      "Portfolio showcase",
      "Client booking flow",
      "Artist & studio info",
      "Mobile-responsive design",
      "WhatsApp / contact integration",
    ],
    review: {
      clientName: "Karan Malhotra",
      clientRole: "Studio Owner",
      rating: 4,
      text: "Professional and polished work. The dark theme is on-point and clients regularly compliment the site. Minor revisions took a couple of extra days but final result is great.",
    },
    links: {},
  },
];