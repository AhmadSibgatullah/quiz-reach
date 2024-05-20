import React, { useState } from "react";

const From = () => {
    const [inputValue, setInputValue] = useState("");

    const handleIncrement = (event) => {
        setInputValue(event.target.value);
    };
    const handleSubmit = (event) => {
        alert(`Masukkan Input ${inputValue}`);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Input nilai atau Variable :
                    <input type="text " value={inputValue} onChange={handleSubmit} />
                </label>
                <button type="Submit">Submit</button>
            </form>
            <p>Hasil akan menampilkan : {inputValue}</p>
        </>
    )
};

export default From;
