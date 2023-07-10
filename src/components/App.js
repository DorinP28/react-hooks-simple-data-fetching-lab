import React, { useState, useEffect } from "react";

function App() {
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setImage(data.message));
  }, []);

  return (
    <div>
      {!image ? (
        <p className="dog">Loading...</p>
      ) : (
        <>
          <p className="dog">Enjoy!</p>
          <img src={image} alt="A Random Dog" />
        </>
      )}
    </div>
  );
}

export default App;
