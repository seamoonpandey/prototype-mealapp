import React from 'react'

function Navbar() {
    return (
        <div style={{ display: "inline-flex", backgroundColor: "grey", width: "100%" }}>
            <h2 >Sajilo meals</h2>
            <div style={{ padding: "auto", margin: "auto" }}>
                <a style={{ margin: "10px", color: "white" }}>Home</a>
                <a style={{ margin: "10px", color: "white" }}>Order</a>
                <a style={{ margin: "10px", color: "white" }}>Contact Us </a>
            </div>
        </div>
    )
}

export default Navbar