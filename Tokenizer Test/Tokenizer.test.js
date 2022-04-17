const Tokenizer = require("../Tokenizer/Tokenizer")
const TrueToken = require("../Tokenizer/TrueToken")
const FalseToken = require("../Tokenizer/FalseToken")
const ElseToken = require("../Tokenizer/ElseToken")
const IfToken = require("../Tokenizer/IfToken")
const IntegerToken = require("../Tokenizer/IntegerToken")
const VariableToken = require("../Tokenizer/VariableToken")
const LeftParenToken = require("../Tokenizer/LeftParenToken")
const RightParenToken = require("../Tokenizer/RightParenToken")
const LeftCurlyToken = require("../Tokenizer/LeftCurlyToken")
const RightCurlyToken = require("../Tokenizer/RightCurlyToken")


function assertTokenizes(input, expected) {
    let tokenizer = new Tokenizer(input);
    let recieved = tokenizer.tokenize();
    if (expected.toString() === recieved.toString()){
        return true
    } else return false
}

test('Test empty String: ', () => { 
    expect(assertTokenizes("", [])).toBe(true)
})

test('Test only Whitespace: ', () => { 
    expect(assertTokenizes("        ", [])).toBe(true)
})

test('Test False by itself: ', () => { 
    expect(assertTokenizes("false", [new FalseToken()])).toBe(true)
})

test('Test Variable: ', () => { 
    expect(assertTokenizes("foo", [new VariableToken("foo")])).toBe(true)
})

test('Test "truetrue" is Variable: ', () => { 
    expect(assertTokenizes("truetrue", [new VariableToken("truetrue")])).toBe(true)
})

test('Test "true true" are True Tokens: ', () => { 
    expect(assertTokenizes("true true", [new TrueToken(), new TrueToken()])).toBe(true)
})

test('Test single-digit Integer: ', () => { 
    expect(assertTokenizes("1", [new IntegerToken(1)])).toBe(true)
})

test('Test multi-digit Integer: ', () => { 
    expect(assertTokenizes("123", [new IntegerToken(123)])).toBe(true)
})

test('Test all remaining: ', () => { 
    expect( assertTokenizes("(){} else if false",
    [new LeftParenToken(),
    new RightParenToken(),
    new LeftCurlyToken(),
    new RightCurlyToken(),
    new ElseToken(),
    new IfToken(),
    new FalseToken()
    ])).toBe(true)
})

test('Test "Invalid": ', () => { 
    expect(assertTokenizes("$", [null])).toBe(true)
})

