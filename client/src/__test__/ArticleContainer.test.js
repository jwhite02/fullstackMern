import React from 'react';
import { shallow } from 'enzyme';
import ArticleContainer from '../components/content/ArticleContainer';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });


describe('Testing Article Container', () => {
    it('test for nodes', () => {
        const wrapper = shallow(<ArticleContainer />)
    })
});