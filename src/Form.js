import React, { useState } from "react";
import App from "./App";

export default function Form(props) {

 
    const { submit, change, zaData } = props

    const doChange = (evt) => {
        console.log(evt)
        const { name, value, checked, type } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
      }

  return (
    <form onSubmit={onSubmit} id='pizza-form'>
    <div>
      <input type="text" id="name-input" name="pizza-name" onChange={doChange} placeholder="name"  value={zaData.name} />
      <label>
        <select id="size-dropdown" onChange={doChange} value={zaData.size} name='size-dropdown'>
          <option value='big'>big pizza</option>
          <option value='medium'>medium pizza</option>
          <option value='small'>little pizza</option>
        </select>
      </label>
      <label>pepperoni
        <input 
        type="checkbox"
        name='pepperoni'
        checked={zaData.pepperoni}
        onChange={event => doChange(event)}
        id='pepperoni'
    />
      </label>
      <label>cheese
        <input 
        type="checkbox"
        name='cheese'
        checked={zaData.cheese}
        onChange={doChange}
        id='cheese'
     />
      </label>
      <label>sauce
        <input 
        type="checkbox"
        name='sauce'
        checked={zaData.sauce}
        onChange={doChange}
        id='sauce'
     />
      </label>
      <label>crust
        <input 
        type="checkbox"
        name='crust'
        checked={zaData.crust}
        onChange={doChange}
        id='crust'
       />
      </label>
      <label>
        <input 
            type='text'
            id='special-text'
            placeholder="order instructions"
            value={zaData.special}
            onChange={doChange}
            name={'special'}
        />
      </label>
      <button onClick={submit}>add to order</button>
    </div>
    </form>
  );
}
