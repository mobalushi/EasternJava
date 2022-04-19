const Token = require("./Token")
module.exports = class LeftCurlyToken extends Token {
    equals(other){
        return other instanceof LeftCurlyToken
    }
    
    hashCode(){
        return 5;
    }
 
    toString(){
     return "{";
    }
 }