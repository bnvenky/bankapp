import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Profile from "./Profile";
import Admin from "./Admin";
import Dashboard from "./Dashboard";
import Transaction from "./Transaction";
import Credit from "./Credit";
import Debit from "./Debit";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/admin" element={<Admin />}></Route>
          <Route exact path="/dashboard" element={<Dashboard />}></Route>
          <Route exact path="/transaction" element={<Transaction />}></Route>
          <Route exact path="/credit" element={<Credit />}></Route>
          <Route exact path="/debit" element={<Debit />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
