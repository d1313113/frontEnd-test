import React from 'react';
import Enzyme, { shallow } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';
import App from './App';

// Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
  const wrapper = shallow(<App />);
  // console.log(wrapper.debug());
  expect(wrapper.find('.App').length).toBe(1);
  expect(wrapper.find('.App').prop('title')).toBe('cumelmell');
  expect(wrapper.find('[data-test="App"]').length).toBe(1);
  expect(wrapper.find('[data-test="App"]')).toExist();
});
