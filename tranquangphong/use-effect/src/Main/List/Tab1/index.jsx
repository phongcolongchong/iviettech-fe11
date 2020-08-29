import React, { useEffect } from 'react';
import './styles.css';

function Tab1() {
  useEffect(() => {
    return () => {
      console.log('Unmounting tab 1');
    }
  }, []);

  return (
    <div>
      Tab 1
    </div>
  );
}

export default Tab1;
