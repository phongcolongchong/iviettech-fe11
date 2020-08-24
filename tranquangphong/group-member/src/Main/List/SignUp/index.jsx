import React, { useState } from 'react';
import './styles.css';

function SignUp(props) {
  const [ formValue, setFormValue ] = useState({
    email: '',
    password: '',
    address: '',
    phone: '',
    type: '',
    gender: 'male',
    approve: []
  });
  console.log("SignUp -> formValue", formValue)

  const { checkValidate, errors } = props;

  const handleChangeValue = (e) => {
    const { name, value, checked } = e.target;
    let newValue = '';

    if (name === 'approve') {
      if (checked) {
        newValue = [
          ...formValue.approve,
          value
        ];
      } else if (formValue.approve.indexOf(value) !== -1) {
        const approveArray = formValue.approve;
        approveArray.splice(formValue.approve.indexOf(value), 1)
        newValue = [...approveArray]
      }
    } else {
      newValue = value;
    }
    setFormValue({
      ...formValue,
      [name]: newValue
    });
  }

  return (
    <form>
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputEmail4">Email</label>
          <input 
            type="email" 
            className={`form-control ${errors.email.length > 0 ? 'border-danger' : ''}`} 
            id="inputEmail4"
            name="email"
            onChange={(e) => handleChangeValue(e)} />
          <div className="text-danger">{errors.email}</div>
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputPassword4">Password</label>
          <input
            type="password" 
            className={`form-control ${errors.password.length > 0 ? 'border-danger' : ''}`} 
            id="inputPassword4"
            name="password"
            onChange={(e) => handleChangeValue(e)} />
          <div className="text-danger">{errors.password}</div>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="inputAddress">Address</label>
        <input 
          type="text" 
          className="form-control" 
          id="inputAddress" 
          placeholder="Da Nang"
          name="address"
          onChange={(e) => handleChangeValue(e)} />
      </div>

      <div className="form-group">
        <label htmlFor="inputAddress2">Phone number</label>
        <input 
          type="tel" 
          className="form-control" 
          id="inputAddress2" 
          placeholder="0123 456 789"
          name="phone"
          onChange={(e) => handleChangeValue(e)} />
      </div>

      <div className="form-group">
        <label htmlFor="exampleFormControlSelect1">Type</label>
        <select 
          className="form-control"
          id="exampleFormControlSelect1"
          name="type"
          onChange={(e) => handleChangeValue(e)}
        >
          <option value="">Select type</option>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
        </select>
      </div>

      <div>
        <label>Gender</label>
        <div className="form-check">
          <input 
            className="form-check-input"
            type="radio" 
            name="gender" 
            id="exampleRadios1" 
            value="male" 
            onChange={(e) => handleChangeValue(e)} 
            defaultChecked 
          />
          <label className="form-check-label" htmlFor="exampleRadios1">
            Male
          </label>
        </div>
        <div className="form-check">
          <input 
            className="form-check-input" 
            type="radio" 
            name="gender" 
            id="exampleRadios2" 
            value="female" 
            onChange={(e) => handleChangeValue(e)} 
          />
          <label className="form-check-label" htmlFor="exampleRadios2">
            Female
          </label>
        </div>
      </div>

      <div className="form-check">
        <input 
          className="form-check-input" 
          type="checkbox" 
          name="approve" 
          value="abc"
          id="exampleRadios2" 
          onChange={(e) => handleChangeValue(e)} 
        />
        <label className="form-check-label" htmlFor="exampleRadios2">
          Approve rule 1
        </label>
      </div>
      <div className="form-check">
        <input 
          className="form-check-input" 
          type="checkbox" 
          name="approve" 
          value="xyz"
          id="exampleRadios2" 
          onChange={(e) => handleChangeValue(e)} 
        />
        <label className="form-check-label" htmlFor="exampleRadios2">
          Approve rule 2
        </label>
      </div>

      <button 
        type="button" 
        className="btn btn-primary"
        onClick={() => checkValidate(formValue)}
      >
        Sign in
      </button>
    </form>
  );
}

export default SignUp;
