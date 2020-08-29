import React, { useEffect } from 'react';
import './styles.css';

function Tab2() {
  useEffect(() => {
    return () => {
      console.log('Unmounting tab 2');
    }
  }, []);

  return (
    <div>
      Tab 2
    </div>
  );
}

export default Tab2;
