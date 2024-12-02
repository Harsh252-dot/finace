import React, {useState} from "react";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../FirebaseConfig';

const income = () => {
    const [income, setincome] = useState({amount:'',description:'',date:''})

    const handleSubmit = async (e) => {
        e.preventDefault();
        await addDoc(collection(db,'income'),income);
        setincome({amount:'',description:'',date:''})
    };
    return (
        <div>
            <h1>income</h1>
            <form onSubmit={handleSubmit}>
                <input type="number" 
                placeholder="Amount"
                value={income.amount}
                onChange={(e) => setincome({...income,amount:e.target.value})}required/>
                <input type="text"
                placeholder="Descripation"
                value={income.description}
                onChange={(e) => setincome({...income,description:e.target.value})}required/>
                <input type="data"
                value={income.date}
                onChange={setincome({...income,data:e.target.value})}required/>
                <button type="Submit">Add Income</button>
            </form>
        </div>
    )
};

export default income
