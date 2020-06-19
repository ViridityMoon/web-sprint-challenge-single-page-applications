import React, { useState, useEffect } from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

// import * as Yup from 'yup';
// import formSchema from './Yup/formSchema';

import Header from './Components/Header';
import HomePage from './Components/HomePage';
import Form from './Components/Form';

const initialOrder = {
  name: '',
  size: '',
  sauce: '',
  toppings: {
    pepperoni: false,
    sausage: false,
    canadianBacon: false,
    spicyItalianSausage: false,
    grilledChicken: false,
    onions: false,
    greenPepper: false,
    dicedTomatoes: false,
    blackOlives: false,
    artichokeHearts: false,
    pineapple: false,
    threeCheese: false,
  },
  substitute: {
    glutenFreeCrust: false,
  },
  specialInstructions: '',
  quantity: '',
};



const App = () => {
  const [order, setOrder] = useState(initialOrder);
  const [formValues, setFormValues] = useState(initialOrder);
  const [formErrors, setFormErrors] = useState(initialOrder);

  const onCheckboxChange = evt => {
    const { name, checked } = evt.target;
    setFormValues({...formValues, 
      toppings: {
        ...formValues.toppings,
        [name]: checked,
      }
    })
  };

  const onInputChange = evt => {
    const { name, value } = evt.target;

    // Yup
    //   .reach(formSchema, name)
    //   .validate(value)
    //   .then(() => {
    //     setFormErrors({
    //       ...formErrors,
    //       [name]: ""
    //     })
    //   })

    //   .catch(err => {
    //     setFormErrors({
    //       ...formErrors,
    //       [name]: err.errors[0]
    //     })
    //   })

    setFormValues({...value, [name]: value});
  }

  return (
    <div>
      <Header/>
        <Router>
            <Route exact path='/' render = {props => <HomePage {...props} />} />
            <Route path='/pizza' render = {props => <Form {...props} onInputChange = {onInputChange} onCheckboxChange = {onCheckboxChange} />} />
        </Router>
    </div>
  );
};
export default App;
