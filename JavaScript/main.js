/*jshint esversion: 6 */ /*Version Register*/ 

gsap.registerPlugin(ScrollTrigger); /*Plugin Confirmation*/ 

/*News Text*/ 
function updateGalleryText(imageNumber) { /*Function Title*/ 
  const galleryText = document.getElementById("gallery-text"); /*Element to be Changed*/ 

  switch (imageNumber) {
    case 1: /*Picture to Text Identifier*/ 
      galleryText.innerHTML = `<h2>International VIP Event 2024</h2><p>Mid April of this year (2024) we had the pleasure of inviting our esteemed customers to share with them our stories, company updates, and a peek into the future at Jetson. Our guests flew in from all over the world to join us for the presentation of the newest generation of the Jetson ONE. It was a wonderful 25-degree Celsius weather, perfect flying conditions. We opened our doors at 9:30 am, welcoming everyone as they trickled in one by one. We held an exciting demonstration for of the Jetson ONE in a two manned flight formation beautifully coordinated by pilot Tomasz Patan and Oriol Palet Santandreu. Shortly after the demonstration we went upstairs to the future pilot school room and held presentations where Tomasz Patan, Stéphan D'haene, and Andrea Spresian talked of the past and current progress of the Jetson ONE. Wrapping up the presentations the guests were taken on a tour of the facilities. Followed by a splendid lunch of typical Tuscan cuisine. The rest of the day was about the guests getting to know the Jetson team and one another as we inhaled the warm spring air. Overall, this was a memorable day for everyone and we look forward to the next time we can gather together.</p>`;
      break; /*New Text Update*/ 
    case 2:
      galleryText.innerHTML = `<h2>Jetson Speaks to the Great Minds of the Future</h2><p>We are always flattered and excited to meet future pilots and engineers who are as excited about the eVTOL world as we are. This year we were invited to educate students and professors from three highly esteemed schools: Malignani Institute Tecnico, Istituto Nobile, and Universita Indirezzo. Held in the main hangar of the Malignani Technical Institute over 200 people gathered together to learn from our team about the Jetson ONE; how it came into existence, how it has developed over the years, and what the future of eVTOL might look like. Chief Pilot Andrea Spresian, and Test Engineer Aurora Forcella presented the Jetson mission, and educated the audience on the eVTOL industry. We were pleased to see so much interest at the end of the presentation from all of the questions from both students and professors alike. "It was great to see a vision of the future, seeing the next generation of pilots meets the next generation aircraft." - Andrea Spresian It was an experience we won't soon forget. Our number one asked question is, "How far can you fly?" Earlier this spring we performed a multitude of endurance tests with the Jetson ONE. Click to read about how the flight went.</p>`;
      break;
    case 3:
      galleryText.innerHTML = `<h2>Volo in Rosa - Diversifying the Skies</h2><p>Jetson graciously accepted the invitation to attend the Volo in Rosa event which took place at the Volandia aviation museum located at Malpensa Airport, Milan. This event was held to support, celebrate, and award young women aspiring to enter the world of aeronautics as pilots. We were only too pleased when asked to present the Jetson at such an event. It was a wonder to walk among some of the oldest model aircraft and to see the evolution of flight from one century to the next. After the presentation and granting of awards the familiar song of “The Good, The Bad, and The Ugly” sounded over the speaker system, lights danced across the veil as the music peaked to the crescendo. The veil pulled back revealing the Jetson ONE. The showmanship really brought the night to an excited end as people gathered around to take a closer look. The juxtaposition of the old and the new reminded us of why we are here. The Jetson ONE is apart of something bigger than what we can imagine it to be. If we think of the Wright bothers, the first of their kind to put wings on humans, could they really have imagined how life would be with commercial and private jets? We here at Jetson want to make another leap in aviation. And we are happy to be apart of those who believe in the same future. </p>`;
      break;
    case 4:
      galleryText.innerHTML = `<h2>Premiere for Jetson ONE in Saudi Arabia at FII Event</h2><p>Jetson was invited to present and showcase the Jetson ONE in Saudi Arabia for the first time at the prestigious Future Investment Institute event with over 5,000 leaders, innovators, and change makers meeting in Riyadh. Stephan D'haene, CEO of Jetson, and Mr. Diamandis met took the opportunity to discuss strategic efforts in financing, new flight permits in Italy, and the future of Jetson. The FII event was themed “The New Compass” - with an interactive program designed to help investors recalibrate the pathways for their companies and for the global economy, while developing new strategies for understanding the greatest challenges and opportunities of this new era. A key challenge is sustainable transportation: In 2050 the global population is projected to be approximately 9.7 billion people, 70% of whom will live in urban areas. Many cities will have more than 10 million inhabitants. One most pressing challenges of the world is mass sustainable transportation. eVTOLs are one solution that could change the meaning of sustainable living.  </p>`;
      break;
  }
}

/*Form for Pre Order*/ 
function displayOrderForm() {
  const preorderButton = document.getElementById("preorder-button");
  const orderForm = document.getElementById("order-form");

  if (preorderButton) {
    preorderButton.style.display = "none"; /*Before Click Not Visable*/ 
  }

  if (orderForm) {
    orderForm.style.display = "block"; /*After Click Visable*/ 
  }
}

/*Pre-Order Button*/ 
function hideElement() {
  const element = document.getElementById("preorder-button"); 
  if (element && element.style.backgroundColor === "rgb(204, 204, 204)") {
    element.style.display = "none"; /*If Cliicked Not Visable*/ 
  } else if (element) {
    element.style.display = "block"; /*Before Click Visable*/ 
  }
}

/*Info Box Gallery*/ 
gsap.to(".info-box1", {
  scrollTrigger: ".info-box1", /*Scrolling Animation Triggers Stagered appearance: INTERACTIVE SCROLLING APPLICATION*/ 
  x: 0, /*Origional Position*/ 
  scale: 1, /*Moves to Full Size*/ 
  duration: 1 /*Takes 1 Second*/ 
});

gsap.to(".info-box2", {
  scrollTrigger: ".info-box2",
  x: 0,
  scale: 1,
  duration: 1,
  delay: 0.5
});

gsap.to(".info-box3", {
  scrollTrigger: ".info-box3",
  x: 0,
  scale: 1,
  duration: 1,
  delay: 1
});

gsap.to(".info-box4", {
  scrollTrigger: ".info-box4",
  x: 0,
  scale: 1,
  duration: 1
});

gsap.to(".info-box5", {
  scrollTrigger: ".info-box5",
  x: 0,
  scale: 1,
  duration: 1,
  delay: 0.5
});

gsap.to(".info-box6", {
  scrollTrigger: ".info-box6",
  x: 0,
  scale: 1,
  duration: 1,
  delay: 1
});

gsap.to(".gallery-images", {
  scrollTrigger: ".gallery-images",
  x: 0,
  scale: 1,
  duration: 1
});

gsap.to(".gallery-text", {
  scrollTrigger: ".gallery-text",
  x: 0,
  scale: 1,
  duration: 1
});

gsap.to(".preorder-section", {
  scrollTrigger: ".preorder-section",
  x: 0,
  opacity: 1,
  duration: 3
});

/*SVG ANIMATION*/
gsap.to("svg", {
  rotation: 360, /*Full Rotation*/
  duration: 2, /*Length*/
  ease: "linear", /*No Ease in*/
  repeat: -1 /*Infinite*/
});

/*Split Main Header to Individual Components: JAVA SCRIPT GSAP ANIMATION PT1*/  
const myText = new SplitType('#header1');

gsap.to(".char", { /*Takes individual Componants to Animate: JAVA SCRIPT GSAP ANIMATION PT2*/ 
  y: 0, /*Origional Position*/ 
  stagger: 0.05, /*Move in Seperatly*/ 
  delay: 0.6, /*Delay Between Move in*/ 
  duration: 0.1 /*Per Character Animation Time*/ 
});

/*Submit Order Button Animation*/ 
const container = document.querySelector('.animation-form');
if (container) {
  const animation = container.querySelector('sl-animation');
  const button = container.querySelector('sl-button');

  if (button && animation) {
    button.addEventListener('click', () => { /*When Clicked*/ 
      animation.play = true; /*Assigned Animation from HTML File Plays*/ 
    });
  }
}

/*Closable Alert Graphic*/ 
const alert = document.querySelector('.alert-closable');
if (alert) {
  alert.addEventListener('sl-after-hide', () => {}); /*Hide Upon Close Being Clicked*/ 
}

/*Tech Spec Drawer*/ 
const drawer = document.querySelector('.drawer-overview');
if (drawer) {
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('sl-button[variant="primary"]');

  if (openButton && closeButton) {
    openButton.addEventListener('click', () => drawer.show()); /*Upon Click Drawer is Activated*/ 
    closeButton.addEventListener('click', () => drawer.hide()); /*Upon Close Button Drawer Closed*/ 
  }
}















