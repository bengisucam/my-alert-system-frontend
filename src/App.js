import React , {Component} from "react";
import './App.css';
import ListTable from "./components/ListTable";
import ChartTable from "./components/ChartTable";
import FormTable from "./components/FormTable";

class App extends Component{

    constructor() {
        super();
        this.state = {
            chartData: {}
        }
    }



    render(){
        return (
            <div className="App">
                <ListTable></ListTable>


            </div>


        );

    }

}

export default App;
