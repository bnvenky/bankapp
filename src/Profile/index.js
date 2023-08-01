import { useEffect, useState, useCallback } from "react";
import Cookies from "js-cookie";
import Headers from "../Headers";
import Navigation from "../Navigation";
import GroupAvatars from "./avatar";
import "./index.css";

const Profile = () => {
  const [data, setData] = useState("");
  const cookie = Cookies.get("id");
  // eslint-disable-next-line
  const getApi = useCallback(async () => {
    try {
      const response = await fetch(
        `https://bursting-gelding-24.hasura.app/api/rest/profile`,
        {
          mode: "cors",
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "x-hasura-admin-secret":
              "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
            "x-hasura-role": "user",
            "x-hasura-user-id": cookie,
          },
        }
      );
      const data = await response.json();
      const { users } = data;
      const profiledata = users[0];
      localStorage.setItem("user", JSON.stringify(profiledata));
      setData(profiledata);
      console.log(profiledata);
    } catch (error) {
      console.log(error);
    }
  }, [cookie]);

  useEffect(() => {
    getApi();
  }, [getApi]);

  return (
    <div style={{ display: "flex" }}>
      <div>
        <Headers />
      </div>
      <div>
        <Navigation />
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div style={{ marginLeft: "50px" }}>
            <GroupAvatars />
          </div>
          <div>
            <h1 className="head" style={{ marginTop: "48px" }}>
              Your Name
            </h1>
            <input
              value={data.name}
              style={{
                width: "318px",
                height: "25px",
                borderRadius: "5px",
              }}
              type="text"
            />

            <h1 className="head" style={{ marginTop: "20px" }}>
              Email
            </h1>
            <input
              value={data.email}
              style={{
                width: "318px",
                height: "25px",
                borderRadius: "5px",
              }}
              type="email"
            />

            <h1 className="head" style={{ marginTop: "20px" }}>
              Date of Birth
            </h1>
            <input
              value={data.date_of_birth}
              style={{
                width: "318px",
                height: "25px",
                borderRadius: "5px",
              }}
              type="text"
            />

            <h1 className="head" style={{ marginTop: "20px" }}>
              Permanent Adress
            </h1>
            <input
              value={data.permanent_adress}
              style={{
                width: "318px",
                height: "25px",
                borderRadius: "5px",
              }}
              type="text"
            />

            <h1 className="head" style={{ marginTop: "20px" }}>
              Postal Code
            </h1>
            <input
              value={data.postal_code}
              style={{
                width: "318px",
                height: "25px",
                borderRadius: "5px",
              }}
              type="text"
            />
          </div>
          <div style={{ marginLeft: "150px" }}>
            <h1 className="head" style={{ marginTop: "48px" }}>
              User Name
            </h1>
            <input
              value={data.email}
              style={{
                width: "318px",
                height: "25px",
                borderRadius: "5px",
              }}
              type="text"
            />

            <h1 className="head" style={{ marginTop: "20px" }}>
              Password
            </h1>
            <input
              value="********"
              style={{
                width: "318px",
                height: "25px",
                borderRadius: "5px",
              }}
              type="email"
            />

            <h1 className="head" style={{ marginTop: "20px" }}>
              Present Adress
            </h1>
            <input
              value={data.present_adress}
              style={{
                width: "318px",
                height: "25px",
                borderRadius: "5px",
              }}
              type="text"
            />

            <h1 className="head" style={{ marginTop: "20px" }}>
              City
            </h1>
            <input
              value={data.City}
              style={{
                width: "318px",
                height: "25px",
                borderRadius: "5px",
              }}
              type="text"
            />

            <h1 className="head" style={{ marginTop: "20px" }}>
              Country
            </h1>
            <input
              value={data.Country}
              style={{
                width: "318px",
                height: "25px",
                borderRadius: "5px",
              }}
              type="text"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
