import React from 'react';


const Form = (props) => {
    const {
        onInputChange,
        onInputChange2,
        onCheckboxChange,
        onCheckboxChange2,
        formValues,
        formErrors,
        onSubmit,
        // disabled,

    } = props
    return (
        <form onSubmit = {onSubmit}>
            <section className='form-top-content'>
                <h5>Build Your Own Pizza</h5>
                <img alt='food'></img>
            </section>
            <section className='name'>
                <h4>Enter Name Here</h4>
                <p>{formErrors.name ? formErrors.name : ''}</p>
                <input type='text' name='name' onChange = {onInputChange}/>
            </section>
            <section>
                <label>
                    Size
                    <select name='size' onChange={onInputChange2}>
                        <option name='size'>Size</option>
                        <option name="personal">Personal</option>
                        <option name='small'>Small</option>
                        <option name='medium'>Medium</option>
                        <option name='large'>Large</option>
                        <option name='extraLarge'>Extra Large</option>
                    </select>
                </label>
            </section>
            <h4>Build Your Own Pizza</h4>
            <section className='sauce'>
                <p>Choice of Sauce</p>
                <p>Required</p>
                <label>
                    Original Red
                    <input name='originalRed' type='checkbox' onClick={onCheckboxChange2}/>
                </label>
                <label>
                    Garlic Ranch
                    <input name='garlicRanch' type='checkbox' onClick={onCheckboxChange2}/>
                </label>
                <label>
                    Barbecue Sauce
                    <input name='barbecueSauce' type='checkbox' onClick={onCheckboxChange2}/>
                </label>
                <label>
                    Spinach Alfredo
                    <input name='spinachAlfredo' type='checkbox' onClick={onCheckboxChange2}/>
                </label>
            </section>
            <section className='Toppings'>
                <p>Add Toppings</p>
                <p>Choose up to 10</p>

                <label>
                    Pepperoni
                    <input name='pepperoni' type='checkbox' value='pepperoni' onClick={onCheckboxChange}/>
                </label>
                <label>
                    Sausage
                    <input name='sausage' type='checkbox' value='sausage' onClick={onCheckboxChange}/>
                </label>
                <label>
                    Canadian Bacon
                    <input name='canadianBacon' type='checkbox' value='canadian-bacon' onClick={onCheckboxChange}/>
                </label>
                <label>
                    Spicy Italian Sausage
                    <input name='spicyItalianSausage' type='checkbox' value='spicy-italian-sausage' onClick={onCheckboxChange}/>
                </label>
                <label>
                    Grilled Chicken
                    <input name='grilledChicken' type='checkbox' value='grilled-chicken' onClick={onCheckboxChange}/>
                </label>
                <label>
                    Onions
                    <input name='onions' type='checkbox' value='onions' onClick={onCheckboxChange}/>
                </label>
                <label>
                    Green Pepper
                    <input name='greenPepper' type='checkbox' value='green-pepper' onClick={onCheckboxChange}/>
                </label>
                <label>
                    Diced Tomatoes
                    <input name='dicedTomatoes' type='checkbox' value='diced-tomatoes' onClick={onCheckboxChange}/>
                </label>
                <label>
                    Black Olives
                    <input name='blackOlives' type='checkbox' value='black-olives' onClick={onCheckboxChange}/>
                </label>
                <label>
                    Artichoke Hearts
                    <input name='artichokeHearts' type='checkbox' value='artichoke-hearts' onClick={onCheckboxChange}/>
                </label>
                <label>
                    Three Cheese
                    <input name='threeCheese' type='checkbox' value='three-cheese' onClick={onCheckboxChange}/>
                </label>
                <label>
                    Pineapple
                    <input name='pineapple' type='checkbox' value='pineapple' onClick={onCheckboxChange}/>
                </label>
                <label>
                    Extra Cheese
                    <input name='extraCheese' type='checkbox' value='extra-cheese' onClick={onCheckboxChange}/>
                </label>
    
            </section> 
            <section className='substitutes'>
                <p>Choice of Substitute</p>
                <p>Not Required</p>
                <label>
                    <input name='glutenFreeCrust' type='checkbox'onChange={onCheckboxChange}/>
                </label>
                <p>Gluten Free Crust (+ $1.00)</p>
            </section>
            <section className='special-instructions'>
                <label>
                    Special Instructions
                    <input name='specialInstructions' type='text' onChange={onInputChange2}/>
                </label>
            </section>
            <section className='submission'>
                    <label>
                        Quantity
                        <select name='quantity' onChange={onInputChange2}>
                        <option name="1">1</option>
                        <option name="2">2</option>
                        <option name="3">3</option>
                        <option name="4">4</option>
                        <option name="5">5</option>
                        <option name="6">6</option>
                        <option name="7">7</option>
                        <option name="8">8</option>
                        <option name="9">9</option>
                        <option name="10">10</option>
                        </select>
                    </label>
                <button onClick={onSubmit} >Add to Order</button>
            </section>
        </form>
  );
};
export default Form;
// disabled = {disabled}