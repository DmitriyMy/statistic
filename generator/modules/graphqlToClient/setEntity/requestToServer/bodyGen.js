function getRandomFloat() {
    return (Math.random() * 2)
}

function randomParametr() {
    if (Math.floor(Math.random() * 2) === 0) {
        result = getRandomFloat() * (-1);
    } else {
        result = getRandomFloat()
    }
    return result;

    /*return getRandomFloat().then(result => {
        if (Math.floor(Math.random() * 2) === 0) {
            result = result * (-1);
        }
        return result;
    }).catch(error => {
        console.log("randomParametr data Error:", error)
        return null;
    })*/
}

function bodyGen() {
    return {
        ID: (Math.floor(Math.random() * (20)) + 1),
        Parametr1: randomParametr(),
        Parametr2: randomParametr(),
        Parametr3: randomParametr(),
        Parametr4: randomParametr(),
        Parametr5: randomParametr(),
        Parametr6: randomParametr(),
        Parametr7: randomParametr(),
        Parametr8: randomParametr(),
        Parametr9: randomParametr(),
        Parametr10: randomParametr(),
        Parametr11: randomParametr(),
        Parametr12: randomParametr(),
        Parametr13: randomParametr(),
        Parametr14: randomParametr(),
        Parametr15: randomParametr(),
        Parametr16: randomParametr(),
        Parametr17: randomParametr(),
        Parametr18: randomParametr(),
        Parametr19: randomParametr(),
        Parametr20: randomParametr()
    } 
}

module.exports = bodyGen;