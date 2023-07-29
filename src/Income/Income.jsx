import { Button, Select, TextField } from "@mui/material";
import React from "react";
import { MdDelete } from 'react-icons/md';
import { FaMoneyBillWave } from 'react-icons/fa';
import { GiTakeMyMoney } from 'react-icons/gi';
import { RxDotFilled } from 'react-icons/rx';
import './Income.css';
function Income() {
    return (
        <>
            <div className="inc_title">
                Incomes
            </div>
            <div className="inc_totalHead">
                Total Income: ₹1500
            </div>
            <div className="inc_parentDiv">
                <div className="inc_mainDiv">
                    <div className="inc_Div">
                        <TextField placeholder="Title" type="text" size="small" fullWidth />
                    </div>
                    <div className="inc_Div">
                        <TextField placeholder="Amount" type="number" size="small" fullWidth />
                    </div>
                    <div className="inc_Div">
                        <TextField placeholder="Date" type="Date" size="small" fullWidth />
                    </div>
                    <div className="inc_Div">
                        <TextField placeholder="Description" type="text" size="small" fullWidth />
                    </div>
                    <div className="inc_addBtn">
                        <Button variant="contained">Add Income</Button>
                    </div>
                </div>

                <div className="inc_historyDiv">
                    
                    <div className="inc_historyDivItem">
                        <FaMoneyBillWave size={29} className="inc_startItem" />
                        <span className="inc_IncomeTitle"><RxDotFilled color="green" size={25}/>From Freelance</span>
                        <span className="inc_IncomeAmount"><RxDotFilled color="green" size={25}/>₹10</span>
                        <span className="inc_IncomeDate"><RxDotFilled color="green" size={25}/>25/02/2003</span>
                        <span className="inc_IncomeDescription"><RxDotFilled color="green" size={25}/>This is description of Income </span>
                        <MdDelete size={29} className="inc_endItem" />
                    </div>
                    <div className="inc_historyDivItem">
                        <FaMoneyBillWave size={29} className="inc_startItem" />
                        <span className="inc_IncomeTitle"><RxDotFilled color="green" size={25}/>From Freelance</span>
                        <span className="inc_IncomeAmount"><RxDotFilled color="green" size={25}/>₹10</span>
                        <span className="inc_IncomeDate"><RxDotFilled color="green" size={25}/>25/02/2003</span>
                        <span className="inc_IncomeDescription"><RxDotFilled color="green" size={25}/>This is description of Income </span>
                        <MdDelete size={29} className="inc_endItem" />
                    </div>
                    <div className="inc_historyDivItem">
                        <FaMoneyBillWave size={29} className="inc_startItem" />
                        <span className="inc_IncomeTitle"><RxDotFilled color="green" size={25}/>From Freelance</span>
                        <span className="inc_IncomeAmount"><RxDotFilled color="green" size={25}/>₹10</span>
                        <span className="inc_IncomeDate"><RxDotFilled color="green" size={25}/>25/02/2003</span>
                        <span className="inc_IncomeDescription"><RxDotFilled color="green" size={25}/>This is description of Income </span>
                        <MdDelete size={29} className="inc_endItem" />
                    </div>
                    <div className="inc_historyDivItem">
                        <FaMoneyBillWave size={29} className="inc_startItem" />
                        <span className="inc_IncomeTitle"><RxDotFilled color="green" size={25}/>From Freelance</span>
                        <span className="inc_IncomeAmount"><RxDotFilled color="green" size={25}/>₹10</span>
                        <span className="inc_IncomeDate"><RxDotFilled color="green" size={25}/>25/02/2003</span>
                        <span className="inc_IncomeDescription"><RxDotFilled color="green" size={25}/>This is description of Income </span>
                        <MdDelete size={29} className="inc_endItem" />
                    </div>
                    <div className="inc_historyDivItem">
                        <FaMoneyBillWave size={29} className="inc_startItem" />
                        <span className="inc_IncomeTitle"><RxDotFilled color="green" size={25}/>From Freelance</span>
                        <span className="inc_IncomeAmount"><RxDotFilled color="green" size={25}/>₹10</span>
                        <span className="inc_IncomeDate"><RxDotFilled color="green" size={25}/>25/02/2003</span>
                        <span className="inc_IncomeDescription"><RxDotFilled color="green" size={25}/>This is description of Income </span>
                        <MdDelete size={29} className="inc_endItem" />
                    </div>
                     <div className="inc_historyDivItem">
                        <FaMoneyBillWave size={29} className="inc_startItem" />
                        <span className="inc_IncomeTitle"><RxDotFilled color="green" size={25}/>From Freelance</span>
                        <span className="inc_IncomeAmount"><RxDotFilled color="green" size={25}/>₹10</span>
                        <span className="inc_IncomeDate"><RxDotFilled color="green" size={25}/>25/02/2003</span>
                        <span className="inc_IncomeDescription"><RxDotFilled color="green" size={25}/>This is description of Income </span>
                        <MdDelete size={29} className="inc_endItem" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Income;