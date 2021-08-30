import { configure, mount, shallow } from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
import App from "../App";
import SampleComponent from "../SampleComponent";

configure({adapter:new ReactSixteenAdapter()})
let wrapper;

describe('App component is rendering',()=>{
    it('should render 1 <p>',()=>{
        wrapper=shallow(<App/>);
    expect(wrapper.find('p')).toHaveLength(1)
    });

    it('should render one <SampleComponent/>',()=>{
        wrapper=shallow(<App/>);
    expect(wrapper.find(SampleComponent)).toHaveLength(1)
    });

    it('should render 2 <h1>',()=>{
        wrapper=shallow(<App/>);
    expect(wrapper.find('h1')).toHaveLength(1)
    });
    // it('should render 2 <h1>',()=>{
    //     wrapper=mount(<App/>);  //mount check with chind component
    // expect(wrapper.find('h1')).toHaveLength(2)
    // });
});