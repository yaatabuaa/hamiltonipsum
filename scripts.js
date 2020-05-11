const myShotPrefix = `I am not throwing away my shot! `;

const swearing = [`Bastard.`, `Son of a whore.`, `Sit down John you fat mother fucker.`, `Orphan.`];

const ipsum = [
        // My Shot
        `I am not throwing away my shot`,
        `I am not throwing away my shot`,
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

        // Aaron Burr, Sir
        `Pardon me, are you Aaron Burr, sir?`,
        `That depends, who's asking?`,
        `Oh well sure, sir`,
        `I'm Alexander Hamilton`,
        `I'm at your service, sir`,
        `I have been looking for you`,
        `I'm getting nervous`,
        `Sir, I heard your name at Princeton`,
        `I was seeking an accelerated course of study`,
        `When I got sort out of sorts with a buddy of yours`,
        `I may have punched him`,
        `It’s a blur, sir`,
        `He handles the financials—`,
        `You punched the bursar?`,
        `Yes, I wanted to do what you did`,
        `Graduate in two, then join the revolution`,
        `He looked at me like I was stupid`,
        `I’m not stupid`,
        `So how’d you do it?`,
        `How’d you graduate so fast?`,
        `You're an orphan`,
        `Of course, I'm an orphan`,
        `God, I wish there was a war!`,
        `Then we could prove that we're worth more`,
        `Than anyone bargained for`,
        `Can I buy you a drink?`,
        `That would be nice`,
        `While we’re talking, let me offer you some free advice`,
        `Talk less, smile more`,
        `Don't let them know what you're against or what you're for`,
        `Fools who run their mouths off wind up dead`,
];

// set the default value on #paragraphs to 3
document.getElementById('paragraphs').defaultValue = 3;

const paragraphs = document.getElementById('paragraphs');

function updateParagraphNumber() {
        // get number from the input value
        const numberOfParagraphs = parseInt(`${paragraphs.value}`);
        // for of loop and append
}

paragraphs.addEventListener('keyup', updateParagraphNumber);

function loremIpsum() {
        const myShotCheckbox = document.getElementById('my-shot');
        if (myShotCheckbox.checked === true) {
                // ipsum.unshift(`${myShotPrefix}`);
                console.log(`My Shot is Checked`);
        } else {
                console.log(`My Shot aint Checked`);
        }
}
