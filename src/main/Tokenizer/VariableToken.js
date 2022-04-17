const Token = require("./Token")
module.exports = class VariableToken extends Token{
    constructor(name){
        super();
        this.name = name;
    }

    hashCode(){
        return this.name.hashCode();
    }

    toString(){
        return "Variable(" + this.name + ")" ;
    }

    equals(other){
        if(other instanceof VariableToken){
            let asVar = other
            if (asVar.name){
                return this.name === asVar.name;
            }
        } else {
            return false;
        }
    }
}