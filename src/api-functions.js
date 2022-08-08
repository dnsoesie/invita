export async function search(data) {
  const response = await fetch(
    `http://localhost:8081/location/zippopo/${data}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const result = await response.json();
  if (response.status !== 200) {
    throw new Error("Something went wrong! or No data was found for zip code");
  }
  return result;
}

export async function getReviewsForZipCode(data) {
  const response = await fetch(`http://localhost:8081/location/${data}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status !== 200) {
    throw new Error("Something went wrong! or No data was found for zip code");
  }
  const result = await response.json();
  return result;
}

export async function submitReview(data) {
  const response = await fetch("http://localhost:8081/location/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
  if (!response.ok) {
    throw new Error("Something went wrong!");
  }
  // return result;
}

export async function deleteReviewWithId(locationId, reviewId) {
  const response = await fetch(
    `http://localhost:8081/location/${locationId}/${reviewId}`,
    {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }
  );
  if (!response.ok) {
    throw new Error("Something went wrong!");
  }
}
