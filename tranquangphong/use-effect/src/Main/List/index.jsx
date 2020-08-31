import React, { useState, useEffect, useRef } from 'react';
import Group from './Group';
import SignUp from './SignUp';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import './styles.css';

function List(props) {
  // const { groupList } = props;
  // const [ activeGroup, setActiveGroup ] = useState(0);
  // const [ cartData, setCartData ] = useState([]);

  // const renderGroups = () => {
  //   return groupList.map((item, index) => {
  //     return (
  //       <Group 
  //       key={index} 
  //       id={item.id} 
  //       name={item.name} 
  //       description={item.description} 
  //       members={item.members}
  //       activeIndex={index}
  //       activeGroup={activeGroup}
  //       setActiveGroup={setActiveGroup}
  //       cartData={cartData}
  //       setCartData={setCartData}
  //       groupItem={item}
  //       />
  //     );
  //   });
  // }

  // const renderCart = () => {
  //   return cartData.map((item, index) => {
  //     return (
  //       <Group 
  //       key={index}
  //       name={item.name} 
  //       description={item.description} 
  //       members={item.members}
  //       activeIndex={index}
  //       activeGroup={activeGroup}
  //       setActiveGroup={setActiveGroup}
  //       cartData={cartData}
  //       setCartData={setCartData}
  //       groupItem={item}
  //       isCart
  //       />
  //     );
  //   });
  // }

  // return (
  //   <div className="list">
  //     <p className="title">Cart</p>
  //     <div className="row px-3">
  //       {renderCart()}
  //     </div>
  //     <p className="title">Groups list</p>
  //     <div className="row px-3">
  //       {renderGroups()}
  //     </div>
  //   </div>
  // );


  // const [ finishFormValue, setFinishFormValue ] = useState({});
  // const [ errors, setErrors ] = useState({
  //   email: '',
  //   password: ''
  // });

  // const checkValidate = (values) => {
  //   let errorsData = {};

  //   if (!values.email && values.email.length === 0) {
  //     errorsData = {
  //       ...errorsData,
  //       email: 'Bạn chưa nhập email'
  //     };
  //   } else {
  //     errorsData = {
  //       ...errorsData,
  //       email: ''
  //     };
  //   }

  //   if (!values.password && values.password.length === 0) {
  //     errorsData = {
  //       ...errorsData,
  //       password: 'Bạn chưa nhập mật khẩu'
  //     };
  //   } else if (values.password.length < 8) {
  //     errorsData = {
  //       ...errorsData,
  //       password: 'Mật khẩu phải dài hơn 8 ký tự'
  //     };
  //   }  else {
  //     errorsData = {
  //       ...errorsData,
  //       password: ''
  //     };
  //   }
   
  //   setErrors(errorsData);

  //   if (!errorsData) {
  //     setFinishFormValue(values);
  //   }
  // }


  // const [ countNumber, setCountNumber ] = useState(1);
  // const [ isMax, setIsMax ] = useState(false);
  const [ tabActive, setTabActive ] = useState(1);
  const [ formValue, setFormValue ] = useState({});
  const inputElement = useRef(null);

  useEffect(() => {
    console.log('First time...');
    inputElement.current.focus();
    console.log('offsetWidth: ', inputElement.current.offsetWidth);
    console.log('offsetHeight: ', inputElement.current.offsetHeight);
  }, []);

  // useEffect(() => {
  //   console.log('is Max: ', isMax);
  // }, [isMax]);


  return (
    // <div className="list container mx-5 my-3">
    //   <p className="title">Form result</p>
    //   <div>Email: {finishFormValue.email}</div>
    //   <div>Password: {finishFormValue.password}</div>
    //   <div>Address: {finishFormValue.address}</div>
    //   <div>Phone number: {finishFormValue.phone}</div>
    //   <div>Type: {finishFormValue.type}</div>
    //   <div>Gender: {finishFormValue.gender}</div>
    //   <div>Approve: {finishFormValue.approve}</div>
    //   <p className="title">Sign Up</p>
    //   <div className="text-danger">{}</div>
    //   <div>
    //     <SignUp 
    //       checkValidate={checkValidate} 
    //       errors={errors}
    //     />
    //   </div>
    // </div>

    // // -----Sign up with Formik-----
    // <div className="list container m-5">
    //   <div className="row">

    //     <div className="col-md-6 img">
    //     </div>
    //     <div className="col-md-6 px-5">
    //       <p className="title">Register form</p>
    //       <div><SignUp /></div>
    //     </div>
    //   </div>
    // </div>

    // -----Exam useEffect-----
    <div className="m-5">
      <button 
        className="btn btn-primary"
        onClick={() => setTabActive(1)}
      >
        Tab 1
      </button>
      <button 
        className="btn btn-primary"
        onClick={() => setTabActive(2)}
      >
        Tab 2
      </button>
      { tabActive === 1
        ? <Tab1 inputElement={inputElement} formValue={formValue} setFormValue={setFormValue} /> 
        : <SignUp setFormValue={setFormValue} /> 
      }
      {/* <div
        className="btn btn-primary"
        onClick={() => {
          if (countNumber >= 10) {
            setIsMax (true);
          } else {
            setIsMax(false);
            setCountNumber(countNumber + 1);
          }
        }}
      >
        +
      </div>

      <div
        className="btn btn-primary"
        onClick={() => {
          setIsMax(false);
          setCountNumber(countNumber - 1);
        }}
      >
        -
      </div>

      <div>{ countNumber }</div> */}
    </div>
  );
}

export default List; 
