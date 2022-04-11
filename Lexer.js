class Tokenizer {
    constructor(input) {
        this.input = input;
        this.offset = 0;
    }

    skipWhiteSpace() {
        while ((this.offset < this.input.length) && (this.input.indexOf(' ') >= 0)) {
            this.offset++
        }
    }

    tryTokenizeInteger() {
        this.skipWhiteSpace();

        let number = ""

        while (this.offset < this.input.length && isNaN(number) === true) {
            this.offset++
        }

        if (number.length > 0) {
            return parseInt(number);
        } else {
            return null;
        }
    }

    //Add tryTokenizeVariableOrKeyword() function 

    //Add tryTokenizeSymbol() function

    //Add tokenizeSingle() function (with try catch I think)

    //Add tokenize() function (with try catch I think)

}
