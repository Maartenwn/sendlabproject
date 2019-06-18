import {Component, Input, OnInit, ComponentRef} from '@angular/core';
import Chart from 'chart.js';

@Component({
    selector: 'app-throttle',
    templateUrl: './throttle.component.html',
    styleUrls: ['./throttle.component.css']
})
export class ThrottleComponent implements OnInit {

    throttleDataChart: Chart;

    @Input() set data(data: any) {
        if (this.throttleDataChart !== undefined) {
            this.throttleDataChart.data.datasets[0].data = [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478];
            this.throttleDataChart.data.datasets[1].data = [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267];
        }
    }

    constructor() {
    }

    ngOnInit() {
        this.throttleDataChart = new Chart('throttleDataChart', {
            type: 'line',
            data: {
                labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
                datasets: [{
                    data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                    label: 'GPS-speed',
                    borderColor: '#3cba9f',
                    backgroundColor: '#43eed1',
                    fill: false
                }, {
                    data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                    label: 'Throttle',
                    borderColor: '#ca0c17',
                    backgroundColor: '#ff2b23',
                    fill: false
                }
                ]
            },
            options: {
                elements: {
                    center: {
                        text: ''  //set as you wish
                    }
                },
                title: {
                    display: true,
                    text: 'Throttle + GPS Speed'
                }
            }
        });
    }
}
