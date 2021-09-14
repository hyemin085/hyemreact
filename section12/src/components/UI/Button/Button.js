import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {
  console.log('버튼은 잘 작동중입니다.');
  return (
    <button
      type={props.type || 'button'}
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default React.memo(Button);
