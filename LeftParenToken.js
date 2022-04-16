const Token = require("./Token")
module.exports = class LeftParenToken extends Token {
    equals(other){
        return other instanceof LeftParenToken
    }
    
    hashCode(){
        return 3;
    }
 
    toString(){
     return "(";
    }
 }