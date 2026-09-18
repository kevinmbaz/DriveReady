"""Curated questions transcribed from the supplied scan; page = printed page.
Images are extracted directly from PDF regions, with answer captions excluded.
"""
import json, sys
from pathlib import Path
root = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(root / '.tools'))
import pymupdf
doc = pymupdf.open(sys.argv[1])
questions = []
def add(topic, page, prompt, answer, wrong, explanation, image=None):
    q = dict(id=f'q{len(questions)+1:03}', topic=topic, page=page, prompt=prompt,
             options=[answer, *wrong], answer=0, explanation=explanation)
    if image: q['image'] = image
    questions.append(q)

def text(topic, page, prompt, answer, a, b, c, explanation):
    add(topic,page,prompt,answer,[a,b,c],explanation)

text('basics',1,'Which sequence does the book use for moving off safely?','Prepare → Observation → Move','Move → Signal → Observe','Signal → Move → Prepare','Observe → Move → Prepare','Prepare the controls, observe mirrors and blind spots, then move off.')
text('basics',1,'Which gear is selected when preparing to move off?','First gear','Second gear','Reverse gear','Neutral','The preparation routine starts with the clutch fully down and first gear selected.')
text('basics',1,'How do you check the blind spot before moving off in the book’s routine?','Look over your right shoulder','Only check the interior mirror','Look down at the gear lever','Only check the left door mirror','After checking the interior and right door mirrors, look over the right shoulder to cover blind spots.')
text('basics',1,'When should you consider signalling as you move off?','When other people would benefit','Only when driving at night','Only after reaching normal speed','Never when moving off','The Move section says to consider a signal and apply it when other people would benefit.')
text('basics',1,'Which item belongs in the cockpit drill?','Adjusting the seat and mirrors','Selecting a high gear','Sounding the horn repeatedly','Releasing the handbrake immediately','The cockpit drill covers doors, seat position, seat adjustment, seatbelt and mirrors.')
text('basics',2,'What does M–S–M stand for?','Mirrors → Signal → Manoeuvre','Move → Stop → Move','Mirrors → Speed → Mirrors','Manoeuvre → Signal → Mirrors','The stopping section uses the Mirrors, Signal, Manoeuvre routine before changing speed or direction.')
text('basics',2,'Why check your mirrors well before stopping?','To assess the speed and distance of following traffic','To check the fuel level','To avoid having to signal','To find the biting point','Early mirror checks help you assess vehicles following you before beginning the manoeuvre.')
text('basics',2,'After stopping completely, how does the book say to secure the car?','Apply the handbrake and select neutral','Keep the accelerator pressed','Select the highest gear','Release all brakes immediately','Keep clutch and brake applied until stopped, then select the handbrake and neutral.')
text('basics',4,'In the illustrated traffic-light sequence, what comes after red?','Red and amber together','Green and amber together','Amber alone','A flashing green light','The diagram shows red, red and amber, green, then amber.')
text('basics',13,'What does an amber-only traffic light tell you about the next light?','The next light will be red','The next light will be green','The lights are switched off','The next light will be blue','The book explains that amber alone precedes red, while red and amber together precede green.')
text('basics',13,'Which vehicle parts does the book say must be kept in working condition?','Brakes, steering, tyres, indicators and lights','Only the radio and air conditioning','Only the number plates','Only the seats and luggage compartment','These are the vehicle components listed in question 11 of the book.')
text('basics',13,'When meeting other vehicles on a dark road, what should you do with main beam?','Switch to dipped beam','Keep main beam on continuously','Switch off every light','Use only the interior light','The book says to switch from main beam to dipped beam when meeting other vehicles.')
text('basics',13,'Who are traffic rules for, according to the book?','Everyone using the road','Only newly qualified drivers','Only drivers of large vehicles','Only pedestrians','The answer to question 9 is everyone using the road.')
text('rules',14,'What should you avoid when another vehicle is overtaking you?','Increasing your speed','Keeping a steady course','Observing surrounding traffic','Allowing it to pass','Question 16 says not to increase your speed while being overtaken.')
text('rules',14,'From which side do you normally overtake in this book?','The right','The left','Either side without checking','The pavement side','The book normally places overtaking on the right, with a specific exception for a vehicle turning right.')
text('rules',14,'When does the book describe passing a vehicle on its left?','It signals right, takes the middle of the road, and there is adequate space on the left','Whenever the right lane is busy','Whenever you are travelling faster','At every pedestrian crossing','All three conditions appear in the exception in question 17.')
text('rules',14,'Which location does the book list as a place where overtaking is prohibited?','A pedestrian crossing','A clear straight road with a broken centre line','A designated overtaking lane','A road with no oncoming traffic and clear visibility','Pedestrian crossings, junctions, corners and other restricted locations are listed in question 18.')
text('rules',14,'What should you do if a vehicle accelerates while you are overtaking it?','Slow down and return to the left lane when safe','Race it to the next junction','Continue regardless of oncoming traffic','Move onto the pavement','The book’s answer is to slow down and get back into the left lane.')
text('rules',14,'When passing a row of parked vehicles, what should you watch for?','Pedestrians, opening doors and vehicles pulling out','Only the colour of the parked cars','Only vehicles behind you','Only the road’s speed signs','Question 23 highlights pedestrians, people emerging from vehicles, and cars moving into the road.')
text('rules',15,'Where does the book say you must never reverse into?','A main road','A suitable parking bay','Your own driveway','A quiet side road during a safe manoeuvre','Question 25 specifically says never to reverse into a main road.')
text('rules',15,'Which action also calls for a mirror check?','Opening your car door','Changing the radio station while parked','Reading the odometer while parked','Adjusting the heater before starting','The book includes opening the car door among the times to use mirrors.')
text('rules',15,'At an uncontrolled junction, which approaching traffic has priority in the book?','Traffic from the right','Traffic from the left in every case','The largest vehicle','The newest vehicle','Question 30 says to give way to vehicles approaching from the right.')
text('rules',15,'A ball rolls into the road. What response does the book give?','Stop because a child may run after it','Accelerate before the ball reaches you','Swerve without checking','Ignore it if no child is visible','A child may follow the ball into the road; the book’s answer is to stop.')
text('rules',15,'Which condition does the book list as making you unfit to drive?','Being too tired','Having adjusted your mirrors','Wearing a seatbelt','Having clean windows','The fitness-to-drive list includes being too tired, too ill, too emotional, or affected by drugs or alcohol.')
text('rules',15,'Which set of vehicle documents appears in the book?','Driving licence, insurance, vehicle test and registration certificates','Passport, shopping receipt and map','Only a learner’s notebook','Only an insurance quotation','Question 28 lists the licence, valid insurance, vehicle test certificate and registration certificate.')
text('rules',16,'Which actions can cause loss of control according to the book?','Hard braking, hard acceleration and sudden steering','Smooth acceleration and gentle steering','Checking mirrors and signalling','Keeping windows clean','These three abrupt actions are listed as causes in question 36.')
text('rules',16,'What does the book recommend for more control when descending a hill?','Reduce speed and change to a lower gear','Coast in neutral','Switch off the engine','Use the highest gear and accelerate','Question 38 describes reducing speed and using a lower gear for braking power and control.')
text('manoeuvres',14,'When parking uphill beside a kerb in a manual car, which combination does the book give?','Forward gear, wheels away from the kerb, handbrake firmly applied','Neutral, wheels straight, handbrake released','Reverse gear, wheels towards the kerb','Highest gear with the engine running','Question 21 gives a forward gear and wheels away from the kerb when facing uphill, with the handbrake firmly applied.')
text('manoeuvres',14,'When parking downhill beside a kerb in a manual car, which combination does the book give?','Reverse gear and wheels towards the kerb','First gear and wheels away from the kerb','Neutral and wheels away from the kerb','No handbrake and wheels straight','The downhill instructions specify reverse gear, wheels towards the kerb and a firmly applied handbrake.')
text('manoeuvres',14,'Which transmission setting does the book specify for parking an automatic car on a hill?','Park','Drive','Neutral','Reverse only','The parking-on-a-hill answer says to use Park for an automatic gearbox.')
text('manoeuvres',17,'Before beginning the three-point turn, where does the book show the car stopping?','At the left edge of the road','Across both lanes','In the centre of the junction','On the right pavement','The first step is to signal left, check behind, stop on the left edge and apply the handbrake.')
text('manoeuvres',17,'Which gear is used for the middle movement of the three-point turn?','Reverse','First','Second','Third','The three movements are forward in first gear, reverse, then forward in first gear.')
text('manoeuvres',18,'What does N mean on the automatic gear selector?','Neutral','Normal speed','Night mode','No entry','The automatic-transmission key gives P = Park, R = Reverse, N = Neutral and D = Drive.')
text('manoeuvres',18,'What does D mean on the automatic gear selector?','Drive','Downhill only','Defrost','Disabled','The transmission key on printed page 18 identifies D as Drive.')
text('manoeuvres',18,'What should you pay attention to when approaching a roundabout?','Direction information, signs and traffic lights','Only the vehicle behind','Only the central island’s appearance','Only your speedometer','The roundabout section says to follow direction information, traffic signs and lights.')
text('manoeuvres',19,'In the book’s right-turn example, what happens if an oncoming vehicle is approaching?','Stop, select first gear, and turn after it has passed','Turn across its path immediately','Accelerate in third gear','Reverse into the side road','The illustrated oncoming-vehicle example describes stopping and selecting first gear before turning after the vehicle passes.')
text('markings',11,'What does a broken white centre line allow according to the book?','Overtaking if it is safe','Overtaking without observing traffic','Parking in the middle of the road','Driving on the pavement','Broken lines separate traffic directions; the book says overtaking is possible if safe.')
text('markings',11,'With double white lines, which line do you follow?','The line closest to you','Always the line farthest away','Only the broken line regardless of side','Neither line','The book says to follow the closest line: if it is continuous, do not overtake.')
text('markings',11,'Where must you stop at a STOP sign with a transverse line?','Before crossing the line','Beyond the junction','On the pedestrian crossing','Only after entering the main road','The STOP-sign diagrams require stopping before the transverse line.')
text('markings',11,'A vehicle has stopped at a zebra crossing for pedestrians. What must you not do?','Overtake that vehicle','Stop behind it','Watch for pedestrians','Leave the crossing clear','The crossing section explicitly says not to overtake a vehicle stopped to let pedestrians cross.')
text('markings',11,'When traffic queues near a zebra crossing, what should you do?','Keep the crossing clear','Queue on the crossing','Use the zigzag area as a parking space','Overtake the queue without looking','The book says drivers should not queue over the crossing and should look for pedestrians when moving off.')
text('markings',11,'In this book, what do double yellow lines indicate?','No parking and no stopping','Unlimited parking','A compulsory cycle lane','A pedestrian-only street','The double-yellow-line diagram is labelled No parking & Stopping.')
text('markings',12,'When the road is clear, what does the book advise about a hatched area bounded by a broken line?','Try to avoid driving over it','Always drive along it','Park inside it','Treat it as a permanent extra lane','The first hatched-road example advises avoiding the area when the road is clear.')
text('markings',12,'Which boundary type appears in the book’s example allowing entry into a hatched area when joining a queue?','A broken outer line','A solid outer line','A raised barrier','A double solid line','The third example permits driving over the hatched marking in the described queue situation provided the outer line is broken.')
text('distances',15,'What minimum time gap does the book give for following a car in ideal conditions?','At least 2 seconds','Half a second','Exactly 1 second','No gap at low speed','Question 24 specifies at least two seconds in ideal conditions. It also gives a separate approximate distance rule.')
text('distances',16,'According to the book, what distance must be kept from a corner or junction where no yellow lines are marked?','9 metres','3 metres','5 metres','20 metres','Question 40 gives a minimum distance of 9 metres. This is the supplied book’s figure.')
text('distances',16,'According to the book, what is the maximum number of cars in one convoy?','6 cars','3 cars','10 cars','12 cars','Question 43 states a maximum of six cars in one convoy.')
text('distances',16,'What minimum gap between cars in a convoy does the book give?','36 metres','9 metres','18 metres','90 metres','Question 43 gives at least 36 metres between cars in a convoy.')
text('distances',16,'What minimum separation between convoys does the book give?','90 metres','36 metres','45 metres','60 metres','Question 44 gives at least 90 metres between convoys.')
for speed, kmh, think, brake, total, wrong in [(20,32,6,6,12,[6,23,36]),(30,48,9,14,23,[14,36,53]),(40,64,12,24,36,[24,53,73]),(50,80,15,38,53,[38,36,73]),(60,96,18,55,73,[55,53,96]),(70,112,21,75,96,[75,73,112])]:
    add('distances',20,f'In the book’s chart, what is the typical total stopping distance at {speed} mph ({kmh} km/h)?',f'{total} metres',[f'{v} metres' for v in wrong],f'The chart combines {think} m thinking distance and {brake} m braking distance, giving {total} m total. These are guide values; conditions affect stopping distance.')
text('distances',20,'Which two parts make up total stopping distance in the chart?','Thinking distance and braking distance','Parking distance and road width','Wheelbase and vehicle length','Visibility and fuel range','The blue segment is thinking distance and the red segment is braking distance.')
text('distances',20,'What does the book say about the stopping-distance chart’s values?','They are a general guide and depend on conditions','They are guaranteed in every situation','They apply only when parked','They exclude driver attention','The chart names attention, road surface, weather and vehicle condition as factors affecting the distances.')

# Cropping coordinates refer to the 1.7x page preview (1012 by 1430 pixels).
def crop(page, name, box):
    path = root / 'assets' / 'signs' / f'{name}.jpg'
    path.parent.mkdir(parents=True, exist_ok=True)
    rect = pymupdf.Rect(*(v/1.7 for v in box))
    doc[page].get_pixmap(matrix=pymupdf.Matrix(2.5,2.5),clip=rect).save(str(path))
    return f'assets/signs/{name}.jpg'

signs = [
 (5,'Give way',(62,357,208,478)), (5,'Stop and give way',(280,357,403,484)),
 (5,'Give way to oncoming vehicles',(443,357,564,478)), (5,'No entry',(621,357,743,478)),
 (5,'Road closed to vehicles',(816,357,937,478)), (5,'No bicycles',(439,574,560,693)),
 (5,'No buses',(616,574,738,693)), (5,'No trucks',(808,574,930,693)),
 (5,'No tractors',(68,804,186,919)), (5,'Maximum width: 2.30 metres',(68,1036,187,1157)),
 (5,'Maximum height: 3.50 metres',(440,1036,560,1157)),
 (6,'Minimum following distance: 70 metres',(57,99,185,221)),
 (6,'No left turn',(255,96,381,222)), (6,'No right turn',(445,96,573,222)),
 (6,'No U-turn',(616,96,744,222)), (6,'No overtaking',(805,96,932,222)),
 (6,'Speed limit: 50 km/h',(310,295,438,417)), (6,'No horn',(556,295,684,417)),
 (6,'End of all restrictions',(312,516,437,644)), (6,'End of the speed limit',(810,516,934,644)),
 (6,'Turn left',(57,790,182,920)), (6,'Turn right',(242,790,370,920)),
 (6,'One-way traffic',(442,790,546,929)), (6,'Vehicles may pass either side',(620,790,748,920)),
 (6,'Keep left',(817,1062,946,1194)),
 (7,'Compulsory cycle path',(81,59,215,187)), (7,'Snow chains mandatory',(251,59,384,187)),
 (7,'Go right',(607,59,735,176)), (7,'Mini-roundabout: give way to traffic from the right',(440,280,571,410)),
 (7,'Minimum speed: 65 km/h',(625,280,754,410)), (7,'End of minimum speed limit',(797,280,928,410)),
 (7,'Mandatory pedestrian path',(629,497,758,618)),
 (7,'Bend to the left',(66,788,190,893)), (7,'Bend to the right',(238,788,363,893)),
 (7,'Road narrows on both sides',(242,981,365,1089)), (7,'Slippery road',(599,1178,724,1289)),
 (8,'Falling or fallen rocks',(60,39,190,155)), (8,'Zebra crossing ahead',(251,39,383,155)),
 (8,'School crossing ahead',(448,39,580,155)), (8,'Cyclists may cross',(638,39,770,155)),
 (8,'Roadworks',(449,212,580,333)), (8,'Traffic lights ahead',(638,212,771,333)),
 (8,'Other danger',(824,212,955,333)), (8,'Two-way traffic',(61,383,193,488)),
 (8,'Side winds',(61,578,191,694)), (8,'Roundabout ahead',(635,578,768,694)),
 (8,'Low-flying aircraft',(821,578,951,694)),
 (9,'Dead end',(741,99,840,298)), (9,'Hospital',(429,802,529,929)),
 (9,'Priority over oncoming vehicles',(543,802,677,929)), (9,'Main road',(279,975,415,1099)),
 (9,'End of main road',(433,975,568,1099)),
 (10,'No parking',(65,151,188,280)), (10,'No stopping or parking',(279,151,403,280)),
 (10,'No parking on even days',(531,151,654,280)), (10,'No parking on odd days',(752,151,877,280)),
 (10,'Parking area',(77,398,210,535)), (10,'Motorway begins',(74,704,239,952)),
 (10,'Motorway ends',(287,704,455,952)), (10,'300 metres to interchange',(549,727,638,947)),
]
for i,(page,label,box) in enumerate(signs):
    other = [s[1] for s in signs if s[1]!=label]
    # Fixed distinct distractors; the application shuffles answer positions on every round.
    wrong = [other[(i*7+j*17)%len(other)] for j in range(3)]
    add('signs',page,'What does this road sign mean?',label,wrong,f'The sign is labelled “{label}” on printed page {page} of your book.',crop(page,f'sign-{i+1:02}',box))

lights = [('Fuel level',119,177),('Battery charge',183,235),('Engine oil pressure',241,283),('Hazard warning flashers',288,339),('Coolant temperature',340,390),('Brake system',392,446),('Anti-lock braking system (ABS)',449,498),('Turn indicators',564,610),('High beam',613,664),('Heated rear window',829,882),('Handbrake',1196,1244),('Windscreen defrosting',1248,1300)]
for i,(label,y1,y2) in enumerate(lights):
    others = [x[0] for x in lights if x[0]!=label]
    add('basics',3,'What does this dashboard symbol represent?',label,[others[(i+j*3)%len(others)] for j in range(3)],f'The dashboard-symbol table identifies this as {label.lower()}.',crop(3,f'control-{i+1:02}',(483,y1,555,y2)))

(root/'questions.js').write_text('/* Curated from the supplied driving-school book. See scripts/build_questions.py. */\nconst QUESTIONS = '+json.dumps(questions,ensure_ascii=False,indent=2)+';\nif (typeof module !== "undefined") module.exports = QUESTIONS;\n',encoding='utf-8')
(root/'study-source'/'README.md').write_text('# Source notes\n\nSource: Ders kitabı (İngilizce).pdf, supplied by the user. The PDF contains 21 scanned pages: a cover and printed pages 1–20. No embedded text was found. All pages were visually reviewed. Questions are authored practice questions, not an official exam bank.\n\n`questions.js` uses printed page numbers; the corresponding PDF page is one greater. The original page renders in `assets/book` let learners verify answers. Sign crops omit the captions. Page 20 is rotated for reading.\n\nThe English translation contains ambiguous passages (including the horn exception, alcohol units and some numeric rules). Those passages are not turned into quiz questions. The scan remains available in the book reader. The quiz reflects the supplied book; current legal requirements and an official exam format have not been independently verified.\n',encoding='utf-8')
print(f'Built {len(questions)} questions, including {len(signs)} road signs and {len(lights)} dashboard symbols.')
