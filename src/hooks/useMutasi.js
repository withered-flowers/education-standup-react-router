import { useState } from "react";

const useMutasi = () => {
  const [loading, setLoading] = useState(false);
  const [kembalian, setKembalian] = useState([]);

  const dispatcher = async (theUrl, options) => {
    try {
      setLoading(true);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = await fetch(theUrl, options);
      const responseJson = await response.json();

      setKembalian(responseJson);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    kembalian,
    dispatcher,
  };
};

export default useMutasi;
