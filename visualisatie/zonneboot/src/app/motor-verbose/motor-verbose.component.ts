import {Component, Input, OnInit} from '@angular/core';
import Chart from 'chart.js';
import * as $ from 'jquery';

@Component({
    selector: 'app-motor-verbose',
    templateUrl: './motor-verbose.component.html',
    styleUrls: ['./motor-verbose.component.css']
})
export class MotorVerboseComponent implements OnInit {

    width: number;
    height: number;
    topLeftGauge: Chart;
    topRightGauge: Chart;
    bottomLeftGauge: Chart;
    bottomRightGauge: Chart;

    @Input() len: number;

    @Input() set data(data: any) {
        if (this.topLeftGauge !== undefined) {
            this.topLeftGauge.data.datasets[0].data[0] = 2500;
            this.topLeftGauge.data.datasets[0].data[1] = 5000 - this.topLeftGauge.data.datasets[0].data[0];
            this.topLeftGauge.options.elements.center.text = this.topLeftGauge.data.datasets[0].data[0];

            this.topRightGauge.data.datasets[0].data[0] = 25;
            this.topRightGauge.data.datasets[0].data[1] = 50 - this.topRightGauge.data.datasets[0].data[0];
            this.topRightGauge.options.elements.center.text = this.topRightGauge.data.datasets[0].data[0] + 'A';

            this.bottomLeftGauge.data.datasets[0].data[0] = 33;
            this.bottomLeftGauge.data.datasets[0].data[1] = 100 - this.bottomLeftGauge.data.datasets[0].data[0];
            this.bottomLeftGauge.options.elements.center.text = this.bottomLeftGauge.data.datasets[0].data[0] + '°C';

            this.bottomRightGauge.data.datasets[0].data[0] = 33;
            this.bottomRightGauge.data.datasets[0].data[1] = 100 - this.bottomRightGauge.data.datasets[0].data[0];
            this.bottomRightGauge.options.elements.center.text = this.bottomRightGauge.data.datasets[0].data[0] + '°C';
        }
    }

    @Input() set switch(value: any) {
        this.width = $('#container').width();
        this.height = $('#container').height();
        if (this.width > 0) {
            const topLeftContainer = document.createElement('div');
            topLeftContainer.id = 'top-left-container';
            const topRightContainer = document.createElement('div');
            topRightContainer.id = 'top-right-container';
            const bottomLeftContainer = document.createElement('div');
            bottomLeftContainer.id = 'bottom-left-container';
            const bottomRightContainer = document.createElement('div');
            bottomRightContainer.id = 'bottom-right-container';

            if (this.height * 1.8 > this.width) {
                topLeftContainer.className = 'cross-split top-left';
                topRightContainer.className = 'cross-split top-right';
                bottomLeftContainer.className = 'cross-split bottom-left';
                bottomRightContainer.className = 'cross-split bottom-right';
            } else {
                topLeftContainer.className = 'vertical-split left';
                topRightContainer.className = 'vertical-split middle-left';
                bottomLeftContainer.className = 'vertical-split middle-right';
                bottomRightContainer.className = 'vertical-split right';
            }

            document.getElementById('container').appendChild(topLeftContainer);
            document.getElementById('container').appendChild(topRightContainer);
            document.getElementById('container').appendChild(bottomRightContainer);
            document.getElementById('container').appendChild(bottomLeftContainer);

            const topLeftGauge = document.getElementById('top-left-gauge');
            topLeftContainer.appendChild(topLeftGauge);
            const topRightGauge = document.getElementById('top-right-gauge');
            topRightContainer.appendChild(topRightGauge);
            const bottomLeftGauge = document.getElementById('bottom-left-gauge');
            bottomLeftContainer.appendChild(bottomLeftGauge);
            const bottomRightGauge = document.getElementById('bottom-right-gauge');
            bottomRightContainer.appendChild(bottomRightGauge);
        }
    }

    constructor() {
    }

    ngOnInit() {
        console.log('hoi');
        // Chart.defaults.RoundedDoughnut = Chart.helpers.clone(Chart.defaults.doughnut);
        // Chart.controllers.RoundedDoughnut = Chart.controllers.doughnut.extend({
        //     draw(ease) {
        //         const ctx = this.chart.chart.ctx;
        //
        //         const easingDecimal = ease || 1;
        //         Chart.helpers.each(this.getMeta().data, (arc, index) => {
        //             arc.transition(easingDecimal).draw();
        //
        //             const vm = arc._view;
        //             const radius = (vm.outerRadius + vm.innerRadius) / 2;
        //             const thickness = (vm.outerRadius - vm.innerRadius) / 2;
        //             const angle = Math.PI - vm.endAngle - Math.PI / 2;
        //
        //             ctx.save();
        //             ctx.fillStyle = vm.backgroundColor;
        //             ctx.translate(vm.x, vm.y);
        //             ctx.beginPath();
        //             ctx.arc(radius * Math.sin(angle), radius * Math.cos(angle), thickness, 0, 2 * Math.PI);
        //             ctx.arc(radius * Math.sin(Math.PI), radius * Math.cos(Math.PI), thickness, 0, 2 * Math.PI);
        //             ctx.closePath();
        //             ctx.fill();
        //             ctx.restore();
        //         });
        //     },
        // });

        Chart.pluginService.register({
            beforeDraw(chart) {
                const width = chart.chart.width,
                    height = chart.chart.height,
                    ctx = chart.chart.ctx;

                ctx.restore();
                const fontSize = (height / 80).toFixed(2);
                ctx.font = fontSize + 'em sans-serif';
                ctx.textBaseline = 'middle';

                var text = chart.config.options.elements.center.text,
                    textX = Math.round((width - ctx.measureText(text).width) / 2),
                    textY = height / 1.65;

                ctx.fillText(text, textX, textY);
                ctx.save();
            }
        });

        this.topLeftGauge = new Chart('top-left-gauge', {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [0, 5000],
                    backgroundColor: [
                        '#C6002A',
                        'rgba(0,0,0,0)'
                    ],
                    hoverBackgroundColor: [
                        '#C6002A',
                        'rgba(0,0,0,0)'
                    ],
                    borderWidth: [
                        0, 0
                    ]
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Motor RPM',
                    fontColor: '#000000',
                    fontSize: 16,
                },
                elements: {
                    center: {
                        text: 'no data'  //set as you wish
                    }
                },
                rotation: 0.70 * Math.PI,
                circumference: 1.6 * Math.PI,
                cutoutPercentage: 84,
                maintainAspectRatio: false,
                responsive: true,
                animation: {
                    animationRotate: true,
                    duration: 2000
                },
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                }
            }
        });

        this.topRightGauge = new Chart('top-right-gauge', {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [0, 50],
                    backgroundColor: [
                        '#C6002A',
                        'rgba(0,0,0,0)'
                    ],
                    hoverBackgroundColor: [
                        '#C6002A',
                        'rgba(0,0,0,0)'
                    ],
                    borderWidth: [
                        0, 0
                    ]
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Motor Cur',
                    fontColor: '#000000',
                    fontSize: 16,
                },
                elements: {
                    center: {
                        text: 'no data'  //set as you wish
                    }
                },
                rotation: 0.70 * Math.PI,
                circumference: 1.6 * Math.PI,
                cutoutPercentage: 84,
                maintainAspectRatio: false,
                responsive: true,
                animation: {
                    animationRotate: true,
                    duration: 2000
                },
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                }
            }
        });

        this.bottomLeftGauge = new Chart('bottom-left-gauge', {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [0, 100],
                    backgroundColor: [
                        '#C6002A',
                        'rgba(0,0,0,0)'
                    ],
                    hoverBackgroundColor: [
                        '#C6002A',
                        'rgba(0,0,0,0)'
                    ],
                    borderWidth: [
                        0, 0
                    ]
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'Motor Temp',
                    fontColor: '#000000',
                    fontSize: 16,
                },
                elements: {
                    center: {
                        text: 'no data'  //set as you wish
                    }
                },
                rotation: 0.70 * Math.PI,
                circumference: 1.6 * Math.PI,
                cutoutPercentage: 84,
                maintainAspectRatio: false,
                responsive: true,
                animation: {
                    animationRotate: true,
                    duration: 2000
                },
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                }
            }
        });

        this.bottomRightGauge = new Chart('bottom-right-gauge', {
            type: 'doughnut',
            data: {
                datasets: [{
                    data: [0, 100],
                    backgroundColor: [
                        '#C6002A',
                        'rgba(0,0,0,0)'
                    ],
                    hoverBackgroundColor: [
                        '#C6002A',
                        'rgba(0,0,0,0)'
                    ],
                    borderWidth: [
                        0, 0
                    ]
                }]
            },
            options: {
                title: {
                    display: true,
                    text: 'PCB Temp',
                    fontColor: '#000000',
                    fontSize: 16,
                },
                elements: {
                    center: {
                        text: 'no data'  //set as you wish
                    }
                },
                rotation: 0.70 * Math.PI,
                circumference: 1.6 * Math.PI,
                cutoutPercentage: 84,
                maintainAspectRatio: false,
                responsive: true,
                animation: {
                    animationRotate: true,
                    duration: 2000
                },
                legend: {
                    display: false
                },
                tooltips: {
                    enabled: false
                }
            }
        });
    }
}
