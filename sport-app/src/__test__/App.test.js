import { configure } from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme/build";
import App from "../App";
import RouteHandler from "../RouteHandler";

configure({adapter: new ReactSixteenAdapter()})
let wrapper;

describe('App component is rendering',()=>{
    it('should render one <RouteHandler/>',()=>{
        wrapper=shallow(<App/>);
    expect(wrapper.find(RouteHandler)).toHaveLength(1);
    })
})
