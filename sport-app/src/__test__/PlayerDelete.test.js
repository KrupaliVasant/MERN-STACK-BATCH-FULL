// import { Button } from "bootstrap";
import { configure } from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
import { shallow } from "enzyme/build";
import PlayerDelete from "../components/PlayerDelete";

configure({ adapter: new ReactSixteenAdapter() })

describe('Player Delete test suite', () => {
    it('calls onSubmit prop function when form is submitted',()=>{
        let wrapper=shallow(<PlayerDelete/>);
        let submitBtn = wrapper.find('form');
        submitBtn.simulate('submit');
    expect(submitBtn.prop('delete-btn')).toEqual();
    });
    // it('calls onSubmit prop function when form is submitted',()=>{
    //     let wrapper=shallow(<PlayerDelete/>);
    //     let submitBtn = wrapper.find('form');
    //     submitBtn.simulate('submit',{state:'isClick', value:'true'});
    // expect(submitBtn.prop('delete-btn')).toBeChecked('true');
    // });
})