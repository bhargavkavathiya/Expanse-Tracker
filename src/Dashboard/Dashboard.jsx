import React, { useState } from "react";
import LineChart from "../LineChart";
import { Data } from "../Data";
import { MdDelete } from 'react-icons/md';
import { FaMoneyBillWave } from 'react-icons/fa';
import { GiTakeMyMoney } from 'react-icons/gi';
import './Dashboard.css'
import { Button } from "@mui/material";
import { useGlobalContext } from "../Context/GlobalContext";
function Dashboard() {
    const [userData, setUserData] = useState({
        labels: Data.map((item) => item.date),
        datasets: [{
            label: "Income",
            data: Data.map((item) => item.income),
            backgroundColor: ['green'],
            borderColor: "green",
            borderWidth: 2,
        },
        {
            label: "expense",
            data: Data.map((item) => item.expance),
            backgroundColor: ['red'],
            borderColor: "red",
            borderWidth: 2,
        }]
    })

    const { TotalIncome, TotalExpance, getIncome, getExpance, TransactionHistory } = useGlobalContext();
    useState(() => {
        // TotalIncome();
        // TotalExpance();
        getIncome();
        getExpance();
    }, [])
    return (
        <>
            <div className="db_header">All Transactions</div>
            <div className="db_mainDiv">
                <div className="db_chart">
                    <LineChart chartData={userData} />
                </div>
                <div className="db_historyDiv">
                    <div className="db_header">Recent History</div>
                    {
                        TransactionHistory().map((item) => (
                            <div className="db_historyDivItem" style={{color:item.id==='inc'?'green':'red' ,borderColor:item.id=='inc'?'green':'red'}}>
                                {item.id==='inc'? 
                                <FaMoneyBillWave size={29} className="db_startItem" />:
                                <GiTakeMyMoney size={29} className="db_startItem" />
                            }
                                <span id="db_itemTitle">{item.title}</span>
                                <span id="db_endItem">{item.id=='inc'?'+':'-'}₹{item.amount}</span>
                            </div>
                        ))
                    }

                </div>
                <div className="db_span db_totalIncome"><span>Total Income</span><p>₹{TotalIncome()}</p></div>
                <div className="db_span db_totalexpense"><span>Total expense</span><p>₹{TotalExpance()}</p></div>
                <div className="db_span db_Total"><span>Total</span><p style={{ color: 'green' }}>₹{TotalIncome() - TotalExpance()}</p></div>
            </div>
        </>
    );
}
export default Dashboard;