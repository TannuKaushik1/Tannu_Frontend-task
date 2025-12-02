import React from "react";

const UserCard = ({user, onDelete}) =>{
    return(
        <div style={styles.card}>
            <img src={user.image} alt="profile" style={styles.avatar} />
        <div>
        <h3 style={styles.name}>{user.firstName}</h3>
        <p style={styles.email}>{user.email}</p>
        </div>

        <button onClick={() => onDelete(user.id)} style={styles.deleteBtn}>

        </button>
        </div>
    );
};

const styles = {
    card: {
        display:"flex",
        alignItems:"center",
        justifyContent:"space-between";
        padding:"15px 18px",
        background:"#fff",
        borderRadius:"15px",
        marginBottom:"14px",
        boxShadow:"0px 2px 6px rgba(0,0,0,0.1)",

    },
    avatar:{
        width:"50px",
        height:"50px",
        borderRadius:"50%",
        marginRight:"15px",
    },
    name:{
        margin:0,
        fontSize:"17px",

    },
    email:{
        margin:0,
        fontSize:"14px",
        color:"#666",
    },
    deleteBtn:{
        border:"none",
        background:"transparent",
        cursor:"pointer",
        fontSize:"20px",
    }
};

export default UserCard;