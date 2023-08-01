import React from "react";
import Cookies from "js-cookie";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
const Login = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const sux = (id) => {
    Cookies.set("id", id, { expires: 78 });
  };

  const submitted = async (event) => {
    event.preventDefault();

    //const uspas = { Email: name, Password: pass };
    // try {
    //     const response = await fetch(
    //         `https://bursting-gelding-24.hasura.app/api/rest/get-user-id`, {
    //         mode: "cors",
    //         method: "POST",
    //         headers: {
    //             "Content-type": "application/json",
    //             "x-hasura-admin-secret": "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzY",
    //             "x-hasura-role": "admin"
    //         },
    //         body:JSON.stringify({Email: name, Password: pass})
    //     }
    //     );
    //     const data = await response.json();
    //     console.log('data', data);
    // } catch (error) {

    // }
    try {
      const response = await fetch(
        `https://bursting-gelding-24.hasura.app/api/rest/get-user-id?email=${name}&password=${pass}`,
        {
          mode: "cors",
          method: "POST",
          headers: {
            "Content-type": "application/json",
            "x-hasura-admin-secret":
              "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
          },
        }
      );
      const data = await response.json();
      console.log("data", data);
      const { get_user_id } = data;

      const { id } = get_user_id[0];
      //console.log(id);

      if (id !== undefined) {
        sux(id);
        navigate("/profile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const inpt = (e) => {
    setName(e.target.value);
  };

  const pt = (e) => {
    setPass(e.target.value);
  };
  // useEffect(()=>{
  //     if(id!==undefined)return;

  // },[id])
  return (
    <form
      onSubmit={submitted}
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          border: "1px solid black",
          height: "250px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            marginLeft: "20px",
            marginTop: "31px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <img src={logo} alt="logo" style={{ marginRight: "10px" }} />
          <span className="title">Money</span>
          <span className="title" style={{ color: "#02969C" }}>
            Matters
          </span>
        </div>
        <div style={{ margin: "25px" }}>
          <label style={{ marginRight: "10px" }}>Email</label>
          <input onChange={inpt} type="text" />
        </div>
        <div style={{ margin: "25px" }}>
          <label style={{ marginRight: "10px" }}>Password</label>
          <input onChange={pt} type="password" />
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            style={{
              backgroundColor: "green",
              color: "white",
              padding: "10px",
              border: "1px solid white",
              borderRadius: "10px",
            }}
            type="submit"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
