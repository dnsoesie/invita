import ReviewInput from "../ReviewInput/ReviewInput";
import SingleReviewElement from "./SingleReviewElement";
import classes from "./Reviews.module.css";
const Reviews = (props) => {
  const { locationReview, onSaveClick, onReviewDelete } = props;

  let reviewDetails;

  if (locationReview.reviews !== null && locationReview.reviews.length > 0) {
    reviewDetails = locationReview.reviews.map((entry, index) => {
      return (
        <SingleReviewElement
          key={index}
          onDeleteClick={onReviewDelete}
          notes={entry.reviewNotes}
          id={entry.id}
        />
      );
    });
  } else {
    reviewDetails = (
      <div>
        <p>No Reviews for the place</p>
      </div>
    );
  }

  return (
    <>
      <p>Reviews</p>
      <div className={classes.reviewContainer}>{reviewDetails}</div>
      <ReviewInput onSaveClick={onSaveClick} />
    </>
  );
};

export default Reviews;
