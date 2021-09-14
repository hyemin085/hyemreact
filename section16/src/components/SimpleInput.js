
import useInput from '../hooks/use-input';


const SimpleInput = (props) => {

  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetInput,
  } = useInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput(value=>value.includes('@'));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }
  //useEffect안쓰고 더 간결하게 formIsValid를 false로 만들어서 유효성확인해서 버튼창 막기
  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     setFormIsValid(true);
  //   }else {
  //     setFormIsValid(false);
  //   }
  // },[enteredNameIsValid]);


  const formSubmissionHandler = (event) => {
    event.preventDefault();
    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    console.log(enteredEmail);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
   resetInput();
   resetEmailInput();
  };


  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  const emailInputClasses = emailInputHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}/>
        {nameInputHasError && <p className="error-text"> 이름칸이 비어있어요. 빈칸없이 입력해 주세요.</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input
          type='email'
          id='email'
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}/>
        {emailInputHasError && <p className="error-text"> 이메일을 입력해주세요.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
        {/*양식이 유효하지 않으면 버튼 비활성화*/}
      </div>
    </form>
  );
};

export default SimpleInput;
