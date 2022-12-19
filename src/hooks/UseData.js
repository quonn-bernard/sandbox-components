import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setError(data.error);
        setData(data);
        setIsLoading(false);
      });
  }, [url]);
  return {
    data,
    isLoading,
    error
  };
};
