import React, {useRef, useState} from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    // ref에 저장된 입력요소
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5)
      {
        setAmountIsValid(false);
        return;
      }
      props.onAddToCart(enteredAmountNumber);
  };

  return (
    <React.Fragment>
      <form className={classes.form} onSubmit={submitHandler}>
        <Input
          ref={amountInputRef}
          label="인분"
          input={{
            id: 'amount_' + props.id,
            type: 'number',
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}/>
        <button>+ 추가하기</button>
        {!amountIsValid && <p>1인분에서 5인분까지만 주문 가능합니다. </p>}
      </form>
    </React.Fragment>
  )


};

export default MealItemForm;