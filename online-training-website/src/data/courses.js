const courses = [

{
  id: 1,
  title: "React JS Masterclass",
  instructor: "John Smith",
  price: "₹99",
  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  duration: "8 Weeks",
  level: "Beginner to Advanced",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/dGcsHMXbSOA",
  pdf: "/notes/React.js.pdf",
  assignments:["Build Todo App","Build Weather App"],
  quiz:["React Components","React Hooks"],
  skills:["React","JSX","Hooks","Routing"],
  syllabus:[
    "Introduction to React",
    "JSX",
    "Components",
    "State & Props",
    "Hooks",
    "Routing"
  ]
},

{
  id: 2,
  title: "Java Programming",
  instructor: "James Wilson",
  price: "₹79",
  image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
  duration: "10 Weeks",
  level: "Beginner",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/xk4_1vDrzzo",
  pdf: "/notes/java.pdf",
  assignments:["Bank Management System"],
  quiz:["OOP Concepts","Inheritance"],
  skills:["Java","OOP","Collections"],
  syllabus:[
    "Java Basics",
    "Loops",
    "Arrays",
    "OOP",
    "Collections",
    "Exception Handling"
  ]
},

{
  id: 3,
  title: "Python Complete Course",
  instructor: "David Miller",
  price: "₹99",
  image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
  duration: "6 Weeks",
  level: "Beginner",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/rfscVS0vtbw",
  pdf: "/notes/python.pdf",
  assignments:["Calculator App"],
  quiz:["Functions","Lists"],
  skills:["Python","Automation","Problem Solving"],
  syllabus:[
    "Python Basics",
    "Data Types",
    "Functions",
    "Lists",
    "File Handling"
  ]
},

{
  id: 4,
  title: "Node JS Backend Development",
  instructor: "Michael Brown",
  price: "₹89",
  image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
  duration: "8 Weeks",
  level: "Intermediate",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/Oe421EPjeBE",
  pdf: "/notes/nodejs.pdf",
  assignments:["REST API Project"],
  quiz:["Express","Middleware"],
  skills:["Node","Express","MongoDB"],
  syllabus:[
    "Node Basics",
    "Express",
    "Routing",
    "MongoDB",
    "Authentication"
  ]
},

{
  id: 5,
  title: "MongoDB Database",
  instructor: "Sophia Lee",
  price: "₹79",
  image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
  duration: "4 Weeks",
  level: "Beginner",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/ofme2o29ngU",
  pdf: "/notes/Mongo-DB.pdf",
  assignments:["Student Database"],
  quiz:["CRUD","Aggregation"],
  skills:["MongoDB","NoSQL"],
  syllabus:[
    "Introduction",
    "CRUD",
    "Indexes",
    "Aggregation"
  ]
},

{
  id: 6,
  title: "Data Structures & Algorithms",
  instructor: "Robert Taylor",
  price: "₹59",
  image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
  duration: "12 Weeks",
  level: "Intermediate",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/8hly31xKli0",
  pdf: "/notes/dsaNotes.pdf",
  assignments:["Sorting Visualizer"],
  quiz:["Trees","Graphs"],
  skills:["DSA","Problem Solving"],
  syllabus:[
    "Arrays",
    "Linked Lists",
    "Stacks",
    "Queues",
    "Trees",
    "Graphs"
  ]
},

{
  id: 7,
  title: "Machine Learning Basics",
  instructor: "Andrew Clark",
  price: "₹99",
  image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
  duration: "10 Weeks",
  level: "Intermediate",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/GwIo3gDZCVQ",
  pdf: "/notes/mlnotes.pdf",
  assignments:["Prediction Model"],
  quiz:["Regression","Classification"],
  skills:["ML","Python","Data Analysis"],
  syllabus:[
    "Introduction",
    "Regression",
    "Classification",
    "Model Evaluation"
  ]
},

{
  id: 8,
  title: "Cyber Security Fundamentals",
  instructor: "Ethan White",
  price: "₹109",
  image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe",
  duration: "8 Weeks",
  level: "Beginner",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/inWWhr5tnEA",
  pdf: "/notes/CyberSecurity.pdf",
  assignments:["Security Audit"],
  quiz:["Networking","Threats"],
  skills:["Cyber Security","Networking"],
  syllabus:[
    "Networking",
    "Threat Analysis",
    "Encryption",
    "Security Tools"
  ]
},

{
  id: 9,
  title: "UI/UX Design",
  instructor: "Emma Johnson",
  price: "₹89",
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  duration: "6 Weeks",
  level: "Beginner",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/c9Wg6Cb_YlU",
  pdf: "/notes/uiux-notes.pdf",
  assignments:["Portfolio Design"],
  quiz:["Figma","Design Principles"],
  skills:["UI","UX","Figma"],
  syllabus:[
    "Design Thinking",
    "Wireframing",
    "Prototyping",
    "Figma"
  ]
},

{
  id: 10,
  title: "Cloud Computing AWS",
  instructor: "Chris Martin",
  price: "₹89",
  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
  duration: "10 Weeks",
  level: "Intermediate",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/ulprqHHWlng",
  pdf: "/notes/CloudComputing.pdf",
  assignments:["Deploy Web App"],
  quiz:["EC2","S3"],
  skills:["AWS","Cloud","DevOps"],
  syllabus:[
    "Cloud Basics",
    "EC2",
    "S3",
    "IAM",
    "Deployment"
  ]
},

{
  id: 11,
  title: "Full Stack Web Development",
  instructor: "Daniel Scott",
  price: "₹99",
  image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  duration: "12 Weeks",
  level: "Intermediate",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/nu_pCVPKzTk",
  pdf: "/notes/FULLSTACKDEVELOPMENT.pdf",
  assignments:["Build E-Commerce Website"],
  quiz:["Frontend","Backend"],
  skills:["HTML","CSS","JavaScript","React","Node"],
  syllabus:[
    "HTML & CSS",
    "JavaScript",
    "React",
    "Node.js",
    "MongoDB"
  ]
},

{
  id: 12,
  title: "C Programming Fundamentals",
  instructor: "Richard Hall",
  price: "₹99",
  image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97",
  duration: "6 Weeks",
  level: "Beginner",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/KJgsSFOSQv0",
  pdf: "/notes/cnotes.pdf",
  assignments:["Student Record System"],
  quiz:["Pointers","Functions"],
  skills:["C","Programming Logic"],
  syllabus:[
    "Basics",
    "Operators",
    "Functions",
    "Pointers",
    "Structures"
  ]
},

{
  id: 13,
  title: "C# Programming",
  instructor: "Thomas Walker",
  price: "₹89",
  image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",
  duration: "8 Weeks",
  level: "Beginner",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/vLnPwxZdW4Y",
  pdf: "/notes/C#Notes.pdf",
  assignments:["Library Management System"],
  quiz:["OOP","STL"],
  skills:["C#","OOP","STL"],
  syllabus:[
    "Basics",
    "Classes",
    "Inheritance",
    "Polymorphism",
    "STL"
  ]
},

{
  id: 14,
  title: "Android App Development",
  instructor: "Sarah Wilson",
  price: "₹59",
  image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
  duration: "10 Weeks",
  level: "Intermediate",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/fis26HvvDII",
  pdf: "/notes/android.pdf",
  assignments:["Food Delivery App"],
  quiz:["Activities","Firebase"],
  skills:["Android","Java","Firebase"],
  syllabus:[
    "Android Basics",
    "Layouts",
    "Activities",
    "Firebase",
    "Deployment"
  ]
},

{
  id: 15,
  title: "Flutter Development",
  instructor: "Olivia Green",
  price: "₹59",
  image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
  duration: "8 Weeks",
  level: "Intermediate",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/VPvVD8t02U8",
  pdf: "/notes/flutter.pdf",
  assignments:["Chat Application"],
  quiz:["Widgets","State Management"],
  skills:["Flutter","Dart"],
  syllabus:[
    "Dart Basics",
    "Widgets",
    "Navigation",
    "State Management",
    "Firebase"
  ]
},

{
  id: 16,
  title: "Artificial Intelligence",
  instructor: "Andrew Roberts",
  price: "₹99",
  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  duration: "12 Weeks",
  level: "Advanced",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/JMUxmLyrhSk",
  pdf: "/notes/ARTIFICIAL INTELLIGENCE.pdf",
  assignments:["AI Chatbot"],
  quiz:["Search Algorithms","Neural Networks"],
  skills:["AI","Python","ML"],
  syllabus:[
    "Introduction",
    "Search",
    "Knowledge Representation",
    "Neural Networks",
    "Applications"
  ]
},

{
  id: 17,
  title: "Deep Learning",
  instructor: "Kevin Moore",
  price: "₹89",
  image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1",
  duration: "12 Weeks",
  level: "Advanced",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/aircAruvnKk",
  pdf: "/notes/deeplearning.pdf",
  assignments:["Image Classifier"],
  quiz:["CNN","RNN"],
  skills:["TensorFlow","Deep Learning"],
  syllabus:[
    "Neural Networks",
    "CNN",
    "RNN",
    "Transfer Learning",
    "Projects"
  ]
},

{
  id: 18,
  title: "DevOps Engineering",
  instructor: "Mark Evans",
  price: "₹89",
  image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
  duration: "10 Weeks",
  level: "Intermediate",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/j5Zsa_eOXeY",
  pdf: "/notes/DevOps(R22A0521).pdf",
  assignments:["CI/CD Pipeline"],
  quiz:["Docker","Jenkins"],
  skills:["Docker","Kubernetes","CI/CD"],
  syllabus:[
    "Linux",
    "Git",
    "Docker",
    "Jenkins",
    "Kubernetes"
  ]
},

{
  id: 19,
  title: "Blockchain Development",
  instructor: "Nathan Cooper",
  price: "₹99",
  image: "https://images.unsplash.com/photo-1639762681057-408e52192e55",
  duration: "10 Weeks",
  level: "Advanced",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/SSo_EIwHSd4",
  pdf: "/notes/blockchain.pdf",
  assignments:["Smart Contract"],
  quiz:["Ethereum","Solidity"],
  skills:["Blockchain","Solidity"],
  syllabus:[
    "Blockchain Basics",
    "Ethereum",
    "Smart Contracts",
    "Solidity",
    "DApps"
  ]
},

{
  id: 20,
  title: "Software Testing",
  instructor: "Grace Turner",
  price: "₹99",
  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  duration: "6 Weeks",
  level: "Beginner",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/r9HdJ8P6GQI",
  pdf: "/notes/softwaretesting.pdf",
  assignments:["Test Case Design"],
  quiz:["Manual Testing","Automation"],
  skills:["Testing","Selenium"],
  syllabus:[
    "Testing Basics",
    "Test Cases",
    "Bug Life Cycle",
    "Selenium",
    "Automation"
  ]
},

{
  id: 21,
  title: "SQL Database Mastery",
  instructor: "William Scott",
  price: "₹159",
  image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
  duration: "6 Weeks",
  level: "Beginner",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/HXV3zeQKqGY",
  pdf: "/notes/sql.pdf",
  assignments:["Library Database Project"],
  quiz:["Joins","Queries"],
  skills:["SQL","Database Design"],
  syllabus:[
    "SQL Basics",
    "CRUD Operations",
    "Joins",
    "Views",
    "Stored Procedures"
  ]
},

{
  id: 22,
  title: "PostgreSQL Complete Guide",
  instructor: "Sophia Adams",
  price: "₹99",
  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  duration: "6 Weeks",
  level: "Intermediate",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/qw--VYLpxG4",
  pdf: "/notes/pgrsSql.pdf",
  assignments:["Employee Management DB"],
  quiz:["Indexes","Functions"],
  skills:["PostgreSQL","SQL"],
  syllabus:[
    "PostgreSQL Basics",
    "Queries",
    "Indexes",
    "Functions",
    "Optimization"
  ]
},

{
  id: 23,
  title: "Linux Administration",
  instructor: "Daniel Harris",
  price: "₹89",
  image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  duration: "8 Weeks",
  level: "Beginner",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/sWbUDq4S6Y8",
  pdf: "/notes/linux.pdf",
  assignments:["Linux Server Setup"],
  quiz:["Commands","Permissions"],
  skills:["Linux","Shell"],
  syllabus:[
    "Linux Basics",
    "Commands",
    "Users",
    "Networking",
    "Shell Scripting"
  ]
},

{
  id: 24,
  title: "Git & GitHub",
  instructor: "Emma Davis",
  price: "₹59",
  image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498",
  duration: "3 Weeks",
  level: "Beginner",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/RGOj5yH7evk",
  pdf: "/notes/git.pdf",
  assignments:["Portfolio Repository"],
  quiz:["Branches","Merge"],
  skills:["Git","GitHub"],
  syllabus:[
    "Version Control",
    "Git Basics",
    "Branching",
    "Pull Requests",
    "GitHub Actions"
  ]
},

{
  id: 25,
  title: "Spring Boot Development",
  instructor: "James Carter",
  price: "₹79",
  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  duration: "10 Weeks",
  level: "Intermediate",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/9SGDpanrc8U",
  pdf: "/notes/springBoot.pdf",
  assignments:["REST API"],
  quiz:["JPA","Security"],
  skills:["Java","Spring Boot"],
  syllabus:[
    "Spring Core",
    "REST APIs",
    "JPA",
    "Security",
    "Deployment"
  ]
},

{
  id: 26,
  title: "Django Web Development",
  instructor: "Oliver White",
  price: "₹129",
  image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935",
  duration: "8 Weeks",
  level: "Intermediate",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/F5mRW0jo-U4",
  pdf: "/notes/djangof.pdf",
  assignments:["Blog Application"],
  quiz:["Models","Views"],
  skills:["Python","Django"],
  syllabus:[
    "Django Basics",
    "Models",
    "Views",
    "Authentication",
    "Deployment"
  ]
},

{
  id: 27,
  title: "PHP Programming",
  instructor: "Ryan Lewis",
  price: "₹69",
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  duration: "6 Weeks",
  level: "Beginner",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/OK_JCtrrv-c",
  pdf: "/notes/php.pdf",
  assignments:["Student Portal"],
  quiz:["Functions","Forms"],
  skills:["PHP","Backend"],
  syllabus:[
    "PHP Basics",
    "Forms",
    "Sessions",
    "Database Connectivity",
    "Projects"
  ]
},

{
  id: 28,
  title: "Laravel Framework",
  instructor: "Noah Hall",
  price: "₹129",
  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  duration: "8 Weeks",
  level: "Intermediate",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/ImtZ5yENzgE",
  pdf: "/notes/laravel.pdf",
  assignments:["E-Commerce Backend"],
  quiz:["Routing","Eloquent"],
  skills:["Laravel","PHP"],
  syllabus:[
    "Laravel Basics",
    "Routing",
    "Blade",
    "Eloquent ORM",
    "Authentication"
  ]
},

{
  id: 29,
  title: "Angular Development",
  instructor: "Charlotte King",
  price: "₹1499",
  image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
  duration: "8 Weeks",
  level: "Intermediate",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/3qBXWUpoPHo",
  pdf: "/notes/angular.pdf",
  assignments:["Task Manager"],
  quiz:["Components","Services"],
  skills:["Angular","TypeScript"],
  syllabus:[
    "Angular Basics",
    "Components",
    "Services",
    "Routing",
    "RxJS"
  ]
},

{
  id: 30,
  title: "Vue.js Development",
  instructor: "Benjamin Clark",
  price: "₹99",
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
  duration: "8 Weeks",
  level: "Intermediate",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/qZXt1Aom3Cs",
  pdf: "/notes/vue.pdf",
  assignments:["Expense Tracker"],
  quiz:["Directives","Vue Router"],
  skills:["Vue","JavaScript"],
  syllabus:[
    "Vue Basics",
    "Components",
    "Vue Router",
    "Vuex",
    "Projects"
  ]
},

{
  id: 31,
  title: "Ethical Hacking",
  instructor: "Ethan Walker",
  price: "₹179",
  image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe",
  duration: "10 Weeks",
  level: "Intermediate",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/3Kq1MIfTWCE",
  pdf: "/notes/ethical-hacking.pdf",
  assignments:["Vulnerability Assessment Report"],
  quiz:["Footprinting","Penetration Testing"],
  skills:["Cyber Security","Ethical Hacking","Networking"],
  syllabus:[
    "Introduction to Ethical Hacking",
    "Footprinting",
    "Scanning Networks",
    "System Hacking",
    "Web Security"
  ]
},

{
  id: 32,
  title: "Computer Networks",
  instructor: "Alexander Green",
  price: "₹199",
  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  duration: "8 Weeks",
  level: "Beginner",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/qiQR5rTSshw",
  pdf: "/notes/ComputerNetwork.pdf",
  assignments:["Network Design Project"],
  quiz:["OSI Model","TCP/IP"],
  skills:["Networking","Protocols"],
  syllabus:[
    "Introduction to Networks",
    "OSI Model",
    "TCP/IP",
    "Routing",
    "Network Security"
  ]
},

{
  id: 33,
  title: "Operating Systems",
  instructor: "Sophia Carter",
  price: "₹199",
  image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  duration: "8 Weeks",
  level: "Intermediate",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/vBURTt97EkA",
  pdf: "/notes/os.pdf",
  assignments:["CPU Scheduling Simulator"],
  quiz:["Processes","Memory Management"],
  skills:["OS","System Programming"],
  syllabus:[
    "Introduction",
    "Processes",
    "Threads",
    "Memory Management",
    "Deadlocks"
  ]
},

{
  id: 34,
  title: "Database Management Systems",
  instructor: "Michael Anderson",
  price: "₹299",
  image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d",
  duration: "8 Weeks",
  level: "Beginner",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/e7sAf4SbS_g",
  pdf: "/notes/dbms.pdf",
  assignments:["College Database Design"],
  quiz:["Normalization","Transactions"],
  skills:["DBMS","SQL"],
  syllabus:[
    "DBMS Basics",
    "ER Models",
    "Normalization",
    "Transactions",
    "Concurrency Control"
  ]
},

{
  id: 35,
  title: "Compiler Design",
  instructor: "Grace Wilson",
  price: "₹99",
  image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
  duration: "8 Weeks",
  level: "Advanced",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/V5b67Rj98nI",
  pdf: "/notes/compiler.pdf",
  assignments:["Mini Compiler Project"],
  quiz:["Lexical Analysis","Parsing"],
  skills:["Compiler Design","Automata"],
  syllabus:[
    "Introduction",
    "Lexical Analysis",
    "Syntax Analysis",
    "Code Generation",
    "Optimization"
  ]
},

{
  id: 36,
  title: "Data Science Masterclass",
  instructor: "Andrew Foster",
  price: "₹199",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  duration: "12 Weeks",
  level: "Intermediate",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/X3paOmcrTjQ",
  pdf: "/notes/datascience.pdf",
  assignments:["Customer Segmentation Project"],
  quiz:["Data Cleaning","EDA"],
  skills:["Python","Data Science","Statistics"],
  syllabus:[
    "Data Science Overview",
    "Data Cleaning",
    "Exploratory Data Analysis",
    "Visualization",
    "Machine Learning Basics"
  ]
},

{
  id: 37,
  title: "Data Analytics",
  instructor: "Emily Johnson",
  price: "₹199",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  duration: "8 Weeks",
  level: "Beginner",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/yZvFH7B6gKI",
  pdf: "/notes/dataanalytics.pdf",
  assignments:["Sales Dashboard Analysis"],
  quiz:["KPIs","Reports"],
  skills:["Analytics","Excel","SQL"],
  syllabus:[
    "Analytics Fundamentals",
    "Data Collection",
    "Reporting",
    "KPIs",
    "Business Insights"
  ]
},

{
  id: 38,
  title: "Generative AI",
  instructor: "Andrew Johnson",
  price: "₹399",
  image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  duration: "8 Weeks",
  level: "Intermediate",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/mEsleV16qdo",
  pdf: "/notes/genai.pdf",
  assignments:["AI Content Generator"],
  quiz:["LLMs","Diffusion Models"],
  skills:["Generative AI","LLMs","Prompting"],
  syllabus:[
    "Introduction to Generative AI",
    "Large Language Models",
    "Prompting",
    "Image Generation",
    "Applications"
  ]
},


{
  id: 39,
  title: "Competitive Programming",
  instructor: "Robert Evans",
  price: "₹169",
  image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
  duration: "12 Weeks",
  level: "Intermediate",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/8hly31xKli0",
  pdf: "/notes/competitive-programming.pdf",
  assignments:["100 Coding Problems"],
  quiz:["Greedy","Dynamic Programming"],
  skills:["Algorithms","Problem Solving","DSA"],
  syllabus:[
    "Complexity Analysis",
    "Greedy Algorithms",
    "Dynamic Programming",
    "Graphs",
    "Contest Strategies"
  ]
},

{
  id: 40,
  title: "Advanced Data Structures & Algorithms",
  instructor: "Kevin Anderson",
  price: "₹199",
  image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea",
  duration: "12 Weeks",
  level: "Advanced",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/RBSGKlAvoiM",
  pdf: "/notes/advanced-dsa.pdf",
  assignments:["Algorithm Visualizer"],
  quiz:["Segment Trees","Trie"],
  skills:["DSA","Algorithms","Problem Solving"],
  syllabus:[
    "Advanced Trees",
    "Trie",
    "Segment Trees",
    "Graph Algorithms",
    "Dynamic Programming"
  ]
},

{
  id: 41,
  title: "Web Security",
  instructor: "Olivia Walker",
  price: "₹159",
  image: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe",
  duration: "8 Weeks",
  level: "Intermediate",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/WlmKwIe9z1Q",
  pdf: "/notes/web-security.pdf",
  assignments:["Website Security Audit"],
  quiz:["XSS","SQL Injection"],
  skills:["Security","Web Protection","OWASP"],
  syllabus:[
    "Security Fundamentals",
    "Authentication",
    "XSS",
    "SQL Injection",
    "OWASP Top 10"
  ]
},

{
  id: 42,
  title: "Digital Marketing",
  instructor: "Emma Thompson",
  price: "₹199",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
  duration: "6 Weeks",
  level: "Beginner",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/nU-IIXBWlS4",
  pdf: "/notes/digital-marketing.pdf",
  assignments:["Marketing Campaign"],
  quiz:["Social Media","Advertising"],
  skills:["Marketing","Branding","Analytics"],
  syllabus:[
    "Marketing Basics",
    "Social Media Marketing",
    "Email Marketing",
    "Paid Advertising",
    "Analytics"
  ]
},

{
  id: 43,
  title: "SEO Mastery",
  instructor: "Daniel Moore",
  price: "₹99",
  image: "https://images.unsplash.com/photo-1557838923-2985c318be48",
  duration: "5 Weeks",
  level: "Beginner",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/DvwS7cV9GmQ",
  pdf: "/notes/seo.pdf",
  assignments:["Website SEO Audit"],
  quiz:["Keywords","Backlinks"],
  skills:["SEO","Content Strategy"],
  syllabus:[
    "SEO Fundamentals",
    "Keyword Research",
    "On-Page SEO",
    "Off-Page SEO",
    "SEO Tools"
  ]
},

{
  id: 44,
  title: "Content Writing",
  instructor: "Sophia Lewis",
  price: "₹79",
  image: "https://images.unsplash.com/photo-1455390582262-044cdead277a",
  duration: "4 Weeks",
  level: "Beginner",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/ZvJ5ihE8d6k",
  pdf: "/notes/content-writing.pdf",
  assignments:["Blog Writing Project"],
  quiz:["Copywriting","Editing"],
  skills:["Writing","Communication"],
  syllabus:[
    "Writing Basics",
    "Blog Writing",
    "Copywriting",
    "Editing",
    "Content Strategy"
  ]
},

{
  id: 45,
  title: "Graphic Design",
  instructor: "Michael Scott",
  price: "₹229",
  image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
  duration: "8 Weeks",
  level: "Beginner",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/WONZVnlam6U",
  pdf: "/notes/graphic-design.pdf",
  assignments:["Brand Identity Design"],
  quiz:["Typography","Color Theory"],
  skills:["Graphic Design","Creativity"],
  syllabus:[
    "Design Principles",
    "Typography",
    "Color Theory",
    "Branding",
    "Portfolio Design"
  ]
},

{
  id: 46,
  title: "Adobe Photoshop",
  instructor: "Grace Wilson",
  price: "₹199",
  image: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6",
  duration: "6 Weeks",
  level: "Beginner",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/IyR_uYsRdPs",
  pdf: "/notes/photoshop.pdf",
  assignments:["Poster Design"],
  quiz:["Layers","Photo Editing"],
  skills:["Photoshop","Photo Editing"],
  syllabus:[
    "Photoshop Basics",
    "Layers",
    "Selections",
    "Retouching",
    "Advanced Effects"
  ]
},

{
  id: 47,
  title: "Adobe Illustrator",
  instructor: "Benjamin Clark",
  price: "₹199",
  image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
  duration: "6 Weeks",
  level: "Beginner",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/Ib8UBwu3yGA",
  pdf: "/notes/illustrator.pdf",
  assignments:["Logo Design"],
  quiz:["Vector Graphics","Pen Tool"],
  skills:["Illustrator","Vector Design"],
  syllabus:[
    "Illustrator Basics",
    "Shapes",
    "Pen Tool",
    "Vector Illustration",
    "Logo Design"
  ]
},

{
  id: 48,
  title: "Video Editing Masterclass",
  instructor: "Christopher Martin",
  price: "₹299",
  image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d",
  duration: "8 Weeks",
  level: "Beginner",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/8eDsvKwM40U",
  pdf: "/notes/video-editing.pdf",
  assignments:["YouTube Video Project"],
  quiz:["Transitions","Color Grading"],
  skills:["Video Editing","Premiere Pro"],
  syllabus:[
    "Editing Basics",
    "Transitions",
    "Audio Editing",
    "Color Grading",
    "Exporting"
  ]
},

{
  id: 49,
  title: "Entrepreneurship & Startup Development",
  instructor: "Andrew Roberts",
  price: "₹299",
  image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a",
  duration: "10 Weeks",
  level: "Beginner to Intermediate",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/CBYhVcO4WgI",
  pdf: "/notes/entrepreneurship.pdf",
  assignments:["Business Plan Creation"],
  quiz:["Funding","Business Models"],
  skills:["Entrepreneurship","Leadership","Business"],
  syllabus:[
    "Startup Fundamentals",
    "Business Models",
    "Market Research",
    "Funding & Investment",
    "Scaling a Startup"
  ]
},

{
  id: 50,
  title: "Rust Programming Mastery",
  instructor: "Liam Anderson",
  price: "₹129",
  image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  duration: "8 Weeks",
  level: "Intermediate",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/zF34dRivLOw",
  pdf: "/notes/rust.pdf",
  assignments: ["Build CLI Tool"],
  quiz: ["Ownership", "Borrowing"],
  skills: ["Rust", "System Programming", "Memory Safety"],
  syllabus: [
    "Rust Basics",
    "Ownership Model",
    "Borrowing & Lifetimes",
    "Concurrency",
    "Project Development"
  ]
},

{
  id: 51,
  title: "Go (Golang) Backend Development",
  instructor: "Ava Thompson",
  price: "₹119",
  image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
  duration: "8 Weeks",
  level: "Beginner to Intermediate",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/yyUHQIec83I",
  pdf: "/notes/golang.pdf",
  assignments: ["REST API in Go"],
  quiz: ["Goroutines", "Channels"],
  skills: ["Go", "Backend Development", "Microservices"],
  syllabus: [
    "Go Basics",
    "Structs & Interfaces",
    "Concurrency",
    "REST APIs",
    "Microservices Architecture"
  ]
},

{
  id: 52,
  title: "System Design Fundamentals",
  instructor: "Noah Williams",
  price: "₹149",
  image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
  duration: "6 Weeks",
  level: "Intermediate",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/UzLMhqg3_Wc",
  pdf: "/notes/system-design.pdf",
  assignments: ["Design Instagram System"],
  quiz: ["Scalability", "Load Balancing"],
  skills: ["System Design", "Architecture", "Scalability"],
  syllabus: [
    "Scalable Systems",
    "Load Balancing",
    "Caching",
    "Databases at Scale",
    "Microservices Design"
  ]
},

{
  id: 53,
  title: "Internet of Things (IoT) Development",
  instructor: "Mia Carter",
  price: "₹139",
  image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
  duration: "8 Weeks",
  level: "Beginner to Intermediate",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/6mBO2vqLv38",
  pdf: "/notes/iot.pdf",
  assignments: ["Smart Home Project"],
  quiz: ["Sensors", "Embedded Systems"],
  skills: ["IoT", "Embedded Systems", "Arduino"],
  syllabus: [
    "IoT Basics",
    "Sensors & Actuators",
    "Microcontrollers",
    "Cloud Integration",
    "Smart Devices"
  ]
},

{
  id: 54,
  title: "Big Data Analytics",
  instructor: "Ethan Parker",
  price: "₹159",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
  duration: "10 Weeks",
  level: "Intermediate",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/yZvFH7B6gKI",
  pdf: "/notes/bigdata.pdf",
  assignments: ["Hadoop Data Pipeline"],
  quiz: ["Hadoop", "Spark"],
  skills: ["Big Data", "Hadoop", "Spark"],
  syllabus: [
    "Big Data Introduction",
    "Hadoop Ecosystem",
    "Spark Processing",
    "Data Pipelines",
    "Data Visualization"
  ]
},

{
  id: 55,
  title: "Quantum Computing Fundamentals",
  instructor: "Dr. Alan Hughes",
  price: "₹199",
  image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb",
  duration: "8 Weeks",
  level: "Advanced",
  certificate: "Yes",
  video: "https://www.youtube.com/embed/QuR969uMICM",
  pdf: "/notes/quantum.pdf",
  assignments: ["Quantum Circuit Simulation"],
  quiz: ["Qubits", "Superposition"],
  skills: ["Quantum Computing", "Qiskit", "Linear Algebra"],
  syllabus: [
    "Quantum Basics",
    "Qubits & Gates",
    "Superposition",
    "Entanglement",
    "Quantum Algorithms"
  ]
}

];


export default courses;