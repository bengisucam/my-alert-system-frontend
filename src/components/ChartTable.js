import React , {Component} from "react";
import { Bar, Line, Pie } from 'react-chartjs-2';
import nl2br from 'react-newline-to-break';
import './ChartTable.css';




class ChartTable extends Component {

    constructor(props){
        super(props);
        this.state= {
            chartData: {
                labels: [],
                datasets: [
                    {
                        label: 'succeed',
                        data: [],  // 0 or 1
                        //backgroundColor: gradient,
                        borderWidth: 4,
                        fill: true,
                        pointBorderColor: "#53e3d4",
                        pointBorderWidth: 1,
                        pointHoverRadius: 10,
                        pointRadius: 2,
                        pointHitRadius: 16,
                        backgroundColor: 'rgba(75,192,192,0.1)',
                        borderColor: '#53e3d4',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        lineTension: 0.1,
                        visibility: true,

                    }
                ]
            }
        }
    }

    componentDidMount() {

        console.log("did mount");
        let id = this.props.id;
        const url= "http://localhost:8080/getSingleAlert/" + id;
        fetch(url,
            {
                method: "GET"
            }).then( response => response.json())
            .then(alert =>{
                console.log(alert);
                // let listOfDates = alerts.map( (alert) => alert.submitDate);
                let listOfDates = alert.responses.map((res) => {
                    let time = new Date(res.responseTime);
                    return time.toLocaleTimeString();
                });
                let listOfResValues = alert.responses.map((res) => {
                    return res.responseValue;
                });
                //listOfDates = [1, 2,3, 5,6];
                console.log("list of dates :", listOfDates);
                console.log("list of res values : ", listOfResValues);

                let currentChartData = this.state.chartData;
                currentChartData.labels = listOfDates;
                currentChartData.datasets[0].data = listOfResValues;

                this.setState({chartData: currentChartData});
            })
            .catch(error => {console.log("error:", error)})
    };


    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: "right",
        legendColorBackground: "#258ea6",

    }

    render(){
        let today = new Date();
        return(
            <div className="wrapper">
                <div className="chart-wrapper">
                    <div className="chartTable">
                        <title> Chart Table </title>
                        <Line
                            data={this.state.chartData}
                            width={100}
                            height={500}
                            options={{
                                title: {
                                    display: this.props.displayTitle,
                                    text: "Alert's Response Chart   " + "Date : " + today.toLocaleDateString(),
                                    fontSize: 20,

                                },
                                legend:{
                                    backgroundColor: this.props.legendColorBackground,
                                  display: this.props.displayLegend,
                                  position:this.props.legendPosition,
                                  labels:{
                                      fontColor: '#22262a',
                                      fontSize: 20
                                  }
                                },
                                color: {
                                    display: this.props.backgroundColor
                                },
                                layout: {
                                    padding: {
                                        left: 0,
                                        right: 0,
                                        top: 0,
                                        bottom: 0
                                    }
                                },
                                maintainAspectRatio: false,

                            }}
                        />
                    </div>
                </div>
            </div>
        )

    }
}
export default ChartTable;