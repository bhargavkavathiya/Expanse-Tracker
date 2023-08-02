import { createContext, useContext, useEffect, useState } from "react";
import axios from 'axios';
const BASE_URL = "http://localhost:5000/api";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
    const [Incomes, setIncomes] = useState([]);
    const [Expances, setExpances] = useState([]);



    function addIncome(income){
        const responce=axios.post('http://localhost:5000/api/add-income',income).catch((err)=>{
            console.log(err);
           });  
           console.log("Added")
    };

    function getIncome(){
        axios.get('http://localhost:5000/api/get-income').then((res) => {
            setIncomes(res.data);
            console.log("RESU",res.data);
        });
    }

    function TotalIncome(){
        var TotalInc=0;
        Incomes.map((item)=>(
            TotalInc=TotalInc+item.amount
        ));
        return TotalInc;
    }
    function DeleteIncome(id){
        axios.delete(`http://localhost:5000/api/delete-income/${id}`).then((res)=>{
            getIncome();
            console.group("DELETE");
        }).catch((err)=>{
            console.log(err);
        });
    }





    function addExpance(expance){
        const responce=axios.post('http://localhost:5000/api/add-expance',expance).catch((err)=>{
            console.log(err);
           });  
           console.log("Added")
    };

    function getExpance(){
        axios.get('http://localhost:5000/api/get-expance').then((res) => {
            setExpances(res.data);
            console.log("RESU",res.data);
        });
    }

    function TotalExpance(){
        var TotalExp=0;
        Expances.map((item)=>(
            TotalExp=TotalExp+item.amount
        ));
        return TotalExp;
    }

    function DeleteExpance(id){
        axios.delete(`http://localhost:5000/api/delete-expance/${id}`).then((res)=>{
            getExpance();
            console.group("DELETE");
        }).catch((err)=>{
            console.log(err);
        });
    }

    function TransactionHistory(){
        const history=[...Incomes,...Expances];
        return history;
    }


    return (
        <GlobalContext.Provider value={{
            addIncome,
            getIncome,
            Incomes,
            TotalIncome,
            DeleteIncome,
            addExpance,
            getExpance,
            Expances,
            TotalExpance,
            DeleteExpance,
            TransactionHistory

        }}>
            {children}
        </GlobalContext.Provider>
    )
}


export const useGlobalContext=()=>{
    return useContext(GlobalContext);
}