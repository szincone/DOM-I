const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// My Code
// === Nav Links
let navLinks = document.querySelectorAll("nav a");
let navItems = "nav-item-";

for (i = 1; i < navLinks.length; i++) {
  navLinks[i].innerHTML = siteContent["nav"][navItems+i];
}

// === Call to Action
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let ctaBtn = document.querySelector("button");
ctaBtn.innerHTML = siteContent.cta.button;

let ctaH1 = document.querySelector(".cta h1");
ctaH1.innerHTML = siteContent.cta.h1;

// === Main Content
// Features
let featuresH4 = document.querySelectorAll(".top-content h4")[0];
featuresH4.innerHTML = siteContent["main-content"]["features-h4"];

let featuresP = document.querySelectorAll(".top-content p")[0];
featuresP.innerHTML = siteContent["main-content"]["features-content"];

// About
let aboutH4 = document.querySelectorAll(".top-content h4")[1];
aboutH4.innerHTML = siteContent["main-content"]["about-h4"];

let aboutP = document.querySelectorAll(".top-content p")[1];
aboutP.innerHTML = siteContent["main-content"]["about-content"];

// Middle Image
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

// Services
let servicesH4 = document.querySelectorAll(".bottom-content h4")[0];
servicesH4.innerHTML = siteContent["main-content"]["services-h4"];

let servicesP = document.querySelectorAll(".bottom-content p")[0];
servicesP.innerHTML = siteContent["main-content"]["services-content"];

// Product
let productH4 = document.querySelectorAll(".bottom-content h4")[1];
productH4.innerHTML = siteContent["main-content"]["product-h4"];

let productP = document.querySelectorAll(".bottom-content p")[1];
productP.innerHTML = siteContent["main-content"]["product-content"];

// Vision
let visionH4 = document.querySelectorAll(".bottom-content h4")[2];
visionH4.innerHTML = siteContent["main-content"]["vision-h4"];

let visionP = document.querySelectorAll(".bottom-content p")[2];
visionP.innerHTML = siteContent["main-content"]["vision-content"];
// End Main Content

// === Contact
let contactH4 = document.querySelector(".contact h4");
contactH4.innerHTML = siteContent["contact"]["contact-h4"];

let contactPs = document.querySelectorAll(".contact p");
let contactItems = ["address", "phone", "email"];

for (i = 0; i < 3; i++) {
  contactPs[i].innerHTML = siteContent["contact"][contactItems[i]];
}
// End contact

// === Footer
let footerCopyRight = document.querySelector("footer p");
footerCopyRight.innerHTML = siteContent.footer.copyright;

// === Adding own content
// Color
navLinks = document.querySelectorAll("nav a");
navLinks.forEach( (link, i) => {
  link.style.color = "green";
})

// First element of Nav
let navBarATags = document.getElementsByTagName("nav")[0];
let navFirstAhref = document.createElement("a");
navFirstAhref.innerHTML = "endLink";
navBarATags.appendChild(navFirstAhref);

// Second element of Nav
let navBarATags1 = document.getElementsByTagName("nav")[0];
let navFirstAhref1 = document.createElement("a");
navFirstAhref1.innerHTML = "startLink";
navBarATags1.prepend(navFirstAhref1);

// === Stretch
let mouseOverAction = document.querySelectorAll("nav a");

mouseOverAction.forEach( (link, i) => {
  link.addEventListener("mouseenter", function( link ) {   
    // highlight the mouseenter target
    link.target.style.color = "red";

    // reset the color after a short delay
    setTimeout(function() {
      link.target.style.color = "";
    }, 500);
  }, false);
})

// this handler will be executed every time the cursor is moved over a different list item
// mouseOverAction.addEventListener("mouseover", function( event ) {   
//   // highlight the mouseover target
//   event.target.style.color = "orange";

//   // reset the color after a short delay
//   setTimeout(function() {
//     event.target.style.color = "";
//   }, 500);
// }, false);