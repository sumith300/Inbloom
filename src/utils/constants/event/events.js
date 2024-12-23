export const events = [
    {
      id: 1,
      title: 'Jam',
      category: 'Literary',
      date: '24th Jan, 2025',
      time: '2:00 PM',
      venue: 'Literary Hall',
      teamSize:'3 per team',
      image:'assets/images/events-images/jam.jpg',
      description: 'A one-minute challenge where participants speak on a given topic without hesitation, repetition, or deviation.',
      rules: [
        'Participants must speak for one minute without hesitation, repetition, or deviation.',
        'Points awarded for quick thinking, eloquence, presence of mind, and adherence to the topic.',
        'Topics will be provided by the JAM Master on the spot.',
        'Standard JAM rules apply.',
        'Multiple entries are allowed per college.'
      ],
      prizePool: 'Certificates and trophies for winners.',
      registrationFee: '₹150 per participant',
      coordinators: [
        {
          name: 'Himadri Mittal',
          phone: '9352338914',
          email: 'alex.m@christ.in'
        }
      ]
    }
    ,
    {
      id: 2,
      title: 'Debate',
      category: 'Literary',
      date: '24-25th Jan, 2025',
      time: '2:00 PM',
      teamSize:'3 per team',
      venue: 'Debate Hall',
      image:'/assets/images/events-images/debate.avif',
      description: 'Participants engage in a structured, non-parliamentary style debate, defending or opposing the motion.',
      rules: [
        'Participants are allotted 4 minutes for speaking and 1 minute for rebuttal.',
        'Topics for the prelims round will be announced a day in advance.',
        'Participants must be prepared to argue both for and against the motion.',
        'Judges may provide rules specific to the final round.',
        'Judges’ decisions are final.'
      ],
      prizePool: 'Certificates and trophies for winners.',
      registrationFee: '₹200 per participant',
      coordinators: [
        {
          name: 'Shravani',
          phone: '+91 98765 43218',
          email: 'rachel.b@christ.in'
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
      teamSize:'3',
      venue: 'Drama Hall',
      image:'assets/images/events-images/dumb-char.webp',
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
      registrationFee: '₹300 per team',
      coordinators: [
        {
          name: 'Pranaw',
          phone: '7904330285',
          email: 'sarah.j@christ.in'
        }
      ]
    }
    ,
    {
      id: 4,
      title: 'Pot-Pourri',
      category: 'Literary',
      date: '24-25th Jan, 2024',
      time: '4:00 PM',
      teamSize:'3',
      venue: 'Activity Hall',
      image:'assets/images/events-images/quiz.png',
      description: 'A multi-round event featuring a variety of literary activities such as quizzes, spell bee, crosswords, extempore, and more.',
      rules: [
        'Teams of 3 members are required (on-spot team-making is allowed).',
        'The event will have multiple rounds focusing on different activities.',
        'Points may be cumulative at the end of all rounds or based on elimination, at judges’ discretion.',
        'Tasks include quizzes, spell bee, crosswords, heads up, extempore, turncoat, and more.',
        'Points awarded based on accuracy, creativity, speed, and adherence to task guidelines.'
      ],
      prizePool: 'Certificates and trophies for winners.',
      registrationFee: '₹450 per team',
      coordinators: [
        {
          name: 'Sanjana ',
          phone: '6364176003',
          email: 'jessica.t@christ.in'
        },
        {
          name: 'Anusmita',
          phone: '7980968190',
          email: 'arjun.m@christ.in'
        }
      ]
    },
    {
      id: 5,
      title: 'B-Plan Pitching',
      category: 'Literary',
      date: '24th Jan, 2025',
      time: '1:30 PM',
      teamSize:'3',
      venue: 'Conference Room',
      image:'assets/images/events-images/b-plan-pitching.jpg',
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
      registrationFee: '₹600 per team',
      coordinators: [
        {
          name: 'Pallavi Mondal',
          phone: '6296264669',
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
      teamSize:'3',
      venue: 'Writing Lounge',
      image:'assets/images/events-images/creative-writing.png',
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
          name: 'Amy ',
          phone: '8590153571',
          email: 'sophia.t@christ.in'
        }
      ]
    }
  ,{
    id: 7,
    title: 'Air Crash/Shipwreck',
    category: 'Literary',
    date: '25th Jan, 2025',
    time: '3:00 PM',
    teamSize:'3',
    venue: 'Debate Hall',
    image:'assets/images/events-images/air-crash.jpg',
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
    registrationFee: '₹150 per participant',
    coordinators: [
      {
        name: 'Sanjana',
        phone: '6364176003',
        email: 'rohit.n@christ.in'
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
    teamSize:'3',
    venue: 'Art Studio',
    image:'assets/images/events-images/pencil-skecth.jpg',
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
    registrationFee: '₹250 per participant',
    coordinators: [
      {
        name: 'Likhita M',
        phone: '9141041245',
        email: '2 BSCDM'
      },
      {
        name: 'Yadu Nand D B ',
        phone: '8129999475',
        email: '4 BAHP'
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
    teamSize:'3',
    venue: 'Media Lab',
    image:'assets/images/events-images/reel-making.webp',
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
    registrationFee: '₹200 per participant',
    coordinators: [
      {
        name: 'Jeeva Maria Jose',
        phone: '9495770822',
        email: '2 BCOM F&I B'
      },
      {
        name: 'Rishit Bhargava',
        phone: '8382909103',
        email: '4 BCOM AFA'
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
    teamSize:'3',
    venue: 'Art Gallery',
    image:'assets/images/events-images/painting.jpg',
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
    registrationFee: '₹300 per participant',
    coordinators: [
      {
        name: 'Urfee Ayub',
        phone: '8018802780',
        email: '2BBA A'
      },
      {
        name: 'Surya Manoj',
        phone: '6362057395',
        email: '2 BCOM F&A C'
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
    teamSize:'3',
    venue: 'Craft Workshop',
    image:'assets/images/events-images/pot-art.jpg',
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
    registrationFee: '₹250 per participant',
    coordinators: [
      {
        name: 'Sofiya alphy shibu',
        phone: '7907134373',
        email: '2 BCOM A'
      },
      {
        name: 'Anisha M',
        phone: '9606374951',
        email: '4 BCOM AFA'
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
    teamSize:'3',
    venue: 'Campus Grounds',
    image:'assets/images/events-images/photography.webp',
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
    registrationFee: '₹200 per participant',
    coordinators: [
      {
        name: 'Ramisha R',
        phone: '7012669229',
        email: '2 BSC BTB'
      },
      {
        name: 'Priyadarshini G',
        phone: '7899401036',
        email: '4 BAPECO '
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
    teamSize:'3',
    venue: 'Design Lab',
    image:'assets/images/events-images/logo-design.png',
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
    registrationFee: '₹350 per participant',
    coordinators: [
      {
        name: 'Anna Christopher J I ',
        phone: '9880672527',
        email: '2 BSC CM '
      },
      {
        name: 'Adwita Verma',
        phone: '7889641406',
        email: '4BSC BTF'
      }
    ]
  }
  ,
  {
    id: 14,
    title: 'Battle of the Bands',
    category: 'Music',
    date: '25th Jan, 2025',
    time: '5:00 PM',
    teamSize:'3',
    venue: 'Main Auditorium',
    image:'assets/images/events-images/battle-band.png',
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
    registrationFee: '₹500 per band',
    coordinators: [
      {
        name: 'Jyoti Shree S',
        phone: '8431469839',
        email: '6 BCOM A'
      }
    ]
  }
  ,
  {
    id: 15,
    title: 'Acapella',
    category: 'Music',
    date: '23rd Jan, 2025',
    time: '6:00 PM',
    teamSize:'3',
    venue: 'Music Hall',
    image:'assets/images/events-images/beatbox.jpg',
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
    registrationFee: '₹400 per team',
    coordinators: [
      {
        name: 'Sikha',
        phone: '7205010710',
        email: '2 BAJE'
      }
    ]
  }
  ,
  {
    id: 16,
    title: 'Indian Group',
    category: 'Music',
    date: '25th Jan, 2025',
    time: '4:00 PM',
    teamSize:'3',
    venue: 'Main Stage',
    image:'assets/images/events-images/indian-group.jpg',
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
    registrationFee: '₹500 per team',
    coordinators: [
      {
        name: 'Tharun Reddy A',
        phone: '8618830264',
        email: '2 BCOM FA D'
      }
    ]
  }
  ,
  {
    id: 17,
    title: 'Indian Folk and Film Singing (Solos)',
    category: 'Music (Solos-Only)',
    date: '24th Jan, 2025',
    time: '5:00 PM',
    teamSize:'3',
    venue: 'Music Hall',
    image:'assets/images/events-images/indian-solo-singing.avif',
    
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
        name: 'Ishaani',
        phone: '9880868638',
        email: '2 BACP'
      }
    ]
  }
  ,
  {
    id: 18,
    title: 'Western Singing (Solos)',
    category: 'Music (Solos-Only)',
    date: '24th Jan, 2025',
    time: '6:00 PM',
    teamSize:'3',
    venue: 'Music Hall',
    image:'assets/images/events-images/indian-folk-solo.webp',
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
        name: 'Dipti',
        phone: '8073128622',
        email: '2 BACP'
      }
    ]
  }
  ,
  {
    id: 19,
    title: 'Non-Theme Group Dance',
    category: 'Dance',
    date: '25th Jan, 2025',
    time: '5:00 PM',
    teamSize:'3',
    venue: 'Dance Arena',
    image:'assets/images/events-images/non-theme-group-dance.png',
    description: 'A group dance competition where teams perform without a specific theme or concept, showcasing their creative choreography.',
    rules: [
      'Teams must consist of 7-14 members.',
      'The performance time limit is 5+1 minutes (including setup and clearance time).',
      'Fusion of songs is not allowed.',
      'Vulgarity or obscenity will lead to disqualification.',
      'The judge’s decision is final and binding.'
    ],
    prizePool: 'Certificates and trophies for winners.',
    registrationFee: '₹500 per team',
    coordinators: [
      {
        name: 'Kashik',
        phone: '8791600273',
        email: '4 BAJE'
      }
    ]
  }
  ,
  {
    id: 20,
    title: 'Theme Group Dance',
    category: 'Dance',
    date: '24th Jan, 2025',
    time: '6:00 PM',
    teamSize:'3',
    venue: 'Dance Arena',
    image:'assets/images/events-images/theme-group-dance.avif',
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
        name: 'Shranya',
        phone: '9818444772',
        email: '2BACP'
      }
    ]
  }
  ,
  {
    id: 21,
    title: 'Classical Group Dance',
    category: 'Dance',
    date: '24th Jan, 2025',
    time: '5:30 PM',
    teamSize:'3',
    venue: 'Cultural Hall',
    image:'assets/images/events-images/classical-group-dance.jpg',
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
    registrationFee: '₹700 per team',
    coordinators: [
      {
        name: 'Shwetal',
        phone: '7011686844',
        email: '4 BSC BTC'
      }
    ]
  }
  ,
  {
    id: 22,
    title: 'Non-Theme Solo Dance',
    category: 'Dance',
    date: '24th Jan, 2025',
    time: '3:00 PM',
    teamSize:'3',
    venue: 'Dance Arena',
    image:'assets/images/events-images/non-theme-solo.jpg',
    description: 'A solo dance competition where participants perform without any given theme, showcasing their dance skills.',
    rules: [
      'The performance time limit is 2+1 minutes.',
      'Only Indian folk or film songs will be permitted.',
      'The participant must follow the time limit strictly.',
      'Vulgarity or obscenity will lead to disqualification.',
      'The judge’s decision is final and binding.'
    ],
    prizePool: 'Certificates and trophies for winners.',
    registrationFee: '₹250 per participant',
    coordinators: [
      {
        name: 'Diva Soni',
        phone: '7726845401',
        email: '2 BSC BTB'
      }
    ]
  }
  ,
  {
    id: 23,
    title: 'Classical Solo Dance',
    category: 'Dance',
    date: '25th Jan, 2025',
    time: '11:00 AM',
    teamSize:'3',
    venue: 'Cultural Stage',
    image:'assets/images/events-images/classical-solo-dance.jpeg',
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
    registrationFee: '₹300 per participant',
    coordinators: [
      {
        name: 'Shivangi S',
        phone: '9148892461',
        email: '2 BCOM AFA'
      }
    ]
  }
  ,
  {
    id: 24,
    title: 'Non-Theme Duet Dance',
    category: 'Dance',
    date: '25th Jan, 2025',
    time: '2:00 PM',
    teamSize:'3',
    venue: 'Dance Arena',
    image:'assets/images/events-images/non-theme-duet.webp',
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
        name: 'Simarpreet Kaur',
        phone: '7973631090',
        email: '2 BCOM AFA'
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
    teamSize:'3',
    venue: 'Gaming Hub',
    image:'assets/images/events-images/valorant.avif',
    description: 'A team-based first-person shooter game where players compete to complete objectives and eliminate the opposing team.',
    rules: [
      'Teams of 5 players, solo players will be grouped into teams.',
      'Players can bring their own systems or use the systems provided at the venue (up to 100 fps and 75hz monitors).',
      'High-speed internet will be provided.',
      'Cheating, hacks, or hardware modifications are strictly prohibited.',
      'Players must be on time for their matches, and detailed instructions will be provided prior to the event.'
    ],
    prizePool: '₹50,000 for the winning team.',
    registrationFee: '₹300 per player',
    coordinators: [
      {
        name: 'Parthiv Ghosh',
        phone: '9874626105',
        email: 'parthiv.ghosh@bcz.christuniversity.in '
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
    teamSize:'3',
    venue: 'Gaming Zone',
    image:'assets/images/events-images/cod.jpg',
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
    registrationFee: '₹200 per player',
    coordinators: [
      {
        name: 'Parthiv Ghosh',
        phone: '9874626105',
        email: 'parthiv.ghosh@bcz.christuniversity.in '
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
    teamSize:'3',
    venue: 'Gaming Arena',
    image:'assets/images/events-images/bgmi.webp',
    description: 'A mobile battle royale game where teams compete to be the last ones standing in a shrinking map.',
    rules: [
      'Players must bring their own devices, headsets, and chargers.',
      'No external devices will be allowed.',
      'Players are required to play on their registered IDs and cannot switch IDs during the game.',
      'Cheating, hacks, or any form of unfair advantage is strictly prohibited.',
      'Players must reach the venue on time, and detailed instructions will be provided prior to the event.'
    ],
    prizePool: '₹40,000 for the winning team.',
    registrationFee: '₹250 per player',
    coordinators: [
      {
        name: 'Parthiv Ghosh',
        phone: '9874626105',
        email: 'parthiv.ghosh@bcz.christuniversity.in '
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
    teamSize:'3',
    venue: 'Esports Arena',
    image:'assets/images/events-images/fifa.jpg',
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
        name: 'Parthiv Ghosh',
        phone: '9874626105',
        email: 'parthiv.ghosh@bcz.christuniversity.in '
      }
      
    ]
  }
  ];