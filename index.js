console.log('It works tho.')

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
		1: 'Boneyard',
		2: 'Cliff and ladder',
		3: 'Crystal clusters',
		4: 'Fungus cavern',
		5: 'Gas leak',
		6: 'Gorge',
		7: 'High ledge',
		8: 'Horrid sounds',
		9: 'Lava swell',
		10: 'Muck pit',
		11: 'Rockfall',
		12: 'Rope bridge',
		13: 'Ruins',
		14: 'Shelter',
		15: 'Sinkhole',
		16: 'Slime or mold',
		17: 'Steam vent',
		18: 'Underground stream',
		19: 'Warning sign',
		20: 'Webs',
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