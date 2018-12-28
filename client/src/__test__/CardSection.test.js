import React from 'react';
import CardSection from '../components/content/CardSection';
import { shallow } from 'enzyme';
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

describe('Testing The Cards', () => {
    it('looking for divs', () => {
        const wrapper = shallow(<CardSection />);
        
    })
})