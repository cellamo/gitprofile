// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'cellamo', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/aboutme/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        // projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'AI-Driven Pothole Detection for Road Safety',
          description:
            'Spearheaded a computer vision project aimed at detecting and segmenting potholes in road surfaces using dashcam footage to enhance road safety and maintenance efficiency. Employed state-of-the-art machine learning algorithms and image segmentation techniques to accurately identify potholes in various road conditions and lighting scenarios.',
          // imageUrl:
          //   'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          // link: 'https://example.com',
        },
        {
          title: 'SurveyDonkey Web Application',
          description:
            'Led the development of a survey management system, focusing on backend architecture and API design using Django. Designed RESTful APIs for survey creation, distribution, and analytics, ensuring scalability and security. Implemented JWT authentication and permission-based access control to secure the application.',
          //imageUrl:
          //'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          //link: 'https://example.com',
        },
        {
          title:
            'Instructor and Course Evaluation System for Hacettepe University (ICES4HU)',
          description:
            'Collaborated with a team to develop an online instructor and course evaluation system using Java Spring Boot, Spring MVC, and Spring Data JPA. Implemented a flexible, maintainable, and extensible design following the Open-Close Principle.',
          //imageUrl:
          //'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          //link: '',
        },
      ],
    },
  },
  seo: {
    title: 'About Me',
    description: 'Information about zafer',
    imageURL: '',
  },
  social: {
    linkedin: 'zaferarslan',
    twitter: '',
    researchGate: '',
    facebook: '',
    instagram: 'zaferarslaann',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'zaferarslaan@gmail.com',
  },
  resume: {
    fileUrl:
      'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'C',
    'C++',
    'Java',
    'Python',
    'Spring Boot',
    'Django',
    'Node.js',
    'Next.js',
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'Git',
    'Docker',
    'TensorFlow',
    'Selenium',
  ],
  experiences: [
    {
      company: 'OBSS Technology',
      position: 'Software Engineering Intern',
      from: 'July 2023',
      to: 'August 2023',
      companyLink: 'https://www.obss.tech/en',
    },
    {
      company: 'MAKİNE VE KİMYA ENDÜSTRİSİ A.Ş.',
      position: 'Software Engineering Intern',
      from: 'June 2022',
      to: 'August 2022',
      companyLink: 'https://www.mke.gov.tr/',
    },
  ],
  educations: [
    {
      institution: 'Hacettepe University',
      degree: 'Bsc. in Computer Science',
      from: '2019',
      to: '2024',
    },
  ],
  // publications: [
  //   {
  //     title: 'Publication Title',
  //     conferenceName: '',
  //     journalName: 'Journal Name',
  //     authors: 'John Doe, Jane Smith',
  //     link: 'https://example.com',
  //     description:
  //       'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  //   },
  // ],
  // Display articles from your medium or dev account. (Optional)
  // blog: {
  //   source: 'dev', // medium | dev
  //   username: 'arifszn', // to hide blog section, keep it empty
  //   limit: 2, // How many articles to display. Max is 10.
  // },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
