import React, {Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import './ListTable.css';
import DeleteIcon from "@material-ui/icons/DeleteForever";




class ListTable extends Component {

    constructor(props){

        super(props);

        this.state = {
            alerts: []
        }

    }

    handleDelete = (id) => {
        const url= "http://localhost:8080/alerts/" + id;
        fetch(url,
            {
                method: "DELETE"
            }).then(response => response.json())
            .catch(err => {
            console.error(err)});
        console.log('removed alertId', id);
    };

    componentDidMount() {

        const url= "http://localhost:8080/alerts";
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
                Header: "Submit Date",
                accessor: "submitDate",
                style: this.props.style,
                width: 200,
                maxWidth:400,
                minWidth: 400

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
                                            fontWeight: "normal"
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

        return (
            <div className="wrapper">
                <div className="list-wrapper" >
                    <ReactTable
                        columns={columns}
                        data={this.state.alerts}
                        filterable
                        defaultPageSize={10}
                        pageSizeOptions={[5,10,15,25]}

                    />
                </div>


            </div>

        )
    }
}

export default ListTable;