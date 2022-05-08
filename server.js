const express = require("express");
const app = express();

app.use(express.static("public"));
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/views/index.html");
});
app.use(express.static("public"));
app.get("/docs/cat", function(request, response) {
  response.sendFile(__dirname + "/views/docs/catdocs.html");
});

app.use(express.static("public"));
app.get("/docs/dog", function(request, response) {
  response.sendFile(__dirname + "/views/docs/Dogdocs.html");
});


app.use(express.static("public"));
app.get("/projects", function(request, response){
  response.sendfile(__dirname + "/views/projects.html");
});

app.use(express.static("public"));
app.get("/command", function(request, response) {
  response.sendFile(__dirname + "/views/Commands.html");
});
app.use(express.static("public"));
app.get("/profile", function(request, response) {
  response.sendFile(__dirname + "/views/views/profilepage.html");
});

app.use(express.static("public"));
app.get("/docs", function(request, response) {
  response.sendfile(__dirname + "/views/docs/docsmain.html");
});

app.use(express.static("public"));
app.get("/about", function(request, response) {
  response.sendFile(__dirname + "/views/about.html");
});

app.use(express.static("public"));
app.get("/game/snake", function(request, response) {
  response.sendFile(__dirname + "/views/snake.html");
});

app.use(express.static("public"));
app.get("/game/te", function(request, response) {
  response.sendFile(__dirname + "/views/404.html");
});

app.get("/img/turtle", (req, res) => {
  let images = [
    `https://i.imgur.com/eWrz6Qi.jpg`,
    `https://i.imgur.com/lLnvf4X.gif`,
    `https://i.imgur.com/u81HQCi.mp4`,
    `https://i.imgur.com/sLc8FWD.png`,
    `https://i.imgur.com/zdOsSak.mp4`,
    `https://i.imgur.com/kETR3Fe.jpg`,
    `https://i.imgur.com/zC8sER6.jpg`,
    `https://i.imgur.com/WKReSQd.gif`,
    `https://i.imgur.com/swZQdLo.jpg`,
    `https://i.imgur.com/K41JBdp.jpg`,
    `https://i.imgur.com/LhEMppL.jpg`,
    `https://i.imgur.com/JJEJjsT.jpg`,
    `https://i.imgur.com/zQO75Qj.jpg`,
    `https://i.imgur.com/IQUZ8z0.gif`,
    `https://i.imgur.com/2h2JNrg.jpg`,
    `https://i.imgur.com/B8Y55PO.jpg`,
    `https://i.imgur.com/zM3hOix.jpg`,
    `https://i.imgur.com/r0q8bh2.jpg`,
    `https://i.imgur.com/DrIDSET.jpg`,
    `https://i.imgur.com/T8lOlbI.jpg`,
    `https://i.imgur.com/Qwj6KA2.jpg`,
    `https://i.imgur.com/Kr5SJYu.jpg`,
    `https://i.imgur.com/DWCa52Z.jpg`,
    `https://i.imgur.com/KYjb1Yt.jpg`,
    `https://i.imgur.com/p9Xf7gk.jpg`,
    `https://i.imgur.com/kgOc5Lr.jpg`,
    `https://i.imgur.com/qseQD11.png`,
    `https://i.imgur.com/uOW9bAm.jpg`,
    `https://i.imgur.com/4Wj2sT2.gif`,
    `https://i.imgur.com/wH0c5K1.mp4`
  ];
  let turtle = images[Math.floor(Math.random() * images.length)];
  var theimage = { Link: `${turtle}` };

  res.json(theimage);
});

app.get("/img/cow", (req, res) => {
  let images = [
    `https://i.imgur.com/K2Ssuza.jpg`,
    `https://i.imgur.com/vTdXZPJ.jpg`,
    `https://i.imgur.com/GaaUHwy.jpg`,
    `https://i.imgur.com/Es2hjc8.jpg`,
    `https://i.imgur.com/typ0rtq.jpg`,
    `https://i.imgur.com/iWscMa2.jpg`,
    `https://i.imgur.com/6yOR4lw.jpg`,
    `https://i.imgur.com/Kj5SP9B.jpg`,
    `https://i.imgur.com/JPRNs3X.jpg`,
    `https://i.imgur.com/dRGe0hS.jpg`,
    `https://i.imgur.com/3QuFxVU.jpg`,
    `https://i.imgur.com/cN5jb8L.jpg`,
    `https://i.imgur.com/EB0Bnz4.jpg`,
    `https://i.imgur.com/LNZpKUE.jpg`,
    `https://i.imgur.com/Yqgo126.jpg`,
    `https://i.imgur.com/bagLhfu.jpg`,
    `https://i.imgur.com/CoKvxdQ.jpg`,
    `https://i.imgur.com/Bdt1b2f.jpg`,
    `https://i.imgur.com/SMkmULH.jpg`,
    `https://i.imgur.com/nOwjV9T.jpg`,
    `https://i.imgur.com/ihw6sCA.jpg`,
    `https://i.imgur.com/ZZaVbCh.jpg`,
    `https://i.imgur.com/44YlDxM.jpg`
  ];
  let cow = images[Math.floor(Math.random() * images.length)];
  var theimage = { Link: `${cow}` };

  res.json(theimage);
});



app.get("/facts/cow", (req, res) => {
  let facts = [
    `All “cows” are female. Males are called bulls or steer. Before having a calf for the very first time, a female is called heifer. Once she has her first calf, she becomes a cow.`,
    `There are over 800 different cattle breeds recognized worldwide (according to Wikipedia). Beef breeds are raised for their meat and dairy breeds are raised to produce milk. At Clover Meadows Beef, we raise Angus-based cattle, which is a beef breed.`,
    `Cows don’t eat meat – ever. They’re always “vegetarian fed”.`,
    `Cows can see almost 360 degrees. This near-panoramic view lets them watch for predators from all angles. However, they don’t see well straight in front of them so they will typically turn their head to look at you.`,
    `Cows have an acute sense of smell and can detect odors up to six miles away.`,
    `Cows are very social and don’t like to be alone. If one is isolated, it’s usually because she is sick or about to give birth.`,
    `Cows have no upper front teeth. They press their sharp bottom teeth against the top hard palate of their mouth to cut blades of grass`,
    `A cow has 32 teeth, and will chew about 40-50 times a minute.`,
    `A cow will chew for up to eight hours a day`,
    `Cows move their jaws about 40,000 times a day`,
    `Cows spend about 10 hours a day lying down`,
    `Cows will stand up and lay down about fourteen times a day.`,
    `Cows can sleep while they’re standing.`,
    `The first cow arrived in the U.S. in 1611 in Jamestown.`,
    `There are approximately 98 million cows in the U.S.`,
    `The U.S.’s cattle herd size is shrinking. The total cows in the US are at their lowest level since 1952.`,
    `Cows are ruminants, which are cud chewing mammals. Other ruminant animals are sheep, giraffe, goats, and deer, just to name a few.`,
    `The main stomach of a cow, the rumen, holds up to 50 gallons of food that has been partially digested. To put that in perspective, a bathtub can usually hold 30-50 gallons of water.`,
    `A cow will consume about 40 pounds of food in a day.`,
    `Cows can see color. But, when you see a Matador waving a red flag at a bull (a male “cow”), the bull charges because of the flag’s movement, not the color red.`,
    `The average body temperature of a cow is 102 degrees Fahrenheit.`,
    `In the winter, cows thick skin and hair is a natural insulator that protects them from the bitter cold.`,
    `Cows have 4 digestive compartments in one stomach – the rumen (this is where the cud comes from); the reticulum; omasum; and abomasum (this is sort of like a human’s stomach).`,
    `In the 1850’s, nearly every family in the U.S. had its own cow.`,
    `George Washington’s dentist made him dentures out of cow, hippopotamus and walrus teeth`,
    `The hamburger debuted at the 1904 World’s Fair in St. Louis`,
    `Almost 2,000 quarter pound hamburgers can be made from the ground beef in one cow.`
    
  
    
  ];
  let cow = facts[Math.floor(Math.random() * facts.length)];
  var theimage = { Link: `${cow}` };

  res.json(theimage);
});



app.get("/joke", (req, res) => {
  let jokes = [
    `How do you make a tissue dance? You put a little boogie in it.`,
    `Why did the policeman smell bad? He was on duty.`,
    `Whats the diffrence between a trampoline and a zombie baby, i take off my shoes when i jump on a trampoline`,
    `Why does Snoop Dogg carry an umbrella? FO DRIZZLE!`,
    `Why can’t you hear a pterodactyl in the bathroom? Because it has a silent pee.`,
    `What did the Zen Buddist say to the hotdog vendor? Make me one with everything.`,
    `Horse walks into a bar. Bartender says, “Why the long face?”`,
    `never make mistakes…I thought I did once; but I was wrong`,
    `What did the DNA say to the other DNA, Do these genes make my butt look fat.`,
    `What do you call a dinosaur that is sleeping? A dino-snore!`,
    `What is fast, loud and crunchy? A rocket chip!`,
    `Why did the teddy bear say no to dessert? Because she was stuffed.`,
    `What has ears but cannot hear? A cornfield.`,
    `What did the left eye say to the right eye? Between us, something smells!`,
    `What do you get when you cross a vampire and a snowman? Frost bite!`,
    `What did one plate say to the other plate? Dinner is on me!`,
    `What goes up and down but does not move? Stairs`,
    `mushroom walks into a bar. The bartender says, “Hey, get out of here! We don’t serve mushrooms here”. Mushroom says, “why not? I’m a fungai!”`
  ];
  let joke = jokes[Math.floor(Math.random() * jokes.length)];
  var thejoke = { Link: `${joke}` };

  res.json(thejoke);
});

app.get("/img/crab", (req, res) => {
  let images = [
    `https://i.imgur.com/aGTO8cI.png`,
    `https://i.imgur.com/IqQwwga.jpg`,
    `https://i.imgur.com/nRjY864.jpg`,
    `https://i.imgur.com/NlRVlum.jpg`,
    `https://i.imgur.com/pS8Cpt5.jpg`,
    `https://i.imgur.com/DymfwCT.jpg`,
    `https://i.imgur.com/9L4zY84.jpg`,
    `https://i.imgur.com/o3lmP5j.jpg`,
    `https://i.imgur.com/CzuqiWW.jpg`,
    `https://i.imgur.com/KmCgWT3.jpg`,
    `https://i.imgur.com/2fpoggT.jpg`,
    `https://i.imgur.com/Qw4psfo.jpg`,
    `https://i.imgur.com/SPLKwVK.jpg`,
    `https://i.imgur.com/Za8v5s6.jpg`,
    `https://i.imgur.com/SxNUCm7.jpg`,
    `https://i.imgur.com/4ldmxz2.jpg`
    
  ];
  let crab = images[Math.floor(Math.random() * images.length)];
  var theimage = { Link: `${crab}` };

  res.json(theimage);
});
app.get("/img/hippo", (req, res) => {
  let images = [
    `https://i.imgur.com/8qSfWjj.jpg`,
    `https://i.imgur.com/MScGJLU.jpg`,
    `https://i.imgur.com/zw6Fb9Z.jpg`,
    `https://i.imgur.com/7zgceex.jpg`,
    `https://i.imgur.com/gVQm2eA.jpg`,
    `https://i.imgur.com/VPzUzqC.jpg`,
    `https://i.imgur.com/AEFicCN.jpg`,
    `https://i.imgur.com/7KzhW4U.jpg`,
    `https://i.imgur.com/KvusX8p.jpg`,
    `https://i.imgur.com/8huxkqi.jpg`,
    `https://i.imgur.com/jlOo9Ow.jpg`,
    `https://i.imgur.com/MwpM2eG.jpg`,
    `https://i.imgur.com/hNmZbrz.png`,
    `https://i.imgur.com/yeowkMk.jpg`,
    `https://i.imgur.com/PVjICTX.jpg`,
    `https://i.imgur.com/JmW5o0d.jpg`,
    `https://i.imgur.com/OX23KFd.jpg`,
    `https://i.imgur.com/Wk9mPHw.jpg`,
    `https://i.imgur.com/p07k4Hv.png`
    
    
  ];
  let turtle = images[Math.floor(Math.random() * images.length)];
  var theimage = { Link: `${turtle}` };

  res.json(theimage);
});
app.get("/img/goose", (req, res) => {
  let images = [
    `https://i.imgur.com/gHhqNJB.jpg`,
    `https://i.imgur.com/9VokIHu.jpg`,
    `https://i.imgur.com/CqKxc2b.jpg`,
    `https://i.imgur.com/evf4HIg.jpg`,
    `https://i.imgur.com/FwRqrID.jpg`,
    `https://i.imgur.com/PJgVpjc.jpg`,
    `https://i.imgur.com/BZB3eJi.jpg`,
    `https://i.imgur.com/73y8IET.jpg`,
    `https://i.imgur.com/PkkvE27.jpg`,
    `https://i.imgur.com/jnJ5xpP.jpg`,
    `https://i.imgur.com/nJX2Qm7.jpg`,
    `https://i.imgur.com/Cq5FrEV.png`,
    `https://i.imgur.com/zi1703B.jpg`,
    `https://i.imgur.com/CNDU5uo.jpg`,
    `https://i.imgur.com/Sha0wVj.jpg`,
    `https://i.imgur.com/DoFLwEC.jpg`
  ];
  let turtle = images[Math.floor(Math.random() * images.length)];
  var theimage = { Link: `${turtle}` };

  res.json(theimage);
});
app.get("/img/chicken", (req, res) => {
  let images = [
    `https://i.imgur.com/x52cBe3.jpg`,
    `https://i.imgur.com/A2ZtFyE.jpg`,
    `https://i.imgur.com/s8G0iHz.jpg`,
    `https://i.imgur.com/oPbXWmr.jpg`,
    `https://i.imgur.com/P1QQo2B.jpg`,
    `https://i.imgur.com/Jd270xf.jpg`,
    `https://i.imgur.com/pfLU7Sp.jpg`,
    `https://i.imgur.com/7Nqxo0h.jpg`,
    `https://i.imgur.com/DX9ot5Q.jpg`,
    `https://i.imgur.com/Q0wkcZb.jpg`,
    `https://i.imgur.com/UGyWhDN.jpg`,
    `https://i.imgur.com/6EdbH3R.jpg`,
    `https://i.imgur.com/0VXb3Dh.jpg`,
    `https://i.imgur.com/OYuEK0Z.jpg`,
    `https://i.imgur.com/Xdjf84O.jpg`
    
  ];
  let turtle = images[Math.floor(Math.random() * images.length)];
  var theimage = { Link: `${turtle}` };

  res.json(theimage);
});

app.get("/img/camel", (req, res) => {
  let images = [
    `https://i.imgur.com/hg76RMb.jpg`,
    `https://i.imgur.com/4pg8qme.jpg?1`,
    `https://i.imgur.com/r0nlF5m.jpg`,
    `https://i.imgur.com/Y0kGKq3.jpg`,
    `https://i.imgur.com/X4Sej.jpg`,
    `https://i.imgur.com/zJC6h.jpg`,
    `https://i.imgur.com/ba4wBUG.jpg?1`,
    `https://i.imgur.com/wtSdpow.jpg`,
    `https://i.imgur.com/GzqaUTZ.jpg`,
    `https://i.imgur.com/v2NsRt6.jpg`,
    `https://i.imgur.com/JiBs9Os.jpg`,
    `https://i.imgur.com/aOWdy6A.jpg`,
    `https://i.imgur.com/3rt3HNY.jpg`
    
    
    
  ];
  let turtle = images[Math.floor(Math.random() * images.length)];
  var theimage = { Link: `${turtle}` };

  res.json(theimage);
});

app.get("/memes/hacking/hackingmemes", (req, res) => {
  let images = [
    `https://i.imgur.com/e3vIryU.jpg`,
    `https://i.imgur.com/3Czjpeb.jpg`,
    `https://i.imgur.com/XigaBIN.jpg`,
    `https://i.imgur.com/1TgOFqJ.jpg`,
    `https://i.imgur.com/IEto2rI.png`,
    `https://i.imgur.com/1WVcpFQ.jpg`,
    `https://i.imgur.com/ZTMa1nG.jpg`,
    `https://i.imgur.com/dEPYeJe.jpg`,
    `https://i.imgur.com/SbFZUXg.jpg`,
    `https://i.imgur.com/5StEZHE.png`,
    `https://i.imgur.com/JbQFArW.jpg`,
    `https://i.imgur.com/weAorPx.png`,
    `https://i.imgur.com/FCQY9iQ.jpg`,
    `https://i.imgur.com/KUbwh5T.jpg`,
    `https://i.imgur.com/oiAYi4S.jpg`,
    `https://i.imgur.com/IEUcFuL.jpg`,
    `https://i.imgur.com/HSz0Dm8.jpg`

    
  ];
  let turtle = images[Math.floor(Math.random() * images.length)];
  var theimage = { Link: `${turtle}` };

  res.json(theimage);
});

app.get("/facts/crab", (req, res) => {
  let facts = [
    `There are more than 4,500 species of crabs.`,
    `Most species live in coastal areas of salty, fresh or brackish water.`,
    `Crabs are super old! They showed up during the Jurassic period, 200 million years ago.`,
    `The Pea Crab is the smallest known species. It measures between 0.27 and 0.47 inches long.`,
    `The Japanese Spider Crab is the biggest, measuring about 12 feet between its claws!`,
    `Crabs have an “exoskeleton” made of chitin. It protects their soft tissue.`,
    `Crabs walk and swim sideways.`,
    `Crabs eat both meat and plants, making them omnivores.Pregnancy in female crabs only last one or two weeks. Then they lay between 1,000 and 2,000 eggs!`,
    `Pregnancy in female crabs only last one or two weeks. Then they lay between 1,000 and 2,000 eggs!`,
    `Groups of crabs living together are known as “casts.”`,
    `The average lifespan of a crab is 3 to 4 years.`
  ];
  let fact = facts[Math.floor(Math.random() * facts.length)];
  var thefact = { Link: `${fact}` };
   res.json(thefact);
});

app.get("/facts/crab", (req, res) => {
  let facts = [
    `The smallest species is the Little Blue Penguin.`,
    `Scientists still don't know for sure how many kinds of penguins there are.`,
    `Penguins jump into the air before diving to swim faster.`,
    `Explorers first called penguins "strange geese."`,
    `Penguins can swim at speeds over 10 miles per hour.`,
    `Penguins can dive down over 800 feet.`,
    `Penguins' suits act as camouflage.`,
    `Penguins can drink seawater.`,
    `Some extinct penguins grew more than 5 feet tall.`,
    `Penguins don't have teeth.`,
    `Penguins go through a "catastrophic molt" once a year.`,
    `Some penguin species mate for life.`,
    `Couples locate each other with distinct calls.`,
    `Emperor penguins incubate eggs on their feet.`,
    `Penguins are waterproof`,
    `The largest penguin colonies — called rookeries or waddles when assembled on land — include hundreds of thousands of birds.`,
    `Scientists can find penguins using poop.`,
    `Penguins are specially adapted to sink.`,
    `Some penguins build pebble nests.`,
    `Penguins get their name from a Canadian bird.`,
    `Not all penguins live in the Antarctic.`,
    `Penguins huddle for warmth.`,
    `Penguin chicks start out as little fluffballs.`,
    `Penguins started a movie fad`
  ];
  let fact = facts[Math.floor(Math.random() * facts.length)];
  var thefact = { Link: `${fact}` };
   res.json(thefact);
});

app.get("/facts/lion", (req, res) => {
  let facts = [
    `African lions are the largest of the African cats`,
    `African lions have a wide habitat, and can live almost everywhere`,
    `The colour of a lion’s coat varies from region to region, and within populations`,
    `lion cubs are born with blue eyes`,
    `lions have round pupils`,
    `Lions are the most sociable member of the cat famil`,
    `There is no fixed breeding season for lions`,
    `Hunting takes place mostly from dusk until dawn`,
    `Hunting takes place mostly from dusk until dawn`,
    `Lions have one of the most complex communication behaviours of any of the cats. `,
    `the lion is the king of the roar`,
    `Lions are the second largest big cat species in the world (behind tigers)`,
    `The average male lion weighs around 180 kg (400 lb) while the average female lion weighs around 130 kg (290 lb).`,
    `The heaviest lion on record weighed an amazing 375 kg (826 lb).`,
    `Lions can reach speeds of up to 81 kph (50 mph) but only in short bursts because of a lack of stamina.`,
    `The roar of a lion can be heard from 8 kilometers (5.0 miles) away.`,
    `Most lions found in the wild live in southern and eastern parts of Africa`,
    `Lions are very social compared to other cat species, often living in prides that feature females, offspring and a few adult males.`,
    `Male lions are easy to recognize thanks to their distinctive manes. Males with darker manes are more likely to attract female lions (lionesses).`,
    `Lions are the national animal of Albania, Belgium, Bulgaria, England, Ethiopia, Luxembourg, the Netherlands and Singapore.`,
    `Lions in the wild live for around 12 years`,
    `In the wild, lions rest for around 20 hours a day.`,
    `Lionesses are better hunters than males and do most of the hunting for a pride.`
    
    

  ];
  let fact = facts[Math.floor(Math.random() * facts.length)];
  var thefact = { Link: `${fact}` };

  res.json(thefact);
});

app.get("/facts/goose", (req, res) => {
  let facts = [
    `Some geese migrate every year. Others stay in the same place year round.`,
    `Geese eat seeds, nuts, grass, plants and berries. They love blueberries.`,
    `Geese can live almost anywhere. They like fields, parks and grassy areas near water.`,
    `Geese fly in a “V” formation. If one goose is injured, other geese will stay with it until it dies or can rejoin the flock.`,
    `Geese are sometimes raised like chickens for their meat or eggs.`,
    `Male geese protect the nest while the female geese sit on the eggs.`,
    `Geese are related to Ducks and Swans.`,
    `It takes about 2 years for geese to be fully matured.`,
    `Worldwide there are about 30 species of geese.`,
    `Geese have predators like the fox, raccoon and even the snapping turtle.`,
    `Geese can live up to 20 years depending on species.`,
    `Many people keep geese as pets and they prove to be very good pets. They keep the lawn short, clear away weeds and they can act as good as a guard dog. They are very loyal and will follow you around like a dog.`,
    `Geese can fly as fast as 40 mph.`,
    `A male goose is called “gander”, a baby is called a “gosling”, a group of geese are called a gaggle. The female mom is related to as mother “goose”.`
  ];
  let fact = facts[Math.floor(Math.random() * facts.length)];
  var thefact = { Link: `${fact}` };
  
  res.json(thefact);
});

app.get("/img/penguin", (req, res) => {
  let images = [
    `https://i.imgur.com/290x1ba.jpg`,
    `https://i.imgur.com/9oFNGXR.jpg`,
    `https://i.imgur.com/VpXct5Y.jpg`,
    `https://i.imgur.com/TxXe3Wf.jpg`,
    `https://i.imgur.com/F4tyq0T.jpg`,
    `https://i.imgur.com/ngUbOQi.jpg`,
    `https://i.imgur.com/YVnKqAw.jpg`,
    `https://i.imgur.com/FHtuY3M.jpg`,
    `https://i.imgur.com/m1t325Q.jpg`,
    `https://i.imgur.com/8TTyD4a.jpg`,
    `https://i.imgur.com/Gsb0baY.jpg`,
    `https://i.imgur.com/ocEvWPS.jpg`,
    `https://i.imgur.com/zuKST5q.jpg`,
    `https://i.imgur.com/7Whfw41.jpg`,
    `https://i.imgur.com/GlpzpPC.jpg`,
    `https://i.imgur.com/8PMt3Gj.jpg`,
    `https://i.imgur.com/Sfw0Kbb.jpg`,
    `https://i.imgur.com/LLfpOpq.jpg`
    
  ];
  let turtle = images[Math.floor(Math.random() * images.length)];
  var theimage = { Link: `${turtle}` };

  res.json(theimage);
});
app.get("/facts/hippo", (req, res) => {
  let facts = [
     `Hippos can’t swim or float! They walk or stand on surfaces below the water like sandbanks. Even so, they spend most of the day in water to protect their sensitive skin from the sun.`,
     `They secrete an oily red substance that acts as a moisturiser, sunblock and protects them from germs. This also makes them look like they are sweating blood.`,
     `Although hippos can hold their breath for approximately seven minutes, most adult hippos resurface every three to five minutes to breathe. This is an automatic process – even sleeping hippo surface to breathe without waking.`,
     `Hippos can close their nostrils and ears to prevent water from entering. This is why hippo calves can suckle on land or underwater.`,
     `An open mouth is not a yawn but rather assign to warn you off. You will only see hippo ‘yawning’ while in the water because they are only territorial while in the water. You will also hear them ‘honking’ and ‘grunting’ which how they mark their territory.`,
     `A hippo can live for up to 40 years.`,
     `Hippos usually come out of the water for four to five hours at night to graze and can cover up to 10km in this time. Their diet consists of grass and they graze using muscular lips.`,
     `The hippo is considered one of the most dangerous animals in Africa and it is highly aggressive, particularly if you get between it and the water. Their canine teeth (sharp teeth) are used for fighting.`,
     `The hippo’s closest living relatives are whales and porpoises!`,
     `The hippopotamus is the third largest land mammal after the elephant and white rhino.`
    
  ];
  let fact = facts[Math.floor(Math.random() * facts.length)];
  var thefact = { Link: `${fact}` };
  
  res.json(thefact);
});

app.get("/facts/sheep", (req, res) => {
  let facts = [
    `There are over 1 billion sheep in the world.`,
    `China has the largest number of sheep in the world.`,
    `Adult female sheep are known as ewes.`,
    `Adult male sheep are known as rams.`,
    `Castrated adult male sheep are known as wethers.`,
    `A group of sheep is known as a herd, flock or mob.`,
    `Young sheep are called lambs.`,
    `Sheep have a field of vision of around 300 degrees, allowing them to see behind themselves without having to turn their head.`,
    `Sheep are herbivores that eat vegetation such as grass.`,
    `The digestive system of sheep features four chambers which help break down what they eat.`,
    `Sheep like to stay close to others in a herd which makes them easier to move together to new pastures.`,
    `In 1996, a sheep named Dolly was the first mammal to be cloned from a somatic cell.`,
    `Domesticated sheep are raised for a number of agricultural products including fleece and meat. `
  ];
  let fact = facts[Math.floor(Math.random() * facts.length)];
  var thefact = { Link: `${fact}` };
  
  res.json(thefact);
});

app.get("/facts/chicken", (req, res) => {
  let facts = [
    `There are more chickens on earth than people – 25 billion. There are also more chickens than any other bird species.`,
    `Chickens can remember over 100 different faces of people or animals.`,
    `A mother hen turns her eggs about 50 times per day, and can lay more than 300 eggs per year.`,
    `The record number of eggs laid by a chicken in one day is 7. The record number for eggs laid by a chicken in one year is 371.`,
    `An egg develops at 88 degrees Fahrenheit, and is laid at 105 degrees.`,
    `Chickens were domesticated in Southern China around 8,000 years ago in 6000 B.C.`,
    `The color of the egg depends on the chickens earlobes. Red ear lobed chickens lay brown eggs, while white ear lobed chickens lay white eggs.`,
    `As chickens grow older, they lay larger eggs, but fewer than when they’re younger.`,
    `Chickens can taste saltiness, but not sweetness.`,
    `In Gainesville, Florida, you have to eat fried chicken with your bare hands. Eating it by any other method is illegal.`,
    `A hen has to eat about four pounds of feed to make one dozen eggs.`,
    `On average, 97 chickens are killed every 0.05 seconds worldwide.`,
    `By vaccinating chickens, the United Kingdom virtually eliminated salmonella.`,
    `There’s a rare breed of chicken from Indonesia that is completely black including the feathers, beak, and organs, due to hyperpigmentation. They can be sold for $2,500.`,
    `There is an invention called a “chicken gun” which is used to test the resistance of airplane windows and engines by blasting dead chickens at the aircraft.`,
    `There’s a wild mushroom called a Laetiporus that tastes nearly the same as chicken. It is sometimes called the “fried chicken mushroom.”`,
    `The record for most egg yolks in one egg is 9 yolks.`,
    `Chickens have prehistoric roots and are the closest living relative of the Tyrannosaurus Rex.`,
    `Chickens bodies contain 15% more water than humans.`,
    `The fear of chickens is called Alektorophobia.`,
    `If the white of an egg is cloudy, it means the egg is fresh.`,
    `Chickens can see and dream in full color.`,
    `When chickens feel stressed, they start to lose their feathers.`,
    `It only takes about 26 hours for a hen to produce an egg, and 21 days for the egg to incubate and hatch.`,
    `The longest recorded chicken to live was named Matilda, who lived to be 16 years old, which is over twice as long as an average chicken lifespan.`,
    `Chickens have their own unique language with over 30 different sounds used to communicate.`,
    `Baby chicks can develop object permanence as soon as 2 days old, while it takes human babies around 7 months.`,
    `Chickens are omnivores, and a hen will eat their own raw eggs if they are not satisfied with their diet.`,
    `In order to clean themselves, chickens take dust baths. They dig a small pit in the ground and use the dirt to help with the oil in their feathers.`,
    `Chickens can run up to 9 miles per hour!`,
    `A chicken’s heart beats from 220 to 360 times per second.`,
    `Chicken beaks can bleed.`,
    `Mother hens talk to their chicks while they’re still in the eggs, and the chicks can chirp back while in the shell.`,
    `In order to attract hens, roosters will do a dance called “tidbitting” involving moving their head up and down, waddling, and making certain sounds.`,
    `In 2004, the chicken was the first bird to have its genome sequenced – which is finding out the order of their DNA. Doing this helped determine that the chicken is the closest living relative to the Tyrannosaurus Rex.`,
    `Chickens have three eyelids.`,
    `Mother hens teach their chicks what to eat and what to avoid.`,
    `Chicken eggs nutrition value is the same, regardless of the egg color.`,
    `Most eggs are typically laid in the morning between 7am and 11am.`,
    `Hens generally choose their mates based on the size and brightness of a roosters comb on top of his head. Sometimes they will mate with multiple roosters at once.`,
    `Originally, chickens were domesticated for the use of cockfighting.`
  ];
  let fact = facts[Math.floor(Math.random() * facts.length)];
  var thefact = { Link: `${fact}` };

  res.json(thefact);
});

app.get("/facts/raccoon", (req, res) => {
  let facts = [
    `Raccoons usually reach 2,5 feet in length and weigh between 12-16 pounds. Raccoons that live in colder climates are larger and heavier.`,
    `Raccoons have grayish fur, black mask around eyes and long tail covered with black and brown bands. Because of their tail, they are nicknamed "ringtail".`,
    `Raccoon's hand looks like human's. They have five fingers and use their hands to collect food, open shells, door or trash cans...`,
    `Raccoons are omnivores (eat plants and animals) and like to eat insects, eggs, small mammals, fruit, berries, seed, garbage...`,
    `Raccoons often place food in water before they start to eat it. They have highly sensitive sense of touch and water increases sensitivity even more. By touching the food they get better insight about things they will eat.`,
    `Raccoons are easily adaptable to various environments. They can live in hollow tree equally happy like they can in abandoned cars.`,
    `Raccoons are solitary (live on their own) and nocturnal creatures (they hunt at night).`,
    `Raccoons don't hibernate, but they spend coldest days of winters in their burrows.`,
    `Raccoons produce various sounds. They can hiss, purr, whistle, growl...`,
    `Raccoons are excellent swimmers and climbers.`,
    `A raccoon can transmit rabies to domestic animals and people. Their feces often contain roundworms.`,
    `A group of raccoons is called nursery or gaze.`,
    `Mating season takes place from January to mid March. Two months later, the female raccoon will give birth to 3-4 babies.\nThe baby's tails don't have bands, and the mask around their eyes is still missing. `,
    `Mother raccoon is very protective and she will teach them how to survive and what to eat as soon they become ready to leave the burrow.`,
    `The average life span of a raccoon in the wild is 5 years, while they can live up to 20 years in captivity.`
  ];
  let fact = facts[Math.floor(Math.random() * facts.length)];
  var thefact = { Link: `${fact}` };
  
  res.json(thefact);
});

app.get("/facts/camel", (req, res) => {
  let facts = [
    `Camels can reach 7 feet in height (at the hump) and weigh up to 1500 pounds.`,
    `Camels are specially adapted to the life in desert. Their eyes have three eyelids and two rows of eyelashes that prevent sand to enter their eyes.`,
    `Camel's ears are furry. Hairs keep the sand and dust away from their ears. Besides ears and eyes, their nostrils prevent the sand from entering by closing in between two breaths.`,
    `Camels can move easily across the sand because of its specially designed feet. Camel's foot consists of two toes that spread when animal touches the ground and prevents sinking in the sand.`,
    `Camels are mostly famous for their humps. Most people believe that humps store water, but they actually store fat, which animal uses as a source of energy when other food sources are not available.`,
    `A camel can survive without food and water long period of time. Most mammals would die if they lose 15% of their water (critical loss of water is called dehydration), but camel can lose of 20-25% water without becoming dehydrated. `,
    `When camels find water, they will drink as much as possible. They can drink up to 40 gallons of water at once.`,
    `The bodytemperature of a camel ranges from 34 (during the night) to 41 degrees of Celsius (during the day). He will start sweating when temperature rise over 41 degrees of Celsius.`,
    `Camel's milk is rich in iron, vitamins and minerals and it is healthier than cow's milk because it contains less fat.`,
    `Camels can run 40 miles per hour.`,
    `When camels are provoked, they spit greenish substance from their stomach. Also they can use all four legs to kick their opponent in self defense. `,
    `A camel needs to retain as much water as possible in its body, so it produces urine that is dense as syrup and feces that is so dry, that it can be used as a fuel.`,
    `Camels were used in numerous wars (especially in desert areas) in the past because of their ability to travel long distances without water and food, because they can carry supplies and because they can be consumed when they become old or weak (camel's meat is used for food and fur for clothing).`,
    `The pregnancy of a camel lasts from 9-14 months, depending on the availability of food. They have one calf and it can run few hours after it is born.`,
    `Camels live 40-50 years.`
  ];
  let fact = facts[Math.floor(Math.random() * facts.length)];
  var thefact = { Link: `${fact}` };
  
  res.json(thefact);
});

app.get("/facts/bear", (req, res) => {
  let facts = [
    `Bears eat mostly meat and fish, but some bears also eat plants and insects.`,
    `Canada is home to nearly 60 % of the world’s polar bears.`,
    `The Asiatic black bear has the largest ears than other species of bears`,
    `Black bears can run at the speed up to 35mph.`,
    `Baloo, from The Jungle Book, is a sloth bear.`,
    `Katmai National Park is home to approximately 4,000 Alaskan brown bears.`,
    `Most bears have 42 teeth.`,
    `Grizzly bears can remember the faces of other bears.`,
    `There are at least 600,000 black bears in North America.`,
    `About 98% of the grizzly bear population in the U.S. lives in Alaska.`,
    `The largest recorded polar bear weighed 1,002 kilograms.`,
    `The Governor of Moscow trained a large bear to serve pepper Vodka to his guests.`,
    `Polar bears primarily eat seals.`,
    `The Sun bear has the shortest fur to keep themselves cool in the hot forests.`,
    `Even though bears are big and heavy, they can run very fast.`,
    `Bears are good at climbing and swimming.`,
    `There are only eight living species of bears`,
    `A group of bears is called a sloth`,
    `Bears have a large brain and are also known as intelligent mammals.`,
    ` Bears sleep more in the winter.`,
    `A polar bear can swim up to 100 miles without resting`,
    `The Koala is not a bear.`,
    `The brown bear is Finland’s national animal`,
    ` Asiatic bears build nests in trees`,
    `Unlike many mammals, bears can see in color`
    
    

  ];
  let fact = facts[Math.floor(Math.random() * facts.length)];
  var thefact = { Link: `${fact}` };

  res.json(thefact);
});
app.get("/img/raccoon", (req, res) => {
  let images = [
    
    `https://i.imgur.com/dIAobaM.jpg`,
    `https://i.imgur.com/dyXZF9c.jpg`,
    `https://i.imgur.com/ozIMNnR.jpg`,
    `https://i.imgur.com/jYCL59y.jpg`,
    `https://i.imgur.com/wm73TeH.jpg`,
    `https://i.imgur.com/2UVjGJp.jpg`,
    `https://i.imgur.com/ghw8kI0.jpg`,
    `https://i.imgur.com/7gmVBou.png`,
    `https://i.imgur.com/qpHyNkB.jpg`,
    `https://i.imgur.com/CGCprKD.jpg`,
    `https://i.imgur.com/FkyTCPP.jpg`,
    `https://i.imgur.com/p3AiCPu.jpg`,
    `https://i.imgur.com/56bexwm.png`,
    `https://i.imgur.com/74KhTWx.jpg`,
    `https://i.imgur.com/FhlncHH.jpg`,

  ];
  
   let spiders = images[Math.floor(Math.random() * images.length)];
  var spider = { Link: `${spiders}` };

  res.json(spider);
});
app.get("/facts/snake", (req, res) => {
  let facts = [
    `Snakes are carnivores (meat eaters).`,
    `Snakes don’t have eyelids.`,
    `Snakes can’t bite food so have to swallow it whole.`,
    `Snakes have flexible jaws which allow them to eat prey bigger than their head!`,
    `Snakes are found on every continent of the world except Antarctica.`,
    `Snakes have internal ears but not external ones.`,
    `Snakes used in snake charming performances respond to movement, not sound`,
    `There are around 3000 different species of snake.`,
    `Snakes have a unique anatomy which allows them to swallow and digest large prey.`,
    `Snakes are covered in scales`,
    `nakeskin is smooth and dry`,
    `Snakes shed their skin a number of times a year in a process that usually lasts a few days`,
    `Some species of snake, such as cobras and black mambas, use venom to hunt and kill their prey. Read more venomous snake facts.`,
    `Snakes smell with their tongue`,
    `Pythons kill their prey by tightly wrapping around it and suffocating it in a process called constriction`,
    `Some sea snakes can breathe partially through their skin, allowing for longer dives underwater.`,
    `Anacondas are large, non-venomous snakes found in South America that can reach over 5 m (16 ft) in length.`,
    `Python reticulates can grow over 8.7 m (28 ft) in length and are considered the longest snakes in the world.`,
    `Snakes live on everywhere on Earth except Ireland, Iceland, New Zealand, and the North and South Poles`,
    `Of the approximately 725 species of venomous snakes worldwide, 250 can kill a human with one bite`,
    `To avoid predators, some snakes can poop whenever they want. They make themselves so dirty and smelly that predators will run away`,
    `Rattlesnake rattles are made of rings of keratin, which is the same material as human hair and fingernails. A rattler will add a new ring each time it sheds its skin`,
    `are five recognized species of flying snakes. Growing up to 4 feet, some types can glide up to 330 feet through the air`,
    `A snake’s fangs usually last about 6–10 weeks. When a fang wears out, a new one grows in its place`,
    `The amount of food a snake eats determines how many offspring it will have. The Arafura file snake eats the least and lays just one egg every decade`,
    `Snakes typically need to eat only 6–30 meals each year to be healthy`,
    `The Gaboon viper has the longest fangs of any snake, reaching about 2 inches (5 cm) long`,
    `Sea snakes with their paddle-shaped tails can dive over 300 feet into the ocean`
    

  ];
  
  
  let fact = facts[Math.floor(Math.random() * facts.length)];
  var thefact = { Link: `${fact}` };

  res.json(thefact);
});





app.get("/facts/fish", (req, res) => {
  let facts = [
 
  
    `Fish are vertebrate animals that live in the water. Vertebrate means they have a spinal cord surrounded by bone or cartilage.`,
    `There are over 30000 known species of fish.`,
    `Fish have gills that extract oxygen from the water around them.`,
    `Some flatfish use camouflage to hide themselves on the ocean floor.`,
    `Tuna can swim at speeds of up to 70 kph (43 mph).`,
    `Relative to their body size, fish have small brains compared to most other animals.`,
    `Fish are covered in scales which are often covered in a layer of slime to help their movement through water.`,
    `Cleaner fish help out other fish by removing parasites and dead skin from their scales`,
    `Although jellyfish and crayfish have the word ‘fish’ in their name, they aren’t actually fish.`,
    `Over 1000 fish species are threatened by extinction.`,
    `Mermaids are mythological creatures with the tail of a fish and the upper half of a woman.`,
    `Although the fangtooth fish is only a few inches long, it has teeth about the size of a human’s`,
    `A fish can drown in water. Like humans, fish need oxygen, so if there isn’t enough oxygen in the water, they will suffocate.`,
    `The fish in the middle of a school control the school. The fish on the outside are guided by those in the middle. Only bony fish can swim in highly coordinated groups.`,
    `Most fish cannot swim backwards. Those that can are mainly members of one of the eel families.`,
    `Fish would suffocate if they tried to chew because chewing would interfere with water passing over their gills.`,
    `The biggest fish in the world is the giant whale shark, which can grow to nearly 60 feet, or the length of two school buses. It weighs over 25 tons and eats mainly plankton. It has over 4,000 teeth, though they are only 3 mm long`,
    `The most poisonous fish in the world is the stone fish. Its sting can cause shock, paralysis, and even death if not treated within a few hours`,
    `The fastest fish is the sailfish. It can swim as fast as a car travels on the highway.`,
    `Seahorses are the only fish that swim upright.`,
    `The slowest fish is a seahorse. It swims so slowly that a person can barely tell it is moving. The slowest is the Dwarf Seahorse, which takes about one hour to travel five feet. It even looks like it is simply standing up, not swimming.`,
    `Some fish do not have scales. Sharks, for example, have rough sandpapery skin instead of scales`,
    `Fish have multiple Christian and pre-Christian overtones. For example, the Greek word for fish is Ichthys, which is an acronym for “Jesus Christ, God’s Son, Savior” and was used to mark early Christian tombs and meeting places. Because of their association with fertility, fish have also been linked to Isis and Aphrodite.`,
    `In Japan, the fugu, or puffer fish, is a succulent but lethal delicacy. It contains tetrodotoxin, a deadly poison. However, it is so delicious that Japanese gourmets risk their lives to prepare it. To make this high-risk dish, chefs must have a certificate from a special school that teaches preparation of this toxic fish`,
    `Hammerhead sharks can live in schools of more than 500 sharks. The strongest female swims in the middle. When she is ready to mate, she shakes her head from side to side to signal the other female sharks to move away so she is the center of attention.`,
    `A male emperor angelfish lives together with up to five female mates. If the emperor angelfish dies, one of the females turns into a male fish and becomes the leader of the group.`,
    `There are approximately 32,000 different kinds of fish in the world today, which is more than all the other kinds of vertebrates combined. Scientists are discovering new species all the time.`
    
    
    
    

  ];
  let fact = facts[Math.floor(Math.random() * facts.length)];
  var thefact = { Link: `${fact}` };

  res.json(thefact);
});

app.get("/facts/whale", (req, res) => {
  let facts = [
    `Like dolphins and porpoises, whales are believed to have descended from land animals that returned to the water roughly 50 million years ago`,
    `Because whales must rise to the surface often to breathe, only one half of their brain sleeps at a time.`,
    `Most etymologists believe the word “whale” comes from the High German word hwal, but it is also possible that it derived from the Old English word for “wheel” since the back of a whale rolling at the surface of the water resembles the rim of a large, submerged wheel.`,
    `Whales swim by moving their tails up and down in a vertical motion. In contrast, fish move their tails from side to side`,
     `When a blue whale dives into the water, its head is already deeper than most scuba divers dare to go before its tail leaves the surface of the water.`,
    `Sperm whales can dive as deep as two miles into the water, and their bodies have unique physiological adaptations to allow them to survive the intense cold and crushing pressure of these dives. They can limit circulation to the brain and other organs, slow the heart to 10 beats per minute to conserve oxygen, and collapse the lungs and rib cage to withstand pressure`,
    `“Fluking” is the term used for when a whale lifts its tail out of the water prior to making a deep dive. Because each whale species’ tail has unique features, fluking allows whale observers to identify species at a distance`,
    `Because whales typically use hearing as their primary sense, they have very small eyes in proportion to their overall body size.`,
     `During the 20th century, whalers killed nearly 3 million whales, and nearly wiped out 90% of all blue whales. Humpback and blue whales remain close to extinction`,
    `Sperm whale poo (ambergris) could potentially be worth about $10,000 per pound. It is most commonly found in expensive perfumes and musks`,
    `The only known white humpback whale in the world is named Migaloo, which means "white fella" in a Queensland aboriginal dialect. It is a "special interest" whale, and anyone coming close to him will be fined $13,500.[`,
    `A blue whale's heart can weigh as much as car.`,
     `A blue whale's tongue can weigh as much as an elephant.`,
    `A blue whale's life span in the wild can be reach up to 90 years.`,
    `Scientists are not sure why whales jump out of the water, often called “breaching.” While early whalers thought breaching was a whale’s method of taunting the fishermen, many biologists now believe breaching is a whale’s way of demonstrating stamina and strength to prospective mates.`,
    `A whale's earwax reveals a whale's age, similar to the way tree rings reveal the age of tree. It also reveals pollution levels in the whale's body, hormone levels at various stages in its life, and periods of starvation and abundance`,
     `When a blue whale exhales, the water from its blowhole can reach almost 30 feet into the air.`,
    `At certain times of the year, a blue whale can eat over 4 tons of krill---in one day.`,
    `Whales have the some of richest milk of any mammal. A baby humpback whale can drink 150 gallons of milk a day.`,
    `Blue whales can gulp down half a million calories in one mouthful.`,
    
    `About 50 million years ago, whales walked on land and were about the size of a wolf.`
    
  ];
  let fact = facts[Math.floor(Math.random() * facts.length)];
  var thefact = { Link: `${fact}` };

  res.json(thefact);
});
app.get("/img/chicken", (req, res) => {
  let images = [
    
    `https://i.imgur.com/hdCXJwF.jpg`,
    `https://i.imgur.com/x52cBe3.jpg`,
    `https://i.imgur.com/A2ZtFyE.jpg`,
    `https://i.imgur.com/s8G0iHz.jpg`,
    `https://i.imgur.com/oPbXWmr.jpg`,
    `https://i.imgur.com/P1QQo2B.jpg`,
    `https://i.imgur.com/Jd270xf.jpg`,
    `https://i.imgur.com/pfLU7Sp.jpg`

  ];
  
   let spiders = images[Math.floor(Math.random() * images.length)];
  var spider = { Link: `${spiders}` };

  res.json(spider);
});

app.get("/facts/killerwhale", (req, res) => {
  let facts = [
    `The Scientific Name of the Killer Whale Is Orcinus orca.`,
    `The Killer Whale Is Not a Whale`,
    `The Largest Killer Whale Ever Seen Was 32 Feet Long`,
    `Killer Whales Eat Sharks`,
    `Killer Whales Live in Groups Called Pods`,
    `Killer Whales Cannot Smell.`,
    `Orcas are apex predators—they are at the top of the oceanic food chain and have no natural predators.`,
    `Orcas are actually dolphins`,
    `There are three main types of killer whales: Resident, Transient, and Offshore.`,
    `The Killer Whale Is Not a Whale.`,
    `Killer Whales Have Their Own Language.`,
    `Female Killer Whales Carry Their Young for 17 Months.`,
    `Killer Whales Can Sleep with One Eye Open.`,
    `A Killer Whale’s Dorsal Fin Can “Flop”.`,
    `Killer Whales Are the Most Widely Distributed Mammals in the World (Not Counting Humans).`,
    `The Oldest Known Killer Whale Lived to Be 103.`,
    `There Is No Record of a Wild Killer Whale Ever Attacking a Human.`,
    `Orcas are the only known non-human animal to have evolved based on culture`,
    `Orcas are found in all Oceans`,
    `Orcas are one of only three animal species on the planet to go through menopause `,
    `Most males never leave their mothers`,
    `Orca groups are divided into pods and communities`,
    `Orcas have no natural predators`,
    `A female Orca gives birth to 1 calf every five years, and she averages 5 calves per lifetime`
    
  ];
  let fact = facts[Math.floor(Math.random() * facts.length)];
  var thefact = { Link: `${fact}` };

  res.json(thefact);
});

app.get("/facts/horse", (req,res) => {
  let facts = [
    `Horses have the largest eyes of any land mammal.`,
    ` Horses can run within hours after birth.`,
    ` When horses look like they’re laughing, they’re actually engaging in a special nose-enhancing technique known as “flehmen,” to determine whether a smell is good or bad. `,
    `A horse's teeth take up a larger amount of space in their head than their brain`,
    `You can generally tell the difference between male and female horses by their number of teeth: males have 40 while females have 36 (but honestly, most us are going to use the much “easier” way).`,
    `Horse hooves are made from the same protein that comprises human hair and fingernails`,
    `Horse hooves are made from the same protein that comprises human hair and fingernails`,
    ` In 1872, Leland Stanford (1824-1893) made a bet that at some point in the gallop all four of a horse’s legs are off the ground at the same time. Eadweard Muybridge (1830-1904) proved him right by using a series of 24 cameras and photographing a racehorse named Sallie Gardner.`,
    ` Horses are more secure and comfortable when trailering if they can face the rear, but they prefer openings`,
    ` Horses can sleep both lying down and standing up`,
    `A 19th century horse named ‘Old Billy’ reportedly lived 62 years.`,
    ` From 1867 to 1920, the number of horses shot up from 7.8 million to 25 million. Experts believe this was due to the rise of the automobile. `,
    `. Because horse’s eyes are on the side of their head they are capable of seeing nearly 360 degrees at one time.`,
    `The fastest recorded sprinting speed of a horse was 88 kph (55 mph). Most gallop at around 44 kph or 27 mph`,
    `The Przewalski’s horse is the only truly wild horse species still in existence. The only wild population is in Mongolia. There are however numerous populations across the world of feral horses e.g. mustangs in North America`,
    ` Horses use their ears, eyes and nostrils to express their mood. They also communicate their feelings through facial expressions`,
    ` Horses will not lie down simultaneously because at least one will act as a look-out to alert its companions of potential dangers.`,
    `Vocalizations are highly important to horses. Examples: Whinnying and neighing sounds are elicited when horses meet or leave each other. Stallions (adult male horses) perform loud roars as mating calls, and all horses will use snorts to alert others of potential danger.`,
    `Approximately 4.6 million Americans work in the horse industry in one way or another. The US horse industry has an economic effect of $39 billion annually on just nine million American horses. There are approximately 58 million horses in the world and the vast majority are cared for by humans.`,
    `An adult horse’s brain weights 22 oz, about half that of a human. `,
    `Horses still hold a place of honor in many cultures, often linked to heroic exploits in war, China being one of those countries.`,
    `Horses can not vomit.`,
    `here is only one species of domestic horse, but around 400 different breeds that specialize in everything from pulling wagons to racing. All horses are grazers`,
    ` A horse can see better at night than a human. However, it takes a horse's eyes longer to adjust from light to dark and from dark to light than a human's.`,
    `The first cloned horse was a Haflinger mare in Italy in 2003.`,
    `Horses like sweet flavors and will usually reject anything sour or bitter.`
  ];
  let fact = facts[Math.floor(Math.random() * facts.length)];
  var thefact = { Link: `${fact}` };

  res.json(thefact);
});

app.get("/facts/dolphin", (req, res) => {
  let facts = [
 
  
    ` Dolphins evolved from a four-legged terrestrial animal that started spending more time in the water around 50 million years ago`,
    ` The name "dolphin" comes from the Greek words "delphis" and "delphus," meaning "fish with a womb`,
    `There are around 40 different species of dolphins swimming in the oceans of the world`,
    `Dolphins range in size from the 5.6 feet (1.7 meters) to 31 feet long, and weigh between 110 lbs (50 kilograms) and 10 tonnes, depending on the type of animal and species`,
    ` The killer whale is the largest member of the oceanic dolphin family`,
    `The most common species - the bottlenose dolphin - inhabits all regions of the planet, except for the Antarctic and Arctic oceans`,
    `The differences between dolphins and porpoises can be found in their body shapes, fins and faces`,
    `Dolphins live in relatively shallow waters, but they can dive up to 900 feet`,
    `Dolphins are piscivores, and eat around 35 pounds of fish every day, including squid and crustaceans`,
    ` Dolphins don't drink water because they get it from the food they eat`,
    `Although dolphins have teeth, they swallow food without chewing it`,
    `Dolphins have two stomachs - one of storing food and another one for digestion`,
    `Dolphins have a skeleton with light, highly flexible, yet weaker bones compared with land animals`,
    `Dolphins are "equipped" with highly effective healing processes, which means that they don't hemorrhage to death easily`,
    `Dolphins are believed to have the longest memory in the animal kingdom`,
    ` Dolphins use their echolocation/sonar for navigating through the water and obstacles and hunting prey`,
    `Dolphins' hearing system is so sophisticated and advanced that even a blind individual can survive`,
    `Dolphins have no sense of smell, and do not have a good sense of taste`,
    ` Dolphins can use their noses to kill sharks`,
    `Dolphins have smooth skin to reduce drag while swimming - their outer skin layer can regenerate in only two hours`,
    `Although dolphins have lungs and breathe like humans, they can't live on land because they become dehydrated and overheat out of the water`,
    `Dolphins sleep eight hours per day, and spend the rest of the day swimming`
    
    
    

  ];
  let fact = facts[Math.floor(Math.random() * facts.length)];
  var thefact = { Link: `${fact}` };

  res.json(thefact);
});


app.get("/img/bear", (req, res) => {
  let images = [
    
    `https://i.imgur.com/ys245Yh.jpg`,
    `https://i.imgur.com/e7oGVBM.png`,
    `https://i.imgur.com/064u3tT.jpg`,
    `https://i.imgur.com/ZLUeNHk.jpg`,
    `https://i.imgur.com/3Os5Dsq.jpg`,
    `https://i.imgur.com/sKM0maj.jpg`,
    `https://i.imgur.com/kKWA6fO.jpg`,
    `https://i.imgur.com/NfQEwnR.jpg`,
    `https://i.imgur.com/y3bG4jf.jpg`,
    `https://i.imgur.com/4g6P7vR.jpg`,
    `https://i.imgur.com/F6MTm7x.jpg`,
    `https://i.imgur.com/5saRJNN.jpg`,
    `https://i.imgur.com/qe3sHSn.jpg`,
    `https://i.imgur.com/P0xDram.jpg`,
    `https://i.imgur.com/XKS7mSi.jpg`,
    `https://i.imgur.com/UfLLX3M.jpg`,
    `https://i.imgur.com/2qjcrwL.jpg`,
    `https://i.imgur.com/SXsHrzg.jpg`,
    `https://i.imgur.com/yye3Gad.jpg`,
    `https://i.imgur.com/Fmx0NIn.jpg`,
    `https://i.imgur.com/zEscXbE.jpg`
  ];
  
   let spiders = images[Math.floor(Math.random() * images.length)];
  var spider = { Link: `${spiders}` };

  res.json(spider);
});
  

app.get("/coinflip", (req, res) => {
  let images = [
    
    `https://i.vgy.me/DKYRWj.png`,
    `https://i.vgy.me/oSgRhL.png`
  ];
  
   let spiders = images[Math.floor(Math.random() * images.length)];
  var spider = { Link: `${spiders}` };

  res.json(spider);
});
  
app.get("/img/sheep", (req, res) => {
  let images = [
    `https://images.unsplash.com/photo-1484557985045-edf25e08da73?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80`,
    `https://upload.wikimedia.org/wikipedia/commons/2/2c/Flock_of_sheep.jpg`,
    `https://fwi-wp-assets-live.s3-eu-west-1.amazonaws.com/sites/1/2019/06/1-Scald-has-been-brought-under-control-by-footbathing-and-ensuring-grass-isnt-too-long-c-no-credit.jpg`,
    `https://www.sciencenews.org/wp-content/uploads/2020/03/022820_ls_sheep_feat-1028x579.jpg`,
    `https://media.4-paws.org/b/4/c/9/b4c9f73e0d88d8c4cc941c747495601d31ea090f/VP0082009-1930x1336-1920x1329.jpg`,
    `https://www.sciencenews.org/wp-content/uploads/2020/03/022820_ls_sheep_feat-1028x579.jpg`,
    `https://bmcontent.affino.com/AcuCustom/Sitename/DAM/339/stockgroupsheepewesongrass_2926_Main.jpg`,
    `https://www.aces.edu/wp-content/uploads/2018/11/iStock-182344013.jpg`,
    `https://cdn.mos.cms.futurecdn.net/8k3DjpgmsoD7fKwk3zyBEf-1200-80.jpg`,
    `https://www.ciwf.org.uk/media/7430402/sheep-eating-grass.jpg?mode=min&width=600&height=315&rnd=131376073570000000`,
    `https://www.vegsoc.org/wp-content/uploads/2019/02/sheep-750x580.jpg`,
    `https://modernfarmer.com/wp-content/uploads/2017/12/StCroixHairSheep-1200x800.jpg`,
    `https://a57.foxnews.com/static.foxnews.com/foxnews.com/content/uploads/2019/11/931/524/iStock-sheep.jpg?ve=1&tl=1`,
    `https://ichef.bbci.co.uk/news/410/cpsprodpb/A46E/production/_111249024_gettyimages-491634484.jpg`,
    `https://i.insider.com/5797a92bdd0895057c8b4a66?width=1100&format=jpeg&auto=webp`,
    `https://i.hurimg.com/i/hdn/75/0x0/5a843d98c03c0e2108297515.jpg`,
    `https://darkgraysheep.com/wp-content/uploads/2019/02/Gray-Sheep-Provide-the-Warmest-Stock-300x251.jpg`,
    `https://www.thatsfarming.com/uploads/news/resizeExact_1200_800/18806-lamb-3910807-1280.jpg`,
    `https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F8bc0ebbc-e918-11e9-b84b-ece3c04125d8.jpg?crop=3349%2C1884%2C117%2C454&resize=685`
  ];
  let sheeps = images[Math.floor(Math.random() * images.length)];
  var sheep = { Link: `${sheeps}`};
  
  res.json(sheep);
});

app.get("/img/rhino", (req, res) => {
  let images = [
    
    `https://i.imgur.com/qOvTwZC.jpg`,
    `https://i.imgur.com/GZoz43p.jpg`,
    `https://i.imgur.com/lAqbhfY.jpg`,
    `https://i.imgur.com/KLW7iAk.jpg`,
    `https://i.imgur.com/mrwng1n.jpg`,
    `https://i.imgur.com/BQ8dMTt.jpg`,
    `https://i.imgur.com/5LJsrE9.jpg`,
    `https://i.imgur.com/aRRzbcj.jpg`,
    `https://i.imgur.com/PVZvZlF.jpg`,
    `https://i.imgur.com/Yjz6dbF.jpg`,
    `https://i.imgur.com/Nq5xLYa.jpg`,
    `https://i.imgur.com/1adwv4Y.jpg`,
    `https://i.imgur.com/0Oz1fB0.jpg`,
    `https://i.imgur.com/V1m8FKC.jpg`,
    `https://i.imgur.com/jIWZxUD.jpg`,
    `https://i.imgur.com/miCPyDd.jpg`,
    `https://i.imgur.com/JIlI6DH.jpg`,
    `https://i.imgur.com/jrSmQ4R.jpg`,
    `https://i.imgur.com/J0NaouA.jpg`
    
  ];
  
   let spiders = images[Math.floor(Math.random() * images.length)];
  var spider = { Link: `${spiders}` };

  res.json(spider);
});
  

app.get("/img/horse", (req, res) => {
  let p = [
    `https://i.imgur.com/vFcb2pB.jpg`, 
    `https://i.imgur.com/MgvdGOP.jpg`,
    `https://i.imgur.com/giBXitc.jpg`,
    `https://i.imgur.com/9zFnOBQ.jpg`,
    `https://i.imgur.com/7UqCs9C.jpg`, 
    `https://i.imgur.com/JtVhKaz.jpg`, 
    `https://i.imgur.com/vsv6mWT.jpg`,
    `https://i.imgur.com/8zAALxD.png`, 
    `https://i.imgur.com/Jzx6KXX.jpg`, 
    `https://i.imgur.com/tjfCGu0.jpg`, 
    `https://i.imgur.com/Tk13tNg.jpg`,
    `https://i.imgur.com/08HdESM.jpg`,
    `https://i.imgur.com/hU0lxD4.jpg`, 
    `https://i.imgur.com/N4kL7kz.jpg`,
    `https://i.imgur.com/uV50lbm.png`, 
    `https://i.imgur.com/JOcsXxk.jpg`, 
    `https://i.imgur.com/GTbECTT.jpg`, 
    `https://i.imgur.com/APYIeZY.jpg`,
  ];
  let panda = p[Math.floor(Math.random() * p.length)];
  var pand = { Link: `${panda}` };

  res.json(pand);
});

app.get("/img/panda", (req, res) => {
  let p = [
    `https://i.imgur.com/tcrWY7k.jpg`,
    `https://i.imgur.com/xwtYLFZ.jpg`,
    `https://i.imgur.com/PFTHokT.jpg`,
    `https://i.imgur.com/YVLrUO9.jpg`,
    `https://i.imgur.com/0366DUS.jpg`,
    `https://i.imgur.com/cNDbs8v.gif`,
    `https://i.imgur.com/lY4Z3tu.jpg`,
    ``
  ];
  let panda = p[Math.floor(Math.random() * p.length)];
  var pand = { Link: `${panda}` };

  res.json(pand);
});

app.get("/img/elephant", (req, res) => {
  let el = [
    `https://i.imgur.com/JT7SP0M.jpg `,
    `https://i.imgur.com/h8JSPDC.jpg`,
    `https://i.imgur.com/otnzIF0.jpg`,
    `https://i.imgur.com/FWPnYPh.jpg`,
    `https://i.imgur.com/b5N6J6C.jpg`,
    `https://i.imgur.com/ZYoOVYj.jpg`,
    `https://i.imgur.com/wgHXZqn.jpg`,
    `https://i.imgur.com/qWDL5Lq.jpg`
  ];
  let elephant = el[Math.floor(Math.random() * el.length)];
  var images = { Link: `${elephant}` };

  res.json(images);
});


app.get("/img/dingo", (req, res) => {
  let image = [
    `https://i.imgur.com/NewshN4.jpg`,
    `https://i.imgur.com/qFTgle7.jpg`,
    `https://i.imgur.com/ETuvDez.jpg`,
    `https://i.imgur.com/wkyKi24.jpg`,
    `https://i.imgur.com/By4yQTv.jpg`,
    `https://i.imgur.com/CZVQo0L.jpg`,
    `https://i.imgur.com/5cMdAV7.jpg`,
    `https://i.imgur.com/sLcpRME.jpg`,
    `https://i.imgur.com/3PALGuy.jpg`,
    `https://i.imgur.com/2kdwd1A.jpg`,
    `https://i.imgur.com/EMUQ2s9.jpg`,
    `https://i.imgur.com/AziJdar.jpg`,
    `https://i.imgur.com/IxTTt9h.jpg`,
    `https://i.imgur.com/MpUzMaH.jpg`,
    `https://i.imgur.com/OGOFWKw.jpg`,
    `https://i.imgur.com/droAhEF.jpg`,
    `https://i.imgur.com/68YgBiR.jpg`,
    `https://i.imgur.com/tBBcDLi.jpg`,
    `https://i.imgur.com/EvRNpJ9.jpg`,
    `https://i.imgur.com/PnpFhHW.jpg`,
    `https://i.imgur.com/WioXfmW.jpg`
    
  ];
  let dingo = image[Math.floor(Math.random() * image.length)];
  var images = { Link: `${dingo}` };

  res.json(images);
});


app.get("/img/monkey", (req, res) => {
  let el = [
       `https://i.imgur.com/orETXNv.jpg`,
    `https://i.imgur.com/ki9BN81.jpg`,
    `https://i.imgur.com/HfQmqOK.jpg`,
    `https://i.imgur.com/VJ6e9VO.jpg`,
    `https://i.imgur.com/leK8nz2.jpg`,
    `https://i.imgur.com/wvQhIwP.jpg`,
    `https://i.imgur.com/SzpuPHt.jpg`,
    `https://i.imgur.com/SSbskGu.jpg`,
    `https://i.imgur.com/0VflJ6e.jpg`,
    `https://i.imgur.com/46ib5vC.jpg`,
    `https://i.imgur.com/GdAEuTj.jpg`,
    `https://i.imgur.com/L9XUn13.jpg`,
    `https://i.imgur.com/VGmR0j1.jpg`,
    `https://i.imgur.com/KL5ZSdp.jpg`,
    `https://i.imgur.com/D1x0oGR.jpg`,
    `https://i.imgur.com/G7hRDPF.jpg`,
    `https://i.imgur.com/7scwQsU.jpg`,
    `https://i.imgur.com/kraUxjn.png`,
    `https://i.imgur.com/iVl8Amk.jpg`,
    `https://i.imgur.com/KPTMrO2.jpg`,
    `https://i.imgur.com/wJ4yyH2.jpg`,
    `https://i.imgur.com/mIGDdFA.jpg`,
    `https://i.imgur.com/5yYAFSU.jpg`,
    `https://i.imgur.com/NMDSTVR.jpg`,
    `https://i.imgur.com/52PRixg.jpg`,
    `https://i.imgur.com/NnT9mfT.jpg`,
    `https://i.imgur.com/NZOMJVh.jpg`,
    `https://i.imgur.com/DKvcmFy.jpg`,
    `https://i.imgur.com/aSe9jbR.jpg`
  ];
  let elephant = el[Math.floor(Math.random() * el.length)];
  var images = { Link: `${elephant}` };

  res.json(images);
});

app.get("/img/trump", (req, res) => {
  let el = [
    `https://i.imgur.com/xc0FH1a.jpg`,
    `https://i.imgur.com/xtOae11.jpg`,
    `https://i.imgur.com/JqDoyvq.jpg`,
    `https://i.imgur.com/Aj3EhJQ.jpg`,
    `https://i.imgur.com/Psm8kaO.jpg`,
    `https://i.imgur.com/6UkQUDj.jpg`,
    `https://i.imgur.com/IWtmmqF.jpg`,
    `https://i.imgur.com/un8QPQv.jpg`,
    `https://i.imgur.com/043mcti.jpg`,
    `https://i.imgur.com/5t5wM5s.jpg`,
    `https://i.imgur.com/mCeE8YX.jpg`,
    `https://i.imgur.com/9n5fzUY.jpg`
    
  ];
  let elephant = el[Math.floor(Math.random() * el.length)];
  var images = { Link: `${elephant}` };

  res.json(images);
});


app.get("/img/giraffe", (req, res) => {
 
  let giraffeimage = [
    `https://i.imgur.com/da20LRi.jpg`,
    `https://i.imgur.com/HqGEY7Q.jpg`,
    `https://i.imgur.com/4pMuP9v.jpg`,
    `https://i.imgur.com/hOAe9DU.jpg`,
    `https://i.imgur.com/g5aIzUW.jpg`,
    `https://i.imgur.com/aMuEcST.jpg`,
    `https://i.imgur.com/FpziJIZ.jpg`,
    `https://i.imgur.com/Em6NTqh.jpg`,
    `https://i.imgur.com/cxx3oqM.jpg`,
    `https://i.imgur.com/cYYXnHb.jpg`,
    `https://i.imgur.com/lc3BXIV.jpg`,
    `https://i.imgur.com/cYHFHkX.jpg`,
    `https://i.imgur.com/HO8GnnV.jpg`,
    `https://i.imgur.com/ObDLa.jpg`,
    `https://i.imgur.com/ptEUwvN.jpg`,
    `https://i.imgur.com/7LuoiaF.jpg`,
    `https://i.imgur.com/2ArueM5.jpg`,
    `https://i.imgur.com/U9T7L.jpg`
  ];
  
    giraffeimage[Math.floor(Math.random() * giraffeimage.length)];

  let giraffe = giraffeimage[Math.floor(Math.random() * giraffeimage.length)];
  var images = { Link: `${giraffe}` };

  res.json(images);
});


app.get("/img/killerwhale", (req, res) => {
  let k = [
    `https://i.imgur.com/VS6Nsz7.jpg`,
    `https://i.imgur.com/hAPRM41.jpg`,
    `https://www.abc.net.au/news/image/11206972-3x2-700x467.jpg`,
    `https://www.nhm.ac.uk/content/dam/nhmwww/discover/killer-whale-pcb-extinct/orca-pcb-full-width.jpg`,
    `https://allthatsinteresting.com/thumb/800.422.https://allthatsinteresting.com/wordpress/wp-content/uploads/2017/06/killer-whale-gangs-og.jpg`,
    `https://images.newscientist.com/wp-content/uploads/2016/09/08143111/ice9-copy-2.jpg`,
    `https://www.naturalworldsafaris.com/media/3680/patrick-dykstra-norway-killer-whales-shallow-chase.jpg`,
    `https://resize.hswstatic.com/w_907/gif/orca-PCB.jpg`,
    `https://www.thoughtco.com/thmb/I-G6h-pP6gFcqVfMN7jPbAsYrhs=/2086x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/orcas-494724489-5722aa6e5f9b58857d0a9700.jpg`,
    `https://www.thoughtco.com/thmb/xha4bBQ7c_H7QxLO0t_TWoj_a4o=/2086x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/killer-whale-orcinus-orca-with-juvenile-southern-sea-lion-otaria-flavescens-in-mouth-patagonia-argentina-atlantic-ocean-2-of-3-124772015-5722ab213df78c5640589a77.jpg`
  ];
  let kwhale = k[Math.floor(Math.random() * k.length)];
  var kwhales = { Link: `${kwhale}` };

  res.json(kwhales);
});


app.get("/img/eevee", (req, res) => {
  let p = [
    `https://i.imgur.com/dx0mcDV.gif`,
    `https://i.imgur.com/FKp9DUb.gif`,
    `https://i.imgur.com/jJ9Jgkf.gif`,
    `https://i.imgur.com/KbpohLC.jpg`,
    `https://i.imgur.com/RthGvEc.jpg`,
    `https://i.imgur.com/vntsSDr.jpg`,
    `https://i.imgur.com/ffluIpJ.jpg`,
    `https://i.imgur.com/negIMNL.jpg`,
    `https://i.imgur.com/v6ErLPF.jpg`,
    `https://i.imgur.com/N9jVdPf.jpg`,
    `https://i.imgur.com/wCZ6Ael.jpg`,
    `https://i.imgur.com/kI9qTJ5.gif`,
    `https://i.imgur.com/jnfyaUX.gif`,
    `https://i.imgur.com/yC1xR0F.jpg`,
    `https://i.imgur.com/57L2IMh.jpg`,
    `https://i.imgur.com/pYc9Uwz.jpg`
  ];
  let eevees = p[Math.floor(Math.random() * p.length)];
  var eevee = { Link: `${eevees}` };

  res.json(eevee);
});

app.get("/meme", (req, res) => {
  let p = [
    `https://i.imgur.com/QtpcgTS.png`,
    `https://i.imgur.com/z8qAJAI.jpg`,
    `https://i.imgur.com/fqyfPaa.png`,
    `https://i.imgur.com/yLQ5XYB.png`,
    `https://i.imgur.com/36hzbKb.jpg`,
    `https://i.imgur.com/CKyITVn.png`,
    `https://i.imgur.com/93OUfQ7.jpg`,
    `https://i.imgur.com/C9WA5ZX.jpg`,
    `https://i.imgur.com/DOW9vCa.jpg`,
    `https://i.imgur.com/aTNDeLy.jpg`,
    `https://i.imgur.com/Mx6socJ.jpg`,
    `https://i.imgur.com/ZOQC0go.jpg`,
    `https://i.imgur.com/n4Y31rj.jpg`,
    `https://i.imgur.com/rLIWcpX.jpg`,
    `https://i.imgur.com/37wAJIk.jpg`,
    `https://i.imgur.com/NzdwMxQ.jpg`,
    `https://i.imgur.com/esVRaoL.jpg`,
    `https://i.imgur.com/sgbLDI9.jpg`,
    `https://i.imgur.com/yKQdjSR.jpg`,
    `https://i.imgur.com/zhAuC6a.jpg`,
    `https://i.imgur.com/YbqIWAb.jpg`,
    `https://i.imgur.com/5VQKec1.jpg`,
    `https://i.imgur.com/kD1VoOV.jpg`,
    `https://i.imgur.com/htLtCVA.jpg`,
    `https://i.imgur.com/R0AWITv.jpg`,
    `https://i.imgur.com/O4FnQyo.jpg`,
    `https://i.imgur.com/QlorxUy.jpg`,
    `https://i.imgur.com/U1I0BXk.jpg`,
    `https://i.imgur.com/Rfz8AHb.jpg`,
    `https://i.imgur.com/8z7wgFT.jpg`,
    `https://i.imgur.com/zoi2Ymr.jpg`,
    `https://i.imgur.com/mkwoLMl.jpg`,    
    `https://i.imgur.com/G6KkGHb.png`
  ];
  let panda = p[Math.floor(Math.random() * p.length)];
  var pand = { Link: `${panda}` };

  res.json(pand);
});

app.get("/img/snakes", (req, res) => {
  let images = [
    `https://i.imgur.com/zaHnxkK.jpg`,
    `https://i.imgur.com/AZBYzzz.jpg`,
    `https://i.imgur.com/Zplc3bG.jpg`,
    `https://i.imgur.com/Zy4Fp3x.jpg`,
    `https://i.imgur.com/MYgqNhD.jpg`,
    `https://i.imgur.com/cOClAgC.jpg`,
    `https://i.imgur.com/t8EicRc.jpg`,
    `https://i.imgur.com/FmKHCzj.jpg`,
    `https://i.imgur.com/7xwUzhQ.jpg`,
    `https://i.imgur.com/tBLTrYM.jpg`,
    `https://i.imgur.com/jvl43QY.jpg`,
    `https://i.imgur.com/kMpHOpv.jpg`,
    `https://i.imgur.com/FcwvNXw.gif`,
    `https://i.imgur.com/Wv2k8.jpg?1`,
    `https://i.imgur.com/jZ411CX.jpg`,
    `https://i.imgur.com/n51c45I.jpg`
  ];
  let snakes = images[Math.floor(Math.random() * images.length)];
  var snake = { Link: `${snakes}` };

  res.json(snake);
});

app.get("/img/spiders", (req, res) => {
  let images = [
    `https://i.imgur.com/A0OM1O0.jpg`,
    `https://i.imgur.com/CS77UxQ.jpg`,
    `https://i.imgur.com/Qkzpjgd.jpg`,
    `https://i.imgur.com/dLLRIrb.jpg`,
    `https://i.imgur.com/1i3otnO.jpg`,
    `https://i.imgur.com/Dxu1XPk.jpg`,
    `https://i.imgur.com/41aoDgt.jpg`,
    `https://i.imgur.com/br3AkSg.jpg`,
    `https://i.imgur.com/cbfqFAu.jpg`,
    `https://i.imgur.com/rhOJiem.jpg`,
    `https://i.imgur.com/srCCuSu.jpg`,
    `https://i.imgur.com/k7aUSwf.jpg`,
    `https://i.imgur.com/gorF8aE.jpg`,
    `https://i.imgur.com/j3UXef9.jpg`,
    `https://i.imgur.com/Dl2kOyb.jpg`,
    `https://i.imgur.com/SFWyTwx.jpg`,
    `https://i.imgur.com/0oMorXZ.jpg`,
    `https://i.imgur.com/ItwsbWY.jpg`,
    `https://i.imgur.com/xj6GtFM.jpg`,
    `https://i.imgur.com/zYnAste.jpg`,
    `https://i.imgur.com/9ETppQb.jpg`,
    `https://i.imgur.com/SBw27s0.jpg`,
    `https://i.imgur.com/qJY0xwE.jpg`,
    `https://i.imgur.com/vcFXF28.jpg`,
    `https://i.imgur.com/Oaxi5Ye.gif`,
    `https://i.imgur.com/KGMAT7d.jpg`,
    `https://i.imgur.com/2SYi74o.jpg`,
    `https://i.imgur.com/6agibkd.gif`,
    `https://i.imgur.com/umWykTO.jpg`,
    `https://i.imgur.com/No3Dzcd.jpg`,
    `https://i.imgur.com/qBsMQxx.jpg`,
    `https://i.imgur.com/H75ZPbt.jpg`,
    `https://i.imgur.com/SanKbgD.jpg`
  ];
  let spiders = images[Math.floor(Math.random() * images.length)];
  var spider = { Link: `${spiders}` };

  res.json(spider);
});

app.get("/img/lizards", (req, res) => {
  
  let images = [
    `https://i.imgur.com/3nTp9trb.jpg`,
    `https://i.imgur.com/CE8eLXGb.jpg`,
    `https://i.imgur.com/mNow6Qwb.jpg`,
    `https://i.imgur.com/deIkDb.jpg`,
    `https://i.imgur.com/smmBTwNb.jpg`,
    `https://i.imgur.com/V4SxXb.jpg`,
    `https://i.imgur.com/YNem0dPb.jpg`,
    `https://i.imgur.com/cNAdBKmb.jpg`,
    `https://i.imgur.com/rD85cBPb.jpg`,
    `https://i.imgur.com/hzRAJdOb.jpg`,
    `https://i.imgur.com/7S2kWBGb.jpg`,
    `https://i.imgur.com/we2FTNLb.jpg`,
    `https://i.imgur.com/2KlJBmGb.jpg`,
    `https://i.imgur.com/OXAIEKKb.jpg`,
    `https://i.imgur.com/ra61Mb.jpg`,
    `https://i.imgur.com/4B8g3HZb.jpg`,
    `https://i.imgur.com/kNpwvU8b.jpg`,
    `https://i.imgur.com/UkL8TbPb.jpg`,
    `https://i.imgur.com/JpyfRlzb.jpg`,
    `https://i.imgur.com/qfwqzmYb.jpg`,
    `https://i.imgur.com/9PJZ8ZMb.jpg`,
    `https://i.imgur.com/aCcvt6Zb.jpg`,
    `https://i.imgur.com/dM3ZSF0b.jpg`,
    `https://i.imgur.com/nDpPNC9b.jpg`,
    `https://i.imgur.com/q5OTYMbb.jpg`,
    `https://i.imgur.com/fOxip3Vb.jpg`,
    `https://i.imgur.com/FL9s0bxb.jpg`,
    `https://i.imgur.com/3xfFLp3b.jpg`,
    `https://i.imgur.com/X4F0K9qb.jpg`,
    `https://i.imgur.com/1R6X6brb.jpg`,
    `https://i.imgur.com/K1owcl0b.jpg`,
    `https://i.imgur.com/VK7Rvs5b.jpg`,
    `https://i.imgur.com/B28LvQnb.jpg`,
    `https://i.imgur.com/A2Y2D2mb.jpg`
  ];
  let lizards = images[Math.floor(Math.random() * images.length)];
  var lizard = { Link: `${lizards} ` };

  res.json(lizard);
});

app.get("/img/food", (req, res) => {
  let images = [
    `https://i.imgur.com/IIyGYfYb.jpg`,
    `https://i.imgur.com/McSTNhUb.jpg`,
    `https://i.imgur.com/GUwOd0Xb.jpg`,
    `https://i.imgur.com/Gba3ymLb.jpg`,
    `https://i.imgur.com/TRjWsfdb.jpg`,
    `https://i.imgur.com/6QXqfQkb.jpg`,
    `https://i.imgur.com/1AWPwHQb.jpg`,
    `https://i.imgur.com/0e7VL4jb.jpg`,
    `https://i.imgur.com/HfBaP0lb.jpg`,
    `https://i.imgur.com/j47EARlb.jpg`,
    `https://i.imgur.com/EF6YWT7b.jpg`,
    `https://i.imgur.com/pcQmAzI.jpg`,
    `https://i.imgur.com/glv8rj5.jpg`,
    `https://i.imgur.com/DK9nrK4.jpg`,
    `https://i.imgur.com/bdzrxXw.jpg`,
    `https://i.imgur.com/N48vfobb.jpg`,
    `https://i.imgur.com/DjM86TOb.jpg`,
    `https://i.imgur.com/8sBbD46.jpg`,
    `https://i.imgur.com/BHdbOQ3b.jpg`,
    `https://i.imgur.com/5h8S06Sb.jpg`,
    `https://i.imgur.com/IbLG3nWb.jpg`,
    `https://i.imgur.com/JrtNvq9b.jpg`,
    `https://i.imgur.com/SVBR0bkb.jpg`,
    `https://i.imgur.com/z2WHWFib.jpg`,
    `https://i.imgur.com/FJb5Jlhb.jpg`,
    `https://i.imgur.com/dVkX35q.jpg`,
    `https://i.imgur.com/7Qn9dAob.jpg`,
    `https://i.imgur.com/1jI7FBpb.jpg`,
    `https://i.imgur.com/fp958Jnb.jpg`,
    `https://i.imgur.com/25dh9Wpb.jpg`,
    `https://i.imgur.com/5e7aJFlb.jpg`,
    `https://i.imgur.com/44UUne5b.jpg`,
    `https://i.imgur.com/uC9otkAb.jpg`,
    `https://i.imgur.com/KUuRtTcb.jpg`,
    `https://i.imgur.com/dRwfn20b.jpg`,
    `https://i.imgur.com/rEWC6VHb.jpg`,
    `https://i.imgur.com/5wyiMdkb.jpg`,
    `https://i.imgur.com/GROuUnbb.jpg`,
    `https://i.imgur.com/VUEGlFpb.jpg`,
    `https://i.imgur.com/McqXJDhb.jpg`,
    `https://i.imgur.com/Q6dlmqzb.jpg`,
    `https://i.imgur.com/a2mAkYQb.jpg`,
    `https://i.imgur.com/5jM2nSHb.jpg`,
    `https://i.imgur.com/mfF977ub.jpg`,
    `https://i.imgur.com/3B6VwMYb.jpg`,
    `https://i.imgur.com/PNQLkbrb.jpg`
  ];
  let foodes = images[Math.floor(Math.random() * images.length)];
  var food = { Link: `${foodes}` };

  res.json(food);
});



app.get("/img/dolphin", (req, res) => {
  let images = [
    `https://i.imgur.com/9wStCPr.jpg`,
    `https://i.imgur.com/UT5Hmnb.jpg`,
    `https://i.imgur.com/AikCTJr.jpg`,
    `https://i.imgur.com/3Jl69Zu.jpg`,
    `https://i.imgur.com/KxTLIUn.jpg`,
    `https://i.imgur.com/r173fcN.jpg`,
    `https://i.imgur.com/cSMqn7d.jpg`,
    `https://i.imgur.com/PSP2jwh.jpg`,
    `https://i.imgur.com/ckTSQLd.jpg`,
    `https://i.imgur.com/mwuNc97.jpg`,
    `https://i.imgur.com/Obw1ADP.jpg`,
    `https://i.imgur.com/DNy9s4B.jpg`,
    `https://i.imgur.com/QbuumTt.jpg`,
    `https://i.imgur.com/pMSDbyq.jpg`,
    `https://i.imgur.com/H7rOH9F.jpg`,
    `https://i.imgur.com/ZsBwVad.jpg`,
    `https://i.imgur.com/lFIjz4o.jpg`,
    `https://i.imgur.com/ioYSH9k.jpg`,
    `https://i.imgur.com/mJKGQ5f.jpg`,
    `https://i.imgur.com/DuoXFaZ.jpg`,
    `https://i.imgur.com/ggjepu8.jpg`,
    `https://i.imgur.com/TVRn2nf.jpg`,
    `https://i.imgur.com/JuuDniZ.jpg`,
    `https://i.imgur.com/W9vAvYD.jpg`,
    `https://i.imgur.com/I9Xstjb.jpg`,
    `https://i.imgur.com/FU9zxGn.jpg`,
    `https://i.imgur.com/SEIyOxq.jpg`,
    `https://i.imgur.com/TwyWPa8.jpg`,
    `https://i.imgur.com/0BY1E3L.jpg`,
    `https://i.imgur.com/vKTFZrB.jpg`,
    `https://i.imgur.com/fNYTTfp.jpg`,
    `https://i.imgur.com/KWMP5oi.jpg`,
    `https://i.imgur.com/MDww51J.jpg`,
    `https://i.imgur.com/iLdKoSD.jpg`
    
  ];
  let snakes = images[Math.floor(Math.random() * images.length)];
  var snake = { Link: `${snakes}` };

  res.json(snake);
});

app.get("/img/cat", (req, res) => {
  let image = [
    `https://i.imgur.com/aHu0Tzg.jpg`,
    `https://i.imgur.com/xj39dcx.jpg`,
    `https://i.imgur.com/Xy7Lko2.png`,
    `https://i.imgur.com/2Q0C4j6.png`,
    `https://i.imgur.com/SpkK6AJ.png`,
    `https://i.imgur.com/rkgcSY4.png`,
    `https://i.imgur.com/RbGc2Eb.png`,
    `https://i.imgur.com/DfgknPo.png`,
    `https://i.imgur.com/nnLHWeM.jpg`,
    `https://i.imgur.com/G8TYWRx.jpg`,
    `https://i.imgur.com/XcG4PLt.jpg`,
    `https://i.imgur.com/dEFmeYs.jpg`,
    `https://i.imgur.com/f2pChgU.jpg`,
    `https://i.imgur.com/jxBGuhq.jpg`,
    `https://i.imgur.com/hOoH7qY.jpg`,    
    `https://i.imgur.com/VrMhWdL.jpg`,
    `https://i.imgur.com/6N7O3sg.jpg?1`,
    `https://i.imgur.com/wz4mMaB.jpg`,
    `https://i.imgur.com/OxFzaSv.jpg`,
    `https://i.imgur.com/JTpsahf.jpg`,
    `https://i.imgur.com/t57Mip6.jpg`,
    `https://i.imgur.com/apv9vtz.jpg`,    
    `https://i.imgur.com/aGwxghu.jpg`,
    `https://i.imgur.com/myq2W73.jpg`,
    `https://i.imgur.com/tSUUwed.jpg`,
    `https://i.imgur.com/V2yUS5F.jpg`,
    `https://i.imgur.com/x82pCJs.jpg`,
    `https://i.imgur.com/GC1N8e1.jpg`,
    `https://i.imgur.com/vXBhv6z.jpg?1`,    
    `https://i.imgur.com/3o1eVp6.jpg`,
    `https://i.imgur.com/qq1DP4S.jpg`,
    `https://i.imgur.com/WFBorvL.jpg`,
    `https://i.imgur.com/S6vCAsB.jpg`,
    `https://i.imgur.com/KveQWZv.jpg`,
    `https://i.imgur.com/nPWQ82D.jpg`,
    `https://i.imgur.com/lYc3ZJz.jpg`,
    `https://i.imgur.com/JQPv5VL.jpg`,
    `https://i.imgur.com/krMI2Lq.jpg`,
    `https://i.imgur.com/XQL0U78.jpg`,
    `https://i.imgur.com/TvJszzZ.jpg`,
    `https://i.imgur.com/2lr0pCP.jpg`,
    `https://i.imgur.com/sETuQ9C.jpg`,
    `https://i.imgur.com/mqSeEvU.jpg`,
    `https://i.imgur.com/CXkLu36.jpg`,
    `https://i.imgur.com/idRtJtl.jpg`,
    `https://i.imgur.com/XNMYNM1.jpg`,
    `https://i.imgur.com/EJ36YhN.jpg`,
    `https://i.imgur.com/WM0Hcn8.png`
    
    
    
  ];
  let cat = image[Math.floor(Math.random() * image.length)];
  var cats = { Link: `${cat}` };

  res.json(cats);
});

app.get("/img/duck", (req, res) => {
  let image = [
    `https://i.imgur.com/Q4DiVOd.jpg`,
    `https://i.imgur.com/cyZpz16.jpg`,
    `https://i.imgur.com/6SSAYBh.jpg`,
    `https://i.imgur.com/UsekgUm.jpg`,
    `https://i.imgur.com/PNINz4S.jpg`,
    `https://i.imgur.com/n0tuFRU.jpg`,
    `https://i.imgur.com/8MpOIRM.jpg`,
    `https://i.imgur.com/C1Nnk1v.jpg`,
    `https://i.imgur.com/fivLVAR.jpg`,
    `https://i.imgur.com/sl4xXzD.jpg`,
    `https://i.imgur.com/1zq8Ibh.jpg`,
    `https://i.imgur.com/YpNCzr8.jpg`,
    `https://i.imgur.com/dJzcrbW.jpg`,
    `https://i.imgur.com/yMlPf1x.jpg`,
    `https://i.imgur.com/1UDvRdl.jpg`
    
  ];
  let dog = image[Math.floor(Math.random() * image.length)];
  var dogs = { Link: `${dog}` };

  res.json(dogs);
});





app.get("/img/frog", (req, res) => {
  let image = [
    `https://i.imgur.com/wCQeIs0.jpg`,
    `https://i.imgur.com/ClLWTMX.jpg`,
    `https://i.imgur.com/UaXdr1V.jpg`,
    `https://i.imgur.com/Q4V1mqD.jpg`,
    `https://i.imgur.com/OvT1f01.jpg`,
    `https://i.imgur.com/n0Xom5e.jpg`,
    `https://i.imgur.com/9ipx9VU.jpg`,
    `https://i.imgur.com/rn0zSrs.jpg`,
    `https://i.imgur.com/XrgH3b9.jpg`,
    `https://i.imgur.com/3e4fRJ1.jpg`,
    `https://i.imgur.com/UMDc90l.jpg`,
    `https://i.imgur.com/kQApE3e.jpg`,
    `https://i.imgur.com/AhF4gIT.png`,
    `https://i.imgur.com/zk7NjIW.jpg`,
    `https://i.imgur.com/IiaFJD3.jpg`,
    `https://i.imgur.com/XPaFK9g.jpg`,
    `https://i.imgur.com/ffygyXV.jpg`,
    `https://i.imgur.com/87b3cUe.jpg`,
    `https://i.imgur.com/BKHu0vZ.jpg`,
    `https://i.imgur.com/FQSfEoR.jpg`,
    `https://i.imgur.com/pQ6C5eD.jpg`,
    `https://i.imgur.com/fHzKzu4.jpg`,
    `https://i.imgur.com/n4Lr6Xe.jpg`,
    `https://i.imgur.com/os7Mw3L.jpg`,
    `https://i.imgur.com/k4FcRR9.jpg`,
    `https://i.imgur.com/5T54CdJ.jpg`,
    `https://i.imgur.com/W8fIznn.jpg`
    
    
  ];
  let dog = image[Math.floor(Math.random() * image.length)];
  var dogs = { Link: `${dog}` };

  res.json(dogs);
});




app.get("/img/dog", (req, res) => {
  let image = [
    `https://i.imgur.com/H37kxPH.jpg`,
    `https://i.imgur.com/zsyh301.png`,
    `https://i.imgur.com/H981AN7.jpg`,
    `https://i.imgur.com/tAui2H7.jpg`,
    `https://i.imgur.com/nwhnRsZ.jpg`,
    `https://i.imgur.com/gtWsPu9.jpg`,
    `https://i.imgur.com/A8eQsll.jpg`,
    `https://i.imgur.com/8jqYvFL.jpg`,
    `https://i.imgur.com/xtoLyW2.jpg`,
    `https://i.imgur.com/74HtSJK.jpg`,
    `https://i.imgur.com/xi5V59S.jpg`,
    `https://i.imgur.com/yznJhMU.jpg`,
    `https://i.imgur.com/nfUv5nx.jpg`,
    `https://i.imgur.com/o6bfcka.jpg`,
    `https://i.imgur.com/8Fv5wuZ.jpg`,
    `https://i.imgur.com/zoIkaCY.jpg`,
    `https://i.imgur.com/fSgnUKW.jpg`,
    `https://i.imgur.com/s8duR8f.jpg`,
    `https://i.imgur.com/SSADow0.jpg`,
    `https://i.imgur.com/F2NgFBg.jpg`,
    `https://i.imgur.com/kfglJXS.jpg`,
    `https://i.imgur.com/CHOQc6u.jpg`,
    `https://i.imgur.com/9SrjmAj.jpg`,
    `https://i.imgur.com/2WpQwRG.jpg`,
    `https://i.imgur.com/n72bKGj.jpg`,
    `https://i.imgur.com/e2yRJIg.jpg`,
    `https://i.imgur.com/GiViTbA.jpg`,
    `https://i.imgur.com/3cL9JSA.jpg`,
    `https://i.imgur.com/aKndIcZ.jpg`,
    `https://i.imgur.com/52sUKRr.jpg`
    
  ];
  let dog = image[Math.floor(Math.random() * image.length)];
  var dogs = { Link: `${dog}` };

  res.json(dogs);
});



app.get("/facts/giraffe", (req, res) => {
   let fact = [
    `Giraffes are found in the dry savannas of Africa, where they roam among the open plains and woodlands`,
    `Well known for their long necks, these gentle giants are the world’s tallest living land animals. An adult male can grow to around 5.5m – that’s taller than three adult humans!`,
    `A giraffe’s height is helpful for keeping a look out for predators, such as lions and hyenas. Their excellent eyesight allows them to spot hungry beasts from far away, too`,
    `Herbivores, giraffes only eat plants. Their favourite grub is the acacia tree, and they use their long necks to reach the leaves and buds in the treetops. Their long tongues (which grow to a whopping 53cm!) also help them pull down leaves growing way up high.`,
    `And boy do these guys have an appetite! They spend most of their time eating, and can guzzle up to 45kg of leaves and twigs a day!`,
    `Whilst they may eat a lot, giraffes don’t drink much water. This is because they get most of their water from their leafy meals, and only need to drink once every few days.`,
    `Giraffes are very social animals and roam around in groups. These groups, called towers, typically have around 15 members led by an adult male. The other members are females and young males.`,
    `To see who is stronger, males (called bulls) fight by butting their long necks and heads. This is known as “necking“. These fights aren’t usually dangerous, and end when one bull admits defeat and walks away.`,
    `Female giraffes give birth standing up. The result? Newborns are welcomed to the world with a 1.5m drop to the ground! Ouch! But these infants are quick to get on their feet – within 30 minutes they are standing, and only hours later they”re able to run with their mothers.`,
    ` In the wild these beautiful creatures live for around 25 years. In captivity they live longer, and have been known to reach 40 years old.`,
    `They can run as fast as 35 miles an hour over short distances, or cruise at 10 mph over longer distances.`,
    `A giraffe's neck is too short to reach the ground. As a result, it has to awkwardly spread its front legs or kneel to reach the ground for a drink of water.`,
    `Giraffes only need to drink once every few days. Most of their water comes from all the plants they eat.`,
    `Giraffes spend most of their lives standing up; they even sleep and give birth standing up.`,
    `The giraffe calf can stand up and walk after about an hour and within a week, it starts to sample vegetation.`,
    `Despite the females’ attempts to stand over their calves during attacks by lions, spotted hyenas, leopards and African wild dogs (4), many calves are killed in their first few months.`,
    `A giraffe’s spots are much like human fingerprints. No two individual giraffes have exactly the same pattern.`,
    `Both male and female giraffes have two distinct, hair-covered horns called ossicones.`,
    `Male giraffes use their horns to sometimes fight with other males.`,
    `Giraffes only need 5 to 30 minutes of sleep in a 24-hour period! They often achieve that in quick naps that may last only a minute or two at a time.`,
    `Whilst it was thought that giraffes did not make any sounds, this is now known to be untrue, as giraffes bellow, snort, hiss and make flute-like sounds, as well as low pitch noises beyond the range of human hearing.`
  ];
  
  let giraffe = fact[Math.floor(Math.random() * fact.length)];
  var facts = { Link: `${giraffe}` };

  res.json(facts);
});



app.get("/facts/lizards", (req, res) => {
  let facts = [
    `lizards have walked on the earth for 200 million years`,
    `ome lizards can detach their tails if caught by predators.`,
    `The upper and lower eyelids of chameleons are joined, leaving just a small hole for them to see through. They can move their eyes independently however, allowing them to look in two different directions at the same time.`,
    `Chameleons have long tongues which they rapidly extend from their mouth, too fast for human eyes to see properly.`,
    `Geckos have no eyelids.`,
    `Geckos have unique toes which allow them to be good climbers.`,
    `Green iguanas are popular pets.`,
    `The Komodo dragon is the largest type of lizard, growing up to 3 metres (10 feet) in length.`,
    `The scientific name for a lizard is Lacertilla`,
    `Some lizards like Dracos can glide. They can glide from one tree top to another. A thin membrane joins the fore and the hind limbs of the lizard to make gliding possible. It acts like a parachute and these lizards are rightly called as the flying dragons.`,
    `Greeks and Egyptians considered lizards as representative of knowledge, wisdom and fortune and therefore in hieroglyphics, their picture denoted the symbol for the word plentiful.`,
    `In central America, lizards like Iguanas are eaten. They are considered as the fish of the desert.`,
    `Few lizards have wonderful eyesight and they even have acute color vision that is, they can differentiate between colors.`,
    `A species of Australian lizard is abandoning egg-laying in favor of live birth.`,
    `A complete fossil of 23 million-year-old lizard in Amber Resin was found by Mexican Researchers.`,
    `t only took 70-years for the lizards in parts of the USA to adapt to fire ants, they now have longer legs and new behaviors that aid them in escaping from the danger. `,
    `Some lizards, in which the tail is a major storage organ for accumulating reserves, will return to a dropped tail after the threat has passed, and will eat it to recover part of the sacrificed supplies.`,
    `The Thorny Devil Lizard is a reptile that channels water that comes into contact with his skin through Hygroscopic grooves to its mouth (It can drink water by standing in it).`,
    `There’s a lizard whose mating behavior follows a Rock-Paper-Scissors evolutionary strategy. Males have 1 of 3 throat colors where orange beats blue, blue beats yellow, and yellow beats orange. For 4-5 years, one strategy dominates, after which the strategy that exploits its weakness takes over.`,
    `Lace monitors dig into a termite mound to lay their eggs, the termites then reseal the mound keeping the eggs at a constant temperature. The lizard returns 9 months later to dig the eggs out so they can hatch.`,
    `Most lizards can’t breathe and run at the same time, due to sideways flexing of the body expanding one lung and compresses the other, shunting stale air from the lung to lung instead of expelling it completely to make room for fresh air`,
    `Texas spiny lizards have pushup contests for territory.`,
    ` Some animals like lizards have a third eye, a very small grey oval between their two regular eyes, which functions as a photoreceptor connected directly to the pineal gland to tell their brain when it is day or night while the regular eyes are closed`,
    `Australian sleepy lizards are monogamous for life and grieve if they lose their partner.`
  ];
 
  
  let lizardfacts = facts[Math.floor(Math.random() * facts.length)];

  var lizard = {  fact: `${lizardfacts}` };

  res.json(lizard);
});



app.get("/facts/shark", (req, res) => {
  let image = [
    `only 25 species (out of 368 species) attack humans.`,
    `only 100 people each year are attacked by sharks `,
    `sharks have been around for about 400 million years.`,
    `harks have the most powerful jaws on the planet.`,
    `A shark may grow and use over 20,000 teeth in its lifetime!`,
    `Sharks never run out of teeth.  If one is lost, another spins forward from the rows and rows of backup teeth.`,
    `Oddly enough, the most harmless sharks tend to be the largest!`,
    `You’re more likely to be hit by an asteroid than die from a shark attack.`,
    ` Sharks do not have a single bone in their bodies! Their skeleton is made up of cartilage, which is the exact same thing your ears are made of.`,
    `Sharks predate the dinosaurs by 200 million years.`,
    `The extinct C. megalodon is thought to have been up to 67 feet long, making it the largest known species of shark.`,
    `Great white sharks off the coast of Seal Island, Africa are known to jump 10 feet to catch seals!`,
    `During the Middle Ages, fossilized Megalodon teeth were thought to be the petrified tongues of dragons!`,
    ` You’re probably bigger than most sharks! 50% are less than 3 feet long, and 30% are between three to six feet long`,
    `Great white sharks eat 11 tons of food each year. That’s a whopping 22,000 pounds of food!`,
    `Baby sharks are called “pups”.`,
    `Unlike many animals, shark pups leave their mother and swim off to fend for themselves almost immediately after birth.`,
    ` Unlike most animals, both the shark’s top and and bottom jaw can move separately.`,
    `Surprisingly, sharks lose their teeth pretty easily. Thankfully, they can also regrow them! In fact, some sharks will have over 50,000 teeth during their lifetime`,
    `While both the whale shark and the basking shark are the two largest sharks in the ocean, both feed off of plankton and fish eggs`,
    `Studies have shown that sharks are quite smart. In fact, they’re capable of mapping trips spanning thousands of miles!`,
   
  ];
  let shark = image[Math.floor(Math.random() * image.length)];
  var sharks = { Link: `${shark}` };

  res.json(sharks);
});






app.get("/img/shark", (req, res) => {
  let image = [
    `https://i.imgur.com/853z55P.jpg`,
    `https://i.imgur.com/Y7g1f1P.jpg`,
    `https://i.imgur.com/aQyFbRi.jpg`,
    `https://i.imgur.com/WmrSv9E.jpg`,
    `https://i.imgur.com/Krpaylg.jpg`,
    `https://i.imgur.com/t0q9aML.jpg`,
    `https://i.imgur.com/IkMK2Tn.jpg`,
    `https://i.imgur.com/xxaYgvf.jpg`,
    `https://i.imgur.com/v9RSEJ4.jpg`,
    `https://i.imgur.com/xDCNTN6.png`,
    `https://i.imgur.com/jiMDsOA.jpg`,
    `https://i.imgur.com/VRegbOV.jpg`,
    `https://i.imgur.com/0IaWJsM.jpg`,
    `https://i.imgur.com/MbOD9Ga.jpg`,
    `https://i.imgur.com/rg4QTpa.jpg`
    
  ];
  let shark = image[Math.floor(Math.random() * image.length)];
  var sharks = { Link: `${shark}` };

  res.json(sharks);
});



app.get("/img/animal", (req, res) => {
  let el = [
     `https://i.imgur.com/fOLBcGU.jpg`,
    `https://i.imgur.com/FSGJyGS.jpg`,
    `https://i.imgur.com/Jr0My6A.jpg`,
    `https://i.imgur.com/ySY9p9o.jpg`,
    `https://i.imgur.com/3hLWXuF.jpg`,
    `https://i.imgur.com/u3hhFG3.jpg`,
    `https://i.imgur.com/e3yZtx9.jpg`,
    `https://i.imgur.com/67JHheP.jpg`,
    `https://i.imgur.com/zZt6VBd.jpg`,
    `https://i.imgur.com/TRCXPmI.jpg`,
    `https://i.imgur.com/hG99juF.png`,
    `https://i.imgur.com/Tar94KC.jpg`,
    `https://i.imgur.com/TK5Vzzg.png`,
    `https://i.imgur.com/Dxqw7BU.jpg`,
    `https://i.imgur.com/P5M6dcH.jpg`,
    `https://i.imgur.com/GN4rJ5y.jpg`,
    `https://i.imgur.com/4RcDKnA.jpg`,
    `https://i.imgur.com/3kykjBR.jpg`,
    `https://i.imgur.com/gtSeUvr.jpg`,
    `https://i.imgur.com/vKzIlMV.jpg`,
    `https://i.imgur.com/V6MbnTv.jpg`,
    `https://i.imgur.com/3Ptw6HP.jpg`,
    `https://i.imgur.com/MNBB1LG.png`,
    `https://i.imgur.com/yh7WhD8.png`
  ];
  let elephant = el[Math.floor(Math.random() * el.length)];
  var images = { Link: `${elephant}` };

  res.json(images);
});



app.get("/facts/dingo", (req, res) => {
  let facts = [
    `Dingoes cannot bark - but they can howl.`,
    `Dingoes have unique wrists in the canine world, capable of rotatation. This enables dingoes to use their paws like hands and turn door knobs. Their ability to go where other dogs can't means dingoes can cause more problems for humans than other wild members of the dog family can.`,
    `A dingo can turn its head through almost 180 degrees in each direction.`,
    `Dingoes have permanently erect ears.`,
    `Dingoes can be found living in Australia and Southeast Asia, mainly Thailand.`,
    `Australian dingoes are larger than Asian dingoes.`,
    `The plural of dingo is dingoes, not dingos.`,
    `Male dingoes are larger than females. Males weigh 26 to 43 pounds (12 to 20 kg) and females weigh 21 to 35 pounds.`,
    `Most Australian dingoes are ginger-coloured or sandy coloured with white chests. There are also dark coloured dingoes`,
    `Wild dingoes can live for up to ten years but usually live for more like five or six years.`,
    `Dingoes cared for by people can live up to 15 years or more.`,
    `Domestication of dingoes has been difficult. Dingoes are intelligent animals. They are more independent and harder to train than other dogs.`,
    `Dingoes have larger canine teeth than domestic dogs.`,
    `Wild Australian dingoes kill and eat prey ranging in size from small lizards, birds and rodents up to sheep and kangaroos. They will also scavenge carrion.`,
    `The days of the pure dingo may be numbered. Dingoes are increasingly mating with feral domestic dogs. Some of the genetically purest dingoes live on Fraser Island in Queensland.`,
    `Evidence has emerged more recently of pure dingoes living close to Sydney.`,
    `Research at Sydney's University of New South Wales indicates dingoes may be the world's oldest breed of dog.`,
    `Dingoes breed once a year.`,
    `Australian dingoes mate in autumn.`,
    `Dingoes' gestation period is two months.`,
    `Dingoes produce one litter of pups each year.`,
    `Dingo litter sizes range between one and ten pups. The average number of pups born is five or six`,
    `he dominant female dingo kills any pups born to other females in a dingo pack.`,
    `Pack members help care for the pups of the dominant dingo pair.`,
    `At around 8 weeks old, pups are weaned on to solid food, often consisting of regurgitated meat.`,
  ];
  let dingo = facts[Math.floor(Math.random() * facts.length)];
  var fact = { Link: `${dingo}` };

  res.json(fact);
});



app.get("/img/pig", (req, res) => {
  let el = [
    `https://i.imgur.com/dVCuoVJ.jpg`,
    `https://i.imgur.com/lRXYiYI.jpg`,
    `https://i.imgur.com/Mm6w0Ex.jpg`,
    `https://i.imgur.com/XUbWIS4.jpg`,
    `https://i.imgur.com/XUbWIS4.jpg`,
    `https://i.imgur.com/ovyEDZp.jpg`,
    `https://i.imgur.com/VRmjNcb.jpg`,
    `https://i.imgur.com/JfP5PkJ.jpg`,
    `https://i.imgur.com/soR2YGi.jpg`,
    `https://i.imgur.com/YLxomWz.jpg`,
    `https://i.imgur.com/qeIsNqQ.jpg`
  ];
  let elephant = el[Math.floor(Math.random() * el.length)];
  var images = { Link: `${elephant}` };

  res.json(images);
});







app.get("/facts/dog", (req, res) => {
  let facts = [
    `Puppies love games such as hide and seek! Hide, then call your pup's name so she can try to find you.`,
    `Dogs can learn more than 1000 words.`,
    `Big happy "helicopter" tail wagging is one sign of a really nice dog`,
    `Upright, stiff, rapid tail movement is not wagging or "friendly" but indicates a dog who's rather excited and focused.`,
    `Puppies grow to half their body weight in the first four to five months!`,
    `Puppies then take a year or more to gain the other half of their body weight.`,
    `Puppies can sleep 18 to 20 hours a day during that rapid body growth phase.`,
    `Dogs sometimes appear to smile -- much like humans -- with open mouth grinning. This may indicate a relaxed, submissive state`,
    `Tired puppies get cranky just like little kids. If you have a fussy puppy, try nap time.`,
    `The fastest breed, the Greyhound, can run up to 44 miles per hour.`,
    `Perky-eared dogs hear sounds better than floppy-eared dogs.`,
    `There are about 400 million dogs in the world.`,
    `The Labrador Retriever is the most popular breed, according to the American Kennel Club.`,
    `There are hundreds of breeds of dogs.`,
    `The average dog lives 10 to 14 years.`,
    `In general, smaller breeds live longer than larger breeds.`,
    `The world's oldest breed, the Saluki, originated in Egypt around 329 B.C.`,
    `According to a study shared by Cornell University, dogs were domesticated between 9,000 and 34,000 years ago.`,
    `Thomas Jefferson helped enact a dog tax in Virginia, because he was annoyed that dogs were killing his sheep.`,
    `Stroking dogs and gazing into their eyes releases the "feel good" hormone oxytocin for both people and dogs.`,
    `Dogs are omnivores -- they eat meat, grains and vegetables.`,
    `The heaviest breed, the Mastiff, weighs about 200 pounds.`,
    `More than half of all U.S. presidents have owned dogs.`,
    `President Calvin Coolidge owned at least a dozen dogs.`,
    `Just like human fingerprints, no two dogs' nose prints are alike.`,
    `At about 6 inches, the Chihuahua is the shortest breed.`,
    `Irish Wolfhounds, the tallest breed, are 30 to 35 inches tall.`,
    `A Russian dog named Laika was the first animal in space, traveling around Earth in 1957.`,
    `Dogs who bark the most: Miniature Schnauzers, Cairn Terriers, Yorkshire Terriers, Fox Terriers and West Highland White Terriers.`,
    `Puppies have 28 teeth and adult dogs have 42.`,
    `The best age to bring a puppy home is 8 to 12 weeks`,
    `Dogs can see best at dawn and dusk.`,
    `Dogs aren't colorblind but their eyes don't have receptors for red. They see in shades of black and white and also in shades of blue and yellow.`,
    `New puppies have heat sensors in their noses to help find their moms while their eyes and ears are closed`,
    `A dog's sense of smell is reduced by up to 40 percent when he's overheated and panting.`,
    `Highly trainable dog breeds like Golden Retrievers, Labrador Retrievers, German Shepherds and Collies are more kid-friendly than some other breeds`,
    `Bichons, Portuguese Water Dogs, Kerry Blue Terriers, Maltese and Poodles are all good choices if you have allergies since they shed less than other breeds.`,
    `More than one in three U.S. families owns a dog.`
    
    
  ];
  let dog = facts[Math.floor(Math.random() * facts.length)];
  var dogs = { Link: `${dog}` };

  res.json(dogs);
});

app.get("/facts/cat", (req, res) => {
  let facts = [
    `Unlike dogs, cats do not have a sweet tooth. Scientists believe this is due to a mutation in a key taste receptor.`,
    `When a cat chases its prey, it keeps its head level. Dogs and humans bob their heads up and down`,
    `The technical term for a cat’s hairball is a “bezoar.`,
    `A group of cats is called a “clowder.`,
    `A cat can’t climb head first down a tree because every claw on a cat’s paw points the same way. To get down from a tree, a cat must back down`,
    `Cats make about 100 different sounds. Dogs make only about 10`,
    `There are more than 500 million domestic cats in the world, with approximately 40 recognized breeds.`,
    `Approximately 24 cat skins can make a coat.`,
    `While it is commonly thought that the ancient Egyptians were the first to domesticate cats, the oldest known pet cat was recently found in a 9,500-year-old grave on the Mediterranean island of Cyprus. This grave predates early Egyptian art depicting cats by 4,000 years or more.`,
    `During the time of the Spanish Inquisition, Pope Innocent VIII condemned cats as evil and thousands of cats were burned. Unfortunately, the widespread killing of cats led to an explosion of the rat population, which exacerbated the effects of the Black Death.`,
    `The first cat in space was a French cat named Felicette (a.k.a. “Astrocat”) In 1963, France blasted the cat into outer space. Electrodes implanted in her brains sent neurological signals back to Earth. She survived the trip`,
    `The group of words associated with cat (catt, cath, chat, katze) stem from the Latin catus, meaning domestic cat, as opposed to feles, or wild cat.`,
    `The term “puss” is the root of the principal word for “cat” in the Romanian term pisica and the root of secondary words in Lithuanian (puz) and Low German puus. Some scholars suggest that “puss” could be imitative of the hissing sound used to get a cat’s attention. As a slang word for the female pudenda, it could be associated with the connotation of a cat being soft, warm, and fuzzy.`,
    `Approximately 40,000 people are bitten by cats in the U.S. annually`,
    `Cats are North America’s most popular pets: there are 73 million cats compared to 63 million dogs. Over 30% of households in North America own a cat.`,
    `According to Hebrew legend, Noah prayed to God for help protecting all the food he stored on the ark from being eaten by rats. In reply, God made the lion sneeze, and out popped a cat`,
    `A cat’s hearing is better than a dog’s. And a cat can hear high-frequency sounds up to two octaves higher than a human.`,
    `A cat can travel at a top speed of approximately 31 mph (49 km) over a short distance.`,
    `A cat rubs against people not only to be affectionate but also to mark out its territory with scent glands around its face. The tail area and paws also carry the cat’s scent`,
    `Researchers are unsure exactly how a cat purrs. Most veterinarians believe that a cat purrs by vibrating vocal folds deep in the throat. To do this, a muscle in the larynx opens and closes the air passage about 25 times per second.`,
    `When a family cat died in ancient Egypt, family members would mourn by shaving off their eyebrows. They also held elaborate funerals during which they drank wine and beat their breasts. The cat was embalmed with a sculpted wooden mask and the tiny mummy was placed in the family tomb or in a pet cemetery with tiny mummies of mice.`,
    `In 1888, more than 300,000 mummified cats were found an Egyptian cemetery. They were stripped of their wrappings and carted off to be used by farmers in England and the U.S. for fertilizer`,
    `Most cats give birth to a litter of between one and nine kittens. The largest known litter ever produced was 19 kittens, of which 15 survived.`,
    `Smuggling a cat out of ancient Egypt was punishable by death. Phoenician traders eventually succeeded in smuggling felines, which they sold to rich people in Athens and other important cities`,
    `The earliest ancestor of the modern cat lived about 30 million years ago. Scientists called it the Proailurus, which means “first cat” in Greek. The group of animals that pet cats belong to emerged around 12 million years ago`,
    `The biggest wildcat today is the Siberian Tiger. It can be more than 12 feet (3.6 m) long (about the size of a small car) and weigh up to 700 pounds (317 kg)`,
    `A cat’s brain is biologically more similar to a human brain than it is to a dog’s. Both humans and cats have identical regions in their brains that are responsible for emotions.`,
    `The most popular pedigreed cat is the Persian cat, followed by the Main Coon cat and the Siamese cat.Many Egyptians worshipped the goddess Bast, who had a woman’s body and a cat’s head`,
    `A cat can jump up to five times its own height in a single bound`
    
    
  ];
  let cat = facts[Math.floor(Math.random() * facts.length)];
  var cats = { Link: `${cat}` };

  res.json(cats);
});







app.get("/facts/cat", (req, res) => {
  let facts = [
    `The oldest evidence for soup is from 6,000 B.C. and calls for hippopotamus and sparrow meat.`,
    `Pringles once had a lawsuit trying to prove that they weren't really potato chips.`,
    `Pound cake got its name from its original recipe, which called for a pound each of butter, eggs, sugar, and flour`,
    `Ripe cranberries will bounce like rubber balls`,
    `An average ear of corn has an even number of rows, usually 16.`,
    `Consuming dairy may cause acne.`,
    `Most wasabi consumed is not real wasabi, but colored horseradish`,
    `Central Appalachia's tooth decay problem is referred to as Mountain Dew mouth, due to the beverage's popularity in the region.`,
    `Apples belong to the rose family, as do pears and plums`,
    `Oklahoma's state vegetable is the watermelon.`,
    `One of the most popular pizza toppings in Brazil is green peas.`,
    `About 70% of olive oil being sold is not actually pure olive oil.`,
    ` Real aged balsamic vinegar actually costs anywhere from $75 to $400 or more.`,
    `Store bought 100% "real" orange juice is 100% artificially flavored.`,
    `The most expensive pizza in the world costs $12,000 and takes 72 hours to make.`,
    `The winner of the 2013 Nathan's Hot Dog Eating contest consumed 69 hot dogs in 10 minutes.`,
    `The Dunkin' Donuts in South Korea offer doughnut flavors such as Kimchi Croquette and Glazed Garlic.`,
    `Chocolate was once used as currency.`,
    ` There is an amusement park in Tokyo that offers Raw Horse Flesh-flavored ice cream.`,
    ` The tea bag was created by accident, as tea bags were originally sent as samples.`,
    `A Cinnabon® Classic has less sugar than a 20-oz. bottle of Pepsi.`
    
  ];
  let food = facts[Math.floor(Math.random() * facts.length)];
  var foods = { Link: `${food}` };

  res.json(foods);
});









app.get("/quotes", (req, res) => {
  let quotes = [
    `It's alright to feel sad. When you're sad, you should experience that sorrow fully. It's not too late to move on after that.`,
    `People who don't work hard don't have the right to be envious of the people with talent. People fail because they don't understand the hard work necessary to be successful.`,
    `Don't cry because it's over, smile because it happened.`,
    `I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best`,
    `Be yourself; everyone else is already taken.`,
    `So many books, so little time.`,
    `You only live once, but if you do it right, once is enough.`,
    `In three words I can sum up everything I've learned about life: it goes on.`,
    `If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.`,
    `No one can make you feel inferior without your consentIf you tell the truth, you don't have to remember anything.`,
    `If you tell the truth, you don't have to remember anything.`,
    `I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.`,
    `A friend is someone who knows all about you and still loves you.`,
    `Always forgive your enemies; nothing annoys them so much.`,
    `To live is the rarest thing in the world. Most people exist, that is all.`,
    `Live as if you were to die tomorrow. Learn as if you were to live forever.`,
    `I have no special talent. I am only passionately curious.`
    
   
  ];
  let quote = quotes[Math.floor(Math.random() * quotes.length)];
  var thequote = { Link: `${quote}` };

  res.json(thequote);
});


app.get("/img/fish", (req, res) => {
  let image = [
    `https://i.imgur.com/iLe1YnS.jpg`,
    `https://i.imgur.com/dsuVWFg.jpg`,
    `https://i.imgur.com/GRsW7XS.jpg`,
    `https://i.imgur.com/FIeJwyq.jpg`,
    `https://i.imgur.com/spfooSx.jpg`,
    `https://i.imgur.com/si9kqyy.png`,
    `https://i.imgur.com/wkph6UA.jpg`,
    `https://i.imgur.com/aief1S5.jpg`,
    `https://i.imgur.com/yJXGwdI.jpg`,
    `https://i.imgur.com/149FScJ.jpg`,
    `https://i.imgur.com/dWTVcn8.jpg`,
    `https://i.imgur.com/FqEJbjx.jpg`,
    `https://i.imgur.com/kzh7H3w.jpg`,
    `https://i.imgur.com/3t4S5QP.jpg`,
    `https://i.imgur.com/1BR9vV9.jpg`,
    `https://i.imgur.com/V0X1eSx.jpg`,
    `https://i.imgur.com/RWyvmKy.jpg`,
    `https://i.imgur.com/9NcI5O6.jpg`,
    `https://i.imgur.com/Uh71QVE.jpg`,
    `https://i.imgur.com/9iTsrZL.jpg`
  ];
  let fish = image[Math.floor(Math.random() * image.length)];
  var fishs = { Link: `${fish}` };

  res.json(fishs);
});

app.get("/img/cars", (req, res) => {
  let el = [
    `https://i.imgur.com/Xmcnvsr.jpg`,
    `https://i.imgur.com/e8SarL9.jpg`,
    `https://i.imgur.com/wWKjV3f.jpg`,
    `https://i.imgur.com/fYSDjDL.jpg`,
    `https://i.imgur.com/dhNu2mp.jpg`,
    `https://i.imgur.com/3RfrauG.jpg`,
    `https://i.imgur.com/gR7rKNr.jpg`,
    `https://i.imgur.com/hNXIyEO.jpg`,
    `https://i.imgur.com/r46o9R3.jpg`,
    `https://i.imgur.com/bZeLirf.jpg`,
    `https://i.imgur.com/U3vkRyo.jpg`,
    `https://i.imgur.com/bTO6LBK.png`,
    `https://i.imgur.com/2fEPzvk.jpg`,
    `https://i.imgur.com/bZeLirf.jpg`,
    `https://i.imgur.com/ZDrw7zY.jpg`,
    `https://i.imgur.com/vGLEnem.jpg`,
    `https://i.imgur.com/oCLPn1C.jpg`,
    `https://i.imgur.com/Cb2Zb9j.jpg`,
    `https://i.imgur.com/xT9eOUw.jpg`,
    `https://i.imgur.com/LhdvnIA.jpg`,
    `https://i.imgur.com/7RqjYpB.jpg`,
    `https://i.imgur.com/kPxkZIF.jpg`,
    `https://i.imgur.com/p1Ta8Ih.jpg`,
    `https://i.imgur.com/ODU7SPy.jpg`,
    `https://i.imgur.com/qmvCTt7.jpg`,
    `https://i.imgur.com/8DHaHaT.jpg`,
    `https://i.imgur.com/m31Vkfg.jpg`,
    `https://i.imgur.com/QMWXcsw.jpg`,
    `https://i.imgur.com/U0DMnKy.jpg`,
    `https://i.imgur.com/H0YJAWc.jpg`,
    `https://i.imgur.com/nKQ5Zj4.jpg`,
    `https://i.imgur.com/ohWatDI.jpg`
    
  ];
  let elephant = el[Math.floor(Math.random() * el.length)];
  var images = { Link: `${elephant}` };

  res.json(images);
});


app.get("/img/rocket", (req, res) => {
  let image = [
    `https://i.imgur.com/iSzuvl3.jpg`,
    `https://i.imgur.com/EKCdicf.jpg`,
    `https://i.imgur.com/aMAc8vc.jpg`,
    `https://i.imgur.com/uzSAXYZ.jpg`,
    `https://i.imgur.com/ULQk7Oz.jpg`,
    `https://i.imgur.com/JQq4PXv.jpg`,
    `https://i.imgur.com/YqT5H99.jpg`,
    `https://i.imgur.com/4njQP40.jpg`,
    `https://i.imgur.com/MPqJuu6.jpg`,
    `https://i.imgur.com/oWoh86H.jpg`,
    `https://i.imgur.com/sXXEVKC.jpg`,
    `https://i.imgur.com/lnRTeue.jpg`,
    `https://i.imgur.com/AsqH2YS.jpg`,
    `https://i.imgur.com/XyjReIH.jpg`,
    `https://i.imgur.com/xr9pImh.jpg`,
    `https://i.imgur.com/jSJ9VT5.jpg`,
    `https://i.imgur.com/03uRUcS.jpg`
    ];
  let rocket = image[Math.floor(Math.random() * image.length)];
  var rockets = { Link: `${rocket}` };

  res.json(rockets);
});


app.get("/img/lion", (req, res) => {
  let el = [
    `https://i.imgur.com/W30cxvg.jpg`,
    `https://i.imgur.com/DSav7hg.jpg`,
    `https://i.imgur.com/rKca27k.jpg`,
    `https://i.imgur.com/Ly9wdCY.jpg`,
    `https://i.imgur.com/GE1KipS.jpg`,
    `https://i.imgur.com/vb54hHl.jpg`,
    `https://i.imgur.com/LYFUhPU.jpg`,
    `https://i.imgur.com/IMqoDL3.jpg`,
    `https://i.imgur.com/9DjsEXr.jpg`,
    `https://i.imgur.com/HEiz5pT.jpg`,
    `https://i.imgur.com/5L22dAv.jpg`,
    `https://i.imgur.com/MlokUsN.jpg`
  ];
  let elephant = el[Math.floor(Math.random() * el.length)];
  var images = { Link: `${elephant}` };

  res.json(images);
});





app.listen(3000, () => {
  console.log("Server is up and is listening on 3000...");
});
