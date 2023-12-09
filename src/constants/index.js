import {
  network,
  khoj,
  cp,
  cyber,
  dsa,
  java,
  c,
  os,
  dbms,
  dice,
  imdb,
  password,
  port,
  contact,
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  mui,
  nodejs,
  react,
  redux,
  tailwindcss,
  currency,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },

  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },

  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },

  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: dsa,
    name: "dsa",
    type: "data-structure",
  },
  {
    imageUrl: java,
    name: "java",
    type: "language",
  },
  {
    imageUrl: c,
    name: "C/c++",
    type: "programing language",
  },
  {
    imageUrl: os,
    name: "os",
    type: "operating system",
  },
  {
    imageUrl: dbms,
    name: "dbms",
    type: "database",
  },
  ,
];

export const training = [
  {
    id: "1",
    title: "Competitive Programming Course using JAVA",
    company_name: "  Summer PEP | Cipher School   ",
    icon: cp,
    iconBg: "#b7e4c7",
    date: "June 2023- July 2023",
    points: [
      "•	Algorithmic thinking and problem-solving: Consistently top performer in coding challenges and contests, demonstrating a deep understanding of algorithmic thinking and problem-solving techniques.•	Algorithmic thinking and problem-solving: Consistently top performer in coding challenges and contests, demonstrating a deep understanding of algorithmic thinking and problem-solving techniques.",
      "Data structures and algorithms: Advanced knowledge and expertise in data structures and algorithms, enabling the ability to tackle complex problems efficiently and with precision.",
    ],
  },
  {
    id: "2",
    title: "React.js Training",
    company_name: "Winter PEP | Cipher Schools",
    icon: react,
    iconBg: "#a2d2ff",
    date: "Jan 2023 - Feb 2023 ",
    points: [
      "Developed proficiency in essential concepts of React.js, including conditional rendering, react-routing, redux, react lazy, custom hooks, experienced working collaborate on a project. ",
      "Explored the use of modern tools in React.js development, utilizing Git and GitHub for version control, Semantic UI for streamlined UI design.",
    ],
  },
  {
    id: "3",
    title: "Generic Online Training in Cyber Security ",
    company_name: "MeitY | Government of India ",
    icon: cyber,
    iconBg: "#a2d2ff",
    date: "Aug 2023 - Sept 2023 ",
    points: [
      "Successfully completed a self-paced online course in Cyber Security offered by the Ministry of Electronics & Information Technology (MeitY), Government of India. ",
      "Acquired foundational knowledge in cyber security, covering topics such as cyber threats, attacks, risk management, and essential cyber hygiene practices.",
      "•	Demonstrated a proactive commitment to professional development and a heightened awareness of the critical role of cyber security in the context of government ministries and departments.",
    ],
  },
];

export const experiences = [
  {
    id: "1",
    title: "Web Developer",
    company_name: "KHOJ: Find Ur Real You",
    icon: khoj,
    iconBg: "#b7e4c7",
    date: "Apr 2021- Dec 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    id: "2",
    title: "Chief Technical Officer",
    company_name: "KHOJ: Find Ur Real You",
    icon: khoj,
    iconBg: "#a2d2ff",
    date: "Apr 2021-Dec-2022 ",
    points: [
      "Led the technical team for various events, providing technical expertise and guidance to ensure successful event execution. ",
      "Managed and executed technical operations for various events, including sound systems, lighting, and stage design, resulting in seamless event delivery.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/anup0404",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/anup0404/",
  },
];

export const projects = [
  {
    iconUrl: port,
    theme: "btn-back-red",
    name: "3d-Portfolio",
    description:
      "My React-built portfolio is a cool 3D website with interactive features. Navigate through a floating island for details on my skills and projects. Enjoy a playful fox that responds to your keystrokes, adding charm and personalization. It's a unique and engaging showcase of my skills and accomplishments in a visually stunning environment.",
    link: "https://github.com/anup0404/3d-Portfolio",
  },
  {
    iconUrl: network,
    theme: "btn-back-green",
    name: "Networking App",
    description:
      "This platform, constructed with React and integrating Auth0 for authentication, is tailor-made for professionals. Functioning as a central hub, it fosters community connections and strengthens relationships. Users can elevate their skill sets, ensuring career success, and stay updated through a dedicated news section for relevant information.",
    link: "https://github.com/anup0404/Networking-app",
  },
  {
    iconUrl: currency,
    theme: "btn-back-blue",
    name: " Currency Converter",
    description:
      "I developed an advanced currency converter for seamless international transactions using dynamic currency conversion. Mastery of creating custom hooks simplified complex processes, enhancing functionality and readability. I also gained expertise in API proficiency, excelling in fetching real-time currency data and mastering asynchronous operations, adding valuable skills to my developer toolkit.",
    link: "https://github.com/anup0404/chai-react/tree/main/06CurrencyConverter",
  },
  {
    iconUrl: password,
    theme: "btn-back-pink",
    name: "Password Generator",
    description:
      "🔐 The goal is to create a random password generator that goes beyond the basics. Users can specify the length of their password and even choose the special characters and number if they want to include – it's all about customization! 🎯.",
    link: "https://github.com/anup0404/chai-react/tree/main/05-passwordGenerator",
  },
  {
    iconUrl: imdb,
    theme: "btn-back-black",
    name: "IMDB APP",
    description:
      "I developed a movie and TV show app using React, seamlessly integrated with a RESTful API for comprehensive data retrieval. The user-friendly interface allows easy searching and access to information about favorite movies and TV shows, showcasing my proficiency in React and front-end development with effective API integration.",
    link: "https://github.com/anup0404/IMDB-APP",
  },
  {
    iconUrl: dice,
    theme: "btn-back-yellow",
    name: "Dice-Game",
    description:
      "I created a React-based dice game styled with style-components. Users select a number, roll the dice with a play button, and score 2 points if the result matches their choice, otherwise losing 1 point. The game offers an engaging and visually appealing experience, blending React's interactivity with style-components for an attractive design.",
    link: "https://github.com/anup0404/Dice-Game",
  },
];

export const certification = [
  {
    idx: "1",
    course_image:
      "https://scontent-del1-2.xx.fbcdn.net/v/t39.30808-6/309609003_129401929851124_5645334374671341834_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=UacfLTaZH4QAX8ExqUz&_nc_ht=scontent-del1-2.xx&oh=00_AfBmHzitkhKkzpO63guh-x6dvNbGlct8mGRNa4Q7XrHnHg&oe=6579D577",
    course_name: "Competitive Programming Crash Course",
    course_school: "Cipher Schools",
    course_Link:
      "https://drive.google.com/file/d/19PFQJgmKYDigs4BP_FrGxuGLcXqtIOO6/view?usp=sharing",
    course_date: "June 2023-July 2023 ",
  },
  {
    idx: "2",
    course_image:
      "https://c8.alamy.com/comp/2B9TJPC/vector-black-line-concept-of-internet-technology-dbms-2B9TJPC.jpg",
    course_name: "Database Management System",
    course_school: "Infosys",
    course_Link:
      "https://drive.google.com/file/d/1lrbiwPEsSHQqJPOUfJ-_3ZQ3GRDCqq2l/view?usp=sharing",
    course_date: "June 2023-July 2023 ",
  },
  {
    idx: "3",
    course_image:
      "https://cramwise.org/wp-content/uploads/2021/05/CompTIA-Linux-XK1-005-official-exam-study-guides.jpg",
    course_name: " CompTIA Linux+",
    course_school: "Cybrary",
    course_Link:
      "https://drive.google.com/file/d/1srFKuMbxF3lhMVG_kk-7YJ5gdufIRn-N/view?usp=sharing",
    course_date: "Feb 2023-March 2023 ",
  },
  {
    idx: "4",
    course_image:
      "https://msatechnosoft.in/blog/wp-content/uploads/2018/09/DSA-MSA-Technosoft.png",
    course_name: "Data Structure & Algorithm",
    course_school: "Cipher Schools",
    course_Link:
      "https://drive.google.com/file/d/1K4DHAwd_6X-qpFtsCUwIA4TOXgKjI4SU/view?usp=sharing",
    course_date: "Feb 2023-March 2023 ",
  },
  {
    idx: "5",
    course_image:
      "https://futureskillsprime.in/sites/default/files/inline-images/Blog%20Images_Internal_Top%20Benefits%20of%20Cloud%20Computing%20Blog-1.jpg",
    course_name: "Cloud Computing on AWS",
    course_school: "Udemy",
    course_Link:
      "https://drive.google.com/file/d/1DVpmWUp7KiOZLziATwg-CBp6aDf3J2zn/view?usp=sharing",
    course_date: "March 2023-April 2023",
  },
  {
    idx: "6",
    course_image:
      "https://www.risk.net/sites/default/files/styles/landscape_750_463/public/2017-06/Hacker.jpg?itok=u-wkUDiX",
    course_name: "Hacking and Patching",
    course_school: "Coursera",
    course_Link:
      "https://drive.google.com/file/d/1x_XQBOWvEtKzegI2gAaxjmzWnQgMHulN/view?usp=sharing",
    course_date: "Oct 2023-Nov 2023",
  },
  {
    idx: "7",
    course_image:
      "https://www.traininginbangalore.com/images/infographics/c-training-in-bangalore-tib.jpg",
    course_name: "C and C++ Programming",
    course_school: "Board Infinity",
    course_Link:
      "https://drive.google.com/file/d/13AtTi8c7lq6pvgzvSXeRafqKeGigmifd/view?usp=sharing",
    course_date: "June 2022-July 2022 ",
  },
  {
    idx: "8",
    course_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScP8PZhDa8zMyCd-65f_Rwvhz9kV-JGUn_GQ&usqp=CAU",
    course_name: "Penetration Testing and Ethical Hacking",
    course_school: "Cybrary",
    course_Link:
      "https://drive.google.com/file/d/158JJWYt-yU4Z6YGoa1u6uwxeujqUgclY/view?usp=sharing",
    course_date: "Oct 2023-Nov 2023 ",
  },
  {
    idx: "9",
    course_image:
      "https://assets-global.website-files.com/63eef1be981a383fb127661f/6468c2f5bc42ab1b36f1e8a7_OPT.png",
    course_name: "Offensive Penetration Testing",
    course_school: "Cybrary",
    course_Link:
      "https://drive.google.com/file/d/1VSUSeFvWmRWu0qnrBdnhPxsB_sYsOsi6/view?usp=sharing",
    course_date: "Oct 2023-Nov 2023 ",
  },
  {
    idx: "10",
    course_image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_rhxaeJLqILGCNkaQcnwuAuuJ4PGAwCqQmg&usqp=CAU",
    course_name: "Stage of Incident Response",
    course_school: "Coursera",
    course_Link:
      "https://drive.google.com/file/d/1IuXmyPju1wlhZ6pGQC3UbqCK1zfMO25u/view?usp=sharing",
    course_date: "March 2023-April 2023 ",
  },
  {
    idx: "11",
    course_image:
      "https://dbseer.com/wp-content/uploads/2019/08/Data-Analysis-scaled.jpg",
    course_name: "Data Science 101",
    course_school: "IBM",
    course_Link:
      "https://courses.yl-ptech.skillsnetwork.site/certificates/877b5791929e46c7a68f65f934e07cd6",
    course_date: "Oct 2023 ",
  },
  {
    idx: "12",
    course_image: "https://www.vemc.co.in/images/wind/wind%20turbine.png",
    course_name: "Wind Energy",
    course_school: "Coursera",
    course_Link:
      "https://drive.google.com/file/d/1d2D6AJQug1lUIMOfnTPKoSH31H8zBkYO/view?usp=sharing",
    course_date: "June 2021-July 2021 ",
  },
];
