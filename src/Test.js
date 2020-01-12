import React from 'react';
import { useGet } from "restful-react";

function Test() {
  const { data: randomDogImage, loading } = useGet({
    path: "https://dog.ceo/api/breeds/image/random",
  });

  return (
    <div>
      {loading ? 'Loading...' : (
        <img alt="Here's a good boye!" src={randomDogImage && randomDogImage.message} />
      )}
    </div>
  );
}

export default Test;
