const Token = require("./Token")
module.exports = class TrueToken extends Token {
    equals(other){
        return other instanceof TrueToken
    }
    
    hashCode(){
        return 1;
    }
 
    toString(){
     return "True";
    }
 }