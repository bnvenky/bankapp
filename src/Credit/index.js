import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import Headers from "../Headers";
import Navigation from "../Navigation";

const Credit = () => {
  const [transact, setTransact] = useState([""]);

  const response = useCallback(async () => {
    const cookie = Cookies.get("id");
    const url =
      "https://bursting-gelding-24.hasura.app/api/rest/all-transactions?limit=10&offset=2";
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
    const filterdata = transactions.filter((e) => e.type === "credit");
    console.log("credit", filterdata);
    setTransact(filterdata);
  }, []);

  useEffect(() => {
    response();
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
            <h1 style={{ marginLeft: "40px" }}>Credit</h1>
            <Link to="/debit">
              {" "}
              <h1 style={{ marginLeft: "40px" }}>Debit</h1>
            </Link>
          </div>
          <div style={{ marginLeft: "80px", width: "1170px" }}>
            <table>
              <tr style={{ width: "100%" }}>
                <th>Transaction Name</th>
                <th style={{ marginLeft: "1540px" }}>Category</th>
                <th style={{ marginLeft: "540px" }}>Date</th>
                <th>Amount</th>
              </tr>
              {transact.map((each) => {
                const { amount, transaction_name, category, date } = each;
                return (
                  <tr key={transaction_name}>
                    <td>{transaction_name}</td>
                    <td>{category}</td>
                    <td>{date}</td>
                    <td>{amount}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Credit;
