import React from 'react';
import App from './App';
import { shallow, mount, render } from 'enzyme';
import { Provider } from 'react-redux';
import store from './store';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

// it('renders without crashing', () => {
//   render(
//     <Provider store={store}>
//       <App />
//     </Provider>
// );
// });

// const wrapper = render(<App />);