import React, { useState, useEffect, useRef } from 'react';
import './styles.css';

function Tab1(props) {
  const [ changeColor, setChangeColor ] = useState(false);
  const [ count, setCount ] = useState(0);
  const divElement = useRef(null);
  const { inputElement, formValue, setFormValue } = props;

  let countRef = useRef(0);

  useEffect(() => {
    setInterval(() => {
      countRef.current = countRef.current + 1;
      setCount(countRef.current);
    }, 1000)
  }, []);

  // useEffect(() => {
  //   inputElement.current.focus();
  //   console.log('offsetWidth: ', divElement.current.offsetWidth);
  //   console.log('offsetHeight: ', divElement.current.offsetHeight);
  // }, []);

  useEffect(() => {
    if (formValue.email === 'abc@gmail.com') {
      setChangeColor(true);
    }
  }, [formValue]);

  useEffect(() => {
    return () => {
      console.log('Unmounting tab 1');
      setFormValue({});
    }
  }, []);

  const handleFocusDiv = (e) => {
    console.log(e.target.offsetWidth);
  }

  return (
    <>
    <div className={`${changeColor && 'text-danger'}`}>
      Email: {formValue.email}
    </div>
    {/* <button className="btn btn-primary" onClick={() => handleFocusInput()}>Focus</button> */}
    <input ref={inputElement} type="text" />
    <div ref={divElement} onClick={(e) => handleFocusDiv(e)} style={{width: 200, height: 100, backgroundColor: 'grey'}}></div>
    <div>{count}</div>
    </>
  );
}

export default Tab1;
