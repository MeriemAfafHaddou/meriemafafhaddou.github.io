'use strict';

class PortfolioApp {
  constructor() {
    this.init();
  }

  init() {
    this.initSidebar();
    this.initTestimonials();
    this.initFilter();
    this.initForm();
    this.initNavigation();
    this.initProjectModals();
  }

  initSidebar() {
    const sidebar = document.querySelector("[data-sidebar]");
    const sidebarBtn = document.querySelector("[data-sidebar-btn]");

    if (sidebar && sidebarBtn) {
      sidebarBtn.addEventListener("click", () => {
        sidebar.classList.toggle("active");
      });
    }
  }

  initTestimonials() {
    const testimonialsItems = document.querySelectorAll("[data-testimonials-item]");
    const modalContainer = document.querySelector("[data-modal-container]");
    const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
    const overlay = document.querySelector("[data-overlay]");
    const modalImg = document.querySelector("[data-modal-img]");
    const modalTitle = document.querySelector("[data-modal-title]");
    const modalText = document.querySelector("[data-modal-text]");

    if (!modalContainer || !overlay) return;

    const toggleModal = () => {
      modalContainer.classList.toggle("active");
      overlay.classList.toggle("active");
    };

    testimonialsItems.forEach(item => {
      item.addEventListener("click", () => {
        const avatar = item.querySelector("[data-testimonials-avatar]");
        const title = item.querySelector("[data-testimonials-title]");
        const text = item.querySelector("[data-testimonials-text]");

        if (avatar && title && text && modalImg && modalTitle && modalText) {
          modalImg.src = avatar.src;
          modalImg.alt = avatar.alt;
          modalTitle.innerHTML = title.innerHTML;
          modalText.innerHTML = text.innerHTML;
          toggleModal();
        }
      });
    });

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener("click", toggleModal);
    }

    overlay.addEventListener("click", toggleModal);
  }

  initFilter() {
    const select = document.querySelector("[data-select]");
    const selectItems = document.querySelectorAll("[data-select-item]");
    const selectValue = document.querySelector("[data-selecct-value]");
    const filterBtns = document.querySelectorAll("[data-filter-btn]");
    const filterItems = document.querySelectorAll("[data-filter-item]");

    if (!select || !filterItems.length) return;

    const filterFunc = (selectedValue) => {
      filterItems.forEach(item => {
        if (selectedValue === "all" || selectedValue === item.dataset.category) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });
    };

    select.addEventListener("click", () => {
      select.classList.toggle("active");
    });

    selectItems.forEach(item => {
      item.addEventListener("click", () => {
        const selectedValue = item.innerText.toLowerCase();
        if (selectValue) {
          selectValue.innerText = item.innerText;
        }
        select.classList.toggle("active");
        filterFunc(selectedValue);
      });
    });

    let lastClickedBtn = filterBtns[0];

    filterBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const selectedValue = btn.innerText.toLowerCase();
        if (selectValue) {
          selectValue.innerText = btn.innerText;
        }
        filterFunc(selectedValue);

        if (lastClickedBtn) {
          lastClickedBtn.classList.remove("active");
        }
        btn.classList.add("active");
        lastClickedBtn = btn;
      });
    });
  }

  initForm() {
    const form = document.querySelector("[data-form]");
    const formInputs = document.querySelectorAll("[data-form-input]");
    const formBtn = document.querySelector("[data-form-btn]");

    if (!form || !formBtn) return;

    formInputs.forEach(input => {
      input.addEventListener("input", () => {
        if (form.checkValidity()) {
          formBtn.removeAttribute("disabled");
        } else {
          formBtn.setAttribute("disabled", "");
        }
      });
    });
  }

  initNavigation() {
    const navigationLinks = document.querySelectorAll("[data-nav-link]");
    const pages = document.querySelectorAll("[data-page]");

    navigationLinks.forEach(link => {
      link.addEventListener("click", () => {
        const targetPage = link.innerHTML.toLowerCase();

        pages.forEach((page, index) => {
          const isActive = targetPage === page.dataset.page;
          page.classList.toggle("active", isActive);
          navigationLinks[index].classList.toggle("active", isActive);
        });

        window.scrollTo(0, 0);
      });
    });
  }

  initProjectModals() {
    const modal = document.getElementById('project-details-modal');
    const modalBody = document.getElementById('project-details-body');
    const closeBtn = document.getElementById('close-details-btn');

    if (!modal || !modalBody) return;

    const showProjectDetails = (projectKey) => {
      const project = this.projectData[projectKey];
      if (project) {
        modalBody.innerHTML = project.content;
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
      }
    };

    const closeModal = () => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    };

    document.querySelectorAll('.project-link').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const projectKey = btn.getAttribute('data-project');
        showProjectDetails(projectKey);
      });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.style.display === 'block') {
        closeModal();
      }
    });
  }

  get projectData() {
    return {
      'relio': {
        title: 'Relio',
        category: 'Research',
        content: `
          <div class="project-details-header">
            <h1>Relio</h1>
            <span class="project-details-category"><strong>Category:</strong> Machine Learning Research</span>
          </div>

          <h2>Overview</h2>
          <p>
            <strong>Relio</strong> is a research project developed during my final year of study. 
            The goal of this work was to study the problem of <em>concept drift</em> in machine learning systems.
            In many real-world applications, data distributions change over time, which can lead to a significant 
            drop in model performance if these changes are not detected early.
          </p>

          <p>
            In this project, I explored how <strong>Optimal Transport</strong> can be used to measure changes between 
            data distributions and detect drift in streaming data. The objective was to design a method that can 
            identify distribution shifts early, before they start degrading model accuracy.
          </p>

          <h2>Research Approach</h2>
          <p>
            The work started with a review of existing concept drift detection methods and their limitations. 
            Based on this analysis, I implemented an approach that compares consecutive data distributions using 
            Optimal Transport distances. The system monitors these distances and raises an alert when the shift 
            exceeds a defined threshold.
          </p>

          <h2>Experimental Evaluation</h2>
          <p>
            To evaluate the approach, I conducted experiments on both <strong>synthetic</strong> and 
            <strong>real-world datasets</strong>. The experiments explored how different parameters influence 
            drift detection, including:
          </p>

          <ul class="project-details-features">
            <li>Different cost functions used in Optimal Transport</li>
            <li>Different threshold values for drift detection</li>
            <li>Various types of drift scenarios (gradual, sudden, incremental, and recurrent)</li>
          </ul>

          <p>
            The method was tested with both <strong>supervised models (SGDClassifier)</strong> and 
            <strong>unsupervised models (K-means)</strong> in order to observe how drift affects different 
            learning settings.
          </p>

          <h2>My Contributions</h2>
          <ul class="project-details-features">
            <li>Studied existing literature on concept drift detection</li>
            <li>Designed and implemented the RELIO drift detection approach</li>
            <li>Conducted experiments across multiple datasets and drift scenarios</li>
            <li>Analyzed the impact of cost functions and detection thresholds</li>
            <li>Co-authored a draft research paper describing the methodology and results</li>
          </ul>

          <h2>Technologies</h2>
          <div class="project-details-tech">
            <span class="tech-icons">
              <img src="./assets/images/python.svg" alt="Python" title="Python" class="tech-icon">
              <img src="./assets/images/pot.svg" alt="POT" title="POT" class="tech-icon">
              <img src="./assets/images/scikit-learn.svg" alt="scikit-learn" title="scikit-learn" class="tech-icon">
              <img src="./assets/images/numpy.svg" alt="NumPy" title="NumPy" class="tech-icon">
            </span>
          </div>

          <div class="project-details-github">
            <a href="https://github.com/MeriemAfafHaddou/RELIO" target="_blank" class="github-btn">
              <ion-icon name="logo-github"></ion-icon> View on GitHub
            </a>
            <a href="./assets/files/concept_drift_detection_using_OT.pdf" target="_blank" class="github-btn">
              <ion-icon name="document-text-outline"></ion-icon> View Draft Research Paper
            </a>
          </div>
        `
      },
      'breast-cancer': {
        title: 'Breast Cancer Classification',
        category: 'Machine Learning',
        content: `
        <div class="project-details-header">
          <h1>Breast Cancer Classification</h1>
          <span class="project-details-category"><strong>Category:</strong> Machine Learning</span>
        </div>

        <h2>Overview</h2>
        <p>
          Breast cancer is the most common cancer among women worldwide, responsible for around
          670,000 deaths in 2022. Early diagnosis is critical, especially since nearly half of cases
          occur without known risk factors. In this project, I developed a deep learning model to
          classify breast ultrasound images into three categories — Normal, Benign, and Malignant —
          with the goal of supporting faster and more accurate medical diagnosis.
        </p>

        <h2>Dataset</h2>
        <p>
          This project uses the <a href="https://www.kaggle.com/datasets/aryashah2k/breast-ultrasound-images-dataset/data" target="_blank">
          Breast Ultrasound Images Dataset</a> from Kaggle. Images are organized into three classes:
        </p>
        <ul>
          <li><strong>Normal:</strong> Healthy breast tissue with no abnormalities</li>
          <li><strong>Benign:</strong> Non-cancerous findings such as cysts or fibroadenomas</li>
          <li><strong>Malignant:</strong> Cancerous tumors requiring urgent medical attention</li>
        </ul>

        <h2>Approach</h2>
        <ul class="project-details-features">
          <li>Resized all images to a consistent shape for model input</li>
          <li>Performed exploratory analysis with sample images and class distribution</li>
          <li>Addressed dataset imbalance with data augmentation (flipping, rotation, brightness changes)</li>
          <li>Used 5-fold cross-validation for robust performance estimation</li>
          <li>Implemented transfer learning with ResNet50 pretrained on ImageNet</li>
        </ul>

        <h2>Results</h2>
        <p>
          The model achieved an average accuracy of <strong>87%</strong> across cross-validation folds.
          I am continuing to refine the model to improve accuracy and additional performance metrics.
        </p>
        <h2>Technologies</h2>
          <div class="project-details-tech">
            <span class="tech-icons">
              <img src="./assets/images/python.svg" alt="Python" title="Python" class="tech-icon">
              <img src="./assets/images/tensorflow.svg" alt="TensorFlow" title="TensorFlow" class="tech-icon">
              <img src="./assets/images/scikit-learn.svg" alt="scikit-learn" title="scikit-learn" class="tech-icon">
              <img src="./assets/images/numpy.svg" alt="NumPy" title="NumPy" class="tech-icon">
            </span>
          </div>
        <div class="project-details-github">
          <a href="https://github.com/MeriemAfafHaddou/breast-cancer-classification" target="_blank" class="github-btn">
            <ion-icon name="logo-github"></ion-icon> View on GitHub
          </a>
        </div>
      `
      },
      'smartbev': {
        title: 'SmartBev',
        category: 'Mobile Dev',
        content: `
        <div class="project-details-header">
          <h1>SmartBev</h1>
          <span class="project-details-category"><strong>Category:</strong> Mobile Dev</span>
        </div>

        <h2>Overview</h2>
        <p>
          SmartBev is a sophisticated smart coffee vending machine solution developed as part of our
          specialty project. The system is composed of multiple components: a web dashboard, a customer
          mobile app, a vending machine mobile app, a maintenance agents mobile app, and the IoT-based
          vending machine itself. This integration highlights the team's commitment to building
          innovative and user-friendly smart solutions.
        </p>

        <h2>Features</h2>
        <ul class="project-details-features">
          <li>Customer mobile app for ordering coffee</li>
          <li>IoT-enabled smart coffee vending machine</li>
          <li>Web dashboard for administrators</li>
          <li>Maintenance agents app with real-time notifications</li>
        </ul>

        <h2>My Contribution</h2>
        <p>
          I developed the mobile application for maintenance agents using Flutter. The app enables
          agents to log in, manage personal information, receive task notifications, assign tasks,
          and update task statuses. I implemented state management with Flutter Provider and integrated
          RESTful APIs along with Firebase Cloud Messaging (FCM) for automated notifications. This work
          ensured that maintenance operations could be handled efficiently and reliably.
        </p>

        <h2>Technologies</h2>
          <div class="project-details-tech">
            <span class="tech-icons">
              <img src="./assets/images/flutter.svg" alt="Flutter" title="Flutter" class="tech-icon">
              <img src="./assets/images/dart.svg" alt="Dart" title="Dart" class="tech-icon">
              <img src="./assets/images/firebase.svg" alt="Firebase CLoud Messaging" title="Firebase CLoud Messaging" class="tech-icon">
            </span>
          </div>
        <div class="project-details-github">
          <a href="https://github.com/MeriemAfafHaddou/InnovIT_2CS_Project_Maintenance" target="_blank" class="github-btn">
            <ion-icon name="logo-github"></ion-icon> View on GitHub
          </a>
        </div>
      `
      },
      'instant': {
        title: 'Instant - Food Delivery App',
        category: 'Mobile Dev',
        content: `
        <div class="project-details-header">
          <h1>Instant - Food Delivery App</h1>
          <span class="project-details-category"><strong>Category:</strong> Mobile Dev</span>
        </div>

        <h2>Overview</h2>
        <p>
          Instant is a food delivery mobile application that connects users with a network of restaurants,
          allowing them to browse menus, place orders, and pay directly from their mobile devices. 
          Orders are delivered conveniently to the user's location, creating a seamless food ordering experience.
          The system was built with a Kotlin-based mobile app and an Express.js backend to ensure reliability
          and performance.
        </p>

        <h2>Features</h2>
        <ul class="project-details-features">
          <li>User-friendly food ordering interface</li>
          <li>Real-time restaurant menus and order updates</li>
          <li>Secure in-app payments</li>
          <li>Automated notifications for order status</li>
        </ul>

        <h2>My Contribution</h2>
        <p>
          I developed the mobile application using Kotlin and XML, focusing on creating an intuitive 
          and responsive user interface. On the backend side, I contributed to the development with Express.js,
          ensuring smooth communication between restaurants and users. I also implemented automated 
          notification features to keep users updated on their orders. This project strengthened my skills
          in teamwork, cross-platform collaboration, and full-stack mobile development.
        </p>
        <h2>Technologies</h2>
          <div class="project-details-tech">
            <span class="tech-icons">
              <img src="./assets/images/kotlin.svg" alt="Kotlin" title="Kotlin" class="tech-icon">
              <img src="./assets/images/express-js.svg" alt="Express JS" title="Express JS" class="tech-icon">
              <img src="./assets/images/firebase.svg" alt="Firebase CLoud Messaging" title="Firebase CLoud Messaging" class="tech-icon">
              <img src="./assets/images/prisma.svg" alt="Prisma" title="Prisma" class="tech-icon">
              <img src="./assets/images/mysql.svg" alt="mySQL" title="mySQL" class="tech-icon">
            </span>
          </div>
        <div class="project-details-github">
          <a href="https://github.com/MeriemAfafHaddou/FoodDeliveryApp" target="_blank" class="github-btn">
            <ion-icon name="logo-github"></ion-icon> View on GitHub
          </a>
        </div>
      `
      },
      'bikeshare': {
        title: 'BikeShare',
        category: 'Mobile Dev',
        content: `
        <div class="project-details-header">
          <h1>BikeShare</h1>
          <span class="project-details-category"><strong>Category:</strong> Mobile Dev</span>
        </div>

        <h2>Overview</h2>
        <p>
          BikeShare offers a sustainable transportation alternative by providing a bike rental service
          that helps reduce traffic congestion and promotes public health. The platform serves three
          types of users: administrators, hirers, and renters. Administrators manage users, rentals,
          and payments; hirers list and monitor their bicycles; and renters can securely reserve and
          pay for bikes. Our team designed the system with a focus on architecture to maximize quality
          attributes such as security and interoperability, leveraging microservices and a client-server model.
        </p>

        <h2>Features</h2>
        <ul class="project-details-features">
          <li>Role-based system for administrators, hirers, and renters</li>
          <li>Secure bike reservation and payment system</li>
          <li>Microservices architecture with RESTful APIs</li>
          <li>Flutter-based mobile app for renters</li>
        </ul>

        <h2>My Contribution</h2>
        <p>
          I developed the mobile application for renters using Flutter and RESTful APIs, enabling users to
          log in, browse available bicycles, and complete rentals seamlessly. I also contributed to the
          development of backend microservices, ensuring integration across the platform. This approach
          provided a reliable and efficient solution for urban mobility.
        </p>
        <h2>Technologies</h2>
          <div class="project-details-tech">
            <span class="tech-icons">
              <img src="./assets/images/flutter.svg" alt="flutter" title="flutter" class="tech-icon">
            </span>
          </div>
        <div class="project-details-github">
          <a href="https://github.com/MeriemAfafHaddou/BikeShare-frontend" target="_blank" class="github-btn">
            <ion-icon name="logo-github"></ion-icon> View on GitHub
          </a>
        </div>

      `
      },
      'elbenna': {
        title: 'El Benna Website',
        category: 'Web Dev',
        content: `
        <div class="project-details-header">
          <h1>El Benna Website</h1>
          <span class="project-details-category"><strong>Category:</strong> Web Dev</span>
        </div>

        <h2>Overview</h2>
        <p>
          El Benna is a recipe management and exploration platform developed with HTML5, CSS3, PHP,
          JQuery, JavaScript, and Ajax. Designed with both users and administrators in mind, it follows
          the MVC architecture to ensure a clear separation of data management, presentation, and processing.
          The platform provides an intuitive and dynamic environment for culinary enthusiasts while
          enabling efficient site administration.
        </p>

        <h2>Features</h2>
        <ul class="project-details-features">
          <li>User and administrator areas with role-specific functionality</li>
          <li>Homepage with logo, social media links, slideshow, navigation menu, and footer</li>
          <li>Recipe categories: appetizers, main courses, desserts, and drinks</li>
          <li>Filtering and sorting options for recipes by multiple criteria</li>
          <li>News updates, seasonal and festive recipes, and healthy options with calorie limits</li>
          <li>Detailed nutritional information for each recipe</li>
          <li>User accounts with personalized profiles</li>
          <li>Admin dashboard for managing recipes, news, users, and site settings</li>
        </ul>

        <h2>Technologies</h2>
          <div class="project-details-tech">
            <span class="tech-icons">
              <img src="./assets/images/php.svg" alt="php" title="php" class="tech-icon">
              <img src="./assets/images/javascript.svg" alt="js" title="js" class="tech-icon">
              <img src="./assets/images/jquery.svg" alt="jquery" title="jquery" class="tech-icon">
            </span>
          </div>
        <div class="project-details-github">
          <a href="https://github.com/MeriemAfafHaddou/Projet_TDW" target="_blank" class="github-btn">
            <ion-icon name="logo-github"></ion-icon> View on GitHub
          </a>
        </div>
      `
      },
      'smartmailbox': {
        title: 'Smart Mailbox',
        category: 'IoT',
        content: `
        <div class="project-details-header">
          <h1>Smart Mailbox</h1>
          <span class="project-details-category"><strong>Category:</strong> IoT</span>
        </div>

        <h2>Overview</h2>
        <p>
          The Smart Mailbox aims to enhance the traditional mail reception experience by incorporating
          innovative IoT technologies such as GSM modules for notifications and RFID for access management.
          Users receive push notifications on their mobile devices upon mail delivery and can remotely
          unlock, control access, and manage permissions for their mailbox. This solution provides enhanced
          security, greater convenience, and a modernized daily utility for consumers.
        </p>

        <h2>Features</h2>
        <ul class="project-details-features">
          <li>Push notifications on mail delivery</li>
          <li>RFID-based secure access management</li>
          <li>Remote unlocking and access control</li>
          <li>Real-time monitoring with sensors</li>
        </ul>

        <h2>Technologies</h2>
        <ul class="project-details-skills">
          <li>Arduino</li>
          <li>GSM Module</li>
          <li>RFID</li>
          <li>Ultrasonic Distance Sensor</li>
        </ul>
        <div class="project-details-github">
          <a href="./assets/files/smart_mailbox.pdf" target="_blank" class="github-btn">
            <ion-icon name="document-text-outline"></ion-icon> View Technical Report (french)
          </a>
        </div>
      `
      },
      'ivr': {
        title: 'Interactive Voice Response',
        category: 'Software Systems',
        content: `
        <div class="project-details-header">
          <h1>Interactive Voice Response</h1>
          <span class="project-details-category"><strong>Category: </strong>Software Systems</span>
        </div>

        <h2>Overview</h2>
        <p>
          An Interactive Voice Response (IVR) system developed for citizens in the
          United Kingdom to provide real-time alerts and warnings about floods in
          their area. The system leverages a computerized voice menu to allow callers
          to access relevant information and services quickly and reliably.
        </p>

        <h2>Features</h2>
        <ul class="project-details-features">
          <li>Multi-level voice menu navigation for user-friendly access</li>
          <li>Database integration for managing user and alert data</li>
          <li>Automated call routing and queuing</li>
          <li>Caching system to store and deliver alerts efficiently</li>
          <li>End-to-end telephony integration using Telnyx</li>
        </ul>

        <h2>My Contribution</h2>
        <p>
          Working from specifications defined by a solution architect, I developed the
          entire IVR system from scratch. I implemented the backend using Python and
          Tornado to handle requests efficiently, integrated Telnyx for call flow
          management, inbound/outbound event handling, and voice menu design, and
          built a caching system to optimize the delivery of alerts. I performed
          end-to-end testing, while an integrator validated the system across
          different environments and scenarios. This project demonstrates my ability
          to design, build, and deliver a production-ready telephony solution.
        </p>

        <h2>Technologies</h2>
          <div class="project-details-tech">
            <span class="tech-icons">
              <img src="./assets/images/python.svg" alt="Python" title="Python" class="tech-icon">
              <img src="./assets/images/telnyx.svg" alt="Telnyx" title="Telnyx" class="tech-icon">
            </span>
          </div>
      `
      }
    };
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new PortfolioApp();
});