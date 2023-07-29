import React from "react";
import { Button, Select, TextField } from "@mui/material";
import { MdDelete } from 'react-icons/md';
import { GiTakeMyMoney } from 'react-icons/gi';
import { RxDotFilled } from 'react-icons/rx';
import './Expance.css';
function Expance() {
    return (
        <>
            <div className="exp_title">
                Expances
            </div>
            <div className="exp_totalHead">
                Total Expance:-₹1500
            </div>
            <div className="exp_parentDiv">
                <div className="exp_mainDiv">
                    <div className="exp_Div">
                        <TextField placeholder="Title" type="text" size="small" fullWidth />
                    </div>
                    <div className="exp_Div">
                        <TextField placeholder="Amount" type="number" size="small" fullWidth />
                    </div>
                    <div className="exp_Div">
                        <TextField placeholder="Date" type="Date" size="small" fullWidth />
                    </div>
                    <div className="exp_Div">
                        <TextField placeholder="Description" type="text" size="small" fullWidth />
                    </div>
                    <div className="exp_addBtn">
                        <Button variant="contained">Add Expance</Button>
                    </div>
                </div>

                <div className="exp_historyDiv">
                    
                    <div className="exp_historyDivItem">
                        <GiTakeMyMoney size={29} className="exp_startItem" />
                        <span className="exp_IncomeTitle"><RxDotFilled color="red" size={25}/>For Netflix Subscription</span>
                        <span className="exp_IncomeAmount"><RxDotFilled color="red" size={25}/>₹10</span>
                        <span className="exp_IncomeDate"><RxDotFilled color="red" size={25}/>25/02/2003</span>
                        <span className="exp_IncomeDescription"><RxDotFilled color="red" size={25}/>This is description of Expance </span>
                        <MdDelete size={29} className="exp_endItem" onClick={()=>alert('Delete')}/>
                    </div>
                    <div className="exp_historyDivItem">
                        <GiTakeMyMoney size={29} className="exp_startItem" />
                        <span className="exp_IncomeTitle"><RxDotFilled color="red" size={25}/>For Netflix Subscription</span>
                        <span className="exp_IncomeAmount"><RxDotFilled color="red" size={25}/>₹10</span>
                        <span className="exp_IncomeDate"><RxDotFilled color="red" size={25}/>25/02/2003</span>
                        <span className="exp_IncomeDescription"><RxDotFilled color="red" size={25}/>This is description of Expance </span>
                        <MdDelete size={29} className="exp_endItem" />
                    </div>
                    <div className="exp_historyDivItem">
                        <GiTakeMyMoney size={29} className="exp_startItem" />
                        <span className="exp_IncomeTitle"><RxDotFilled color="red" size={25}/>For Netflix Subscription</span>
                        <span className="exp_IncomeAmount"><RxDotFilled color="red" size={25}/>₹10</span>
                        <span className="exp_IncomeDate"><RxDotFilled color="red" size={25}/>25/02/2003</span>
                        <span className="exp_IncomeDescription"><RxDotFilled color="red" size={25}/>This is description of Expance </span>
                        <MdDelete size={29} className="exp_endItem" />
                    </div>
                    <div className="exp_historyDivItem">
                        <GiTakeMyMoney size={29} className="exp_startItem" />
                        <span className="exp_IncomeTitle"><RxDotFilled color="red" size={25}/>For Netflix Subscription</span>
                        <span className="exp_IncomeAmount"><RxDotFilled color="red" size={25}/>₹10</span>
                        <span className="exp_IncomeDate"><RxDotFilled color="red" size={25}/>25/02/2003</span>
                        <span className="exp_IncomeDescription"><RxDotFilled color="red" size={25}/>This is description of Expance </span>
                        <MdDelete size={29} className="exp_endItem" />
                    </div>
                    <div className="exp_historyDivItem">
                        <GiTakeMyMoney size={29} className="exp_startItem" />
                        <span className="exp_IncomeTitle"><RxDotFilled color="red" size={25}/>For Netflix Subscription</span>
                        <span className="exp_IncomeAmount"><RxDotFilled color="red" size={25}/>₹10</span>
                        <span className="exp_IncomeDate"><RxDotFilled color="red" size={25}/>25/02/2003</span>
                        <span className="exp_IncomeDescription"><RxDotFilled color="red" size={25}/>This is description of Expance </span>
                        <MdDelete size={29} className="exp_endItem" />
                    </div>
                     <div className="exp_historyDivItem">
                        <GiTakeMyMoney size={29} className="exp_startItem" />
                        <span className="exp_IncomeTitle"><RxDotFilled color="red" size={25}/>For Netflix Subscription</span>
                        <span className="exp_IncomeAmount"><RxDotFilled color="red" size={25}/>₹10</span>
                        <span className="exp_IncomeDate"><RxDotFilled color="red" size={25}/>25/02/2003</span>
                        <span className="exp_IncomeDescription"><RxDotFilled color="red" size={25}/>This is description of Expance </span>
                        <MdDelete size={29} className="exp_endItem" />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Expance;