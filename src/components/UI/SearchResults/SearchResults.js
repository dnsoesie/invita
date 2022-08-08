import classes from "./SearchResults.module.css";

const SearchResults = (props) => {
  const { result } = props;

  let placeDetails;

  placeDetails = result.places.map((entry, index) => {
    return (
      <section key={index}>
        <div className={classes.innerDiv}>
          <h6>Place name:</h6>
          <h6>{entry["place name"]}</h6>
        </div>
        <div className={classes.innerDiv}>
          <h6>State:</h6>
          <h6>{entry.state + " " + "(" + entry["state abbreviation"] + ")"}</h6>
        </div>
        <div className={classes.innerDiv}>
          <h6>Longitude:</h6>
          <h6>{entry.longitude}</h6>
        </div>
        <div className={classes.innerDiv}>
          <h6>Latitude:</h6>
          <h6>{entry.latitude}</h6>
        </div>
      </section>
    );
  });

  return (
    <>
    <p>Details About {result["post code"]}</p>
      <div className={classes.section}>
        <div className={classes.innerDiv}>
          <h6>Postal Code:</h6>
          <h6>{result["post code"]}</h6>
        </div>
        <div className={classes.innerDiv}>
          <h6>Country:</h6>
          <h6>
            {result.country + " " + "(" + result["country abbreviation"] + ")"}
          </h6>
        </div>
        <div className={classes.places}>
          <p>Places in Postal Code</p>
        {placeDetails}
        </div>
        
      </div>
    </>
  );
};

export default SearchResults;
