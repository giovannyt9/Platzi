import React from "react";

const HelloGio =  () => {
    const Hello = "Hello Gio HelloGio.jsx";
    const isTrue = true;
    return(
        <div className="HelloGioClass">
            <h1>{Hello}</h1>
            <h2>React Essential Course</h2>
            <img src="https://arepa.s3.amazonaws.com/react.png" alt="React"/>
            {isTrue ? <h4>This is true</h4> : <h5>This is false</h5>}
            {isTrue && <h4>This is true second h4</h4>}
        </div>
    );
}

export default HelloGio