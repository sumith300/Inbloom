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

export const categories = ['All', 'Literary', 'Art', 'Music', 'Music(Solos-Only)','Dance','E-Sports'];

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
    title: 'Jam',
    category: 'Literary',
    date: '20th Jan, 2024',
    time: '11:00 AM',
    venue: 'Literary Hall',
    description: 'A one-minute challenge where participants speak on a given topic without hesitation, repetition, or deviation.',
    rules: [
      'Participants must speak for one minute without hesitation, repetition, or deviation.',
      'Points awarded for quick thinking, eloquence, presence of mind, and adherence to the topic.',
      'Topics will be provided by the JAM Master on the spot.',
      'Standard JAM rules apply.',
      'Multiple entries are allowed per college.'
    ],
    prizePool: 'Certificates and trophies for winners.',
    registrationFee: '₹200 per participant',
    coordinators: [
      {
        name: 'Alex Morgan',
        phone: '+91 98765 43215',
        email: 'alex.m@christ.in'
      },
      {
        name: 'Nina Kapoor',
        phone: '+91 98765 43225',
        email: 'nina.k@christ.in'
      }
    ]
  }
  ,
  {
    id: 2,
    title: 'Debate',
    category: 'Literary',
    date: '21st Jan, 2024',
    time: '2:00 PM',
    venue: 'Debate Hall',
    description: 'Participants engage in a structured, non-parliamentary style debate, defending or opposing the motion.',
    rules: [
      'Participants are allotted 4 minutes for speaking and 1 minute for rebuttal.',
      'Topics for the prelims round will be announced a day in advance.',
      'Participants must be prepared to argue both for and against the motion.',
      'Judges may provide rules specific to the final round.',
      'Judges’ decisions are final.'
    ],
    prizePool: 'Certificates and trophies for winners.',
    registrationFee: '₹400 per team',
    coordinators: [
      {
        name: 'Rachel Brown',
        phone: '+91 98765 43218',
        email: 'rachel.b@christ.in'
      },
      {
        name: 'James Carter',
        phone: '+91 98765 43224',
        email: 'james.c@christ.in'
      }
    ]
  }
  ,
  {
    id: 3,
    title: 'Dumb-Charades',
    category: 'Literary',
    date: '22nd Jan, 2024',
    time: '3:00 PM',
    venue: 'Drama Hall',
    description: 'A team-based event where participants act out prompts without speaking to convey the given word or phrase.',
    rules: [
      'Each team must have 3 members: 1 guesser and 2 actors.',
      'Prompts may include movies, characters, songs, phrases, or situations.',
      'Spelling, rhyming, splitting words, and codes are not allowed.',
      'The final round will be decided at the judges’ discretion.',
      'Vulgar or inappropriate gestures will lead to disqualification.',
      'Maximum of 2 teams allowed per college.'
    ],
    prizePool: 'Certificates and trophies for winners.',
    registrationFee: '₹200 per team',
    coordinators: [
      {
        name: 'Sarah Johnson',
        phone: '+91 98765 43226',
        email: 'sarah.j@christ.in'
      },
      {
        name: 'Michael Adams',
        phone: '+91 98765 43227',
        email: 'michael.a@christ.in'
      }
    ]
  }
  ,
  {
    id: 4,
    title: 'Pot-Pourri',
    category: 'Literary',
    date: '23rd Jan, 2024',
    time: '4:00 PM',
    venue: 'Activity Hall',
    description: 'A multi-round event featuring a variety of literary activities such as quizzes, spell bee, crosswords, extempore, and more.',
    rules: [
      'Teams of 3 members are required (on-spot team-making is allowed).',
      'The event will have multiple rounds focusing on different activities.',
      'Points may be cumulative at the end of all rounds or based on elimination, at judges’ discretion.',
      'Tasks include quizzes, spell bee, crosswords, heads up, extempore, turncoat, and more.',
      'Points awarded based on accuracy, creativity, speed, and adherence to task guidelines.'
    ],
    prizePool: 'Certificates and trophies for winners.',
    registrationFee: '₹400 per team',
    coordinators: [
      {
        name: 'Jessica Turner',
        phone: '+91 98765 43228',
        email: 'jessica.t@christ.in'
      },
      {
        name: 'Arjun Mehta',
        phone: '+91 98765 43229',
        email: 'arjun.m@christ.in'
      }
    ]
  },
  {
    id: 5,
    title: 'B-Plan Pitching',
    category: 'Literary',
    date: '24th Jan, 2024',
    time: '10:00 AM',
    venue: 'Conference Room',
    description: 'An event where participants tackle real-life issues by formulating innovative business plans and presenting them to judges.',
    rules: [
      'Teams of up to 3 members are allowed.',
      'Participants must identify a real-life issue and present unique, practical solutions.',
      'Deliverables include a 10-slide PowerPoint presentation, financial breakdown in Excel, and optional creatives (e.g., posters or videos).',
      'The pitch must be presented in 5 minutes to the judges.',
      'Use of AI tools (e.g., ChatGPT) is prohibited and will result in disqualification.',
      'Judges’ decision is final, and questioning from participants is discouraged.'
    ],
    deliverables: [
      'Phase-wise implementation plan.',
      'Detailed organizational structure for the project.',
      'Recruitment strategy at all levels.',
      'Marketing strategy to attract investors.',
      'Financial plans with sources of funds and cost breakdown.',
      'Competitor analysis and USP (Unique Selling Proposition).'
    ],
    prizePool: '₹25,000 for the winning team.',
    registrationFee: '₹400 per team',
    coordinators: [
      {
        name: 'Priya Sharma',
        phone: '+91 98765 43230',
        email: 'priya.s@christ.in'
      },
      {
        name: 'Vikram Desai',
        phone: '+91 98765 43231',
        email: 'vikram.d@christ.in'
      }
    ]
  },
  {
    id: 6,
    title: 'Creative Writing',
    category: 'Literary',
    date: '25th Jan, 2024',
    time: '11:00 AM',
    venue: 'Writing Lounge',
    description: 'An individual event to showcase creative skills through short stories, essays, or poetry, based on on-the-spot prompts.',
    rules: [
      'Participants can choose between Short Story, Essay, or Poetry writing.',
      'English is the only medium allowed.',
      'Use of vulgarity, obscenity, or inappropriate language is prohibited and will result in disqualification.',
      'All content must be original and created during the event.'
    ],
    subEvents: [
      {
        type: 'Short Story',
        duration: '1 hour',
        wordCount: '500-750 words',
        description: 'Write a short story based on a picture prompt provided on the spot.'
      },
      {
        type: 'Essay',
        duration: '1 hour',
        wordCount: '1000-1500 words',
        description: 'Write an essay on a topic provided on the spot.'
      },
      {
        type: 'Poetry',
        duration: '1 hour',
        format: '4 stanzas with 4 lines each',
        description: 'Write a poem based on themes provided on the spot.'
      }
    ],
    prizePool: 'Certificates and trophies for winners.',
    registrationFee: '₹200 per participant',
    coordinators: [
      {
        name: 'Sophia Taylor',
        phone: '+91 98765 43232',
        email: 'sophia.t@christ.in'
      },
      {
        name: 'Ankit Verma',
        phone: '+91 98765 43233',
        email: 'ankit.v@christ.in'
      }
    ]
  }
,{
  id: 7,
  title: 'Air Crash/Shipwreck',
  category: 'Literary',
  date: '25th Jan, 2024',
  time: '3:00 PM',
  venue: 'Debate Hall',
  description: 'An imaginative individual event where participants play a character and present a case to win the last lifejacket or lifeboat seat.',
  rules: [
    'Participants will be assigned a character and scenario randomly.',
    '1 minute will be given for preparation.',
    'Participants must present their case within 1 minute, followed by 1 minute to answer questions from the captain (judge).',
    'No writing materials are allowed.',
    'Creativity, logic, and presentation skills will be judged.',
    'Vulgarity, inappropriate content, or failure to adhere to time limits will lead to disqualification.'
  ],
  prizePool: 'Certificates and trophies for winners.',
  registrationFee: '₹200 per participant',
  coordinators: [
    {
      name: 'Rohit Nair',
      phone: '+91 98765 43234',
      email: 'rohit.n@christ.in'
    },
    {
      name: 'Amrita Das',
      phone: '+91 98765 43235',
      email: 'amrita.d@christ.in'
    }
  ]
}
,      
{
  id: 8,
  title: 'Pencil Sketching',
  category: 'Art',
  date: '26th Jan, 2024',
  time: '11:00 AM',
  venue: 'Art Studio',
  description: 'An individual event where participants create pencil or charcoal sketches based on a prompt.',
  rules: [
    'Only pencils, charcoal, and erasers are allowed for sketching.',
    'No color media (e.g., paints, markers) are permitted.',
    'Sketching paper will be provided to the participants.',
    'Participants must bring their own sketching supplies.',
    'The sketch must be completed within the allotted time limit of 1 hour 30 minutes.',
    'Prompts will be given at the start of both prelims and finals.'
  ],
  prizePool: 'Certificates and trophies for winners.',
  registrationFee: '₹150 per participant',
  coordinators: [
    {
      name: 'Emily Rose',
      phone: '+91 98765 43216',
      email: 'emily.r@christ.in'
    },
    {
      name: 'Rajesh Iyer',
      phone: '+91 98765 43236',
      email: 'rajesh.i@christ.in'
    }
  ]
}
,
{
  id: 9,
  title: 'Reel Making',
  category: 'Art',
  date: '27th Jan, 2024',
  time: '2:00 PM',
  venue: 'Media Lab',
  description: 'An individual event where participants create short reels with basic editing and voiceovers, following a given theme.',
  rules: [
    'Maximum duration for the reel is 60-90 seconds.',
    'The theme will be announced 1 day prior to the event.',
    'Only mobile phones can be used for filming and basic editing.',
    'No VFX effects or stock footage are allowed.',
    'Voiceovers and background music are permitted.',
    'Reels must be shot within the campus premises.',
    'Explicit, vulgar, or plagiarized content will lead to disqualification.'
  ],
  prizePool: 'Certificates and trophies for winners.',
  registrationFee: '₹150 per participant',
  coordinators: [
    {
      name: 'Nisha Agarwal',
      phone: '+91 98765 43237',
      email: 'nisha.a@christ.in'
    },
    {
      name: 'Rahul Dev',
      phone: '+91 98765 43238',
      email: 'rahul.d@christ.in'
    }
  ]
}
,
  
{
  id: 10,
  title: 'Painting',
  category: 'Art',
  date: '28th Jan, 2024',
  time: '11:00 AM',
  venue: 'Art Gallery',
  description: 'An individual event to showcase creativity by painting based on a theme provided on the spot.',
  rules: [
    'Participants can use any kind of paints (e.g., watercolors, acrylic, oil paints).',
    'Participants must bring their own painting supplies.',
    'The theme will be provided on the spot.',
    'Time limit: 1 hour 30 minutes.',
    'Paintings must be original and not previously published elsewhere.',
    'Vulgar or inappropriate content will lead to disqualification.'
  ],
  prizePool: 'Certificates and trophies for winners.',
  registrationFee: '₹150 per participant',
  coordinators: [
    {
      name: 'Sophia Clark',
      phone: '+91 98765 43219',
      email: 'sophia.c@christ.in'
    },
    {
      name: 'Karan Gupta',
      phone: '+91 98765 43239',
      email: 'karan.g@christ.in'
    }
  ]
}
,
{
  id: 11,
  title: 'Pot Art',
  category: 'Art',
  date: '29th Jan, 2024',
  time: '10:00 AM',
  venue: 'Craft Workshop',
  description: 'An individual event where participants decorate pots creatively based on a theme provided on the spot.',
  rules: [
    'The theme will be announced on the spot.',
    'Participants must use only the provided pot for the competition.',
    'Materials like glitter, mirror pieces, plaster of Paris, chalk powder, and sharp tools are not allowed.',
    'Time limit: 1 hour 30 minutes.',
    'Participants must bring their own non-restricted decorating supplies.',
    'Entries must be original and adhere to the theme.'
  ],
  prizePool: 'Certificates and trophies for winners.',
  registrationFee: '₹150 per participant',
  coordinators: [
    {
      name: 'Meera Sharma',
      phone: '+91 98765 43240',
      email: 'meera.s@christ.in'
    },
    {
      name: 'Aditya Rao',
      phone: '+91 98765 43241',
      email: 'aditya.r@christ.in'
    }
  ]
}
,
{
  id: 12,
  title: 'Photography',
  category: 'Art',
  date: '30th Jan, 2024',
  time: '11:00 AM',
  venue: 'Campus Grounds',
  description: 'An individual event where participants showcase their photography skills based on a theme provided prior to the event.',
  rules: [
    'Each participant must submit 2 photographs.',
    'The theme will be announced 1 day prior to the event.',
    'Only DSLR cameras are allowed.',
    'Basic editing (e.g., cropping, color correction) is permitted; advanced editing is prohibited.',
    'Submissions must be in JPEG format.',
    'Entries must be original, and photos must adhere to the theme.'
  ],
  prizePool: 'Certificates and trophies for winners.',
  registrationFee: '₹150 per participant',
  coordinators: [
    {
      name: 'Anjali Kapoor',
      phone: '+91 98765 43242',
      email: 'anjali.k@christ.in'
    },
    {
      name: 'Rohan Singh',
      phone: '+91 98765 43243',
      email: 'rohan.s@christ.in'
    }
  ]
}
,
{
  id: 13,
  title: 'Logo Designing',
  category: 'Art',
  date: '31st Jan, 2024',
  time: '2:00 PM',
  venue: 'Design Lab',
  description: 'An individual event where participants create a logo based on a theme announced three days prior to the event.',
  rules: [
    'The theme will be announced 3 days before the event.',
    'Participants can only submit one logo entry.',
    'Logo should be designed using digital platforms only (e.g., Adobe Illustrator, CorelDraw, Photoshop).',
    'Submissions must be in .jpeg, .png, or .pdf format.',
    'The final design must be submitted in open file formats (EPS/CDR/PSD) upon winning.',
    'The logo must be original and cannot have been previously published.',
    'The design must be colorful, no grayscale or black-and-white logos are allowed.',
    'Each submission must include a brief write-up (max 150 words) explaining the theme and concept behind the logo.'
  ],
  prizePool: 'Certificates, trophies, and the opportunity for the winning logo to be used for future branding.',
  registrationFee: '₹150 per participant',
  coordinators: [
    {
      name: 'Ravi Mehta',
      phone: '+91 98765 43244',
      email: 'ravi.m@christ.in'
    },
    {
      name: 'Simran Kapoor',
      phone: '+91 98765 43245',
      email: 'simran.k@christ.in'
    }
  ]
}
,
{
  id: 14,
  title: 'Battle of the Bands',
  category: 'Music',
  date: '1st Feb, 2024',
  time: '5:00 PM',
  venue: 'Main Auditorium',
  description: 'A Western music competition where bands perform their original compositions or covers to compete for the title.',
  rules: [
    'Each band must consist of 5-10 members.',
    'Each performance is allowed 10 minutes, including setup and clearance time.',
    'No backing tracks, samples, or pre-recorded sequences allowed.',
    'A standard 5-piece drum kit will be provided by the event organizers.',
    'Growling is not permitted.',
    'At least one vocalist is required, with a maximum of three vocalists per band.',
    'If performing original compositions, a copy of the lyrics must be submitted during registration.'
  ],
  prizePool: 'Individual prizes for Best Original Composition, Best Vocalist, Best Guitarist, Best Keyboardist, Best Drummer, and Best Band.',
  registrationFee: '₹600 per band',
  coordinators: [
    {
      name: 'James Carter',
      phone: '+91 98765 43246',
      email: 'james.c@christ.in'
    },
    {
      name: 'Priya Nair',
      phone: '+91 98765 43247',
      email: 'priya.n@christ.in'
    }
  ]
}
,
{
  id: 15,
  title: 'Acapella',
  category: 'Music',
  date: '2nd Feb, 2024',
  time: '6:00 PM',
  venue: 'Music Hall',
  description: 'A group music competition where participants perform without any instrumental accompaniment, showcasing their vocal harmony and creativity.',
  rules: [
    'Each team must consist of 5-10 members, including a beatboxer (optional).',
    'Performances should be entirely vocal, no instruments or backup tracks allowed.',
    'Each team will have a performance time limit of 10 minutes, including setup and clearance.',
    'No growling or pre-recorded music/sound samples allowed.',
    'At least one vocalist must be present in the performance.',
    'The team must perform their own arrangement of the songs.',
    'Teams must submit the lyrics in English (if in any other language, a literal translation is required).'
  ],
  prizePool: 'Individual prizes for Best Vocalist, Best Arrangement, Best Beatboxer, and Best Overall Performance.',
  registrationFee: '₹600 per team',
  coordinators: [
    {
      name: 'Liam Patel',
      phone: '+91 98765 43248',
      email: 'liam.p@christ.in'
    },
    {
      name: 'Ananya Verma',
      phone: '+91 98765 43249',
      email: 'ananya.v@christ.in'
    }
  ]
}
,
{
  id: 16,
  title: 'Indian Group',
  category: 'Music',
  date: '3rd Feb, 2024',
  time: '4:00 PM',
  venue: 'Main Stage',
  description: 'A group performance event where participants perform Indian songs, showcasing their vocal and instrumental talent in various Indian languages.',
  rules: [
    'Each team must consist of 5-10 members.',
    'The performance must be in an Indian language (song or composition).',
    'At least one Indian melodic or percussion instrument must be included in the performance.',
    'Each team will have 10 minutes for their performance, including setup and clearance time.',
    'A copy of the lyrics must be submitted at registration. If the lyrics are in an Indian language, a literal English translation is required.',
    'No growling or pre-recorded music/sound samples are allowed.',
    'The lyrics will be checked for vulgarity or profanity, and any inappropriate content will lead to disqualification.'
  ],
  prizePool: 'Individual prizes for Best Vocalist, Best Arrangement, and Best Performance.',
  registrationFee: '₹600 per team',
  coordinators: [
    {
      name: 'Ravi Kumar',
      phone: '+91 98765 43250',
      email: 'ravi.k@christ.in'
    },
    {
      name: 'Asha Singh',
      phone: '+91 98765 43251',
      email: 'asha.s@christ.in'
    }
  ]
}
,
{
  id: 17,
  title: 'Indian Folk and Film Singing (Solos)',
  category: 'Music (Solos-Only)',
  date: '4th Feb, 2024',
  time: '5:00 PM',
  venue: 'Music Hall',
  description: 'A solo singing competition where participants perform Indian folk or film songs, showcasing their vocal skills and creativity.',
  rules: [
    'Each participant must perform solo, with a maximum of one accompanist.',
    'Only Indian folk or film songs are allowed.',
    'Accompanists can use only an acoustic guitar or Indian percussion instruments (e.g., Tabla, Mridangam).',
    'The performance time limit is 4 minutes, with an additional 1 minute for setup and clearance.',
    'No pre-recorded backing tracks or sequenced beats are allowed.',
    'Participants must adhere to the time limit; exceeding it will result in disqualification.',
    'Lyrics must be free from vulgarity or profanity.'
  ],
  prizePool: 'Certificates and trophies for winners, with a special award for Best Vocalist.',
  registrationFee: '₹200 per participant',
  coordinators: [
    {
      name: 'Suman Kumar',
      phone: '+91 98765 43252',
      email: 'suman.k@christ.in'
    },
    {
      name: 'Isha Patel',
      phone: '+91 98765 43253',
      email: 'isha.p@christ.in'
    }
  ]
}
,
{
  id: 18,
  title: 'Western Singing (Solos)',
  category: 'Music (Solos-Only)',
  date: '5th Feb, 2024',
  time: '6:00 PM',
  venue: 'Music Hall',
  description: 'A solo singing competition where participants perform Western songs, showcasing their vocal range, expression, and musicality.',
  rules: [
    'Each participant must perform solo, with a maximum of one accompanist.',
    'Only Western songs (English or other Western languages) are allowed.',
    'Accompanists can use only acoustic guitar or Western percussion instruments (e.g., Djembe, Cajon).',
    'The performance time limit is 4 minutes, with an additional 1 minute for setup and clearance.',
    'No pre-recorded backing tracks or sequenced beats are allowed.',
    'Participants must adhere to the time limit; exceeding it will result in disqualification.',
    'Lyrics must be free from vulgarity or profanity.'
  ],
  prizePool: 'Certificates and trophies for winners, with a special award for Best Vocalist.',
  registrationFee: '₹200 per participant',
  coordinators: [
    {
      name: 'John Richards',
      phone: '+91 98765 43254',
      email: 'john.r@christ.in'
    },
    {
      name: 'Elena Thompson',
      phone: '+91 98765 43255',
      email: 'elena.t@christ.in'
    }
  ]
}
,
{
  id: 19,
  title: 'Non-Theme Group Dance',
  category: 'Dance',
  date: '6th Feb, 2024',
  time: '5:00 PM',
  venue: 'Dance Arena',
  description: 'A group dance competition where teams perform without a specific theme or concept, showcasing their creative choreography.',
  rules: [
    'Teams must consist of 7-14 members.',
    'The performance time limit is 5+1 minutes (including setup and clearance time).',
    'Fusion of songs is not allowed.',
    'Vulgarity or obscenity will lead to disqualification.',
    'The judge’s decision is final and binding.'
  ],
  prizePool: 'Certificates and trophies for winners.',
  registrationFee: '₹600 per team',
  coordinators: [
    {
      name: 'Priya Patel',
      phone: '+91 98765 43256',
      email: 'priya.p@christ.in'
    },
    {
      name: 'Ravi Sharma',
      phone: '+91 98765 43257',
      email: 'ravi.s@christ.in'
    }
  ]
}
,
{
  id: 20,
  title: 'Theme Group Dance',
  category: 'Dance',
  date: '7th Feb, 2024',
  time: '6:00 PM',
  venue: 'Dance Arena',
  description: 'A group dance competition where teams perform with a specific theme, allowing song fusion to enhance creativity.',
  rules: [
    'Teams must consist of 7-14 members.',
    'The performance time limit is 7+2 minutes (including setup and clearance time).',
    'Fusion of songs is permitted.',
    'Vulgarity or obscenity will lead to disqualification.',
    'The judge’s decision is final and binding.'
  ],
  prizePool: 'Certificates and trophies for winners.',
  registrationFee: '₹600 per team',
  coordinators: [
    {
      name: 'Shalini Verma',
      phone: '+91 98765 43258',
      email: 'shalini.v@christ.in'
    },
    {
      name: 'Nikhil Yadav',
      phone: '+91 98765 43259',
      email: 'nikhil.y@christ.in'
    }
  ]
}
,
{
  id: 21,
  title: 'Classical Group Dance',
  category: 'Dance',
  date: '8th Feb, 2024',
  time: '5:30 PM',
  venue: 'Cultural Hall',
  description: 'A group dance competition featuring authentic classical dance performances, where the focus is on the traditional forms of Indian dance.',
  rules: [
    'Teams must consist of 7-14 members.',
    'The performance time limit is 7+1 minutes (including setup and clearance time).',
    'No fusion of songs is permitted.',
    'Authentic classical music must be used.',
    'Appropriate costumes based on the dance form must be worn.',
    'The use of live music is prohibited.',
    'Vulgarity or obscenity will lead to disqualification.',
    'The judge’s decision is final and binding.'
  ],
  prizePool: 'Certificates and trophies for winners.',
  registrationFee: '₹600 per team',
  coordinators: [
    {
      name: 'Sangeeta Roy',
      phone: '+91 98765 43260',
      email: 'sangeeta.r@christ.in'
    },
    {
      name: 'Rajesh Kumar',
      phone: '+91 98765 43261',
      email: 'rajesh.k@christ.in'
    }
  ]
}
,
{
  id: 22,
  title: 'Non-Theme Solo Dance',
  category: 'Dance',
  date: '9th Feb, 2024',
  time: '3:00 PM',
  venue: 'Dance Arena',
  description: 'A solo dance competition where participants perform without any given theme, showcasing their dance skills.',
  rules: [
    'The performance time limit is 2+1 minutes.',
    'Only Indian folk or film songs will be permitted.',
    'The participant must follow the time limit strictly.',
    'Vulgarity or obscenity will lead to disqualification.',
    'The judge’s decision is final and binding.'
  ],
  prizePool: 'Certificates and trophies for winners.',
  registrationFee: '₹200 per participant',
  coordinators: [
    {
      name: 'Ananya Das',
      phone: '+91 98765 43262',
      email: 'ananya.d@christ.in'
    },
    {
      name: 'Vikram Singh',
      phone: '+91 98765 43263',
      email: 'vikram.s@christ.in'
    }
  ]
}
,
{
  id: 23,
  title: 'Classical Solo Dance',
  category: 'Dance',
  date: '10th Feb, 2024',
  time: '11:00 AM',
  venue: 'Cultural Stage',
  description: 'A solo dance competition featuring classical dance performances, focusing on traditional Indian art forms.',
  rules: [
    'The performance time limit is 4 minutes.',
    'Authentic classical music must be used.',
    'Only classical dance forms (e.g., Bharatanatyam, Kathak, Odissi) are allowed.',
    'Fusion music or live music is prohibited.',
    'Vulgarity or obscenity will lead to disqualification.',
    'The judge’s decision is final and binding.'
  ],
  prizePool: 'Certificates and trophies for winners.',
  registrationFee: '₹200 per participant',
  coordinators: [
    {
      name: 'Priya Sharma',
      phone: '+91 98765 43264',
      email: 'priya.s@christ.in'
    },
    {
      name: 'Ravi Gupta',
      phone: '+91 98765 43265',
      email: 'ravi.g@christ.in'
    }
  ]
}
,
{
  id: 24,
  title: 'Non-Theme Duet Dance',
  category: 'Dance',
  date: '11th Feb, 2024',
  time: '2:00 PM',
  venue: 'Dance Arena',
  description: 'A duet dance competition where pairs of dancers perform without a given theme, showcasing their chemistry and choreography.',
  rules: [
    'The duet must consist of 2 dancers.',
    'The performance time limit is 2+1 minutes (including setup and clearance time).',
    'Only Indian folk or film songs are allowed.',
    'Vulgarity or obscenity will lead to disqualification.',
    'The judge’s decision is final and binding.'
  ],
  prizePool: 'Certificates and trophies for winners.',
  registrationFee: '₹400 per duo',
  coordinators: [
    {
      name: 'Neha Joshi',
      phone: '+91 98765 43266',
      email: 'neha.j@christ.in'
    },
    {
      name: 'Manish Sharma',
      phone: '+91 98765 43267',
      email: 'manish.s@christ.in'
    }
  ]
}
,
{
  id: 25,
  title: 'Valorant',
  category: 'E-Sports',
  date: '12th Feb, 2024',
  time: '9:00 AM',
  venue: 'Gaming Hub',
  description: 'A team-based first-person shooter game where players compete to complete objectives and eliminate the opposing team.',
  rules: [
    'Teams of 5 players, solo players will be grouped into teams.',
    'Players can bring their own systems or use the systems provided at the venue (up to 100 fps and 75hz monitors).',
    'High-speed internet will be provided.',
    'Cheating, hacks, or hardware modifications are strictly prohibited.',
    'Players must be on time for their matches, and detailed instructions will be provided prior to the event.'
  ],
  prizePool: '₹50,000 for the winning team.',
  registrationFee: '₹500 per team',
  coordinators: [
    {
      name: 'Sandeep Raj',
      phone: '+91 98765 43268',
      email: 'sandeep.r@christ.in'
    },
    {
      name: 'Tina Kumar',
      phone: '+91 98765 43269',
      email: 'tina.k@christ.in'
    }
  ]
}
,
{
  id: 26,
  title: 'Call of Duty Mobile',
  category: 'E-Sports',
  date: '13th Feb, 2024',
  time: '10:00 AM',
  venue: 'Gaming Zone',
  description: 'A mobile first-person shooter game where players compete in team-based modes to complete objectives and eliminate opponents.',
  rules: [
    'Players must bring their own mobile devices with the latest version of Call of Duty Mobile pre-installed.',
    'Headphones must be brought by the players.',
    'Teams of up to 5 players.',
    'No devices will be provided by the organizing committee.',
    'Players must play with their registered IDs; switching IDs during the match is not allowed.',
    'Any form of cheating or exploitation will lead to disqualification.'
  ],
  prizePool: '₹30,000 for the winning team.',
  registrationFee: '₹400 per team',
  coordinators: [
    {
      name: 'Rajiv Soni',
      phone: '+91 98765 43270',
      email: 'rajiv.s@christ.in'
    },
    {
      name: 'Maya Jain',
      phone: '+91 98765 43271',
      email: 'maya.j@christ.in'
    }
  ]
}
,
{
  id: 27,
  title: 'BGMI (Battlegrounds Mobile India)',
  category: 'E-Sports',
  date: '14th Feb, 2024',
  time: '9:00 AM',
  venue: 'Gaming Arena',
  description: 'A mobile battle royale game where teams compete to be the last ones standing in a shrinking map.',
  rules: [
    'Players must bring their own devices, headsets, and chargers.',
    'No external devices will be allowed.',
    'Players are required to play on their registered IDs and cannot switch IDs during the game.',
    'Cheating, hacks, or any form of unfair advantage is strictly prohibited.',
    'Players must reach the venue on time, and detailed instructions will be provided prior to the event.'
  ],
  prizePool: '₹40,000 for the winning team.',
  registrationFee: '₹500 per team',
  coordinators: [
    {
      name: 'Suresh Babu',
      phone: '+91 98765 43272',
      email: 'suresh.b@christ.in'
    },
    {
      name: 'Nisha Patel',
      phone: '+91 98765 43273',
      email: 'nisha.p@christ.in'
    }
  ]
}
,
{
  id: 28,
  title: 'FIFA',
  category: 'E-Sports',
  date: '15th Feb, 2024',
  time: '10:00 AM',
  venue: 'Esports Arena',
  description: 'A solo football simulation video game where players compete in timed matches to score goals and win the game.',
  rules: [
    'This is a solo event, no teams allowed.',
    'The system and controllers will be provided by the organizers.',
    'Each match will consist of two halves, 4 minutes each, except for the semi-finals and finals, which will have 6 minutes each half.',
    'Players must be present on time.',
    'Cheating or exploiting the game mechanics will result in disqualification.'
  ],
  prizePool: '₹20,000 for the winner.',
  registrationFee: '₹150 per participant',
  coordinators: [
    {
      name: 'Ravi Tiwari',
      phone: '+91 98765 43274',
      email: 'ravi.t@christ.in'
    },
    {
      name: 'Deepika Sharma',
      phone: '+91 98765 43275',
      email: 'deepika.s@christ.in'
    }
  ]
}
];

export const eventCategories = [
  {
    "name": "All Events",
    "description": "Explore all our exciting events and find the ones that match your interests."
},
{
    "name": "Literary",
    "description": "Showcase your artistic talents through creative writing, poetry, and more."
},
{
    "name": "Art",
    "description": "Unleash your creativity and test your artistic skills in various mediums."
},
{
    "name": "Music",
    "description": "Participate in vibrant music competitions and showcase your vocal or instrumental talent."
},
{
    "name": "Music (Solos-Only)",
    "description": "Take the stage solo and mesmerize the audience with your music performance."
},
{
    "name": "Dance",
    "description": "Move to the rhythm and express yourself through mesmerizing dance performances."
},
{
    "name": "E-Sports",
    "description": "Compete in thrilling online gaming tournaments and prove your skills."
}
];

export const REGISTRATION_FORMS = {
  cultural: 'https://docs.google.com/forms/d/e/1FAIpQLSfm9jsMpryscocTq6XYwu0kEJE4WsVx7HiP2vTzzmtR0hGmAA/viewform',
  theatre: 'https://docs.google.com/forms/d/e/1FAIpQLSebTsxp1-G3v-eOKu6xOC9AgbJlJSY6sSSKnVcNjLy2C4bUkw/viewform'
};