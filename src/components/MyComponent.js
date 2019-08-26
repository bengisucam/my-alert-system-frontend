import React, {Component} from 'react'; import {Line} from 'react-chartjs-2';
class MyComponent extends Component {
    state = {
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [65, 59, 80, 81, 56, 55, 40]
                }             ]         }     };
    componentDidMount(){
        setInterval(() => {

            let newData = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'My First dataset',
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderDashOffset: 0.0,
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: 1,
                        pointHitRadius: 10,
                        data: [Math.floor(Math.random() * 100),
                            Math.floor(Math.random() * 100),
                            Math.floor(Math.random() * 100),
                            Math.floor(Math.random() * 100),
                            Math.floor(Math.random() * 100),
                            Math.floor(Math.random() * 100),
                            Math.floor(Math.random() * 100)]
                    }
                ]
            };

            this.setState({data: newData});
        }, 1000);
    };

    render() {
        return (
            <div>
                <div className="wrapper">
                    <div className="chart-wrapper">
                        <h2>Line Example</h2>
                        <Line data={this.state.data} />
                    </div>
                </div>
            </div>
        );
    }
};

export default MyComponent;