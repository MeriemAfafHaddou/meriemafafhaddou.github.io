export const profile = {
  name: 'Meriem Afaf Haddou',
  title: 'Software Engineer',
  tagline: 'Specializing in Python, Backend Systems, and Distributed Applications',
  bio: [
    "I’m a software engineer with experience across backend systems, mobile development, and data-driven applications. I’ve worked on academic and professional projects involving real-time systems, mobile apps, and distributed architectures, focusing on building reliable and well-structured software solutions.",
    "I’m particularly interested in backend and system-oriented development, including real-time processing, APIs, and event-driven architectures. I’ve worked with Python, Kotlin, Flutter, and JavaScript backends, integrating external services and building applications with attention to performance, maintainability, and clean design.",
    "I value clear problem understanding and structured engineering approaches. I focus on delivering practical solutions across mobile, backend, and data-related systems. I’m currently looking for opportunities in software engineering or freelance work where I can contribute to real-world projects and continue improving my skills."
  ],
  contact: {
    email: 'afafmeriem.haddou@gmail.com',
    location: 'Algeria',
    linkedin: 'https://www.linkedin.com/in/meriem-afaf-haddou-791964227/',
    github: 'https://github.com/meriemafafhaddou',
    languages: ['English (Fluent)', 'French (Fluent)', 'Arabic (Native)']
  },
  resumeUrl: '/meriemafaf_haddou_resume.pdf'
}

export const skills = [
  {
    category: 'Backend',
    items: ['Python', 'Django', 'FastAPI', 'Tornado', 'REST APIs', 'Multi-tenant SaaS']
  },
  {
    category: 'Async & Data',
    items: ['asyncio', 'batch processing', 'Pandas', 'NumPy']
  },
  {
    category: 'Databases',
    items: ['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB']
  },
  {
    category: 'Infrastructure',
    items: ['AWS', 'Docker', 'Linux']
  },
  {
    category: 'Tools & DevOps',
    items: ['Git', 'GitHub', 'Gerrit']
  },
  {
    category: 'Frontend',
    items: ['JavaScript', 'Vue.js', 'Pinia', 'E2E testing']
  }
]

export const experience = [
  {
    id: 'exp3',
    role: 'Full-Stack Developer',
    company: 'Innovia',
    duration: 'Sep 2025 – Present',
    location: 'Remote (Algiers, Algeria)',
    description: 'Develop full-stack features using Django, PostgreSQL, Vue.js, and Pinia.',
    achievements: [
      'Designed and implemented backend features, including REST APIs, multi-tenant data isolation, configurable RBAC, and reusable search modules.',
      'Developed reusable Vue.js components, managed application state with Pinia, and implemented internationalization (i18n) and role-based user interfaces.',
      'Integrated frontend and backend services, contributing to performance through lazy loading, pagination, and maintainable component architecture.'
    ]
  },
  {
    id: 'exp2',
    role: 'Python Developer',
    company: 'Intersec Group',
    duration: 'Sep 2024 – Sep 2025',
    location: 'Remote (Paris, France)',
    description: 'Develop backend services and data processing workflows for large-scale telecom applications within a cross-functional engineering team.',
    achievements: [
      'Developed Python services and data workflows processing millions of records, including geographic data, asynchronous tasks, batch processing, and AWS S3 integrations.',
      'Worked closely with solution architects, project managers, senior developers, and CI engineers through specification reviews, stand-ups, code reviews, testing, and implementation.',
      'Built fault-tolerant solutions using retry mechanisms, caching strategies, and asynchronous processing to improve the reliability of long-running data workflows.',
      'Contributed to code quality by following PEP 8 standards, writing BDD tests with Behave, and participating in peer code reviews.'
    ]
  },
  {
    id: 'exp1',
    role: 'Research Intern – Master Thesis',
    company: 'LMCS & LCSI, ESI Algiers',
    duration: 'Oct 2023 – Jun 2024',
    location: 'Algiers, Algeria',
    description: 'Master’s research internship focused on detecting concept drift in data streams using optimal transport methods.',
    achievements: [
      'Conducted a literature review on concept drift detection and optimal transport methods',
      'Analyzed existing approaches and proposed a detection method based on data distribution changes',
      'Implemented and evaluated the solution in collaboration with a peer and an application team (community detection use case)',
      'Defended the thesis and received a “Very Good” grade'
    ]
  }
]

export const education = [
  {
    id: 'edu1',
    degree: 'Engineering Degree in Software Engineering',
    institution: 'Higher National School of Computer Science (ESI ex INI), Algiers',
    duration: '2019 – 2024',
    coursework: [
      'Design Patterns',
      'Software Architecture',
      'Compilation Theory',
      'Web Development',
      'Mobile Development',
      'Database Systems & Advanced DBMS',
      'Data Analysis',
      'High Performance Computing',
      'Agile Methods',
    ],
    highlights: [
      'Software engineering lifecycle & agile methodologies',
      'Distributed and data-intensive systems concepts',
      'Full-stack development fundamentals',
      'Enterprise software architecture'
    ]
  },

  {
    id: 'edu2',
    degree: 'Master’s Degree in Software Engineering & Research',
    institution: 'Higher National School of Computer Science (ESI ex INI), Algiers',
    duration: '2023 – 2024',
    coursework: [
      'Research Methodology',
      'Scientific Project Management'
    ],
    thesis: 'Detecting changes in evolving data distributions using Optimal Transport (Concept Drift Detection)',
    focus: [
      'Research methods in software engineering',
      'Academic writing & scientific publication',
      'Project-based research work'
    ]
  }
]

export const projects = [
  {
    id: 'dentix',
    slug: 'dentix',
    name: 'Dentix',
    context: { type: 'freelance' },
    category: ['fullstack', 'desktop'],
    shortDescription: 'Desktop application for managing dental clinics, patients, appointments, and medical records.',
    thumbnail: null,
    icon: 'medical_services',
    techs: ['Electron', 'Vue.js', 'Python', 'SQLite'],
    featured: true,
    overview: 'Dentix is a desktop application designed to help dental clinics manage patients, appointments, treatments, and administrative data in a unified system.',
    problem: 'Small clinics often rely on manual processes (Paper records), which makes patient tracking, scheduling, and record management inefficient.',
    architecture: 'Built as an Electron desktop application with a Vue.js frontend and a Python backend layer. Data is stored locally using SQLite, allowing offline usage without external infrastructure.',
    technicalDecisions: [
      'Electron used to enable cross-platform desktop deployment (Windows/Linux)',
      'SQLite chosen for lightweight local-first data persistence',
      'Modular Vue.js architecture for reusable UI components',
      'Separation of UI layer and backend logic for maintainability'
    ],
    features: [
      'CRUD for patients, treatment plans, sessions, appointments, and payments with history tracking',
      'Template-based generation of prescriptions and medical certificates to reduce manual entry',
      'Editable prescription builder (reorder, add, remove items before printing)',
      'Complete patient history across treatments, payments, and visits',
      'Offline-first desktop app using local SQLite storage',
      'Clinic workflow tools for scheduling, records, and billing'
    ],
    gallery: [
      {
        src: '/projects/dentix/1.png',
        title: 'Patients Management Page: A data table interface for managing patients with pagination and lazy loading, an advanced search feature, and the ability to add new patients.'
      },
      {
        src: '/projects/dentix/2.png',
        title: 'Patient Details Page: A structured patient profile displaying personal data, medical history (allergies and prior conditions), treatment plans composed of multiple linked sessions, as well as appointments, with full CRUD access and navigation to detailed views for each entity.'
      },
      {
        src: '/projects/dentix/3.png',
        title: 'Appointments Calendar: A flexible calendar system supporting month, week, and daily views, with integrated search functionality for efficient appointment retrieval.'
      },
      {
        src: '/projects/dentix/4.png',
        title: 'Treatment Plans History: Optimized data table for browsing all treatment plans, featuring pagination, lazy loading, and search capabilities, with key fields such as patient, type, status, payment status, and date.'
      },
      {
        src: '/projects/dentix/5.png',
        title: 'Treatment Plan Details: A comprehensive view of a patient’s treatment plan showing start date, current status, and full lifecycle management. The page includes linked sessions history, associated payments tracking, attached medical media, and clinical notes, with options to edit or delete the plan.'
      },
      {
        src: '/projects/dentix/6.png',
        title: 'Sessions History: Optimized session tracking table with pagination, lazy loading, and search, showing key attributes such as patient, date, reason for visit, and association with a treatment plan or independent session.'
      }
    ],
    links: {
      source: 'https://github.com/MeriemAfafHaddou/dentix',
      demo: null,
      docs: null
    }
  },
  {
    id: 'parcels-saas',
    slug: 'parcels-saas',
    name: 'Parcels Tracking SaaS',
    context: { type: 'professional' },
    category: ['fullstack', 'saas'],
    icon: 'local_shipping',
    shortDescription: 'Multi-tenant logistics platform for managing parcels, deliveries, fleet operations, and role-based workflows.',

    thumbnail: null,

    techs: ['Python', 'Django', 'PostgreSQL', 'Vue.js', 'Pinia', 'Keycloak', 'i18n'],

    featured: true,

    overview: 'A multi-tenant logistics SaaS designed to manage parcel operations, deliveries, vehicles, and operational workflows across multiple clients within a unified platform.',

    problem: 'Logistics operations required a unified system to manage parcels, fleet activities, and delivery workflows while ensuring strict data isolation between different client organizations.',

    architecture: 'Built with a Django and PostgreSQL backend using a strict multi-tenant architecture. Authentication and identity management are handled via Keycloak. The frontend is developed in Vue.js with Pinia for state management and full i18n support.',

    technicalDecisions: [
      'Multi-tenant architecture ensuring strict data isolation between clients',
      'Keycloak-based authentication and centralized identity management',
      'Role-based and scope-based access control across backend and frontend',
      'Domain-driven backend structure (parcels, delivery, fleet, manifests)',
      'Configuration-driven search and filtering system replacing hardcoded logic'
    ],

    features: [
      'Parcel lifecycle and tracking management',
      'Handling units and shipping seals management',
      'Delivery workflows and runsheets',
      'Fleet and vehicle operations management',
      'Manifest generation and planning tools',
      'Dynamic RBAC with role-based UI behavior',
      'Multi-tenant data separation and isolation',
      'Localized interface with i18n support'
    ],

    note: 'This project was developed in a professional company environment. Code, architecture details, and screenshots are not publicly available due to confidentiality constraints.',

    links: {
      source: null,
      demo: null,
      docs: null
    }
  },
  {
    id: 'relio',
    slug: 'relio',
    name: 'RELIO',
    context: { type: 'academic' },
    category: ['research', 'machine learning'],
    icon: 'insights',

    shortDescription:
      'Python library for concept drift detection in online machine learning using optimal transport.',

    thumbnail: null,

    techs: [
      'Python',
      'Optimal Transport (POT)',
      'NumPy',
      'SciPy',
      'Streamlit'
    ],

    featured: true,

    overview:
      'RELIO (Reliable Outcomes) is a Python library designed to detect concept drift in online machine learning systems. It provides tools to monitor distribution shifts in streaming data and ensure model reliability over time.',

    problem:
      'In online machine learning, data distributions evolve over time (concept drift), leading to degraded model performance. Detecting these shifts early is essential to maintain model reliability.',

    architecture:
      'RELIO is implemented as a pure Python library built on top of the POT (Python Optimal Transport) framework. It computes optimal transport distances between reference and incoming data distributions to detect drift. A lightweight Streamlit interface is provided for demonstration purposes.',

    technicalDecisions: [
      'Use of Optimal Transport (POT) for robust distribution comparison',
      'Pure Python library design for easy integration into ML pipelines',
      'Streaming-compatible drift detection approach',
      'Separation of core library from visualization/demo layer (Streamlit)',
      'Lightweight dependency design focused on NumPy and SciPy'
    ],

    features: [
      'Detection of concept drift in streaming data',
      'Distribution comparison using optimal transport distances',
      'Modular Python API for integration into ML pipelines',
      'Reference vs incoming data monitoring',
      'Streamlit demo interface for visualization of drift behavior'
    ],

    links: {
      source: 'https://github.com/MeriemAfafHaddou/RELIO/',
      demo: 'https://jkveaxd4cstcqya979ngoq.streamlit.app/',
      docs: '/projects/relio/concept_drift_detection_using_OT.pdf'
    }
  },
  {
    id: 'uk-flood-warning-ivr',
    slug: 'uk-flood-warning-ivr',
    name: 'Flood Warning IVR System',
    context: { type: 'professional' },
    category: ['backend'],
    icon: 'phone_in_talk',

    shortDescription:
      'Interactive Voice Response system delivering real-time flood warnings to UK citizens through Telnyx telephony.',

    thumbnail: null,

    techs: [
      'Python',
      'Telnyx',
      'Webhooks',
      'REST API',
      'Caching'
    ],

    featured: true,

    overview:
      'Designed and implemented a complete Interactive Voice Response (IVR) system for the UK Environment Agency Flood Warning System. The solution automatically informs callers about flood alerts affecting their area and provides multiple self-service call flows through an event-driven telephony architecture.',

    problem:
      'The UK Environment Agency required an automated and reliable telephone service capable of delivering flood warnings to citizens while minimizing the need for human operators. The system had to quickly identify callers when possible, retrieve the relevant flood alerts for their area, support multiple navigation paths, and integrate seamlessly with the existing Flood Warning System.',

    architecture:
      'The IVR was implemented as an event-driven backend integrated with the Telnyx Voice API. Incoming call events were received through Inbound Event webhooks, allowing the application to orchestrate the complete call lifecycle. The system handled events such as call initiation, call answering, and DTMF input to dynamically control caller navigation across eight interactive call flows. When a caller number (CLI) was available, it was matched to its associated warning area to automatically play relevant flood alerts. A caching layer stored frequently requested alerts to significantly reduce response latency.',
    technicalDecisions: [
      'Event-driven architecture using Telnyx Inbound Event webhooks',
      'Implemented eight interactive IVR call flows',
      'Automatic caller identification based on CLI lookup',
      'Database lookup to determine the caller geographic warning area',
      'Dynamic playback of flood alerts relevant to the caller location',
      'DTMF-based navigation for Quick Dial, STD numbers, national alerts, and river/boat alerts',
      'Transfer to a live agent when required',
      'Caching layer for frequently requested flood alerts to minimize caller waiting time',
      'Optimized response latency for a public safety system where timely information is critical'
    ],

    features: [
      'Automatic caller number detection (CLI)',
      'Area-based flood warning playback',
      'Eight interactive voice menus',
      'DTMF navigation',
      'Quick Dial alert access',
      'STD number lookup',
      'National flood alerts',
      'River and boating alerts',
      'Transfer to live support agents',
      'Real-time webhook processing'
    ],

    note:
      'Developed as part of a professional team at Intersec for the UK Environment Agency Flood Warning System. Due to client confidentiality, source code and internal architecture diagrams cannot be shared.',

    links: {
      source: null,
      demo: null,
      docs: null
    }
  },
  {
    id: 'breast-ultrasound-classification',
    slug: 'breast-ultrasound-classification',
    name: 'Breast Ultrasound Image Classification',
    context: { type: 'personal' },
    category: ['machine learning'],
    icon: 'biotech',

    shortDescription:
      'Deep learning model for classifying breast ultrasound images using transfer learning and explainable AI.',

    thumbnail: null,

    techs: [
      'Python',
      'TensorFlow',
      'Keras',
      'Scikit-learn',
      'NumPy',
      'Matplotlib',
      'Grad-CAM'
    ],

    featured: true,

    overview:
      'Developed a deep learning pipeline to classify breast ultrasound images into Benign, Malignant, and Normal categories. The project focused on achieving reliable performance on a small and imbalanced medical imaging dataset while improving model interpretability through explainable AI techniques.',

    problem:
      'Breast ultrasound datasets are typically limited in size and exhibit significant class imbalance, making it challenging to train robust deep learning models that generalize well. The objective was to build an accurate classifier while addressing these practical constraints.',

    architecture:
      'The model uses a ResNet50 backbone pretrained on ImageNet with transfer learning. Only the final layers were fine-tuned, followed by a custom classification head composed of Global Average Pooling, a 512-unit dense layer, Batch Normalization, ReLU activation, Dropout, and a three-class Softmax output. Training was performed using Adam optimization and Sparse Categorical Crossentropy loss.',

    technicalDecisions: [
      'Transfer learning using a pretrained ResNet50 backbone',
      'Fine-tuned only the final layers to reduce overfitting',
      'Applied data augmentation exclusively to the training set',
      'Performed 5-fold stratified cross-validation for reliable evaluation',
      'Used multiple evaluation metrics beyond accuracy, including Precision, Recall, F1 Score, and Balanced Accuracy',
      'Integrated Grad-CAM for model explainability and prediction visualization'
    ],

    features: [
      'Three-class breast ultrasound image classification',
      'Transfer learning with ResNet50',
      '5-fold stratified cross-validation',
      'Automatic performance evaluation across multiple metrics',
      'Grad-CAM heatmap generation for explainable AI',
      'Final model evaluation on an independent test set'
    ],

    challenges: [
      'Addressed severe class imbalance while preserving unbiased validation and test sets.',
      'Improved generalization on a limited dataset through transfer learning and targeted fine-tuning.',
      'Balanced predictive performance with model interpretability using Grad-CAM visualizations.'
    ],

    impact: [
      'Achieved 88.9% test accuracy and 84.2% balanced accuracy.',
      'Obtained stable validation performance across five stratified folds (average validation accuracy: 81%).',
      'Demonstrated that explainability techniques can improve confidence in deep learning predictions for medical imaging.'
    ],

    note:
      'This project was developed as an independent research initiative driven by a personal interest in medical imaging and deep learning. It was designed to explore the challenges of training deep neural networks on small, imbalanced datasets and to evaluate the effectiveness of transfer learning and explainability techniques in a clinical context.',

    links: {
      source: 'https://github.com/MeriemAfafHaddou/breast-cancer-classification',
      demo: null,
      docs: null
    }
  },
  {
    id: 'smartbev',
    slug: 'smartbev',
    name: 'SmartBev IoT Vending System',
    category: ['mobile dev'],
    icon: 'coffee',

    shortDescription:
      'Maintenance mobile application for an IoT smart vending system with real-time task notifications.',

    thumbnail: null,

    techs: [
      'Flutter',
      'Provider',
      'REST API',
      'Firebase Cloud Messaging'
    ],

    featured: true,

    overview:
      'SmartBev is a multi-component smart coffee vending ecosystem composed of a web dashboard, customer application, IoT vending machine system, and a maintenance mobile application. My contribution focused on the maintenance agent mobile application, responsible for handling operational incidents and task workflows.',

    problem:
      'Maintenance teams needed a reliable mobile tool to receive real-time incident notifications, manage assigned tasks, and update their status efficiently within a distributed IoT vending system.',

    architecture:
      'The system follows a distributed architecture where IoT devices and backend services trigger incident events. These events are forwarded via Firebase Cloud Messaging to the maintenance mobile application. The app consumes REST APIs for task management and synchronizes task updates with the central system.',

    technicalDecisions: [
      'Flutter used for cross-platform mobile development',
      'Provider used for state management',
      'Firebase Cloud Messaging for real-time incident notifications',
      'REST API integration for task lifecycle management',
      'Clear separation between IoT/event systems and mobile client responsibilities'
    ],

    features: [
      'Real-time incident notifications via FCM',
      'Maintenance task assignment and tracking',
      'Task status updates (in progress, completed, etc.)',
      'Secure authentication and user profile management',
      'Password and account management features',
      'Operational dashboard for maintenance workflows'
    ],

    challenges: [
      'Handling real-time notification reliability from distributed event sources',
      'Ensuring consistent task state synchronization via REST APIs',
      'Designing a responsive mobile workflow for time-sensitive maintenance operations'
    ],

    context: {
      type: 'academic',
    },

    note:
      'This project was developed as part of an academic group project. My responsibility focused exclusively on the maintenance agent mobile application, while collaborating with IoT and backend teams to integrate real-time incident notifications via Firebase Cloud Messaging.',

    links: {
      source: 'https://github.com/MeriemAfafHaddou/InnovIT_2CS_Project_Maintenance',
      demo: null,
      docs: null
    }
  },
  {
    id: 'instant-delivery',
    slug: 'instant-delivery',
    name: 'Instant Food Delivery App',
    category: ['mobile dev'],
    icon: 'delivery_dining',

    shortDescription:
      'Food delivery mobile application with real-time order tracking and restaurant browsing.',

    thumbnail: null,

    techs: [
      'Kotlin',
      'Express.js',
      'REST API',
      'Firebase Cloud Messaging'
    ],

    featured: true,

    overview:
      'Instant is a food delivery mobile application that allows users to browse restaurants, view menus, place orders, and track deliveries in real time. The system includes a Kotlin-based Android application integrated with an Express.js backend.',

    problem:
      'Users need a seamless and real-time way to order food and track deliveries from nearby restaurants, while ensuring accurate order updates and delivery status synchronization.',

    architecture:
      'The system consists of an Android mobile application built with Kotlin and a backend built with Express.js. The frontend communicates with REST APIs for restaurant data, orders, and user management. Firebase Cloud Messaging is used to provide real-time delivery location updates and order status notifications.',

    technicalDecisions: [
      'Kotlin used for native Android development',
      'Express.js backend exposing RESTful APIs',
      'Firebase Cloud Messaging for real-time delivery tracking updates',
      'Fragment-based Android architecture for modular UI design',
      'Separation of concerns between UI, data layer, and network layer'
    ],

    features: [
      'User authentication (login and registration)',
      'Restaurant browsing and menu exploration',
      'Shopping cart and order placement',
      'Order tracking with live delivery updates',
      'User profile management',
      'Restaurant and menu detail views',
      'Real-time notifications for delivery status updates'
    ],

    challenges: [
      'Implementing real-time delivery tracking using Firebase Cloud Messaging',
      'Managing complex UI flows across multiple Android fragments',
      'Synchronizing order state between mobile app and backend system',
      'Handling dynamic restaurant and menu data rendering'
    ],

    context: {
      type: 'academic',
   },

    note:
      'This project was developed as part of an academic group project. My contribution focused on the Android mobile application development using Kotlin, including UI implementation, API integration, and real-time delivery tracking via Firebase Cloud Messaging.',

    links: {
      source: 'https://github.com/MeriemAfafHaddou/FoodDeliveryApp',
      demo: null,
      docs: null
    }
  }
]