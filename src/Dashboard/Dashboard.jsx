import React, { useState } from "react";
import LineChart from "../LineChart";
import { Data } from "../Data";
import { MdDelete } from 'react-icons/md';
import { FaMoneyBillWave } from 'react-icons/fa';
import { GiTakeMyMoney } from 'react-icons/gi';
import './Dashboard.css'
import { Button } from "@mui/material";
function Dashboard() {
    const [userData, setUserData] = useState({
        labels: Data.map((item) => item.date),
        datasets: [{
            label: "Income",
            data: Data.map((item) => item.income),
            backgroundColor: ['green'],
            borderColor: "black",
            borderWidth: 2,
        },
        {
            label: "Expance",
            data: Data.map((item) => item.expance),
            backgroundColor: ['red'],
            borderColor: "black",
            borderWidth: 2,
        }]
    })
    return (
        <>
            <div className="db_header">All Transactions</div>
            <div className="db_mainDiv">
                <div className="db_chart">
                    <LineChart chartData={userData} />
                </div>
                <div className="db_historyDiv">
                <div className="db_header">Recent History</div>
                    <div className="db_historyDivItem">
                        <FaMoneyBillWave size={29} className="db_startItem" />
                        <span>My Income $10</span>
                        <MdDelete size={29} className="db_endItem" />
                    </div>
                    <div className="db_historyDivItem">
                        <GiTakeMyMoney size={29} className="db_startItem" />
                        <span>My Expance $10</span>
                        <MdDelete size={29} className="db_endItem" />
                    </div>
                    <div className="db_historyDivItem">
                        <FaMoneyBillWave size={29} className="db_startItem" />
                        <span>My Income $10</span>
                        <span>My Income $10</span>
                        <MdDelete size={29} className="db_endItem" />
                    </div>
                    <div className="db_historyDivItem">
                        <GiTakeMyMoney size={29} className="db_startItem" />
                        <span>My Expance $10</span>
                        <MdDelete size={29} className="db_endItem" />
                    </div>
                    <div className="db_historyDivItem">
                        <FaMoneyBillWave size={29} className="db_startItem" />
                        <span>My Income $10</span>
                        <MdDelete size={29} className="db_endItem" />
                    </div>
                    <div className="db_historyDivItem">
                        <GiTakeMyMoney size={29} className="db_startItem" />
                        <span>My Expance $10</span>
                        <MdDelete size={29} className="db_endItem" />
                    </div>
                    <div className="db_historyDivItem">
                        <FaMoneyBillWave size={29} className="db_startItem" />
                        <span>My Income $10</span>
                        <MdDelete size={29} className="db_endItem" />
                    </div>
                    
                </div>
                <div className="db_span db_totalIncome"><span>Total Income</span><p style={{color:'green'}}>$1000</p></div>
                <div className="db_span db_totalExpance"><span>Total Expance</span><p style={{color:'red'}}>$1000</p></div>
                <div className="db_span db_Total"><span>Total</span><p style={{color:'green'}}>$1000</p></div>
            </div>
        </>
    );
}
export default Dashboard;