this.offset = 0;
this.input = "1";

while ((this.offset < this.input.length) &&
    (this.input.charAt(this.offset) == ' ')) {
    console.log(this.input.charAt(this.offset));
    this.offset++
}

let number = ""

while (this.offset < this.input.length &&
    Number.isInteger(parseInt(this.input.charAt(this.offset)))) {
    console.log(this.input.charAt(this.offset));
    number += this.input.charAt(this.offset);
    this.offset++;
}

if (number.length > 0) {
    console.log("I am an integer")
} else {
    console.log("not an integer!")
}
