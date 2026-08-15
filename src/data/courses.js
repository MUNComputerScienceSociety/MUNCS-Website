export const COURSES = [
  // 1000-Level Undergraduate Courses
  {
    id: "comp-1000",
    code: "COMP 1000",
    title: "Computer Science - An Introduction",
    level: 1000,
    description: "An introduction to the field of Computer Science for non-majors and prospective students, covering computational thinking, basic concepts of hardware/software, algorithms, and digital literacy.",
    recommendedBooks: [
      {
        title: "Computer Science Illuminated",
        author: "Nell Dale and John Lewis",
        link: "https://www.jblearning.com/"
      }
    ],
    videoTutorials: [
      {
        title: "CS50: Introduction to Computer Science",
        platform: "Harvard / edX / YouTube",
        link: "https://www.youtube.com/watch?v=8mAITcNt710"
      }
    ],
    projectIdeas: ["Simple HTML/CSS Personal Web Page", "Basic Algorithmic Pseudocode Exercises"],
    examResources: ["Tracing binary numbers, conversions (hex/dec), and basic logic gates"]
  },
  {
    id: "comp-1001",
    code: "COMP 1001",
    title: "Introduction to Programming I",
    level: 1000,
    description: "An introduction to algorithmic problem solving using Python. Topics include variables, data types, control flow, functions, lists, and basic file I/O.",
    recommendedBooks: [
      {
        title: "Python Crash Course (3rd Edition)",
        author: "Eric Matthes",
        link: "https://nostarch.com/python-crash-course-3rd-edition"
      },
      {
        title: "Think Python: How to Think Like a Computer Scientist",
        author: "Allen B. Downey",
        link: "https://greenteapress.com/wp/think-python-2e/"
      }
    ],
    videoTutorials: [
      {
        title: "Python for Beginners - Full Course",
        platform: "FreeCodeCamp / YouTube",
        link: "https://www.youtube.com/watch?v=rfscVS0vtbw"
      },
      {
        title: "Core Python Programming Series",
        platform: "Corey Schafer / YouTube",
        link: "https://www.youtube.com/playlist?list=PL-osiE80TeTskrapNbzXhwoFUiLCjGgC7"
      }
    ],
    projectIdeas: [
      "Text-based Adventure Game with state management",
      "Student Grade Tracker CLI application using File I/O",
      "Basic Command Line Calculator with history"
    ],
    examResources: [
      "Master string operations, list slicing, and dictionary manipulation",
      "Practice tracing loops and understanding variable scoping",
      "Review recursion vs iterative functions with sample trace tables"
    ]
  },
  {
    id: "comp-1002",
    code: "COMP 1002",
    title: "Introduction to Logic for Computer Science",
    level: 1000,
    description: "Propositional and predicate logic, truth tables, proofs by deduction and induction, set theory, functions, relations, and combinatorics.",
    recommendedBooks: [
      {
        title: "Discrete Mathematics and Its Applications",
        author: "Kenneth Rosen",
        link: "https://www.mheducation.com/highered/product/discrete-mathematics-applications-rosen/M9781259676512.html"
      }
    ],
    videoTutorials: [
      {
        title: "Discrete Math 1 Full Course",
        platform: "TrevTutor / YouTube",
        link: "https://www.youtube.com/playlist?list=PLDDGPhmNVbYHBAvf456LLZf1iRTOd23vT"
      },
      {
        title: "Propositional Logic & Truth Tables",
        platform: "Neso Academy / YouTube",
        link: "https://www.youtube.com/watch?v=0h6l6x-y25A"
      }
    ],
    projectIdeas: [
      "Truth Table Generator script in Python",
      "Boolean Logic Gate Simulator"
    ],
    examResources: [
      "Practice Logical Equivalences using De Morgan's Laws and Laws of Inference",
      "Mathematical Induction proof template step-by-step prep",
      "Set Theory Venn Diagram and Power Set exercises"
    ]
  },
  {
    id: "comp-1003",
    code: "COMP 1003",
    title: "Foundations of Computing Systems",
    level: 1000,
    description: "An introduction to computing system structures: representation of data, assembly languages, processor design basics, memory hierarchies, and system execution.",
    recommendedBooks: [
      {
        title: "Computer Organization and Design",
        author: "David A. Patterson and John L. Hennessy",
        link: "https://www.elsevier.com/"
      }
    ],
    videoTutorials: [
      {
        title: "CrashCourse Computer Science",
        platform: "PBS / YouTube",
        link: "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNlUrzyH5r6jN9ulIgZBpdo"
      }
    ],
    projectIdeas: ["Simple CPU ALU Simulator", "Assembly Language Hello World & Loop Tracing"],
    examResources: ["Two's complement arithmetic, IEEE 754 floating point conversions, and MIPS/ARM assembly instructions"]
  },

  // 2000-Level Undergraduate Courses
  {
    id: "comp-2001",
    code: "COMP 2001",
    title: "Object-Oriented Programming and HCI",
    level: 2000,
    description: "Object-oriented design principles in Java: encapsulation, inheritance, polymorphism, abstract classes, interfaces, GUI development, and basic HCI usability principles.",
    recommendedBooks: [
      {
        title: "Head First Java (3rd Edition)",
        author: "Kathy Sierra, Bert Bates, Trisha Gee",
        link: "https://www.oreilly.com/library/view/head-first-java/9781492091646/"
      }
    ],
    videoTutorials: [
      {
        title: "Java Programming Course for Beginners",
        platform: "Programming with Mosh",
        link: "https://www.youtube.com/watch?v=eIrMbAQSU34"
      },
      {
        title: "Java OOP Basics & Design Principles",
        platform: "FreeCodeCamp",
        link: "https://www.youtube.com/watch?v=A74TOX803D0"
      }
    ],
    projectIdeas: [
      "Bank Account Management System with GUI (JavaFX / Swing)",
      "Library Inventory System with inheritance and interface contracts"
    ],
    examResources: [
      "Understand Method Overriding vs Overloading with inheritance trees",
      "UML Class Diagram translation to Java code",
      "HCI Heuristic Evaluation rules summary sheet"
    ]
  },
  {
    id: "comp-2002",
    code: "COMP 2002",
    title: "Data Structures and Algorithms",
    level: 2000,
    description: "Fundamental data structures and algorithm design: arrays, linked lists, stacks, queues, trees, heaps, hash tables, graph algorithms, and Big-O asymptotic analysis in C++.",
    recommendedBooks: [
      {
        title: "Introduction to Algorithms (CLRS)",
        author: "Cormen, Leiserson, Rivest, Stein",
        link: "https://mitpress.mit.edu/9780262046305/introduction-to-algorithms/"
      },
      {
        title: "Data Structures and Algorithm Analysis in C++",
        author: "Mark Allen Weiss",
        link: "https://www.pearson.com/"
      }
    ],
    videoTutorials: [
      {
        title: "Data Structures and Algorithms Course",
        platform: "FreeCodeCamp / mycodeschool",
        link: "https://www.youtube.com/watch?v=B31LgI4Y4DQ"
      },
      {
        title: "MIT 6.006 Introduction to Algorithms",
        platform: "MIT OpenCourseWare",
        link: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/"
      }
    ],
    projectIdeas: [
      "Custom C++ Linked List and Hash Table implementation with memory management",
      "Dijkstra's Shortest Path Visualizer for graphs",
      "Binary Search Tree and AVL Tree operations benchmarker"
    ],
    examResources: [
      "Big-O time and space complexity table for operations across all main data structures",
      "Recursion tree method and Master Theorem for recurrence relations",
      "Tree traversals (In-order, Pre-order, Post-order, BFS/DFS) tracing practice"
    ]
  },
  {
    id: "comp-2003",
    code: "COMP 2003",
    title: "Computer Architecture",
    level: 2000,
    description: "Digital logic design, instruction set architectures, pipelined CPUs, cache memory structures, virtual memory, and I/O bus architectures.",
    recommendedBooks: [
      {
        title: "Computer Organization and Design RISC-V Edition",
        author: "David A. Patterson and John L. Hennessy",
        link: "https://www.elsevier.com/"
      }
    ],
    videoTutorials: [
      {
        title: "Computer Architecture Lectures",
        platform: "Carnegie Mellon University / YouTube",
        link: "https://www.youtube.com/playlist?list=PL5Q2opscCsrwRnrD1p5_XpZ-Nlhq_q5Xv"
      }
    ],
    projectIdeas: ["Simple Pipelined CPU Simulator in C", "Cache Memory Direct-Mapped vs Set-Associative Simulator"],
    examResources: ["Pipeline hazard detection (data, structural, control) and cache hit/miss ratio computations"]
  },
  {
    id: "comp-2004",
    code: "COMP 2004",
    title: "Introduction to Operating Systems",
    level: 2000,
    description: "Process management, threads, CPU scheduling algorithms, inter-process communication (IPC), synchronization (semaphores, mutexes), memory management, and file systems in C/Linux.",
    recommendedBooks: [
      {
        title: "Operating System Concepts (10th Edition)",
        author: "Silberschatz, Galvin, Gagne",
        link: "https://www.wiley.com/"
      },
      {
        title: "Operating Systems: Three Easy Pieces (OSTEP)",
        author: "Remzi H. Arpaci-Dusseau and Andrea C. Arpaci-Dusseau",
        link: "https://pages.cs.wisc.edu/~remzi/OSTEP/"
      }
    ],
    videoTutorials: [
      {
        title: "Operating Systems Course",
        platform: "Neso Academy / YouTube",
        link: "https://www.youtube.com/playlist?list=PLBlnK6fEyqRiVhbXDGLXDk_OQAeuVcp2O"
      }
    ],
    projectIdeas: ["Custom Linux Shell in C with piping and background execution", "Producer-Consumer Multithreaded Semaphore implementation"],
    examResources: ["Deadlock prevention conditions & Banker's Algorithm", "Page replacement algorithms (LRU, FIFO, Optimal) tracing"]
  },
  {
    id: "comp-2005",
    code: "COMP 2005",
    title: "Software Engineering",
    level: 2000,
    description: "Software engineering lifecycle models, requirements gathering, design patterns, testing strategies (unit, integration, system), refactoring, and team-based agile software development.",
    recommendedBooks: [
      {
        title: "Clean Code",
        author: "Robert C. Martin",
        link: "https://www.oreilly.com/"
      }
    ],
    videoTutorials: [
      {
        title: "Software Engineering Course",
        platform: "FreeCodeCamp",
        link: "https://www.youtube.com/watch?v=4b1D1QSO9o0"
      }
    ],
    projectIdeas: ["Full-stack Agile team application with user stories, sprint retrospectives, and automated unit tests"],
    examResources: ["Agile vs Waterfall comparisons", "SOLID principles definitions and code examples"]
  },
  {
    id: "comp-2008",
    code: "COMP 2008",
    title: "Social Issues and Professional Practice",
    level: 2000,
    description: "Ethical, legal, and social implications of computing technology: privacy, intellectual property, professional codes of conduct, software liability, and AI ethics.",
    recommendedBooks: [
      {
        title: "Ethics for the Information Age",
        author: "Michael J. Quinn",
        link: "https://www.pearson.com/"
      }
    ],
    videoTutorials: [
      {
        title: "Tech Ethics & AI Society",
        platform: "MIT OpenCourseWare",
        link: "https://ocw.mit.edu/"
      }
    ],
    projectIdeas: ["Ethics & Privacy Case Study Analysis of Autonomous AI Systems"],
    examResources: ["ACM & IEEE Code of Ethics core principles", "Copyright vs Patent vs Open Source Licenses comparison table"]
  },
  {
    id: "comp-2510",
    code: "COMP 2510",
    title: "Programming in C/C++",
    level: 2000,
    description: "Pointers, dynamic memory allocation (malloc/free, new/delete), raw arrays, C-strings, structs, header files, preprocessor directives, and standard C++ STL containers.",
    recommendedBooks: [
      {
        title: "C Programming Language (2nd Edition)",
        author: "Brian W. Kernighan and Dennis M. Ritchie",
        link: "https://www.pearson.com/"
      },
      {
        title: "C++ Primer (5th Edition)",
        author: "Stanley B. Lippman",
        link: "https://www.pearson.com/"
      }
    ],
    videoTutorials: [
      {
        title: "C Programming Tutorial for Beginners",
        platform: "FreeCodeCamp",
        link: "https://www.youtube.com/watch?v=KJgsSFOSQv0"
      },
      {
        title: "C++ Full Course",
        platform: "The Cherno / YouTube",
        link: "https://www.youtube.com/playlist?list=PLlrATfBNZ98dudnM48VfZmbzjZaYb8fXC"
      }
    ],
    projectIdeas: ["Dynamic Memory Allocation Custom Allocator", "Valgrind Memory Leak Checker Lab Exercise"],
    examResources: ["Pointer arithmetic, dereferencing, double pointers (**p), and pass-by-reference vs pass-by-value"]
  },

  // 3000-Level & 4000-Level Courses
  {
    id: "comp-3718",
    code: "COMP 3718",
    title: "Database Systems",
    level: 3000,
    description: "Relational database design, ER diagrams, SQL query optimization, relational algebra, normalization (1NF to BCNF), transactions, ACID properties, and indexing.",
    recommendedBooks: [
      {
        title: "Database System Concepts",
        author: "Silberschatz, Korth, Sudarshan",
        link: "https://www.db-book.com/"
      }
    ],
    videoTutorials: [
      {
        title: "SQL & Database Design Course",
        platform: "FreeCodeCamp",
        link: "https://www.youtube.com/watch?v=HXV3zeQKqGY"
      }
    ],
    projectIdeas: ["E-commerce Database Schema with 3NF Normalization and complex SQL stored procedures"],
    examResources: ["Relational algebra queries conversion", "Normalization steps from 1NF to BCNF with functional dependencies"]
  },

  // Graduate & Masters Courses (COMP 6000+ & AI 6000+)
  {
    id: "comp-690ab",
    code: "COMP 690A/B",
    title: "Research Methods in Computer Science",
    level: 6000,
    description: "Prepares graduate students for conducting research in Computer Science. Covers core skills (giving technical talks, LaTeX formatting, literature synthesis) and research steps: formulating research questions, writing proposals/theses, peer review process, and publishing in top conferences/journals. (Restricted to thesis-based students).",
    recommendedBooks: [
      {
        title: "Writing for Computer Science (3rd Edition)",
        author: "Justin Zobel",
        link: "https://link.springer.com/book/10.1007/978-1-4471-6639-9"
      }
    ],
    videoTutorials: [
      {
        title: "How to Read a Computer Science Research Paper",
        platform: "Srinivasan Keshav / Stanford / YouTube",
        link: "https://www.youtube.com/"
      }
    ],
    projectIdeas: ["Comprehensive Literature Review Paper in Overleaf LaTeX", "Mock Peer Review & Conference Defense Presentation"],
    examResources: ["LaTeX bibtex citation management templates", "Research methodology formulation checklist"]
  },
  {
    id: "comp-6777",
    code: "COMP 6777",
    title: "Mobile Ad Hoc Networking",
    level: 6000,
    description: "Advanced topics in mobile ad hoc networking (MANET) for Internet-of-Things (IoT). Covers MANET architectures, network queueing analysis, MAC layer protocols (CSMA/CA, TDMA), and ad-hoc routing algorithms (Bellman-Ford, Dijkstra, AODV, DSR).",
    recommendedBooks: [
      {
        title: "Mobile Ad Hoc Networking",
        author: "Stefano Basagni, Marco Conti, Silvia Giordano, Ivan Stojmenovic",
        link: "https://www.wiley.com/"
      }
    ],
    videoTutorials: [
      {
        title: "Wireless Ad Hoc & Sensor Networks",
        platform: "NPTEL / YouTube",
        link: "https://www.youtube.com/"
      }
    ],
    projectIdeas: ["NS-3 Network Simulator MANET Routing Topology Experiment"],
    examResources: ["CSMA/CA collision avoidance timing calculations", "Ad-hoc routing algorithm convergence comparisons"]
  },
  {
    id: "comp-6901",
    code: "COMP 6901",
    title: "Applied Algorithms",
    level: 6000,
    description: "Design and formal analysis of classical algorithm paradigms. Topics include graph algorithms, greedy algorithms, dynamic programming, network max-flow min-cut, and linear programming. Analyzes correctness proofs and runtime upper/lower bounds.",
    recommendedBooks: [
      {
        title: "Algorithm Design",
        author: "Jon Kleinberg and Éva Tardos",
        link: "https://www.pearson.com/"
      }
    ],
    videoTutorials: [
      {
        title: "Advanced Algorithms",
        platform: "MIT 6.854J / MIT OCW",
        link: "https://ocw.mit.edu/"
      }
    ],
    projectIdeas: ["Ford-Fulkerson Network Flow Implementation with Residual Graph Visualization"],
    examResources: ["Dynamic Programming state transition equation formulation", "NP-Completeness reduction proof step-by-step template"]
  },
  {
    id: "comp-6903",
    code: "COMP 6903",
    title: "Concurrent Computing",
    level: 6000,
    description: "Considerations and challenges of writing parallel programs for multicore processors and graphics processing units (GPUs). Covers thread synchronization, shared memory parallelism (OpenMP/pthreads), and GPU programming (CUDA).",
    recommendedBooks: [
      {
        title: "An Introduction to Parallel Programming",
        author: "Peter Pacheco",
        link: "https://www.elsevier.com/"
      },
      {
        title: "Programming Massively Parallel Processors (CUDA)",
        author: "David B. Kirk and Wen-mei W. Hwu",
        link: "https://www.elsevier.com/"
      }
    ],
    videoTutorials: [
      {
        title: "CUDA Programming Tutorial",
        platform: "FreeCodeCamp / YouTube",
        link: "https://www.youtube.com/"
      }
    ],
    projectIdeas: ["CUDA GPU Accelerated Matrix Multiplication & Image Processing Filter"],
    examResources: ["Amdahl's Law speedup calculations", "Race condition analysis and lock-free data structure synchronization"]
  },
  {
    id: "comp-6905",
    code: "COMP 6905",
    title: "Software Engineering",
    level: 6000,
    description: "Review of core software engineering developer skills, followed by methods and technologies to specify, design, and implement complex systems. Examines technologies supporting change control, architectural assessment, and evolution throughout the software lifecycle.",
    recommendedBooks: [
      {
        title: "Software Architecture in Practice (4th Edition)",
        author: "Len Bass, Paul Clements, Rick Kazman",
        link: "https://www.pearson.com/"
      }
    ],
    videoTutorials: [
      {
        title: "Software Architecture & Microservices",
        platform: "FreeCodeCamp",
        link: "https://www.youtube.com/"
      }
    ],
    projectIdeas: ["Microservices Architectural Design & CI/CD Change Management Audit"],
    examResources: ["Architectural pattern evaluation (Event-driven, Microservices, Layered)", "Refactoring techniques for legacy debt"]
  },
  {
    id: "comp-6907",
    code: "COMP 6907",
    title: "Data Mining Techniques and Methodology",
    level: 6000,
    description: "Core data mining techniques including data preprocessing, classification, association analysis, clustering, anomaly detection, and validation. Applied to real problems: bot detection with decision trees, customer segmentation via K-means, market basket analysis via Apriori, and anomaly detection using DBSCAN.",
    recommendedBooks: [
      {
        title: "Introduction to Data Mining (2nd Edition)",
        author: "Pang-Ning Tan, Michael Steinbach, Vipin Kumar",
        link: "https://www.pearson.com/"
      }
    ],
    videoTutorials: [
      {
        title: "Data Mining Course",
        platform: "Stanford / YouTube",
        link: "https://www.youtube.com/"
      }
    ],
    projectIdeas: ["Apriori Market Basket Analysis on real retail datasets", "DBSCAN & K-Means Anomaly Detection for Bot Traffic"],
    examResources: ["Gini index & Information Gain calculation for Decision Trees", "Support, Confidence, and Lift metrics for Apriori rules"]
  },
  {
    id: "comp-6908",
    code: "COMP 6908",
    title: "Database Technology and Applications",
    level: 6000,
    description: "Advanced database processing, database management systems, and enterprise design considerations. Covers relational theory, normalization, transaction processing, concurrency control, and database integration in web application environments.",
    recommendedBooks: [
      {
        title: "Database Systems: The Complete Book",
        author: "Hector Garcia-Molina, Jeffrey D. Ullman, Jennifer Widom",
        link: "https://www.pearson.com/"
      }
    ],
    videoTutorials: [
      {
        title: "CMU Database Systems (15-445/645)",
        platform: "Carnegie Mellon University / Andy Pavlo",
        link: "https://www.youtube.com/playlist?list=PLSE8ODhjZXjbohkNBW65MhhaxknzMXVhv"
      }
    ],
    projectIdeas: ["Enterprise Web Database with B-Tree Index Optimization & Connection Pooling"],
    examResources: ["Two-Phase Locking (2PL) and Serializability proofs", "Query execution plan evaluation & indexing strategies"]
  },
  {
    id: "comp-6909",
    code: "COMP 6909",
    title: "Fundamentals of Computer Graphics",
    level: 6000,
    description: "Fundamental concepts and developments in 3D computer graphics. Algorithms and basic techniques to develop interactive 3D graphics systems, games, and simulators: 3D geometrical transformations, 3D projections, lighting models, and rendering pipelines.",
    recommendedBooks: [
      {
        title: "Fundamentals of Computer Graphics (5th Edition)",
        author: "Steve Marschner and Peter Shirley",
        link: "https://www.crcpress.com/"
      }
    ],
    videoTutorials: [
      {
        title: "OpenGL / 3D Graphics Tutorial",
        platform: "The Cherno / YouTube",
        link: "https://www.youtube.com/playlist?list=PLlrATfBNZ98foTJPJ_Ev03o2oq3-GGOS2"
      }
    ],
    projectIdeas: ["Custom WebGL/C++ 3D Interactive Graphics Renderer with Lighting & Shaders"],
    examResources: ["Homogeneous coordinates transformation matrices (Translation, Rotation, Scaling)", "Phong reflection model math"]
  },
  {
    id: "comp-6910",
    code: "COMP 6910",
    title: "Services, Semantic Web and Cloud Computing",
    level: 6000,
    description: "Cloud service models (IaaS, PaaS, SaaS), virtualization, data centers, cloud resource management, storage systems, and cloud applications. Explores backend technologies needed to design, deploy, and manage efficient cloud environments.",
    recommendedBooks: [
      {
        title: "Cloud Computing: Concepts, Technology & Architecture",
        author: "Thomas Erl, Ricardo Puttini, Zaigham Mahmood",
        link: "https://www.pearson.com/"
      }
    ],
    videoTutorials: [
      {
        title: "AWS & Cloud Architecture Masterclass",
        platform: "FreeCodeCamp",
        link: "https://www.youtube.com/"
      }
    ],
    projectIdeas: ["Kubernetes Microservice Deployment with Semantic Web RDF/OWL API endpoints"],
    examResources: ["Virtualization vs Containerization trade-offs", "Cloud SLA Availability percentage formulas"]
  },
  {
    id: "comp-6912",
    code: "COMP 6912",
    title: "Autonomous Robotics",
    level: 6000,
    description: "Technologies and algorithms of autonomous robotics, focusing on computational aspects of wheeled mobile robots: locomotion, kinematics, control systems, sensors, stereo vision, feature extraction, localization, SLAM, obstacle avoidance, and 2D path planning.",
    recommendedBooks: [
      {
        title: "Introduction to Autonomous Mobile Robots",
        author: "Roland Siegwart, Illah Reza Nourbakhsh, Davide Scaramuzza",
        link: "https://mitpress.mit.edu/"
      }
    ],
    videoTutorials: [
      {
        title: "ROS 2 & Autonomous Robotics",
        platform: "ConstructSim / YouTube",
        link: "https://www.youtube.com/"
      }
    ],
    projectIdeas: ["ROS 2 TurtleBot 2D SLAM and A* Path Planning Simulation"],
    examResources: ["Extended Kalman Filter (EKF) localization steps", "Differential drive kinematics equations"]
  },
  {
    id: "comp-6915",
    code: "COMP 6915",
    title: "Machine Learning",
    level: 6000,
    description: "Key concepts and algorithms in machine learning for regression and classification. Provides intuition on model selection, evaluation metrics, and algorithms including random forests, support vector machines (SVM), gradient boosting, and neural networks.",
    recommendedBooks: [
      {
        title: "Pattern Recognition and Machine Learning",
        author: "Christopher M. Bishop",
        link: "https://www.microsoft.com/en-us/research/publication/pattern-recognition-and-machine-learning/"
      },
      {
        title: "Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow",
        author: "Aurélien Géron",
        link: "https://www.oreilly.com/"
      }
    ],
    videoTutorials: [
      {
        title: "Machine Learning Specialization",
        platform: "Andrew Ng / Coursera / DeepLearning.AI",
        link: "https://www.coursera.org/specializations/machine-learning-introduction"
      }
    ],
    projectIdeas: ["Predictive Analytics Pipeline with SVM, Random Forest, and Cross-Validation Tuning"],
    examResources: ["Bias-Variance trade-off derivation", "SVM Margin Maximization & Kernel Trick math"]
  },
  {
    id: "comp-6916",
    code: "COMP 6916",
    title: "Security and Privacy",
    level: 6000,
    description: "Data security principles, privacy regulations (GDPR, PIPEDA), threat modeling, public-key cryptography, access control, and identity management tools.",
    recommendedBooks: [
      {
        title: "Computer Security: Principles and Practice",
        author: "William Stallings and Lawrie Brown",
        link: "https://www.pearson.com/"
      }
    ],
    videoTutorials: [
      {
        title: "Cybersecurity & Cryptography Course",
        platform: "FreeCodeCamp",
        link: "https://www.youtube.com/"
      }
    ],
    projectIdeas: ["Privacy-Preserving Anonymization Tool (k-anonymity & l-diversity)"],
    examResources: ["RSA & Diffie-Hellman key exchange mechanics", "STRIDE threat modeling framework summary"]
  },
  {
    id: "comp-6934",
    code: "COMP 6934",
    title: "Introduction to Data Visualization",
    level: 6000,
    description: "Data visualization for data science: tools, standard visualization types, visual encoding, perceptual theories, and extracting insights from complex datasets using Python/R (Matplotlib, Seaborn, D3.js).",
    recommendedBooks: [
      {
        title: "Visualization Analysis and Design",
        author: "Tamara Munzner",
        link: "https://www.routledge.com/"
      }
    ],
    videoTutorials: [
      {
        title: "Data Visualization with Python & D3.js",
        platform: "FreeCodeCamp",
        link: "https://www.youtube.com/"
      }
    ],
    projectIdeas: ["Interactive Multidimensional Data Dashboard using D3.js / Plotly"],
    examResources: ["Gestalt principles of visual perception", "Channel effectiveness for quantitative vs categorical data"]
  },
  {
    id: "comp-6936",
    code: "COMP 6936",
    title: "Advanced Machine Learning",
    level: 6000,
    description: "Cutting-edge machine learning methods: interpretable & explainable ML (SHAP/LIME), federated learning, data-efficient ML, and graph neural networks (GNNs). Examines papers published within the last 5 years in top ML venues (ICML, NeurIPS, IJCAI).",
    recommendedBooks: [
      {
        title: "Interpretable Machine Learning",
        author: "Christoph Molnar",
        link: "https://christophm.github.io/interpretable-ml-book/"
      }
    ],
    videoTutorials: [
      {
        title: "Stanford CS224W: Machine Learning with Graphs",
        platform: "Stanford / Jure Leskovec / YouTube",
        link: "https://www.youtube.com/playlist?list=PLoROMvodv4rPLKxIpqhjhPgdQy7imGeXA"
      }
    ],
    projectIdeas: ["Graph Neural Network (GNN) for Node Classification on Academic Citation Networks"],
    examResources: ["SHAP value calculation principles", "Federated Averaging (FedAvg) algorithm step-by-step"]
  },
  {
    id: "comp-6980",
    code: "COMP 6980",
    title: "Algorithmic Techniques in Artificial Intelligence",
    level: 6000,
    description: "Algorithmic techniques and data structures used in modern AI problem-solving: state-space search (A*, IDA*), minimax with alpha-beta pruning, constraint satisfaction (CSP), and game AI.",
    recommendedBooks: [
      {
        title: "Artificial Intelligence: A Modern Approach (4th Edition)",
        author: "Stuart Russell and Peter Norvig",
        link: "https://aima.cs.berkeley.edu/"
      }
    ],
    videoTutorials: [
      {
        title: "UC Berkeley CS188: Intro to AI",
        platform: "UC Berkeley / YouTube",
        link: "https://www.youtube.com/playlist?list=PLsW492_jqu6n6p0L12N3uP3p3uGj309r2"
      }
    ],
    projectIdeas: ["Connect-4 / Chess AI Engine using Minimax with Alpha-Beta Pruning"],
    examResources: ["Admissibility and Consistency conditions for A* heuristics", "Alpha-Beta pruning tree evaluation"]
  },
  {
    id: "comp-6981",
    code: "COMP 6981",
    title: "Data Preparation Techniques",
    level: 6000,
    description: "Challenges with real-world data and preparation techniques using Python and R: data cleaning, missing value imputation, feature engineering, data integration, restructuring, and automated data pipelines.",
    recommendedBooks: [
      {
        title: "Bad Data Handbook",
        author: "Q. Ethan McCallum",
        link: "https://www.oreilly.com/"
      }
    ],
    videoTutorials: [
      {
        title: "Data Cleaning & Preparation in Python (Pandas)",
        platform: "FreeCodeCamp",
        link: "https://www.youtube.com/"
      }
    ],
    projectIdeas: ["Automated End-to-End Data Cleaning & Validation Pipeline in Pandas/PySpark"],
    examResources: ["Outlier detection strategies (IQR vs Z-score)", "One-hot encoding vs Target encoding trade-offs"]
  },
  {
    id: "comp-6982",
    code: "COMP 6982",
    title: "Computer Vision",
    level: 6000,
    description: "How computers interpret and extract information from digital images: image filtering, edge detection (Canny, Sobel), feature extraction (SIFT/ORB), object recognition, convolutional neural networks (CNNs), and 3D reconstruction.",
    recommendedBooks: [
      {
        title: "Computer Vision: Algorithms and Applications (2nd Edition)",
        author: "Richard Szeliski",
        link: "https://szeliski.org/Book/"
      }
    ],
    videoTutorials: [
      {
        title: "Stanford CS231n: Deep Learning for Computer Vision",
        platform: "Stanford / YouTube",
        link: "https://www.youtube.com/playlist?list=PLC1qU-LWwrF64f4QKQT-Vg5UrC_BB1Xfc"
      }
    ],
    projectIdeas: ["Real-Time Object Detection & Tracking App using OpenCV and YOLO"],
    examResources: ["Convolution matrix kernel calculations", "Sobel gradient operator for edge detection"]
  },
  {
    id: "comp-6983",
    code: "COMP 6983",
    title: "Advanced Interaction Techniques",
    level: 6000,
    description: "Emerging human-computer interaction (HCI) techniques: explicit, implicit, and machine-to-machine interactions, novel input modalities (gesture, eye-tracking, spatial computing), and user experience design research.",
    recommendedBooks: [
      {
        title: "Research Methods in Human-Computer Interaction",
        author: "Jonathan Lazar, Jinjuan Heidi Feng, Harry Hochheiser",
        link: "https://www.elsevier.com/"
      }
    ],
    videoTutorials: [
      {
        title: "HCI & Interaction Design",
        platform: "MIT OpenCourseWare",
        link: "https://ocw.mit.edu/"
      }
    ],
    projectIdeas: ["Webcam Eye-Tracking & Gesture Interactive UI Prototype"],
    examResources: ["Fitts' Law target acquisition time formula", "Controlled User Study experimental design setup"]
  },
  {
    id: "ai-6000",
    code: "AI 6000",
    title: "AI Foundations",
    level: 6000,
    description: "Mathematical background for further study in Artificial Intelligence. Refreshes and advances knowledge in vector calculus, linear algebra, matrix decomposition, probability, and statistics required for core AI algorithms. (Restricted to MAI students).",
    recommendedBooks: [
      {
        title: "Mathematics for Machine Learning",
        author: "Marc Peter Deisenroth, A. Aldo Faisal, Cheng Soon Ong",
        link: "https://mml-book.github.io/"
      }
    ],
    videoTutorials: [
      {
        title: "Essence of Linear Algebra & Calculus",
        platform: "3Blue1Brown / YouTube",
        link: "https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab"
      }
    ],
    projectIdeas: ["PCA & SVD Matrix Decomposition Python Notebook for Dimensionality Reduction"],
    examResources: ["Eigenvalues & Eigenvectors computation", "Gradient & Hessian matrix optimization rules"]
  },
  {
    id: "ai-6001",
    code: "AI 6001",
    title: "Topics in AI",
    level: 6000,
    description: "Overview of the history of AI, core sub-disciplines, and the ethical considerations in AI research and industrial deployment. (Restricted to MAI students).",
    recommendedBooks: [
      {
        title: "Artificial Intelligence: A Guide for Thinking Humans",
        author: "Melanie Mitchell",
        link: "https://melaniemitchell.me/guidetothinkinghumans/"
      }
    ],
    videoTutorials: [
      {
        title: "History and Ethics of Artificial Intelligence",
        platform: "MIT / YouTube",
        link: "https://www.youtube.com/"
      }
    ],
    projectIdeas: ["Ethics Audit & Governance Analysis for Commercial Generative AI"],
    examResources: ["Timeline of AI Winters and major breakthroughs", "EU AI Act & Algorithmic Impact Assessment criteria"]
  },
  {
    id: "ai-6002",
    code: "AI 6002",
    title: "Artificial Intelligence Capstone",
    level: 6000,
    description: "Capstone project applying modern AI techniques to a real-world problem provided by an industry partner. Students work in small teams carrying out independent technical implementation and submitting a final industry report. (Restricted to MAI students).",
    recommendedBooks: [
      {
        title: "Building Intelligent Systems",
        author: "Geoff Hulten",
        link: "https://www.apress.com/"
      }
    ],
    videoTutorials: [
      {
        title: "Full Stack Deep Learning / Production AI Systems",
        platform: "UC Berkeley / FullStackDeepLearning.com",
        link: "https://fullstackdeeplearning.com/"
      }
    ],
    projectIdeas: ["Industry Partner AI Capstone Solution with MLOps Pipeline & Technical Report"],
    examResources: ["Capstone project milestone checklist", "Technical documentation & stakeholder presentation guidelines"]
  }
];
