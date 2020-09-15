import React from 'react';
import { render, waitFor, waitForElement, mount } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import fetchShow from './api/fetchShow';
import Episodes from './components/Episodes';
import data2 from '../data2';

let data = '../data.json';




// mock the async function!
jest.mock('./api/fetchShow');

test('App renders and mock API is successful', async () => {
    // mock the resolved data
    fetchShow.mockResolvedValueOnce(data);
    // render the component
    render(<App />);
  
    expect(fetchShow).toHaveBeenCalledTimes(1);

  });


test('Simulate selecting Season 2', async () => {
    
    const {getByText} = render(<Episodes episodes={data2}/>);
        
const selector = await waitForElement(()=> getByText(/Chapter Three/i));

    expect(selector).toBeInTheDocument();
  });