export const learningResources = [
  {
    id: "youtube-playlist",
    title: "Complete CSA YouTube Playlist",
    description: "Full video course for ServiceNow CSA certification",
    type: "youtube" as const,
    url: "https://www.youtube.com/watch?v=0lXeYjLZJXE&list=PL3e3aKzZIn4Y9-ecrKRGgjADvGP-hq99N",
    category: "Video Course",
    duration: "15+ hours"
  },
  {
    id: "official-learning-path",
    title: "ServiceNow Official Learning Path",
    description: "Official CSA learning path from ServiceNow",
    type: "documentation" as const,
    url: "https://learning.servicenow.com/lxp/en/now-platform/certified-system-administrator-csa-learning-path?id=learning_path_prev&path_id=cc4919c6dbdeb700760a710439961966",
    category: "Official Training",
    duration: "Self-paced"
  },
  {
    id: "servicenow-docs",
    title: "ServiceNow Official Documentation",
    description: "Complete ServiceNow platform documentation",
    type: "documentation" as const,
    url: "https://docs.servicenow.com",
    category: "Reference",
    duration: "Comprehensive"
  },
  {
    id: "community-links",
    title: "ServiceNow Community Resources",
    description: "Useful links and community discussions",
    type: "documentation" as const,
    url: "https://www.servicenow.com/community/training-and-certifications/certified-system-administrator-csa-useful-links/ta-p/2296924",
    category: "Community",
    duration: "Ongoing"
  },
  {
    id: "exam-topics",
    title: "Practice Exams & Questions",
    description: "Real exam questions and practice tests",
    type: "practice" as const,
    url: "https://www.examtopics.com/exams/servicenow/csa/view/",
    category: "Practice Tests",
    duration: "Multiple tests"
  },
  {
    id: "google-docs-answers",
    title: "CSA Study Guide (With Answers)",
    description: "Complete study checklist with answers",
    type: "documentation" as const,
    url: "https://docs.google.com/document/d/1Z-MI2T3bX7VCiA-p_V7UbPmzTPNHjJQfkjCNoJ43Ug0/edit",
    category: "Study Guide",
    duration: "Comprehensive"
  },
  {
    id: "google-docs-practice",
    title: "CSA Study Guide (Practice Version)",
    description: "Study checklist for self-testing",
    type: "practice" as const,
    url: "https://docs.google.com/document/d/1E-DmpzRsMtSg5r-YQVta2JVAubSKaW1VqccM1t_HAPc/edit",
    category: "Study Guide",
    duration: "Self-paced"
  },
  {
    id: "cram-flashcards",
    title: "Interactive Flashcards",
    description: "Digital flashcards for quick revision",
    type: "practice" as const,
    url: "https://www.cram.com/flashcards/ld1-platform-overview-and-navigation-7-public-14175419",
    category: "Flashcards",
    duration: "Quick study"
  }
];

export const questions = [
  {
    id: "q1",
    question: "A Service Catalog may include which of the following components?",
    options: [
      "Order Guides, Exchange Rates, Calendars",
      "Order Guides, Catalog Items, and Interceptors",
      "Catalog Items, Asset Contracts, Task Surveys",
      "Record Producers, Order Guides, and Catalog Items"
    ],
    correctAnswer: 3,
    explanation: "Record Producers, Order Guides, and Catalog Items are core Service Catalog components for creating records and guiding users through ordering services.",
    learningDomain: "Self-Service and Automation",
    difficulty: "medium"
  },
  {
    id: "q2",
    question: "Which of the following is a type of Client Script?",
    options: [
      "onDisplay",
      "onBefore",
      "onChange",
      "onAsync"
    ],
    correctAnswer: 2,
    explanation: "Client Scripts run on the client-side (web browser). Types include onChange, onLoad, and onSubmit. onBefore and onDisplay are for Business Rules which run on the server.",
    learningDomain: "Scripting and Application Tools",
    difficulty: "easy"
  },
  {
    id: "q3",
    question: "What is the purpose of an Update Set?",
    options: [
      "To back up the instance data.",
      "To capture customizations and move them between instances.",
      "To apply security patches to the instance.",
      "To update the version of the ServiceNow platform."
    ],
    correctAnswer: 1,
    explanation: "Update Sets are used to group configuration changes and customizations so they can be easily moved from a development instance to a testing or production instance.",
    learningDomain: "Platform Overview and Navigation",
    difficulty: "easy"
  },
  {
    id: "q4",
    question: "Which role is required to access the 'Users' and 'Groups' modules?",
    options: [
      "itil",
      "user_admin",
      "admin",
      "catalog_admin"
    ],
    correctAnswer: 2,
    explanation: "The 'admin' role has full access, but the principle of least privilege suggests using the more specific 'user_admin' role for managing users, groups, and roles.",
    learningDomain: "Database Management",
    difficulty: "medium"
  },
  {
    id: "q5",
    question: "What does CMDB stand for?",
    options: [
      "Configuration Management Database",
      "Customer Management Datacenter Backup",
      "Configuration Model Data Block",
      "Change Management Development Board"
    ],
    correctAnswer: 0,
    explanation: "The Configuration Management Database (CMDB) is a key component of ServiceNow, storing information about all configuration items (CIs) within an organization.",
    learningDomain: "Platform Overview and Navigation",
    difficulty: "easy"
  }
];

export const flashcards = [
  {
    id: "fc1",
    front: "What is a Business Rule?",
    back: "A server-side script that runs when a record is displayed, inserted, updated, or deleted, or when a table is queried.",
    domain: "Scripting and Application Tools"
  },
  {
    id: "fc2",
    front: "What is a UI Policy?",
    back: "A client-side rule that dynamically changes information on a form, such as making fields mandatory, read-only, or visible.",
    domain: "User Interface & Navigation"
  },
  {
    id: "fc3",
    front: "What are the three main components of the Service Catalog?",
    back: "Record Producers, Order Guides, and Catalog Items.",
    domain: "Self-Service and Automation"
  },
  {
    id: "fc4",
    front: "What is an Access Control List (ACL)?",
    back: "A rule that restricts access to data by specifying the object and operation being secured and the permissions required to access it.",
    domain: "Database Management"
  },
  {
    id: "fc5",
    front: "What is an Update Set?",
    back: "A group of configuration changes that can be moved from one instance to another.",
    domain: "Platform Overview and Navigation"
  },
  {
    id: "fc6",
    front: "What does Coalesce mean in an Import Set?",
    back: "When coalescing on a field, ServiceNow uses it as a unique key to update existing records instead of creating new ones.",
    domain: "Database Management"
  },
  {
    id: "fc7",
    front: "What is a Client Script?",
    back: "A script that runs on the client-side (the user's web browser). Types include onLoad, onChange, onSubmit, and onCellEdit.",
    domain: "Scripting and Application Tools"
  },
  {
    id: "fc8",
    front: "What is a Dictionary Override?",
    back: "Allows a field in a child table to have different properties (e.g., default value, mandatory) than the same field in the parent table.",
    domain: "Database Management"
  },
  {
    id: "fc9",
    front: "What is the purpose of a Transform Map?",
    back: "To map data from a source table (e.g., from an import set) to a target table (e.g., cmdb_ci).",
    domain: "Database Management"
  },
  {
    id: "fc10",
    front: "What is a UI Action?",
    back: "A UI element (e.g., button, link, context menu item) that can execute JavaScript.",
    domain: "User Interface & Navigation"
  },
  {
    id: "fc11",
    front: "What role is required to create and manage update sets?",
    back: "The 'admin' role. Developers typically use update sets to move their work.",
    domain: "Platform Overview and Navigation"
  },
  {
    id: "fc12",
    front: "What is a Service Level Agreement (SLA)?",
    back: "A record that defines a set amount of time for a task to reach a certain condition, the tables to access, and what is to happen if the SLA is breached.",
    domain: "Self-Service and Automation"
  }
];
