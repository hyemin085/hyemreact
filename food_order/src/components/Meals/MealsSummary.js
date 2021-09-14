import React, {Fragment} from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = () => {

  return(
  <React.Fragment>
  <section className={classes.summary}>
    <h2>맛있는 음식이 배달됩니다 !!</h2>
    <p>
      맛있는 음식을 선택하세요
    </p>
    <p>
      좋은 식재료와 훌륭한 쉐프가 만든 음식이 배달됩니다.
    </p>
  </section>
  </React.Fragment>
  )
}

export default MealsSummary;