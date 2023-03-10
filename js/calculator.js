const selector=document.getElementById("character-selector");
function populateCharacters(){
    const characters=["Diluc","Sucrose","Keqing","Mona","Chongyun"];
    for(let i=0; i<characters.length;i++){
        selector.innerHTML +="<option value=\""+characters[i]+"\">"+characters[i] +"</option>"
    }
}


const charactersList={
    Diluc:{
        name:"Diluc",
        weapon:"Claymore",
        element:"Pyro",
    
        baseStats:{
            baseHP:12981,
            baseATK:335,
            baseDEF:784,
            critRate:0.242,
            critDamage:0.50,
            damagePercent:0,
            em:0,
            er:0,
            atkPercent:0,
            defPercent:0,
            hpPercent:0,
            healingBonus:0
        },
        
    },
    Sucrose:{
        name:"Sucrose",
        weapon:"Catalyst",
        element:"Anemo",
    
        baseStats:{
            baseHP:9244,
            baseATK:170,
            baseDEF:703,
            critRate:0.05,
            critDamage:0.5,
            damagePercent:0.24,
            em:0,
            er:0,
            atkPercent:0,
            defPercent:0,
            hpPercent:0,
            healingBonus:0
        },
        
    },
    Keqing:{
        name:"Keqing",
        weapon:"Sword",
        element:"Electro",
    
        baseStats:{
            baseHP:13103,
            baseATK:323,
            baseDEF:799,
            critRate:0.05,
            critDamage:0.884,
            damagePercent:0.0,
            em:0,
            er:0,
            atkPercent:0,
            defPercent:0,
            hpPercent:0,
            healingBonus:0
            
        },
        
    },
    Mona:{
        name:"Mona",
        weapon:"Catalyst",
        element:"Hydro",
    
        baseStats:{
            baseHP:10409,
            baseATK:287,
            baseDEF:653,
            critRate:0.05,
            critDamage:0.50,
            damagePercent:0.0,
            em:0,
            er:0.320,
            atkPercent:0,
            defPercent:0,
            hpPercent:0,
            healingBonus:0
        },
        
    },
    Chongyun:{
        name:"Chongyun",
        weapon:"Claymore",
        element:"Cryo",
    
        baseStats:{
            baseHP:10984,
            baseATK:223,
            baseDEF:648,
            critRate:0.05,
            critDamage:0.50,
            damagePercent:0.0,
            em:0,
            er:0,
            atkPercent:0.240,
            defPercent:0,
            hpPercent:0,
            healingBonus:0
        },
        
    },
};

function updateValues(name){
    const basehpSel=document.getElementById("basehp")
    basehpSel.value=charactersList[name].baseStats.baseHP
    const baseatkSel=document.getElementById("baseatk")
    baseatkSel.value=charactersList[name].baseStats.baseATK
    const basedefSel=document.getElementById("basedef")
    basedefSel.value=charactersList[name].baseStats.baseDEF
    const critrateSel=document.getElementById("critrate")
    critrateSel.value=charactersList[name].baseStats.critRate
    const critdmgSel=document.getElementById("critdamage")
    critdmgSel.value=charactersList[name].baseStats.critDamage
    const emSel=document.getElementById("em")
    emSel.value=charactersList[name].baseStats.em
    const dmgpercSel=document.getElementById("damagepercent")
    dmgpercSel.value=charactersList[name].baseStats.damagePercent
}

populateCharacters();
selector.addEventListener("change",function(){
    let test = selector.value;
    console.log("Selected value:"+charactersList[test].baseStats.baseATK)
    updateValues(test)
})
window.addEventListener("load", (event) => {
    let test = selector.value;
    updateValues(test)
  });