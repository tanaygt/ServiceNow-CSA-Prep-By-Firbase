export const csamodules = [
  {
    id: "csa-1",
    title: "Platform Overview and Navigation",
    description: "Understand ServiceNow platform fundamentals, architecture, and user interface.",
    duration: 120,
    difficulty: "beginner",
    certification: "CSA",
    order: 1,
    progress: 100,
  },
  {
    id: "csa-2",
    title: "User Interface & Navigation",
    description: "Master lists, forms, filters, and application navigation for efficient use.",
    duration: 90,
    difficulty: "beginner",
    certification: "CSA",
    order: 2,
    progress: 75,
  },
  {
    id: "csa-3",
    title: "Database Management",
    description: "Learn about tables, fields, relationships, and data modeling in ServiceNow.",
    duration: 150,
    difficulty: "intermediate",
    certification: "CSA",
    order: 3,
    progress: 40,
  },
  {
    id: "csa-4",
    title: "Self-Service & Automation",
    description: "Explore Service Catalog, Record Producers, and Order Guides.",
    duration: 180,
    difficulty: "intermediate",
    certification: "CSA",
    order: 4,
    progress: 10,
  },
  {
    id: "csa-5",
    title: "Scripting and Application Tools",
    description: "Introduction to Business Rules, Client Scripts, and UI Policies.",
    duration: 240,
    difficulty: "advanced",
    certification: "CAD",
    order: 5,
    progress: 0,
  },
  {
    id: "csa-6",
    title: "Reporting and Dashboards",
    description: "Create and manage reports, performance analytics, and dashboards.",
    duration: 100,
    difficulty: "intermediate",
    certification: "CSA",
    order: 6,
    progress: 0,
  },
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
  }
];
