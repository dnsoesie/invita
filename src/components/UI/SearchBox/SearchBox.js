import { useRef } from "react";

const SearchBox = (props) => {
  const inputRef = useRef();

  const goClickHandler = (event) => {
    event.preventDefault();
    const zipCode = inputRef.current.value;
    if (zipCode.length !== 5) {
      return;
    }
    props.onSearchClick(zipCode.trim());
  };

  return (
    <form onSubmit={goClickHandler} style={{textAlign: "center"}}>
      <input
        type="text"
        ref={inputRef}
        required
        name="zipcode"
        placeholder="Enter 5 digit U.S. Zip code"
      />
      <button type="submit">Go</button>
    </form>
  );
};

export default SearchBox;
