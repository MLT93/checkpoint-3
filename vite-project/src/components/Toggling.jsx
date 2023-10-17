import { useEffect, useState } from "react";
import { FetchData } from "./FetchData";

export const Toggling = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    FetchData(
      "https://random-data-api.com/api/users/random_user?size=4",
      setData,
      setIsPending,
      setError,
    );
  }, []);

  const handleClick = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {isPending && <h2>Is Loading...</h2>}
      <button onClick={handleClick}>Click</button>
      {isVisible && !error && (
        <div>
          {data &&
            data.map((element, index) => {
              return <p key={index}>{element.username}</p>;
            })}
        </div>
      )}

      {error && <h2>{error}</h2>}
    </>
  );
};
