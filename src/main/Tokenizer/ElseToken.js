const Token = require("./Token")
module.exports = class ElseToken extends Token {

   equals(other){
       return other instanceof ElseToken
   }
   
   hashCode(){
       return 7;
   }

   toString(){
    return "else";
   }
}