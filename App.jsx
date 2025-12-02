import React, { useEffect, useState } from "react";
import UserCard from "./components/UserCard";

const API_URL = "https://dummyjson.com/users?skip=0&limit=10";

function App() {
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    
    const ITEMS_PER_PAGE = 5;

    useEffect(()) => {
       fetch(API_URL)
       .then(res => res.json())
       .then(data => setUsers(data.users));
    
    },[]);
    const handleDelete = (id) => {
        setUsers(prev => prev.filter(u => u.id !== id));
    };
    const start = (page - 1)* ITEMS_PER_PAGE;
    const paginatedUsers = users.slice(start, start + ITEMS_PER_PAGE);

    return(
        <div style={StyleSheet.container}>
            <h1 style={StyleSheet.title}>Users Listing Page</h1>

            {paginatedUsers.map(user => (
                <UserCard key={user.id} user={user} onDelete={handleDelete} />

            ))}

            {/*Pagination*/}
            <div style={StyleSheet.pagination}>
                <button
                disabled={page === 1}
                onClick={() => setPage(p => p - 1)}
                style={StyleSheet.pageButton}>
                   Previous 
                </button>
                <span style={style.pageNumber}>
                    Page {page} of {Math.ceil(users.length / ITEMS_PER_PAGE)}

                </span>

                <button
                disabled={page === Math.ceil(users.length / ITEMS_PER_PAGE)}
                onClick={() => setPage(p => p + 1)}
                style={StyleSheet.pageButton}>
                    Next 
                </button>
            </div>
        </div>
    );

}

const styles = {
    container: {
        maxWidth:"600px",
        margin:"40px auto",
        fontFamily:"'Inter', sans-serif";
    },
    title:{
        fontSize:"28px",
        marginBottom:"25px",
        fontWeight:700,
    },
    pagination:{
        display:"flex",
        justifyContent:"space-between",
        marginTop:"20px",
        alignItems:"center",
        padding:"10px 0",
    },
    pageButton:{
        padding:"8px 16px",
        borderRadius:"8px",
        border:"1px solid #ccc",
        cursor:"pointer",
    },
    pageNumber:{
        fontSize:"14px",
        opacity:0.7,
    },
};

export default App;