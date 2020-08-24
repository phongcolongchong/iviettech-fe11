import React, { useState } from 'react';
import Group from './Group';
import SignUp from './SignUp';
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

  const [ finishFormValue, setFinishFormValue ] = useState({});
  const [ errors, setErrors ] = useState({
    email: '',
    password: ''
  });

  const checkValidate = (values) => {
    let errorsData = {};

    if (!values.email && values.email.length === 0) {
      errorsData = {
        ...errorsData,
        email: 'Bạn chưa nhập email'
      };
    } else {
      errorsData = {
        ...errorsData,
        email: ''
      };
    }

    if (!values.password && values.password.length === 0) {
      errorsData = {
        ...errorsData,
        password: 'Bạn chưa nhập mật khẩu'
      };
    } else if (values.password.length < 8) {
      errorsData = {
        ...errorsData,
        password: 'Mật khẩu phải dài hơn 8 ký tự'
      };
    }  else {
      errorsData = {
        ...errorsData,
        password: ''
      };
    }
   
    setErrors(errorsData);

    if (!errorsData) {
      setFinishFormValue(values);
    }
  }
  

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

    <div className="list container m-5">
      <div className="row">

        <div className="col-md-6 img">
        </div>
        <div className="col-md-6 px-5">
          <p className="title">Register form</p>
          <div><SignUp /></div>
        </div>
      </div>
    </div>
  );
}

export default List; 
