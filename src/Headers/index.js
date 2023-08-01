import { Link } from "react-router-dom"
import logo from '../assets/logo.png'
import profile from '../assets/profile.png'
import home from '../assets/home.png'
import Avatar from '../assets/Avatar.png'
import logout from '../assets/logout.png'
import transaction from '../assets/transaction.png'
import './index.css';
import { useEffect, useState } from "react"
import Cookies from "js-cookie"
import { useNavigate } from "react-router-dom";
const Headers = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({});
  useEffect(() => {
    const profile = JSON.parse(localStorage.getItem('user'));
    console.log('profile', profile)
    setData(profile);
  }, [])
  const handleRemove=()=>{
    Cookies.remove('id');
    navigate('/login');
  }
  return (
    <div style={{ height: "100vh", width: "213px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "space-between" }}>
      <div>
        <div style={{ marginLeft: "20px", marginTop: "31px", display: "flex", flexDirection: "row", alignItems: 'center' }}>
          <img src={logo} alt="logo" style={{ marginRight: "10px" }} />
          <span className="title">Money</span><span className="title" style={{ color: "#02969C" }}>Matters</span>
        </div>
        <Link Link to="/dashboard" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: 'center', marginTop: "69px" }}>
            <img src={home} alt="home" style={{ marginRight: "26px", marginLeft: "44px" }} />
            <h1 className="sidebar-title">Dashboard</h1>
          </div>
        </Link>
        <Link Link to="/transaction" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: 'center', marginTop: "40px" }}>
            <img src={transaction} alt="transaction" style={{ marginRight: "26px", marginLeft: "44px" }} />
            <h1 className="sidebar-title">Transaction</h1>
          </div>
        </Link>
        <Link Link to="/profile" style={{ textDecoration: "none" }}>
          <div style={{ display: "flex", flexDirection: "row", alignItems: 'center', marginTop: "40px" }}>
            <img src={profile} alt="profile" style={{ marginRight: "26px", marginLeft: "44px" }} />
            <h1 className="sidebar-title">Profile</h1>
          </div>
        </Link>
      </div>
      <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around" }}>
        <div style={{ marginRight: "5px" }}>
          <img src={Avatar} alt="Avatar" />
        </div>
        <div className="avatar" style={{ alignItems: "center" }}>
          <p style={{ margin: "0px", padding: "2px" }}>{data.name}</p>
          <p style={{ margin: "0px", padding: "2px" }}>{data.email}</p>
        </div>
        <div style={{ marginLeft: "10px" }}>
          <div onClick={handleRemove} stye={{cursor:"pointer"}}>
          <img src={logout} alt="logout" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Headers