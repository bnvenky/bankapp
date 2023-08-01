import React from 'react'
import Headers from '../Headers'
import Navigation from '../Navigation'
import creditpic from '../assets/creditpic.png'
const Dashboard = () => {
    return (
        <>

        <div style={{display:"flex"}}>
            <div>
                <Headers />
            </div>
            <div>
                <Navigation/>
                <div style={{display:"flex",  flexDirection:"row", justifyContent:"space-between"}}>
            <div>
                <span>1250</span>
                <img src={creditpic} alt="pic"/>
                <h1>Credit</h1>
            </div>
            <div>
                <span>1250</span>
                <img src={creditpic} alt="pic"/>
                <h1>Credit</h1>
            </div>
        </div>

            </div>
        </div>
        
        
        </>
        
        
    )
}

export default Dashboard