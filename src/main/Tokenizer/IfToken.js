const Token = require("./Token")
module.exports = class IfToken extends Token {
    equals(other){
        return other instanceof IfToken
    }
    
    hashCode(){
        return 2;
    }
 
    toString(){
     return "if";
    }
 }