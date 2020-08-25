import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';;
// import './styles.css';

function SignUp() {
  const renderCustomInput = (props) => {
    const { field, meta } = props;
    return (
      <>
        <input 
          { ...field } 
          className={`form-control ${meta.touched && meta.error ? 'border-danger' : ''}`} 
        />
        {meta.touched && meta.error && <div className='text-danger'>{meta.error}</div>}
      </>
    )
  }

  return (
    <Formik
      initialValues={{ 
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
        address: '',
        phone: '',
        course: '',
        gender: '',
        hobbies: [],
        agree: []
      }}
      validationSchema={Yup.object({
        fullName: Yup.string()
          .required('Please enter your full name'),
        email: Yup.string()
          .required('Please enter your email')
          .email('Incorrect email format'),
        password: Yup.string()
          .required('Please enter your password')
          .min(8, 'Password must be longer than 8 characters'),
        confirmPassword: Yup.string()
          .required('Please enter confirm password')
          .oneOf([Yup.ref('password')], 'Incorrect confirm password'),
        address: Yup.string()
          .required('Please enter your address')
          .max(30, 'Must be 30 characters or less'),
        phone: Yup.string()
          .required('Please enter your phone number')
          .matches(/(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/, 'Incorrect phone number format'),
        course: Yup.string()
          .required('Please choose your course'),
        hobbies: Yup.array()
          .min(1, 'You must choose at least one hobby'),
        agree: Yup.array()
          .required('You must agree with terms and conditions'),
        })}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <div className="form-group">
          <label htmlFor="fullName">Full name</label>
          <Field 
            name="fullName"
            render={(props) => renderCustomInput({
              ...props, 
              field: {
                ...props.field,
                type: 'text', 
                placeholder: 'Enter your full name'
              }
            })} 
          />  
        </div>

        <div>
          <label className="mr-3">Gender</label>
          <div className="form-check form-check-inline">
            <Field 
              className="form-check-input"
              type="radio" 
              name="gender" 
              id="male" 
              value="male" 
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              Male
            </label>
          </div>
          <div className="form-check form-check-inline">
            <Field 
              className="form-check-input" 
              type="radio" 
              name="gender" 
              id="female" 
              value="female" 
            />
            <label className="form-check-label" htmlFor="exampleRadios2">
              Female
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <Field 
            name="email"
            render={(props) => renderCustomInput({
              ...props, 
              field: {
                ...props.field,
                type: 'email', 
                placeholder: 'Enter your email'
              }
            })} 
            />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <Field
            type="password" 
            className="form-control"
            id="password"
            name="password"
            render={(props) => renderCustomInput({
              ...props, 
              field: {
                ...props.field, 
                type: 'password',
                placeholder: 'Enter your password'
              }
            })}     
          />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm password</label>
          <Field 
            name="confirmPassword"
            render={(props) => renderCustomInput({
              ...props, 
              field: {
                ...props.field, 
                type: 'password',
                placeholder: 'Enter your password'
              }
            })}  
          />
        </div>

        <div className="form-group">
          <label htmlFor="inputAddress">Address</label>
          <Field 
            name="address"
            render={(props) => renderCustomInput({
              ...props, 
              field: {
                ...props.field, 
                placeholder: 'Enter your address'
              }
            })} 
          />
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputAddress2">Phone number</label>
            <Field 
              name="phone"
              render={(props) => renderCustomInput({
                ...props, 
                field: {
                  ...props.field, 
                  type: 'tel',
                  placeholder: 'Enter your phone number'
                }
              })}  
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="exampleFormControlSelect1">Course</label>
            <Field 
              name="course"
              render={(props) => {
                const { field, meta } = props;
                return (
                  <select
                    {...field}
                    className={`form-control ${meta.touched && meta.error ? 'border-danger' : ''}`} 
                  >
                    <option value="">Select course</option>
                    <option value="design">Design</option>
                    <option value="photography">Photography</option>
                    <option value="marketing">Marketing</option>
                  </select>
                );
              }}
            >
            </Field>
            <div className="text-danger">
              <ErrorMessage name="course" />
            </div>
          </div>
        </div>

        <div>
          <label htmlFor="">Hobbies</label>
          <div className="form-check">
            <Field 
              className="form-check-input" 
              type="checkbox" 
              name="hobbies" 
              value="go to coffee shop"
              id="exampleRadios2" 
            />
            <label className="form-check-label" htmlFor="exampleRadios2">
              Go to coffee shop
            </label>
          </div>
          <div className="form-check">
            <Field 
              className="form-check-input" 
              type="checkbox" 
              name="hobbies" 
              value="learning english"
              id="exampleRadios2" 
            />
            <label className="form-check-label" htmlFor="exampleRadios2">
              Learning English
            </label>
          </div>
          <div className="form-check">
            <Field 
              className="form-check-input" 
              type="checkbox" 
              name="hobbies" 
              value="learning programming"
              id="exampleRadios2" 
            />
            <label className="form-check-label" htmlFor="exampleRadios2">
              Learning Programming
            </label>
          </div>

          <div className="form-group">
            <div className="form-check">
              <Field 
                className="form-check-input" 
                type="checkbox" 
                name="hobbies" 
                value="other"
                id="exampleRadios2" 
              />
              <label className="form-check-label" htmlFor="exampleRadios2">
              Other
              </label>
            </div>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
          </div>
          <div className="text-danger">
              <ErrorMessage name="hobbies" />
          </div>
        </div>

        <div className="form-check">
          <Field 
            className="form-check-input" 
            type="checkbox" 
            name="agree" 
            value="agree"
            id="exampleRadios2" 
          />
          <label className="form-check-label" htmlFor="exampleRadios2">
            I agree to the <a href="#">Terms and Conditions</a> 
          </label>
        </div>
        <div className="text-danger">
            <ErrorMessage name="agree" />
        </div>

        <button 
          type="submit" 
          className="btn btn-primary my-3 col-6"
        >
          Register
        </button>
      </Form>
    </Formik>
  );
}

export default SignUp;
