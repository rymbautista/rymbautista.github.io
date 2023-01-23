const rulesContainer = document.querySelector(".rules-container");

// let rules = {
//   e: "é",
//   E: "É",
// };

// function makeRule(start, dest) {
//   let rule = document.createElement("div");
//   rule.classList.add("rule");
//   rule.id = start;

//   rule.innerHTML = `
//   <span class="start">${start}</span>
//   <span class="join">is converted to</span>
//   <span class="dest">${dest}</span>`;

//   let removeButton = document.createElement("button");
//   removeButton.value = start;
//   removeButton.onclick = removeRule;
//   removeButton.innerText = "remove";

//   rule.appendChild(removeButton);

//   rulesContainer.appendChild(rule);
// }

// function restoreRules() {
//   chrome.storage.sync.get({ rules: rules }, function (items) {
//     rules = items.rules;
//     for (const entry of Object.entries(items.rules)) {
//       makeRule(entry[0], entry[1]);
//     }
//   });
// }

// function saveRule(start, dest) {
//   rules[start] = dest;
//   chrome.storage.sync.set({ rules: rules }, function () {
//     makeRule(start, dest);
//   });
// }

// function removeRule(e) {
//   const ruleToRemove = e.target.value;

//   delete rules[ruleToRemove];
//   chrome.storage.sync.set({ rules: rules }, function () {
//     document.getElementById(ruleToRemove).remove();
//   });
// }

// document.addEventListener("DOMContentLoaded", restoreRules);

// document.getElementById("add-rule").addEventListener("click", (e) => {
//   const start = document.querySelector("#rule-start");
//   const end = document.querySelector("#rule-dest");

//   saveRule(start.value, end.value);
//   start.value = "";
//   end.value = "";
// });



const inp = document.getElementById("renamesend"); 
  // inp.addEventListener("click", (e) => 
  // chrome.storage.sync.set({ name: e.target.value }));
  const title = document.getElementById("title");
  // title.value = e.target.value;

const inp_text = document.getElementById("rename"); 
  inp.addEventListener("click", (e) => changeFrog()); 
  // chrome.storage.sync.set({ name: inp_text.value }));
  // title.innerText = inp_text.value;

  function changeFrog() {
    chrome.storage.sync.set({ name: inp_text.value });
    title.innerText = inp_text.value;
  } 

function restoreFrog() {   
  // alert("Name changed!") 
  chrome.storage.sync.get("name", (items) => { 
    let frogname = ""; 
  if(items.name === undefined) {
    frogname = "Paul";
  }
  else {
    frogname = items.name;
  }
  title.innerText = frogname;   }) 
}

document.addEventListener("DOMContentLoaded", restoreFrog);


// const timeElapsed = Date.now();
// const today = new Date(timeElapsed);
// alert("fed at " + today); 

const sub = document.getElementById("feed"); 
  const time = document.getElementById("time");


// alert("fed at " + today); 

// const inp_text = document.getElementById("rename"); 
sub.addEventListener("click", (e) => changeTime()); 

function changeTime() {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  let hour = today.getHours();
  const min = today.getUTCMinutes();
  let ap = ""
  // const neat = today.toDateString() + " at " + today.getUTCHours() + ":" + min + " PTS"; // "Sun Jun 14 2020"
  if (hour > 12) {
    if (hour === 24){
      hour = "00";
      ap = "am";
      // alert("24");
    } else {
      hour = hour - 12;
      ap = "pm";
      // alert("minus");
    }
  } else {
    if (hour === 12){
      alert("12");
      // ap = "pm";
    } else {
      ap = "am";
      // alert("morning");
    }
  }
  let neat = "";
  if (min < 10) {  
    neat = "on " + today.toDateString() + " at " + hour + ":0" + min + " " + ap + " PTS"; // "Sun Jun 14 2020"
  }
  else {
    neat = "on " +today.toDateString() + " at " + hour + ":" + min + " " + ap + " PTS";
  }
  // alert(today.getUTCHours()); 
  // alert(hour); 
  chrome.storage.sync.set({ rn: neat});
  time.innerText = neat;
} 

function restoreTime() {   
  chrome.storage.sync.get("rn", (items) => { 
    let feeding = ""; 
  if(items.rn === undefined) {
    feeding = "so long ago that I forgot ;-;";
  }
  else {
    feeding = items.rn;
  }
  time.innerText = feeding;   }) 
}

document.addEventListener("DOMContentLoaded", restoreTime);