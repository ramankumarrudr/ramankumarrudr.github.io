/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import {faPython, faRust, faHtml5, faCss3, faJs, faReact, faNode, faNpm, faAws, faDocker, faGolang, faWindows, faLinux, faGit, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faBattery, faC, faCar, faCloud, faCode, faDatabase, faDharmachakra, faGears, faImage, faLaptop, faMasksTheater, faRobot, faServer, faShield, faTerminal } from '@fortawesome/free-solid-svg-icons';
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Raman Kumar Rudraraju",
  title: "Hi all, I'm Raman Kumar",
  subTitle: emoji(
    "A passionate Electrical and Computer Engineer excelling 🚀 in Software Development, Cybersecurity Frameworks, Security Research & Penetration Testing and Innovating Vehicle-to-Grid technology and Ev's charging🔋and communication protocols."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ramankumarrudr",
  linkedin: "https://www.linkedin.com/in/raman-kumar-rudraraju-6197ab156/",
  gmail: "ramankumar.rudr@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Experienced Software Developer🧑🏾‍💻, offensive 🥷🏻 and Defensive 🛡️ Security Researcher and Ev Researcher🚗.",
  skills: [
    emoji(
      "⚡ Proficient programmer proven in developing automated penetration testing engines, AI-driven solutions and embedded software for Ev's 🚗."
    ),
    emoji("⚡ Proactively identified and resolved security flaws in cloud infrastructure and software."),
    emoji(
      "⚡ Managed deployments of software's, minimizing system downtime."
    ),
    emoji(
    "⚡ Demonstrated strong research capabilities through active involvement in collaborative research projects and contributions to industry-leading publications in the field."
    ),
    emoji(
      "⚡ Exhibited effective leadership qualities by leading cross-functional teams, fostering innovation, and achieving significant improvements in project outcomes and team performance."
      )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

FoE: [
  {
    skillName: "Offensive Security",
    fontAwesomeClassname: faLaptop
  },
  {
    skillName: "Defensive Security",
    fontAwesomeClassname: faShield
  },
  {
    skillName: "Frontend & Backend Development",
    fontAwesomeClassname: faCode
  },
  {
    skillName: "DevSecOps",
    fontAwesomeClassname: faGears
  },
  {
    skillName: "Ai/Ml",
    fontAwesomeClassname: faRobot
  },
  {
    skillName: "Image Processing",
    fontAwesomeClassname: faImage
  },
  {
    skillName: "Ev's",
    fontAwesomeClassname: faCar
  },
  {
    skillName: "Computer Networking",
    fontAwesomeClassname: faServer
  },
  {
    skillName: "Aws Cloud Service",
    fontAwesomeClassname: faCloud
  },
],

  ProgrammingLanguages: [
    {
      skillName: "python",
      fontAwesomeClassname: faPython
    },
    {
      skillName: "golang",
      fontAwesomeClassname: faGolang
    },
    {
      skillName: "rust",
      fontAwesomeClassname: faRust
    },
    {
      skillName: "c",
      fontAwesomeClassname: faC
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: faHtml5
    },
    {
      skillName: "css3",
      fontAwesomeClassname: faCss3
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: faJs
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: faReact
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: faNode
    },
  ],

  Databases: [
    {
      skillName: "Postgresql",
      fontAwesomeClassname: faDatabase
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: faDatabase
    },

  ],
  Cloud_Containers_Orchestration: [
    {
      skillName: "AWS",
      fontAwesomeClassname: faAws
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: faDocker
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: faDharmachakra
    },
    {
      skillName: "Git",
      fontAwesomeClassname: faGithub
    },
  ],
    Os: [
      {
        skillName: "windows",
        fontAwesomeClassname: faWindows
      },
      {
        skillName: "Linux",
        fontAwesomeClassname: faLinux
      },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Delaware",
      logo: require("./assets/images/UdelLogo.jpg"),
      subHeader: "Master of Science in Electrical and Computer Engineering",
      duration: "September 2022 - April 2024",
      desc: "Research Assistant and actively working on Vehicle to Grid technology and Ev Communication's.",
      descBullets: [
        "Education is fully funded by the university.",
        "Working with Ford and Exelon on vehicle to Grid integration technology."
      ]
    },
    {
      schoolName: "Anna University",
      logo: require("./assets/images/AnnaUniv.png"),
      subHeader: "Bachelor of Science in Electronics and Communication Engineering",
      duration: "August 2016 - May 2020",
      desc: "Took courses about Software Engineering, Electronics, Analog and Digital Communications",
      descBullets: [
        "Actively researched on Industrial Automation and Ai/Ml and published 2 papers.",
        "Finalist's of Smart India Hackathon Software Edition 2019. "
      ]
    }
  ]
};

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Programming",
      progressPercentage: "80%"
    },
    {
      Stack: "Offensive Security", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Defensive Security",
      progressPercentage: "60%"
    },
    {
      Stack: "Frontend & Backend Development",
      progressPercentage: "60%"
    },
    {
      Stack: "DevSecOps",
      progressPercentage: "60%"
    },
    {
      Stack: "Ai/Ml",
      progressPercentage: "60%"
    },
    {
      Stack: "Image Processing",
      progressPercentage: "60%"
    },
    {
      Stack: "Ev's",
      progressPercentage: "60%"
    },
    {
      Stack: "Computer Networking",
      progressPercentage: "60%"
    },
    {
      Stack: "Cloud",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Assistant",
      company: "University of Delaware",
      companylogo: require("./assets/images/UdelLogo.jpg"),
      date: "December 2022 – Present",
      desc: "Collaborative Embedded Software Developer and Research Assistant advancing Vehicle-to-Grid (V2G) and Vehicle-to-Home (V2H) and driving innovation in EV charging technology and standards via @udv2g.",
      descBullets: [
        "Engaged in pioneering Vehicle-to-Grid (V2G) and Vehicle-to-Home (V2H) projects.",
        "Collaborates with industry leaders: Ford Motors, Exelon, and NUVVE Corp.",
        "Contributes to @udv2g, a reference implementation of SAE J3068",
        "Drives innovation in EV charging technology and communication standards.",
        "Focuses on advancing electrical vehicle (EV) charging and SE-to-EV communication.",
        "Proficiently works with CAN programming and LIN communication protocols within the realm of EV charging, ensuring efficient and reliable communication between electric vehicles and charging infrastructure.",
      ]
    },
    {
      role: "Security Automation Engineer (Team Lead)",
      company: "Breachlock",
      companylogo: require("./assets/images/breachlock.png"),
      date: "Sep 2020 – Aug 2022",
      desc: "Innovative and Leadership role spearheading automated penetration testing, AI-driven vulnerability detection, and security solution deployment, while optimizing incident response and fostering business intelligence initiatives.",
      descBullets: [
        "Developed automated penetration testing engines (web, network, mobile, API) using Python, adhering to SOLID principles and software design patterns, covering a comprehensive range of security aspects, resulting in a 92% reduction in manual testing time.",
        "Led a team of specialists in developing a Web Application Vulnerability Scanning Product.",
        "Designed and implemented an Out of Band Security Testing solution to identify RCE vulerabilities.",
        "Successfully managed deployments of security scanning solutions, reducing system downtime by 25%, and actively contributed to resolving CERT incidents, resulting in a 10% reduction in incident recurrence.",
        "Developed Machine Learning solutions to address complex penetration testing scenarios, increasing testing efficiency by 20% and improving the identification of critical vulnerabilities.",
        "Oversaw technical support teams, achieving a 15% improvement in response times and a 90% satisfaction rate among customers, and led BI initiatives, leading to a 10% increase in overall project efficiency and quality.",
      ]
    },
    {
      role: "Security Consultant",
      company: "Ansio Ltd",
      companylogo: require("./assets/images/ansio.jpg"),
      date: "july 2020 – Apr 2021",
      desc: "Proactively fortified cloud infrastructure, software, and network security, achieving a 15% decrease in security incidents and vulnerabilities, while also architecting a scalable cloud framework.",
      descBullets: [
        "Identified and resolved cloud infrastructure and software security flaws, resulting in a 75% reduction in identified vulnerabilities within Ansio Ltd's e-commerce applications.",
        "Successfully enforced PCI&DSS compliance, achieving and maintaining a 100% compliance rate, ensuring secure handling of payment card data.",
        "Implemented Single Sign-On (SSO) and Identity and Access Management (IAM) solutions, streamlining access control and authentication processes, reducing login-related support requests by 30%, and enhancing overall application security.",
        "Enhanced security measures by optimizing firewall rules, fortifying server security, and bolstering cloud security through policy configuration.",
        "Drafted a comprehensive cloud architecture blueprint, improving overall security posture and enabling scalability for the organization.",
      ]      
    },
    {
      role: "Robotics & AI/ML Intern",
      company: "Alphabt",
      companylogo: require("./assets/images/alphabt.png"),
      date: "Dec 2019 – Mar 2020",
      desc: "Contributed to TVS Motors Industrial Plant Automation through the development of advanced defect detection algorithms, customization of robotic arms, and implementation of AI and simulation solutions for improved efficiency and precision.",
      descBullets: [
        "Utilized TensorFlow and OpenCV for image processing to create a Python 3 program that achieved a 95% accuracy rate in detecting defects within an Industrial Plant Automation system, significantly improving quality control processes.",
        "Customized and optimized an open-source 3D printed robotic arm, resulting in enhanced performance and cost savings of 40% compared to commercially available alternatives.",
        "Led the assembly of a full 6 Degree of Freedom (DoF) robotic arm, ensuring precise mechanical alignment and structural integrity.",
        "Developed a Reinforcement Learning-based solution, enhancing the robotic arm's autonomy and adaptability by 30%, and enabling it to handle dynamic tasks effectively.",
        "Created real-time simulations of the robotic arm using the MuJoCo Physics Engine, providing a valuable tool for testing and optimizing its performance in a variety of scenarios.",
      ]      
    },
    {
      role: "Drone Engineer & AI/ML Intern",
      company: "Alphabt",
      companylogo: require("./assets/images/alphabt.png"),
      date: "May 2019 – Jun 2019",
      desc: "Contributed to TVS Motors Industrial Plant Automation through the assembly, electronics integration, and programming of a hexacopter, enabling autonomous flight control, way-point navigation, and remote video streaming with advanced technology integration.",
      descBullets: [
        "Assembled hexacopter and connected all electronics inside, programmed and calibrated flight controller using APM Planner.",
        "Programmed way-points and safety protocols using Groundcloths Ground Control Station software.",
        "Led the assembly of a full 6 Degree of Freedom (DoF) robotic arm, ensuring precise mechanical alignment and structural integrity.",
        "Developed a Reinforcement Learning-based solution, enhancing the robotic arm's autonomy and adaptability by 30%, and enabling it to handle dynamic tasks effectively.",
        "Developed and installed JetsonNano 3 in drone for remote streaming of video through wireless dongle. Used SSH for remote control of OBC, camera Gimbal through RPi 3 and remote execution of commands.",
      ]      
    },

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Testimonials & Recommendations",
  projects: [
    {
      image: require("./assets/images/saul_johnson.jpg"),
      position: "Head of Software Engineering at Breachlock",
      Recomendation: "Raman was one of the very first candidates I was lucky enough to interview as I sought to build a new AI/ML and data analytics focused team at BreachLock. It was immediately obvious that he would be a fantastic addition to the team, and after he came on board he proved this many times over. His blend of cybersecurity, computer science and AI/ML expertise and the skill and acumen with which he is able to apply this expertise saw him quickly and naturally step into a team lead role, and start contributing valuable insight to important technical discussions and decisions at a level I have rarely seen from somebody joining us straight from a degree programme. Outspoken, insightful, keenly intelligent and with a much sought-after and thoroughly integrated skillset, I am in no doubt whatsoever that Raman has a fantastic career ahead of him.",
      footerLink: [
        {
          name: "View",
          url: "https://www.linkedin.com/in/raman-kumar-rudraraju-6197ab156/"
        }
      ]
    },
    {
      image: require("./assets/images/varun_garg.jpg"),
      position: "Manager, Lead Security Automation Engineer at Breachlock",
      Recomendation: "Raman is a super talented teammate, I have worked with him directly and he has shown tremendous potential in him.   He has good expertise in Security and AI/ML with the potential of a team lead. He worked on multiple security products and managed them.  He is self and quick learner with a good problem-solving attitude.   Raman will be a good fit in any technical team and his skills will help any organization grow faster.",
      footerLink: [
        {
          name: "View",
          url: "https://www.linkedin.com/in/raman-kumar-rudraraju-6197ab156/"
        }
      ]
    },
    {
      image: require("./assets/images/harsha.jpg"),
      position: "Co-Founder of Metaverse platform - PlanetMeta",
      Recomendation: "Rudraraju Raman Kumar is a very good security analyst and finds very critical issues. His creativity in finding critical issues is remarkable. I wish him all the best in going more deeper in his skills.",
      footerLink: [
        {
          name: "View",
          url: "https://www.linkedin.com/in/raman-kumar-rudraraju-6197ab156/"
        }
      ]
    },
    {
      image: require("./assets/images/anirudh.jpg"),
      position: "Co-Founder of VideoForm",
      Recomendation: "Rudra's attention to detail and smart way of using a combination of conventional & unconventional techniques to find vulnerabilities is commendable.",
      footerLink: [
        {
          name: "View",
          url: "https://www.linkedin.com/in/raman-kumar-rudraraju-6197ab156/"
        }
      ]
    },
    {
      image: require("./assets/images/tejesh.jpg"),
      position: "Founder CEO at Defect Scanner",
      Recomendation: "Rudraraju Raman Kumar has demonstrated good efforts and abilities during his internship period under me that involved development of autonomous drone and AI based Intelligent Robotic Arm and other image processing applications for work as a Robotics & AI Vendor to TVS Motor.",
      footerLink: [
        {
          name: "View",
          url: "https://www.linkedin.com/in/raman-kumar-rudraraju-6197ab156/"
        }
      ]
    },
    {
      image: require("./assets/images/bhatia.jpg"),
      position: "Head CyberSecurity at Bata",
      Recomendation: "Rudraraju is a diligent person and shares his useful work with Organizations in order to take proactive steps towards risk mitigation and helps to avert any untoward incidents. A Big Thank You for your kind efforts.",
      footerLink: [
        {
          name: "View",
          url: "https://www.linkedin.com/in/raman-kumar-rudraraju-6197ab156/"
        }
      ]
    },

    {
      image: require("./assets/images/gaurav.jpg"),
      position: "CTO at IMS Learning Resources Pvt. Ltd.",
      Recomendation: "Radrarahu has very good skills with computer and networking hardware. His knowledge will be very helpful to anyone seeking advice in this field. ",
      footerLink: [
        {
          name: "View",
          url: "https://www.linkedin.com/in/raman-kumar-rudraraju-6197ab156/"
        }
      ]
    },
    {
      image: require("./assets/images/vishwani.jpg"),
      position: "Execuutive at IIT Mandi",
      Recomendation: "Raman, Thank you for contributing and helping us in figuring out the security vulnerabilities on the website of IIT Mandi Catalyst. Your initiative and report have helped us save our data and loss of information. I am sure you will be an asset to any organization you will work with. I wish you luck with your future projects. ",
      footerLink: [
        {
          name: "View",
          url: "https://www.linkedin.com/in/raman-kumar-rudraraju-6197ab156/"
        }
      ]
    },

  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "In the News",
      subtitle:
        "UD-led study may help dispel ‘range anxiety’ of drivers considering an EV",
      image: require("./assets/images/udaily.png"),
      imageAlt: "Udaily",
      footerLink: [
        {
          name: "News",
          url: "https://www.udel.edu/udaily/2023/february/willett-kempton-electric-vehicle-ev-range-research/"
        },
      ]
    },
    {
      title: "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
      subtitle:
        "An online non-credit course authorized by DeepLearning.AI and offered through Coursera",
      image: require("./assets/images/coursera.jpg"),
      imageAlt: "Coursera Certificate",
      footerLink: [
        {
          name: "view credentials",
          url: "https://www.coursera.org/account/accomplishments/certificate/7NKEZTAGB4NH"
        }
      ]
    },

    {
      title: "Data Science Orientation",
      subtitle: "An online non-credit course authorized by DeepLearning.AI and offered through Coursera",
      image: require("./assets/images/coursera.jpg"),
      imageAlt: "Coursera Certificate",
      footerLink: [
        {
          name: "view credentials",
          url: "https://www.credly.com/badges/e1a24752-0351-4e3f-a859-11152c96698f/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Research Papper Section

const blogSection = {
  title: "Research Publications",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://tojqi.net/index.php/journal/article/view/4256",
      title: "Industrial Robotic Arm Design enabled by AI-based Deep Reinforcement Learning using a combination of Deep Deterministic Policy Gradient (DDPG) and Hindsight Experience Replay (HER)",
      description:
        "Robotic arms have huge impact in Industrial process automation and help in significantly reducing the manufacturing time and cost of production. Most of the industrial robots deployed across various industries are programmed to perform repetitive tasks like welding, painting, packaging, moving or putting objects in predefined trajectories. This paper presents an implementation of additional intelligence imparted to a robotic arm for manufacturing purposes using Reinforcement Learning technique."
    },
    {
      url: "https://www.researchgate.net/publication/341579605_AI_Based_Crowd_Monitoring_System_Using_Drones_for_Identifying_Anti_Socialites",
      title: "AI Based Crowd Monitoring System Using Drones for Identifying Anti Socialites",
      description:
        "Monitoring large crowd gatherings for antisocial activities is required during events like Temple or church festivals, Exhibitions, Public places like Railway stations, Political Meetings etc. It is currently done by the Police or Law & Enforcements authorities with help of technologies like CCTV and nowadays with Drones. However, with the increase in the crowd, and possibilities of more antisocial elements, it becomes almost difficult for humans through native eyes or Closed Circuit Television (CCTV) cameras to monitor manually due to insufficient speed, data and knowledge. The main objective of the paper is to propose an Artificial Intelligence (AI) / Machine Learning based solution to track antisocial activities in crowded places. The proposed solution is based on an experimental work done for object detection and object movement in a traffic management system and applying new algorithms as modified for crowd management."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 3026856617",
  email_address: "ramankumar.rudr@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
