import React from 'react';
import {shallow} from 'enzyme';
import  Home  from '../../views/Home';


describe('Home page', ()=>{
    it('Should render a not found page', () => {
        const wrapper = shallow(<Home />)
        wrapper.find('#notFound')
    });
});
