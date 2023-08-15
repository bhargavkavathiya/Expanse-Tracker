import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { MdDelete } from 'react-icons/md';
import { FaMoneyBillWave } from 'react-icons/fa';
import { RxDotFilled } from 'react-icons/rx';
import axios from 'axios';
import './Income.css';
import { useGlobalContext } from "../Context/GlobalContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
function Income() {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    const { addIncome, getIncome, Incomes,TotalIncome,DeleteIncome} = useGlobalContext();


    function onSubmit(){
        addIncome({ title, amount, date, description});
        setTitle('');
        setAmount('');
        setDate('');
        setDescription('');
        getIncome();
    }

    function deleteBtn(id){
        DeleteIncome(id);
        getIncome();
    }

    useEffect(()=>{
        getIncome();
    }, []);




    return (
        <>
            <div className="inc_title">
                Income
            </div>
            <div className="inc_totalHead">
                Total Income: ₹{TotalIncome()}
            </div>
            <div className="inc_parentDiv">
                <div className="inc_mainDiv">
                    <div className="inc_Div">
                        <TextField placeholder="Title" type="text" size="small" fullWidth value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="inc_Div">
                        <TextField placeholder="Amount" type="number" size="small" fullWidth value={amount} onChange={(e) => setAmount(e.target.value)} />
                    </div>
                    <div className="inc_Div">
                        <DatePicker selected={date} onChange={(date) => setDate(date)} />
                        {/* <TextField placeholder="Date" type="Date" size="small" fullWidth value={date} onChange={(e) => setDate(e.target.value)} /> */}
                    </div>
                    <div className="inc_Div">
                        <TextField placeholder="Description" type="text" size="small" fullWidth value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className="inc_addBtn">
                        <Button variant="contained" onClick={()=>onSubmit()}>Add Income</Button>
                    </div>
                </div>

                <div className="inc_historyDiv">

                    {
                        Incomes.map((item,i) => (
                            <div className="inc_historyDivItem" key={i}>
                                <FaMoneyBillWave size={29} className="inc_startItem" />
                                <span className="inc_IncomeTitle"><RxDotFilled color="green" size={25} />{item.title}</span>
                                <span className="inc_IncomeAmount"><RxDotFilled color="green" size={25} />₹{item.amount}</span>
                                <span className="inc_IncomeDate"><RxDotFilled color="green" size={25} />{item.date}</span>
                                <span className="inc_IncomeDescription"><RxDotFilled color="green" size={25} />{item.description}</span>
                                <MdDelete size={29} className="inc_endItem" onClick={()=>deleteBtn(item._id)}/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
}
export default Income;