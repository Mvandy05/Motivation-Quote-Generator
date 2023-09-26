//Array of addQuotes
const quotesArr = [];

//addQuote Factory Function
const addQuote = (part1, part2, part3, authorFirstName, authorLastName) => {
    quotesArr.push({    
    part1,
    part2,
    part3,
    authorFirstName,
    authorLastName
    });
};


// Return a random Quote
const randomQuote = () => {
    const numOrigQuotes = quotesArr.length;
    const randQuote = Math.floor(Math.random() * numOrigQuotes);
    //console.log(`randomQuote = ${randQuote}`);
    return quotesArr[randQuote];
}

// Return a random quote part and author
/*
const randomPart = () => {
    let part = Math.floor(Math.random() * 3 + 1);
    console.log(`part = ${part}`);
    let quote = randomQuote();
   
    switch (part) {
        case 1:
            console.log(`quote part1: ${quote.part1}`);
            break;
        case 2:
            console.log(`quote part2: ${quote.part2}`);
            break;
        case 3:
            console.log(`quote part3: ${quote.part3}`);
            break;
        default:
            console.log(`Error, no part chosen.`);
    }
    
};
*/
// create the new quote!
const newQuote = () => {
    let randQuote1 = randomQuote();
    const part1 = randQuote1.part1;
    const firstName = randQuote1.authorFirstName;
    //console.log(`part1: ${part1}; firstName: ${firstName}`);
    let randQuote2 = randomQuote();
    //console.log(`randQuote2: ${randQuote2.part2}`);
    while (typeof randQuote2.part2 != 'string') {
        randQuote2 = randomQuote();
        //console.log(`Part2 Iteration: ${randQuote2.part2}`);
    }
    const part2 = randQuote2.part2;
    const middleInitial = `${randQuote2.authorFirstName[0]}.`
    //console.log(`middleInitial: ${middleInitial}`);
    let randQuote3 = randomQuote();
    while (typeof randQuote3.part3 != 'string') {
        randQuote3 = randomQuote();
    }
    const part3 = randQuote3.part3;
    const lastName = randQuote3.authorLastName;
    console.log(`${part1} ${part2} ${part3} - ${firstName} ${middleInitial} ${lastName}`);
    const NewQuote = {
        _part1: part1,
        _part2: part2,
        _part3: part3,
        _firstName: firstName,
        _middleInitial: middleInitial,
        _lastName: lastName,
        set modPart(partNumber) {
            // Change the identified part of the NewQuote.
            if (typeof partNumber === 'number' && partNumber >= 1 && partNumber <= 3) {
                let randQuote = randomQuote();
                switch(partNumber) {
                    case 1:
                        this._part1 = randQuote.part1;
                        this._firstName = randQuote.authorFirstName;
                        break;
                    case 2:
                        while (typeof randQuote.part2 != 'string') {
                            randQuote = randomQuote();
                        }
                        this._part2 = randQuote.part2;
                        this._middleInitial = `${randQuote.authorFirstName[0]}`;
                        break;
                    case 3:
                        while (typeof randQuote.part3 != 'string') {
                            randQuote = randomQuote();
                        }
                        this._part3 = randQuote.part3;
                        this._lastName = randQuote.authorLastName;
                        break;
                    default:
                        console.log(`ERROR: Parameter must be 1, 2, or 3.`);
                };
            } else {
                console.log(`ERROR: Part Number must be 1, 2, or 3.`)
            }
        }
    }
    return NewQuote;
};

/*
addQuote(`p1`, `p2`, null, `AFN1`, `ALN1`);
addQuote(`p11`, null, null, `AFN2`, `ALN2`);
addQuote(`p111`, `p222`, `p333`, `AFN3`, `ALN3`);
newQuote();
*/

//randomQuote();


addQuote(`Success is something you attract by the person you become.`,null, null,`Jim`, `Rohn`);
addQuote(`Ordinary people believe only in the possible.`, `Extraordinary people visualize not what is possible or probably, but rather what is impossible.`, `And by visualizing the impossible, they begin to see it as possible.`, `Cherie`, `Carter-Scott`);
addQuote(`Ideas can come from anywhere and at any time.`, `The problem with making mental notes is that the ink fades very rapidly.`, null, `Rolf`, `Smith`);
addQuote(`If you really think about it, hitting the snooze button in the morning doesn't even make sense.`, `It's like saying, "I hate getting up in the morning, so I do it over, and over, and over again.`, null, `Demetri`, `Martin`);
addQuote(`Reading is to the mind what exercise is to the body and prayer is to the soul.`, `We become the books we read.`, null, `Matthew`, `Kelly`);
addQuote(`Successful people aren't born that way.`, `They become successful by establishing the habit of doing things unsuccessful people don't like to do.`, `The successful people don't always like doing these things themselves; they just get on and do them.`, `Don`, `Marquis`);
addQuote(`One of the most common causes of failure is the habit of quitting when one is overtaken by temporary defeat.`, null, null, `Napoleon`, `Hill`);
addQuote(`I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.`, null, null, `Bruce`, `Lee`);
addQuote(`Whether you think you can or think you can't, you're right.`, null, null, `Henry`, `Ford`);
addQuote(`Good is the enemy of great...`, `Few people attain great lives, in large part because it is just so easy to settle for a good life.`, `The vast majority of companies never become great, precisely because the vast majority become quite good - and that is their main problem.`, `Jim`, `Collins`);
addQuote(`Winning is not a sometime thing: it's an all-the-time thing.`, `You don't win once in a while; you don't do the right thing once in a while; you do them right all the time.`, `Winning is a habit. Unfortunately, so is losing.`, `Vince`, `Lombardi`);
addQuote(`No horse gets anywhere until he is harnessed.`, `No steam or gas ever drives anything until it is confined. No Niagara is ever turned into light and power until it is tunneled.`, `No life ever grows great until it is focused, dedicated, disciplined.`, `Harry`, `Emerson Fosdick`);

let Q1 = newQuote();
console.log(Q1);
console.log(Q1.modPart = 3);
console.log(Q1);

/*
console.log(addQuote);
console.log(quotesArr);
*/

