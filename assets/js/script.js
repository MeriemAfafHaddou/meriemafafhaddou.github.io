'use strict';

// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
  testimonialsItem[i].addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();
  });
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}

// PROJECT MODAL FUNCTIONALITY
// Project data object containing all project details
const projectData = {
  'relio': {
    title: 'Relio',
    category: 'Machine Learning',
    content: `
      <div class="project-details-header">
        <h1>Relio</h1>
        <span class="project-details-category"><strong>Category:</strong> Machine Learning</span>
      </div>

      <h2>Overview</h2>
      <p>
        As part of my final year project, I developed <strong>Relio</strong>, a Python package designed to address
        one of the key challenges in online machine learning: <em>concept drift detection</em>.
        Concept drift occurs when the statistical properties of incoming data change over time,
        which can lead to significant performance drops in deployed models.
      </p>

      <h2>How Relio Works</h2>
      <p>
        Relio provides a proactive solution by continuously monitoring data distributions and detecting shifts
        <strong>before model accuracy deteriorates</strong>.
        At its core, Relio leverages <strong>Optimal Transport theory</strong>, a mathematical framework that
        quantifies the cost of transforming one probability distribution into another.
        This enables a robust and precise comparison of data streams, making drift detection both reliable and
        efficient.
      </p>

      <h2>Validation</h2>
      <p>
        To validate Relio, we tested it on both <strong>supervised (SGDClassifier)</strong> and
        <strong>unsupervised (K-means)</strong> models.
        While these experiments included retraining the models after each detected drift, this step was only for
        testing purposes to observe the effects of drift on model performance—it was not part of Relio's objectives or
        design.
      </p>

      <h2>My Contributions</h2>
      <ul class="project-details-features">
        <li>Developed Relio as a Python package for seamless ML workflow integration</li>
        <li>Implemented drift detection using <strong>Optimal Transport</strong> techniques</li>
        <li>Validated through experiments on supervised and unsupervised learning models</li>
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
      vending machine itself. This integration highlights the team’s commitment to building
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
      Orders are delivered conveniently to the user’s location, creating a seamless food ordering experience.
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
  },

};

// Modal management
const modal = document.getElementById('project-details-modal');
const modalBody = document.getElementById('project-details-body');
const closeBtn = document.getElementById('close-details-btn');

// Function to show project details
function showProjectDetails(projectKey) {
  const project = projectData[projectKey];

  if (project) {
    modalBody.innerHTML = project.content;
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
  }
}

// Function to close modal
function closeModal() {
  modal.style.display = 'none';
  document.body.style.overflow = '';
}

// Initialize project modal functionality when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  // Add click event listeners to all project links
  document.querySelectorAll('.project-link').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const projectKey = btn.getAttribute('data-project');
      showProjectDetails(projectKey);
    });
  });

  // Close button event listener
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // Close modal when clicking outside content
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) {
        closeModal();
      }
    });
  }

  // Close modal with Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && modal && modal.style.display === 'block') {
      closeModal();
    }
  });
});