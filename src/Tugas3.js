import React from "react";


function Paragraf(props) {
    return<h1>{props.name}</h1>;
}

function Soal3() {
    return (
        <div>
            <Paragraf name="Ini contoh Paragraf menggunakan Props"/>
        </div>
    );
}

export default Soal3;