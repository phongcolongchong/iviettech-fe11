import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';;
// import './styles.css';

function SignUp(props) {
  const [ formValue, setFormValue ] = useState({
    email: '',
    password: '',
    address: '',
    phone: '',
    type: '',
    radio: '',
    multiCheckbox: [],
    agree: []
  });

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
    <Formik
      initialValues={{ 
        fullName: '',
        email: '',
        password: '',
        address: '',
        phone: '',
        course: '',
        gender: '',
        hobbies: [],
        agree: []
      }}
      validationSchema={Yup.object({
        fullName: Yup.string()
          .required('Bạn chưa nhập tên'),
        email: Yup.string()
          .required('Bạn chưa nhập email')
          .email('Định dạng email chưa đúng'),
        password: Yup.string()
          .required('Bạn chưa nhập password')
          .min(8, 'Mật khẩu phải dài hơn 8 ký tự'),
        address: Yup.string()
          .required('Bạn chưa nhập địa chỉ')
          .max(30, 'Địa chỉ dài tối đa 30 ký tự'),
        phone: Yup.string()
          .required('Bạn chưa nhập số điện thoại')
          .matches(/(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/, 'Định dạng số điện thoại chưa đúng'),
        course: Yup.string()
          .required('Bạn chưa chọn khóa học'),
        agree: Yup.array()
          .required('Bạn phải check vào ô đồng ý các điều khoản'),
        })}
      onSubmit={(values) => console.log(values)}
    >
      <Form>
        <div className="form-group">
          <label htmlFor="inputAddress">Full Name</label>
          <Field 
            type="text" 
            className="form-control" 
            id="inputAddress" 
            name="fullName"
          />
          <div className="text-danger">
            <ErrorMessage name="fullName" />
          </div>
        </div>

        <div>
          <label className="mr-3">Gender</label>
          <div className="form-check form-check-inline">
            <Field 
              className="form-check-input"
              type="radio" 
              name="gender" 
              id="exampleRadios1" 
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
              id="exampleRadios2" 
              value="female" 
            />
            <label className="form-check-label" htmlFor="exampleRadios2">
              Female
            </label>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4">Email</label>
            <Field 
              type="email" 
              className="form-control" 
              id="inputEmail4"
              name="email"
            />
            <div className="text-danger">
              <ErrorMessage name="email" />
            </div>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4">Password</label>
            <Field
              type="password" 
              className="form-control"
              id="inputPassword4"
              name="password"
            />
            <div className="text-danger">
              <ErrorMessage name="password" />
            </div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="inputAddress">Address</label>
          <Field 
            type="text" 
            className="form-control" 
            id="inputAddress" 
            name="address"
          />
          <div className="text-danger">
            <ErrorMessage name="address" />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputAddress2">Phone number</label>
            <Field 
              type="tel" 
              className="form-control" 
              id="inputAddress2" 
              name="phone"
            />
            <div className="text-danger">
              <ErrorMessage name="phone" />
            </div>
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="exampleFormControlSelect1">Course</label>
            <Field 
              className="form-control"
              id="exampleFormControlSelect1"
              name="course"
              as="select"
            >
              <option value="">Select course</option>
              <option value="design">Design</option>
              <option value="photography">Photography</option>
              <option value="marketing">Marketing</option>
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

          <div class="form-group">
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
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="2"></textarea>
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
            I agree to the <a href="#">Term and Conditions</a> 
          </label>
          <div className="text-danger">
              <ErrorMessage name="agree" />
          </div>
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
