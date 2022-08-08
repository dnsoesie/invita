import classes from "./Reviews.module.css"

const SingleReviewElement = (props) => {
  const { notes, id, onDeleteClick } = props;

  const onDeleteClickHandler = () => {
    onDeleteClick(id);
  };

  return (
    <div className={classes.mainContainer}>
      <div className={classes.topContainer}>
        <h6>ID: {id}</h6>
        <button onClick={onDeleteClickHandler}>Delete</button>
      </div>
      <p>{notes}</p>
    </div>
  );
};

export default SingleReviewElement;
