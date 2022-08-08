import { useState } from "react";
import {
  deleteReviewWithId,
  getReviewsForZipCode,
  search,
  submitReview,
} from "../../api-functions";
import Reviews from "../../components/UI/Reviews/Reviews";
import SearchResults from "../../components/UI/SearchResults/SearchResults";
import SearchBox from "../../components/UI/SearchBox/SearchBox";

import classes from "./CitySearchReviews.module.css";

const CitySearchReviews = () => {
  const [loading, setLoading] = useState(false);
  const [searchData, setSearchData] = useState(null);
  const [reviewData, setReviewData] = useState(null);
  const [searchError, setSearchError] = useState(null);
  const [reviewSubmitError, setReviewSubmitError] = useState(null);

  const searchClickHandler = async (data) => {
    setLoading(true);
    setSearchData(null);
    setSearchError(null);
    setReviewData(null);
    try {
      const response = await search(data);
      const reviews = await getReviewsForZipCode(data);
      setSearchData(response);
      setReviewData(reviews);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setSearchError(error.message);
    }
  };

  const reviewSubmitHandler = async (data) => {
    setReviewSubmitError(null);
    let newReviewData;
    //if no reviews in db (i.e. id is null), create new location object with zipcode, city and state and reviews.
    // const reviewDataCopy = { ...reviewData }; //copy the current review
    const reviewId = Math.floor(1000 + Math.random() * 9000);
    if (reviewData.id === null) {
      const newReviewsList = [];
      const newReview = {
        id: reviewId,
        reviewNotes: data,
      };
      newReviewsList.push(newReview);
      newReviewData = {
        id: null,
        zipcode: searchData["post code"],
        reviews: newReviewsList,
      };
    } else {
      //get the reviews array from the reviewData object
      let reviewDataCopy = { ...reviewData };
      const placeReviews = reviewDataCopy.reviews;
      const reviewDetails = { id: reviewId, reviewNotes: data }; //create new review details with id and notes.
      placeReviews.push(reviewDetails);
      reviewDataCopy.reviews = placeReviews;
      newReviewData = { ...reviewDataCopy };
    }
    try {
      await submitReview(newReviewData); //submit the updated object with new review to the db.
    } catch (error) {
      setReviewSubmitError(error.message);
    }
    setReviewData(newReviewData);
  };

  const deleteReviewHandler = async (reviewId) => {
    try {
      await deleteReviewWithId(reviewData.id, reviewId);
    } catch (error) {
      setReviewSubmitError(error.message);
    }
    const reviewDataCopy = { ...reviewData };
    let reviews = reviewDataCopy.reviews; //get the reviews array
    const arrayElement = reviews.find((x) => x.id === reviewId); //find the review with the given id from the list

    reviews = reviews.filter((element) => element.id !== arrayElement.id);
    reviewDataCopy.reviews = reviews; //set the reviews in the review data to the filtered reviews.
    // console.log(reviewDataCopy)
    setReviewData(reviewDataCopy);
  };

  return (
    <div>
      <SearchBox onSearchClick={searchClickHandler} />
      {loading === true && <p className={classes.loading}>Loading</p>}
      {searchError && <p className={classes.error}>{searchError}</p>}
      <div className={classes.container}>
        {searchData && <SearchResults result={searchData} />}
      </div>
      <div className={classes.container}>
        {reviewSubmitError && (
          <p className={classes.error}>{reviewSubmitError}</p>
        )}
        {reviewData && (
          <Reviews
            locationReview={reviewData}
            onSaveClick={reviewSubmitHandler}
            onReviewDelete={deleteReviewHandler}
          />
        )}
      </div>
    </div>
  );
};

export default CitySearchReviews;
