import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { Provider } from 'react-redux'
import { createMemoryHistory } from 'history'
import configureMockStore from "redux-mock-store";
import { shallow, mount } from 'enzyme'
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });


const history = createMemoryHistory("");

describe('this is a test', () => {

  const mockStore = configureMockStore();
  const initialState = { email: "email@example.com", firstName: "John", lastName: "Doe", joined: new Date().toLocaleDateString() };
  const store = mockStore(initialState);
  
  it('renders without crashing', () => {
    const wrapper = shallow(<Provider store={store}>
      <App history={history} />
    </Provider>);

    expect(wrapper.length).toEqual(1)
    expect(wrapper.find('App'))
  });

});
