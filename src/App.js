import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Form from "./Form";
import * as yup from 'yup'

const App = () => {

  const initialZaData = {
      name: '',
      size: '',
      pepperoni: false,
      cheese: false,
      sauce: false,
      crust: false,
      special: ''
  }
  const [errors, setErrors] = useState({
      name: '',
      size: '',
      pepperoni: '',
      cheese: '',
      sauce: '',
      crust: '',
      special: ''
  })

  const handleChange = (evt) => {
    const { name, value } = evt.target
    validate(name, value)
    setZaData({...zaData, [name]: value})
  }

  const [zaData, setZaData] = useState(initialZaData)

  const validate = (name, value) => {
    yup.reach(formSchema, name)
       .validate(value)
       .then(vaild => setErrors({...errors, [name]: ''}))
       .catch(err => {
        setErrors({...errors, [name]: err.errors[0]})
       })
       console.log('validate called')
  }


  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required(2, 'name must be at least 2 characters'),
    size: yup
      .string()
      .required('must pick a size for your pizza'),
    pepperoni: yup
      .boolean(),
    cheese: yup
      .boolean(),
    sauce: yup
      .boolean(),
    crust: yup
      .boolean(),
    special: yup
      .string()
  })
 


  return (
    <Router>
      <div className="App">
        <h1>Lambda Eats</h1>
        <p>Food store</p>
        <div>
            <Route path='/'>
              <Link to='/'>
                <button>home</button>
              </Link>
              <Link to='/pizza'>
                <button>pizza</button>
              </Link>
                <Form
                //  submit={submit}
                 change={handleChange} 
                 zaData={zaData}

                />
            </Route>
        </div>
      </div>
    </Router>
  );
};
export default App;

