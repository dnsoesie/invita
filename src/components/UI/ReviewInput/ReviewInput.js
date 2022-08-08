import { useRef } from "react";
import classes from "./ReviewInpput.module.css"

const ReviewInput = (props) => {
  const inputRef = useRef();

  const onSubmitHandler = (event) => {
    event.preventDefault();
    const enteredReview = inputRef.current.value;
    if (enteredReview.length === 0) {
      return;
    }
    props.onSaveClick(enteredReview);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <textarea
        ref={inputRef}
        required
        rows={10}
        cols={50}
        name="review"
        placeholder="Write a review for this place."
      />
      <button style={{ display: "flex", justifyContent: "flex-end" }} type="submit">Submit</button>
    </form>
  );
};

export default ReviewInput;
