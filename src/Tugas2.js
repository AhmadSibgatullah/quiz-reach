import React from "react";

class Soal2 extends React.Component {
    constructor() {
        super();
        this.state ={
            count:0
        };
    }
    componentDidMount(){
        console.log("Component Did Mount");
    }
    componentDidUpdate(){
        console.log("Component Did Update");
        if (this.state.count > 10) {
            console.log("State Count sudah lebih dari 10");
        }
    }
    handleIncrement = () => {
        this.setState(prevState => ({
            count: prevState.count + 1 
        }));
    }
    render() {
        return (
            <div className="counter-container">
                <p>Jumlah Klik: {this.state.count}</p>
                {this.state.count> 10 && <p className="warning"> State count sudah lebih dari 10</p>}
                <button onClick={this.handleIncrement}>Tambah</button>
            </div>
        );
    }
}

export default Soal2;