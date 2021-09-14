import React, {useRef, useState} from "react";
import classes from "./Checkout.module.css";

const isEmpty = value => value.trim() === '';
const isNotFiveChars = value => value.trim().length !== 5;

const Checkout = (props) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    address: true,
    postcode: true,
    number: true,
  })

  const nameInputRef = useRef();
  const addressInputRef = useRef();
  const postcodeInputRef = useRef();
  const numberInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const addName = nameInputRef.current.value;
    const addAddress = addressInputRef.current.value;
    const addPost = postcodeInputRef.current.value;
    const addNumber = numberInputRef.current.value;

    const addNameIsValid = !isEmpty(addName);
    const addAddressIsValid = !isEmpty(addAddress);
    const addPostIsValid = !isNotFiveChars(addPost);
    const addNumberIsValid = !isEmpty(addNumber);

    setFormInputsValidity({
      name: addNameIsValid,
      address: addAddressIsValid,
      postcode: addPostIsValid,
      number: addNumberIsValid,
    });

    const formIsValid =
      addNameIsValid &&
      addAddressIsValid &&
      addPostIsValid &&
      addNumberIsValid;

    if(!formIsValid) {
      return;
    }
   props.onSubmit({
     name: addName,
     address: addAddress,
     postcode: addPost,
     number: addNumber,
   });
  };

  const nameControlClasses =`${classes.control} 
      ${formInputsValidity.name? '': classes.invalid}`


  return(
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor ="name">닉네임</label>
        <input type="text" id="name" ref={nameInputRef}/>
        {!formInputsValidity.name && <p>닉네임을 입력하세요 ! </p>}
      </div>
      <div className={`${classes.control} 
      ${formInputsValidity.address? '': classes.invalid}`}>
        <label htmlFor ="address">주소</label>
        <input type="text" id="address" ref={addressInputRef}/>
        {!formInputsValidity.address && <p>주소를 입력하세요 ! </p>}
      </div>
      <div className={`${classes.control} 
      ${formInputsValidity.postcode? '': classes.invalid}`}>
        <label htmlFor ="postcode">우편번호</label>
        <input type="text" id="postcode" ref={postcodeInputRef} />
        {!formInputsValidity.postcode && <p>우편번호를 입력하세요 ! </p>}
      </div>
      <div className={`${classes.control} 
      ${formInputsValidity.number? '': classes.invalid}`}>
        <label htmlFor ="number">휴대폰번호</label>
        <input type="text" id="number" ref={numberInputRef} />
        {!formInputsValidity.number && <p>휴대폰번호를 입력하세요 ! </p>}
      </div>
      <div className={classes.actions}>
      {/*type="button"은 양식을 전달하고 싶지 않기 때문이다*/}
        <button type='button' onClick={props.onCancel}>취소하기</button>
      <button className={classes.submit}>저장하기</button>
      </div>
    </form>
  )
};

export default Checkout;