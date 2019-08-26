import React , {Component} from "react";
import { Bar, Line, Pie } from 'react-chartjs-2';
import './ChartTable.css';



class ChartTable extends Component {

    constructor(props){
        super(props);
        this.state= {
            chartData: {
                labels: ['1', '2', '3', '4', '5'],
                datasets: [
                    {
                        label: 'succeed',
                        data: [1, 0, 1, 1, 0],
                        //backgroundColor: gradient,
                        borderWidth: 4,
                        fill: true,
                        pointBorderColor: "#258ea6",
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointRadius: 2,
                        pointHitRadius: 10,
                        backgroundColor: 'rgba(75,192,192,0.1)',
                        borderColor: '#53e3d4',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        lineTension: 0.1,

                    }
                ]

            }
        }
    }

    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        legendPosition: "right",
        legendColorBackground: "#258ea6",

    }

    render(){
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
                                    text: 'Custom Chart Title',
                                    fontSize: 30,

                                },
                                legend:{
                                    backgroundColor: this.props.legendColorBackground,
                                  display: this.props.displayLegend,
                                  position:this.props.legendPosition,
                                  labels:{
                                      fontColor: '#000',
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
                                maintainAspectRatio: false
                            }}
                        />
                    </div>
                </div>
            </div>
        )

    }
}
export default ChartTable;