export interface Article {
  id: string;
  title: string;
  summary: string;
  content: string;
  imageUrl?: string;
  category: string;
  publishedAt: string;
  author: string;
  source?: string;
}

const MOCK_ARTICLES: Article[] = [

  {
    id: "1",
    title: "Nations Sign Historic Pact to Phase Out Fossil Fuels",
    summary:
      "Delegates at a UN summit agree to a landmark deal committing countries to a rapid transition towards clean energy.",
    content:
      "After two weeks of intense negotiations, representatives from more than 120 countries have signed a historic agreement to rapidly phase out the use of fossil fuels. The deal sets ambitious targets for switching to renewable energy, ending subsidies for coal and oil, and supporting vulnerable nations facing climate-related disasters. Environmental groups welcomed the pact as a major breakthrough, although they cautioned that implementation will be crucial. The agreement includes a review mechanism every two years to track progress toward limiting global warming to 1.5 degrees Celsius.",
    imageUrl: "/climate-summit2.jpeg",
    category: "World",
    publishedAt: "2025-11-25T11:00:00Z",
    author: "Laura Martinez",
    source: "Global News Network",
  },
  {
    id: "2",
    title: "Startup Launches AI That Designs Apps from Simple Prompts",
    summary:
      "A new AI platform allows users to generate full applications using natural-language requests, disrupting traditional development workflows.",
    content:
      "Innovation lab Synapse Labs has unveiled 'Forge', an artificial intelligence system that can generate production-ready applications from simple text instructions. Users can describe features in everyday language, and Forge automatically creates UI layouts, database schemas, and backend logic. Early testers say the tool dramatically reduces development time for prototypes and internal tools. Experts note that while human oversight is still required, Forge could reshape how small businesses and non-technical teams build software.",
    imageUrl: "/ai-forge.jpeg",
    category: "Technology",
    publishedAt: "2025-11-26T09:45:00Z",
    author: "Kevin Park",
    source: "TechDaily",
  },
  {
    id: "3",
    title: "Underdog Basketball Club Wins National Title in Overtime Thriller",
    summary:
      "A little-known city team stuns fans by defeating the defending champions in a dramatic overtime finish.",
    content:
      "The River City Falcons completed a fairy-tale season by clinching the national basketball championship in front of a sold-out arena. Trailing by 12 points at halftime, the Falcons mounted a stunning comeback, forcing overtime with a clutch three-pointer in the final seconds. In extra time, their captain scored the decisive basket with just four seconds remaining. Supporters poured into the streets as celebrations continued late into the night. Analysts say the victory will be remembered as one of the biggest upsets in tournament history.",
    imageUrl: "/basket-final.jpeg",
    category: "Sports",
    publishedAt: "2025-11-24T21:10:00Z",
    author: "Mark Johnson",
    source: "Sports Central",
  },
  {
    id: "4",
    title: "Global Markets Rally on Surprise Interest Rate Pause",
    summary:
      "Stock indices jump after central banks signal a pause in rate hikes, boosting investor confidence.",
    content:
      "Stocks surged worldwide after several major central banks hinted at a pause in further interest rate increases. The announcement triggered a broad-based rally, with financial and consumer sectors leading gains. The benchmark Global 500 Index closed at an all-time high, while bond yields fell on expectations of slower tightening. Economists say the move reflects easing inflation pressures and a desire to avoid choking off growth. However, they warn that markets may remain volatile if future data show renewed price spikes.",
    imageUrl: "/market-rally.jpeg",
    category: "Business",
    publishedAt: "2025-11-26T14:20:00Z",
    author: "Rachel Kim",
    source: "Economy Watch",
  },
  {
    id: "5",
    title: "Lunar Probe Discovers Evidence of Ancient Ice Deposits",
    summary:
      "A robotic mission has detected signs of buried ice near the Moon’s south pole, raising hopes for future human bases.",
    content:
      "Scientists with the International Space Coalition announced that their latest lunar probe, Aurora-1, has detected strong signals consistent with ancient ice deposits beneath the Moon’s south polar surface. Using ground-penetrating radar and spectrometers, the probe identified several regions where frozen water may be trapped in permanently shadowed craters. The discovery could be crucial for future crewed missions, providing a potential source of drinking water, oxygen, and rocket fuel. Engineers are now planning a follow-up lander to drill into the most promising sites.",
    imageUrl: "/lunar-ice.jpeg",
    category: "Science",
    publishedAt: "2025-11-23T12:10:00Z",
    author: "Dr. Helena Ortiz",
    source: "Space Today",
  },
  {
    id: "6",
    title: "Study Finds Sleep Quality as Key Factor in Longer Lifespan",
    summary:
      "New research suggests that consistent, high-quality sleep may add years to a person’s life expectancy.",
    content:
      "A long-term study from the International Health Institute has found that adults who maintain seven to eight hours of high-quality sleep each night are significantly more likely to live longer than those with irregular or insufficient sleep patterns. Researchers tracked more than 80,000 participants over 25 years, controlling for diet, exercise, and socioeconomic factors. The results indicate that sleep may have an impact on longevity comparable to that of smoking cessation and regular physical activity. Doctors recommend establishing a fixed bedtime, limiting screen exposure at night, and avoiding heavy meals before sleep.",
    imageUrl: "/sleep-health.jpeg",
    category: "Health",
    publishedAt: "2025-11-25T08:30:00Z",
    author: "Nina Patel",
    source: "Health Weekly",
  },
  {
    id: "7",
    title: "Parliament Debates Ambitious Green Infrastructure Bill",
    summary:
      "Lawmakers discuss a sweeping proposal to modernize public transport and invest in renewable energy projects.",
    content:
      "A comprehensive green infrastructure bill took center stage in Parliament today, sparking heated debate across party lines. The proposal includes funding for high-speed rail networks, nationwide electric-vehicle charging corridors, and large-scale solar and wind farms. Supporters argue the plan will create millions of jobs and reduce carbon emissions, while critics question the high upfront costs and potential tax increases. The bill also promises targeted grants for rural communities to upgrade aging power grids. A final vote is expected early next month.",
    imageUrl: "/parliament-green.jpeg",
    category: "Politics",
    publishedAt: "2025-11-22T16:10:00Z",
    author: "Anthony Reid",
    source: "Capital News",
  },
  {
    id: "8",
    title: "Fantasy Epic Smashes Streaming Records in First Weekend",
    summary:
      "A new fantasy series becomes the most-watched premiere in the history of a major streaming platform.",
    content:
      "“Kingdoms of Dawn,” a big-budget fantasy drama, has shattered streaming records within its first 72 hours of release. The platform reported that the series pilot drew more viewers than any previous debut, surpassing even established blockbuster franchises. Critics have praised the show’s world-building, cinematic visuals, and complex characters. Social media timelines are filled with fan theories, memes, and calls for immediate renewal. Executives have already confirmed a second season and announced plans for spin-off content and behind-the-scenes documentaries.",
    imageUrl: "/fantasy-series.jpeg",
    category: "Entertainment",
    publishedAt: "2025-11-24T13:00:00Z",
    author: "Olivia Hart",
    source: "CinemaScope",
  },
  {
    id: "9",
    title: "Solar Car Sales Double as Charging Networks Expand",
    summary:
      "Hybrid vehicles with integrated solar panels see a surge in demand in regions with robust renewable infrastructure.",
    content:
      "For the first time, quarterly sales of solar-assisted electric vehicles have doubled year-on-year in several European and Asian markets. Analysts credit generous subsidies, improved fast-charging networks, and longer-range battery technology for the shift. New models feature roof-mounted solar panels that can add up to 30 kilometers of daily range under ideal conditions, reducing reliance on the grid. Industry experts believe the trend marks an important step toward mainstream adoption of clean transportation.",
    imageUrl: "/solar-ev.jpeg",
    category: "Technology",
    publishedAt: "2025-11-26T11:15:00Z",
    author: "Jonas Eriksen",
    source: "AutoTech",
  },
  {
    id: "10",
    title: "World Cup Hockey: India Set for Semi-Final Showdown",
    summary:
      "Excitement builds as India prepares to face a strong European side in the tournament’s semi-final match.",
    content:
      "Hockey fans across India are gearing up for a high-stakes World Cup semi-final against the Netherlands this weekend. Both teams have displayed dominant form in the group stages, with India relying on rapid counterattacks and solid defensive organization. Coaches expect a tactical battle, as penalty corners and set plays could decide the outcome. Stadium tickets sold out within hours, and public viewing events are planned in several major cities. Analysts say the match could reignite mainstream interest in Indian hockey if the team advances to the final.",
    imageUrl: "/hockey-wc.jpeg",
    category: "Sports",
    publishedAt: "2025-11-25T16:20:00Z",
    author: "Rishi Mehta",
    source: "CricInfo",
  },
  {
    id: "11",
    title: "Researchers Discover Coral Reef Thriving in Deep Waters",
    summary:
      "A newly documented coral ecosystem deep in the ocean offers hope amidst rising concerns over reef bleaching.",
    content:
      "Marine biologists exploring a remote section of the South Pacific have discovered a vibrant coral reef thriving at depths previously thought too dark for such ecosystems. Dubbed the “Twilight Reef,” the habitat hosts a variety of colorful corals and fish species that appear resilient to rising surface temperatures. The team believes the deeper location may shield the reef from the worst effects of warming waters and storm damage. The discovery underscores the importance of protecting lesser-known marine environments from deep-sea mining and overfishing.",
    imageUrl: "/deep-reef.jpeg",
    category: "Environment",
    publishedAt: "2025-11-23T09:30:00Z",
    author: "Dr. Marina Silva",
    source: "Nature Journal",
  },
  {
    id: "12",
    title: "Small Businesses See Relief as Energy Prices Ease",
    summary:
      "Lower energy costs and stabilizing supply chains bring a glimmer of hope to struggling small enterprises.",
    content:
      "A new survey of small business owners shows cautious optimism as energy prices fall to their lowest level in nearly two years. Lower fuel and electricity costs have reduced operating expenses for restaurants, retailers, and manufacturers, many of which were hit hard by inflation. Combined with improving supply chains, the shift may allow firms to reinvest in staff and equipment. Economists warn, however, that demand remains uneven across sectors, and some businesses are still recovering from earlier shocks.",
    imageUrl: "/smallbiz-energy.jpeg",
    category: "Business",
    publishedAt: "2025-11-26T10:40:00Z",
    author: "Daniel Brooks",
    source: "Financial Times",
  },

  // ---- 10 additional news items ----

  {
    id: "13",
    title: "University Launches Free Online Courses in Regional Languages",
    summary:
      "A leading university announces open-access courses translated into multiple Indian languages to boost digital learning.",
    content:
      "In an effort to make higher education more inclusive, National Tech University has released a series of free online courses translated into Hindi, Bengali, Tamil, Telugu, and Marathi. The curriculum covers computer science basics, entrepreneurship, and data literacy, with more subjects planned in the coming months. Students can access video lectures, quizzes, and project assignments without any enrollment fees. Educators believe the initiative will help bridge the digital divide and enable more learners from non-English backgrounds to participate in the knowledge economy.",
    imageUrl: "/online-learning.jpeg",
    category: "Education",
    publishedAt: "2025-11-21T07:30:00Z",
    author: "Priyanka Das",
    source: "Campus Herald",
  },
  {
    id: "14",
    title: "Metro Rail Network Expands to Outskirts, Cutting Commute Times",
    summary:
      "A new metro line connecting suburban areas to the city center is expected to benefit thousands of daily commuters.",
    content:
      "Commuters in the city’s northern suburbs welcomed the inauguration of the new Green Line extension of the metro rail. The 22-kilometer stretch connects several residential townships with the central business district, reducing travel times from over an hour to just 25 minutes. Officials estimate that the line will serve more than 300,000 passengers daily, easing road congestion and lowering vehicular emissions. Local businesses are optimistic that improved connectivity will boost real estate and retail activity along the new corridor.",
    imageUrl: "/metro-expansion.jpeg",
    category: "City",
    publishedAt: "2025-11-22T06:50:00Z",
    author: "Arjun Nair",
    source: "City Chronicle",
  },
  {
    id: "15",
    title: "Wearable Device Can Detect Stress Levels in Real Time",
    summary:
      "A health-tech startup introduces a wristband that measures stress using heart-rate variability and skin temperature.",
    content:
      "Health startup CalmWave has launched a wearable wristband designed to detect stress and alert users before symptoms escalate. The device tracks heart-rate variability, skin temperature, and breathing patterns to build a personalized baseline. When deviations indicate rising stress, the companion app suggests quick breathing exercises, walks, or hydration reminders. Early trials with office workers and students show promising reductions in self-reported anxiety. Psychologists say such tools can be helpful when combined with healthy habits and, if needed, professional care.",
    imageUrl: "/wearable-stress.jpeg",
    category: "Health",
    publishedAt: "2025-11-25T09:10:00Z",
    author: "Dr. Melissa Young",
    source: "Health Weekly",
  },
  {
    id: "16",
    title: "Farmers Adopt Drone Technology for Precision Irrigation",
    summary:
      "Agricultural communities use drones and sensors to monitor soil moisture and optimize water usage.",
    content:
      "Across several drought-prone districts, farmers are turning to drone technology and smart sensors to manage water more efficiently. The devices map fields, detect dry patches, and send data to a mobile app that recommends targeted irrigation. As a result, farmers report water savings of up to 30 percent while maintaining or even improving crop yields. Government agencies are now considering subsidies to make the technology more accessible to small landholders. Experts believe precision agriculture could play a key role in addressing water scarcity and food security challenges.",
    imageUrl: "/drone-farm.jpeg",
    category: "Environment",
    publishedAt: "2025-11-20T10:00:00Z",
    author: "Sanjay Kulkarni",
    source: "AgriWorld",
  },
  {
    id: "17",
    title: "Mobile Wallet Usage Surges During Festival Season",
    summary:
      "Digital payment platforms see record transactions as shoppers embrace cashless purchases.",
    content:
      "Digital wallet companies reported a sharp rise in transactions during the recent festival season, with some platforms posting growth of over 60 percent compared to last year. Shoppers used QR codes and tap-to-pay options for everything from street food to jewelry purchases. Many vendors offered instant cashback and rewards to encourage adoption. Economists say the trend reflects a deeper shift toward a less-cash economy, supported by affordable smartphones and wider internet access in semi-urban areas.",
    imageUrl: "/mobile-wallet.jpeg",
    category: "Business",
    publishedAt: "2025-11-24T18:10:00Z",
    author: "Neha Verma",
    source: "Business Now",
  },
  {
    id: "18",
    title: "Indie Game from Small Studio Becomes Global Hit Overnight",
    summary:
      "A low-budget puzzle game created by a three-person team tops download charts worldwide.",
    content:
      "‘Echoes of Time,’ an independently developed puzzle-adventure game, has taken the gaming world by storm. Built over two years by a trio of developers working remotely, the game features hand-drawn art and a time-bending storyline that has captivated players. Within a week of launch, it topped download charts in more than 20 countries and received glowing reviews for its creativity and emotional depth. The success has sparked renewed interest in indie titles and proved that small teams can compete with major studios.",
    imageUrl: "/indie-game.jpeg",
    category: "Technology",
    publishedAt: "2025-11-23T19:00:00Z",
    author: "Lucas Meyer",
    source: "GameSphere",
  },
  {
    id: "19",
    title: "New Art Museum Opens with Focus on Emerging Talent",
    summary:
      "A contemporary art museum aims to give young and regional artists a global platform.",
    content:
      "The Horizon Museum of Contemporary Art opened its doors this week, showcasing works from over 50 emerging artists across the country. Located in a refurbished industrial warehouse, the museum features interactive installations, digital exhibits, and community workshop spaces. Curators say their goal is to highlight voices that are often overlooked in mainstream galleries, including artists from smaller towns and diverse backgrounds. The opening has drawn large crowds, and several pieces have already been acquired by international collectors.",
    imageUrl: "/art-museum.jpeg",
    category: "Culture",
    publishedAt: "2025-11-21T14:25:00Z",
    author: "Sophia Lee",
    source: "Culture Line",
  },
  {
    id: "20",
    title: "Coastal City Tests Early-Warning System for Floods",
    summary:
      "Authorities deploy sensors and AI models to predict flooding hours in advance and alert residents.",
    content:
      "A coastal city prone to seasonal flooding has begun testing a new early-warning system that uses river sensors, satellite data, and AI models to forecast water levels. When risk thresholds are crossed, automated alerts are sent to residents via text message and loudspeaker announcements in vulnerable neighborhoods. In recent trials, the system correctly predicted several minor flooding events, giving citizens time to move vehicles and secure belongings. Officials hope the technology will save lives and reduce property damage during major storms.",
    imageUrl: "/flood-warning.jpeg",
    category: "City",
    publishedAt: "2025-11-27T05:40:00Z",
    author: "Miguel Santos",
    source: "Global News Network",
  },
  {
    id: "21",
    title: "Community Kitchen Initiative Reduces Food Waste in Urban Areas",
    summary:
      "Volunteers collect surplus food from restaurants and redistribute it to low-income families.",
    content:
      "A grassroots initiative called SharePlate is gaining momentum in several major cities. Volunteers partner with restaurants, grocery stores, and caterers to collect unsold but edible food at the end of each day. The items are redistributed through community kitchens and mobile vans to families in need. Organizers say the project has already diverted tons of food from landfills while serving thousands of hot meals. City officials are exploring ways to support the model through small grants and dedicated collection points.",
    imageUrl: "/community-kitchen.jpeg",
    category: "Society",
    publishedAt: "2025-11-22T17:00:00Z",
    author: "Fatima Khan",
    source: "People’s Post",
  },
  {
    id: "22",
    title: "High-Speed Internet Reaches Remote Mountain Village",
    summary:
      "A once-isolated community now has access to online education, telemedicine, and e-commerce.",
    content:
      "Residents of a remote mountain village celebrated as technicians activated a new high-speed internet connection powered by satellite and local relay towers. For years, the area had struggled with patchy or nonexistent connectivity, limiting access to basic digital services. Now, students can join virtual classrooms, farmers can check market prices, and patients can consult doctors via telemedicine platforms. Local leaders hope improved connectivity will help reduce migration to cities and open up new economic opportunities such as eco-tourism.",
    imageUrl: "/mountain-internet.jpeg",
    category: "World",
    publishedAt: "2025-11-21T09:55:00Z",
    author: "Chiara Rossi",
    source: "Global News Wire",
  },

];

export async function getArticles(category?: string, query?: string): Promise<Article[]> {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  let filtered = [...MOCK_ARTICLES];

  if (category) {
    const cat = category.toLowerCase();
    if (cat === "top") {
      // Return all or a subset for "top"
      return filtered;
    }

    // Handle mapping if necessary, or just direct match
    // Our mock data uses capitalized categories, let's match loosely
    filtered = filtered.filter(a =>
      a.category.toLowerCase() === cat ||
      (cat === "politics" && a.category === "Politics") || // Example mapping if needed
      (cat === "nation" && a.category === "Politics") // Map Nation to Politics
    );
  }

  if (query) {
    const q = query.toLowerCase();
    filtered = filtered.filter(a =>
      a.title.toLowerCase().includes(q) ||
      a.summary.toLowerCase().includes(q) ||
      a.content.toLowerCase().includes(q)
    );
  }

  return filtered;
}

export async function getArticleById(id: string): Promise<Article | null> {
  await new Promise(resolve => setTimeout(resolve, 300));
  return MOCK_ARTICLES.find(a => a.id === id) || null;
}

export async function getTrendingArticles(): Promise<Article[]> {
  await new Promise(resolve => setTimeout(resolve, 400));
  // Return first 5 as trending
  return MOCK_ARTICLES.slice(0, 5);
}
