import React, {useState} from "react";
import { collection, addDoc} from 'firebase/firestore';
import { db } from "../FirebaseConfig";


const Expenses = () => {
    const [expenses, setExpense] = useState({ amount:'',description:'',category:'',date:''});

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addDoc(collection(db, 'expenses'), expenses);
        setExpense({ amount:'', description:'',category:'',date:''})
    }

    return (
        <div>
            <h1>Expenses</h1>
            <form onSubmit={handleSubmit}>
                <input type="number"
                placeholder="Amount"
                value={expenses.amount}
                onChange={(e) => setExpense({...expenses,description:e.target.value})}required/>

                <input type="text"
                placeholder="Description"
                value={expenses.description}
                onChange={(e) => setExpense({...expenses,category:e.target.value})}required/>

                <input type="text"
                placeholder="Category"
                value={expenses.category}
                onChange={(e) => setExpense({...expenses,category:e.target.value})}required/>

                <input type="data"
                value={expenses.date}
                onChange={(e) => setExpense({...expenses,data:e.target.value})}required />

                <button type="Submit">Add Expenses</button>
            </form>
        </div>
    );
};


export default Expenses