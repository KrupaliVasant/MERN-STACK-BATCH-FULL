import { configure, shallow } from "enzyme";
import ReactSixteenAdapter from "enzyme-adapter-react-16";
import Login from "../Login";

configure({adapter:new ReactSixteenAdapter()})

describe('Login test suite',()=>{
    it('should render form',()=>{
        const wrapper=shallow(<Login/>)
        expect(wrapper.find('form.login').exists()).toBe(true);
        expect(wrapper.find('#email').length).toEqual(1);
        expect(wrapper.find('#password').length).toEqual(1);
    })
});

// describe('Email test suite',()=>{
//     it('state should be change',()=>{
//         const wrapper=shallow(<Login/>)
//         wrapper.find('#email').simulate('blur',{
//             target:{name:'email',value:'sample@xyz.com'}
//         })
//         expect(wrapper.props('email')).toEual('sample@xyz.com')
//     })
// });

describe('Email test suite',()=>{
    it('state should be change',()=>{
        const wrapper=shallow(<Login/>)
        wrapper.find('#email').simulate('blur',{
            target:{name:'email',value:'sample@xyz.com'}
        })
        expect(wrapper.state('email')).toEqual('sample@xyz.com')
    })
});