


let mixed = {

	sign : ['Aries','Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capicorn', 'Aquarius', 'Pisces'],
	luck : ['Terrible', 'God Awful', 'Unspeakably Bleak', 'Non-existent', 'Nothing to write home about', '... better not to say', '?!?!?!?!?!?!', 'okayish', 'Actually not that bad', 'Gegrudgingly good', ';_;', 'High'],
	advice : ['Run!!!', 'Quit your job', "Don't look behind your sholder.", 'Start a podcast.', 'Definitely buy that thing.', 'Put it all on black.', 'Steal for fun.', 'Change your name.', 'Build an alliance', 'Forget?', 'Open your windows.', 'Cancel yourself.']
}
// console.log (mixed)

// Random item from Array Function 

function getRandomItem(arr) {

	// get random [i] value
	const randomIndex = Math.floor(Math.random() * arr.length);

	// get random item
	const item = arr[randomIndex];

	return item;
}

const randSign = getRandomItem(mixed.sign)
const randLuck = getRandomItem(mixed.luck)
const randAdvice = getRandomItem(mixed.advice)

// Testing the function on each item of the Object
console.log(randSign);
console.log(randLuck);
console.log(randAdvice);

// Constructing the Horoscope

const horoscope = (randSign, randLuck, randAdvice) => {
	return `WELCOME TO SHITTY HOROSCOPES LIMITED:

	Hmmmm your sign seems to be: ${randSign}.

	Your Luck is looking: ${randLuck}

	Given that, we advise you to:

	${randAdvice}
	`
}

console.log(horoscope())