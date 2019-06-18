import {Component, Input, OnInit} from '@angular/core';
import Chart from 'chart.js';

@Component({
    selector: 'app-solar-panel',
    templateUrl: './solar-panel.component.html',
    styleUrls: ['./solar-panel.component.css']
})
export class SolarPanelComponent implements OnInit {

    solarPanelDataChart: Chart;

    @Input() set data(data: any) {
        if (this.solarPanelDataChart !== undefined) {
            this.solarPanelDataChart.data.datasets[0].data = [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478];
            this.solarPanelDataChart.data.datasets[1].data = [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267];
            this.solarPanelDataChart.data.datasets[2].data = [168, 170, 178, 190, 203, 276, 408, 547, 675, 734];
            this.solarPanelDataChart.data.datasets[3].data = [40, 20, 10, 16, 24, 38, 74, 167, 508, 784];
        }
    }

    constructor() {
    }

    ngOnInit() {
        this.solarPanelDataChart = new Chart('solarPanelDataChart', {
            type: 'line',
            data: {
                labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
                datasets: [{
                    data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
                    label: 'Solarpanel-1',
                    borderColor: '#3e95cd',
                    backgroundColor: '#43c2fc',
                    fill: false
                }, {
                    data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
                    label: 'Solarpanel-2',
                    borderColor: '#8e5ea2',
                    backgroundColor: '#bf85d4',
                    fill: false
                }, {
                    data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
                    label: 'Solarpanel-3',
                    borderColor: '#3cba9f',
                    backgroundColor: '#43eed1',
                    fill: false
                }, {
                    data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
                    label: 'Solarpanel-4',
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
                    text: 'PV-System Voltages'
                }
            }
        });
    }
}
