var myShotPrefix = `I am not throwing away my shot! `;

var swearing = [
    `Bastard.`,
    `Son of a whore.`,
    `Sit down John you fat mother fucker.`,
    `Orphan.`
]

var ipsum = [
    //My Shot
    `Hey yo, I'm just like my country`,
    `I'm young, scrappy, and hungry`,
    `And I'm not throwing away my shot`,
    `I'mma get scholarship to King's College`,
    `I probably shouldn't brag, but dag, I amaze and astonish`,
    `The problem is I got a lot of brains, but no polish`,
    `I gotta holler just to be heard`,
    `With every word I drop knowledge`,
    `I'm a diamond in the rough, a shiny piece of coal`,
    `Tryin' to reach my goal, my power of speech: unimpeachable`,
    `Only nineteen, but my mind is older`,
    `These New York City streets getting colder, I shoulder`,
    `Ev'ry burden, ev'ry disadvantage`,
    `I have learned to manage. I don't have a gun to brandish`,
    `I walk these streets famished`,
    `The plan is to fan this spark into a flame`,
    `But damn, it's getting dark, so let me spell out my name`,
    `I am the - A-L, E-X, A-N, D E-R—we are—meant to be`,
    `A colony that runs independently`,
    `Meanwhile, Britain keeps shitting on us endlessly`,
    `Essentially, they tax us relentlessly`,
    `Then King George turns around, runs a spending spree`,
    `He ain't never gonna set his descendants free`,
    `So there will be a revolution in this century`,
    `ENTER ME!`,
    `(He says in parentheses)`,
    `Don't be shocked when your history book mentions me`,
    `I will lay down my life if it sets us free`,
    `Eventually you'll see my ascendancy`,
    `And I am not throwing away my shot (my shot)`,
    `I am not throwing away my shot (my shot)`,
    `Hey yo, I'm just like my country`,
    `I'm young, scrappy, and hungry`,
    `I am not throwing away my shot`,
    `I am not throwing away my shot`,
    `Hey yo, I'm just like my country`,
    `I'm young, scrappy, and hungry`,
    `And I'm not throwing away my shot`,
    `It's time to take a shot!`,
];

//set the default value on #paragraphs to 3
document.getElementById('paragraphs').defaultValue = 3;

var paragraphs = document.getElementById('paragraphs');

paragraphs.addEventListener('keyup', updateParagraphNumber);

function updateParagraphNumber() {
    //get number from the input value
    var numberOfParagraphs = parseInt(`${paragraphs.value}`);    

    //will need a for loop to generate parapgraphs
}

//appending the array to I am not throwing away my shot
// function generateMyShotPrefix() {
//     var myShotCheckbox = document.getElementById("my-shot");
//     if (myShotCheckbox.checked == true) {
//         // ipsum.unshift(`${myShotPrefix}`);
//         console.log(`I am not throwing away my shot`);
//     } else {
//         console.log(`I am unchecked`);
//     }
// }

function loremIpsum() {
    document.getElementById('generated-text').innerHTML = `<h2>Hammy Love</h2>`;
}

// generateMyShotPrefix();
