console.log('It works tho.')

let button = document.getElementById('Engage');
console.dir(button)

button.addEventListener('click', function (event) {
  let result = document.getElementById('The-Roll');
  let diceNumber = getRandomIntInclusive(1, 20);
  let terrainValue = terrainEncounters(diceNumber);

  result.innerText = terrainValue
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