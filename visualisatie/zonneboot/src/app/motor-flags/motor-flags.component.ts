import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-motor-flags',
    templateUrl: './motor-flags.component.html',
    styleUrls: ['./motor-flags.component.css']
})
export class MotorFlagsComponent implements OnInit {

    simpleItems: string[] = [
        'Motor Direction',
        'Motor Enable',
        'Motor Ready',
        'FailSafe',
        'TimeOut',
        'OverVoltage',
        'UnderVoltage',
        'GPS Fix'
    ];

    motorDirectionCheck = true;
    motorEnableCheck = true;
    motorReadyCheck = false;
    failSafeCheck = true;
    timeOutCheck = false;
    overVoltageCheck = true;
    underVoltageCheck = true;
    GPSFixCheck = false;

    itemHeight: string;

    @Input() set data(data: any) {
        if(data !== null) {
            this.motorDirectionCheck = data['steer']['dir'];
            this.motorEnableCheck = data['mtr-state']['enable'];
            this.motorReadyCheck = data['mtr-state']['ready'];
            this.failSafeCheck = data['mtr-flags']['fs'];
            this.timeOutCheck = data['mtr-flags']['to'];
            this.overVoltageCheck = data['mtr-flags']['ov'];
            this.underVoltageCheck = data['mtr-flags']['uv'];
            this.GPSFixCheck = !!data['gps-info']['fix'];
        }
    }

    constructor() {
    }

    ngOnInit() {
        let listHeight = document.getElementById('list').style.height;
        this.itemHeight = 'calc(' + (parseFloat(listHeight) / this.simpleItems.length) + '%' + ' - 1px)';
    }

}
