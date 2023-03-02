import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

function Home() {
  const [details, setDetails] = useState(false);
  const [values, setValue] = useState();
  const addressTypeOptions = [
    { value: "HOME", label: "HOME", endPoint: "/hsjdbbs" },
    { value: "BUSINESS", label: "BUSINESS", endPoint: "/hsjdbbs" },
    { value: "SHIPPING", label: "SHIPPING", endPoint: "/hsjdbbs" },
    { value: "BILLING", label: "BILLING", endPoint: "/hsjdbbs" },
  ];
  const getValue = () => {
    let details = document.getElementById("select").value;
    {
      (() => {
        switch (details) {
          case "link1":
            return alert("link1");
          case "link2":
            return alert("link2");
          case "link3":
            return alert("link3");
          case "link4":
            return alert("link4");
          default:
            return null;
        }
      })();
    }
    console.log("value", details);
    // AlertData(value, endPoint);
    // setDetails(true);
  };

  const AlertData = (value, endPoint) => {
    return (
      <div style={{ marginTop: "50px" }}>
        <h2>{value}</h2>
        <h2>{endPoint}</h2>
        <h2>text</h2>
        <PhoneInput
          placeholder="Enter phone number"
          value={values}
          onChange={setValue}
        />
        <h2>text</h2>
      </div>
    );
  };

  const SelectValue = () => {
    return (
      <div>
        <select id="select" onChange={() => getValue()}>
          <option>Select a value</option>
          <option value="link1"> link1 </option>
          <option value="link2"> link2 </option>
          <option value="link3"> link3 </option>
          <option value="link4"> link4 </option>
          <option value="link5"> link5 </option>
        </select>
      </div>
    );
  };

  console.log(values);

  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/page");
        }}
      >
        hello
      </button>
      {/* <div className="dropdown">
        <button className="dropbtn">Dropdown</button>
        <div className="dropdown-content">
          {addressTypeOptions.map((e) => {
            return (
              <li onClick={() => getValue(e.value, e.endPoint)}>{e.label}</li>
            );
          })}
        </div>
      </div> */}
      <SelectValue />
      {/* <PhoneInput
        placeholder="Enter phone number"
        value={values}
        onChange={setValue}
      /> */}
    </div>
  );
}

export default Home;
