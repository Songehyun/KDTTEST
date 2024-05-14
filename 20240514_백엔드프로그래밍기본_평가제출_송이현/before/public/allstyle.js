const menuchildren1 = document.getElementById('menuchildren1');
const menuchildren2 = document.getElementById('menuchildren2');
const menuchildren3 = document.getElementById('menuchildren3');
const menuchildren4 = document.getElementById('menuchildren4');
const menuchildren5 = document.getElementById('menuchildren5');
const indexmain = document.getElementById('indexmain');
const mapmain = document.getElementById('mapmain');
const turnmain = document.getElementById('turnmain');
const battlemain = document.getElementById('battlemain');
const charactermain = document.getElementById('charactermain');
const url = document.location.href;


arraymenucolor = [
  "#d9d9d9",
  "#bdde86",
  "#86dea9",
  "#86a9de",
  "#ad86de"
];

menu_children_array = [
  menuchildren1,
  menuchildren2,
  menuchildren3,
  menuchildren4,
  menuchildren5
];

main_children_array = [
  indexmain,
  mapmain,
  turnmain,
  battlemain,
  charactermain
];

url_array = [
  "index",
  "map",
  "turn",
  "battle",
  "character"
];

for(i = 0; i < arraymenucolor.length; i++){
  menu_children_array[i].style.alignContent = "center";
  menu_children_array[i].style.height = "5vh";
  menu_children_array[i].style.width = "10vw";
  menu_children_array[i].style.cursor = "pointer";
  menu_children_array[i].style.backgroundColor = arraymenucolor[i];
};

for(k = 0; k < arraymenucolor.length; k++){
    if (url === `http://localhost:8080/${url_array[k]}.html`){
    main_children_array[k].style.display = "flex";
    main_children_array[k].style.height = "50vh";
    main_children_array[k].style.width = "70vw";
    main_children_array[k].style.backgroundColor = arraymenucolor[k];
  }
};

