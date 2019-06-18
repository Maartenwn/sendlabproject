import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MapComponent} from '../map/map.component';
import {LivestreamComponent} from '../livestream/livestream.component';
import {ThrottleComponent} from '../throttle/throttle.component';
import {MatDialog, MatSnackBar} from '@angular/material';
import {MotorFlagsComponent} from '../motor-flags/motor-flags.component';
import {MotorVerboseComponent} from '../motor-verbose/motor-verbose.component';
import {SolarPanelComponent} from '../solar-panel/solar-panel.component';
import {BatteryComponent} from '../battery/battery.component';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    GPS: any = MapComponent;
    Livestream: any = LivestreamComponent;
    Throttle: any = ThrottleComponent;
    Flags: any = MotorFlagsComponent;
    Motor: any = MotorVerboseComponent;
    SolarPanel: any = SolarPanelComponent;
    Battery: any = BatteryComponent;

    private selected: Component[] = [];
    @Output() selectEvent = new EventEmitter<Component[]>();

    constructor(public helpDialog: MatDialog, private snackBar: MatSnackBar) {
    }

    ngOnInit() {
    }

    openDialog() {
        this.helpDialog.open(HelpDialog);
    }

    onValChange(event) {
        const button = event.source;

        if (button.checked) {
            if (this.selected.length < 5) {
                this.selected.push(button.value);
            } else {
                button.checked = !button.checked;
                this.snackBar.open('You can\'t select more then 5 components.', 'Ok', {
                    duration: 3000,
                });
            }
        } else {
            for (let i = 0; i < this.selected.length; i++) {
                if (this.selected[i] === button.value) {
                    this.selected.splice(i, 1);
                }
            }
        }
        this.sendSelected();
    }

    sendSelected() {
        this.selectEvent.emit(Object.assign({}, this.selected));
    }
}

@Component({
    selector: 'app-header-help',
    templateUrl: './header.component.help.html',
})
export class HelpDialog {
}
