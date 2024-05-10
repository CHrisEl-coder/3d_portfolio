import {bulls, smart, seed, tesla} from '../assets/images/index'
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
        key: 1
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
        key: 2
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
        key: 3
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
        key: 4
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
        key: 5
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
        key: 6
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
        key: 7
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
        key: 8
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
        key: 9
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
        key: 10
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
        key: 11
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
        key: 12
        
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
        key: 13
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
        key: 14
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
        key: 15
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
        key: 16
    }
];

export const experiences = [
    {
        title: " Graphic Designer",
        company_name: "Seedrock",
        icon: seed,
        iconBg: "#cdffcd",
        date: "jan 2023 - April 2023",
        points: [
            "Making Designs and improving its branding for the long run.",
            "Running high yielding Ads on the facebook pages to boost customer engagement and sells.",
            "Ensuring the best cutomer experience and exposure.",
            " Articulating customer reviews, to enhance different areas of the company branding and user experience.",
        ],
    },
    {
        title: "React Native Developer",
        company_name: "Tesla",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full-Stack Developer / Branding",
        company_name: "Bulls Investment",
        icon: bulls,
        iconBg: "#00008B",
        date: "April 2023 - August 2023",
        points: [
            "Picking Out the site color and fonts from scratch.",
            "Creating Logo for the company the improve its generral public look, and content for to further educate users about the site.",
            "Designing Mobile responsive website, and and easy layout for efficient user experience.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Full stack Developer",
        company_name: "SmartFunds",
        icon: smart,
        iconBg: "#013220",
        date: " September 2023 - March 2024",
        points: [
            "Picking Out the site color and fonts from scratch.",
            "Creating Logo for the company the improve its generral public look, and content for to further educate users about the site.",
            "Designing Mobile responsive website, and and easy layout for efficient user experience.",
            "Getting a Domain name and Hosting the website to be visible worldwide.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Amazon Price Tracker',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://github.com/adrianhajdin/pricewise',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Full Stack Threads Clone',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://github.com/adrianhajdin/threads',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Car Finding App',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'AI Summarizer Application',
        description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];