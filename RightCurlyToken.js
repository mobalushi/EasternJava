const Token = require("./Token")
module.exports = class RightCurlyToken extends Token {
    equals(other){
        return other instanceof RightCurlyToken
    }
    
    hashCode(){
        return 6;
    }
 
    toString(){
     return "}";
    }
 }