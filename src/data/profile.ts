import deckhandPhoto from '../assets/Deckhandphoto.jpeg'
import captainInTrainingPhoto from '../assets/CaptianinTraining.jpeg'
import sayvilleFerryEmpressPhoto from '../assets/SayvilleFerryServiceFireIslandEmpress.jpeg'
import coastlineFreightSeahorsePhoto from '../assets/CoastlinefreightFireIsalndSeahorse.jpeg'
import coastlineFreightHelmPhoto from '../assets/CoastlineFreightTomWeikathelmofFireIslandSehorse.jpg'
import callOfDoodyPhoto from '../assets/CallofDoodyPumpingoutBoat.jpg'
import cubesatReflowPhoto from '../assets/CubesatReflowSolderedOresatbaord.jpg'
import cubesatSmdPastePhoto from '../assets/CubesatPlacingSMDonSolderpasteonOresatBoard.png'
import cubesatGroupPhoto from '../assets/CubesatGroupphotoatShowcase.jpg'
import cubesatFramePhoto from '../assets/Cubesat3DprintedFrame.jpg'
import fpvAssemblingPhoto from '../assets/FPVDroneassemblingelectronicstoframe.jpg'
import fpvBetaflightPhoto from '../assets/FPVDroneInstallingbetaflightfirmware.jpg'
import aresCfdPhoto from '../assets/ARESUAVCFDModel.jpg'
import aresStructurePhoto from '../assets/ARESUAVBuiltStructure.jpg'
import aresExplodedViewPhoto from '../assets/ARESUAVexplodedviewofStructure.jpg'
import saeMovingPlanePhoto from '../assets/SAEAeroMovingPlaneCompetitionday.jpg'
import saeGroupPhoto from '../assets/SAEAeroGroupPicturecompetitionday.jpg'
import saeFullGroupPhoto from '../assets/SAEAeroFullGroupphotoAfterFlight.jpg'
import locIrisDryfitAssemblyPhoto from '../assets/LocIrisDryfitAssembly.jpg'
import locIrisFinFiberglassingPhoto from '../assets/LocIrisFinFiberglassing.jpeg'
import locIrisMotorMountAssemblyPhoto from '../assets/LocIrisMotorMountAssemblyPostEpoxy.jpeg'
import robotArmCADPhoto from '../assets/RobotArmCADModel.png'
import robotArmBuildPhoto from '../assets/RobotArm.jpeg'
import robotArmControlPhoto from '../assets/RobotArmDuetBoardwithRaspberryPi.jpg'
import portfolioCoverPhoto from '../assets/PortfolioWebsiteCoverpage.jpeg'
import portfolioBackendPhoto from '../assets/PortfolioWebsiteSampleBackendscreenshotwithcodex.jpeg'
import menziMuckOverviewDrawingPhoto from '../assets/MenziMuckoverviewDrawing.jpeg'
import menziMuckClawDrawingPhoto from '../assets/MenziMuckClawDrawing.jpeg'

export type ProjectCategory =
  | 'Defense'
  | 'UAS'
  | 'RF Design'
  | 'Mechatronics'
  | 'Manufacturing'
  | 'Computer Vision'
  | 'Software'
  | 'Mechanical Design'

export interface Person {
  name: string
  badge: string
  secondaryBadge: string
  summary: string
  citizenship: string
  location: string
}

export interface LinkItem {
  label: string
  href: string
  value: string
}

export interface SkillGroup {
  title: string
  icon: string
  items: string[]
}

export interface ExperienceItem {
  company: string
  companyUrl?: string
  image?: string
  imageAlt?: string
  role: string
  location: string
  type: string
  dates: string
  bullets: string[]
  gallery?: Array<{ src: string; alt: string }>
}

export interface ProjectItem {
  slug: string
  title: string
  role: string
  organization: string
  dates: string
  cardDates?: string
  description: string
  overview: string
  bullets: string[]
  fullDetails: string[]
  categories: ProjectCategory[]
  tags: string[]
  visual: string
  coverImage?: string
  coverAlt?: string
  coverPosition?: string
  coverFit?: 'cover' | 'contain'
  media?: Array<{ src: string; alt: string; caption: string; layout?: 'portrait' | 'landscape' }>
  mediaPlaceholders?: string[]
}

export interface EducationItem {
  school: string
  degree: string
  minor: string
  location: string
  dates: string
  activities: string[]
  highlights: string[]
}

export interface Credential {
  title: string
  issuer: string
  issued: string
  expires?: string
  credentialId?: string
}

export interface Award {
  title: string
  issuer: string
  date: string
}

export const person: Person = {
  name: 'Thomas Weik',
  badge: 'Mechanical Engineer',
  secondaryBadge: '',
  summary:
    'Mechanical engineering student focused on UAV systems, mechatronics, embedded hardware integration, and prototype development.',
  citizenship: 'US Citizen',
  location: 'Melbourne, Florida / Sayville, New York'
}

export const links: LinkItem[] = [
  {
    label: 'Email',
    href: 'mailto:tweik224@gmail.com',
    value: 'tweik224@gmail.com'
  },
  {
    label: 'Phone',
    href: 'tel:+16319015784',
    value: '(631) 901-5784'
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/thomas-weik/',
    value: 'www.linkedin/in/Thomas-weik'
  }
]

export const about = {
  short:
    'Mechanical Engineering student focused on UAV systems, mechatronics, embedded hardware integration, and CAD-driven prototyping. Graduating Spring 2027.',
  long: [
    'Mechanical engineering student at Florida Institute of Technology with a Nanotechnology minor, focused on applying coursework in mechanics, controls, and systems design to hands-on engineering projects.',
    'My work spans UAV integration, embedded hardware, CAD modeling, fabrication, and testing, with a strong interest in building reliable systems from concept through prototype.'
  ]
}

export const siteContent = {
  skillsDescription:
    'Tools and methods I use for design, integration, testing, and getting hardware working.',
  experienceDescription:
    'Operational roles that sharpen systems thinking, decision-making, and accountability.',
  projectsDescription:
    'Hands-on engineering projects focused on integration, testing, and getting systems to work.',
  educationDescription: 'Academic foundation, certifications, and awards.',
  contactDescription:
    'Interested in collaborating or discussing opportunities? Feel free to reach out through any of these channels.',
  contactAvailability:
    'Available for internships, research collaborations, and engineering project opportunities.',
  focusAreas: ['UAS Systems Integration', 'Embedded Systems', 'Mechanical Design', 'Mechatronics']
}

export const skills: SkillGroup[] = [
  {
    title: 'CAD & Design',
    icon: 'cd',
    items: ['SolidWorks', 'Fusion 360', 'Creo Parametric', 'Onshape', 'Jama', 'GD&T', 'FEA', 'Lightburn']
  },
  {
    title: 'Programming & Controls',
    icon: 'pc',
    items: [
      'MATLAB',
      'Simulink',
      'Arduino IDE',
      'Betaflight',
      'iNav',
      'LabVIEW',
      'Basic Python',
      'Bash'
    ]
  },
  {
    title: 'Hardware & Tools',
    icon: 'ht',
    items: [
      '3D printing slicers',
      'Laser cutting',
      'Soldering',
      'Reflow soldering',
      'Water jet',
      'Power tools',
      'Forklift',
      'Multimeter'
    ]
  },
  {
    title: 'Productivity & PM',
    icon: 'pm',
    items: [
      'Microsoft Excel',
      'Microsoft Word',
      'Microsoft Teams',
      'PowerPoint',
      'Google Workspace',
      'JIRA',
      'GitHub',
      'Six Sigma White Belt'
    ]
  },
  {
    title: 'Collaboration',
    icon: 'pm',
    items: ['Leadership', 'Communication', 'Public speaking', 'Team coordination', 'Project management']
  }
]

export const experience: ExperienceItem[] = [
  {
    company: 'Sayville Ferry Service Inc',
    companyUrl: 'https://sayvilleferry.com',
    role: 'Senior Deckhand',
    image: sayvilleFerryEmpressPhoto,
    imageAlt: 'Sayville Ferry Service vessel Fire Island Empress',
    location: 'United States',
    type: 'On-site, Seasonal',
    dates: 'Aug 2024 - Present',
    bullets: [
      'Logged 30+ helm hours running full trips with docking, undocking, radio calls, and tight channel maneuvering.',
      'Completed instrument-only bay runs using radar and GPS to validate navigation and situational awareness.',
      'Operated and verified bilge, fire, and lifesaving systems and kept procedures current.',
      'Trained new deckhands and acted as second-in-command on passenger ferries.'
    ]
  },
  {
    company: 'Sayville Ferry Service Inc',
    companyUrl: 'https://sayvilleferry.com',
    role: 'Deckhand',
    image: deckhandPhoto,
    imageAlt: 'Deckhand role photo',
    location: 'Sayville, NY',
    type: 'On-site, Seasonal',
    dates: 'May 2021 - Aug 2024',
    bullets: [
      'Managed freight logistics and coordinated safe docking at each port.',
      'Applied TSA maritime security procedures during day-to-day operations.',
      'Maintained detailed trip logs for accurate operational tracking.'
    ]
  },
  {
    company: 'Coastline Freight (Fire Island Seahorse)',
    companyUrl: 'https://coastlinefreight.com',
    role: 'Captain in Training',
    image: captainInTrainingPhoto,
    imageAlt: 'Captain in training role photo',
    location: 'Sayville, NY',
    type: 'On-site, Seasonal',
    dates: 'May 2025 - Aug 2025',
    gallery: [
      {
        src: coastlineFreightSeahorsePhoto,
        alt: 'Fire Island Seahorse freight vessel'
      }
    ],
    bullets: [
      'Trained at the helm of a 70-ft freight vessel, practicing navigation, vessel handling, and real-time decision-making.',
      'Managed trim strategy and weight distribution to improve stability and unloading efficiency.',
      'Executed precision docking in tight, high-traffic harbors under variable weather and tides.',
      'Handled lines across docking configurations and supported routine maintenance and safety checks.',
      'Monitored thrust/torque effects and vessel stability during operations.'
    ]
  },
  {
    company: 'Call of Doody',
    companyUrl: 'https://callofdoody.us',
    role: 'Captain',
    image: callOfDoodyPhoto,
    imageAlt: 'Call of Doody pump-out boat',
    location: 'Lindenhurst, NY',
    type: 'On-site, Seasonal',
    dates: 'Jun 2024 - Aug 2025',
    bullets: [
      'Operated a pump-out boat and coordinated customer interactions and scheduling.',
      'Improved close-quarters docking across varied marina conditions.',
      'Practiced wind-handling techniques using flat-bottom vessels.'
    ]
  },
  {
    company: 'Coastline Freight',
    companyUrl: 'https://coastlinefreight.com',
    role: 'Lot Maintenance',
    image: coastlineFreightHelmPhoto,
    imageAlt: 'At the helm of the Fire Island Seahorse freight vessel',
    location: 'Sayville, NY',
    type: 'On-site, Seasonal',
    dates: 'Jun 2019 - May 2025',
    bullets: ['Handled self-paced lot upkeep and facility support tasks.']
  },
]

export const leadership: ExperienceItem[] = [
  {
    company: 'Tau Kappa Epsilon - Omicron Nu Chapter',
    companyUrl: 'https://tkeon.org',
    role: 'Prytanis (President)',
    location: 'Melbourne, FL',
    type: 'On-site',
    dates: 'Nov 2024 - Nov 2025',
    bullets: [
      'Led a 44+ member organization while coordinating 7 executives and 8 committees.',
      'Raised $12,000+ total including $11,000 for St. Jude, the highest chapter fundraising ever and second-highest in Florida Tech Greek Life history.',
      'Earned 6 National Excellence Awards and 1 Honorable Mention.',
      'Planned and hosted the chapter 50th Anniversary event with 80+ alumni attendees.',
      'Managed a $30,000 budget and coordinated financial planning with the executive board.',
      'Worked with the treasurer to more than double savings and implement anti-debt measures.',
      'Reallocated budget to subsidize over 50% member attendance at the Atlanta Regional Leadership Conference.',
      'Implemented a proposal system for executive and committee ideas and collaborated with alumni to structure meetings for real-world readiness.',
      'Met bi-weekly with Scholarship Chairman and Greek Life director to monitor and improve academic outcomes.'
    ]
  },
  {
    company: 'Tau Kappa Epsilon - Omicron Nu Chapter',
    companyUrl: 'https://tkeon.org',
    role: 'Public Relations Chairman',
    location: 'Melbourne, FL',
    type: 'On-site',
    dates: 'May 2024 - Nov 2024',
    bullets: [
      'Designed flyers, managed social media content, and planned/edited recruitment and philanthropy videos.',
      'Led digital branding that earned the Florida Tech Greek Life Best Online Presence award during my term.',
      'Primary tools: Adobe Photoshop and Adobe Premiere Pro.'
    ]
  },
  {
    company: 'Tau Kappa Epsilon - Omicron Nu Chapter',
    companyUrl: 'https://tkeon.org',
    role: 'Pylortes (Sergeant at Arms / Risk Manager)',
    location: 'Melbourne, FL',
    type: 'On-site',
    dates: 'Nov 2023 - Nov 2024',
    bullets: [
      'Served as Chief Risk Officer and developed chapter alcohol-awareness programming.',
      'Created a 30-page emergency response plan and organized AED/CPR certification.',
      'Procured breathalyzer and Narcan resources as preventative safety measures.',
      'Built a new organization system for the chapter room.'
    ]
  },
  {
    company: 'Tau Kappa Epsilon - Omicron Nu Chapter',
    companyUrl: 'https://tkeon.org',
    role: 'Member',
    location: 'Melbourne, FL',
    type: 'On-site',
    dates: 'Oct 2023 - Nov 2023',
    bullets: ['Participated in chapter operations and development programming.']
  },
  {
    company: 'Lindenhurst Knights of Columbus #794 - OLPH',
    companyUrl: 'https://kofc794.org',
    role: 'Member',
    location: 'United States',
    type: 'Membership',
    dates: 'Nov 2025 - Present',
    bullets: ['Active member.']
  },
  {
    company: 'Gamma Sigma Alpha Honor Society',
    companyUrl: 'https://gammasigmaalpha.org',
    role: 'Member',
    location: 'United States',
    type: 'Membership',
    dates: 'Present',
    bullets: ['Active member.']
  }
]

export const projects: ProjectItem[] = [
  {
    slug: 'sae-aero-design',
    title: 'SAE Aero Design',
    role: 'Structures Subteam Member',
    organization: 'SAE Aero Design',
    dates: 'Competition Season',
    description:
      'Structural design support and hands-on fabrication for a competition aircraft, with a focus on compliance and build quality.',
    overview:
      'On the Structures Subteam, I helped drive CAD decisions and built hardware that stayed compliant, manufacturable, and test-ready.',
    bullets: [
      'Collaborated on structural CAD design to satisfy competition requirements and keep geometry manufacturable.',
      'Led hands-on assembly and fabrication, including servo testing, harness routing, carbon-fiber rod cutting, and CO2 laser-cut tail components.',
      'Validated design changes against competition rules to keep late-stage modifications compliant.'
    ],
    fullDetails: [
      'Partnered with the Structures Subteam to refine CAD layouts that balanced structural integrity with competition constraints.',
      'Assembled airframe components, tested servos, and built wiring harnesses to support reliable system integration.',
      'Produced tail-structure parts using a CO2 laser cutter and cut carbon-fiber rods to spec for final assembly.',
      'Reviewed alteration proposals and ensured updated modifications aligned with competition requirements.'
    ],
    categories: ['UAS', 'Mechanical Design', 'Manufacturing'],
    tags: ['Laser Cutting', 'Mechanical Assembly', 'Teamwork', 'CAD', 'Wiring Harnesses', 'Servo Testing'],
    visual: 'from-[#edf3ff] to-[#dfeaff]',
    coverImage: saeFullGroupPhoto,
    coverAlt: 'Full SAE Aero Design group photo after flight',
    media: [
      {
        src: saeMovingPlanePhoto,
        alt: 'SAE Aero Design aircraft in motion on competition day',
        caption: 'SAE Aero Design aircraft in motion on competition day'
      },
      {
        src: saeGroupPhoto,
        alt: 'SAE Aero Design group photo on competition day',
        caption: 'SAE Aero Design team on competition day'
      },
      {
        src: saeFullGroupPhoto,
        alt: 'Full SAE Aero Design group photo after flight',
        caption: 'Full team photo after flight'
      }
    ]
  },
  {
    slug: 'ares-muav-endurance-uav',
    title: 'ARES MUAV Endurance UAV',
    role: 'Build & Integration Team Member',
    organization: 'Florida Institute of Technology',
    dates: 'Aug 2025 - Present',
    description:
      'Build and avionics integration support for an endurance UAV in manual and autonomous modes.',
    overview:
      'Focused on servo/mechanical integration and avionics bring-up to make the platform test-ready.',
    bullets: [
      'Assembled servo systems, routed linkages, and wired servos to the flight controller and RC receiver.',
      'Supported bring-up testing by verifying servo function, continuity, and channel mapping during initial avionics tests.'
    ],
    fullDetails: [
      'Installed and tuned control-surface servo linkages for repeatable response in manual and autonomous modes.',
      'Verified wiring continuity and channel mapping to support stable command behavior during early system tests.',
      'Assisted integration reviews to ensure avionics and mechanical hardware were test-ready before field validation.'
    ],
    categories: ['UAS', 'Mechatronics'],
    tags: ['Avionics Integration', 'RC Systems', 'Servos', 'Flight Controller'],
    visual: 'from-[#eef2ff] to-[#dde9ff]',
    coverImage: aresExplodedViewPhoto,
    coverAlt: 'ARES MUAV exploded view of structure',
    coverPosition: 'object-[center_40%]',
    media: [
      {
        src: aresCfdPhoto,
        alt: 'ARES MUAV CFD model',
        caption: 'CFD model of the ARES MUAV airframe'
      },
      {
        src: aresStructurePhoto,
        alt: 'ARES MUAV built structure',
        caption: 'Built ARES MUAV structure'
      },
      {
        src: aresExplodedViewPhoto,
        alt: 'ARES MUAV exploded view of structure',
        caption: 'Exploded view of the ARES MUAV structure'
      }
    ]
  },
  {
    slug: 'fpv-drone-build',
    title: '5" FPV Drone Build',
    role: 'Builder & Flight Systems Integrator',
    organization: 'Personal Project',
    dates: 'Personal Project',
    description:
      'Custom 5-inch FPV quadcopter build with component selection, full assembly, firmware setup, and radio integration.',
    overview:
      'I built a complete 5-inch FPV platform, selected the hardware stack, wired the system, and brought it online through firmware configuration and radio binding.',
    bullets: [
      'Selected and integrated key components including a SpeedyBee Master 5 V2 frame, F722 FC stack with 80A 4-in-1 ESC, iFlight Xing2 2207 motors, and Caddx Ratel 2 camera.',
      'Flashed firmware, completed setup and checks, and bound a Radiomaster Pocket controller.'
    ],
    fullDetails: [
      'Built the airframe and powertrain from the ground up with component matching focused on reliability and performance.',
      'Configured flight electronics and validated control-link setup after flashing FC firmware and completing bench checks.',
      'Prepared the platform for future autonomy work using iNav waypoint navigation for GPS-based missions.'
    ],
    categories: ['UAS', 'Mechatronics', 'Software'],
    tags: ['FPV Systems', 'Betaflight', 'iNav', 'Flight Controller', 'ELRS', 'RC Integration'],
    visual: 'from-[#e8f2ff] to-[#d8e9ff]',
    coverImage: fpvAssemblingPhoto,
    coverAlt: 'Assembling FPV drone electronics onto the frame',
    coverPosition: 'object-[center_80%]',
    media: [
      {
        src: fpvAssemblingPhoto,
        alt: 'Assembling FPV drone electronics onto the frame',
        caption: 'Assembling the electronics stack onto the frame'
      },
      {
        src: fpvBetaflightPhoto,
        alt: 'Installing Betaflight firmware on the FPV drone',
        caption: 'Installing Betaflight firmware and configuring the build'
      }
    ]
  },
  {
    slug: 'cubesat-development',
    title: 'CubeSat Development',
    role: 'Embedded Systems Lead',
    organization: 'Florida Institute of Technology',
    dates: 'Aug 2025 - Present',
    description:
      'Flight-computer assembly and embedded bring-up for a CubeSat, from PCB build through processor configuration.',
    overview:
      'I built and validated the CubeSat flight computer, handling PCB assembly, processor bring-up, and early embedded setup for mission readiness.',
    bullets: [
      'Hand-assembled and reflow-soldered the flight computer PCB with microscope inspection and fine-pitch alignment.',
      'Integrated the Octavo OSD3358-SM-RED SiP, configured bootloaders, and validated initial AM335x bring-up using open-source tools.'
    ],
    fullDetails: [
      'Performed detailed PCB assembly with thermal paste control, flux management, and microscope verification for solder joint reliability.',
      'Integrated the OSD3358-SM-RED SiP and configured boot pathways for stable early-stage startup.',
      'Validated AM335x bring-up using open-source software workflows and structured debugging checkpoints.'
    ],
    categories: ['Software', 'Mechatronics', 'Defense'],
    tags: ['Embedded Linux', 'PCB Assembly', 'Reflow Soldering', 'AM335x', 'GitHub'],
    visual: 'from-[#f4f7ff] to-sky-100',
    coverImage: cubesatReflowPhoto,
    coverAlt: 'Reflow-soldered CubeSat flight computer PCB',
    media: [
      {
        src: cubesatReflowPhoto,
        alt: 'Reflow-soldered CubeSat flight computer PCB',
        caption: 'Reflow-soldered CubeSat flight computer PCB'
      },
      {
        src: cubesatSmdPastePhoto,
        alt: 'Placing SMD components onto solder paste on the Oresat board',
        caption: 'Placing SMD components onto solder paste on the Oresat board'
      },
      {
        src: cubesatFramePhoto,
        alt: '3D-printed CubeSat frame',
        caption: '3D-printed CubeSat frame'
      },
      {
        src: cubesatGroupPhoto,
        alt: 'CubeSat team photo at showcase',
        caption: 'CubeSat team photo at the project showcase'
      }
    ]
  },
  {
    slug: 'loc-iris-model-rocket',
    title: 'Loc Iris Model Rocket',
    role: 'Builder',
    organization: 'Personal Project',
    dates: 'Mar 2026 - Present',
    cardDates: 'In Progress',
    description:
      'Built a Loc Iris model rocket to pursue NAR Level 1 high powered rocketry certification.',
    overview:
      'I assembled the rocket and reinforced the fins with fiberglass in preparation for upcoming certification launches.',
    bullets: [
      'Assembled the Loc Iris model rocket for NAR Level 1 certification preparation.',
      'Fiberglassed the fins to improve reinforcement and durability.',
      'Prepared the rocket for launch operations planned over the coming months.'
    ],
    fullDetails: [
      'Built the rocket as a certification-focused project for NAR Level 1 high powered rocketry.',
      'Applied fiberglass reinforcement to the fins to improve strength and flight durability.',
      'Project remains in progress as of March 2026, with launch and certification attempts planned in the coming months.'
    ],
    categories: ['Mechanical Design', 'Manufacturing'],
    tags: ['Model Rocketry', 'Fiberglassing', 'Assembly', 'Certification'],
    visual: 'from-[#fff2e6] to-[#ffe0c6]',
    coverImage: locIrisFinFiberglassingPhoto,
    coverAlt: 'Fiberglassing the fins on the Loc Iris model rocket',
    media: [
      {
        src: locIrisFinFiberglassingPhoto,
        alt: 'Fiberglassing the fins on the Loc Iris model rocket',
        caption: 'Fiberglass reinforcement on the fins',
        layout: 'landscape'
      },
      {
        src: locIrisDryfitAssemblyPhoto,
        alt: 'Dry fit assembly of the Loc Iris rocket',
        caption: 'Dry fit assembly of the rocket',
        layout: 'portrait'
      },
      {
        src: locIrisMotorMountAssemblyPhoto,
        alt: 'Motor mount assembly of the Loc Iris rocket post epoxy',
        caption: 'Motor mount assembly after epoxy',
        layout: 'landscape'
      }
    ]
  },
  {
    slug: 'robotic-arm-vision-pick',
    title: 'Robotic Arm Vision Pick-and-Place',
    role: 'Co-Designer & Systems Integrator',
    organization: 'Personal Project',
    dates: 'Mar 2026 - Present',
    cardDates: 'In Progress',
    description:
      'Designed and built a 3D-printed robotic arm with vision guidance for object pickup and placement.',
    overview:
      'In a two-person team, I co-designed the arm in Onshape, animated the assembly motion, and integrated the vision and control stack for AprilTag-guided pickup.',
    bullets: [
      'Modeled the arm in Onshape, animated joint motion in the assembly, and 3D-printed all components for final assembly.',
      'Integrated a wrist-mounted camera and AprilTag recognition on a Raspberry Pi to detect targets.',
      'Wired the robot and developed software to coordinate the Raspberry Pi vision pipeline with a Duet3D motion controller.'
    ],
    fullDetails: [
      'Co-designed the full arm in Onshape, validating joint ranges and motion sequencing through assembly animations.',
      'Built and assembled 3D-printed components, mounting a wrist camera for close-range target detection.',
      'Implemented AprilTag-based detection on a Raspberry Pi and linked it with Duet3D motion control to drive pick-and-place moves.',
      'Project remains in progress as of March 2026 while I continue refining integration and automation behavior.'
    ],
    categories: ['Mechatronics', 'Computer Vision', 'Mechanical Design', 'Software'],
    tags: ['Onshape', '3D Printing', 'Raspberry Pi', 'AprilTag', 'Duet3D', 'Motion Control'],
    visual: 'from-[#eef7ff] to-[#d9ecff]',
    coverImage: robotArmCADPhoto,
    coverAlt: 'Robot arm CAD model',
    coverFit: 'contain',
    media: [
      {
        src: robotArmCADPhoto,
        alt: 'Robot arm CAD model',
        caption: 'CAD model of the robotic arm',
        layout: 'landscape'
      },
      {
        src: robotArmBuildPhoto,
        alt: 'Robot arm assembled build',
        caption: 'In progress assembly',
        layout: 'landscape'
      },
      {
        src: robotArmControlPhoto,
        alt: 'Duet board with Raspberry Pi for the robot arm',
        caption: 'Raspberry Pi connected to Duet board In housing',
        layout: 'landscape'
      }
    ]
  },
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    role: 'Designer & Developer',
    organization: 'Personal Project',
    dates: '2026',
    description:
      'Built and deployed a personal engineering portfolio website with reusable React components and structured content.',
    overview:
      'I designed and implemented this portfolio as a single-page React app focused on clear technical communication.',
    bullets: [
      'Developed the site using React, Vite, and Tailwind CSS with reusable components for easy updates.',
      'Used Codex to iterate quickly and deployed the site through GitHub.'
    ],
    fullDetails: [
      'Structured all profile content in centralized data models to simplify updates across sections.',
      'Implemented responsive layouts, filtering, and interaction patterns for desktop and mobile.',
      'Deployed the production build with GitHub-based hosting for a shareable, version-controlled portfolio.'
    ],
    categories: ['Software'],
    tags: ['React', 'Vite', 'Tailwind CSS', 'Visual Studio Code', 'Codex', 'GitHub'],
    visual: 'from-[#eaf4ff] to-[#dcecff]',
    coverImage: portfolioCoverPhoto,
    coverAlt: 'Portfolio website cover page',
    media: [
      {
        src: portfolioCoverPhoto,
        alt: 'Portfolio website cover page',
        caption: 'Portfolio homepage cover'
      },
      {
        src: portfolioBackendPhoto,
        alt: 'Portfolio website backend screenshot with Codex',
        caption: 'Building the portfolio with Codex support'
      }
    ]
  },
  {
    slug: 'menzi-muck-m220x-reverse-engineering',
    title: 'Menzi Muck M220x Reverse Engineering',
    role: 'CAD Modeling & Documentation',
    organization: 'Academic Project',
    dates: 'Course Project',
    description:
      'Reverse-engineered a scale CAD model of the Menzi Muck M220x using technical documentation and subsystem references.',
    overview:
      'Focused on deriving accurate geometry, motion behavior, and subsystem relationships to build a complete scaled CAD model.',
    bullets: [
      'Generated subsystem models and assembly drawings directly from technical documentation.',
      'Documented mechanical interfaces and motion constraints to preserve realistic articulation and fit-up behavior.',
      'Built a scaled CAD model based on available technical documentation.'
    ],
    fullDetails: [
      'Translated specifications into structured subsystem models with consistent dimensional assumptions.',
      'Created assembly-level drawings to communicate component relationships and support design review.',
      'Mapped key interfaces and kinematic constraints so model movement aligned with documented behavior.'
    ],
    categories: ['Mechanical Design', 'Manufacturing'],
    tags: ['Reverse Engineering', 'CAD', 'Assembly Drawings', 'Mechanical Interfaces', 'Motion Constraints'],
    visual: 'from-[#edf5ff] to-[#dbe9ff]',
    coverImage: menziMuckOverviewDrawingPhoto,
    coverAlt: 'Menzi Muck overview drawing',
    coverFit: 'contain',
    media: [
      {
        src: menziMuckOverviewDrawingPhoto,
        alt: 'Menzi Muck overview drawing',
        caption: 'Overview drawing of the Menzi Muck M220x',
        layout: 'landscape'
      },
      {
        src: menziMuckClawDrawingPhoto,
        alt: 'Menzi Muck claw drawing',
        caption: 'Claw subsystem drawing for the Menzi Muck M220x',
        layout: 'landscape'
      }
    ]
  }
]

export const education: EducationItem[] = [
  {
    school: 'Florida Institute of Technology',
    degree: 'B.S. Mechanical Engineering',
    minor: 'Nanotechnology',
    location: 'Melbourne, Florida',
    dates: 'Aug 2023 - May 2027 (Expected)',
    activities: [
      'Tau Kappa Epsilon',
      'AIAA',
      'ARES',
      'Motorsports Club',
      'Council of Presidents',
      "Dean's List",
      'Gamma Sigma Alpha Honor Society'
    ],
    highlights: [
      "Dean's List Scholar",
      'Member: AIAA, ARES, Gamma Sigma Alpha Honor Society'
    ]
  }
]

export const coursework: string[] = [
  'Control Systems',
  'Design Machine Elements',
  'Design Methodologies',
  'Dynamics',
  'Electric and Electronic Circuits',
  'Engineering Thermodynamics I',
  'Engineering Thermodynamics II',
  'Fluid Mechanics',
  'Fluid Mechanics Laboratory',
  'Heat Transfer',
  'Mechanics of Materials',
  'Modeling Dynamic Systems',
  'Materials Science and Engineering',
  'Nano-Science/Technology Laboratory',
  'Intro to Partial Differential Equations and Applications',
  'Intro to Software Development with C++',
  'Solids Modeling',
  'Scientific and Technical Communication'
]

export const certifications: Credential[] = [
  {
    title: 'Lean Six Sigma White Belt',
    issuer: 'Council for Six Sigma Certification',
    issued: 'Oct 2025'
  },
  {
    title: 'Commercial Assistance Towing Endorsement',
    issuer: 'U.S. Coast Guard',
    issued: 'Jul 2025'
  },
  {
    title: 'Master of 100 GRT Inland License',
    issuer: 'U.S. Coast Guard',
    issued: 'Jul 2025',
    expires: 'Jul 2030'
  },
  {
    title: 'TWIC',
    issuer: 'TSA',
    issued: 'Feb 2023'
  },
  {
    title: 'Forklift Certification',
    issuer: 'Liftoff Certifications',
    issued: 'Jan 2025',
    expires: 'Jan 2028',
    credentialId: '450111247'
  },
  {
    title: 'Stop the Bleed',
    issuer: 'American College of Surgeons',
    issued: 'Feb 2024',
    expires: 'Feb 2026'
  },
  {
    title: 'CPR & AED',
    issuer: 'HSI',
    issued: 'Feb 2024',
    expires: 'Feb 2026',
    credentialId: '5584174'
  }
]

export const awards: Award[] = [
  {
    title: 'Fraternity Man of the Year',
    issuer: 'Florida Tech Office of Greek Life',
    date: 'Dec 2025'
  },
  {
    title: '2025 Gamma Sigma Alpha Academic Scholarship',
    issuer: 'Gamma Sigma Alpha',
    date: 'Aug 2025'
  },
  {
    title: 'TKE Omicron Nu Chapter Scholarship',
    issuer: 'Tau Kappa Epsilon',
    date: 'Apr 2025'
  },
  {
    title: 'Fraternal Order of Police Scholarship',
    issuer: 'Fraternal Order of Police',
    date: 'Jun 2023'
  },
  {
    title: 'VFW Post #433 Scholarship',
    issuer: 'VFW Post #433',
    date: 'Jun 2023'
  },
  {
    title: 'Eagle Scout',
    issuer: 'Boy Scouts of America',
    date: 'Dec 2022'
  }
]

export const projectCategories: Array<'All' | ProjectCategory> = [
  'All',
  'UAS',
  'RF Design',
  'Mechatronics',
  'Manufacturing',
  'Computer Vision',
  'Software',
  'Mechanical Design'
]
