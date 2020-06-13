const swearing = [`Bastard.`, `Son of a whore.`, `Sit down John you fat mother fucker.`, `Orphan.`];

const ipsum = [
        // My Shot
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
        `ENTER ME! (He says in parentheses)`,
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

        // Helpless
        `Ohh, I do I do I do I Dooo! Hey!`,
        `Boy you got me helpless`,
        `Look into your eyes, and the sky’s the limit I’m helpless!`,
        `Down for the count, and I’m drownin’ in ‘em`,
        `I have never been the type to try and grab the spotlight`,
        `We were at a revel with some rebels on a hot night`,
        `Laughin’ at my sister as she’s dazzling the room`,
        `Then you walked in and my heart went “Boom!”`,
        `Tryin’ to catch your eye from the side of the ballroom`,
        `Everybody’s dancin’ and the band’s top volume`,
        `Grind to the rhythm as we wine and dine`,
        `My sister made her way across the room to you`,
        `And I got nervous thinking "What's she gonnda do?"`,
        `She grabbed you by the arm, I’m thinkin’ “I’m through"`,
        `Then you look back at me and suddenly I’m Helpless!`,
        `One week later I'm writing a leterr nightly`,
        `Now my life gets better, every letter that you write me`,
        `Laughin’ at my sister, cuz she wants to form a harem`,
        `I’m just sayin’, if you really loved me, you would share him`,
        `Two weeks later in the living room stressin’`,
        `My father’s stone-faced While you’re asking for his blessin’`,
        `I’m dying inside, as you wine and dine`,
        `And I’m tryin’ not to cry ‘cause there’s nothing that your mind can’t do`,
        `My father makes his way across the room to you`,
        `I panic for a second, thinking “we’re through”`,
        `But then he shakes your hand and says “Be true`,
        `And you turn back to me, smiling, and I’m Helpless! `,
        `Eliza, I don’t have a dollar to my name`,
        `An acre of land, a troop to command, a dollop of fame`,
        `All I have’s my honor, a tolerance for Paine,`,
        `A couple of college credits and my top-notch brain`,
        `Insane, your family brings out a different side of me`,
        `Peggy confides in me, Angelica tried to take a bite of me`,
        `No stress, my love for you is never in doubt`,
        `We’ll get a little place in Harlem and we’ll figure it out`,
        `I’ve been livin’ without a family since I was a child`,
        `My father left, my mother died, I grew up buckwild`,
        `But I’ll never forget my mother’s face, that was real`,
        `And long as I’m alive, Eliza, swear to God`,
        `You’ll never feel so helpless`,
];

/*
const paragraphs = document.getElementById('paragraphs');

paragraphs.defaultValue = 3;

function updateIpsumParagraph() {
        const numberOfParagraphs = parseInt(`${paragraphs.value}`);
}

paragraphs.addEventListener('keyup', updateIpsumParagraph);
*/

const prefixedIpsum = ['I am not throwing away my shot!', ...ipsum];

const generatedTextZone = document.getElementById('generated-text');

function loremIpsum() {
        const myShotCheckbox = document.getElementById('my-shot');
        const swearingCheckbox = document.getElementById('swearing');

        if (myShotCheckbox.checked) {
                generatedTextZone.innerHTML = `${prefixedIpsum}`;
        } else {
                generatedTextZone.innerHTML = `${ipsum}`;
        }

        if (swearingCheckbox.checked) {
                console.log('potty mouth');
        }
}
