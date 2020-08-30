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
	if(roll < 14) {
		// noEncounter
		return 'No Encounter';
	}
	else if(roll === 14 || roll === 15 ) {
		let diceNumber = getRandomIntInclusive(1, 20);
  		return terrainEncounters(diceNumber);
	}
	else if(roll === 16 || roll ===17) {
  		// one or more creatures
  		return 'Creature Encounter';
	}
  	else {
  		let diceNumber = getRandomIntInclusive(1, 20);
  		return terrainEncounters(diceNumber);
  		// terrain encounter featuring one or more creatures
  	}

}