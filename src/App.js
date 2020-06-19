import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';

import axios from 'axios';
import * as Yup from 'yup';
import formSchema from './Yup/formSchema';

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
  const [disabled, setDisabled] = useState(true);

  const postNewOrder = newOrder => {
    axios.post('https://reqres.in/api/pizza', newOrder)
      .then(res => {
        setOrder([...order, res.data])
      })
      .catch(err => {
        debugger
      })
      .finally(() => {
        setFormValues(initialOrder)
      })
  }

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
    Yup
      .reach(formSchema, name)
      .validate(value)
      .then((valid) => {
        console.log(valid);
        setFormErrors({
          ...formErrors,
          [name]: ""
        });
      })

      .catch(err => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      })

    setFormValues({...value, [name]: value});
  }

  const onSubmit = evt => {
    evt.preventDefault()

    const newOrder = {
      name: formValues.username.trim(),
      size: formValues.email.trim(),
      role: formValues.role,
      sauce: formValues.civil,
      toppings: Object.keys(formValues.toppings)
        .filter(toppingName => (formValues.toppings[toppingName] === true)),
      substitute: Object.keys(formValues.substitute)
        .filter(subName => (formValues.toppings[subName] === true)),
      specialInstructions: formValues.specialInstructions.trim(),
      quantity: formValues.quantity,
    };  
    postNewOrder(newOrder)
  };

  useEffect(() => {
    formSchema.isValid(formValues).then(valid => {
    setDisabled(!valid)
    })

  }, [formValues]);

return (
  <div>
    <Header/>
    <Route exact path='/' render = {props => <HomePage {...props} />} />
    <Route path='/pizza' render = {props => <Form {...props} onSubmit = {onSubmit} onInputChange = {onInputChange} onCheckboxChange = {onCheckboxChange} disabled = {disabled} formErrors = {formErrors} />} />

  </div>
);
};
export default App;
