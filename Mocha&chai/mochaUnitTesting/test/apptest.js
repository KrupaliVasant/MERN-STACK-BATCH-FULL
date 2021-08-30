const assert = require('chai').assert;
const app = require('../app');
const calc = require('../calculate');
describe("App",function(){
    it('hello should return hello',function(){
        let actual = app();
        assert.equal(actual,'hello');
    })
    it('Add shold return 5',function(){
        let actual = calc.add(2,3);
        assert.equal(actual,5);
    })
    it('Mul should return 10',function(){
        let actual = calc.mul(2,5);
        assert.equal(actual,10);
    })
})