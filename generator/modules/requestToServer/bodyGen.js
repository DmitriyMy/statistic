function getRandomFloat() {
    return Math.random(new Date)
}

function randomParametr() {
    if (Math.floor(Math.random() * 2) === 0) {
        result = getRandomFloat() * (-1);
    } else {
        result = getRandomFloat()
    }
    return result;
}

function bodyGen() {
    return `{
        ID: "Entity ${(Math.floor(Math.random() * (20)) + 1)}",
        Parametr1: ${randomParametr()}
        Parametr2: ${randomParametr()}
        Parametr3: ${randomParametr()}
        Parametr4: ${randomParametr()}
        Parametr5: ${randomParametr()}
        Parametr6: ${randomParametr()}
        Parametr7: ${randomParametr()}
        Parametr8: ${randomParametr()}
        Parametr9: ${randomParametr()}
        Parametr10: ${randomParametr()}
        Parametr11: ${randomParametr()}
        Parametr12: ${randomParametr()}
        Parametr13: ${randomParametr()}
        Parametr14: ${randomParametr()}
        Parametr15: ${randomParametr()}
        Parametr16: ${randomParametr()}
        Parametr17: ${randomParametr()}
        Parametr18: ${randomParametr()}
        Parametr19: ${randomParametr()}
        Parametr20: ${randomParametr()}
    }` 
}

module.exports = bodyGen;