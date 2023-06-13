import { useState } from "react";

// eslint-disable-next-line react/prop-types
const HalamanKedua = ({ dataDariFetcher }) => {
  const [valueInput, setValueInput] = useState(dataDariFetcher ?? "");

  return (
    <>
      <h1>Halo Dunia Dari Router - Halaman Kedua</h1>
      <form>
        <input
          type="text"
          placeholder="Iseng Aja"
          value={valueInput}
          onChange={(event) => setValueInput(event.target.value)}
        />
      </form>
    </>
  );
};

export default HalamanKedua;
