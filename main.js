/*DOM Stuff*/
let casterbonus = document.getElementById('spellinput1')
let saveinput = document.getElementById('saveinput2')/*
let p1acrobatics = document.getElementById('p1skill_acrobatics')
let p1acrobaticsbonus = document.getElementById('p1_acrobonus')
let p1animalhandling = document.getElementById('p1skill_animalhandling')
let p1animalhandlingbonus = document.getElementById('p1_animalhanbonus')
let p1arcana = document.getElementById('p1skill_arcana')
let p1arcanabonus = document.getElementById('p1_arcanabonus')
let p1athletics = document.getElementById('p1skill_athletics')
let p1athleticsbonus = document.getElementById('p1_athleticsbonus')
let p1deception = document.getElementById('p1skill_deception')
let p1deceptionbonus = document.getElementById('p1_deceptionbonus')
let p1history = document.getElementById('p1skill_history')
let p1historybonus = document.getElementById('p1_historybonus')
let p1insight = document.getElementById('p1skill_insight')
let p1insightbonus = document.getElementById('p1_insightbonus')
let p1intimidation = document.getElementById('p1skill_intimidation')
let p1intimidationbonus = document.getElementById('p1_intimidationbonus')
let p1investigation = document.getElementById('p1skill_investigation')
let p1investigationbonus = document.getElementById('p1_investigationbonus')
let p1medicine = document.getElementById('p1skill_medicine')
let p1medicinebonus = document.getElementById('p1_medicinebonus')
let p1nature = document.getElementById('p1skill_nature')
let p1naturebonus = document.getElementById('p1_naturebonus')
let p1perception = document.getElementById('p1skill_perception')
let p1perceptionbonus = document.getElementById('p1_perceptionbonus')
let p1performance = document.getElementById('p1skill_performance')
let p1performancebonus = document.getElementById('p1_performancebonus')
let p1persuasion = document.getElementById('p1skill_persuasion')
let p1persuasionbonus = document.getElementById('p1_persuasionbonus')
let p1religion = document.getElementById('p1skill_religion')
let p1religionbonus = document.getElementById('p1_religionbonus')
let p1sleighthand = document.getElementById('p1skill_sleighthand')
let p1sleighthandbonus = document.getElementById('p1_sleighthandbonus')
let p1stealth = document.getElementById('p1skill_stealth')
let p1stealthbonus = document.getElementById('p1_stealthbonus')
let p1survival = document.getElementById('p1skill_survival')
let p1survivalbonus = document.getElementById('p1_survivalbonus')*/
let initinput1 = document.getElementById('initinput1')
let initinput2 = document.getElementById('initinput2')
let initorder = document.getElementById('initorder')
let initul = document.getElementById('init-ul')

/*Non-DOM variables */
let rolld4 = () => Math.floor(Math.random() * 4 + 1);
let rolld6 = () => Math.floor(Math.random() * 6 +1);
let rolld8 = () => Math.floor(Math.random() * 8 + 1);
let rolld10 = () => Math.floor(Math.random() * 10 + 1);
let rolld12 = () => Math.floor(Math.random() * 12 + 1);

function diceroll(num){
    num = Number(document.getElementById('rollinput').value)
    multi = Number(document.getElementById('rollinput2').value)
    myroll = []
    if(multi > 0){for(i=0;i<multi;i++){
        let mynum = Math.floor(Math.random() * num + 1)
        myroll.push(mynum)
        console.log(myroll)
        document.getElementById('rollme').innerText = myroll;
    }}else{
    let myroll = Math.floor(Math.random()*num + 1);
    document.getElementById('rollme').innerText = myroll;
    console.log(myroll);}
}

function skillcheck(profbonus,skillbonus){
    profbonus = Number(document.getElementById('skillinput2').value)
    skillbonus = Number(document.getElementById('skillinput1').value)
    let myroll = Math.floor(Math.random()*20 + 1);
    console.log(`your roll is ${myroll}`);
    myroll = myroll + profbonus + skillbonus;
    console.log(`your final roll is ${myroll}`);
    document.getElementById('rollme').innerText = myroll;
}

function attackcheck(profbonus,abilitymod){
    let myroll = Math.floor(Math.random()*20 + 1);
    console.log(`your roll is ${myroll}`);
    myroll = myroll + profbonus + abilitymod;
    console.log(`your final roll is ${myroll}`);
    document.getElementById('rollme').innerText = myroll;
}

function castspell(abilitymod,profbonus){
    let spell1 = Number(document.getElementById('spellinput1').value)
    let spell2 = Number(document.getElementById('spellinput2').value)
    let myroll = Math.floor(Math.random()*20 + 1)
    profbonus = spell1
    abilitymod = spell2
    console.log(`your roll is ${myroll}`)
    myroll = myroll + abilitymod + profbonus
    console.log(`your final roll is ${myroll}`)
    document.getElementById('rollme').innerText = myroll;
}
function spellenemysave(abilitymod,profbonus,specialmods){
    let spellDC = abilitymod + profbonus + specialmods
    console.log(`your spell DC is ${spellDC}`)
    document.getElementById('rollme').innerText = myroll;
}
function savingthrow(abilitymod,profbonus){
    save1 = Number(document.getElementById('saveinput1').value)
    abilitymod = save1
    profbonus = save2 
    let myroll = Math.floor(Math.random()*20 + 1);
    console.log(`your roll is ${myroll}`);
    myroll = myroll + abilitymod + profbonus;
    console.log(`your final roll is ${myroll}`);
    document.getElementById('rollme').innerText = myroll;
}

/*Spell stuff */
function eldritchblast(){
    let enemyAC = Number(document.getElementById('eldritchblastinput1').value);
    let playeratkbonus = Number(document.getElementById('eldritchblastinput2').value);
    let playerlevel = Number(document.getElementById('eldritchblastinput3').value);
    let randomroll =  Math.floor(Math.random()*20 + 1)
    let basedmg = Math.floor(Math.random() * 10+1)
    let level1 = rolld10();
    let level5 = rolld10() + rolld10();
    let level11 = rolld10() + rolld10() + rolld10();
    let level17 = rolld10() + rolld10() + rolld10() + rolld10();
    console.log(`Our roll was ${randomroll},and our bonus was ${playeratkbonus}`)
    let finaloutcome = (playeratkbonus + randomroll);
    if(enemyAC <= finaloutcome){
    document.getElementById('eldritchblastoutput1').innerText = "hit"
    console.log("It was a hit")
    }else{document.getElementById('eldritchblastoutput1').innerText = "miss";console.log("It was a miss")}
    if(playerlevel <= 4 && finaloutcome > enemyAC){console.log(level1)}else if(playerlevel < 11 && playerlevel >= 5 && finaloutcome > enemyAC){console.table(level5)}else if(playerlevel >= 11 && playerlevel < 17 && finaloutcome > enemyAC){console.table(level11)}else if(playerlevel >= 17 && finaloutcome > enemyAC){console.table(level17)}
}
function firebolt(){
    let enemyAC = Number(document.getElementById('fireboltinput1').value);
    let playeratkbonus = Number(document.getElementById('fireboltinput2').value);
    let playerlevel = Number(document.getElementById('fireboltinput3').value);
    let randomroll =  Math.floor(Math.random()*20 + 1)
    console.log(`Our roll was ${randomroll},and our bonus was ${playeratkbonus}`)
    let finaloutcome = (playeratkbonus + randomroll);
    let level1 = rolld10();
    let level5 = rolld10() + rolld10();
    let level11 = rolld10() + rolld10() + rolld10();
    let level17 = rolld10() + rolld10() + rolld10() + rolld10();
    if(enemyAC <= finaloutcome){
    document.getElementById('fireboltoutput').innerText = "hit"
    console.log("It was a hit")
    }else{document.getElementById('fireboltoutput').innerText = "miss";console.log("It was a miss")}
    if(playerlevel <= 4 && finaloutcome > enemyAC){console.log(level1)}else if(playerlevel < 11 && playerlevel >= 5 && finaloutcome > enemyAC){console.table(level5)}else if(playerlevel >= 11 && playerlevel < 17 && finaloutcome > enemyAC){console.table(level11)}else if(playerlevel >= 17 && finaloutcome > enemyAC){console.table(level17)}
}
function fireball(){

}
/*Initiative Functionality*/
const initiativeNameList = []
const initiativeRollList = []

function addLists(){
    let textValue = initinput1.value;
    let numberValue = initinput2.value;
    if(textValue){
        initiativeNameList.push(textValue);
    }
    if(numberValue){
        initiativeRollList.push(numberValue);
    }
    let pairedArray = initiativeNameList.map((item,index) => [item,initiativeRollList[index]]);
    initul.innerHTML = "";
    pairedArray.forEach(pair => {
        let li = document.createElement('li');
        li.textContent = `${pair[0]} - ${pair[1]}`;
        initul.appendChild(li);
    });
}

function removeFromInit(){
    //our input is initinput1.
    let textValue = initinput1.value;
    //if it is found, we get the index of it.
    let index = initiativeNameList.indexOf(textValue);
    //we then remove it
    if(index !== -1){
        initiativeNameList.splice(index,1);
        initiativeRollList.splice(index,1);
    }
    //re-render
    let pairedArray = initiativeNameList.map((item,index) => [item,initiativeRollList[index]]);
    initul.innerHTML = "";
    pairedArray.forEach(pair =>{
        let li = document.createElement('li');
        li.textContent = `${pair[0]} - ${pair[1]}`;
        initul.appendChild(li);
    });
}

function saveinit(){
    localStorage.setItem("initNameList",JSON.stringify(initiativeNameList));
    localStorage.setItem("initRollList",JSON.stringify(initiativeRollList));
}

function clearinit(){
    localStorage.clear();
}
window.onload = function(){
    let retrievedData = JSON.parse(localStorage.getItem('initNameList'));
    let retrievedData2 = JSON.parse(localStorage.getItem('initRollList'));
    initorder.innerHTML = retrievedData + retrievedData2;
}
/* Grid related changes and buttons */
function hideinit(){
    document.getElementById('init').style.display = "none"
}
function revealinit(){
    document.getElementById('init').style.display = "block"
}
function hideenemystats(){
    document.getElementById('enemystat').style.display = "none"
    document.getElementById('enemystat').style.border = "none"
}
function revealenemystats(){
    document.getElementById('enemystat').style.display = "block"
}

/*Enemy Stat stuff */
/*Use the 5e API*/
