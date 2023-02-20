import React, { useEffect, useState } from "react";

const Page = () => {
  const [data, setData] = useState({});
  const payload = {};

  const getAllDetails = () => {
    fetch("http://localhost:3001/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    getAllDetails();
  }, []);
  console.log(data, "data");
  return (
    <div>
      <h2>Page</h2>
      {/* {data.map((e) => {
        <h2>{e[0]}</h2>;
      })} */}
    </div>
  );
};

export default Page;
