module.exports = (num) => {
    const numOneToTen = ["","one","two","three","four","five","six","seven","eight","nine", "ten"];
    const numTenToNineteen = ["eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    const numTweNinteen = ["","", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let current;

    const oneTen =(int) => {
        let newInt = numOneToTen[int];
        return newInt;
    }
    const elevNine =(int) => {
        let numToNineteen =Math.floor(int/10)
        let newInt = numTenToNineteen[numToNineteen];
        return newInt;
    }
    const twentyNinety = (int) => {
        const teen = Math.floor(int / 10);
        const zeroten = int - teen * 10;
        newInt = numTweNinteen[teen] + " " + oneTen(zeroten);
        return newInt
    }
    //88 eighty eight
    const hundreedInt =(int) => {
        let hundredStr = "hundred";
        let numHandr = Math.floor(int/100);
        let newHundreed = Math.floor(int/100)*100;
        let newTeens = Math.floor((int - newHundreed)/10) * 10;
        let hunPlusTeens = newHundreed + newTeens
        // if (Number(toString(int).length[2]) === 0) {
        //     newInt = numOneToTen[numHandr] +" "+ hundredStr +" "+ numTweNinteen[Math.floor((int - newHundreed)/10)];
        //     return newInt
        // } else {
        newInt = numOneToTen[numHandr] +" "+ hundredStr +" "+ numTweNinteen[Math.floor((int - newHundreed)/10)] +" "+ oneTen(Math.floor(int-hunPlusTeens))
        return newInt.trim() 
        // }
    }

    if (num === 0) {
        current = "zero";
        return current
    } 
    if (num >= 1 && num <=10) {
        current = oneTen(num);
        return current
    }
    if (num >10 && num <20) {
        current = elevNine(num);
        return current
    } 
    if (num >= 20 && num <=99) {
        current = twentyNinety(num);
        return current
    }
    if (num > 99 && num <= 999) {
        current = hundreedInt(num);
        return current
    }
    else return "not positive a number"
};