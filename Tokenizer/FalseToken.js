const Token = require("./Token")
module.exports = class FalseToken extends Token {
    equals(other){
        return other instanceof FalseToken
    }
    
    hashCode(){
        return 1;
    }
 
    toString(){
     return "False";
    }
 }