import {
    bulls, 
    smart, 
    seed, 
    diurnal, 
    seedFlyer, 
    creative, 
    precious, 
    chrisFlyer 
} from '../assets/images/index'
import {
    lockscreen,
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    briefcase,
    tailwindcss,
    cafe,
    wallet,
    typescript,
    firebase,
    music,
    movie,
    camera,
    defi,
    twitter
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
    },

    {
        imageUrl: firebase,
        name: 'Firebase',
        type: ' BaaS',
        key: 17
    }
];

export const experiences = [
    {
        title: " Graphic Designer and Ads-Manager",
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
        title: "Site-Manager and Content Writer",
        company_name: "Diurnal Report",
        icon: diurnal,
        iconBg: "#000000",
        date: "April 2023 - August 2023",
        points: [
            "Managing the wordpress design and making sure the plugins are up-to-date.",
            "Writing Seo friendly contents to further boost the site visibility.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Handling the site twitter account to boost visibility.",
        ],
    },
    {
        title: "Full-Stack Developer",
        company_name: "Bulls Investment",
        icon: bulls,
        iconBg: "#00008B",
        date: "September 2023 - Dec 2023",
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
        date: " Dec 2023 - April 2024",
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
        link: 'https://github.com/CHrisEl-coder',
    },
    {
        name: 'Twitter',
        iconUrl: twitter,
        link: 'https://x.com/t_contents',
    }
];

export const projects = [ 
    {
        iconUrl: wallet,
        theme: 'btn-back-black',
        name: 'Bulls Investment',
        description: 'Created a website for a new investment site, that allow users to register and invest through mapped out plans.',
        link: 'https://bullsinvestment.vercel.app',
    },
    {
        iconUrl: wallet,
        theme: 'btn-back-green',
        name: 'SmartFunds',
        description: 'Created a crypto investment app where people can signin and choose an investment plan to invest in different crypto project.',
        link: 'smartfund.site',
    },
    {


        iconUrl: briefcase,
        theme: 'btn-back-red',
        name: 'TodoApp',
        description: 'Developed a simple todo app, to store things you want to do and outputs the time the task was created and also a functionality to delete the app when done',
        link: 'https://github.com/CHrisEl-coder/TodoApp.git',
    },
    
    {
        iconUrl: cafe,
        theme: 'btn-back-blue',
        name: 'Cafe Landing Page',
        description: 'Designed a Simple Cafe landing page that shows the menu and prices ',
        link: 'https://github.com/CHrisEl-coder/cafe.git',
    },
    {
        iconUrl: lockscreen,
        theme: 'btn-back-pink',
        name: 'Screen Lock',
        description: 'Simple Lock Screen Design That Tells Real Time Date.',
        link: 'https://github.com/CHrisEl-coder/LocKScreen.git',
    }
   ]

export const graphics = [
    {
        name: 'Seedrock Flyer',
        type: 'Graphics',
        imageUrl: seedFlyer,
        description: ' Call to action design, educating the audience on what the medicine is all about and how they can purchase the medicine.'
    },

    {
        name: 'Chris Creative Flyer',
        type: 'Graphics',
        imageUrl: creative,
        description: 'Chris Creative main digital flyer for ads and online visibility.'
    },


    {
        name: 'Precious Heritage Flyer',
        type: 'Graphics',
        imageUrl: precious,
        description: ' A well thought out flyer to show what the business is all about, so as to get more visbility online and offline.  '
    },

    {
        name: 'Promotional Flyer',
        type: 'Graphics',
        imageUrl: chrisFlyer,
        description: 'Promotional flyer made for Chris Creative for ads.'
    }
]

export const writeUp = [
    {
        title: `Rema's Latest New Hit Single`,
        type: 'Content',
        icon: music,
        description: 'Afrobeat Singer, Rema have become one of the pioneer of the new movement. Currently signed to Mavins Record. He has proved his worth in the industry. Rema made his debut with Dumebi, a song which grew... ',
        link: 'https://docs.google.com/document/d/1_rxt5-zeqpJMJ41pG4EnuHlbNeBkeu1Q/edit?usp=drive_link&ouid=104396756049297691502&rtpof=true&sd=true',
        
        key: 'calmDown'
    },

    {
        title: `RISE: A King From Across The Sea`,
        type: 'Content',
        icon: movie,
        description: 'The African documentary thriller titled RISE directed by the African film director Akin Omotoso which was release in 24 june 2022 has been trending across lots of platforms and website ... ',
        link: 'https://docs.google.com/document/d/1aJ745bPVLEKtMN4l0TkLmuwoNga7WlpG/edit?usp=drive_link&ouid=104396756049297691502&rtpof=true&sd=true',
        key: 'rise'
    },


    {
        title: `Intro To Defi`,
        type: 'Content',
        icon: defi,
        description: 'Cefi  known as centralized finance is a our current financial system that is centralized and managed by a given authority  that is prone to corruption, fraud and mismanagement ... ',
        link: 'https://docs.google.com/document/d/1aEStd6dAmeoTdAWXBjwQAKbQjN8iKu-F/edit?usp=drive_link&ouid=104396756049297691502&rtpof=true&sd=true',
        key: 'defi'
    },


    {
        title: `The 02 Arena`,
        type: 'Content',
        icon: camera,
        description: `The 02 Arena, London remains one of the top destinations of Africa singer to sell out. Musicians across
        the globe have dreamed of performing in the 02 Arena and also selling  ... `,
        link: 'https://docs.google.com/document/d/1a5Re-nAT7rjjt_6y6y4YCio28EqR9sBP/edit?usp=sharing&ouid=104396756049297691502&rtpof=true&sd=true',
        key: '02'
    },
]