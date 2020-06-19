import React from 'react';


const Form = (props) => {
    const {
        onInputChange,
        onCheckboxChange,
        formErrors,
        onSubmit,
        disabled,
        
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
                <input type='text' onInputChange = {onInputChange}/>
            </section>
            <section>
                <label>
                    <select onChange={onInputChange}>
                        <option>Size</option>
                        <option>Personal</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                        <option>Extra Large</option>
                    </select>
                </label>
            </section>
            <h4>Build Your Own Pizza</h4>
            <section className='sauce'>
                <p>Choice of Sauce</p>
                <p>Required</p>
                <label>
                    Original Red
                    <input type='checkbox'onClick={onCheckboxChange}/>
                </label>
                <label>
                    Garlic Ranch
                    <input type='checkbox'onClick={onCheckboxChange}/>
                </label>
                <label>
                    Barbecue Sauce
                    <input type='checkbox'onClick={onCheckboxChange}/>
                </label>
                <label>
                    Spinach Alfredo
                    <input type='checkbox'onClick={onCheckboxChange}/>
                </label>
            </section>
            <section className='Toppings'>
                <p>Add Toppings</p>
                <p>Choose up to 10</p>

                <label>
                    Pepperoni
                    <input type='checkbox' value='pepperoni' onClick={onCheckboxChange}/>
                </label>
                <label>
                    Sausage
                    <input type='checkbox' value='sausage' onClick={onCheckboxChange}/>
                </label>
                <label>
                    Canadian Bacon
                    <input type='checkbox' value='canadian-bacon' onClick={onCheckboxChange}/>
                </label>
                <label>
                    Spicy Italian Sausage
                    <input type='checkbox' value='spicy-italian-sausage' onClick={onCheckboxChange}/>
                </label>
                <label>
                    Grilled Chicken
                    <input type='checkbox' value='grilled-chicken' onClick={onCheckboxChange}/>
                </label>
                <label>
                    Onions
                    <input type='checkbox' value='onions' onClick={onCheckboxChange}/>
                </label>
                <label>
                    Green Pepper
                    <input type='checkbox' value='green-pepper' onClick={onCheckboxChange}/>
                </label>
                <label>
                    Diced Tomatoes
                    <input type='checkbox' value='diced-tomatoes' onClick={onCheckboxChange}/>
                </label>
                <label>
                    Black Olives
                    <input type='checkbox' value='black-olives' onClick={onCheckboxChange}/>
                </label>
                <label>
                    Artichoke Hearts
                    <input type='checkbox' value='artichoke-hearts' onClick={onCheckboxChange}/>
                </label>
                <label>
                    Three Cheese
                    <input type='checkbox' value='three-cheese' onClick={onCheckboxChange}/>
                </label>
                <label>
                    Pineapple
                    <input type='checkbox' value='pineapple' onClick={onCheckboxChange}/>
                </label>
                <label>
                    Extra Cheese
                    <input type='checkbox' value='extra-cheese' onClick={onCheckboxChange}/>
                </label>
    
            </section> 
            <section className='substitutes'>
                <p>Choice of Substitute</p>
                <p>Not Required</p>
                <label>
                    <input type='checkbox'onClick={onCheckboxChange}/>
                </label>
                <p>Gluten Free Crust (+ $1.00)</p>
            </section>
            <section className='special-instructions'>
                <label>
                    Special Instructions
                    <input type='text' onClick={onInputChange}/>
                </label>
            </section>
            <section className='submission'>
                    <select onChange={onInputChange}>
                        <option>Quantity</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        <option>8</option>
                        <option>9</option>
                        <option>10</option>
                    </select>
                <button onClick={onSubmit} disabled = {disabled}>Add to Order</button>
            </section>
        </form>
  );
};
export default Form;
