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
  sauce: {
    originalRed: false,
    garlicRanch: false,
    barbecueSauce: false,
    spinachAlfredo: false,
  },
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
        console.log(res.data);
        // debugger
        setOrder([...order, res.data])
      })
      .catch(err => {
        // debugger
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

  const onCheckboxChange2 = evt => {
    const { name, checked } = evt.target;
    setFormValues({...formValues, 
      sauce: {
        ...formValues.sauce,
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

      console.log("name: " + name + " value: " + value)

    setFormValues({...formValues, [name]: value});
  }

  const onInputChange2 = evt => {
    const { name, value } = evt.target;
    console.log("name: " + name + " value: " + value)
    setFormValues({...formValues, [name]: value});
  }

  const onSubmit = evt => {
    evt.preventDefault()
    console.log(formValues);
    debugger
    const newOrder = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      sauce:  Object.keys(formValues.sauce)
      .filter(sauceName => (formValues.sauce[sauceName] === true)),
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
    <Route path='/pizza' render = {props => <Form {...props} onSubmit = {onSubmit} onInputChange = {onInputChange}onInputChange2 = {onInputChange2} onCheckboxChange = {onCheckboxChange} onCheckboxChange2 = {onCheckboxChange2} disabled = {disabled} formValues={formValues} formErrors = {formErrors} />} />

  </div>
);
};
export default App;
