const thoughts = [
  ["Maybe the stars are just old sunlight.","Somewhere between ordinary and extraordinary, there is a tiny moment worth noticing."],
  ["Go outside and become a background character.","The best stories sometimes begin when you stop trying to be the main character."],
  ["Your brain is a tiny weather system.","Thoughts pass through. You don't have to chase every cloud."],
  ["Make something useless.","Not everything needs to become a business, a skill, or a productivity hack."],
  ["Tonight deserves better than another scroll.","Look at the sky. Let your attention wander somewhere beautiful."]
];

const facts = [
  "Honey can remain edible for an extremely long time.",
  "Octopuses have three hearts.",
  "Bananas are berries, botanically speaking.",
  "A day on Venus is longer than its year.",
  "Wombat poop is cube-shaped.",
  "The Eiffel Tower gets slightly taller in hot weather."
];

const randomBtn = document.getElementById("randomBtn");
const randomTitle = document.getElementById("randomTitle");
const randomText = document.getElementById("randomText");
const fact = document.getElementById("fact");
const toast = document.getElementById("toast");

function pick(arr){ return arr[Math.floor(Math.random()*arr.length)]; }

randomBtn.addEventListener("click",()=>{
  const item=pick(thoughts);
  randomTitle.textContent=item[0];
  randomText.textContent=item[1];
  document.querySelector(".number").textContent=String(Math.floor(Math.random()*99)+1).padStart(2,"0");
  toast.textContent="The universe rolled the dice.";
  toast.classList.add("show");
  setTimeout(()=>toast.classList.remove("show"),1800);
});

document.getElementById("factBtn").addEventListener("click",()=>{
  fact.textContent=pick(facts);
});

document.getElementById("themeBtn").addEventListener("click",()=>{
  document.body.classList.toggle("warm");
});
