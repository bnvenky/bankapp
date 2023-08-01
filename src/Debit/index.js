import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import Headers from "../Headers";
import Navigation from "../Navigation";

const Debit = () => {
  const [transact, setTransact] = useState([""]);
  const cookie = Cookies.get("id");
  // eslint-disable-next-line
  const response = async (url) => {
    const data = await fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret":
          "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
        "x-hasura-role": "user",
        "x-hasura-user-id": cookie,
      },
    });
    const dat = await data.json();
    // console.log(dat)
    const { transactions } = dat;
    const filterdata = transactions.filter((e) => e.type === "debit");
    console.log("debit", filterdata);
    setTransact(filterdata);
  };

  useEffect(() => {
    const url =
      "https://bursting-gelding-24.hasura.app/api/rest/all-transactions?limit=10&offset=2";
    response(url);
  }, [response]);

  return (
    <>
      <div style={{ display: "flex" }}>
        <div>
          <Headers />
        </div>
        <div>
          <Navigation />
          <div style={{ marginLeft: "40px", display: "flex" }}>
            <Link to="/transaction">
              <h1 style={{ marginLeft: "40px" }}>All Transactions</h1>
            </Link>
            <Link to="/credit">
              {" "}
              <h1 style={{ marginLeft: "40px" }}>Credit</h1>
            </Link>
            <h1 style={{ marginLeft: "40px" }}>Debit</h1>
          </div>
          <div style={{ marginLeft: "80px", width: "1170px" }}>
            <table>
              <tr style={{ width: "100%" }}>
                <th>Transaction Name</th>
                <th style={{ marginLeft: "1540px" }}>Category</th>
                <th style={{ marginLeft: "540px" }}>Date</th>
                <th>Ammount</th>
              </tr>
              <tr>
                {transact.map((each) => {
                  const { amount, transaction_name, category, date } = each;
                  return (
                    <div>
                      <td>{transaction_name}</td>,<td>{category}</td>,
                      <td>{date}</td>,<td>{amount}</td>
                    </div>
                  );
                })}
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Debit;
