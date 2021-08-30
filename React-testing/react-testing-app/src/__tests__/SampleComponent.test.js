import React from 'react';
import {configure, shallow} from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
import SampleComponent from '../SampleComponent';


configure({adapter: new ReactSixteenAdapter()})

//describe is a test  suite(contains test case)
describe('Testing SampleComponent',()=>{
    //test case
    it('should show text',()=>{
        const wrapper=shallow(<SampleComponent/>)
        const myText = wrapper.find('div')
    expect(myText.text()).toBe('Sample Text')
    })
    //BDD => Behavioral Driven Testing
})