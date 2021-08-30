import { configure } from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme/build";
import Home from "../components/Home";

configure({adapter: new ReactSixteenAdapter()})
let wrapper;


describe('Testing Home Component',()=>{
    it('SHould render 1 <h1>',()=>{
        wrapper=shallow(<Home/>);
    expect(wrapper.find('h1')).toHaveLength(1);
    })
})