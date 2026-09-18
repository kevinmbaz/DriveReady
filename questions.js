/* Curated from the supplied driving-school book. See scripts/build_questions.py. */
const QUESTIONS = [
  {
    "id": "q001",
    "topic": "basics",
    "page": 1,
    "prompt": "Which sequence does the book use for moving off safely?",
    "options": [
      "Prepare → Observation → Move",
      "Move → Signal → Observe",
      "Signal → Move → Prepare",
      "Observe → Move → Prepare"
    ],
    "answer": 0,
    "explanation": "Prepare the controls, observe mirrors and blind spots, then move off."
  },
  {
    "id": "q002",
    "topic": "basics",
    "page": 1,
    "prompt": "Which gear is selected when preparing to move off?",
    "options": [
      "First gear",
      "Second gear",
      "Reverse gear",
      "Neutral"
    ],
    "answer": 0,
    "explanation": "The preparation routine starts with the clutch fully down and first gear selected."
  },
  {
    "id": "q003",
    "topic": "basics",
    "page": 1,
    "prompt": "How do you check the blind spot before moving off in the book’s routine?",
    "options": [
      "Look over your right shoulder",
      "Only check the interior mirror",
      "Look down at the gear lever",
      "Only check the left door mirror"
    ],
    "answer": 0,
    "explanation": "After checking the interior and right door mirrors, look over the right shoulder to cover blind spots."
  },
  {
    "id": "q004",
    "topic": "basics",
    "page": 1,
    "prompt": "When should you consider signalling as you move off?",
    "options": [
      "When other people would benefit",
      "Only when driving at night",
      "Only after reaching normal speed",
      "Never when moving off"
    ],
    "answer": 0,
    "explanation": "The Move section says to consider a signal and apply it when other people would benefit."
  },
  {
    "id": "q005",
    "topic": "basics",
    "page": 1,
    "prompt": "Which item belongs in the cockpit drill?",
    "options": [
      "Adjusting the seat and mirrors",
      "Selecting a high gear",
      "Sounding the horn repeatedly",
      "Releasing the handbrake immediately"
    ],
    "answer": 0,
    "explanation": "The cockpit drill covers doors, seat position, seat adjustment, seatbelt and mirrors."
  },
  {
    "id": "q006",
    "topic": "basics",
    "page": 2,
    "prompt": "What does M–S–M stand for?",
    "options": [
      "Mirrors → Signal → Manoeuvre",
      "Move → Stop → Move",
      "Mirrors → Speed → Mirrors",
      "Manoeuvre → Signal → Mirrors"
    ],
    "answer": 0,
    "explanation": "The stopping section uses the Mirrors, Signal, Manoeuvre routine before changing speed or direction."
  },
  {
    "id": "q007",
    "topic": "basics",
    "page": 2,
    "prompt": "Why check your mirrors well before stopping?",
    "options": [
      "To assess the speed and distance of following traffic",
      "To check the fuel level",
      "To avoid having to signal",
      "To find the biting point"
    ],
    "answer": 0,
    "explanation": "Early mirror checks help you assess vehicles following you before beginning the manoeuvre."
  },
  {
    "id": "q008",
    "topic": "basics",
    "page": 2,
    "prompt": "After stopping completely, how does the book say to secure the car?",
    "options": [
      "Apply the handbrake and select neutral",
      "Keep the accelerator pressed",
      "Select the highest gear",
      "Release all brakes immediately"
    ],
    "answer": 0,
    "explanation": "Keep clutch and brake applied until stopped, then select the handbrake and neutral."
  },
  {
    "id": "q009",
    "topic": "basics",
    "page": 4,
    "prompt": "In the illustrated traffic-light sequence, what comes after red?",
    "options": [
      "Red and amber together",
      "Green and amber together",
      "Amber alone",
      "A flashing green light"
    ],
    "answer": 0,
    "explanation": "The diagram shows red, red and amber, green, then amber."
  },
  {
    "id": "q010",
    "topic": "basics",
    "page": 13,
    "prompt": "What does an amber-only traffic light tell you about the next light?",
    "options": [
      "The next light will be red",
      "The next light will be green",
      "The lights are switched off",
      "The next light will be blue"
    ],
    "answer": 0,
    "explanation": "The book explains that amber alone precedes red, while red and amber together precede green."
  },
  {
    "id": "q011",
    "topic": "basics",
    "page": 13,
    "prompt": "Which vehicle parts does the book say must be kept in working condition?",
    "options": [
      "Brakes, steering, tyres, indicators and lights",
      "Only the radio and air conditioning",
      "Only the number plates",
      "Only the seats and luggage compartment"
    ],
    "answer": 0,
    "explanation": "These are the vehicle components listed in question 11 of the book."
  },
  {
    "id": "q012",
    "topic": "basics",
    "page": 13,
    "prompt": "When meeting other vehicles on a dark road, what should you do with main beam?",
    "options": [
      "Switch to dipped beam",
      "Keep main beam on continuously",
      "Switch off every light",
      "Use only the interior light"
    ],
    "answer": 0,
    "explanation": "The book says to switch from main beam to dipped beam when meeting other vehicles."
  },
  {
    "id": "q013",
    "topic": "basics",
    "page": 13,
    "prompt": "Who are traffic rules for, according to the book?",
    "options": [
      "Everyone using the road",
      "Only newly qualified drivers",
      "Only drivers of large vehicles",
      "Only pedestrians"
    ],
    "answer": 0,
    "explanation": "The answer to question 9 is everyone using the road."
  },
  {
    "id": "q014",
    "topic": "rules",
    "page": 14,
    "prompt": "What should you avoid when another vehicle is overtaking you?",
    "options": [
      "Increasing your speed",
      "Keeping a steady course",
      "Observing surrounding traffic",
      "Allowing it to pass"
    ],
    "answer": 0,
    "explanation": "Question 16 says not to increase your speed while being overtaken."
  },
  {
    "id": "q015",
    "topic": "rules",
    "page": 14,
    "prompt": "From which side do you normally overtake in this book?",
    "options": [
      "The right",
      "The left",
      "Either side without checking",
      "The pavement side"
    ],
    "answer": 0,
    "explanation": "The book normally places overtaking on the right, with a specific exception for a vehicle turning right."
  },
  {
    "id": "q016",
    "topic": "rules",
    "page": 14,
    "prompt": "When does the book describe passing a vehicle on its left?",
    "options": [
      "It signals right, takes the middle of the road, and there is adequate space on the left",
      "Whenever the right lane is busy",
      "Whenever you are travelling faster",
      "At every pedestrian crossing"
    ],
    "answer": 0,
    "explanation": "All three conditions appear in the exception in question 17."
  },
  {
    "id": "q017",
    "topic": "rules",
    "page": 14,
    "prompt": "Which location does the book list as a place where overtaking is prohibited?",
    "options": [
      "A pedestrian crossing",
      "A clear straight road with a broken centre line",
      "A designated overtaking lane",
      "A road with no oncoming traffic and clear visibility"
    ],
    "answer": 0,
    "explanation": "Pedestrian crossings, junctions, corners and other restricted locations are listed in question 18."
  },
  {
    "id": "q018",
    "topic": "rules",
    "page": 14,
    "prompt": "What should you do if a vehicle accelerates while you are overtaking it?",
    "options": [
      "Slow down and return to the left lane when safe",
      "Race it to the next junction",
      "Continue regardless of oncoming traffic",
      "Move onto the pavement"
    ],
    "answer": 0,
    "explanation": "The book’s answer is to slow down and get back into the left lane."
  },
  {
    "id": "q019",
    "topic": "rules",
    "page": 14,
    "prompt": "When passing a row of parked vehicles, what should you watch for?",
    "options": [
      "Pedestrians, opening doors and vehicles pulling out",
      "Only the colour of the parked cars",
      "Only vehicles behind you",
      "Only the road’s speed signs"
    ],
    "answer": 0,
    "explanation": "Question 23 highlights pedestrians, people emerging from vehicles, and cars moving into the road."
  },
  {
    "id": "q020",
    "topic": "rules",
    "page": 15,
    "prompt": "Where does the book say you must never reverse into?",
    "options": [
      "A main road",
      "A suitable parking bay",
      "Your own driveway",
      "A quiet side road during a safe manoeuvre"
    ],
    "answer": 0,
    "explanation": "Question 25 specifically says never to reverse into a main road."
  },
  {
    "id": "q021",
    "topic": "rules",
    "page": 15,
    "prompt": "Which action also calls for a mirror check?",
    "options": [
      "Opening your car door",
      "Changing the radio station while parked",
      "Reading the odometer while parked",
      "Adjusting the heater before starting"
    ],
    "answer": 0,
    "explanation": "The book includes opening the car door among the times to use mirrors."
  },
  {
    "id": "q022",
    "topic": "rules",
    "page": 15,
    "prompt": "At an uncontrolled junction, which approaching traffic has priority in the book?",
    "options": [
      "Traffic from the right",
      "Traffic from the left in every case",
      "The largest vehicle",
      "The newest vehicle"
    ],
    "answer": 0,
    "explanation": "Question 30 says to give way to vehicles approaching from the right."
  },
  {
    "id": "q023",
    "topic": "rules",
    "page": 15,
    "prompt": "A ball rolls into the road. What response does the book give?",
    "options": [
      "Stop because a child may run after it",
      "Accelerate before the ball reaches you",
      "Swerve without checking",
      "Ignore it if no child is visible"
    ],
    "answer": 0,
    "explanation": "A child may follow the ball into the road; the book’s answer is to stop."
  },
  {
    "id": "q024",
    "topic": "rules",
    "page": 15,
    "prompt": "Which condition does the book list as making you unfit to drive?",
    "options": [
      "Being too tired",
      "Having adjusted your mirrors",
      "Wearing a seatbelt",
      "Having clean windows"
    ],
    "answer": 0,
    "explanation": "The fitness-to-drive list includes being too tired, too ill, too emotional, or affected by drugs or alcohol."
  },
  {
    "id": "q025",
    "topic": "rules",
    "page": 15,
    "prompt": "Which set of vehicle documents appears in the book?",
    "options": [
      "Driving licence, insurance, vehicle test and registration certificates",
      "Passport, shopping receipt and map",
      "Only a learner’s notebook",
      "Only an insurance quotation"
    ],
    "answer": 0,
    "explanation": "Question 28 lists the licence, valid insurance, vehicle test certificate and registration certificate."
  },
  {
    "id": "q026",
    "topic": "rules",
    "page": 16,
    "prompt": "Which actions can cause loss of control according to the book?",
    "options": [
      "Hard braking, hard acceleration and sudden steering",
      "Smooth acceleration and gentle steering",
      "Checking mirrors and signalling",
      "Keeping windows clean"
    ],
    "answer": 0,
    "explanation": "These three abrupt actions are listed as causes in question 36."
  },
  {
    "id": "q027",
    "topic": "rules",
    "page": 16,
    "prompt": "What does the book recommend for more control when descending a hill?",
    "options": [
      "Reduce speed and change to a lower gear",
      "Coast in neutral",
      "Switch off the engine",
      "Use the highest gear and accelerate"
    ],
    "answer": 0,
    "explanation": "Question 38 describes reducing speed and using a lower gear for braking power and control."
  },
  {
    "id": "q028",
    "topic": "manoeuvres",
    "page": 14,
    "prompt": "When parking uphill beside a kerb in a manual car, which combination does the book give?",
    "options": [
      "Forward gear, wheels away from the kerb, handbrake firmly applied",
      "Neutral, wheels straight, handbrake released",
      "Reverse gear, wheels towards the kerb",
      "Highest gear with the engine running"
    ],
    "answer": 0,
    "explanation": "Question 21 gives a forward gear and wheels away from the kerb when facing uphill, with the handbrake firmly applied."
  },
  {
    "id": "q029",
    "topic": "manoeuvres",
    "page": 14,
    "prompt": "When parking downhill beside a kerb in a manual car, which combination does the book give?",
    "options": [
      "Reverse gear and wheels towards the kerb",
      "First gear and wheels away from the kerb",
      "Neutral and wheels away from the kerb",
      "No handbrake and wheels straight"
    ],
    "answer": 0,
    "explanation": "The downhill instructions specify reverse gear, wheels towards the kerb and a firmly applied handbrake."
  },
  {
    "id": "q030",
    "topic": "manoeuvres",
    "page": 14,
    "prompt": "Which transmission setting does the book specify for parking an automatic car on a hill?",
    "options": [
      "Park",
      "Drive",
      "Neutral",
      "Reverse only"
    ],
    "answer": 0,
    "explanation": "The parking-on-a-hill answer says to use Park for an automatic gearbox."
  },
  {
    "id": "q031",
    "topic": "manoeuvres",
    "page": 17,
    "prompt": "Before beginning the three-point turn, where does the book show the car stopping?",
    "options": [
      "At the left edge of the road",
      "Across both lanes",
      "In the centre of the junction",
      "On the right pavement"
    ],
    "answer": 0,
    "explanation": "The first step is to signal left, check behind, stop on the left edge and apply the handbrake."
  },
  {
    "id": "q032",
    "topic": "manoeuvres",
    "page": 17,
    "prompt": "Which gear is used for the middle movement of the three-point turn?",
    "options": [
      "Reverse",
      "First",
      "Second",
      "Third"
    ],
    "answer": 0,
    "explanation": "The three movements are forward in first gear, reverse, then forward in first gear."
  },
  {
    "id": "q033",
    "topic": "manoeuvres",
    "page": 18,
    "prompt": "What does N mean on the automatic gear selector?",
    "options": [
      "Neutral",
      "Normal speed",
      "Night mode",
      "No entry"
    ],
    "answer": 0,
    "explanation": "The automatic-transmission key gives P = Park, R = Reverse, N = Neutral and D = Drive."
  },
  {
    "id": "q034",
    "topic": "manoeuvres",
    "page": 18,
    "prompt": "What does D mean on the automatic gear selector?",
    "options": [
      "Drive",
      "Downhill only",
      "Defrost",
      "Disabled"
    ],
    "answer": 0,
    "explanation": "The transmission key on printed page 18 identifies D as Drive."
  },
  {
    "id": "q035",
    "topic": "manoeuvres",
    "page": 18,
    "prompt": "What should you pay attention to when approaching a roundabout?",
    "options": [
      "Direction information, signs and traffic lights",
      "Only the vehicle behind",
      "Only the central island’s appearance",
      "Only your speedometer"
    ],
    "answer": 0,
    "explanation": "The roundabout section says to follow direction information, traffic signs and lights."
  },
  {
    "id": "q036",
    "topic": "manoeuvres",
    "page": 19,
    "prompt": "In the book’s right-turn example, what happens if an oncoming vehicle is approaching?",
    "options": [
      "Stop, select first gear, and turn after it has passed",
      "Turn across its path immediately",
      "Accelerate in third gear",
      "Reverse into the side road"
    ],
    "answer": 0,
    "explanation": "The illustrated oncoming-vehicle example describes stopping and selecting first gear before turning after the vehicle passes."
  },
  {
    "id": "q037",
    "topic": "markings",
    "page": 11,
    "prompt": "What does a broken white centre line allow according to the book?",
    "options": [
      "Overtaking if it is safe",
      "Overtaking without observing traffic",
      "Parking in the middle of the road",
      "Driving on the pavement"
    ],
    "answer": 0,
    "explanation": "Broken lines separate traffic directions; the book says overtaking is possible if safe."
  },
  {
    "id": "q038",
    "topic": "markings",
    "page": 11,
    "prompt": "With double white lines, which line do you follow?",
    "options": [
      "The line closest to you",
      "Always the line farthest away",
      "Only the broken line regardless of side",
      "Neither line"
    ],
    "answer": 0,
    "explanation": "The book says to follow the closest line: if it is continuous, do not overtake."
  },
  {
    "id": "q039",
    "topic": "markings",
    "page": 11,
    "prompt": "Where must you stop at a STOP sign with a transverse line?",
    "options": [
      "Before crossing the line",
      "Beyond the junction",
      "On the pedestrian crossing",
      "Only after entering the main road"
    ],
    "answer": 0,
    "explanation": "The STOP-sign diagrams require stopping before the transverse line."
  },
  {
    "id": "q040",
    "topic": "markings",
    "page": 11,
    "prompt": "A vehicle has stopped at a zebra crossing for pedestrians. What must you not do?",
    "options": [
      "Overtake that vehicle",
      "Stop behind it",
      "Watch for pedestrians",
      "Leave the crossing clear"
    ],
    "answer": 0,
    "explanation": "The crossing section explicitly says not to overtake a vehicle stopped to let pedestrians cross."
  },
  {
    "id": "q041",
    "topic": "markings",
    "page": 11,
    "prompt": "When traffic queues near a zebra crossing, what should you do?",
    "options": [
      "Keep the crossing clear",
      "Queue on the crossing",
      "Use the zigzag area as a parking space",
      "Overtake the queue without looking"
    ],
    "answer": 0,
    "explanation": "The book says drivers should not queue over the crossing and should look for pedestrians when moving off."
  },
  {
    "id": "q042",
    "topic": "markings",
    "page": 11,
    "prompt": "In this book, what do double yellow lines indicate?",
    "options": [
      "No parking and no stopping",
      "Unlimited parking",
      "A compulsory cycle lane",
      "A pedestrian-only street"
    ],
    "answer": 0,
    "explanation": "The double-yellow-line diagram is labelled No parking & Stopping."
  },
  {
    "id": "q043",
    "topic": "markings",
    "page": 12,
    "prompt": "When the road is clear, what does the book advise about a hatched area bounded by a broken line?",
    "options": [
      "Try to avoid driving over it",
      "Always drive along it",
      "Park inside it",
      "Treat it as a permanent extra lane"
    ],
    "answer": 0,
    "explanation": "The first hatched-road example advises avoiding the area when the road is clear."
  },
  {
    "id": "q044",
    "topic": "markings",
    "page": 12,
    "prompt": "Which boundary type appears in the book’s example allowing entry into a hatched area when joining a queue?",
    "options": [
      "A broken outer line",
      "A solid outer line",
      "A raised barrier",
      "A double solid line"
    ],
    "answer": 0,
    "explanation": "The third example permits driving over the hatched marking in the described queue situation provided the outer line is broken."
  },
  {
    "id": "q045",
    "topic": "distances",
    "page": 15,
    "prompt": "What minimum time gap does the book give for following a car in ideal conditions?",
    "options": [
      "At least 2 seconds",
      "Half a second",
      "Exactly 1 second",
      "No gap at low speed"
    ],
    "answer": 0,
    "explanation": "Question 24 specifies at least two seconds in ideal conditions. It also gives a separate approximate distance rule."
  },
  {
    "id": "q046",
    "topic": "distances",
    "page": 16,
    "prompt": "According to the book, what distance must be kept from a corner or junction where no yellow lines are marked?",
    "options": [
      "9 metres",
      "3 metres",
      "5 metres",
      "20 metres"
    ],
    "answer": 0,
    "explanation": "Question 40 gives a minimum distance of 9 metres. This is the supplied book’s figure."
  },
  {
    "id": "q047",
    "topic": "distances",
    "page": 16,
    "prompt": "According to the book, what is the maximum number of cars in one convoy?",
    "options": [
      "6 cars",
      "3 cars",
      "10 cars",
      "12 cars"
    ],
    "answer": 0,
    "explanation": "Question 43 states a maximum of six cars in one convoy."
  },
  {
    "id": "q048",
    "topic": "distances",
    "page": 16,
    "prompt": "What minimum gap between cars in a convoy does the book give?",
    "options": [
      "36 metres",
      "9 metres",
      "18 metres",
      "90 metres"
    ],
    "answer": 0,
    "explanation": "Question 43 gives at least 36 metres between cars in a convoy."
  },
  {
    "id": "q049",
    "topic": "distances",
    "page": 16,
    "prompt": "What minimum separation between convoys does the book give?",
    "options": [
      "90 metres",
      "36 metres",
      "45 metres",
      "60 metres"
    ],
    "answer": 0,
    "explanation": "Question 44 gives at least 90 metres between convoys."
  },
  {
    "id": "q050",
    "topic": "distances",
    "page": 20,
    "prompt": "In the book’s chart, what is the typical total stopping distance at 20 mph (32 km/h)?",
    "options": [
      "12 metres",
      "6 metres",
      "23 metres",
      "36 metres"
    ],
    "answer": 0,
    "explanation": "The chart combines 6 m thinking distance and 6 m braking distance, giving 12 m total. These are guide values; conditions affect stopping distance."
  },
  {
    "id": "q051",
    "topic": "distances",
    "page": 20,
    "prompt": "In the book’s chart, what is the typical total stopping distance at 30 mph (48 km/h)?",
    "options": [
      "23 metres",
      "14 metres",
      "36 metres",
      "53 metres"
    ],
    "answer": 0,
    "explanation": "The chart combines 9 m thinking distance and 14 m braking distance, giving 23 m total. These are guide values; conditions affect stopping distance."
  },
  {
    "id": "q052",
    "topic": "distances",
    "page": 20,
    "prompt": "In the book’s chart, what is the typical total stopping distance at 40 mph (64 km/h)?",
    "options": [
      "36 metres",
      "24 metres",
      "53 metres",
      "73 metres"
    ],
    "answer": 0,
    "explanation": "The chart combines 12 m thinking distance and 24 m braking distance, giving 36 m total. These are guide values; conditions affect stopping distance."
  },
  {
    "id": "q053",
    "topic": "distances",
    "page": 20,
    "prompt": "In the book’s chart, what is the typical total stopping distance at 50 mph (80 km/h)?",
    "options": [
      "53 metres",
      "38 metres",
      "36 metres",
      "73 metres"
    ],
    "answer": 0,
    "explanation": "The chart combines 15 m thinking distance and 38 m braking distance, giving 53 m total. These are guide values; conditions affect stopping distance."
  },
  {
    "id": "q054",
    "topic": "distances",
    "page": 20,
    "prompt": "In the book’s chart, what is the typical total stopping distance at 60 mph (96 km/h)?",
    "options": [
      "73 metres",
      "55 metres",
      "53 metres",
      "96 metres"
    ],
    "answer": 0,
    "explanation": "The chart combines 18 m thinking distance and 55 m braking distance, giving 73 m total. These are guide values; conditions affect stopping distance."
  },
  {
    "id": "q055",
    "topic": "distances",
    "page": 20,
    "prompt": "In the book’s chart, what is the typical total stopping distance at 70 mph (112 km/h)?",
    "options": [
      "96 metres",
      "75 metres",
      "73 metres",
      "112 metres"
    ],
    "answer": 0,
    "explanation": "The chart combines 21 m thinking distance and 75 m braking distance, giving 96 m total. These are guide values; conditions affect stopping distance."
  },
  {
    "id": "q056",
    "topic": "distances",
    "page": 20,
    "prompt": "Which two parts make up total stopping distance in the chart?",
    "options": [
      "Thinking distance and braking distance",
      "Parking distance and road width",
      "Wheelbase and vehicle length",
      "Visibility and fuel range"
    ],
    "answer": 0,
    "explanation": "The blue segment is thinking distance and the red segment is braking distance."
  },
  {
    "id": "q057",
    "topic": "distances",
    "page": 20,
    "prompt": "What does the book say about the stopping-distance chart’s values?",
    "options": [
      "They are a general guide and depend on conditions",
      "They are guaranteed in every situation",
      "They apply only when parked",
      "They exclude driver attention"
    ],
    "answer": 0,
    "explanation": "The chart names attention, road surface, weather and vehicle condition as factors affecting the distances."
  },
  {
    "id": "q058",
    "topic": "signs",
    "page": 5,
    "prompt": "What does this road sign mean?",
    "options": [
      "Give way",
      "Stop and give way",
      "End of all restrictions",
      "Slippery road"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Give way” on printed page 5 of your book.",
    "image": "assets/signs/sign-01.jpg"
  },
  {
    "id": "q059",
    "topic": "signs",
    "page": 5,
    "prompt": "What does this road sign mean?",
    "options": [
      "Stop and give way",
      "No tractors",
      "Compulsory cycle path",
      "Other danger"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Stop and give way” on printed page 5 of your book.",
    "image": "assets/signs/sign-02.jpg"
  },
  {
    "id": "q060",
    "topic": "signs",
    "page": 5,
    "prompt": "What does this road sign mean?",
    "options": [
      "Give way to oncoming vehicles",
      "No overtaking",
      "Bend to the left",
      "Priority over oncoming vehicles"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Give way to oncoming vehicles” on printed page 5 of your book.",
    "image": "assets/signs/sign-03.jpg"
  },
  {
    "id": "q061",
    "topic": "signs",
    "page": 5,
    "prompt": "What does this road sign mean?",
    "options": [
      "No entry",
      "One-way traffic",
      "Cyclists may cross",
      "Parking area"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “No entry” on printed page 5 of your book.",
    "image": "assets/signs/sign-04.jpg"
  },
  {
    "id": "q062",
    "topic": "signs",
    "page": 5,
    "prompt": "What does this road sign mean?",
    "options": [
      "Road closed to vehicles",
      "Minimum speed: 65 km/h",
      "Low-flying aircraft",
      "No entry"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Road closed to vehicles” on printed page 5 of your book.",
    "image": "assets/signs/sign-05.jpg"
  },
  {
    "id": "q063",
    "topic": "signs",
    "page": 5,
    "prompt": "What does this road sign mean?",
    "options": [
      "No bicycles",
      "Falling or fallen rocks",
      "No stopping or parking",
      "Minimum following distance: 70 metres"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “No bicycles” on printed page 5 of your book.",
    "image": "assets/signs/sign-06.jpg"
  },
  {
    "id": "q064",
    "topic": "signs",
    "page": 5,
    "prompt": "What does this road sign mean?",
    "options": [
      "No buses",
      "Two-way traffic",
      "Give way",
      "End of all restrictions"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “No buses” on printed page 5 of your book.",
    "image": "assets/signs/sign-07.jpg"
  },
  {
    "id": "q065",
    "topic": "signs",
    "page": 5,
    "prompt": "What does this road sign mean?",
    "options": [
      "No trucks",
      "Main road",
      "No tractors",
      "Compulsory cycle path"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “No trucks” on printed page 5 of your book.",
    "image": "assets/signs/sign-08.jpg"
  },
  {
    "id": "q066",
    "topic": "signs",
    "page": 5,
    "prompt": "What does this road sign mean?",
    "options": [
      "No tractors",
      "Motorway begins",
      "No overtaking",
      "Bend to the left"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “No tractors” on printed page 5 of your book.",
    "image": "assets/signs/sign-09.jpg"
  },
  {
    "id": "q067",
    "topic": "signs",
    "page": 5,
    "prompt": "What does this road sign mean?",
    "options": [
      "Maximum width: 2.30 metres",
      "Road closed to vehicles",
      "One-way traffic",
      "Cyclists may cross"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Maximum width: 2.30 metres” on printed page 5 of your book.",
    "image": "assets/signs/sign-10.jpg"
  },
  {
    "id": "q068",
    "topic": "signs",
    "page": 5,
    "prompt": "What does this road sign mean?",
    "options": [
      "Maximum height: 3.50 metres",
      "No left turn",
      "Minimum speed: 65 km/h",
      "Low-flying aircraft"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Maximum height: 3.50 metres” on printed page 5 of your book.",
    "image": "assets/signs/sign-11.jpg"
  },
  {
    "id": "q069",
    "topic": "signs",
    "page": 6,
    "prompt": "What does this road sign mean?",
    "options": [
      "Minimum following distance: 70 metres",
      "End of the speed limit",
      "Falling or fallen rocks",
      "No stopping or parking"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Minimum following distance: 70 metres” on printed page 6 of your book.",
    "image": "assets/signs/sign-12.jpg"
  },
  {
    "id": "q070",
    "topic": "signs",
    "page": 6,
    "prompt": "What does this road sign mean?",
    "options": [
      "No left turn",
      "Snow chains mandatory",
      "Two-way traffic",
      "Give way"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “No left turn” on printed page 6 of your book.",
    "image": "assets/signs/sign-13.jpg"
  },
  {
    "id": "q071",
    "topic": "signs",
    "page": 6,
    "prompt": "What does this road sign mean?",
    "options": [
      "No right turn",
      "Bend to the right",
      "Main road",
      "No trucks"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “No right turn” on printed page 6 of your book.",
    "image": "assets/signs/sign-14.jpg"
  },
  {
    "id": "q072",
    "topic": "signs",
    "page": 6,
    "prompt": "What does this road sign mean?",
    "options": [
      "No U-turn",
      "Roadworks",
      "Motorway begins",
      "No overtaking"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “No U-turn” on printed page 6 of your book.",
    "image": "assets/signs/sign-15.jpg"
  },
  {
    "id": "q073",
    "topic": "signs",
    "page": 6,
    "prompt": "What does this road sign mean?",
    "options": [
      "No overtaking",
      "Dead end",
      "Road closed to vehicles",
      "One-way traffic"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “No overtaking” on printed page 6 of your book.",
    "image": "assets/signs/sign-16.jpg"
  },
  {
    "id": "q074",
    "topic": "signs",
    "page": 6,
    "prompt": "What does this road sign mean?",
    "options": [
      "Speed limit: 50 km/h",
      "No parking on even days",
      "Minimum following distance: 70 metres",
      "Minimum speed: 65 km/h"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Speed limit: 50 km/h” on printed page 6 of your book.",
    "image": "assets/signs/sign-17.jpg"
  },
  {
    "id": "q075",
    "topic": "signs",
    "page": 6,
    "prompt": "What does this road sign mean?",
    "options": [
      "No horn",
      "Stop and give way",
      "End of the speed limit",
      "Falling or fallen rocks"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “No horn” on printed page 6 of your book.",
    "image": "assets/signs/sign-18.jpg"
  },
  {
    "id": "q076",
    "topic": "signs",
    "page": 6,
    "prompt": "What does this road sign mean?",
    "options": [
      "End of all restrictions",
      "No tractors",
      "Snow chains mandatory",
      "Two-way traffic"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “End of all restrictions” on printed page 6 of your book.",
    "image": "assets/signs/sign-19.jpg"
  },
  {
    "id": "q077",
    "topic": "signs",
    "page": 6,
    "prompt": "What does this road sign mean?",
    "options": [
      "End of the speed limit",
      "No overtaking",
      "Bend to the right",
      "Main road"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “End of the speed limit” on printed page 6 of your book.",
    "image": "assets/signs/sign-20.jpg"
  },
  {
    "id": "q078",
    "topic": "signs",
    "page": 6,
    "prompt": "What does this road sign mean?",
    "options": [
      "Turn left",
      "Vehicles may pass either side",
      "Roadworks",
      "Motorway begins"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Turn left” on printed page 6 of your book.",
    "image": "assets/signs/sign-21.jpg"
  },
  {
    "id": "q079",
    "topic": "signs",
    "page": 6,
    "prompt": "What does this road sign mean?",
    "options": [
      "Turn right",
      "End of minimum speed limit",
      "Dead end",
      "Road closed to vehicles"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Turn right” on printed page 6 of your book.",
    "image": "assets/signs/sign-22.jpg"
  },
  {
    "id": "q080",
    "topic": "signs",
    "page": 6,
    "prompt": "What does this road sign mean?",
    "options": [
      "One-way traffic",
      "Zebra crossing ahead",
      "No parking on even days",
      "Minimum following distance: 70 metres"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “One-way traffic” on printed page 6 of your book.",
    "image": "assets/signs/sign-23.jpg"
  },
  {
    "id": "q081",
    "topic": "signs",
    "page": 6,
    "prompt": "What does this road sign mean?",
    "options": [
      "Vehicles may pass either side",
      "Side winds",
      "Stop and give way",
      "End of all restrictions"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Vehicles may pass either side” on printed page 6 of your book.",
    "image": "assets/signs/sign-24.jpg"
  },
  {
    "id": "q082",
    "topic": "signs",
    "page": 6,
    "prompt": "What does this road sign mean?",
    "options": [
      "Keep left",
      "End of main road",
      "No tractors",
      "Snow chains mandatory"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Keep left” on printed page 6 of your book.",
    "image": "assets/signs/sign-25.jpg"
  },
  {
    "id": "q083",
    "topic": "signs",
    "page": 7,
    "prompt": "What does this road sign mean?",
    "options": [
      "Compulsory cycle path",
      "Motorway ends",
      "No overtaking",
      "Bend to the right"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Compulsory cycle path” on printed page 7 of your book.",
    "image": "assets/signs/sign-26.jpg"
  },
  {
    "id": "q084",
    "topic": "signs",
    "page": 7,
    "prompt": "What does this road sign mean?",
    "options": [
      "Snow chains mandatory",
      "No bicycles",
      "One-way traffic",
      "Roadworks"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Snow chains mandatory” on printed page 7 of your book.",
    "image": "assets/signs/sign-27.jpg"
  },
  {
    "id": "q085",
    "topic": "signs",
    "page": 7,
    "prompt": "What does this road sign mean?",
    "options": [
      "Go right",
      "No left turn",
      "End of minimum speed limit",
      "Dead end"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Go right” on printed page 7 of your book.",
    "image": "assets/signs/sign-28.jpg"
  },
  {
    "id": "q086",
    "topic": "signs",
    "page": 7,
    "prompt": "What does this road sign mean?",
    "options": [
      "Mini-roundabout: give way to traffic from the right",
      "End of the speed limit",
      "Zebra crossing ahead",
      "No parking on even days"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Mini-roundabout: give way to traffic from the right” on printed page 7 of your book.",
    "image": "assets/signs/sign-29.jpg"
  },
  {
    "id": "q087",
    "topic": "signs",
    "page": 7,
    "prompt": "What does this road sign mean?",
    "options": [
      "Minimum speed: 65 km/h",
      "Snow chains mandatory",
      "Side winds",
      "Stop and give way"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Minimum speed: 65 km/h” on printed page 7 of your book.",
    "image": "assets/signs/sign-30.jpg"
  },
  {
    "id": "q088",
    "topic": "signs",
    "page": 7,
    "prompt": "What does this road sign mean?",
    "options": [
      "End of minimum speed limit",
      "Road narrows on both sides",
      "End of main road",
      "No tractors"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “End of minimum speed limit” on printed page 7 of your book.",
    "image": "assets/signs/sign-31.jpg"
  },
  {
    "id": "q089",
    "topic": "signs",
    "page": 7,
    "prompt": "What does this road sign mean?",
    "options": [
      "Mandatory pedestrian path",
      "Traffic lights ahead",
      "Motorway ends",
      "No overtaking"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Mandatory pedestrian path” on printed page 7 of your book.",
    "image": "assets/signs/sign-32.jpg"
  },
  {
    "id": "q090",
    "topic": "signs",
    "page": 7,
    "prompt": "What does this road sign mean?",
    "options": [
      "Bend to the left",
      "Hospital",
      "No bicycles",
      "One-way traffic"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Bend to the left” on printed page 7 of your book.",
    "image": "assets/signs/sign-33.jpg"
  },
  {
    "id": "q091",
    "topic": "signs",
    "page": 7,
    "prompt": "What does this road sign mean?",
    "options": [
      "Bend to the right",
      "No parking on odd days",
      "No left turn",
      "Minimum speed: 65 km/h"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Bend to the right” on printed page 7 of your book.",
    "image": "assets/signs/sign-34.jpg"
  },
  {
    "id": "q092",
    "topic": "signs",
    "page": 7,
    "prompt": "What does this road sign mean?",
    "options": [
      "Road narrows on both sides",
      "Give way to oncoming vehicles",
      "End of the speed limit",
      "Zebra crossing ahead"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Road narrows on both sides” on printed page 7 of your book.",
    "image": "assets/signs/sign-35.jpg"
  },
  {
    "id": "q093",
    "topic": "signs",
    "page": 7,
    "prompt": "What does this road sign mean?",
    "options": [
      "Slippery road",
      "Maximum width: 2.30 metres",
      "Snow chains mandatory",
      "Side winds"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Slippery road” on printed page 7 of your book.",
    "image": "assets/signs/sign-36.jpg"
  },
  {
    "id": "q094",
    "topic": "signs",
    "page": 8,
    "prompt": "What does this road sign mean?",
    "options": [
      "Falling or fallen rocks",
      "Speed limit: 50 km/h",
      "Bend to the right",
      "End of main road"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Falling or fallen rocks” on printed page 8 of your book.",
    "image": "assets/signs/sign-37.jpg"
  },
  {
    "id": "q095",
    "topic": "signs",
    "page": 8,
    "prompt": "What does this road sign mean?",
    "options": [
      "Zebra crossing ahead",
      "Vehicles may pass either side",
      "Traffic lights ahead",
      "Motorway ends"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Zebra crossing ahead” on printed page 8 of your book.",
    "image": "assets/signs/sign-38.jpg"
  },
  {
    "id": "q096",
    "topic": "signs",
    "page": 8,
    "prompt": "What does this road sign mean?",
    "options": [
      "School crossing ahead",
      "End of minimum speed limit",
      "Hospital",
      "No bicycles"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “School crossing ahead” on printed page 8 of your book.",
    "image": "assets/signs/sign-39.jpg"
  },
  {
    "id": "q097",
    "topic": "signs",
    "page": 8,
    "prompt": "What does this road sign mean?",
    "options": [
      "Cyclists may cross",
      "Zebra crossing ahead",
      "No parking on odd days",
      "No left turn"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Cyclists may cross” on printed page 8 of your book.",
    "image": "assets/signs/sign-40.jpg"
  },
  {
    "id": "q098",
    "topic": "signs",
    "page": 8,
    "prompt": "What does this road sign mean?",
    "options": [
      "Roadworks",
      "Roundabout ahead",
      "Give way to oncoming vehicles",
      "End of the speed limit"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Roadworks” on printed page 8 of your book.",
    "image": "assets/signs/sign-41.jpg"
  },
  {
    "id": "q099",
    "topic": "signs",
    "page": 8,
    "prompt": "What does this road sign mean?",
    "options": [
      "Traffic lights ahead",
      "No parking",
      "Maximum width: 2.30 metres",
      "Snow chains mandatory"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Traffic lights ahead” on printed page 8 of your book.",
    "image": "assets/signs/sign-42.jpg"
  },
  {
    "id": "q100",
    "topic": "signs",
    "page": 8,
    "prompt": "What does this road sign mean?",
    "options": [
      "Other danger",
      "300 metres to interchange",
      "Speed limit: 50 km/h",
      "Bend to the right"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Other danger” on printed page 8 of your book.",
    "image": "assets/signs/sign-43.jpg"
  },
  {
    "id": "q101",
    "topic": "signs",
    "page": 8,
    "prompt": "What does this road sign mean?",
    "options": [
      "Two-way traffic",
      "No buses",
      "Vehicles may pass either side",
      "Roadworks"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Two-way traffic” on printed page 8 of your book.",
    "image": "assets/signs/sign-44.jpg"
  },
  {
    "id": "q102",
    "topic": "signs",
    "page": 8,
    "prompt": "What does this road sign mean?",
    "options": [
      "Side winds",
      "No right turn",
      "End of minimum speed limit",
      "Hospital"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Side winds” on printed page 8 of your book.",
    "image": "assets/signs/sign-45.jpg"
  },
  {
    "id": "q103",
    "topic": "signs",
    "page": 8,
    "prompt": "What does this road sign mean?",
    "options": [
      "Roundabout ahead",
      "Turn left",
      "Zebra crossing ahead",
      "No parking on odd days"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Roundabout ahead” on printed page 8 of your book.",
    "image": "assets/signs/sign-46.jpg"
  },
  {
    "id": "q104",
    "topic": "signs",
    "page": 8,
    "prompt": "What does this road sign mean?",
    "options": [
      "Low-flying aircraft",
      "Go right",
      "Side winds",
      "Give way to oncoming vehicles"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Low-flying aircraft” on printed page 8 of your book.",
    "image": "assets/signs/sign-47.jpg"
  },
  {
    "id": "q105",
    "topic": "signs",
    "page": 9,
    "prompt": "What does this road sign mean?",
    "options": [
      "Dead end",
      "Road narrows on both sides",
      "No parking",
      "Maximum width: 2.30 metres"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Dead end” on printed page 9 of your book.",
    "image": "assets/signs/sign-48.jpg"
  },
  {
    "id": "q106",
    "topic": "signs",
    "page": 9,
    "prompt": "What does this road sign mean?",
    "options": [
      "Hospital",
      "Traffic lights ahead",
      "300 metres to interchange",
      "Speed limit: 50 km/h"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Hospital” on printed page 9 of your book.",
    "image": "assets/signs/sign-49.jpg"
  },
  {
    "id": "q107",
    "topic": "signs",
    "page": 9,
    "prompt": "What does this road sign mean?",
    "options": [
      "Priority over oncoming vehicles",
      "Hospital",
      "No buses",
      "Vehicles may pass either side"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Priority over oncoming vehicles” on printed page 9 of your book.",
    "image": "assets/signs/sign-50.jpg"
  },
  {
    "id": "q108",
    "topic": "signs",
    "page": 9,
    "prompt": "What does this road sign mean?",
    "options": [
      "Main road",
      "Parking area",
      "No right turn",
      "End of minimum speed limit"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Main road” on printed page 9 of your book.",
    "image": "assets/signs/sign-51.jpg"
  },
  {
    "id": "q109",
    "topic": "signs",
    "page": 9,
    "prompt": "What does this road sign mean?",
    "options": [
      "End of main road",
      "No entry",
      "Turn left",
      "Zebra crossing ahead"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “End of main road” on printed page 9 of your book.",
    "image": "assets/signs/sign-52.jpg"
  },
  {
    "id": "q110",
    "topic": "signs",
    "page": 10,
    "prompt": "What does this road sign mean?",
    "options": [
      "No parking",
      "Maximum height: 3.50 metres",
      "Go right",
      "Side winds"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “No parking” on printed page 10 of your book.",
    "image": "assets/signs/sign-53.jpg"
  },
  {
    "id": "q111",
    "topic": "signs",
    "page": 10,
    "prompt": "What does this road sign mean?",
    "options": [
      "No stopping or parking",
      "No horn",
      "Road narrows on both sides",
      "End of main road"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “No stopping or parking” on printed page 10 of your book.",
    "image": "assets/signs/sign-54.jpg"
  },
  {
    "id": "q112",
    "topic": "signs",
    "page": 10,
    "prompt": "What does this road sign mean?",
    "options": [
      "No parking on even days",
      "Keep left",
      "Traffic lights ahead",
      "300 metres to interchange"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “No parking on even days” on printed page 10 of your book.",
    "image": "assets/signs/sign-55.jpg"
  },
  {
    "id": "q113",
    "topic": "signs",
    "page": 10,
    "prompt": "What does this road sign mean?",
    "options": [
      "No parking on odd days",
      "Mandatory pedestrian path",
      "Hospital",
      "No buses"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “No parking on odd days” on printed page 10 of your book.",
    "image": "assets/signs/sign-56.jpg"
  },
  {
    "id": "q114",
    "topic": "signs",
    "page": 10,
    "prompt": "What does this road sign mean?",
    "options": [
      "Parking area",
      "School crossing ahead",
      "No parking on odd days",
      "No right turn"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Parking area” on printed page 10 of your book.",
    "image": "assets/signs/sign-57.jpg"
  },
  {
    "id": "q115",
    "topic": "signs",
    "page": 10,
    "prompt": "What does this road sign mean?",
    "options": [
      "Motorway begins",
      "Roundabout ahead",
      "No entry",
      "Turn left"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Motorway begins” on printed page 10 of your book.",
    "image": "assets/signs/sign-58.jpg"
  },
  {
    "id": "q116",
    "topic": "signs",
    "page": 10,
    "prompt": "What does this road sign mean?",
    "options": [
      "Motorway ends",
      "No parking",
      "Maximum height: 3.50 metres",
      "Go right"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “Motorway ends” on printed page 10 of your book.",
    "image": "assets/signs/sign-59.jpg"
  },
  {
    "id": "q117",
    "topic": "signs",
    "page": 10,
    "prompt": "What does this road sign mean?",
    "options": [
      "300 metres to interchange",
      "Give way",
      "No horn",
      "Road narrows on both sides"
    ],
    "answer": 0,
    "explanation": "The sign is labelled “300 metres to interchange” on printed page 10 of your book.",
    "image": "assets/signs/sign-60.jpg"
  },
  {
    "id": "q118",
    "topic": "basics",
    "page": 3,
    "prompt": "What does this dashboard symbol represent?",
    "options": [
      "Fuel level",
      "Battery charge",
      "Coolant temperature",
      "Turn indicators"
    ],
    "answer": 0,
    "explanation": "The dashboard-symbol table identifies this as fuel level.",
    "image": "assets/signs/control-01.jpg"
  },
  {
    "id": "q119",
    "topic": "basics",
    "page": 3,
    "prompt": "What does this dashboard symbol represent?",
    "options": [
      "Battery charge",
      "Engine oil pressure",
      "Brake system",
      "High beam"
    ],
    "answer": 0,
    "explanation": "The dashboard-symbol table identifies this as battery charge.",
    "image": "assets/signs/control-02.jpg"
  },
  {
    "id": "q120",
    "topic": "basics",
    "page": 3,
    "prompt": "What does this dashboard symbol represent?",
    "options": [
      "Engine oil pressure",
      "Hazard warning flashers",
      "Anti-lock braking system (ABS)",
      "Heated rear window"
    ],
    "answer": 0,
    "explanation": "The dashboard-symbol table identifies this as engine oil pressure.",
    "image": "assets/signs/control-03.jpg"
  },
  {
    "id": "q121",
    "topic": "basics",
    "page": 3,
    "prompt": "What does this dashboard symbol represent?",
    "options": [
      "Hazard warning flashers",
      "Coolant temperature",
      "Turn indicators",
      "Handbrake"
    ],
    "answer": 0,
    "explanation": "The dashboard-symbol table identifies this as hazard warning flashers.",
    "image": "assets/signs/control-04.jpg"
  },
  {
    "id": "q122",
    "topic": "basics",
    "page": 3,
    "prompt": "What does this dashboard symbol represent?",
    "options": [
      "Coolant temperature",
      "Brake system",
      "High beam",
      "Windscreen defrosting"
    ],
    "answer": 0,
    "explanation": "The dashboard-symbol table identifies this as coolant temperature.",
    "image": "assets/signs/control-05.jpg"
  },
  {
    "id": "q123",
    "topic": "basics",
    "page": 3,
    "prompt": "What does this dashboard symbol represent?",
    "options": [
      "Brake system",
      "Anti-lock braking system (ABS)",
      "Heated rear window",
      "Fuel level"
    ],
    "answer": 0,
    "explanation": "The dashboard-symbol table identifies this as brake system.",
    "image": "assets/signs/control-06.jpg"
  },
  {
    "id": "q124",
    "topic": "basics",
    "page": 3,
    "prompt": "What does this dashboard symbol represent?",
    "options": [
      "Anti-lock braking system (ABS)",
      "Turn indicators",
      "Handbrake",
      "Battery charge"
    ],
    "answer": 0,
    "explanation": "The dashboard-symbol table identifies this as anti-lock braking system (abs).",
    "image": "assets/signs/control-07.jpg"
  },
  {
    "id": "q125",
    "topic": "basics",
    "page": 3,
    "prompt": "What does this dashboard symbol represent?",
    "options": [
      "Turn indicators",
      "High beam",
      "Windscreen defrosting",
      "Engine oil pressure"
    ],
    "answer": 0,
    "explanation": "The dashboard-symbol table identifies this as turn indicators.",
    "image": "assets/signs/control-08.jpg"
  },
  {
    "id": "q126",
    "topic": "basics",
    "page": 3,
    "prompt": "What does this dashboard symbol represent?",
    "options": [
      "High beam",
      "Heated rear window",
      "Fuel level",
      "Hazard warning flashers"
    ],
    "answer": 0,
    "explanation": "The dashboard-symbol table identifies this as high beam.",
    "image": "assets/signs/control-09.jpg"
  },
  {
    "id": "q127",
    "topic": "basics",
    "page": 3,
    "prompt": "What does this dashboard symbol represent?",
    "options": [
      "Heated rear window",
      "Handbrake",
      "Battery charge",
      "Coolant temperature"
    ],
    "answer": 0,
    "explanation": "The dashboard-symbol table identifies this as heated rear window.",
    "image": "assets/signs/control-10.jpg"
  },
  {
    "id": "q128",
    "topic": "basics",
    "page": 3,
    "prompt": "What does this dashboard symbol represent?",
    "options": [
      "Handbrake",
      "Windscreen defrosting",
      "Engine oil pressure",
      "Brake system"
    ],
    "answer": 0,
    "explanation": "The dashboard-symbol table identifies this as handbrake.",
    "image": "assets/signs/control-11.jpg"
  },
  {
    "id": "q129",
    "topic": "basics",
    "page": 3,
    "prompt": "What does this dashboard symbol represent?",
    "options": [
      "Windscreen defrosting",
      "Fuel level",
      "Hazard warning flashers",
      "Anti-lock braking system (ABS)"
    ],
    "answer": 0,
    "explanation": "The dashboard-symbol table identifies this as windscreen defrosting.",
    "image": "assets/signs/control-12.jpg"
  }
];
if (typeof module !== "undefined") module.exports = QUESTIONS;
