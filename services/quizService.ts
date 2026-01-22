import { Question, UserHistory } from '../types';

const DATA_KEY = 'lecture_master_data';
const HISTORY_KEY = 'lecture_master_history';

/**
 * INITIAL_DATA
 * 
 * This array contains the templates for your 12 lessons.
 * You can manually fill these blocks with your actual question data.
 * 
 * NOTE: If you have already run the app, you must click "Reset Data" 
 * on the dashboard to load these new changes, as the app prioritizes 
 * the data saved in your browser's LocalStorage.
 */
const INITIAL_DATA: Question[] = [
  // --- LECTURE 1 ---
  {
    "id": "lec01q01",
    "lesson": "Lecture 1",
    "question": "According to Tarek M. Khalil, technology is best defined as an interdisciplinary field that integrates which of the following three core areas?",
    "options": [
      "Science, Engineering, and Management",
      "Marketing, Finance, and Operations",
      "Innovation, Production, and Logistics",
      "Research, Development, and Sales"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Slide 29 explicitly states that MOT is an interdisciplinary field that integrates science, engineering, and management knowledge and practice."
  },
  {
    "id": "lec01q02",
    "lesson": "Lecture 1",
    "question": "Which component of technology is specifically described as 'the reasons for using the technology in a particular way'?",
    "options": [
      "Hardware",
      "Software",
      "Brainware",
      "Firmware"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Slide 19 defines Brainware as 'The reasons for using the technology in a particular way,' distinct from Hardware (physical product) and Software (knowledge of how to use it)."
  },
  {
    "id": "lec01q03",
    "lesson": "Lecture 1",
    "question": "A senior engineer is teaching a junior apprentice how to diagnose a complex engine noise based on years of experience, a skill that cannot be easily written down in a manual. This best represents which classification of technology?",
    "options": [
      "Codified Technology",
      "Tacit Technology",
      "Emerging Technology",
      "Automated Technology"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Slide 25 describes Tacit Technology as non-articulated knowledge based on experiences, transmitted by demonstration/observation, and difficult to transfer."
  },
  {
    "id": "lec01q04",
    "lesson": "Lecture 1",
    "question": "In the context of the 'Salient Features of Technology', the term 'Amoral' implies that:",
    "options": [
      "Technology is inherently evil and destructive to society.",
      "Technology creates its own ethical code independent of humans.",
      "Technology is neither good nor bad; its value depends on usage.",
      "Technology strictly follows the moral guidelines of its creators."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Slide 20 lists 'Amoral' as a feature. In this context, it means technology itself is a tool without inherent morality; its application determines whether the outcome is good or bad."
  },
  {
    "id": "lec01q05",
    "lesson": "Lecture 1",
    "question": "Which of the following scenarios best characterizes 'Emerging Technology' as defined in the lecture?",
    "options": [
      "A standard word processing software used globally for decades.",
      "A manufacturing process that has recently replaced manual drafting.",
      "A prototype drug that is not yet commercialized but may cure cancer.",
      "A typewriter that is still used in remote government offices."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Slide 23 defines Emerging Technology as not yet fully commercialized, currently in limited use, but expected to evolve significantly and potentially create new industries."
  },
  {
    "id": "lec01q06",
    "lesson": "Lecture 1",
    "question": "What is the primary distinction between Science and Technology presented in the course material?",
    "options": [
      "Science creates wealth, while technology studies natural phenomena.",
      "Science is the study of 'why' things happen; technology is the use of knowledge.",
      "Science affects only academics, while technology affects the general public.",
      "Science relies on hardware, while technology relies strictly on software."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Slide 17 states: 'Science is the study of why natural things happen... Technology is the use of knowledge to turn resources into goods and services.'"
  },
  {
    "id": "lec01q07",
    "lesson": "Lecture 1",
    "question": "According to the National Research Council Report (1987), Management of Technology is concerned with planning, developing, and implementing technological capabilities to accomplish:",
    "options": [
      "The theoretical advancement of scientific research papers.",
      "The operational and strategic objectives of an organization.",
      "The complete elimination of human labor in manufacturing.",
      "The standardization of all global engineering practices."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Slide 31 quotes the NRC report: '...accomplish the operational and strategic objectives of an organization.'"
  },
  {
    "id": "lec01q08",
    "lesson": "Lecture 1",
    "question": "A company invests heavily in engineering drawings, blueprints, and tolerance specifications to ensure their technology can be easily transferred between factories. This involves converting knowledge into:",
    "options": [
      "Tacit Technology",
      "Codified Technology",
      "Implicit Technology",
      "Intuitive Technology"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Slide 26 defines Codified Technology as expressed in a coded form (like drawings, dimensions) allowing it to be preserved and effectively transferred."
  },
  {
    "id": "lec01q09",
    "lesson": "Lecture 1",
    "question": "Which of the following best describes 'Paper Entrepreneurs' as discussed in the entrepreneurial perspective of MoT?",
    "options": [
      "Innovators who create tangible commercial products from raw materials.",
      "Professionals trained in law or finance who manipulate systems for profit.",
      "Scientists who publish academic papers regarding theoretical physics.",
      "Engineers who draft the initial blueprints for new machinery."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Slide 35 defines Paper Entrepreneurs as those trained in law, finance, accountancy, etc., who manipulate systems in novel ways (e.g., tax shelters, holding companies)."
  },
  {
    "id": "lec01q10",
    "lesson": "Lecture 1",
    "question": "When considering the 'Drivers of MOT', which of the following is NOT listed as a primary driver in the course material?",
    "options": [
      "Change in Asset Valuation",
      "Change in Political Leadership",
      "Change in Scope",
      "Change in Competition"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Slide 33 lists: Change in Technology, Scope, Competition, Asset Valuation, Focus for National Competitiveness, and Emphasis on Knowledge Management. Political Leadership is not listed."
  },
  {
    "id": "lec01q11",
    "lesson": "Lecture 1",
    "question": "How does 'New Technology' differ from 'Emerging Technology' based on the definitions provided?",
    "options": [
      "New technology has an explicit impact on production; emerging is not fully commercialized.",
      "New technology is always software-based; emerging technology is always hardware-based.",
      "New technology is obsolete within a year; emerging technology lasts for decades.",
      "New technology relies on tacit knowledge; emerging technology relies on codified knowledge."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Slide 22 defines New Technology as having an 'explicit impact on the way a company produces products.' Slide 23 defines Emerging as 'not yet fully commercialized.'"
  },
  {
    "id": "lec01q12",
    "lesson": "Lecture 1",
    "question": "In the context of technology components, 'Software' is defined as:",
    "options": [
      "Any physical product or machine used in production.",
      "The knowledge of how to use hardware to carry out tasks.",
      "The strategic reason for adopting a specific tool.",
      "The electronic circuit boards inside a computer."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Slide 19 defines Software as 'The knowledge of how to use the hardware in order to carry out the required tasks.'"
  },
  {
    "id": "lec01q13",
    "lesson": "Lecture 1",
    "question": "Which characteristic of technology suggests that technology acts as a catalyst, creating demand for even more technology?",
    "options": [
      "Amoral",
      "Self-reinforcing",
      "Codified",
      "Tacit"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Slide 20 lists 'Self-reinforcing' as a salient feature. This implies that technology builds upon itself and creates needs for further technological solutions."
  },
  {
    "id": "lec01q14",
    "lesson": "Lecture 1",
    "question": "According to the lecture, the management process involved in MOT consists of which four key activities?",
    "options": [
      "Designing, Building, Testing, and Selling",
      "Hiring, Training, Retaining, and Firing",
      "Planning, Organizing, Leading, and Controlling",
      "Researching, Developing, Patenting, and Licensing"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Slide 28 lists the process of Management as: Planning, Organizing, Coordination & Leading, and Controlling."
  },
  {
    "id": "lec01q15",
    "lesson": "Lecture 1",
    "question": "Low Technology is characterized in the lecture material as technologies that:",
    "options": [
      "Are currently in the experimental laboratory phase.",
      "Have permeated large segments of human society.",
      "Require advanced engineering degrees to operate.",
      "Are exclusively used for space exploration."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Slide 24 describes Low Technology as 'Technologies that have permeated large segments of human society' (e.g., typewriters, simple tools)."
  },
  {
    "id": "lec01q16",
    "lesson": "Lecture 1",
    "question": "Which of the following statements regarding the transferability of 'Tacit Technology' is correct?",
    "options": [
      "It is easily transferred through emails and manuals.",
      "It requires close contact and interaction to transfer.",
      "It creates uniformity in how knowledge is presented.",
      "It is the fastest form of technology to replicate."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Slide 25 states that Tacit Technology 'Occurs by close contact and interaction' and the transferring process is 'harder, less precise and more time-consuming.'"
  },
  {
    "id": "lec01q17",
    "lesson": "Lecture 1",
    "question": "The lecture suggests that the application of technology, rather than just its development, is crucial for:",
    "options": [
      "Writing successful academic research grants.",
      "Success in the competitive global economy.",
      "Reducing the complexity of manufacturing.",
      "Eliminating the need for human management."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Slide 27 states: 'Application of technology, not just its development, is a key to success in the competitive global economy.'"
  },
  {
    "id": "lec01q18",
    "lesson": "Lecture 1",
    "question": "When responding to technology challenges, which framework of organizational elements is visually represented in the lecture?",
    "options": [
      "SWOT Analysis (Strengths, Weaknesses, Opportunities, Threats)",
      "The 4 Ps of Marketing (Product, Price, Place, Promotion)",
      "The 7-S Framework (Strategy, Structure, Systems, etc.)",
      "Porter's Five Forces (Suppliers, Buyers, Substitutes, etc.)"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Slide 34 displays icons labeled Shared Values, Strategy, Structure, Systems, Skills, Staff, and Style, which corresponds to the McKinsey 7-S framework."
  },
  {
    "id": "lec01q19",
    "lesson": "Lecture 1",
    "question": "The lecture distinguishes between 'Techne' and 'Loges'. In this etymology, 'Loges' refers to:",
    "options": [
      "The art or craft needed to make something.",
      "The physical tools used in production.",
      "The discussion or knowledge of something.",
      "The financial capital required for innovation."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Slide 15 breaks down Technology into Techne (The skills or craft) and Loges (Discussion or knowledge of something)."
  },
  {
    "id": "lec01q20",
    "lesson": "Lecture 1",
    "question": "Which of the following is identified as a 'Product Entrepreneur' activity as opposed to a 'Paper Entrepreneur' activity?",
    "options": [
      "Establishing tax shelters to protect assets.",
      "Creating joint ventures to manipulate systems.",
      "Investing in commodities and going public.",
      "Applying technology to bring commercial benefits."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Slide 35 contrasts Paper Entrepreneurs (manipulate systems, tax shelters) with the implication that Product Entrepreneurs focus on the application that brings commercial benefits."
  },
  {
    "id": "lec01q21",
    "lesson": "Lecture 1",
    "question": "A multinational corporation is deciding 'When to enter and abandon a technology.' This decision is a direct application of:",
    "options": [
      "Basic Human Resources Management.",
      "The Management of Technology (MOT).",
      "Fundamental Accounting Principles.",
      "Standard Legal Compliance."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Slide 30 lists 'When to enter and abandon technology?' as one of the specific questions the MOT field helps firms answer."
  },
  {
    "id": "lec01q22",
    "lesson": "Lecture 1",
    "question": "Why is 'Globalization' cited as a critical factor in the introduction to Management of Technology?",
    "options": [
      "It limits competition to within national boundaries.",
      "It allows companies to ignore international standards.",
      "It expands the scope of competition beyond national boundaries.",
      "It reduces the need for scientific and technological bases."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Slide 9 states: 'With the increasing impact of globalization... the scope for competition is no longer limited by national boundaries.'"
  },
  {
    "id": "lec01q23",
    "lesson": "Lecture 1",
    "question": "In the visualization of technology classification, which type is placed between High and Low technologies?",
    "options": [
      "Medium Technology",
      "Emerging Technology",
      "Tacit Technology",
      "Codified Technology"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Slide 24 visualizes 'Medium' technology as the category falling between High and Low technologies."
  },
  {
    "id": "lec01q24",
    "lesson": "Lecture 1",
    "question": "The lecture asserts that technology is a tool primarily used to gain:",
    "options": [
      "Political immunity.",
      "Competitive advantage.",
      "Unlimited resources.",
      "Social stagnation."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Slide 18 states: 'Technology is the tools to gain competitive advantage.'"
  },
  {
    "id": "lec01q25",
    "lesson": "Lecture 1",
    "question": "Which feature of technology explains why a small technological change can have 'Widespread Effects' across different sectors?",
    "options": [
      "Its codified nature restricts it to one industry.",
      "Its interconnectedness causes ripple effects.",
      "Its tacit nature prevents it from spreading.",
      "Its high cost limits it to wealthy nations."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Slide 20 lists 'Widespread Effects' as a salient feature. Though the detailed explanation isn't textually on the slide, the concept implies the ripple/interconnected nature of tech (Contextual understanding of the list item)."
  },
  {
    "id": "lec01q26",
    "lesson": "Lecture 1",
    "question": "What is the relationship between technology and standard of living as described in the lecture?",
    "options": [
      "Technology is linked to improvements in standards of living.",
      "Technology has no measurable impact on standards of living.",
      "Technology generally lowers the standard of living for workers.",
      "Technology is unrelated to the economic prosperity of countries."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Slide 27 explicitly states: 'Technology – linked to improvements in standards of living.'"
  },
  {
    "id": "lec01q27",
    "lesson": "Lecture 1",
    "question": "If a technology is described as 'having the potential of triggering large changes in institutions and in society itself,' it is most likely:",
    "options": [
      "Low Technology",
      "Codified Technology",
      "Emerging Technology",
      "Obsolete Technology"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Slide 23 states that Emerging Tech has the 'potential of triggering large changes in institutions and in society itself.'"
  },
  {
    "id": "lec01q28",
    "lesson": "Lecture 1",
    "question": "The diagram illustrating the 'Role of MOT' highlights that MOT helps answer how to integrate technology with:",
    "options": [
      "Business Strategy",
      "Political Campaigns",
      "Religious Doctrines",
      "Historical Archives"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Slide 30 lists the question: 'How to integrated technology with business strategy?' (Note: Original text has grammatical error 'integrated', preserved concept)."
  },
  {
    "id": "lec01q29",
    "lesson": "Lecture 1",
    "question": "Which of the following statements best describes the 'Nature of MOT' regarding risk?",
    "options": [
      "MOT is a risk-free process due to scientific planning.",
      "MOT involves risk as an inherent part of the system.",
      "MOT eliminates all financial risks for the organization.",
      "MOT transfers all risks to the consumer."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Slide 32 lists 'It Involves Risk' as a key characteristic of the Nature of MOT."
  },
  {
    "id": "lec01q30",
    "lesson": "Lecture 1",
    "question": "From an entrepreneurial perspective, the lecture states that technology itself does not produce commercial results; instead, commercial benefits are derived from:",
    "options": [
      "Its application.",
      "Its complexity.",
      "Its patent status.",
      "Its theoretical basis."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Slide 35 states: 'Technology itself does not produce commercial results. It is its application that brings commercial benefits.'"

  },
  
  // --- LECTURE 2 ---
  {

"id": "lec02q01",
"lesson": "Lecture 2",
"question": "In the context of the modern high-tech business environment, which of the following best describes the primary shift in conventional boundaries caused by new technologies?",
"options": [
"Technology has slowed down operational speed to ensure higher quality control.",
"Technology has pushed boundaries faster with high risks but opportunities for big gains.",
"Technology has eliminated all risks, allowing businesses to operate with certainty.",
"Technology has reduced the need for specialized skills in managing business operations."
],
"correctAnswerIndex": 1,
"explanation": "Slide 6 states that today, technologies have pushed conventional boundaries ever faster, with high risks, and great opportunities for big gains."
},
{
"id": "lec02q02",
"lesson": "Lecture 2",
"question": "A software development firm is facing immense pressure. Despite having fewer employees than last year, they are expected to deliver updates more frequently and with higher quality. This scenario best illustrates which pressure mentioned in the lecture?",
"options": [
"The need to eliminate all organizational conflicts immediately.",
"The pressure to do more things faster, better, and with fewer resources.",
"The requirement to adopt open-source software for all projects.",
"The mandate to switch entirely to virtual organizational structures."
],
"correctAnswerIndex": 1,
"explanation": "Slide 6 notes that every organization is under pressure to do more things faster, better, and with fewer resources."
},
{
"id": "lec02q03",
"lesson": "Lecture 2",
"question": "Which of the following sets correctly identifies the 'Resulting Demand' placed on high-tech businesses due to current market characteristics?",
"options": [
"High market responsiveness, fast development, low cost, and high creativity.",
"Low market volatility, slow development, high cost, and low efficiency.",
"Fixed market schedules, resource abundance, moderate cost, and low risk.",
"Internal focus, sequential development, variable cost, and administrative rigidity."
],
"correctAnswerIndex": 0,
"explanation": "Slide 9 lists the resulting demands as: High Market responsiveness, Fast development, Low cost, and High level of creativity/innovation/efficiency."
},
{
"id": "lec02q04",
"lesson": "Lecture 2",
"question": "A bio-tech startup enters a partnership with a large pharmaceutical company. They struggle because their agile, risk-taking culture clashes with the rigid, process-heavy culture of the partner. This aligns with which specific challenge of technology-based businesses?",
"options": [
"Managing virtual support systems and e-business tools.",
"Dealing with different organizational cultures in joint ventures.",
"Overcoming the technical limitations of the Internet infrastructure.",
"Handling the physical distribution of agricultural drone technology."
],
"correctAnswerIndex": 1,
"explanation": "Slide 7 lists 'Joint venture, alliances, and partnerships; need to dealing with different organizational culture and values' as a key challenge."
},
{
"id": "lec02q05",
"lesson": "Lecture 2",
"question": "Regarding the definition of Management of Technology (MOT), how does the lecture characterize its scope in relation to other disciplines?",
"options": [
"It is strictly limited to engineering design and manufacturing operations.",
"It is a subset of natural sciences focused solely on research and development.",
"It is broad, overlapping with science, engineering, and management disciplines.",
"It is identical to general business administration without technical components."
],
"correctAnswerIndex": 2,
"explanation": "Slide 10 states that the scope of MOT is very broad and diverse, and its boundaries overlap with the major disciplines of science, engineering, and management."
},
{
"id": "lec02q06",
"lesson": "Lecture 2",
"question": "Which of the following scenarios best exemplifies 'Technology Management' rather than 'Management of Technology' based on the lecture's distinction?",
"options": [
"A director integrates engineering and science to shape the company's long-term strategic goals.",
"A manager plans and coordinates resources to achieve specific enterprise objectives parallel to general management.",
"A team leader creates new value by combining unique technologies with organizational assets.",
"A CEO links scientific capabilities with market needs to redefine the company's business model."
],
"correctAnswerIndex": 1,
"explanation": "Slide 11 defines Technology Management as running parallel to the general field of management, including planning, organizing, coordinating, and integrating resources."
},
{
"id": "lec02q07",
"lesson": "Lecture 2",
"question": "According to the lecture, what is the primary focus of Management of Technology (MOT) that differentiates it from general Technology Management?",
"options": [
"It focuses solely on the maintenance of existing IT infrastructure.",
"It is the art and science of creating value by using technology with organizational resources.",
"It is strictly concerned with the administrative scheduling of engineering tasks.",
"It focuses exclusively on reducing the operational costs of manufacturing."
],
"correctAnswerIndex": 1,
"explanation": "Slide 11 defines MOT as the art and the science of creating value by using technology together with the resources of an organization."
},
{
"id": "lec02q08",
"lesson": "Lecture 2",
"question": "In the context of the Specific Dimensions of MOT, what role does 'Administrative Science' play?",
"options": [
"It focuses on the physical laws governing natural science experiments.",
"It is used for planning, decision-making, development, and implementation.",
"It handles the technical engineering specifications of product design.",
"It manages the external distribution networks for field services."
],
"correctAnswerIndex": 1,
"explanation": "Slide 13 states: 'MOT involves administrative science in the planning, decision making, development and implementation of technology.'"
},
{
"id": "lec02q09",
"lesson": "Lecture 2",
"question": "Based on the 'Dimensions of MoT' triangle diagram presented in the lecture, which three elements form the outer sides of the triangle?",
"options": [
"Strategy, Culture, and Environment.",
"People, Process, and Tools/Techniques.",
"Science, Engineering, and Management.",
"Planning, Leading, and Controlling."
],
"correctAnswerIndex": 1,
"explanation": "Slide 15 shows the triangle with 'People', 'Process', and 'Tools and Techniques' labeled along the three sides/base."
},
{
"id": "lec02q10",
"lesson": "Lecture 2",
"question": "A company invests heavily in MOT to enable 'Economics of scale and scope'. Which category of justification does this fall under?",
"options": [
"Why MOT is needed today.",
"The evolution of the Internet.",
"The definition of Administrative Science.",
"The characteristics of virtual organizations."
],
"correctAnswerIndex": 0,
"explanation": "Slide 17 lists 'Economics of scales and scope' under the section 'Why MoT needs today?'"
},
{
"id": "lec02q11",
"lesson": "Lecture 2",
"question": "Which event in the evolution of the Internet occurred in 1982 and established the fundamental communication standard?",
"options": [
"The release of the first WWW hyperlink software.",
"The launch of the NSF-Net backbone on ARPANET.",
"TCP/IP becoming the internet standard.",
"The connection of the first 100,000 nodes."
],
"correctAnswerIndex": 2,
"explanation": "Slide 20 lists '1982 TCP/IP becomes internet standard' as a key event."
},
{
"id": "lec02q12",
"lesson": "Lecture 2",
"question": "What was the significance of the National Science Foundation (NSF) relaxing restrictions in 1992?",
"options": [
"It allowed the first email to be sent between universities.",
"It permitted commercial Internet traffic, leading to explosive growth.",
"It established the first military use of the ARPANET.",
"It introduced the LAMP stack to open-source developers."
],
"correctAnswerIndex": 1,
"explanation": "Slide 24 states: '1992 NSF relaxes its restriction on commercial Internet traffic' followed by '1992+ explosive growth in usage'."
},
{
"id": "lec02q13",
"lesson": "Lecture 2",
"question": "CompuServe, a major public network service, achieved a significant milestone in 1979. What was it?",
"options": [
"It was purchased by AOL for mass market expansion.",
"It provided the first email service on its platform.",
"It launched the first graphical World Wide Web browser.",
"It reached a user base of 3 million active subscribers."
],
"correctAnswerIndex": 1,
"explanation": "Slide 22 notes that CompuServe '1979 provided first email'."
},
{
"id": "lec02q14",
"lesson": "Lecture 2",
"question": "Which public network service was the first to offer World Wide Web (WWW) access to its users in 1994?",
"options": [
"CompuServe",
"Prodigy",
"ARPANET",
"AOL"
],
"correctAnswerIndex": 1,
"explanation": "Slide 23 states that Prodigy was '1994 1st to offer WWW access'."
},
{
"id": "lec02q15",
"lesson": "Lecture 2",
"question": "The lecture identifies several 'Game Changers' in the current generation. Which of the following acronyms represents a key open-source technology stack mentioned?",
"options": [
"LAMP (Linux, Apache, MySQL, PHP/Perl/Python)",
"MEAN (MongoDB, Express, Angular, Node)",
"MERN (MongoDB, Express, React, Node)",
"WAMP (Windows, Apache, MySQL, PHP)"
],
"correctAnswerIndex": 0,
"explanation": "Slide 25 explicitly lists 'LAMP Stack' alongside Open Source Software and Cloud Computing."
},
{
"id": "lec02q16",
"lesson": "Lecture 2",
"question": "In the context of 'Technology in Agriculture', the lecture specifically highlights the use of IoT and which other technology?",
"options": [
"Blockchain for supply chain tracking.",
"Remote controlled drones.",
"Genetic modification of crops.",
"Automated hydroponic vertical farms."
],
"correctAnswerIndex": 1,
"explanation": "Slide 28 lists 'Use remote controlled drones for agriculture' alongside IoT."
},
{
"id": "lec02q17",
"lesson": "Lecture 2",
"question": "A manager is dealing with 'sophisticated people skills' and 'organizational politics'. In which lecture section are these identified as key issues?",
"options": [
"The Learning Objectives of the module.",
"The Characteristics and Challenges of Technology-Based Businesses.",
"The Evolution of the Internet protocols.",
"The specific dimensions of Natural Science in MOT."
],
"correctAnswerIndex": 1,
"explanation": "Slide 8 lists 'Need for sophisticated people skills, ability to deal with organizational conflicts, power and politics' under Characteristics and Challenges."
},
{
"id": "lec02q18",
"lesson": "Lecture 2",
"question": "Which of the following is NOT listed as a reason 'Why MoT needs Today' in the lecture documents?",
"options": [
"Accessing resources more economically.",
"Eliminating the need for human management in factories.",
"New market penetration.",
"Capacity enhancement."
],
"correctAnswerIndex": 1,
"explanation": "Slide 17 lists accessing resources, market penetration, and capacity enhancement. It does not mention eliminating human management."
},
{
"id": "lec02q19",
"lesson": "Lecture 2",
"question": "According to the lecture, what year did ARPANET formally become the Internet?",
"options": [
"1982",
"1988",
"1990",
"1995"
],
"correctAnswerIndex": 2,
"explanation": "Slide 21 explicitly states: '1990 ARPANET becomes the Internet'."
},
{
"id": "lec02q20",
"lesson": "Lecture 2",
"question": "What tools provided 'Internet search and navigation' capabilities in 1991, prior to the widespread release of WWW hyperlink software?",
"options": [
"Google and Yahoo",
"WAIS and Gopher",
"Mosaic and Netscape",
"CompuServe and Prodigy"
],
"correctAnswerIndex": 1,
"explanation": "Slide 24 states: '1991 WAIS and Gopher provide Internet search and navigation'."
},
{
"id": "lec02q21",
"lesson": "Lecture 2",
"question": "The lecture describes the modern world as 'on-demand and on command'. Which business benefit is directly associated with this concept in the lecture slides?",
"options": [
"The ability to physically inspect every product before purchase.",
"Sophisticated and secure payment methods like Credit/Debit cards.",
"Slower delivery times due to high customization requirements.",
"Mandatory face-to-face interactions for fund transfers."
],
"correctAnswerIndex": 1,
"explanation": "Slide 27 lists 'Sophisticated and secure payment methods (Credit/debit cards)' under the 'on-demand and on command world' section."
},
{
"id": "lec02q22",
"lesson": "Lecture 2",
"question": "Which challenge is associated with 'Tight, end-date-driven schedules' in technology-based businesses?",
"options": [
"The abundance of unlimited resources to meet the deadline.",
"The static nature of market regulations and technology.",
"The lack of competition in global markets.",
"The presence of resource constraints and tough performance requirements."
],
"correctAnswerIndex": 3,
"explanation": "Slide 7 lists 'Resource constraint, tough performance requirements' immediately before 'Tight, end-date-driven schedules', implying they are related challenges."
},
{
"id": "lec02q23",
"lesson": "Lecture 2",
"question": "How does the lecture distinguish the 'Strategic' aspect of Management of Technology?",
"options": [
"By focusing only on day-to-day administrative tasks.",
"By positioning technology as a weapon for unique market positioning.",
"By ignoring global competition to focus on local markets.",
"By separating engineering goals from business goals."
],
"correctAnswerIndex": 1,
"explanation": "Slide 16 states: 'Technology has become a strategic weapon for positioning the product or service uniquely in the market place.'"
},
{
"id": "lec02q24",
"lesson": "Lecture 2",
"question": "Which of the following describes the growth of ARPANET nodes between 1984 and 1989?",
"options": [
"It grew from 1,000 nodes in 1984 to 100,000 nodes in 1989.",
"It remained static at 1,000 nodes due to government restrictions.",
"It decreased significantly as businesses moved to private networks.",
"It grew from 15 nodes in 1984 to 1,000 nodes in 1989."
],
"correctAnswerIndex": 0,
"explanation": "Slide 20 says '1984 ARPANET - 1,000 nodes'. Slide 21 says '1989 ARPANET - 100,000 nodes'."
},
{
"id": "lec02q25",
"lesson": "Lecture 2",
"question": "A company is experiencing difficulties because its technology management strategy does not align with its 'Organizational Culture'. Which specific dimension of MOT does this highlight?",
"options": [
"MOT is influenced by business strategy, organizational culture, and environment.",
"MOT is solely defined by the hard engineering constraints of the product.",
"MOT focuses exclusively on the administrative science of planning.",
"MOT is independent of the soft skills of the people involved."
],
"correctAnswerIndex": 0,
"explanation": "Slide 14 states: 'MOT is influenced by business strategy, organizational culture, and the business environment, and vice versa.'"
},
{
"id": "lec02q26",
"lesson": "Lecture 2",
"question": "What is the primary function of the 'Internet' as defined in the lecture slides?",
"options": [
"A centralized government database for storing confidential files.",
"A vast collection of networks acting as a single huge network for data transport.",
"A software application used exclusively for sending emails within an office.",
"A hardware device that connects a single computer to a printer."
],
"correctAnswerIndex": 1,
"explanation": "Slide 18 defines it as 'The vast collection of computer networks which form and act as a single huge network for transport of data and messages...'."
},
{
"id": "lec02q27",
"lesson": "Lecture 2",
"question": "Which company bought CompuServe in 1997?",
"options": [
"Microsoft",
"Prodigy",
"AOL",
"Yahoo"
],
"correctAnswerIndex": 2,
"explanation": "Slide 22 states: '1997 purchased by AOL'."
},
{
"id": "lec02q28",
"lesson": "Lecture 2",
"question": "When defining the dimensions of MOT, which three scientific disciplines are explicitly linked to 'plan, develop and implement technological capabilities'?",
"options": [
"Physics, Chemistry, and Biology.",
"Engineering, Science, and Management.",
"Psychology, Sociology, and Anthropology.",
"Marketing, Finance, and Operations."
],
"correctAnswerIndex": 1,
"explanation": "Slide 12 states: 'Management of Technology links engineering, science and management disciplines...'"
},
{
"id": "lec02q29",
"lesson": "Lecture 2",
"question": "Which year saw the first link of email between CompuServe and ARPANET?",
"options": [
"1979",
"1982",
"1989",
"1992"
],
"correctAnswerIndex": 2,
"explanation": "Slide 21 lists: '1989 link email between CompuServe and ARPANET'."
},
{
"id": "lec02q30",
"lesson": "Lecture 2",
"question": "In the context of 'Game Changers', RedHat is associated with which technology movement?",
"options": [
"Proprietary Operating Systems",
"Open Source Software",
"Cloud Computing Hardware",
"World Wide Web Protocols"
],
"correctAnswerIndex": 1,
"explanation": "Slide 25 shows the RedHat logo under the heading 'Open Source Software'."
  },

  // --- LECTURE 3 ---
  {
"id": "lec03q01",
"lesson": "Lecture 3",
"question": "A pharmaceutical company has spent five years and significant capital developing a new drug molecule, but the product has not yet been introduced to the market and has generated zero revenue. According to the 6-Phase Technology Life Cycle, which phase is this company currently in?",
"options": [
"Technology Development Phase",
"Application Launch Phase",
"Application Growth Phase",
"Technology Substitution Phase"
],
"correctAnswerIndex": 0,
"explanation": "The Technology Development Phase is characterized by spending significant effort and money to create technology with zero market response or income. (Slide 8, 18)"
},
{
"id": "lec03q02",
"lesson": "Lecture 3",
"question": "In the context of the S-Curve of technological progress, what specific phenomenon occurs when a technology reaches its natural physical limits, such as the size constraints of vacuum tubes?",
"options": [
"The technology enters the syndication phase and growth accelerates.",
"The technology becomes mature and performance improvement slows down.",
"The technology immediately reverts to the embryonic stage for redesign.",
"The technology shifts automatically to a market pull strategy."
],
"correctAnswerIndex": 1,
"explanation": "When the upper limit of a technology is approached (e.g., vacuum tube size), progress slows down, marking the Mature/Substitute stage. (Slide 12)"
},
{
"id": "lec03q03",
"lesson": "Lecture 3",
"question": "Which of the following scenarios best illustrates the 'Syndication' stage of the 4-Stage S-Curve model?",
"options": [
"A research lab publishes a theoretical paper on a new semiconductor material.",
"A company demonstrates and commercializes a new tech with slow initial growth.",
"A product achieves rapid market penetration and sustained revenue growth.",
"A legacy technology is rapidly replaced by a more efficient digital alternative."
],
"correctAnswerIndex": 1,
"explanation": "Syndication represents the demonstration and commercialization of a new technology, characterized by a period of slow initial growth. (Slide 11)"
},
{
"id": "lec03q04",
"lesson": "Lecture 3",
"question": "According to the Technology Life Cycle hierarchy, how is a complex technology like a computer system structured?",
"options": [
"System -> Subsystems -> Components",
"Innovation -> Diffusion -> Substitution",
"Push Factors -> Pull Factors -> Market",
"Embryonic -> Growth -> Maturity"
],
"correctAnswerIndex": 0,
"explanation": "Technology has a hierarchy: System -> No. of Subsystems -> No. of Components (e.g., Computer -> Microprocessor). (Slide 21)"
},
{
"id": "lec03q05",
"lesson": "Lecture 3",
"question": "A smartphone manufacturer releases a slightly improved model with a better camera and longer battery life to address specific consumer complaints. This innovation strategy is best described as:",
"options": [
"Science-Technology Push",
"Technology Syndication",
"Market Pull",
"Technology Obsolescence"
],
"correctAnswerIndex": 2,
"explanation": "Market Pull is when technology is developed to meet a market need or demand, often resulting in incremental improvements. (Slide 24)"
},
{
"id": "lec03q06",
"lesson": "Lecture 3",
"question": "Which scientific discovery serves as the foundational 'Technology Push' for the development of Nuclear Energy?",
"options": [
"Watson and Crick's discovery of the structure of DNA (1952)",
"Maxwell's theory of electromagnetism (1880s)",
"A.H. Wilson's theory of semiconductors (1931)",
"Einstein's paper establishing mass-energy equivalence (1905)"
],
"correctAnswerIndex": 3,
"explanation": "Nuclear energy is based on Einstein's 1905 paper which established the equivalence of mass and energy. (Slide 23)"
},
{
"id": "lec03q07",
"lesson": "Lecture 3",
"question": "In the Diffusion of Technology theory, which factor refers to the degree to which an innovation is perceived as being consistent with the existing values and needs of potential users?",
"options": [
"Relative Advantage",
"Compatibility",
"Complexity",
"Observability"
],
"correctAnswerIndex": 1,
"explanation": "Compatibility is the degree to which the innovation is compatible with the values and needs of the users. (Slide 27)"
},
{
"id": "lec03q08",
"lesson": "Lecture 3",
"question": "A company persists in using film-based photography technology despite the rapid rise of digital cameras. According to the Technology Life Cycle market growth stages, what is the likely outcome for this company?",
"options": [
"They will experience a 'Second Wind' of high profitability.",
"They will enter the Application Growth phase again.",
"They will face shrinking market share and falling revenues.",
"They will automatically transition to the Syndication phase."
],
"correctAnswerIndex": 2,
"explanation": "In the Technology Substitution phase, companies continuing to use old technology face shrinking market share and falling revenues. (Slide 19)"
},
{
"id": "lec03q09",
"lesson": "Lecture 3",
"question": "How do 'Interpersonal word of mouth' communication channels typically behave during the diffusion process of an innovation?",
"options": [
"They are constant throughout the entire life cycle of the product.",
"They expand during the early phase and decline during the second half.",
"They are only effective during the decline/obsolescence phase.",
"They have less impact than mass media during the initial launch phase."
],
"correctAnswerIndex": 1,
"explanation": "Interpersonal word of mouth expands during the early phase of the diffusion process and declines during the second half. (Slide 30)"
},
{
"id": "lec03q10",
"lesson": "Lecture 3",
"question": "Which of the following best characterizes the 'Application Growth' phase of the Technology Life Cycle?",
"options": [
"Zero market recognition and high R&D spending.",
"Slow initial growth as the technology is demonstrated.",
"Rapid and sustained growth with market penetration.",
"Declining market volume and shrinking revenues."
],
"correctAnswerIndex": 2,
"explanation": "The Application Growth/Diffusion stage is characterized by rapid and sustained growth as the market penetrates. (Slide 18, 12)"
},
{
"id": "lec03q11",
"lesson": "Lecture 3",
"question": "In the context of Multiple-Generation Technologies, how does the progression from Intel 286 to Core 2 processors influence the technology life cycle?",
"options": [
"Each generation represents a completely new S-curve that resets the market to zero.",
"Each generation boosts the life cycle by improving subsystem performance.",
"Each generation signals the immediate obsolescence of the entire computer system.",
"Each generation eliminates the need for previous software compatibility."
],
"correctAnswerIndex": 1,
"explanation": "Subsystems like microprocessors (286, 486, Pentium, etc.) are generations of innovation that help boost the technology life cycle. (Slide 21)"
},
{
"id": "lec03q12",
"lesson": "Lecture 3",
"question": "A software company offers a free 30-day trial of its new premium tool. Which adoption factor from Rogers' Diffusion theory is the company primarily leveraging?",
"options": [
"Trialability",
"Complexity",
"Compatibility",
"Relative Advantage"
],
"correctAnswerIndex": 0,
"explanation": "Trialability is the degree to which an innovation can be introduced on a trial basis before users must fully commit. (Slide 27)"
},
{
"id": "lec03q13",
"lesson": "Lecture 3",
"question": "The development of the H1N1 vaccine, driven by a strong collective demand for a solution to a specific health crisis, is a prime example of which innovation driver?",
"options": [
"Technology Push",
"Market Pull",
"Technology Syndication",
"Mature Technology"
],
"correctAnswerIndex": 1,
"explanation": "The H1N1 vaccine is cited as an example of Market Pull, where a strong collective demand provokes a major breakthrough. (Slide 24)"
},
{
"id": "lec03q14",
"lesson": "Lecture 3",
"question": "When mapping the 3-Stage Technology Life Cycle to the 6-Phase model, the 'Embryonic' stage encompasses which of the following phases?",
"options": [
"Technology Development and Application Launch",
"Application Growth and Mature-Technology",
"Technology Substitution and Obsolescence",
"Application Launch and Application Growth"
],
"correctAnswerIndex": 0,
"explanation": "According to the table on Slide 8, the Embryonic stage covers 'Technology Development Phase' and 'Application Launch Phase'. (Slide 8)"
},
{
"id": "lec03q15",
"lesson": "Lecture 3",
"question": "If a new technology 'B' has a higher performance limit than the current technology 'A', what is the expected impact on the S-curves?",
"options": [
"Technology B will progress slower and never intersect Technology A.",
"Technology B will merge with Technology A to form a linear line.",
"Technology B will likely progress at a faster rate and replace Technology A.",
"Technology B will be rejected by the market due to high complexity."
],
"correctAnswerIndex": 2,
"explanation": "A newer technology B with a higher limit of performance may progress at a faster rate and will replace the earlier technology. (Slide 15)"
},
{
"id": "lec03q16",
"lesson": "Lecture 3",
"question": "Which communication channel is most effective in creating awareness during the early phase of diffusion but occurs continually throughout the process?",
"options": [
"Interpersonal word of mouth",
"Mass media channels",
"Technical manuals",
"Internal R&D reports"
],
"correctAnswerIndex": 1,
"explanation": "Mass media channels are greatest in the early phase of diffusion but occur continually throughout the process. (Slide 30)"
},
{
"id": "lec03q17",
"lesson": "Lecture 3",
"question": "Identify the correct historical pairing of a technology and its underlying scientific discovery (Technology Push).",
"options": [
"Electronics - Watson & Crick's DNA structure",
"Transistors - A.H. Wilson's theory of semiconductors",
"Genetic Engineering - Maxwell's electromagnetism",
"Nuclear Energy - A.H. Wilson's theory of semiconductors"
],
"correctAnswerIndex": 1,
"explanation": "Transistors are based on A.H. Wilson's 1931 theory of semiconductors. (Slide 23)"
},
{
"id": "lec03q18",
"lesson": "Lecture 3",
"question": "What is the primary risk for a corporation that neglects the 'Technology Life Cycle' pattern during strategic planning?",
"options": [
"It may overinvest in mass media advertising channels.",
"It may damage its competitive position and incur high costs.",
"It will be forced to adopt a market pull strategy immediately.",
"It will fail to identify the correct subsystems of its technology."
],
"correctAnswerIndex": 1,
"explanation": "Neglecting this pattern as a key factor in the planning process may prove very costly to the competitive position of the corporation. (Slide 7)"
},
{
"id": "lec03q19",
"lesson": "Lecture 3",
"question": "In the context of the S-Curve, the 'Innovation' period is defined by which of the following activities?",
"options": [
"Demonstration and commercialization with slow growth.",
"Market penetration and rapid sustained growth.",
"Approaching physical limits and slowing performance.",
"Spending significant effort and money to create the technology."
],
"correctAnswerIndex": 3,
"explanation": "Innovation represents the birth of new product/process resulting from R&D activities, spending significant effort/money. (Slide 11)"
},
{
"id": "lec03q20",
"lesson": "Lecture 3",
"question": "Which of the following best describes the 'Technology Obsolescence' phase?",
"options": [
"The technology generates peak revenue but growth slows.",
"The technology has little or no value.",
"The technology is being tested in niche markets.",
"The technology is experiencing its fastest growth rate."
],
"correctAnswerIndex": 1,
"explanation": "Technology Obsolescence Phase: Technology has little or no value. (Slide 19)"
},
{
"id": "lec03q21",
"lesson": "Lecture 3",
"question": "A consumer refuses to buy a new smart home device because they believe it is too difficult to install and operate. Which factor of diffusion is hindering adoption here?",
"options": [
"Observability",
"Trialability",
"Complexity",
"Compatibility"
],
"correctAnswerIndex": 2,
"explanation": "Complexity: The degree to which the innovation is considered complex and difficult to use. (Slide 27)"
},
{
"id": "lec03q22",
"lesson": "Lecture 3",
"question": "Which of the following statements about 'Market Pull' technological developments is true?",
"options": [
"They typically cause major industry upheavals and create entirely new markets.",
"They are usually incremental in nature or represent improvements to existing tech.",
"They rely solely on basic scientific research without regard for consumer needs.",
"They always follow a linear path of 'Science -> Technology -> Market'."
],
"correctAnswerIndex": 1,
"explanation": "Most technological developments stimulated by market pull are of an incremental nature or represent improvements to existing technologies. (Slide 24)"
},
{
"id": "lec03q23",
"lesson": "Lecture 3",
"question": "In the 'Application Launch' phase of the Technology Life Cycle, the market volume is characterized by:",
"options": [
"Zero response and no recognition.",
"Slow initial growth followed by rapid growth.",
"Peak volume followed by a decline.",
"A shrinking market share due to substitution."
],
"correctAnswerIndex": 1,
"explanation": "Application Launch is characterized by slow initial growth followed by rapid growth. (Slide 18)"
},
{
"id": "lec03q24",
"lesson": "Lecture 3",
"question": "The transition from 'Vacuum-tube technology' to 'Transistor technology' is a classic example of:",
"options": [
"A technology reaching its natural limits and starting a new life cycle.",
"A market pull strategy extending the life of an old technology.",
"The failure of diffusion due to lack of compatibility.",
"A single S-curve continuing indefinitely without saturation."
],
"correctAnswerIndex": 0,
"explanation": "Vacuum-tube technology was limited by size/power -> transistor technology will start a new life cycle. (Slide 12)"
},
{
"id": "lec03q25",
"lesson": "Lecture 3",
"question": "What is the main implication of the 'Mature Technology' phase for market volume?",
"options": [
"Market volume is at zero as the product is still in development.",
"Market volume grows exponentially as diffusion peaks.",
"Market volume will peak and then start to decline.",
"Market volume stabilizes and remains constant forever."
],
"correctAnswerIndex": 2,
"explanation": "Mature Technology: Market volume will peak and then start to decline. (Slide 19)"
},
{
"id": "lec03q26",
"lesson": "Lecture 3",
"question": "When integrating Technology Push and Market Pull to stimulate innovation, which element is considered an opportunity for 'Technology Push'?",
"options": [
"Recognized market needs",
"Proliferation of application areas",
"Increased profitability",
"Applied knowledge and scientific discoveries"
],
"correctAnswerIndex": 3,
"explanation": "Opportunities for Technology Push include Scientific discoveries, Applied knowledge, Intellectual capital. (Slide 26)"
},
{
"id": "lec03q27",
"lesson": "Lecture 3",
"question": "According to Rogers (1995), diffusion is best defined as:",
"options": [
"The process of inventing a new product in a laboratory setting.",
"The process by which an innovation is communicated over time through channels to a social system.",
"The marketing strategy used to force a product onto unwilling consumers.",
"The physical distribution of goods from a warehouse to retail stores."
],
"correctAnswerIndex": 1,
"explanation": "Diffusion is the process by which an innovation is communicated over time through certain channels to members of a social system. (Slide 27)"
},
{
"id": "lec03q28",
"lesson": "Lecture 3",
"question": "In the 4-Phase S-Curve model, which stage immediately follows 'Innovation' and precedes 'Diffusion'?",
"options": [
"Substitution",
"Syndication",
"Maturity",
"Obsolescence"
],
"correctAnswerIndex": 1,
"explanation": "The order in the 4-Stages diagram is Innovation -> Syndication -> Diffusion -> Substitution. (Slide 10)"
},
{
"id": "lec03q29",
"lesson": "Lecture 3",
"question": "A potential adopter observes the visible results of a neighbor's solar panel installation. Which diffusion factor is influencing their decision?",
"options": [
"Compatibility",
"Observability",
"Complexity",
"Trialability"
],
"correctAnswerIndex": 1,
"explanation": "Observability: Is seen and its results are observed by potential adopters. (Slide 27)"
},
{
"id": "lec03q30",
"lesson": "Lecture 3",
"question": "Why might a newer technology (Curve B) progress at a faster rate than an older technology (Curve A)?",
"options": [
"Because it has a lower limit of performance and is cheaper to produce.",
"Because it is always supported by government subsidies.",
"Because it has a higher limit of performance for the same parameter.",
"Because it bypasses the syndication phase entirely."
],
"correctAnswerIndex": 2,
"explanation": "A newer technology, B has a higher limit of performance for the same parameter – may progress at a faster rate. (Slide 15)"
  },

  // --- LECTURE 4 ---
  {
"id": "lec04q01",
"lesson": "Lecture 4",
"question": "Which of the following best defines 'Strategic Management' within the context of the provided lecture?",
"options": [
"A short-term operational plan to manage daily technical tasks.",
"A continuous process of formulation, implementation, and evaluation.",
"A rigid set of rules for managing human resources and payroll.",
"A one-time activity to define the organization's annual budget."
],
"correctAnswerIndex": 1,
"explanation": "Strategic Management is defined in the slides as the continuous process of strategy formulation, implementation, evaluation, and control."
},
{
"id": "lec04q02",
"lesson": "Lecture 4",
"question": "In the systems perspective of strategic management, which element is considered an 'Output' of the organizational system?",
"options": [
"Raw material resources",
"Employee satisfaction",
"Financial resources",
"Transformation process"
],
"correctAnswerIndex": 1,
"explanation": "According to the System Perspective diagram, Inputs are resources (raw material, financial), while Outputs include Employee Satisfaction, Products/Services, and Profits/Losses."
},
{
"id": "lec04q03",
"lesson": "Lecture 4",
"question": "A CEO is reviewing the company's long-term direction. According to the lecture, strategic management generally focuses on a period of more than how many years?",
"options": [
"One year",
"Two years",
"Three years",
"Five years"
],
"correctAnswerIndex": 2,
"explanation": "The slides state that strategic management focuses on the long term, i.e., generally a period of more than three years."
},
{
"id": "lec04q04",
"lesson": "Lecture 4",
"question": "Which stage of Strategic Management involves assessing external and internal environments to establish the organization's core ideology?",
"options": [
"Strategy Formulation",
"Strategy Implementation",
"Strategy Evaluation",
"Strategy Modification"
],
"correctAnswerIndex": 0,
"explanation": "Strategy Formulation involves assessing external and internal environments to establish the organization's core ideology, objectives, and strategies."
},
{
"id": "lec04q05",
"lesson": "Lecture 4",
"question": "GlobalTech Inc. is currently adjusting its value chain to align with a newly selected corporate strategy. Which stage of strategic management are they executing?",
"options": [
"Strategy Formulation",
"Strategy Implementation",
"Strategy Evaluation",
"Strategy Control"
],
"correctAnswerIndex": 1,
"explanation": "Strategy Implementation involves implementing the formulated strategies by adjusting the organization's value chain to be congruent with the strategies."
},
{
"id": "lec04q06",
"lesson": "Lecture 4",
"question": "A company wants to analyze the influence of inflation rates and trade agreements on its business. Which analysis tool is most appropriate?",
"options": [
"PEST Analysis",
"Value Chain Analysis",
"McKinsey 7S Framework",
"Balanced Scorecard"
],
"correctAnswerIndex": 0,
"explanation": "PEST Analysis examines the influences of the macro environment (Political, Economic, Social, Technological). Inflation and trade agreements fall under Economic factors."
},
{
"id": "lec04q07",
"lesson": "Lecture 4",
"question": "In the context of Porter’s Five Forces Model, which factor examines the ability of customers to switch to a competitor?",
"options": [
"Threat of New Entrants",
"Bargaining Power of Buyers",
"Threat of Substitute Products",
"Rivalry Among Existing Competitors"
],
"correctAnswerIndex": 1,
"explanation": "The Bargaining Power of Buyers explains the ability of customers to influence prices or switch to a competitor."
},
{
"id": "lec04q08",
"lesson": "Lecture 4",
"question": "Which of the following components is classified as a 'Hard S' in McKinsey’s 7S Framework?",
"options": [
"Skills",
"Style",
"Staff",
"Systems"
],
"correctAnswerIndex": 3,
"explanation": "In McKinsey’s 7S Framework, the 'Hard S' elements are Strategy, Structure, and Systems. Skills, Style, Staff, and Shared Values are 'Soft S' elements."
},
{
"id": "lec04q09",
"lesson": "Lecture 4",
"question": "An organization identifies a trend in 'consumer purchasing power' and 'demographic changes'. Under which PEST analysis categories do these fall, respectively?",
"options": [
"Economic and Social",
"Political and Economic",
"Social and Technological",
"Technological and Political"
],
"correctAnswerIndex": 0,
"explanation": "Consumer purchasing power is an Economic factor, while demographic changes are a Social factor in PEST analysis."
},
{
"id": "lec04q10",
"lesson": "Lecture 4",
"question": "XYZ Corp focuses on 'Shared Values' and 'Staff' to improve internal alignment. Which framework utilizes these specific components for analysis?",
"options": [
"Ansoff’s Matrix",
"Porter’s Five Forces",
"McKinsey’s 7S Framework",
"Porter’s Value Chain"
],
"correctAnswerIndex": 2,
"explanation": "McKinsey’s 7S Framework examines internal environment influences using 7 elements, including Shared Values and Staff."
},
{
"id": "lec04q11",
"lesson": "Lecture 4",
"question": "Which strategic tool is primarily used to select a corporate strategy based on the organization’s focus on 'Product' and 'Market'?",
"options": [
"SWOT Analysis",
"Ansoff’s Matrix",
"PEST Analysis",
"Balanced Scorecard"
],
"correctAnswerIndex": 1,
"explanation": "Ansoff’s Matrix provides four corporate strategies based on the organization's focus on product (existing/new) and market (existing/new)."
},
{
"id": "lec04q12",
"lesson": "Lecture 4",
"question": "A software company decides to sell its existing security software to a completely new market segment in Asia. According to Ansoff’s Matrix, which strategy is this?",
"options": [
"Market Penetration",
"Product Development",
"Market Development",
"Diversification"
],
"correctAnswerIndex": 2,
"explanation": "Market Development involves selling existing products to new markets."
},
{
"id": "lec04q13",
"lesson": "Lecture 4",
"question": "According to Porter’s Generic Strategies, a company that targets a broad market with a unique product offering is pursuing which strategy?",
"options": [
"Cost Leadership",
"Cost Focus",
"Differentiation Leadership",
"Differentiation Focus"
],
"correctAnswerIndex": 2,
"explanation": "Differentiation Leadership targets a mass market (broad scope) with a unique product (differentiation)."
},
{
"id": "lec04q14",
"lesson": "Lecture 4",
"question": "In Porter’s Value Chain Analysis, which of the following is categorized as a 'Support Activity' rather than a 'Primary Activity'?",
"options": [
"Inbound Logistics",
"Technology Development",
"Marketing and Sales",
"Service"
],
"correctAnswerIndex": 1,
"explanation": "Porter’s Value Chain classifies Inbound Logistics, Operations, Outbound Logistics, Marketing & Sales, and Service as Primary. Technology Development is a Support Activity."
},
{
"id": "lec04q15",
"lesson": "Lecture 4",
"question": "A manufacturing firm is mapping its activities to identify strategic cohorts. Where would 'Procurement' fall in the Value Chain model?",
"options": [
"Primary Activities",
"Support Activities",
"External Activities",
"Macro Activities"
],
"correctAnswerIndex": 1,
"explanation": "Procurement is listed as a Support Activity in Porter’s Value Chain Analysis."
},
{
"id": "lec04q16",
"lesson": "Lecture 4",
"question": "The Balanced Scorecard Approach evaluates strategy based on four perspectives. Which of the following is NOT one of those perspectives?",
"options": [
"Financial Results",
"Competitor Rivalry",
"Internal Processes",
"Customer Relationship"
],
"correctAnswerIndex": 1,
"explanation": "The Balanced Scorecard perspectives are Financial, Customer Relationship, Internal Processes, and Education & Growth. Competitor Rivalry is part of Porter's Five Forces."
},
{
"id": "lec04q17",
"lesson": "Lecture 4",
"question": "Which tool enables a 'stakeholder approach' by establishing expected outcomes in areas like 'Education & Growth' and 'Financial Results'?",
"options": [
"Porter’s Five Forces",
"McKinsey’s 7S Framework",
"Balanced Scorecard",
"Ansoff’s Matrix"
],
"correctAnswerIndex": 2,
"explanation": "The Balanced Scorecard enables a stakeholder approach and monitors outcomes in Financial, Customer, Internal Processes, and Education & Growth areas."
},
{
"id": "lec04q18",
"lesson": "Lecture 4",
"question": "What is the primary focus of 'Strategy in Technology' as defined in the lecture?",
"options": [
"To manage the entire organization's financial portfolio.",
"To focus on technologies themselves and the people managing them.",
"To solely automate the human resource recruitment process.",
"To replace all human workers with artificial intelligence."
],
"correctAnswerIndex": 1,
"explanation": "Strategies in MoT primarily focus on the technologies themselves and in some cases the people who directly manage those technologies."
},
{
"id": "lec04q19",
"lesson": "Lecture 4",
"question": "When formulating a Technology Strategy, the organization must scan the environment to assess which specific factor?",
"options": [
"The exact retirement age of all low-level employees.",
"The technological situation and competitive position.",
"The cafeteria menu options for the upcoming year.",
"The detailed travel expenses of the sales department."
],
"correctAnswerIndex": 1,
"explanation": "Tech Strategy Formulation involves assessing the organization's technological situation and the competitive position of the organization's tech strategy."
},
{
"id": "lec04q20",
"lesson": "Lecture 4",
"question": "A company invests heavily in R&D to produce state-of-the-art technology and capture the market first. Which Technology Strategy type is this?",
"options": [
"Leader Strategy",
"Follower Strategy",
"Exploiter Strategy",
"Extender Strategy"
],
"correctAnswerIndex": 0,
"explanation": "A Leader is an industry leader who invests heavily in R&D and produces state-of-the-art technology."
},
{
"id": "lec04q21",
"lesson": "Lecture 4",
"question": "TechCorp does not invent new technology but modifies technology developed by leaders to suit specific needs. Which strategy are they using?",
"options": [
"Leader Strategy",
"Follower Strategy",
"Exploiter Strategy",
"Extender Strategy"
],
"correctAnswerIndex": 1,
"explanation": "A Follower modifies the technology developed by leaders."
},
{
"id": "lec04q22",
"lesson": "Lecture 4",
"question": "A firm acquires mature and obsolete technology that is freely available in international markets to use in its operations. How is this firm classified?",
"options": [
"Leader",
"Follower",
"Exploiter",
"Extender"
],
"correctAnswerIndex": 3,
"explanation": "An Extender acquires mature and obsolete technology that is freely available in international markets."
},
{
"id": "lec04q23",
"lesson": "Lecture 4",
"question": "What distinguishes an 'Exploiter' technology strategy from a 'Follower' strategy?",
"options": [
"Exploiters standardize tech; Followers modify tech.",
"Exploiters invest in R&D; Followers buy obsolete tech.",
"Exploiters are market leaders; Followers are market entrants.",
"Exploiters invent new tech; Followers standardize tech."
],
"correctAnswerIndex": 0,
"explanation": "Exploiters 'acquire and standardize' technology developed by others, whereas Followers 'modify' the technology developed by leaders."
},
{
"id": "lec04q24",
"lesson": "Lecture 4",
"question": "During Tech Strategy Implementation, an organization adjusts its value chain. Which of the following is a specific area mentioned for adjustment?",
"options": [
"Stock market share price targets.",
"HR training technology.",
"Competitor’s pricing model.",
"Government taxation policy."
],
"correctAnswerIndex": 1,
"explanation": "The slides list specific adjustments during implementation, including 'HR training technology', information systems technology, transportation technology, etc."
},
{
"id": "lec04q25",
"lesson": "Lecture 4",
"question": "How does the 'System Perspective' describe the relationship between the parts and the whole of an organization?",
"options": [
"The whole is exactly equal to the sum of its parts.",
"The sum of its parts is greater than the whole.",
"The whole is greater than the sum of its parts.",
"The parts function independently of the whole."
],
"correctAnswerIndex": 1,
"explanation": "The slide on Strategic Management states: 'This focuses on the systems perspective i.e. the Sum of its parts is greater than the whole' (Note: This is the specific phrasing used in the slide provided, although the standard idiom is usually the reverse. The question adheres to the provided text)."
},
{
"id": "lec04q26",
"lesson": "Lecture 4",
"question": "Strategy in Technology comprises an overall plan consisting of three specific elements. What are they?",
"options": [
"Hardware, Software, and Networks",
"Objectives, Principles, and Tactics",
"Profits, Losses, and Margins",
"Inputs, Processes, and Outputs"
],
"correctAnswerIndex": 1,
"explanation": "Strategy in Technology is the overall plan which consists of Objectives, Principles, and Tactics relating to the use of technologies."
},
{
"id": "lec04q27",
"lesson": "Lecture 4",
"question": "When conducting a SWOT analysis, which components are derived from the Internal Environment analysis (e.g., McKinsey 7S)?",
"options": [
"Opportunities and Threats",
"Strengths and Weaknesses",
"Strengths and Opportunities",
"Weaknesses and Threats"
],
"correctAnswerIndex": 1,
"explanation": "McKinsey's 7S examines the internal environment, which helps identify Strengths and Weaknesses. PEST and Porter's Five Forces identify Opportunities and Threats."
},
{
"id": "lec04q28",
"lesson": "Lecture 4",
"question": "A company focuses on high efficiency in spending on technology rather than value creation through innovation. This reflects which generation of tech strategy?",
"options": [
"Value-centric generation",
"Efficiency-focused generation",
"Integration-focused generation",
"R&D-focused generation"
],
"correctAnswerIndex": 1,
"explanation": "The slides mention other generations of technology-related strategies primarily focus on the efficiency of the company's spending on technology."
},
{
"id": "lec04q29",
"lesson": "Lecture 4",
"question": "In the context of Porter's Generic Strategies, a 'Cost Focus' strategy implies what combination of advantage and scope?",
"options": [
"Differentiation advantage in a Mass market.",
"Low Cost advantage in a Mass market.",
"Differentiation advantage in a Niche market.",
"Low Cost advantage in a Niche market."
],
"correctAnswerIndex": 3,
"explanation": "Cost Focus is the intersection of Low Cost competitive advantage and a Niche (narrow) scope of market."
},
{
"id": "lec04q30",
"lesson": "Lecture 4",
"question": "After implementing a new technology strategy, a manager compares the actual outcomes with the intended outcomes. What is the immediate next step if negative variances are found?",
"options": [
"Formulate a completely new strategy.",
"Take corrective actions.",
"Ignore the variance if small.",
"Fire the implementation team."
],
"correctAnswerIndex": 1,
"explanation": "Strategy Evaluation and Control involves comparing outcomes and 'taking corrective actions if needed'."
  },

  // --- LECTURE 5 ---
  {
"id": "lec05q01",
"lesson": "Lecture 5",
"question": "According to Richard Daft, which of the following is NOT a primary component of organizational structure?",
"options": [
"The set of formal tasks assigned to individuals and departments",
"The informal social network utilized by employees for support",
"The formal reporting relationships including lines of authority",
"The design of systems ensuring effective coordination of staff"
],
"correctAnswerIndex": 1,
"explanation": "Daft defines organizational structure by formal tasks, reporting relationships, and coordination systems, not informal social networks."
},
{
"id": "lec05q02",
"lesson": "Lecture 5",
"question": "A software firm allows junior developers to make critical coding decisions without seeking managerial approval. Which structural feature is best demonstrated here?",
"options": [
"Delegation of authority to the next managerial layer",
"Empowerment of the non-managerial layer",
"Centralization of the decision-making process",
"Establishment of a tall organizational hierarchy"
],
"correctAnswerIndex": 1,
"explanation": "Empowerment involves transferring authority specifically to the non-managerial layer, whereas delegation usually targets the next managerial layer."
},
{
"id": "lec05q03",
"lesson": "Lecture 5",
"question": "An engineering manager is required to justify the delay of a project release to the Chief Technology Officer. This requirement best illustrates which concept?",
"options": [
"Responsibility",
"Accountability",
"Line Authority",
"Staff Authority"
],
"correctAnswerIndex": 1,
"explanation": "Accountability is the requirement to justify the outcomes of authority and responsibility to a superior."
},
{
"id": "lec05q04",
"lesson": "Lecture 5",
"question": "Which of the following scenarios best describes an organization upholding the 'Unity of Command' principle within its Chain of Command?",
"options": [
"An employee reports to both a functional manager and a project manager",
"An employee receives orders from only one direct supervisor",
"An employee reports to a committee of department heads",
"An employee bypasses their manager to report to the CEO"
],
"correctAnswerIndex": 1,
"explanation": "Unity of Command ensures that an unbroken line of authority exists where an employee reports to only one superior."
},
{
"id": "lec05q05",
"lesson": "Lecture 5",
"question": "A manufacturing firm has a 'Tall' organizational hierarchy. Which feature is most likely present in this organization?",
"options": [
"High levels of decentralization",
"High levels of centralization",
"Wide span of control for managers",
"Empowerment of front-line workers"
],
"correctAnswerIndex": 1,
"explanation": "Centralization, where authority is vested in top layers, typically leads to a tall organizational hierarchy."
},
{
"id": "lec05q06",
"lesson": "Lecture 5",
"question": "TechGlobal Inc. groups its employees into departments based on expertise, such as R&D, Finance, and Marketing. What type of structure is this?",
"options": [
"Network Structure",
"Functional Structure",
"Divisional Structure",
"Team-based Structure"
],
"correctAnswerIndex": 1,
"explanation": "Functional Structure groups employees according to similarities in skills, expertise, and work activities."
},
{
"id": "lec05q07",
"lesson": "Lecture 5",
"question": "What is the primary advantage of a Functional Organizational Structure regarding coordination?",
"options": [
"It establishes a strong vertical coordination",
"It establishes a strong horizontal coordination",
"It coordinates beyond organizational boundaries",
"It coordinates strictly through customer segments"
],
"correctAnswerIndex": 0,
"explanation": "Functional structures are noted for establishing strong vertical coordination within specific departments."
},
{
"id": "lec05q08",
"lesson": "Lecture 5",
"question": "A conglomerate organizes its operations into 'Consumer Electronics,' 'Automotive,' and 'Healthcare' units. Each unit has its own R&D and Marketing teams. This is a:",
"options": [
"Functional Structure",
"Divisional Structure",
"Network Structure",
"Simple Structure"
],
"correctAnswerIndex": 1,
"explanation": "Divisional Structure is organized according to outputs, customers, or geographical segments, often with their own functional sub-structures."
},
{
"id": "lec05q09",
"lesson": "Lecture 5",
"question": "In a Divisional Structure, how is coordination primarily characterized compared to a Functional Structure?",
"options": [
"Strong vertical coordination within skill sets",
"Strong horizontal coordination across functions",
"Weak coordination between internal departments",
"Coordination that is outsourced to third parties"
],
"correctAnswerIndex": 1,
"explanation": "Divisional structures emphasize strong horizontal coordination to focus on specific products or regions."
},
{
"id": "lec05q10",
"lesson": "Lecture 5",
"question": "Alpha Corp operates with a small headquarters that brokers major functions like manufacturing and HR to separate independent companies. This describes a:",
"options": [
"Team Structure",
"Matrix Structure",
"Network Structure",
"Divisional Structure"
],
"correctAnswerIndex": 2,
"explanation": "A Network Structure is structured by outsourcing major functions to separate companies brokered by a small HQ."
},
{
"id": "lec05q11",
"lesson": "Lecture 5",
"question": "Which organizational structure explicitly utilizes both permanent and temporary cross-functional groups to work directly with customers?",
"options": [
"Team Structure",
"Functional Structure",
"Divisional Structure",
"Centralized Structure"
],
"correctAnswerIndex": 0,
"explanation": "Team Structures utilize horizontal teams (permanent or temporary/cross-functional) to coordinate activities and work with customers."
},
{
"id": "lec05q12",
"lesson": "Lecture 5",
"question": "Daft uses the metaphor of an 'Iceberg' to describe Organizational Culture. What does the submerged (invisible) portion represent?",
"options": [
"Visible manifestations like symbols and slogans",
"The formal reporting lines and authority levels",
"Fundamental underlying values and beliefs",
"The stated mission statement of the company"
],
"correctAnswerIndex": 2,
"explanation": "The invisible part of the iceberg represents the fundamental values, beliefs, and understandings, while the visible part includes symbols and stories."
},
{
"id": "lec05q13",
"lesson": "Lecture 5",
"question": "A tech startup operates in a rapidly changing market and prioritizes customer satisfaction. It encourages high risk-taking and creativity. Which culture is this?",
"options": [
"Consistency Culture",
"Involvement Culture",
"Achievement Culture",
"Adaptability Culture"
],
"correctAnswerIndex": 3,
"explanation": "Adaptability Culture focuses on a rapidly changing external environment and customers, encouraging creativity and risk-taking."
},
{
"id": "lec05q14",
"lesson": "Lecture 5",
"question": "A bank operates in a very stable environment. It focuses intensely on methodical behavior, rationality, and strict adherence to internal rules. Which culture is this?",
"options": [
"Consistency Culture",
"Involvement Culture",
"Achievement Culture",
"Adaptability Culture"
],
"correctAnswerIndex": 0,
"explanation": "Consistency Culture is defined by an internal strategic focus within a stable environment, encouraging methodical and rational behaviors."
},
{
"id": "lec05q15",
"lesson": "Lecture 5",
"question": "Which type of organizational culture is characterized by an external strategic focus within a stable environment, valuing competitiveness and hard work?",
"options": [
"Consistency Culture",
"Involvement Culture",
"Achievement Culture",
"Adaptability Culture"
],
"correctAnswerIndex": 2,
"explanation": "Achievement Culture suits a stable environment with an external focus, emphasizing competitiveness and hard work."
},
{
"id": "lec05q16",
"lesson": "Lecture 5",
"question": "What is the primary defining characteristic of an 'Involvement Culture'?",
"options": [
"Internal focus in a changing environment, valuing cooperation",
"External focus in a stable environment, valuing competition",
"Internal focus in a stable environment, valuing order",
"External focus in a changing environment, valuing innovation"
],
"correctAnswerIndex": 0,
"explanation": "Involvement Culture focuses internally on employees within a rapidly changing environment, encouraging cooperation and equality."
},
{
"id": "lec05q17",
"lesson": "Lecture 5",
"question": "In a High Performance Organizational Culture, how do cultural values relate to business strategy?",
"options": [
"Values are kept separate from the day-to-day business operations",
"Values align employee behavior with the organizational strategy",
"Values are secondary to the financial goals of the shareholders",
"Values are used only for marketing purposes to external clients"
],
"correctAnswerIndex": 1,
"explanation": "In high-performance cultures, cultural values energize employees and shape behavior to align with organizational strategy."
},
{
"id": "lec05q18",
"lesson": "Lecture 5",
"question": "Which role is identified as critical for sustaining a high-performance organizational culture?",
"options": [
"External Consultant",
"Cultural Leadership",
"Financial Auditor",
"Project Manager"
],
"correctAnswerIndex": 1,
"explanation": "The slides explicitly state that 'Cultural leadership is critical in sustaining high performance organizational cultures'."
},
{
"id": "lec05q19",
"lesson": "Lecture 5",
"question": "Considering the evolution of MOT, which organizational structure was most dominant during the Industrial Era?",
"options": [
"Simple Structure",
"Network and Team Structure",
"Functional and Divisional Structure",
"Virtual and Digital Structure"
],
"correctAnswerIndex": 2,
"explanation": "The comparison table links the Industrial Era with Functional, Divisional, and Matrix structures."
},
{
"id": "lec05q20",
"lesson": "Lecture 5",
"question": "In the 'Knowledge Era', the management of technology is driven by digital tools. Which organizational cultures are best suited for this era?",
"options": [
"Consistency and Involvement",
"Achievement and Adaptability",
"Consistency and Achievement",
"Involvement and Adaptability"
],
"correctAnswerIndex": 1,
"explanation": "The table 'Organizational Structure, Culture and MOT' aligns the Knowledge Era with Achievement and Adaptability cultures."
},
{
"id": "lec05q21",
"lesson": "Lecture 5",
"question": "Which of the following is an implication for MOT in modern organizations regarding hierarchy?",
"options": [
"Shift toward a tall hierarchy to centralize control",
"Shift toward a flat hierarchy with decentralized decisions",
"Shift toward a functional hierarchy with strict silos",
"Shift toward a manual hierarchy with reduced automation"
],
"correctAnswerIndex": 1,
"explanation": "Modern organizations imply a Flat Organizational Hierarchy with decentralized decision-making."
},
{
"id": "lec05q22",
"lesson": "Lecture 5",
"question": "Why do modern organizations increasingly adopt Team or Network-based structures?",
"options": [
"To enable horizontal coordination in a flat hierarchy",
"To enforce vertical reporting in a tall hierarchy",
"To reduce the need for skilled technology workers",
"To centralize authority at the headquarters level"
],
"correctAnswerIndex": 0,
"explanation": "Team or Network structures are adopted to enable horizontal coordination in a flat organizational hierarchy."
},
{
"id": "lec05q23",
"lesson": "Lecture 5",
"question": "An 'Adaptive Organizational Culture' is specifically recommended for modern organizations to:",
"options": [
"Maintain traditional values in a static market",
"Develop an agile business in a rapidly changing environment",
"Ensure strict compliance with internal accounting rules",
"Reduce the span of control for senior management"
],
"correctAnswerIndex": 1,
"explanation": "Adaptive culture is needed to enable a strong, flexible culture that develops an agile business in a rapidly changing environment."
},
{
"id": "lec05q24",
"lesson": "Lecture 5",
"question": "In the context of organizational structure, what does 'Span of Control' refer to?",
"options": [
"The number of levels in the organizational hierarchy",
"The number of employees reporting to a superior",
"The total number of departments in the company",
"The geographic reach of the organization's sales"
],
"correctAnswerIndex": 1,
"explanation": "Span of Control is defined as the number of organizational members reporting to a superior."
},
{
"id": "lec05q25",
"lesson": "Lecture 5",
"question": "Which concept ensures that an organization avoids conflicting instructions by having an employee report to only one boss?",
"options": [
"Scalar Principle",
"Unity of Command",
"Span of Control",
"Decentralization"
],
"correctAnswerIndex": 1,
"explanation": "Unity of Command dictates that an employee should report to only one superior to avoid conflicting orders."
},
{
"id": "lec05q26",
"lesson": "Lecture 5",
"question": "A CEO decides to shift the company from a 'Tall' hierarchy to a 'Flat' hierarchy. What action must they likely take?",
"options": [
"Decrease the span of control for managers",
"Centralize all major decision-making powers",
"Decentralize authority to lower organizational layers",
"Remove the chain of command entirely"
],
"correctAnswerIndex": 2,
"explanation": "Decentralization (vesting authority in lower layers) leads to a flat organizational hierarchy."
},
{
"id": "lec05q27",
"lesson": "Lecture 5",
"question": "Visual representations of organizational structure, such as the boxes-and-lines diagrams used in reports, are known as:",
"options": [
"Organizational Maps",
"Organizational Charts",
"Structural Blueprints",
"Hierarchy Graphs"
],
"correctAnswerIndex": 1,
"explanation": "The visual representation of the organizational structure is known as an organizational chart."
},
{
"id": "lec05q28",
"lesson": "Lecture 5",
"question": "In the 'Agriculture Era', the MOT was manual. Which organizational culture was most associated with this period?",
"options": [
"Consistency Culture",
"Involvement Culture",
"Achievement Culture",
"Adaptability Culture"
],
"correctAnswerIndex": 0,
"explanation": "The 'Organizational Structure, Culture and MOT' table associates the Agriculture Era with Consistency culture."
},
{
"id": "lec05q29",
"lesson": "Lecture 5",
"question": "Which of the following best describes the 'Scalar Principle' within the Chain of Command?",
"options": [
"A clearly defined line of authority that includes all employees",
"The limit on the number of subordinates a manager can supervise",
"The right to advise others without having direct authority",
"The obligation to report outcomes to a specific stakeholder"
],
"correctAnswerIndex": 0,
"explanation": "The Scalar Principle refers to a clearly defined, unbroken line of authority covering all organizational members."
},
{
"id": "lec05q30",
"lesson": "Lecture 5",
"question": "If a company prioritizes 'Involvement Culture', where is its strategic focus placed?",
"options": [
"On the external environment and competitors",
"On the internal environment and employees",
"On the global stock market trends",
"On government regulations and compliance"
],
"correctAnswerIndex": 1,
"explanation": "Involvement Culture has an internal strategic focus (on employees) within a rapidly changing environment."
  },

  // --- LECTURE 6 ---
  {
    "id": "lec06q01",
    "lesson": "Lecture 6",
    "question": "According to Daft's definition of organizational structure, which of the following is NOT one of the three key components?",
    "options": [
      "The set of formal tasks assigned to individuals and departments",
      "The informal social networks that develop between employees",
      "The design of systems to ensure effective coordination across departments",
      "The formal reporting relationships including lines of authority"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Daft defines structure as formal tasks, reporting relationships, and coordination systems. Informal social networks are part of the informal organization or culture, not the formal structure definition."
  },
  {
    "id": "lec06q02",
    "lesson": "Lecture 6",
    "question": "A production manager has the right to issue direct orders to assembly line workers to stop production. An HR manager advises the production manager on hiring practices but cannot command the line workers. This scenario best illustrates the difference between:",
    "options": [
      "Line Authority and Staff Authority",
      "Centralization and Decentralization",
      "Responsibility and Accountability",
      "Span of Control and Unity of Command"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Line authority is the power to command (make decisions), while staff authority is the power to advise or recommend, as seen in the HR manager's role."
  },
  {
    "id": "lec06q03",
    "lesson": "Lecture 6",
    "question": "Which structural feature specifically refers to the mechanism through which an employee must justify the outcomes of their authority and responsibility to a superior?",
    "options": [
      "Delegation",
      "Accountability",
      "Empowerment",
      "Span of Control"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Accountability is defined as the requirement to justify the outcomes of authority and responsibility to the superior."
  },
  {
    "id": "lec06q04",
    "lesson": "Lecture 6",
    "question": "In an organization, the 'Scalar Principle' dictates that there should be a clear definition of authority extending from the top to the bottom of the organization. This is a sub-component of which major structural feature?",
    "options": [
      "Span of Control",
      "Chain of Command",
      "Departmentalization",
      "Work Specialization"
    ],
    "correctAnswerIndex": 1,
    "explanation": "The Chain of Command is an unbroken line of authority; it must uphold the unity of command and the scalar principle."
  },
  {
    "id": "lec06q05",
    "lesson": "Lecture 6",
    "question": "A manager at a software firm supervises 15 developers directly. In structural terms, the number '15' represents the manager's:",
    "options": [
      "Line of Authority",
      "Level of Accountability",
      "Span of Control",
      "Degree of Centralization"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Span of Control is defined as the number of organizational members reporting to a superior."
  },
  {
    "id": "lec06q06",
    "lesson": "Lecture 6",
    "question": "If an organization vests the majority of its decision-making authority in the top layers of management, it is considered ________ and typically results in a ________ organizational hierarchy.",
    "options": [
      "Centralized; Flat",
      "Decentralized; Tall",
      "Centralized; Tall",
      "Decentralized; Flat"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Centralization vests authority in top layers, which leads to a tall organizational hierarchy. Decentralization leads to a flat hierarchy."
  },
  {
    "id": "lec06q07",
    "lesson": "Lecture 6",
    "question": "What is the primary distinction between 'Delegation' and 'Empowerment' regarding the transfer of authority?",
    "options": [
      "Delegation transfers authority to non-managerial layers; Empowerment to managerial layers.",
      "Delegation transfers authority to the next managerial layer; Empowerment to non-managerial layers.",
      "Delegation involves strategic tasks; Empowerment involves only operational tasks.",
      "Delegation is permanent; Empowerment is temporary and project-based."
    ],
    "correctAnswerIndex": 1,
    "explanation": "The slides define Delegation as transfer to the next immediate managerial layer, while Empowerment is transfer to the non-managerial layer."
  },
  {
    "id": "lec06q08",
    "lesson": "Lecture 6",
    "question": "A manufacturing company groups its activities into departments such as Engineering, Marketing, Finance, and Manufacturing based on skill similarities. Which type of organizational structure is this?",
    "options": [
      "Divisional Structure",
      "Functional Structure",
      "Network Structure",
      "Team-Based Structure"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Functional Structure is structured according to similarities in skills, expertise, work activities, and resources used."
  },
  {
    "id": "lec06q09",
    "lesson": "Lecture 6",
    "question": "Which of the following is a key characteristic of a Divisional Structure?",
    "options": [
      "It establishes strong vertical coordination within specific skill sets.",
      "It groups employees based on similarities in their technical expertise.",
      "It establishes strong horizontal coordination with separate functional units per division.",
      "It relies on outsourcing major functions to separate brokered companies."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Divisional structure establishes strong horizontal coordination, and each division (based on output/customer/geo) has its own functional structure."
  },
  {
    "id": "lec06q10",
    "lesson": "Lecture 6",
    "question": "A multinational corporation has separate self-contained units for the 'North American Market' and the 'European Market.' This is an example of structuring by:",
    "options": [
      "Functional Expertise",
      "Geographical Segments",
      "Network Alliances",
      "Vertical Integration"
    ],
    "correctAnswerIndex": 1,
    "explanation": "This is a Divisional Structure structured according to geographical segments."
  },
  {
    "id": "lec06q11",
    "lesson": "Lecture 6",
    "question": "In a Team Structure, how are activities primarily coordinated?",
    "options": [
      "Through a strong vertical chain of command from the CEO down.",
      "By outsourcing major functions to external vendors.",
      "Through horizontal teams that often work directly with customers.",
      "By separating the workforce into strict functional silos."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Team Structure is structured by horizontal teams that coordinate activities and work directly with customers."
  },
  {
    "id": "lec06q12",
    "lesson": "Lecture 6",
    "question": "Which organizational structure is characterized by a small headquarters that acts as a broker to coordinate major functions outsourced to separate companies?",
    "options": [
      "Divisional Structure",
      "Network Structure",
      "Matrix Structure",
      "Functional Structure"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Network Structure is structured by outsourcing major functions to separate companies brokered by a small headquarters."
  },
  {
    "id": "lec06q13",
    "lesson": "Lecture 6",
    "question": "The 'Iceberg' model of organizational culture suggests that:",
    "options": [
      "The majority of culture is visible through symbols and ceremonies.",
      "Fundamental values and beliefs are invisible but drive the visible manifestations.",
      "Organizational culture is rigid and cannot be adapted to the environment.",
      "Culture is only relevant to top management and not the lower levels."
    ],
    "correctAnswerIndex": 1,
    "explanation": "The Iceberg model indicates that fundamental values are underwater (invisible), understood only through visible manifestations like symbols and stories."
  },
  {
    "id": "lec06q14",
    "lesson": "Lecture 6",
    "question": "Which of the following represents a 'visible manifestation' of organizational culture according to the lecture?",
    "options": [
      "Underlying assumptions",
      "Deeply held beliefs",
      "Office ceremonies",
      "Unspoken norms"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Visible manifestations listed include symbols, stories, heroes, slogans, and ceremonies."
  },
  {
    "id": "lec06q15",
    "lesson": "Lecture 6",
    "question": "In the framework of Organizational Culture types, a culture that focuses on the **External** environment and requires **Flexibility** is known as:",
    "options": [
      "Achievement Culture",
      "Consistency Culture",
      "Adaptability Culture",
      "Involvement Culture"
    ],
    "correctAnswerIndex": 2,
    "explanation": "According to the matrix, External focus + Flexibility = Adaptability Culture."
  },
  {
    "id": "lec06q16",
    "lesson": "Lecture 6",
    "question": "A company operates in a stable environment but aggressively focuses on beating competitors and achieving measurable goals. It values hard work and competitiveness. This best describes:",
    "options": [
      "Adaptability Culture",
      "Achievement Culture",
      "Involvement Culture",
      "Consistency Culture"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Achievement Culture is characterized by an External focus and a Stable environment, emphasizing competitiveness and hard work."
  },
  {
    "id": "lec06q17",
    "lesson": "Lecture 6",
    "question": "Which culture type focuses internally on employees and emphasizes cooperation, equality, and meeting the needs of the workforce in a rapidly changing environment?",
    "options": [
      "Adaptability Culture",
      "Achievement Culture",
      "Involvement Culture",
      "Consistency Culture"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Involvement Culture has an Internal focus and operates in a Flexible/Rapidly changing environment, focusing on cooperation and equality."
  },
  {
    "id": "lec06q18",
    "lesson": "Lecture 6",
    "question": "A government agency prioritizes methodical behavior, rationality, and strict adherence to rules. It operates in a stable environment with an internal focus. This exemplifies:",
    "options": [
      "Adaptability Culture",
      "Achievement Culture",
      "Involvement Culture",
      "Consistency Culture"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Consistency Culture focuses on the Internal environment and Stability, encouraging methodical and rational behaviors."
  },
  {
    "id": "lec06q19",
    "lesson": "Lecture 6",
    "question": "Which of the following is a critical requirement for sustaining a 'High Performance Organizational Culture'?",
    "options": [
      "Prioritizing business performance significantly over cultural values.",
      "Aligning cultural values with the day-to-day operations and strategy.",
      "Maintaining a rigid hierarchy that resists environmental changes.",
      "Focusing exclusively on internal consistency and employee comfort."
    ],
    "correctAnswerIndex": 1,
    "explanation": "High Performance Organizational Culture aligns values with day-to-day operations and strategy, paying attention to both values and performance."
  },
  {
    "id": "lec06q20",
    "lesson": "Lecture 6",
    "question": "In the evolution of Management of Technology (MOT), the 'Industrial Era' is associated with which type of organizational structure?",
    "options": [
      "Simple Structure",
      "Functional and Divisional Structure",
      "Matrix and Network Structure",
      "Team-Based Structure"
    ],
    "correctAnswerIndex": 1,
    "explanation": "The table 'Organizational Structure, Culture and MOT' links the Industrial Era to Functional, Divisional, and Matrix structures."
  },
  {
    "id": "lec06q21",
    "lesson": "Lecture 6",
    "question": "Which combination best describes the 'Knowledge Era' across the dimensions of MOT, Structure, and Culture?",
    "options": [
      "Manual MOT; Simple Structure; Consistency Culture",
      "Automation MOT; Divisional Structure; Involvement Culture",
      "Digital MOT; Network/Team Structure; Adaptability Culture",
      "Digital MOT; Functional Structure; Consistency Culture"
    ],
    "correctAnswerIndex": 2,
    "explanation": "The Knowledge Era is linked to Digital MOT, Matrix/Team/Network structures, and Achievement/Adaptability cultures."
  },
  {
    "id": "lec06q22",
    "lesson": "Lecture 6",
    "question": "The 'Agriculture Era' of organization was characterized by which type of Management of Technology (MOT)?",
    "options": [
      "Digital",
      "Automation using Machinery",
      "Manual",
      "Networked"
    ],
    "correctAnswerIndex": 2,
    "explanation": "The Agriculture Era is linked to 'Manual' MOT in the comparison table."
  },
  {
    "id": "lec06q23",
    "lesson": "Lecture 6",
    "question": "Modern organizations increasingly adopt a 'Flat Organizational Hierarchy'. What is the primary enabler of this structure?",
    "options": [
      "Strict centralization of all decision-making power.",
      "Decentralized decision-making via delegation and empowerment.",
      "Implementation of tall vertical chains of command.",
      "Reduction of horizontal coordination between teams."
    ],
    "correctAnswerIndex": 1,
    "explanation": "A Flat Organizational Hierarchy is enabled by a decentralized decision-making system through delegation and empowerment."
  },
  {
    "id": "lec06q24",
    "lesson": "Lecture 6",
    "question": "Why do modern organizations often prefer Team or Network-based structures over traditional Functional structures?",
    "options": [
      "To enable horizontal coordination in a flat hierarchy.",
      "To increase the number of management layers.",
      "To ensure authority remains vested only at the top.",
      "To reduce the need for adaptability in the market."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Team or Network-based structures are used to enable horizontal coordination in a flat organizational hierarchy."
  },
  {
    "id": "lec06q25",
    "lesson": "Lecture 6",
    "question": "What is the primary goal of fostering an 'Adaptive Organizational Culture' in a modern business context?",
    "options": [
      "To maintain strict adherence to traditional methods.",
      "To develop an agile business in a rapidly changing environment.",
      "To create a tall hierarchy with centralized control.",
      "To ensure internal consistency and stability above all else."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Adaptive Organizational Culture is designed to enable a strong, flexible culture that develops an agile business in a rapidly changing environment."
  },
  {
    "id": "lec06q26",
    "lesson": "Lecture 6",
    "question": "Which feature of organizational structure is defined as 'Formal and legitimate power of an organizational member to make decisions'?",
    "options": [
      "Responsibility",
      "Authority",
      "Accountability",
      "Span of Control"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Authority is defined as the formal and legitimate power of an organizational member to make decisions."
  },
  {
    "id": "lec06q27",
    "lesson": "Lecture 6",
    "question": "In the context of the 'Organizational Structure, Culture and MOT' matrix, the 'Involvement' culture is most closely associated with which Era?",
    "options": [
      "Agriculture Era",
      "Industrial Era",
      "Knowledge Era",
      "Digital Era"
    ],
    "correctAnswerIndex": 1,
    "explanation": "The matrix links 'Involvement' culture to the Industrial Era."
  },
  {
    "id": "lec06q28",
    "lesson": "Lecture 6",
    "question": "Which of the following best describes the 'Consistency' culture type?",
    "options": [
      "External focus, Flexible environment, encourages risk-taking.",
      "External focus, Stable environment, encourages competitiveness.",
      "Internal focus, Flexible environment, encourages cooperation.",
      "Internal focus, Stable environment, encourages methodical behavior."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Consistency culture is defined by Internal focus + Stable environment, encouraging methodical/rational behaviors."
  },
  {
    "id": "lec06q29",
    "lesson": "Lecture 6",
    "question": "A startup outsources its manufacturing to China, customer service to India, and logistics to a third-party provider, while keeping product design in-house. This structure is an example of:",
    "options": [
      "Functional Structure",
      "Divisional Structure",
      "Network Structure",
      "Hierarchical Structure"
    ],
    "correctAnswerIndex": 2,
    "explanation": "This is a classic Network Structure, where major functions are outsourced and brokered by a central organization."
  },
  {
    "id": "lec06q30",
    "lesson": "Lecture 6",
    "question": "According to the lecture, what role does technology play in modern organizational structures?",
    "options": [
      "It forces organizations to return to manual processes.",
      "It restricts the ability to delegate authority.",
      "It enables new structures and cultures like flat hierarchies.",
      "It has no significant impact on organizational structure."
    ],
    "correctAnswerIndex": 2,
    "explanation": "The Lesson Outcomes state the goal is to explain the role of technology in 'enabling modern organizational structures and cultures'."
  },

  // --- LECTURE 7 ---
  {
    "id": "lec06q01",
    "lesson": "Lecture 6",
    "question": "According to Schumpeter's classification of innovation, which of the following is NOT listed as one of the five distinct types?",
    "options": [
      "Introduction of a new method of production (Process)",
      "Opening of a new market or industry structure (Organization)",
      "Conquest of a new source of supply of raw materials (Input)",
      "Relocation of the user's perception of a product (Position)"
    ],
    "correctAnswerIndex": 3,
    "explanation": "Schumpeter's classification includes Product, Process, Input, Technology, and Organization. 'Position' innovation belongs to the '4 Ps' classification, not Schumpeter's."
  },
  {
    "id": "lec06q02",
    "lesson": "Lecture 6",
    "question": "A company decides to market its existing high-energy sports drink as a morning recovery beverage for tired office workers. Which of the '4 Ps' of innovation does this scenario best represent?",
    "options": [
      "Product Innovation",
      "Process Innovation",
      "Position Innovation",
      "Paradigm Innovation"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Position Innovation involves the relocation of the user's perception about a certain product, such as changing the target context or market segment without necessarily changing the technical product itself."
  },
  {
    "id": "lec06q03",
    "lesson": "Lecture 6",
    "question": "Which of the following scenarios best illustrates 'Paradigm Innovation'?",
    "options": [
      "A car manufacturer improving the fuel efficiency of its engine by 15%.",
      "A bookstore shifting its business model from physical retail to digital e-books.",
      "A fast-food chain optimizing its supply chain to reduce delivery times.",
      "A smartphone company releasing a new model with a higher resolution camera."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Paradigm Innovation relates to changing the mental models and redefining what the business is all about, such as shifting from selling physical goods to digital content."
  },
  {
    "id": "lec06q04",
    "lesson": "Lecture 6",
    "question": "In the context of the 'Disruptive Innovation Model', which group is most likely to emerge as the winner when 'Sustaining Innovations' are introduced?",
    "options": [
      "New entrants with flexible structures",
      "Incumbent companies with established markets",
      "Startups focusing on low-end markets",
      "Non-consumers entering the market for the first time"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Sustaining innovations involve better products sold with higher margins to demanding customers; in this arena, incumbents typically win due to their resources and existing customer base."
  },
  {
    "id": "lec06q05",
    "lesson": "Lecture 6",
    "question": "What is the primary characteristic of 'Disruptive Innovation' regarding its target market and product nature?",
    "options": [
      "It offers advanced performance features for the most profitable customers.",
      "It targets demanding customers with high-margin, complex products.",
      "It offers simpler, cheaper products targeted at new or less demanding customers.",
      "It focuses on maintaining the status quo by slightly improving existing goods."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Disruptive innovation involves commercializing simpler, more user-friendly, and cheaper products targeted at new or less demanding customers."
  },
  {
    "id": "lec06q06",
    "lesson": "Lecture 6",
    "question": "Clayton Christensen's model describes 'New-market disruption' as competing with which of the following?",
    "options": [
      "High-end consumers of the leading existing product",
      "Non-consumption, attracting less sophisticated customers",
      "Direct competitors in the same premium market tier",
      "Government regulators within the established industry"
    ],
    "correctAnswerIndex": 1,
    "explanation": "New-market disruption competes with 'non-consumption' by making products (like early PCs or transistor radios) accessible to less sophisticated customers who previously could not use or afford them."
  },
  {
    "id": "lec06q07",
    "lesson": "Lecture 6",
    "question": "How does 'Low-end disruption' typically motivate incumbent companies to react?",
    "options": [
      "It forces them to lower their prices across all product lines immediately.",
      "It motivates them to leave the lower tiers of the market to the disruptor.",
      "It encourages them to acquire the disrupting company immediately.",
      "It pushes them to stop all R&D into sustaining innovations."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Low-end disruption focuses on lower tiers of the main market (e.g., discount stores), often motivating incumbents to flee those low-margin segments."
  },
  {
    "id": "lec06q08",
    "lesson": "Lecture 6",
    "question": "Which statement accurately reflects the philosophy of 'Closed Innovation' regarding human resources?",
    "options": [
      "We must work with clever people both within and outside our company.",
      "All the best people in the field are working for us internally.",
      "External experts are essential for validating our internal research.",
      "Workforce mobility is high and should be encouraged for idea exchange."
    ],
    "correctAnswerIndex": 1,
    "explanation": "The Closed Innovation mindset believes 'All the best people are working for us,' whereas Open Innovation acknowledges that smart people exist both inside and outside the firm."
  },
  {
    "id": "lec06q09",
    "lesson": "Lecture 6",
    "question": "In an 'Open Innovation' model, how is the role of Research and Development (R&D) viewed compared to a 'Closed' model?",
    "options": [
      "R&D is valuable only if it discovers, develops, and ships the product internally.",
      "External R&D can create significant value if the firm has absorption capacity.",
      "Internal R&D should be eliminated in favor of purchasing all intellectual property.",
      "R&D is strictly for defensive purposes to prevent competitors from entering."
    ],
    "correctAnswerIndex": 1,
    "explanation": "In Open Innovation, external R&D can create remarkable value, provided the company has the 'absorption capacity' to utilize it, whereas Closed Innovation relies solely on internal discovery."
  },
  {
    "id": "lec06q10",
    "lesson": "Lecture 6",
    "question": "What is the primary criterion for success in a 'Closed Innovation' framework?",
    "options": [
      "Building a better business model than the competition.",
      "Getting the innovation to the market first.",
      "Licensing the most intellectual property to others.",
      "Maximizing the use of external venture capital."
    ],
    "correctAnswerIndex": 1,
    "explanation": "In Closed Innovation, the winner is the one who 'gets the innovation to the market first.' In Open Innovation, building a better business model is considered more important."
  },
  {
    "id": "lec06q11",
    "lesson": "Lecture 6",
    "question": "How does the approach to Intellectual Property (IP) differ between Closed and Open Innovation?",
    "options": [
      "Closed Innovation encourages licensing IP to competitors to expand the market.",
      "Open Innovation requires strict control of IP to prevent competitor advantage.",
      "Closed Innovation controls IP strictly so competitors cannot use it.",
      "Open Innovation avoids filing patents to allow free use of ideas."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Closed Innovation mandates strict control of IP to prevent competitors from using it. Open Innovation allows for profiting from others using your IP (licensing out) and buying IP from others (licensing in)."
  },
  {
    "id": "lec06q12",
    "lesson": "Lecture 6",
    "question": "Which of the following characteristics is associated with the environment of 'Open Innovation'?",
    "options": [
      "Low workforce mobility and lifetime employment.",
      "Low role of venture capital in funding new ideas.",
      "Universities viewed as unimportant sources of ideas.",
      "Active venture capital and high workforce mobility."
    ],
    "correctAnswerIndex": 3,
    "explanation": "Open Innovation environments are characterized by high workforce mobility, active venture capital, and many new businesses, contrasting with the low mobility and weak VC role in Closed Innovation."
  },
  {
    "id": "lec06q13",
    "lesson": "Lecture 6",
    "question": "A company scores high in 'Strategy and Planning,' 'Marketing,' and 'Logistics.' What does this indicate according to the lecture?",
    "options": [
      "The company has a high potential for innovation.",
      "The company is utilizing a Closed Innovation model.",
      "The company is focusing solely on Radical Innovation.",
      "The company has poor Technological Process capabilities."
    ],
    "correctAnswerIndex": 0,
    "explanation": "A company with high innovation potential scores high in areas including Strategy, Marketing, Logistics, Technological Process, Quality Management, and HR."
  },
  {
    "id": "lec06q14",
    "lesson": "Lecture 6",
    "question": "In the Innovation Dimension Matrix, an innovation that utilizes 'Modified Technology' to provide 'Modified Benefits' to the user is classified as:",
    "options": [
      "Radical Innovation",
      "Incremental Innovation",
      "Tech-Oriented Innovation",
      "New Application Innovation"
    ],
    "correctAnswerIndex": 1,
    "explanation": "According to the Innovation Dimension matrix, the intersection of Modified Technology and Modified Benefits is 'Incremental Innovation'."
  },
  {
    "id": "lec06q15",
    "lesson": "Lecture 6",
    "question": "According to the Innovation Dimension Matrix, what type of innovation occurs when 'New Technology' is used to deliver 'New Benefits' to the user?",
    "options": [
      "Incremental Innovation",
      "Tech-Oriented Innovation",
      "New Applications",
      "Radical Innovation"
    ],
    "correctAnswerIndex": 3,
    "explanation": "The intersection of New Technology and New Benefits in the matrix represents 'Radical Innovation'."
  },
  {
    "id": "lec06q16",
    "lesson": "Lecture 6",
    "question": "If a company uses 'New Technology' but offers only 'Modified Benefits' to the user, how is this innovation classified?",
    "options": [
      "Tech-Oriented Innovation",
      "Incremental Innovation",
      "Radical Innovation",
      "New Applications"
    ],
    "correctAnswerIndex": 0,
    "explanation": "New Technology combined with Modified Benefits is classified as 'Tech Oriented' innovation in the provided matrix."
  },
  {
    "id": "lec06q17",
    "lesson": "Lecture 6",
    "question": "Radical innovation is often defined by specific performance metrics. Which of the following is one of these characteristics?",
    "options": [
      "A 10% reduction in production costs.",
      "Improvements in known performance features of five times or greater.",
      "Minor reconfiguration of existing forms or technologies.",
      "A focus on the same set of performance features as competitors."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Radical innovation characteristics include improvements in known performance features of five times (5x) or greater, or a 30% or greater reduction in cost."
  },
  {
    "id": "lec06q18",
    "lesson": "Lecture 6",
    "question": "Which of the following terms is considered a synonym for 'Radical Innovation' in the broader classification?",
    "options": [
      "Continuous Innovation",
      "Sustaining Innovation",
      "Discontinuous Innovation",
      "Process Innovation"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Radical Innovation is also referred to as 'Breakthrough Innovation' or 'Discontinuous Innovation'."
  },
  {
    "id": "lec06q19",
    "lesson": "Lecture 6",
    "question": "Which of the following best describes 'Incremental Innovation'?",
    "options": [
      "It exploits existing forms or technologies to improve something that already exists.",
      "It introduces an entirely new set of performance features to the world.",
      "It typically results in a cost reduction of 30% or more.",
      "It upsets the organization's existing business model entirely."
    ],
    "correctAnswerIndex": 0,
    "explanation": "Incremental innovation exploits existing forms or technologies, improving upon what already exists (e.g., Intel Core i3 to i5)."
  },
  {
    "id": "lec06q20",
    "lesson": "Lecture 6",
    "question": "A massive reduction in cost is a characteristic of Radical Innovation. What is the specific threshold mentioned in the lecture?",
    "options": [
      "A 10% or greater reduction in cost.",
      "A 20% or greater reduction in cost.",
      "A 30% or greater reduction in cost.",
      "A 50% or greater reduction in cost."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Slide 24 specifies that Radical Innovation is characterized by a '30% or greater reduction in cost'."
  },
  {
    "id": "lec06q21",
    "lesson": "Lecture 6",
    "question": "Which sequence correctly represents the initial stages of the Detailed Innovation Process?",
    "options": [
      "Discovery -> Research -> Development",
      "Research -> Discovery -> Development",
      "Development -> Research -> Discovery",
      "Research -> Development -> Discovery"
    ],
    "correctAnswerIndex": 1,
    "explanation": "The Detailed Innovation Process flow chart on Slide 37 lists the order as Research -> Discovery -> Development."
  },
  {
    "id": "lec06q22",
    "lesson": "Lecture 6",
    "question": "In the context of Successful Innovation characteristics, what is meant by 'Systematic collection of all impulses'?",
    "options": [
      "Gathering all financial data from competitors.",
      "Collecting all urges or ideas that could lead to innovation.",
      "Compiling a list of all employees who oppose change.",
      "Systematically buying all patents available in the market."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Successful innovation involves the 'Systematic collection of all impulses (urges) that could lead to innovation.'"
  },
  {
    "id": "lec06q23",
    "lesson": "Lecture 6",
    "question": "Which of the following is NOT listed as a characteristic of successful innovation?",
    "options": [
      "Proper rate of risk-taking.",
      "Strict adherence to a zero-failure policy.",
      "Cooperation with external experts like universities.",
      "Ability to finance the innovation activities."
    ],
    "correctAnswerIndex": 1,
    "explanation": "Successful innovation requires a 'Proper rate of risk-taking,' not a zero-failure policy. Cooperation and financing are also listed as positive characteristics."
  },
  {
    "id": "lec06q24",
    "lesson": "Lecture 6",
    "question": "Which step immediately follows 'Production' in the Detailed Innovation Process?",
    "options": [
      "Patenting and Approval",
      "Development",
      "Marketing",
      "Adoption"
    ],
    "correctAnswerIndex": 2,
    "explanation": "According to the process chart on Slide 37, 'Marketing' comes immediately after 'Production'."
  },
  {
    "id": "lec06q25",
    "lesson": "Lecture 6",
    "question": "In the comparison between Closed and Open Innovation, which statement is true regarding the 'Market Winner'?",
    "options": [
      "Closed: The winner is who has the best business model.",
      "Open: The winner is who gets to market first.",
      "Closed: The winner is who gets to market first.",
      "Open: The winner is who generates the most internal ideas."
    ],
    "correctAnswerIndex": 2,
    "explanation": "In Closed Innovation, the winner is who gets to market first. In Open Innovation, the winner is who develops the better business model."
  },
  {
    "id": "lec06q26",
    "lesson": "Lecture 6",
    "question": "The term 'Disruptive Technology' is primarily used to identify which type of innovation?",
    "options": [
      "Incremental technical innovations.",
      "Radical technical innovations.",
      "Process-oriented administrative changes.",
      "Marketing and positioning changes."
    ],
    "correctAnswerIndex": 1,
    "explanation": "The lecture states that the term 'Disruptive Technology' is used to identify radical technical innovations."
  },
  {
    "id": "lec06q27",
    "lesson": "Lecture 6",
    "question": "Which of the following represents an example of 'Process Innovation'?",
    "options": [
      "Introducing a new smartphone with a foldable screen.",
      "Changing the brand logo to appeal to younger audiences.",
      "Implementing an automated assembly line to speed up production.",
      "Shifting the company focus from hardware to software services."
    ],
    "correctAnswerIndex": 2,
    "explanation": "Process innovation involves innovating the way in which products are created and/or delivered, such as implementing a new assembly line method."
  },
  {
    "id": "lec06q28",
    "lesson": "Lecture 6",
    "question": "The transition from Incandescent Bulbs to CFL and then to LED is an example used to illustrate:",
    "options": [
      "Organizational restructuring.",
      "Technological innovation progression.",
      "The failure of open innovation.",
      "Marketing positioning strategies."
    ],
    "correctAnswerIndex": 1,
    "explanation": "This sequence is shown under 'Other Types of Innovation - Technology' and illustrates the progression of technological innovation."
  },
  {
    "id": "lec06q29",
    "lesson": "Lecture 6",
    "question": "Which classification includes 'Input' (conquest of a new source of supply) as a specific type of innovation?",
    "options": [
      "The 4 Ps of Innovation",
      "Christensen's Disruptive Model",
      "Schumpeter's Classification",
      "The Open Innovation Model"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Schumpeter's classification specifically lists 'Input' (new sources of supply) as one of the five types. The 4 Ps do not use this term."
  },
  {
    "id": "lec06q30",
    "lesson": "Lecture 6",
    "question": "What role does 'Absorption Capacity' play in the context of Open Innovation?",
    "options": [
      "It limits the amount of external capital a firm can accept.",
      "It allows a firm to effectively employ and value external R&D.",
      "It measures the physical storage space for inventory.",
      "It defines the maximum number of employees a firm can hire."
    ],
    "correctAnswerIndex": 1,
    "explanation": "In Open Innovation, external R&D can create value, but to employ it, the firm needs 'absorption capacity' (often built through internal R&D) to understand and integrate it."
  },

  // --- LECTURE 8 ---
  {
"id": "lec08q01",
"lesson": "Lecture 8",
"question": "An employee consistently takes longer breaks than authorized and intentionally works slowly to delay project completion. How is this behavior classified in the workplace deviance typology?",
"options": [
"Production Deviance",
"Property Deviance",
"Political Deviance",
"Personal Aggression"
],
"correctAnswerIndex": 0,
"explanation": "Production deviance is unethical behavior that hurts the quality and quantity of work produced, such as leaving early, taking excessive breaks, or working slowly."
},
{
"id": "lec08q02",
"lesson": "Lecture 8",
"question": "Which of the following scenarios best illustrates 'Property Deviance' within an organization?",
"options": [
"Spreading malicious rumors about a coworker.",
"Accepting kickbacks from a supplier for a deal.",
"Showing favoritism to specific team members.",
"Verbally abusing a subordinate during a meeting."
],
"correctAnswerIndex": 1,
"explanation": "Property deviance is unethical behavior aimed at the organization's property or products, such as sabotaging equipment, stealing, or accepting kickbacks."
},
{
"id": "lec08q03",
"lesson": "Lecture 8",
"question": "A manager consistently blames specific employees for team failures and spreads gossip to undermine their credibility. This behavior falls under which category of workplace deviance?",
"options": [
"Minor Organizational Deviance",
"Serious Organizational Deviance",
"Minor Interpersonal Deviance",
"Serious Interpersonal Deviance"
],
"correctAnswerIndex": 2,
"explanation": "Political deviance (gossiping, blaming, favoritism) is classified as Minor Interpersonal deviance in the typology of workplace deviance."
},
{
"id": "lec08q04",
"lesson": "Lecture 8",
"question": "Under the U.S. Sentencing Commission Guidelines, how is the total fine for a corporate offense calculated?",
"options": [
"Multiplying the base fine by the culpability score.",
"Adding the base fine to the company's annual revenue.",
"Multiplying the culpability score by the number of employees.",
"Adding the base fine to the judge's discretionary penalty."
],
"correctAnswerIndex": 0,
"explanation": "The total fine is calculated by multiplying the base fine (determined by the level of offense) by the culpability score (determined by the judge assessing blame)."
},
{
"id": "lec08q05",
"lesson": "Lecture 8",
"question": "Which of the following actions represents the 'Delegate' step in a formal compliance program?",
"options": [
"Establishing standards and procedures.",
"Assigning upper-level managers to be in charge.",
"Training employees on standards and procedures.",
"Encouraging employees to report violations."
],
"correctAnswerIndex": 1,
"explanation": "The 'Delegate' step involves assigning decision-making authority only to ethical employees and placing upper-level managers in charge of the program."
},
{
"id": "lec08q06",
"lesson": "Lecture 8",
"question": "When evaluating the ethical intensity of a decision, what does 'Social Consensus' refer to?",
"options": [
"The time between the act and its consequences.",
"The total harm or benefit derived from the decision.",
"The agreement on whether the behavior is good or bad.",
"The distance between the decision maker and the victim."
],
"correctAnswerIndex": 2,
"explanation": "Social consensus is the extent of public agreement on whether a specific behavior is considered good or bad."
},
{
"id": "lec08q07",
"lesson": "Lecture 8",
"question": "A manager decides to lay off employees immediately rather than next month because the negative impact will be felt sooner. This consideration relates to which factor of ethical intensity?",
"options": [
"Probability of effect",
"Temporal immediacy",
"Concentration of effect",
"Proximity of effect"
],
"correctAnswerIndex": 1,
"explanation": "Temporal immediacy is the time interval between the act and the onset of its consequences."
},
{
"id": "lec08q08",
"lesson": "Lecture 8",
"question": "According to Kohlberg’s Stages of Moral Development, a manager operating at the 'Conventional' level would primarily be motivated by:",
"options": [
"Avoidance of physical punishment.",
"Exchange relationships and self-interest.",
"Adherence to societal expectations and laws.",
"Universal principles of justice and rights."
],
"correctAnswerIndex": 2,
"explanation": "At the Conventional level, individuals make decisions based on societal expectations (Stage 3: Good Boy/Nice Girl) and maintaining law and order (Stage 4)."
},
{
"id": "lec08q09",
"lesson": "Lecture 8",
"question": "A CEO refuses to exploit a legal loophole because it violates their internal principles of universal justice and rights. Which stage of moral development does this reflect?",
"options": [
"Preconventional Level",
"Conventional Level",
"Postconventional Level",
"Transactional Level"
],
"correctAnswerIndex": 2,
"explanation": "The Postconventional level involves following self-chosen ethical principles and protecting the rights of others, even if it conflicts with rules."
},
{
"id": "lec08q10",
"lesson": "Lecture 8",
"question": "Which ethical principle suggests that you should never take an action that does not result in the greater good for society?",
"options": [
"Principle of Personal Virtue",
"Principle of Distributive Justice",
"Principle of Utilitarian Benefits",
"Principle of Religious Injunctions"
],
"correctAnswerIndex": 2,
"explanation": "The Principle of Utilitarian Benefits states that one should never take an action that does not result in the greater good for society."
},
{
"id": "lec08q11",
"lesson": "Lecture 8",
"question": "A manager chooses not to implement a policy because it would disproportionately harm the lowest-paid employees. This decision aligns with the:",
"options": [
"Principle of Distributive Justice",
"Principle of Government Requirements",
"Principle of Long-term Self-interest",
"Principle of Individual Rights"
],
"correctAnswerIndex": 0,
"explanation": "The Principle of Distributive Justice states that one should never take action that harms the least fortunate among us in some way."
},
{
"id": "lec08q12",
"lesson": "Lecture 8",
"question": "The 'Principle of Personal Virtue' advises managers to make decisions based on the assumption that:",
"options": [
"Their actions will be reported on the evening news.",
"The law represents the minimum moral standard.",
"The action maximizes profit for shareholders.",
"The action protects the individual rights of others."
],
"correctAnswerIndex": 0,
"explanation": "The Principle of Personal Virtue suggests you should never do anything that is not honest, open, and truthful—often visualized as being comfortable if it were reported publicly."
},
{
"id": "lec08q13",
"lesson": "Lecture 8",
"question": "Which of the following is considered an 'Overt Integrity Test' during the selection and hiring process?",
"options": [
"A test measuring psychological traits like neuroticism.",
"A test asking directly about past illegal behavior.",
"A test assessing general cognitive problem solving.",
"A test evaluating technical skills for the specific job."
],
"correctAnswerIndex": 1,
"explanation": "Overt integrity tests directly ask applicants about their honesty and past behavior, whereas personality-based tests infer integrity from other traits."
},
{
"id": "lec08q14",
"lesson": "Lecture 8",
"question": "To create an ethical climate, which action is most critical for top management to demonstrate?",
"options": [
"Delegating all ethical decisions to HR departments.",
"Focusing exclusively on increasing quarterly profits.",
"Being active and committed to the ethics program.",
"Ignoring minor violations to maintain high morale."
],
"correctAnswerIndex": 2,
"explanation": "Creating an ethical climate requires top management to be active and committed to the ethics program and to act ethically themselves."
},
{
"id": "lec08q15",
"lesson": "Lecture 8",
"question": "According to the Shareholder Model of social responsibility, what is the organization's overriding goal?",
"options": [
"Long-term survival of the company.",
"Satisfying multiple corporate stakeholders.",
"Profit maximization for shareholders.",
"Contributing to community development."
],
"correctAnswerIndex": 2,
"explanation": "The Shareholder Model posits that the organization's overriding goal should be profit maximization for the benefit of shareholders."
},
{
"id": "lec08q16",
"lesson": "Lecture 8",
"question": "In the Stakeholder Model, which group is considered a 'Secondary Stakeholder' rather than a 'Primary Stakeholder'?",
"options": [
"Employees",
"Customers",
"Governments",
"Media"
],
"correctAnswerIndex": 3,
"explanation": "According to the Stakeholder Model diagram, Media, Special Interest Groups, and Trade Associations are Secondary Stakeholders. Employees, Customers, and Governments are Primary."
},
{
"id": "lec08q17",
"lesson": "Lecture 8",
"question": "A company strictly follows all environmental laws to avoid fines but does nothing beyond what is legally required. This fulfills which social responsibility?",
"options": [
"Economic responsibility",
"Legal responsibility",
"Ethical responsibility",
"Discretionary responsibility"
],
"correctAnswerIndex": 1,
"explanation": "Legal responsibility is the expectation to obey society’s laws and regulations. Doing only what is required by law falls into this category."
},
{
"id": "lec08q18",
"lesson": "Lecture 8",
"question": "Philanthropic acts, such as donating to local charities not related to the business, are classified under which type of social responsibility?",
"options": [
"Economic responsibility",
"Legal responsibility",
"Ethical responsibility",
"Discretionary responsibility"
],
"correctAnswerIndex": 3,
"explanation": "Discretionary responsibilities refer to social roles that a company fulfills beyond its economic, legal, and ethical responsibilities, such as philanthropy."
},
{
"id": "lec08q19",
"lesson": "Lecture 8",
"question": "A company admits responsibility for a product defect but does only the absolute minimum required to meet societal expectations. Which strategy is this?",
"options": [
"Reactive strategy",
"Defensive strategy",
"Accommodative strategy",
"Proactive strategy"
],
"correctAnswerIndex": 1,
"explanation": "A Defensive strategy involves admitting responsibility for a problem but doing the least required to meet societal expectations."
},
{
"id": "lec08q20",
"lesson": "Lecture 8",
"question": "Which strategy involves a company anticipating a problem before it occurs and doing more than what society expects to address it?",
"options": [
"Reactive strategy",
"Defensive strategy",
"Accommodative strategy",
"Proactive strategy"
],
"correctAnswerIndex": 3,
"explanation": "A Proactive strategy is when a company anticipates a problem before it occurs and does more than society’s expectations."
},
{
"id": "lec08q21",
"lesson": "Lecture 8",
"question": "Research on the relationship between social responsibility and economic performance suggests that:",
"options": [
"There is a significant trade-off between the two.",
"Social responsibility guarantees higher profits.",
"Socially responsible firms are immune to market downturns.",
"There is no trade-off; it often leads to increased profits."
],
"correctAnswerIndex": 3,
"explanation": "Slides state there is no trade-off between being socially responsible and economic performance; it is usually associated with increased profits, though not guaranteed."
},
{
"id": "lec08q22",
"lesson": "Lecture 8",
"question": "When defining the problem in an ethical decision-making model, what is a key question to ask?",
"options": [
"How much will this cost the company financially?",
"Can we hide this decision from the stakeholders?",
"How would you define the problem from the other side?",
"Will this decision increase the stock price immediately?"
],
"correctAnswerIndex": 2,
"explanation": "Step 1 of the practical model asks: 'How would you define the problem if you stood on the other side of the fence?'"
},
{
"id": "lec08q23",
"lesson": "Lecture 8",
"question": "In the context of Workplace Deviance, 'Employee Shrinkage' is another term used to describe:",
"options": [
"Production Deviance",
"Property Deviance",
"Political Deviance",
"Personal Aggression"
],
"correctAnswerIndex": 1,
"explanation": "Employee shrinkage (theft of company merchandise) is a specific form of Property Deviance listed under 'Stealing from company'."
},
{
"id": "lec08q24",
"lesson": "Lecture 8",
"question": "Which of the following is defined as the degree of concern people have about an ethical issue?",
"options": [
"Ethical Intensity",
"Moral Development",
"Social Consensus",
"Culpability Score"
],
"correctAnswerIndex": 0,
"explanation": "Ethical intensity is defined as the degree of concern people have about an ethical issue."
},
{
"id": "lec08q25",
"lesson": "Lecture 8",
"question": "A manager decides not to release a product because it violates a government safety regulation. This action is primarily driven by the:",
"options": [
"Principle of Religious Injunctions",
"Principle of Government Requirements",
"Principle of Distributive Justice",
"Principle of Long-term Self-interest"
],
"correctAnswerIndex": 1,
"explanation": "The Principle of Government Requirements states that the law represents the minimal moral standards of society, so one should never violate the law."
},
{
"id": "lec08q26",
"lesson": "Lecture 8",
"question": "What is the primary objective of a 'Reactive Strategy' regarding social responsibility?",
"options": [
"To anticipate future social problems.",
"To do less than society expects.",
"To accept full responsibility immediately.",
"To meet all legal and ethical norms."
],
"correctAnswerIndex": 1,
"explanation": "A Reactive strategy involves a company doing less than society expects and often denying responsibility."
},
{
"id": "lec08q27",
"lesson": "Lecture 8",
"question": "Under the US Sentencing Commission Guidelines, providing a 'Compliance Program' allows a company to:",
"options": [
"Avoid all legal prosecution entirely.",
"Reduce the culpability score and fines.",
"Replace the judge with an internal auditor.",
"Keep all internal investigations private."
],
"correctAnswerIndex": 1,
"explanation": "Guidelines impose smaller fines (via a lower culpability score) on companies that take proactive steps to encourage ethical behavior, such as compliance programs."
},
{
"id": "lec08q28",
"lesson": "Lecture 8",
"question": "Which factor of Ethical Intensity considers how many people are affected by an act?",
"options": [
"Concentration of effect",
"Probability of effect",
"Temporal immediacy",
"Social consensus"
],
"correctAnswerIndex": 0,
"explanation": "Concentration of effect refers to how the act affects the average person, often interpreted as the number of people affected."
},
{
"id": "lec08q29",
"lesson": "Lecture 8",
"question": "In the context of ethics training, what is the purpose of 'Identifying the constituents'?",
"options": [
"To determine who has been hurt or could be helped.",
"To calculate the financial cost of the unethical act.",
"To find a legal loophole to avoid punishment.",
"To assign blame to a specific department."
],
"correctAnswerIndex": 0,
"explanation": "Step 2 of the ethics model involves identifying constituents: 'Who has been hurt? Who could be hurt? Who could be helped?'"
},
{
"id": "lec08q30",
"lesson": "Lecture 8",
"question": "Which of the following behaviors is classified as 'Personal Aggression'?",
"options": [
"Lying about hours worked.",
"Wasting company resources.",
"Sexual harassment.",
"Showing favoritism."
],
"correctAnswerIndex": 2,
"explanation": "Personal Aggression includes hostile verbal and physical actions such as sexual harassment, verbal abuse, and endangering coworkers."
  },

  // --- LECTURE 10 ---
  {
    "id": "lec10q01",
    "lesson": "Lecture 10",
    "question": "Which concept describes the pattern where a new technology begins with a burst of creativity, reaches its performance limits, and is eventually replaced by a superior technology?",
    "options": [
      "The technology cycle",
      "The innovation stream",
      "The dominant design",
      "The compression approach"
    ],
    "correctAnswerIndex": 0,
    "explanation": "The technology cycle begins with the birth of a new technology and ends when it reaches its limits and is replaced by a newer technology."
  },
  {
    "id": "lec10q02",
    "lesson": "Lecture 10",
    "question": "In the context of the S-curve pattern of innovation, what characterizes the phase immediately following the initial slow progress?",
    "options": [
      "A decline in performance as the technology ages",
      "A rapid increase in performance with less effort",
      "A stagnation period where standards are debated",
      "A discontinuous change leading to a new curve"
    ],
    "correctAnswerIndex": 1,
    "explanation": "The S-curve is characterized by slow initial progress, followed by rapid progress, and finally slow progress again as limits are reached."
  },
  {
    "id": "lec10q03",
    "lesson": "Lecture 10",
    "question": "Which phase of an innovation stream is characterized by design competition and technological substitution?",
    "options": [
      "Discontinuous change",
      "Incremental change",
      "Technological lockout",
      "Dominant design"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Discontinuous change is characterized by design competition (technologies competing to set a standard) and technological substitution."
  },
  {
    "id": "lec10q04",
    "lesson": "Lecture 10",
    "question": "A market shifts from experimentation and intense competition to incremental change and lowering costs. What key event signals this transition?",
    "options": [
      "The emergence of a dominant design",
      "The onset of technological lockout",
      "The beginning of a technology cycle",
      "The start of discontinuous change"
    ],
    "correctAnswerIndex": 0,
    "explanation": "The emergence of a dominant design signals the shift from experimentation/competition to incremental change (lowering costs/improving function)."
  },
  {
    "id": "lec10q05",
    "lesson": "Lecture 10",
    "question": "What is the primary consequence for companies that bet on the wrong technology once a dominant design is established?",
    "options": [
      "Technological lockout",
      "Design competition",
      "Generational change",
      "Incremental innovation"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Technological lockout occurs when a new dominant design makes it difficult for companies selling alternative designs to sell their products."
  },
  {
    "id": "lec10q06",
    "lesson": "Lecture 10",
    "question": "According to the components of creative work environments, what is 'Flow'?",
    "options": [
      "A psychological state of effortlessness and absorption",
      "A management technique for compressing design steps",
      "A systematic approach to incremental product testing",
      "A process of shifting from old to new technologies"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Flow is defined as a psychological state of effortlessness where people become completely absorbed in what they are doing."
  },
  {
    "id": "lec10q07",
    "lesson": "Lecture 10",
    "question": "Which managerial approach is most appropriate during a period of discontinuous change in a highly uncertain environment?",
    "options": [
      "Experiential approach",
      "Compression approach",
      "Incremental approach",
      "Results-driven approach"
    ],
    "correctAnswerIndex": 0,
    "explanation": "The experiential approach is used to manage innovation during discontinuous change (highly uncertain environments)."
  },
  {
    "id": "lec10q08",
    "lesson": "Lecture 10",
    "question": "A company establishes a 'Skunkworks' team composed of engineers, marketers, and manufacturing specialists to speed up learning and integration. What is this team structure called?",
    "options": [
      "Multifunctional teams",
      "Independent standards board",
      "Compression planning group",
      "Results-driven task force"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Multifunctional teams include people from different departments to accelerate learning by integrating technical, marketing, and manufacturing activities."
  },
  {
    "id": "lec10q09",
    "lesson": "Lecture 10",
    "question": "In the Experiential Approach to innovation, what is the primary purpose of 'milestones'?",
    "options": [
      "To provide formal project review points",
      "To shorten the individual steps of design",
      "To delegate specific tasks to suppliers",
      "To freeze the design for mass production"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Milestones are formal project review points used in the experiential approach to assess progress."
  },
  {
    "id": "lec10q10",
    "lesson": "Lecture 10",
    "question": "Which innovation strategy assumes that innovation is a predictable process where steps can be planned and squeezed to lower costs?",
    "options": [
      "The compression approach",
      "The experiential approach",
      "The discontinuous approach",
      "The creative flow approach"
    ],
    "correctAnswerIndex": 0,
    "explanation": "The compression approach assumes incremental innovation can be planned using a series of steps and aims to lower costs/time."
  },
  {
    "id": "lec10q11",
    "lesson": "Lecture 10",
    "question": "A smartphone manufacturer releases a new model every year with slight improvements. Which aspect of the Compression Approach does this best illustrate?",
    "options": [
      "Generational change",
      "Technological lockout",
      "Design competition",
      "Discontinuous change"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Generational change is an aspect of the planning phase in the compression approach, where development time is squeezed for incremental updates."
  },
  {
    "id": "lec10q12",
    "lesson": "Lecture 10",
    "question": "Which of the following is NOT one of the five aspects of the Compression Approach to innovation?",
    "options": [
      "Design iterations",
      "Supplier involvement",
      "Overlapping steps",
      "Multifunctional teams"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Design iterations are an aspect of the Experiential Approach. The Compression Approach focuses on shortening/overlapping steps, not iterating."
  },
  {
    "id": "lec10q13",
    "lesson": "Lecture 10",
    "question": "A company manager refuses to acknowledge that customer preferences have shifted, insisting the sales dip is temporary. Which stage of organizational decline is this?",
    "options": [
      "Blinded",
      "Inaction",
      "Faulty action",
      "Crisis"
    ],
    "correctAnswerIndex": 0,
    "explanation": "The Blinded stage occurs when organizations fail to recognize the change or the need for change."
  },
  {
    "id": "lec10q14",
    "lesson": "Lecture 10",
    "question": "During the 'Faulty Action' stage of organizational decline, how do managers typically respond to decreasing performance?",
    "options": [
      "They run a 'tighter ship' and cut costs",
      "They recognize the need for major change",
      "They wait to see if the problem corrects itself",
      "They declare bankruptcy or dissolve the firm"
    ],
    "correctAnswerIndex": 0,
    "explanation": "In the Faulty Action stage, management announces plans to cut costs and run a 'tight ship' rather than making fundamental changes."
  },
  {
    "id": "lec10q15",
    "lesson": "Lecture 10",
    "question": "According to Kurt Lewin, what is the first step in the process of managing organizational change?",
    "options": [
      "Unfreezing",
      "Change intervention",
      "Refreezing",
      "Coercion"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Lewin's process starts with Unfreezing: getting people affected by change to believe that change is needed."
  },
  {
    "id": "lec10q16",
    "lesson": "Lecture 10",
    "question": "Which method for managing resistance to change is most appropriate when a specific group will lose out and has the power to resist?",
    "options": [
      "Negotiation",
      "Education",
      "Top-management support",
      "Coercion"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Negotiation is used when a group has power to resist; it involves offering incentives or deals to gain compliance."
  },
  {
    "id": "lec10q17",
    "lesson": "Lecture 10",
    "question": "According to John Kotter, what is a critical error often made during the 'Unfreezing' phase of change?",
    "options": [
      "Not establishing a great sense of urgency",
      "Declaring victory too soon",
      "Undercommunicating the vision",
      "Not removing obstacles to the new vision"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Kotter identifies 'Not establishing a great sense of urgency' and 'Not creating a powerful enough coalition' as errors in the Unfreezing phase."
  },
  {
    "id": "lec10q18",
    "lesson": "Lecture 10",
    "question": "A manager declares the change project a success after the first pilot test shows positive results, but before the culture has shifted. Which of Kotter's errors does this represent?",
    "options": [
      "Declaring victory too soon",
      "Lacking a clear vision",
      "Not establishing urgency",
      "Not creating a coalition"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Declaring victory too soon is a Refreezing phase error where managers stop pushing before the change is anchored in the culture."
  },
  {
    "id": "lec10q19",
    "lesson": "Lecture 10",
    "question": "Which change technique focuses on setting measurable short-term goals to improve performance quickly?",
    "options": [
      "Results-driven change",
      "Organizational development",
      "Sociotechnical systems",
      "Experiential innovation"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Results-driven change emphasizes setting measurable, short-term goals to improve performance quickly."
  },
  {
    "id": "lec10q20",
    "lesson": "Lecture 10",
    "question": "In the context of Organizational Development (OD) interventions, what happens during the 'Entry' step?",
    "options": [
      "A search begins for someone to facilitate change",
      "A change agent clarifies the problem with makers",
      "The change agent gathers information on the issue",
      "An action plan is developed with decision makers"
    ],
    "correctAnswerIndex": 0,
    "explanation": "The Entry step is when a problem is discovered and a search begins for someone (change agent) to deal with the problem."
  },
  {
    "id": "lec10q21",
    "lesson": "Lecture 10",
    "question": "Which type of Organizational Development intervention is designed to improve how employees use and adjust to work technology?",
    "options": [
      "Sociotechnical systems",
      "Survey feedback",
      "Team building",
      "Unit goal setting"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Sociotechnical systems are a Large-System Intervention designed to improve how employees use/adjust to work technology."
  },
  {
    "id": "lec10q22",
    "lesson": "Lecture 10",
    "question": "Which intervention is classified as a 'Person-focused intervention' in Organizational Development?",
    "options": [
      "Counseling/Coaching",
      "Team building",
      "Survey feedback",
      "Unit goal setting"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Counseling/coaching and Training are listed as Person-focused interventions."
  },
  {
    "id": "lec10q23",
    "lesson": "Lecture 10",
    "question": "A chemical company realizes its current technology causes too much pollution. A new scientific advance offers a breakthrough in clean processing. This event is best described as:",
    "options": [
      "Technological discontinuity",
      "Incremental change",
      "Dominant design",
      "Design iteration"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Technological discontinuity is when a scientific/technological advance creates a significant breakthrough in performance or function."
  },
  {
    "id": "lec10q24",
    "lesson": "Lecture 10",
    "question": "Why is 'Supplier Involvement' a key aspect of the Compression Approach to innovation?",
    "options": [
      "It allows delegating steps to reduce development time",
      "It creates a design competition to find the best part",
      "It ensures the product meets a new dominant design",
      "It helps in building a creative work environment"
    ],
    "correctAnswerIndex": 0,
    "explanation": "In the compression approach, delegating steps to suppliers (Supplier involvement) helps squeeze/compress development time."
  },
  {
    "id": "lec10q25",
    "lesson": "Lecture 10",
    "question": "The 'Refreezing' stage in Lewin's change model is primarily concerned with:",
    "options": [
      "Supporting and reinforcing changes so they stick",
      "Creating a sense of urgency among the employees",
      "Changing worker behaviors and work practices",
      "Negotiating with those who resist the changes"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Refreezing involves supporting and reinforcing new changes so that they stick."
  },
  {
    "id": "lec10q26",
    "lesson": "Lecture 10",
    "question": "Which force supports the existing conditions in an organization and opposes change?",
    "options": [
      "Resistance forces",
      "Change forces",
      "Innovation streams",
      "Discontinuous forces"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Resistance forces support the existing conditions in organizations, opposing change forces."
  },
  {
    "id": "lec10q27",
    "lesson": "Lecture 10",
    "question": "What is the specific role of 'Powerful Leaders' in the Experiential Approach to innovation?",
    "options": [
      "To provide vision, discipline, and motivation",
      "To negotiate with external suppliers for parts",
      "To manage the detailed steps of compression",
      "To conduct statistical analysis of test results"
    ],
    "correctAnswerIndex": 0,
    "explanation": "In the experiential approach, powerful leaders provide the vision, discipline, and motivation to keep innovation focused."
  },
  {
    "id": "lec10q28",
    "lesson": "Lecture 10",
    "question": "Which component of a creative work environment involves removing political barriers and conservative criticism?",
    "options": [
      "Lack of organizational impediments",
      "Organizational encouragement",
      "Supervisory encouragement",
      "Work group encouragement"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Lack of organizational impediments refers to removing internal conflicts, politics, and rigid structures that hinder creativity."
  },
  {
    "id": "lec10q29",
    "lesson": "Lecture 10",
    "question": "In the General Electric (GE) Fastworks method, what is the primary mechanism for making changes?",
    "options": [
      "Testing and making improvements based on customer problems",
      "Compressing the supply chain to reduce overhead costs",
      "Implementing a top-down directive from senior management",
      "Freezing the current operations to audit all processes"
    ],
    "correctAnswerIndex": 0,
    "explanation": "GE Fastworks (Results-driven change) focuses on customer problems and makes fast changes through testing and making improvements."
  },
  {
    "id": "lec10q30",
    "lesson": "Lecture 10",
    "question": "If an organization is in the 'Inaction' stage of decline, what is the typical behavior of management?",
    "options": [
      "They recognize the need for change but take no action",
      "They fail to recognize that any change is necessary",
      "They aggressively cut costs to improve efficiency",
      "They file for bankruptcy to dissolve the company"
    ],
    "correctAnswerIndex": 0,
    "explanation": "In the Inaction stage, managers may recognize the need for change but fail to act, often believing the problem is temporary."
  },
  {
    "id": "lec10q31",
    "lesson": "Lecture 10",
    "question": "Which element represents the starting point (Stage A) of the S-curve pattern of innovation?",
    "options": [
      "Significant effort required for small performance gains",
      "Rapid performance improvements with minimal effort",
      "Performance limits are reached and growth flattens",
      "A new dominant design replaces the old technology"
    ],
    "correctAnswerIndex": 0,
    "explanation": "The beginning of the S-curve (Stage A) is characterized by slow initial progress where significant effort yields small performance gains."
  },
  {
    "id": "lec10q32",
    "lesson": "Lecture 10",
    "question": "What distinguishes 'Design Competition' from 'Technological Substitution' in an innovation stream?",
    "options": [
      "Competition is between old and new techs; Substitution is buying the new tech",
      "Competition is strictly internal; Substitution happens only externally",
      "Competition happens after a dominant design; Substitution happens before",
      "Competition reduces costs; Substitution increases product performance"
    ],
    "correctAnswerIndex": 0,
    "explanation": "Design competition is the battle between different old and new technologies to set a standard; Substitution is when consumers actually purchase the new technology."
  },
];

// Helper to shuffle an array (Fisher-Yates)
const shuffleArray = <T>(array: T[]): T[] => {
  const newArr = [...array];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
};

export const getQuestions = (): Question[] => {
  // We use LocalStorage to persist data (similar to cookies but better for large JSON data)
  const stored = localStorage.getItem(DATA_KEY);
  if (!stored) {
    localStorage.setItem(DATA_KEY, JSON.stringify(INITIAL_DATA));
    return INITIAL_DATA;
  }
  try {
    return JSON.parse(stored);
  } catch (e) {
    console.error("Failed to parse questions", e);
    return [];
  }
};

export const saveQuestions = (questions: Question[]) => {
  localStorage.setItem(DATA_KEY, JSON.stringify(questions));
};

export const getHistory = (): UserHistory => {
  const stored = localStorage.getItem(HISTORY_KEY);
  return stored ? JSON.parse(stored) : {};
};

export const saveHistory = (history: UserHistory) => {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(history));
};

export const recordAttempt = (questionId: string, isCorrect: boolean) => {
  const history = getHistory();
  // We overwrite the status. If they get it wrong now, it's marked wrong, 
  // ensuring it shows up in revision/master quiz again.
  history[questionId] = {
    correct: isCorrect,
    timestamp: Date.now()
  };
  saveHistory(history);
};

export const getLessons = (): string[] => {
  const questions = getQuestions();
  // We sort using numeric comparison if possible to handle Lecture 1, Lecture 2, Lecture 10 correctly
  const lessons = Array.from(new Set(questions.map(q => q.lesson)));
  
  return lessons.sort((a, b) => {
    // Try to extract numbers for natural sort (Lecture 1 before Lecture 10)
    const numA = parseInt(a.replace(/\D/g, '')) || 0;
    const numB = parseInt(b.replace(/\D/g, '')) || 0;
    if (numA > 0 && numB > 0) {
      return numA - numB;
    }
    return a.localeCompare(b);
  });
};

export const getLessonStats = (lesson: string) => {
  const questions = getQuestions().filter(q => q.lesson === lesson);
  const history = getHistory();
  
  let completed = 0;
  let correct = 0;
  let wrong = 0;

  questions.forEach(q => {
    const attempt = history[q.id];
    if (attempt) {
      completed++;
      if (attempt.correct) correct++;
      else wrong++;
    }
  });

  return {
    total: questions.length,
    completed,
    correct,
    wrong
  };
};

export const getQuestionsForPractice = (lesson: string): Question[] => {
  const questions = getQuestions().filter(q => q.lesson === lesson);
  const history = getHistory();

  // We shuffle ALL relevant questions first to ensure randomness within status groups.
  // Then we sort by priority: Wrong -> Unattempted -> Correct
  // This satisfies the "Shuffle Questions" requirement while keeping "Intelligent Practice".
  const shuffled = shuffleArray(questions);

  return shuffled.sort((a, b) => {
    const statA = history[a.id];
    const statB = history[b.id];

    const scoreA = statA ? (statA.correct ? 2 : 0) : 1;
    const scoreB = statB ? (statB.correct ? 2 : 0) : 1;

    return scoreA - scoreB;
  });
};

export const getQuestionsForMasterQuiz = (): Question[] => {
  const allQuestions = getQuestions();
  const history = getHistory();

  // Exclude questions that are currently marked as correct in history
  const pool = allQuestions.filter(q => {
    const attempt = history[q.id];
    return !attempt || !attempt.correct;
  });

  // Shuffle and take 60
  // Using our Fisher-Yates shuffle helper for better randomness
  const shuffled = shuffleArray(pool);
  return shuffled.slice(0, 60);
};

export const getQuestionsForReview = (lesson?: string): Question[] => {
  const allQuestions = getQuestions();
  const history = getHistory();

  // Return only questions that have been attempted and are marked as incorrect
  // If lesson is provided, filter by lesson as well
  const filtered = allQuestions.filter(q => {
    if (lesson && q.lesson !== lesson) return false;
    
    const attempt = history[q.id];
    return attempt && !attempt.correct;
  });

  // Shuffle the results to avoid pattern memorization
  return shuffleArray(filtered);
};

export const importQuestions = (newQuestions: Question[], replaceLesson?: string) => {
  let currentQuestions = getQuestions();
  
  if (replaceLesson) {
    // Remove all questions from this lesson before adding the new batch
    currentQuestions = currentQuestions.filter(q => q.lesson !== replaceLesson);
  } else {
    // If not replacing a specific lesson (Global Import), avoid duplicates by ID
    const newIds = new Set(newQuestions.map(q => q.id));
    currentQuestions = currentQuestions.filter(q => !newIds.has(q.id));
  }

  const merged = [...currentQuestions, ...newQuestions];
  saveQuestions(merged);
};

export const resetData = () => {
  localStorage.removeItem(DATA_KEY);
  localStorage.removeItem(HISTORY_KEY);
};
