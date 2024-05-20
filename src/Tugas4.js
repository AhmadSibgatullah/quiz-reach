import React, {useState, useEffect} from "react";


function ClickCountWithEffect() {
    const [count, setCount] = useState(0);


    useEffect(() => {
        console.log (`Nilai state akan berubah apabila button di click ${count}`);
    }, [count]);

    return (
        <>
           <p>Nilai : {count}</p>
           <button onClick={() => setCount(count + 1)}>Tambah</button>
        </>
    );
}

export default ClickCountWithEffect;
