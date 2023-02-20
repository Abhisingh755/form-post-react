import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h2>FORM POST</h2>
      <form action="http://techs-mbp:3001/" method="post">
        <input type="text" name="name" />
        <input type="text" name="email" />
        <input type="text" name="password" />
        <input type="submit" />
      </form>
      <button
        onClick={() => {
          navigate("/page");
        }}
      >
        hello
      </button>
    </div>
  );
}

export default Home;
