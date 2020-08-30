console.log('It works tho.')

class Encounter{
	constructor(name, description){
		this.name = name
		this.description = description
	}
}

let button = document.getElementById('Engage');
console.dir(button)

button.addEventListener('click', function (event) {
  
  let diceNumber = getRandomIntInclusive(1, 20);
  let randomEncounterValue = randomEncounters(diceNumber);
  let result = document.getElementById('The-Roll');
  result.innerText = randomEncounterValue
});

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function terrainEncounters(roll) {

	const table = {
		1: new Encounter('Boneyard', `
			The characters come upon an eerie cavern littered with countless bones of various creatures.
			Whether the site is a natural graveyard for some Underdark species or the former lair of a fearsome predator, the characters can potentially gather useful material for crafting among the bones.
			When the party enters a boneyard, roll a d20 and consult the table to determine what creatures, if any are present. 
			The undead rise up out of the bones and attack when the first characters are halfway across the cavern.
			`),
		2: new Encounter('Cliff and ladder','No description yet'),
		3: new Encounter('Crystal clusters','No description yet'),
		4: new Encounter('Fungus cavern','No description yet'),
		5: new Encounter('Gas leak','No description yet'),
		6: new Encounter('Gorge','No description yet'),
		7: new Encounter('High ledge','No description yet'),
		8: new Encounter('Horrid sounds','No description yet'),
		9: new Encounter('Lava swell','No description yet'),
		10: new Encounter('Muck pit','No description yet'),
		11: new Encounter('Rockfall','No description yet'),
		12: new Encounter('Rope bridge','No description yet'),
		13: new Encounter('Ruins','No description yet'),
		14: new Encounter('Shelter','No description yet'),
		15: new Encounter('Sinkhole','No description yet'),
		16: new Encounter('Slime or mold','No description yet'),
		17: new Encounter('Steam vent','No description yet'),
		18: new Encounter('Underground stream','No description yet'),
		19: new Encounter('Warning sign','No description yet'),
		20: new Encounter('Webs','No description yet'),
	}
	return table[roll]
}

function randomEncounters(roll) {
	let diceNumber = getRandomIntInclusive(1, 20);
	let secondDiceNumber = getRandomIntInclusive(1, 20);
	if(roll < 14) {
		// noEncounter
		return 'No Encounter';
	}
	else if(roll === 14 || roll === 15 ) {
  		return terrainEncounters(diceNumber);
	}
	else if(roll === 16 || roll ===17) {
  		// one or more creatures
  		return creatureEncounters(diceNumber);
	}
  	else {
 		let monster = creatureEncounters(secondDiceNumber);
  		let place = terrainEncounters(diceNumber);
  		return `${monster} in ${place}`;
  		// terrain encounter featuring one or more creatures
  	}

}

function creatureEncounters(roll) {
	switch (true) {
		case roll === 1 || roll === 2 :
			return 'Ambushers';
			// NOTE address that we need to reroll if characters are resting
		case roll === 3 :
			return 'Carrion Crawler';
		case roll === 4 || roll === 5 :
			return 'Escaped Slaves';
		case roll === 6 || roll === 7 :
			return 'Fungi';
		case roll === 8 || roll === 9 :
			return 'Giant Fire Beetles';
		case roll === 10 || roll === 11 :
			return 'Giant "Rocktopus"';
		case roll === 12 :
			return 'Mad Creature';
		case roll === 13 :
			return 'Ochre Jelly';
		case roll === 14 || roll === 15 :
			return 'Raiders';
		case roll === 16 :
			return 'Scouts';
		case roll === 17 :
			return 'Society of Brilliance';
		case roll === 18 :
			return 'Spore Servants';

		default:
			return 'Traders';
	}
} 

