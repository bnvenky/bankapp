import React, { useEffect } from "react";
import plus from "../assets/plus.png";
import "./index.css";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Cookies from "js-cookie";
import useTransactionStore from "../store/useTransaction";

const Navigation = () => {
  const cookie = Cookies.get("id");

  // Initialize the state with the default values for the transaction object
  const {
    setTransactions,
    open,
    setOpen,
    name,
    setName,
    type,
    setType,
    category,
    setCategory,
    amount,
    setAmount,
    date,
    setDate,
  } = useTransactionStore();

  function onClickAddTransaction() {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  };

  const addTransactionApi = async () => {
    try {
      const transaction = {
        user_id: cookie,
        name,
        type,
        date,
        category,
        amount: parseFloat(amount),
      };

      const url =
        "https://bursting-gelding-24.hasura.app/api/rest/add-transaction?limit=10&offset=2";
      const data = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-hasura-admin-secret":
            "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
          "x-hasura-role": "user",
          "x-hasura-user-id": cookie,
        },
        body: JSON.stringify(transaction),
      });

      const dat = await data.json();
      console.log("add", dat);
      await getApi();
      //localStorage.setItem('transactions', JSON.stringify(transactions));
    } catch (e) {
      console.log(e);
    }
    setOpen(false);
  };
  // eslint-disable-next-line
  const getApi = async () => {
    try {
      const url =
        "https://bursting-gelding-24.hasura.app/api/rest/all-transactions";
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
      console.log("shsjs", dat);
      setTransactions(dat);
      //localStorage.setItem('transactions', JSON.stringify(transactions));
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getApi();
  }, [getApi]);
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "start",
          marginLeft: "100px",
        }}
      >
        <div>
          <h1>Accounts</h1>
        </div>
        <div onClick={onClickAddTransaction} style={{ marginLeft: "800px" }}>
          <button className="addTransaction">
            <img src={plus} alt="plus" />
            Add Transaction
          </button>
        </div>
      </div>
      {open && (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title"></DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <h1>Add Transaction</h1>
              <form
                style={{
                  height: "50vh",
                  width: "25vw",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                }}
              >
                <div style={{ margin: "5px" }}>
                  <label>Transaction Name</label>
                  <br />
                  <input
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: "200px",
                      padding: "10px",
                      borderRadius: "6px",
                    }}
                    type="text"
                  />
                </div>
                <div style={{ margin: "5px" }}>
                  <label htmlFor="type">Transaction Type</label>
                  <br />
                  <select
                    onChange={(e) => setType(e.target.value)}
                    id="type"
                    name="type"
                    style={{
                      width: "200px",
                      padding: "10px",
                      borderRadius: "6px",
                    }}
                  >
                    <option value="credit">credit</option>
                    <option value="debit">debit</option>
                  </select>
                </div>
                <div style={{ margin: "5px" }}>
                  <label>Category</label>
                  <br />
                  <select
                    onChange={(e) => setCategory(e.target.value)}
                    style={{
                      width: "200px",
                      padding: "10px",
                      borderRadius: "6px",
                    }}
                    id="type"
                    name="type"
                  >
                    <option value="shopping">Shopping</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="food">Food</option>
                  </select>
                </div>
                <div style={{ margin: "5px" }}>
                  <label>Amount</label>
                  <br />
                  <input
                    onChange={(e) => setAmount(e.target.value)}
                    style={{
                      width: "200px",
                      padding: "10px",
                      borderRadius: "6px",
                    }}
                    type="text"
                  />
                </div>
                <div style={{ margin: "5px" }}>
                  <label>Date</label>
                  <br />
                  <input
                    onChange={(e) => setDate(e.target.value)}
                    style={{
                      width: "200px",
                      padding: "10px",
                      borderRadius: "6px",
                    }}
                    type="date"
                  />
                </div>
              </form>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={addTransactionApi} autoFocus>
              Add Transaction
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </>
  );
};

export default Navigation;
