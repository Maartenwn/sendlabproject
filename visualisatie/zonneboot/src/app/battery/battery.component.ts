import {Component, Input, OnInit} from '@angular/core';
import {Chart} from 'chart.js';

@Component({
    selector: 'app-battery',
    templateUrl: './battery.component.html',
    styleUrls: ['./battery.component.css']
})
export class BatteryComponent implements OnInit {
    barChart: Chart;
    barData = [3540, 2497, 4201, 3401, 2895, 5312, 4213, 1983, 3598, 2478, 5871, 2357];

    @Input() set data(data: any) {
        if (this.barChart !== undefined) {
            this.barData = [3540, 2497, 4201, 3401, 2895, 5312, 4213, 1983, 3598, 2478, 5871, 2357];
        }
    }

    constructor() {
    }

    ngOnInit() {
        this.barChart = new Chart('barChart', {
            type: 'bar',
            data: {
                labels: ['Battery 1', "Battery 2", "Battery 3", "Battery 4", "Battery 5", "Battery 6",
                    "Battery 7", "Battery 8", "Battery 9", "Battery 10", "Battery 11", "Battery 12",],
                datasets: [{
                    data: this.barData,
                    label: 'Voltage',
                    backgroundColor: "#C6002A",
                    hoverBackgroundColor: "#a00022",
                    fill: false
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        scaleLabel: {
                            display: true,
                            labelString: 'Voltage'
                        }
                    }]
                },
                legend: {
                    display: false
                },
                title: {
                    display: true,
                    text: 'Battery Voltages'
                },
                elements: {
                    center: {
                        text: ''  //set as you wish
                    }
                },
            }
        });
    }
}
