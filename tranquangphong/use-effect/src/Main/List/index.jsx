import React, { useState, useEffect } from 'react';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Group from './Group';
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

  const [ countNumber, setCountNumber ] = useState(1);
  const [ isMax, setIsMax ] = useState(false);
  const [ tabActive, setTabActive ] = useState(1);

  useEffect(() => {
    console.log('First time...');
  }, []);

  useEffect(() => {
    console.log('is Max: ', isMax);
  }, [isMax]);

  return (
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
      { tabActive === 1 ? <Tab1 /> : <Tab2 /> }
      
      <div
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

      <div>{ countNumber }</div>
    </div>
  );
}

export default List; 
