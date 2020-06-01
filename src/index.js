import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import Kennel from './components/Kennel'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Kennel />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);


// TODONE:
// -- build a form.js file (components)
// -- POST function with fetch in AnimalManager
// -- Button for rendering the form ( on the existing list of animals)
// -- Route to the form component (in ApplicationViews)

// TODO: (Add caretaker for animal)
// -- Need employees and a way to fetch them
// -- Add dropdown to AnimalForm component
// -- Update animals to have an employeeId property
// -- Get the employees and fill the form dropdown with employees
