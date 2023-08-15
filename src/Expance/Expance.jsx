import React, { useEffect, useState } from "react";
import { Button, Select, TextField } from "@mui/material";
import { MdDelete } from 'react-icons/md';
import { GiTakeMyMoney } from 'react-icons/gi';
import { RxDotFilled } from 'react-icons/rx';
import './Expance.css';
import { useGlobalContext } from "../Context/GlobalContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Expance() {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');
    const { addExpance, getExpance, Expances, TotalExpance, DeleteExpance } = useGlobalContext();

    function onSubmit() {
        addExpance({ title, amount, date, description });
        setTitle('');
        setAmount('');
        setDate('');
        setDescription('');
        getExpance();
    }

    function deleteBtn(id) {
        DeleteExpance(id);
        getExpance();
    }

    useEffect(() => {
        getExpance();
    }, [Button]);

    return (
        <>
            <div className="exp_title">
                Expance
            </div>
            <div className="exp_totalHead">
                Total expense:₹{TotalExpance()}
            </div>
            <div className="exp_parentDiv">
                <div className="exp_mainDiv">
                    <div className="exp_Div">
                        <TextField placeholder="Title" type="text" size="small" fullWidth value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    <div className="exp_Div">
                        <TextField placeholder="Amount" type="number" size="small" fullWidth value={amount} onChange={(e) => setAmount(e.target.value)}/>
                    </div>
                    <div className="exp_Div">
                        <DatePicker selected={date} onChange={(date) => setDate(date)} dateFormat="dd"/>
                        {/* <TextField placeholder="Date" type="Date" size="small" fullWidth value={date} onChange={(e) => setDate(e.target.value)}/> */}
                    </div>
                    <div className="exp_Div">
                        <TextField placeholder="Description" type="text" size="small" fullWidth value={description} onChange={(e) => setDescription(e.target.value)}/>
                    </div>
                    <div className="exp_addBtn">
                        <Button variant="contained" onClick={() => onSubmit()}>Add expense</Button>
                    </div>
                </div>

                <div className="exp_historyDiv">
                    {
                        Expances.map((item) => (
                            <div className="exp_historyDivItem">
                                <GiTakeMyMoney size={29} className="exp_startItem" />
                                <span className="exp_IncomeTitle"><RxDotFilled color="red" size={25} />{item.title}</span>
                                <span className="exp_IncomeAmount"><RxDotFilled color="red" size={25} />₹{item.amount}</span>
                                <span className="exp_IncomeDate"><RxDotFilled color="red" size={25} />{item.date}</span>
                                <span className="exp_IncomeDescription"><RxDotFilled color="red" size={25} />{item.description} </span>
                                <MdDelete size={29} className="exp_endItem" onClick={() => deleteBtn(item._id)} />
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    );
}
export default Expance;