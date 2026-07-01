export const projects = [
  {
    slug: "sportlingo",
    num: "01",
    type: "internship" as const,
    title: "SportsLingo Coaching Platform",
    subtitle: "AI coaching assistant and mobile calendar feature for a live sports platform",
    perspective:
      "The hard part wasn't calling the API — it was making the AI not frustrate coaches. I spent most of my time on the edge cases: what happens when it doesn't understand, when there's no answer, when something loads slowly. Those moments are where a feature earns trust or loses it.",
    tags: ["AI", "Mobile"],
    year: "2026",
    role: "Software Developer Intern — AI Product",
    company: "SportsLingo / Next Play Games",
    github: null,
    live: "https://coach.sportlingo.ai",
    private: true,
    featured: true,
    overview:
      "Built two major features during my internship at SportsLingo on a React 19 + TypeScript + Supabase platform, working alongside PMs and senior engineers.",
    sections: [
      {
        title: "AI Sport Agent — Ask AI",
        bullets: [
          "Built conversational AI UX end-to-end: message display logic, thread navigation, error/empty/loading states",
          "Designed UX flows for starting, continuing, and branching AI conversations",
          "Partnered with PM across multiple design review cycles",
        ],
      },
      {
        title: "Events Calendar",
        bullets: [
          "Owned full implementation from design review to PM acceptance",
          "Month/year navigation, team filter UI, event state handling",
          "Deployed to real coaches on mobile — end-to-end ownership",
        ],
      },
    ],
    learned:
      "Good AI UX is mostly about the unhappy paths. Users forgive a lot if the failures are handled with care.",
    tech: ["React 19", "TypeScript", "React Native", "Supabase", "Tailwind CSS", "Next.js"],
  },
  {
    slug: "mome-choix",
    num: "02",
    type: "internship" as const,
    title: "Môme Choix",
    subtitle: "Storefront UI, cart, filter, and size-guide interactions for a children's fashion store",
    perspective:
      "I rebuilt the cart, filters, and size guide referencing Kith — because small interactions matter more than people think. A cart that scrolls smoothly and a filter that responds instantly are what make a store feel premium, not just the product photos.",
    tags: ["E-commerce"],
    year: "2025",
    role: "Frontend Developer Intern",
    company: "Môme Choix",
    github: null,
    live: "https://momechoix.com",
    private: false,
    featured: false,
    overview:
      "Developed custom Shopify storefront features for a luxury children's fashion store, referencing Kith and Bonpoint for UI patterns. Built and tested across desktop and mobile. Mostly front-end work — making an existing store feel more polished.",
    sections: [
      {
        title: "What I built",
        bullets: [
          "Cart UX: remove items, quantity editing, sticky header/footer with scrollable item list",
          "Product filter system for desktop and mobile (on the Shop All page)",
          "Size guide integration on product detail pages, referencing Kith's pattern",
          "Footer interaction: click-to-expand category navigation",
          "Add to Cart flow with size selection state",
          "Added Google authentication",
          "Mobile responsive layout and footer stability across screen sizes",
        ],
      },
    ],
    learned:
      "Polish is a feature. The difference between 'fine' and 'premium' is usually a hundred tiny interaction details.",
    tech: ["Shopify", "Liquid", "JavaScript", "CSS", "Responsive Design"],
  },
  {
    slug: "entity-hunt",
    num: "03",
    type: "project" as const,
    title: "Entity Hunt",
    subtitle: "Narrative point-and-click puzzle game with dynamic grid logic",
    perspective:
      "I wanted to build something that felt like a real product, not a class assignment — persistent state, secure routing, the whole loop. It's where I learned to think about the architecture, not just the screen in front of me.",
    tags: ["Web"],
    year: "2025",
    role: "Personal project",
    company: null,
    github: "https://github.com/Nanacui61/Entity-Hunt",
    live: "https://entity-hunt.vercel.app/",
    private: false,
    featured: false,
    overview:
      "Designed and built a narrative-driven point-and-click puzzle game with dynamic grid logic, persistent game state via MongoDB, and full Vercel deployment.",
    sections: [
      {
        title: "What I built",
        bullets: [
          "Dynamic grid logic with randomized entity placement",
          "Persistent game state via MongoDB with secure API routes",
          "Client/server rendering with Next.js App Router",
          "Full Vercel deployment",
        ],
      },
    ],
    learned:
      "Thinking past the UI — into state, routing, and data — is what turns a screen into a product.",
    tech: ["Next.js", "TypeScript", "MongoDB", "styled-components", "Vercel"],
  },
  {
    slug: "this-website",
    num: "04",
    type: "project" as const,
    title: "This Website",
    subtitle: "The site you're looking at — built from scratch with Next.js",
    perspective:
      "I wanted a site that felt like me, not a template — so I designed every interaction myself and built it from scratch. The little things, like how things move on hover, are the point.",
    tags: ["Web"],
    year: "2026",
    role: "Personal project",
    company: null,
    github: "https://github.com/Nanacui61",
    live: null,
    private: false,
    featured: false,
    overview:
      "The portfolio you're currently browsing. Designed and built from scratch with Next.js, TypeScript, and Tailwind — every interaction, layout choice, and micro-animation is mine.",
    sections: [
      {
        title: "What I built",
        bullets: [
          "Custom Kinfolk-inspired design system from scratch",
          "Spring-based hover interactions and stagger animations",
          "Multi-page App Router structure with dynamic project pages",
          "Fully responsive, deployed on Vercel",
        ],
      },
    ],
    learned:
      "Building my own site is the most honest portfolio piece — you're experiencing the work right now.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
  },
  {
    slug: "ravenous",
    num: "05",
    type: "project" as const,
    title: "Ravenous",
    subtitle: "Restaurant search app that suggests what to eat based on the weather",
    perspective:
      "A restaurant search app with a twist — I added weather, so it can suggest what you might feel like eating based on the conditions outside. Rainy day, something warm. I like features that meet people where they actually are.",
    tags: ["Web"],
    year: "2025",
    role: "Personal project",
    company: null,
    github: "https://github.com/Nanacui61/Ravenous",
    live: "https://ravenous-three.vercel.app",
    private: false,
    featured: false,
    overview:
      "A restaurant search app built with the Yelp Fusion API, with a weather-based twist: it factors in current conditions to suggest what you might feel like eating.",
    sections: [
      {
        title: "What I built",
        bullets: [
          "Yelp Fusion API integration for real restaurant data",
          "Weather integration to influence food suggestions",
          "Location, category, and sort filter UI",
          "Dynamic search state management with React hooks",
        ],
      },
    ],
    learned:
      "A small, human touch — like matching food to weather — makes a generic app feel thoughtful.",
    tech: ["React", "JavaScript", "Yelp Fusion API", "Weather API", "CSS"],
  },
];
