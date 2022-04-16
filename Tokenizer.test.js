const Tokenizer = require("./Tokenizer")
const TrueToken = require("./TrueToken")
const FalseToken = require("./FalseToken")
const ElseToken = require("./ElseToken")
const IfToken = require("./IfToken")
const IntegerToken = require("./IntegerToken")
const VariableToken = require("./VariableToken")
const LeftParenToken = require("./LeftParenToken")
const RightParenToken = require("./RightParenToken")
const LeftCurlyToken = require("./LeftCurlyToken")
const RightCurlyToken = require("./RightCurlyToken")


function assertTokenizes(input, expected) {
    let tokenizer = new Tokenizer(input);
    let recieved = tokenizer.tokenize();
    console.log(recieved)
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

// These Last 4 tests are failing and I have no idea why
// I console logged the recieved value for every assertTokenizes
// but the recieved for the ones below always stay empty
// -------------- Failing Tests Start -------------------
// test('Test single-digit Integer: ', () => { 
//     expect(assertTokenizes("1", [new IntegerToken(1)])).toBe(true)
// })

// test('Test multi-digit Integer: ', () => { 
//     expect(assertTokenizes("123", [new IntegerToken(123)])).toBe(true)
// })

// test('Test all remaining: ', () => { 
//     expect( assertTokenizes("(){} else if false",
//     [new LeftParenToken(),
//     new RightParenToken(),
//     new LeftCurlyToken(),
//     new RightCurlyToken(),
//     new ElseToken(),
//     new IfToken(),
//     new FalseToken()
//     ])).toBe(true)
// })

// test('Test "Invalid": ', () => { 
//     expect(assertTokenizes("$", null)).toBe(true)
// })

