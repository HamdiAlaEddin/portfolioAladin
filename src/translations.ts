export const translations = {
  en: {
    /* ─── NAV ─── */
    nav: {
      items: ['Home', 'About', 'Skills', 'Experience', 'Projects', 'Courses', 'Education', 'Contact'],
      resume: 'View CV',
    },

    /* ─── HERO ─── */
    hero: {
      badge: 'IT Architecture & Cloud Computing',
      firstName: 'Hamdi',
      lastName: 'Alaa Eddin',
      typingTexts: [
        'IT & Cloud / DevOps Engineer',
        'Platform & Infrastructure Enthusiast',
        'Security-Aware ML Builder',
        'Pipeline & Automation Lover',
      ],
      description:
        'Engineer specialized in IT architecture and cloud computing/DevOps, looking for opportunities to apply my skills and contribute to high-value projects.',
      viewProjects: 'View Projects',
      getInTouch: 'Get in Touch',
      stats: [
        { value: '5', label: 'Internships & immersions' },
        { value: '4', label: 'Academic projects' },
        { value: '3', label: 'Languages spoken' },
      ],
    },

    /* ─── ABOUT ─── */
    about: {
      heading: ['About ', 'Me'],
      jobTitle: 'IT Architecture & Cloud Computing / DevOps Engineer',
      languages: 'English · French · Arabic',
      profileTitle: 'Profile',
      profileP1: 'Engineer specialized in IT architecture and cloud computing, motivated to',
      profileP1Bold1: 'deliver secure automation',
      profileP1Mid: 'and',
      profileP1Bold2: 'high-value cloud platforms',
      profileP1End: '. Ready to apply my skills to impactful projects.',
      profileP2Start: 'Hands-on with predictive security using ',
      profileP2H1: 'ML on log data',
      profileP2Mid1: ', integrating alerts in ',
      profileP2H2: 'Wazuh dashboards',
      profileP2Mid2: ', building ',
      profileP2H3: 'CI/CD pipelines and containerized applications',
      profileP2Mid3: ', and deploying ',
      profileP2H4: 'OpenStack and Kubernetes environments',
      profileP2End: ' to keep delivery reliable and observable.',
      highlights: [
        { title: 'Predictive Security ML', desc: 'ML on security logs with real-time Wazuh alerts' },
        { title: 'CI/CD & Delivery', desc: 'Jenkins pipelines for build, test, deploy automation' },
        { title: 'Cloud & Infrastructure', desc: 'OpenStack, Kubernetes, Terraform, monitoring stacks' },
        { title: 'Full-Stack Delivery', desc: 'Laravel and Node/Angular apps with responsive UIs' },
      ],
    },

    /* ─── SKILLS ─── */
    skills: {
      heading: ['Technical ', 'Skills'],
      subtitle: 'Hands-on capabilities spanning virtualization, DevOps automation, networking, and full-stack delivery.',
      categories: [
        { title: 'Virtualization' },
        { title: 'DevOps & Automation' },
        { title: 'Frameworks' },
        { title: 'System Administration' },
        { title: 'Networks & Protocols' },
        { title: 'Programming Languages' },
        { title: 'Web' },
        { title: 'Modeling' },
      ],
    },

    /* ─── EXPERIENCE ─── */
    experience: {
      heading: ['Professional ', 'Experience'],
      items: [
        {
          role: 'Machine Learning Engineer Intern',
          company: 'BH Assurance',
          period: 'Mar 2025 – Sep 2025',
          description: [
            'Prepared and trained a machine learning model for predictive attack detection from security log data.',
            'Integrated model alerts into the Wazuh dashboard for real-time monitoring and faster response to threats.',
          ],
        },
        {
          role: 'DevOps Engineer Intern',
          company: 'Solixy',
          period: 'Jul 2024 – Aug 2024',
          description: [
            'Designed a delivery management application to track orders and logistics.',
            'Set up CI/CD pipelines to automate build, test, and deployment workflows.',
          ],
        },
        {
          role: 'Full-Stack Developer Intern',
          company: 'Bitaka',
          period: 'Jul 2023 – Aug 2023',
          description: [
            'Designed and developed a camping management web application using Laravel.',
          ],
        },
        {
          role: 'Full-Stack Developer Intern',
          company: 'Leaders Gate Company',
          period: 'Mar 2022 – May 2022',
          description: [
            'Built a web application for agricultural investments with Node.js and Angular.',
          ],
        },
        {
          role: 'IT Intern',
          company: 'Tadeco Groupe',
          period: 'Sep 2020',
          description: [
            'Supported daily IT operations, gaining practical experience and strengthening professional skills.',
          ],
        },
      ],
    },

    /* ─── PROJECTS ─── */
    projects: {
      heading: ['Featured ', 'Projects'],
      subtitle: 'Academic projects showing CI/CD architectures, cloud infrastructure, microservices, and desktop delivery.',
      items: [
        {
          title: 'Modern CI/CD Pipeline Architecture',
          subtitle: 'Jenkins · Kubernetes · Azure',
          description:
            'Designed a distributed CI/CD pipeline with Jenkins Master-Agent, Azure AKS, SonarCloud, Nexus, Trivy, Slack notifications, and Terraform/AKS deployment for Angular and Spring Boot apps, with Prometheus and Grafana monitoring.',
        },
        {
          title: 'OpenStack Infrastructure Deployment',
          subtitle: 'OpenStack · Kubernetes · Ansible',
          description:
            'Built an OpenStack environment with Nova, Keystone, Heat, Neutron, Magnum, Cinder, and Glance to provision clusters and orchestrate VMs and Kubernetes containers.',
        },
        {
          title: 'ESPREAT Web Application',
          subtitle: 'Angular · Spring Boot · Microservices',
          description:
            'Delivered a full application with Angular frontend and Spring Boot microservices backend to manage student menus and orders.',
        },
        {
          title: 'Integrated C Development Project',
          subtitle: 'C · Glade · Linux',
          description:
            'Built a desktop election management application using C and Glade on Linux/VirtualBox.',
        },
      ],
    },

    /* ─── COURSES ─── */
    courses: {
      heading: 'Courses & Certifications',
      items: [
        { title: 'Fundamentals of DevOps', issuer: 'ID: df57b280-b7ed-4945-9a49-fbf4cb7d75a6', date: '2025' },
        { title: 'CKA Certified Kubernetes Administrator', issuer: 'ID: 2843d67f-2d40-424c-9950-838d7c811140', date: '2025' },
        { title: 'GitHub Actions Certification', issuer: 'ID: 4f9e44f3-fb1-47d6-8f3e-e51ae46a4745', date: '2025' },
        { title: 'Jenkins Certification', issuer: 'ID: 76cb7067-3bd5-4fef-aad6-4e938a1a4f8b', date: '2025' },
        { title: 'Microsoft Azure Services and Lifecycles', issuer: 'ID: 5E0G020XKFD6', date: '2024' },
      ],
    },

    /* ─── EDUCATION ─── */
    education: {
      heading: 'Education',
      items: [
        {
          degree: 'National Engineering Degree in Computer Science',
          school: 'ESPRIT — Ariana, Tunisia',
          period: 'Sep 2022 – Nov 2025',
          tags: ['Cloud Computing', 'DevOps', 'IT Architecture', 'OpenStack', 'CI/CD'],
        },
        {
          degree: 'Bachelor in Computer Systems Engineering',
          school: 'Higher Institute of Applied Science and Technology of Gafsa — Tunisia',
          period: 'Sep 2019 – Jun 2022',
          tags: ['Systems Engineering', 'Networking', 'Software Foundations'],
        },
        {
          degree: 'Baccalauréat in Mathematics',
          school: 'Lycée Feriana — Tunisia',
          period: 'Sep 2016 – Jun 2017',
          tags: ['Mathematics', 'Science'],
        },
      ],
    },

    /* ─── CONTACT ─── */
    contact: {
      heading: ['Get in ', 'Touch'],
      subtitle: 'Looking for an IT architecture and cloud/DevOps engineer? Let’s discuss how I can help your next project.',
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
      terminalEcho: 'echo "Ship reliable infra together"',
      terminalOutput: 'Ship reliable infra together',
      terminalMail: 'mail -s "Collaboration" alaa.hamdi01@gmail.com',
      terminalSuccess: 'Message queued ✓',
    },

    /* ─── FOOTER ─── */
    footer: {
      copyright: 'Hamdi Alaa Eddin — IT & Cloud / DevOps Engineer',
    },
  },

  fr: {
    /* ─── NAV ─── */
    nav: {
      items: ['Accueil', 'À propos', 'Compétences', 'Expérience', 'Projets', 'Cours', 'Formation', 'Contact'],
      resume: 'Voir le CV',
    },

    /* ─── HERO ─── */
    hero: {
      badge: 'Architecture IT & Cloud Computing',
      firstName: 'Hamdi',
      lastName: 'Alaa Eddin',
      typingTexts: [
        'Ingénieur IT & Cloud / DevOps',
        'Passionné de plateformes et d’infra',
        'Créateur de modèles ML orientés sécurité',
        "Amoureux des pipelines d'automatisation",
      ],
      description:
        'Ingénieur spécialisé en architecture IT et cloud computing/DevOps, à la recherche d’une opportunité pour appliquer mes compétences et contribuer à des projets à forte valeur ajoutée.',
      viewProjects: 'Voir les projets',
      getInTouch: 'Me contacter',
      stats: [
        { value: '5', label: 'Stages et immersions' },
        { value: '4', label: 'Projets académiques' },
        { value: '3', label: 'Langues parlées' },
      ],
    },

    /* ─── ABOUT ─── */
    about: {
      heading: ['À propos de ', 'Moi'],
      jobTitle: 'Ingénieur Architecture IT & Cloud / DevOps',
      languages: 'Anglais · Français · Arabe',
      profileTitle: 'Profil',
      profileP1: "Ingénieur spécialisé en architecture IT et cloud computing, motivé pour",
      profileP1Bold1: "livrer des automatisations sécurisées",
      profileP1Mid: 'et',
      profileP1Bold2: "des plateformes cloud à forte valeur",
      profileP1End: '. Prêt à mettre mes compétences au service de projets ambitieux.',
      profileP2Start: 'Expérience en sécurité prédictive avec ',
      profileP2H1: 'ML sur des données de logs',
      profileP2Mid1: ', intégration des alertes dans ',
      profileP2H2: 'Wazuh',
      profileP2Mid2: ', construction de ',
      profileP2H3: 'pipelines CI/CD et applications conteneurisées',
      profileP2Mid3: ', et déploiement ',
      profileP2H4: 'd’environnements OpenStack et Kubernetes',
      profileP2End: ' pour garantir fiabilité et observabilité.',
      highlights: [
        { title: 'ML Sécurité Prédictive', desc: 'Modèles ML sur logs + alertes Wazuh en temps réel' },
        { title: 'CI/CD & Livraison', desc: 'Pipelines Jenkins pour build, test et déploiement' },
        { title: 'Cloud & Infra', desc: 'OpenStack, Kubernetes, Terraform, monitoring' },
        { title: 'Livraison Full-Stack', desc: 'Apps Laravel et Node/Angular avec interfaces soignées' },
      ],
    },

    /* ─── SKILLS ─── */
    skills: {
      heading: ['Compétences ', 'Techniques'],
      subtitle: "Un socle pratique : virtualisation, automatisation DevOps, réseaux et livraison full-stack.",
      categories: [
        { title: 'Virtualisation' },
        { title: 'DevOps & Automatisation' },
        { title: 'Frameworks' },
        { title: 'Administration Système' },
        { title: 'Réseaux & Protocoles' },
        { title: 'Langages de Programmation' },
        { title: 'Web' },
        { title: 'Modélisation' },
      ],
    },

    /* ─── EXPERIENCE ─── */
    experience: {
      heading: ['Expérience ', 'Professionnelle'],
      items: [
        {
          role: 'Stagiaire Ingénieur Machine Learning',
          company: 'BH Assurance',
          period: 'Mar 2025 – Sep 2025',
          description: [
            "Préparation et entraînement d’un modèle ML pour la détection prédictive d’attaques à partir des logs de sécurité.",
            "Intégration des alertes du modèle dans le dashboard Wazuh pour un suivi temps réel et une réponse rapide.",
          ],
        },
        {
          role: 'Stagiaire Ingénieur DevOps',
          company: 'Solixy',
          period: 'Juil 2024 – Août 2024',
          description: [
            "Conception d’une application de gestion des livraisons pour suivre les commandes.",
            "Mise en place de pipelines CI/CD pour automatiser build, tests et déploiement.",
          ],
        },
        {
          role: 'Stagiaire Développeur Full-Stack',
          company: 'Bitaka',
          period: 'Juil 2023 – Août 2023',
          description: [
            "Conception et développement d’une application web de gestion de campings avec Laravel.",
          ],
        },
        {
          role: 'Stagiaire Développeur Full-Stack',
          company: 'Leaders Gate Company',
          period: 'Mar 2022 – Mai 2022',
          description: [
            "Conception et développement d’une application web pour les investissements agricoles avec Node.js et Angular.",
          ],
        },
        {
          role: 'Stagiaire IT',
          company: 'Tadeco Groupe',
          period: 'Sep 2020',
          description: [
            "Participation aux opérations IT quotidiennes pour acquérir une expérience pratique et renforcer les compétences professionnelles.",
          ],
        },
      ],
    },

    /* ─── PROJECTS ─── */
    projects: {
      heading: ['Projets ', 'Phares'],
      subtitle: "Projets académiques : architectures CI/CD, infrastructures cloud, microservices et applications desktop.",
      items: [
        {
          title: 'Architecture CI/CD Moderne',
          subtitle: 'Jenkins · Kubernetes · Azure',
          description:
            "Conception d'un pipeline CI/CD distribué : Jenkins Master-Agent, cluster AKS, SonarCloud, Nexus, Trivy, notifications Slack, Terraform/AKS pour Angular et Spring Boot, monitoring Prometheus/Grafana.",
        },
        {
          title: 'Déploiement d’une Infrastructure OpenStack',
          subtitle: 'OpenStack · Kubernetes · Ansible',
          description:
            "Création d’un environnement OpenStack avec Nova, Keystone, Heat, Neutron, Magnum, Cinder et Glance pour déployer des clusters et orchestrer VMs et conteneurs Kubernetes.",
        },
        {
          title: 'Application ESPREAT',
          subtitle: 'Angular · Spring Boot · Microservices',
          description:
            "Application complète avec frontend Angular et backend microservices Spring Boot pour gérer menus et commandes des étudiants.",
        },
        {
          title: 'Projet Intégré de Développement C',
          subtitle: 'C · Glade · Linux',
          description:
            "Application desktop de gestion des élections développée en C avec Glade sous Linux/VirtualBox.",
        },
      ],
    },

    /* ─── COURSES ─── */
    courses: {
      heading: 'Cours & Certifications',
      items: [
        { title: 'Fundamentals of DevOps', issuer: 'ID : df57b280-b7ed-4945-9a49-fbf4cb7d75a6', date: '2025' },
        { title: 'CKA Certified Kubernetes Administrator', issuer: 'ID : 2843d67f-2d40-424c-9950-838d7c811140', date: '2025' },
        { title: 'Certification GitHub Actions', issuer: 'ID : 4f9e44f3-fb1-47d6-8f3e-e51ae46a4745', date: '2025' },
        { title: 'Certification Jenkins', issuer: 'ID : 76cb7067-3bd5-4fef-aad6-4e938a1a4f8b', date: '2025' },
        { title: 'Microsoft Azure Services and Lifecycles', issuer: 'ID : 5E0G020XKFD6', date: '2024' },
      ],
    },

    /* ─── EDUCATION ─── */
    education: {
      heading: 'Formation',
      items: [
        {
          degree: "Diplôme National d'Ingénieur en Informatique",
          school: 'ESPRIT — Ariana, Tunisie',
          period: 'Sep 2022 – Nov 2025',
          tags: ['Cloud Computing', 'DevOps', 'Architecture IT', 'OpenStack', 'CI/CD'],
        },
        {
          degree: "Licence en ingénierie des systèmes informatiques",
          school: 'ISSAT Gafsa — Tunisie',
          period: 'Sep 2019 – Jun 2022',
          tags: ['Systèmes', 'Réseaux', 'Bases du développement'],
        },
        {
          degree: 'Baccalauréat Sciences Mathématiques',
          school: 'Lycée Feriana — Tunisie',
          period: 'Sep 2016 – Jun 2017',
          tags: ['Mathématiques', 'Sciences'],
        },
      ],
    },

    /* ─── CONTACT ─── */
    contact: {
      heading: ['Me ', 'Contacter'],
      subtitle: "Besoin d’un ingénieur architecture IT et cloud/DevOps ? Discutons de votre prochain projet.",
      email: 'Email',
      phone: 'Téléphone',
      location: 'Localisation',
      terminalEcho: 'echo "Livrons une infra fiable"',
      terminalOutput: 'Livrons une infra fiable',
      terminalMail: 'mail -s "Collaboration" alaa.hamdi01@gmail.com',
      terminalSuccess: 'Message en file ✓',
    },

    /* ─── FOOTER ─── */
    footer: {
      copyright: 'Hamdi Alaa Eddin — Ingénieur IT & Cloud / DevOps',
    },
  },
} as const;

export type Language = 'en' | 'fr';
export type Translations = typeof translations['en'];
