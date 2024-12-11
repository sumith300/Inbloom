export const PLACEHOLDER_IMAGE = '/src/assets/images/common/placeholder.jpg';

const getPlaceholderImage = (id) => `https://i.pravatar.cc/300?img=${id}`;

export const teamCategories = [
    'Core Team',
    'Technical Team',
    'Cultural Team',
    'Marketing Team',
    'Design Team'
  ];

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