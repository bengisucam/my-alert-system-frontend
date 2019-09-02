import React, {Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import './ListTable.css';
import DeleteIcon from "@material-ui/icons/DeleteForever";
import ViewIcon from "@material-ui/icons/Search";
import ChartTable from "./ChartTable";
import FormTable from "./FormTable";





class ListTable extends Component {

    constructor(props){

        super(props);

        this.state = {
            alerts: [],
            selectedId: null
        }
    }

    handleAdd = (obj) => {
        let alerts = [...this.state.alerts];
        alerts.push(obj);
        this.setState({alerts: alerts});
    }

    handleDelete = (id) => {
        const url= "http://localhost:8080/deleteAlert/" + id;
        fetch(url,
            {
                method: "DELETE"
            }).then((response) => {
                console.log(response);
                if(response.status == 200){

                    console.log('removed alertId', id);
                    let alerts = [...this.state.alerts];
                    let newAlerts = alerts.filter((element) => {
                        return element.alertId != id;
                    });
                    let selectedId = this.state.selectedId
                    if(id == selectedId){
                        selectedId = null;
                    }
                    this.setState({alerts: newAlerts, selectedId: selectedId});
                }
        })
        .catch(err => {
            console.error(err)}
        );
    };

    handleViewChart = (id) => {
        this.setState({selectedId: id});
        const url= "http://localhost:8080/getSingleAlert/" + id;
        fetch(url,
            {
                method: "GET"
            }).then(response => response.json())
            .catch(err => {
                console.error(err)});
        console.log('chart is visible for alertId:  ', id);
    };

    componentDidMount() {

        const url= "http://localhost:8080/getAlerts";
        fetch(url,
            {
            method: "GET"
            }).then( response => response.json())
                .then(alerts =>{
                this.setState({alerts: alerts});
                })
            .catch(error => {console.log("error:", error)})
    };



    static defaultProps= {
        maxHeight: 50 ,
        maxWidth: 300,
        width: 100,
        style:{
            textAlign: "center",
            color: "#22262a",
            fontFamily: "sans-serif",
            fontWeight: "bold"

        }

    }

    render() {
        const columns= [

            {
                Header: "ID",
                accessor: "alertId",
                style: this.props.style,
                width: this.props.width,
                maxWidth:this.props.maxWidth,
                minWidth: this.props.minWidth
            },
            {
                Header: "Alert Name" ,
                accessor: "name",
                style: this.props.style,
                width: this.props.width,
                maxWidth:this.props.maxWidth,
                minWidth: this.props.minWidth,
            },
            {
                Header: "Url",
                accessor: "url",
                sortable: false,
                filterable: false,
                style: this.props.style,
                width: 300,
                maxWidth:500,
                minWidth: 300
            },
            {
                Header: "Http Method",
                accessor: "httpMethod",
                style: this.props.style,
                width:this.props.width,
                maxWidth:this.props.maxWidth,
                minWidth: this.props.minWidth

            },
            {
                Header: "Control Period",
                accessor: "controlPeriod",
                style: this.props.style,
                width:this.props.width,
                maxWidth:this.props.maxWidth,
                minWidth: this.props.minWidth

            },
            {
                Header: "View Chart",
                Cell: props =>{
                    return(
                        <div>
                            <ViewIcon style={{ /*backgroundColor: "rgba(75,192,192,0.3)",
                                            border: "0.5px solid #4b555d",
                                            borderRadius: 10000,*/

                                width: 30,
                                height: 25,
                                color:"#53e3d4",

                            }} className="viewChart"
                                        onClick={() => {
                                            this.handleViewChart(props.original.alertId);
                                        }}
                            >View Chart</ViewIcon>
                        </div>


                    )
                },
                sortable: false,
                filterable: false,
                width: 100,
                maxWidth:100,
                minWidth: 100,

            },
            {
                Header: "Delete",
                // accessor: "delete",

                Cell: props =>{
                    return(
                        <div>
                            <DeleteIcon style={{ /*backgroundColor: "rgba(75,192,192,0.3)",
                                            border: "0.5px solid #4b555d",
                                            borderRadius: 10000,*/

                                width: 30,
                                height: 25,
                                color:"red",

                            }} className="delete"
                                        onClick={() => {
                                            this.handleDelete(props.original.alertId);  // or alert or name ????
                                        }}
                            >Delete</DeleteIcon>
                        </div>


                    )
                },
                sortable: false,
                filterable: false,
                width: 100,
                maxWidth:100,
                minWidth: 100,

            }
        ];

        let chartTable = this.state.selectedId ? <ChartTable id={this.state.selectedId} ></ChartTable> : null;

        return (
            <div className="wrapper">
                <FormTable handleAdd={this.handleAdd} ></FormTable>
                <div className="list-wrapper" >
                    <ReactTable
                        columns={columns}
                        data={this.state.alerts}
                        filterable
                        defaultPageSize={10}
                        pageSizeOptions={[5,10,15,25]}

                    />
                </div>

                {chartTable}

            </div>

        )
    }
}

export default ListTable;