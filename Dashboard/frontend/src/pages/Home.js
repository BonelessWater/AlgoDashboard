// src/pages/Home.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';

function Home() {
    // Create refs for each chart to hold instances
    const currentAllocationChartRef = useRef(null);
    const recommendedAllocationChartRef = useRef(null);
    const riskMetricsChartRef = useRef(null);
    const performanceChartRef = useRef(null);

    useEffect(() => {
        // Initialize collapsible elements
        const elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems);

        // Initialize Current Allocation Chart
        const currentAllocationCtx = document.getElementById('currentAllocationChart');
        if (currentAllocationCtx) {
            currentAllocationChartRef.current = new Chart(currentAllocationCtx, {
                type: 'pie',
                data: {
                    labels: ['Futures', 'Equity', 'Options'],
                    datasets: [{
                        data: [35, 30, 10],
                        backgroundColor: ['#1e88e5', '#43a047', '#fb8c00']
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top'
                        }
                    }
                }
            });
        }

        // Initialize Recommended Allocation Chart
        const recommendedAllocationCtx = document.getElementById('recommendedAllocationChart');
        if (recommendedAllocationCtx) {
            recommendedAllocationChartRef.current = new Chart(recommendedAllocationCtx, {
                type: 'pie',
                data: {
                    labels: ['Futures', 'Equity', 'Options'],
                    datasets: [{
                        data: [40, 35, 10],
                        backgroundColor: ['#1e88e5', '#43a047', '#fb8c00']
                    }]
                },
                options: {
                    responsive: true,
                    plugins: {
                        legend: {
                            position: 'top'
                        }
                    }
                }
            });
        }

        // Initialize Risk Metrics Chart
        const riskMetricsCtx = document.getElementById('riskMetricsChart');
        if (riskMetricsCtx) {
            riskMetricsChartRef.current = new Chart(riskMetricsCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [
                        {
                            label: 'VaR',
                            data: [5, 6, 5.5, 7, 6.5, 7, 8, 7.5, 6.8, 7.2, 7.6, 6.9],
                            borderColor: '#e53935',
                            fill: false,
                            tension: 0.4
                        },
                        {
                            label: 'CVaR',
                            data: [8, 8.5, 8.2, 9, 9.1, 9.3, 10, 9.7, 8.9, 9.2, 9.6, 9],
                            borderColor: '#fb8c00',
                            fill: false,
                            tension: 0.4
                        }
                    ]
                },
                options: {
                    responsive: true,
                    scales: {
                        x: { title: { display: true, text: 'Month' } },
                        y: { title: { display: true, text: 'Percentage (%)' }, beginAtZero: true }
                    },
                    plugins: { legend: { position: 'top' } }
                }
            });
        }

        // Initialize Performance Chart
        const performanceCtx = document.getElementById('performanceChart');
        if (performanceCtx) {
            performanceChartRef.current = new Chart(performanceCtx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                    datasets: [{
                        label: 'Portfolio Value ($)',
                        data: [100000, 102000, 104500, 107000, 109500, 111000, 115000, 117000, 118500, 120000, 121500, 123000],
                        borderColor: '#1e88e5',
                        fill: false,
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        x: { title: { display: true, text: 'Month' } },
                        y: { title: { display: true, text: 'Portfolio Value ($)' }, beginAtZero: false }
                    },
                    plugins: { legend: { position: 'top' } }
                }
            });
        }

        // Cleanup function to destroy charts on component unmount
        return () => {
            if (currentAllocationChartRef.current) {
                currentAllocationChartRef.current.destroy();
            }
            if (recommendedAllocationChartRef.current) {
                recommendedAllocationChartRef.current.destroy();
            }
            if (riskMetricsChartRef.current) {
                riskMetricsChartRef.current.destroy();
            }
            if (performanceChartRef.current) {
                performanceChartRef.current.destroy();
            }
        };
    }, []);

    return (
        <div className="container">
            <h3 className="center-align">Portfolio Dashboard</h3>

            <div className="row">
                {/* Current Allocation Chart */}
                <div className="col s12 m6">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Current Allocation</span>
                            <canvas id="currentAllocationChart"></canvas>
                            <ul className="collapsible">
                                <li>
                                    <div className="collapsible-header">Futures</div>
                                    <div className="collapsible-body">
                                        <ul>
                                            <li>S&P 500 Futures: 15%</li>
                                            <li>Gold Futures: 10%</li>
                                            <li>Oil Futures: 5%</li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="collapsible-header">Equity</div>
                                    <div className="collapsible-body">
                                        <ul>
                                            <li>Tech Stocks: 15%</li>
                                            <li>Healthcare Stocks: 10%</li>
                                            <li>Energy Stocks: 5%</li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="collapsible-header">Options</div>
                                    <div className="collapsible-body">
                                        <ul>
                                            <li>Call Options on SPY: 5%</li>
                                            <li>Put Options on QQQ: 3%</li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Recommended Allocation Chart */}
                <div className="col s12 m6">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Recommended Allocation</span>
                            <canvas id="recommendedAllocationChart"></canvas>
                            <ul className="collapsible">
                                <li>
                                    <div className="collapsible-header">Futures</div>
                                    <div className="collapsible-body">
                                        <ul>
                                            <li>S&P 500 Futures: 25%</li>
                                            <li>Gold Futures: 8%</li>
                                            <li>Oil Futures: 7%</li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="collapsible-header">Equity</div>
                                    <div className="collapsible-body">
                                        <ul>
                                            <li>Tech Stocks: 20%</li>
                                            <li>Healthcare Stocks: 15%</li>
                                            <li>Energy Stocks: 5%</li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    <div className="collapsible-header">Options</div>
                                    <div className="collapsible-body">
                                        <ul>
                                            <li>Call Options on SPY: 6%</li>
                                            <li>Put Options on QQQ: 4%</li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Risk Metrics Chart */}
                <div className="col s12 m6">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Risk Metrics Over Time</span>
                            <canvas id="riskMetricsChart"></canvas>
                        </div>
                    </div>
                </div>

                {/* Performance Over Time Chart */}
                <div className="col s12 m6">
                    <div className="card">
                        <div className="card-content">
                            <span className="card-title">Performance Over Time</span>
                            <canvas id="performanceChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
