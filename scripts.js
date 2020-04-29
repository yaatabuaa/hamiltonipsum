var myShotPrefix = `I am not throwing away my shot! `;

var swearing = [
    `Bastard.`,
    `Son of a whore.`,
    `Sit down John you fat mother fucker.`,
    `Orphan.`
]

var ipsum = [
    `The ten-dollar Founding Father without a father.`,
    `My name is Alexander Hamilton and there's a million things I haven't done.`,
    `In New York you can be a new man.`,
    `Boy you got me helpless.`,
    `I have the honour to be your obedient servant.`,
    `Dear Theodosia what to say to you?`,
    `Alexander Hamilton had a torrid affair and he wrote down right here.`,
    `The charge against me is one for improper speculation.`,
    `My real crime is an amorous connection with his wife - for a considerable time with his knowing consent.`,
    `Just you wait!`,
];

document.getElementById('paragraphs').defaultValue = 3;

var paragraphs = document.getElementById('paragraphs');

paragraphs.addEventListener('change', updateParagraphs);

function updateParagraphs() {
    //if they enter 0, change it to 1
    console.log(paragraphs.value);
}

function loremIpsum() {
    document.getElementById('generated-text').innerHTML = `${ipsum}`;
}
// numberOfParagraphs();