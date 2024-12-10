export const PLACEHOLDER_IMAGE = '/src/assets/images/common/placeholder.jpg';

export const galleryItems = [
  {
    type: 'image',
    src: '/assets/images/gallery/cultural/dance.jpg',
    thumbnail: '/assets/images/gallery/cultural/dance-thumb.jpg',
    title: 'Dance Performance',
    description: 'Annual dance competition finals 2023',
    category: 'Cultural'
  },
  {
    type: 'image',
    src: '/assets/images/gallery/technical/hackathon.jpg',
    thumbnail: '/assets/images/gallery/technical/hackathon-thumb.jpg',
    title: 'Hackathon 2023',
    description: '24-hour coding competition',
    category: 'Technical'
  },
  {
    type: 'image',
    src: '/assets/images/gallery/sports/cricket.jpg',
    thumbnail: '/assets/images/gallery/sports/cricket-thumb.jpg',
    title: 'Cricket Tournament',
    description: 'Inter-college cricket finals',
    category: 'Sports'
  },
  {
    type: 'video',
    src: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
    thumbnail: '/assets/images/gallery/workshops/ai-workshop-thumb.jpg',
    title: 'AI Workshop',
    description: 'Machine Learning workshop by industry experts',
    category: 'Workshops'
  },
  // Add more items as needed
];

export const categories = ['All', 'Cultural', 'Technical', 'Sports', 'Workshops'];

const getPlaceholderImage = (id) => `https://i.pravatar.cc/300?img=${id}`;

export const teamMembers = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Event Coordinator',
    category: 'Core Team',
    image: getPlaceholderImage(1),
    description: 'Leading the team with innovative ideas and strategic planning.',
    quote: 'Creating memories that last a lifetime'
  },
  {
    id: 2,
    name: 'Sarah Smith',
    role: 'Technical Lead',
    category: 'Technical Team',
    email: 'sarah.smith@christ.in',
    phone: '+91 98765 43211',
    image: getPlaceholderImage(2)
  },
  {
    id: 3,
    name: 'Raj Kumar',
    role: 'Cultural Head',
    category: 'Cultural Team',
    email: 'raj.kumar@christ.in',
    phone: '+91 98765 43212',
    image: getPlaceholderImage(3)
  },
  {
    id: 4,
    name: 'Priya Patel',
    role: 'Marketing Head',
    category: 'Marketing Team',
    email: 'priya.patel@christ.in',
    phone: '+91 98765 43213',
    image: getPlaceholderImage(4)
  },
  {
    id: 5,
    name: 'Alex Chen',
    role: 'Design Lead',
    category: 'Design Team',
    email: 'alex.chen@christ.in',
    phone: '+91 98765 43214',
    image: getPlaceholderImage(5)
  }
];

export const teamCategories = [
  'Core Team',
  'Technical Team',
  'Cultural Team',
  'Marketing Team',
  'Design Team'
];

export const events = [
  {
    id: 1,
    title: 'Dance Competition',
    category: 'Cultural',
    formType: 'cultural',
    date: '15th Jan, 2024',
    time: '10:00 AM',
    venue: 'Main Auditorium',
    image: '/images/events/cultural/dance.jpg',
    description: 'Showcase your dance talent across various styles - Classical, Contemporary, and Western.',
    prizePool: '₹50,000',
    registrationFee: '₹500 per team',
    teamSize: '4-6',
    rules: [
      'Time limit: 5-7 minutes',
      'Any dance form is allowed',
      'Pre-recorded music required',
      'Props are allowed'
    ],
    coordinators: [
      {
        name: 'Sarah Johnson',
        phone: '+91 98765 43210',
        email: 'sarah.j@christ.in'
      }
    ]
  },
  {
    id: 2,
    title: 'Theatre Workshop',
    category: 'Theatre',
    formType: 'theatre',
    date: '15th Jan, 2024',
    time: '9:00 AM',
    venue: 'Computer Lab Block',
    image: '/images/events/technical/hackathon.jpg',
    description: '24-hour coding competition to solve real-world problems.',
    prizePool: '₹1,00,000',
    registrationFee: '₹1000 per team',
    teamSize: '2-4',
    rules: [
      '24-hour continuous event',
      'Own laptops required',
      'Internet will be provided',
      'Original solutions only'
    ],
    coordinators: [
      {
        name: 'Alex Kumar',
        phone: '+91 98765 43211',
        email: 'alex.k@christ.in'
      }
    ]
  },
  {
    id: 3,
    title: 'Cricket Tournament',
    category: 'Sports',
    date: '16th Jan, 2024',
    time: '8:00 AM',
    venue: 'College Ground',
    image: '/images/events/sports/cricket.jpg',
    description: 'Inter-college cricket tournament.',
    prizePool: '₹75,000',
    registrationFee: '₹2000 per team',
    teamSize: '11-15',
    rules: [
      '15 overs per innings',
      'ICC rules apply',
      'Team uniform mandatory',
      'Maximum 4 substitutes allowed'
    ],
    coordinators: [
      {
        name: 'Rahul Singh',
        phone: '+91 98765 43212',
        email: 'rahul.s@christ.in'
      }
    ]
  },
  {
    id: 4,
    title: 'AI Workshop',
    category: 'Workshops',
    date: '17th Jan, 2024',
    time: '10:00 AM',
    venue: 'Seminar Hall',
    image: '/images/events/workshops/ai-workshop.jpg',
    description: 'Learn about the latest trends in Artificial Intelligence and Machine Learning.',
    prizePool: 'Certificates',
    registrationFee: '₹500 per person',
    teamSize: '1',
    rules: [
      'Laptop required',
      'Basic Python knowledge needed',
      'Installation guide will be provided',
      'Hands-on sessions included'
    ],
    coordinators: [
      {
        name: 'Dr. Priya Kumar',
        phone: '+91 98765 43213',
        email: 'priya.k@christ.in'
      }
    ]
  }
];

export const eventCategories = [
  {
    name: 'All Events',
    description: 'Explore all our exciting events'
  },
  {
    name: 'Cultural',
    description: 'Showcase your artistic talents'
  },
  {
    name: 'Technical',
    description: 'Test your technical skills'
  },
  {
    name: 'Sports',
    description: 'Compete in various sports'
  },
  {
    name: 'Workshops',
    description: 'Learn from industry experts'
  }
];

export const REGISTRATION_FORMS = {
  cultural: 'https://docs.google.com/forms/d/e/1FAIpQLSfm9jsMpryscocTq6XYwu0kEJE4WsVx7HiP2vTzzmtR0hGmAA/viewform',
  theatre: 'https://docs.google.com/forms/d/e/1FAIpQLSebTsxp1-G3v-eOKu6xOC9AgbJlJSY6sSSKnVcNjLy2C4bUkw/viewform'
};