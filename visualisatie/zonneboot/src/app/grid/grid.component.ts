import {Component, Input, OnInit, HostListener, EventEmitter} from '@angular/core';
import {DataListener, DataService} from '../services/data.service';

@Component({
    selector: 'app-grid',
    templateUrl: './grid.component.html',
    styleUrls: ['./grid.component.css']
})

export class GridComponent implements OnInit, DataListener {
    components: Component[];
    movable: boolean;

    @Input() set selectedComponents(value: Component[]) {
        let keys = Object.keys(value);
        this.components = value;
        this.inputs.len = keys.length;
    }

    @HostListener('document:keydown.control', ['$event'])
    handleKeyboardDownEvent(event: KeyboardEvent) {
        this.movable = true;
    }

    @HostListener('document:keyup.control', ['$event'])
    handleKeyboardUpEvent(event: KeyboardEvent) {
        this.movable = false;
    }

    onWidgetChange(value: any) {
        this.inputs.switch += 1;
    }

    constructor(private dataService: DataService) {
    }

    ngOnInit() {
        // this.dataService.getCurrentData().subscribe(
        //     data => {
        //         this.inputs.data = data.result[0];
        //         console.log(this.inputs.data);
        //     }
        // );
    }

    inputs = {
        data: null,
        switch: 0,
        len: 0
    };

    grids = [
        {
            grid: {rows: 0, columns: 0},
        }, {
            grid: {rows: 1, columns: 1},
            tiles: [{top: 1, left: 1, height: 1, width: 1, color: 'rgb(63,65,198)'}],
        },
        {
            grid: {rows: 1, columns: 2},
            tiles: [{top: 1, left: 1, height: 1, width: 1, color: 'rgb(63,65,198)'},
                {top: 1, left: 2, height: 1, width: 1, color: 'rgb(198,36,55)'}],
        },
        {
            grid: {rows: 2, columns: 2},
            tiles: [{top: 1, left: 1, height: 2, width: 1, color: 'rgb(63,65,198)'},
                {top: 1, left: 2, height: 1, width: 1, color: 'rgb(198,36,55)'},
                {top: 2, left: 2, height: 1, width: 1, color: 'rgb(198,141,4)'}],
        },
        {
            grid: {rows: 2, columns: 2},
            tiles: [{top: 1, left: 1, height: 1, width: 1, color: 'rgb(63,65,198)'},
                {top: 1, left: 2, height: 1, width: 1, color: 'rgb(198,36,55)'},
                {top: 2, left: 1, height: 1, width: 1, color: 'rgb(198,141,4)'},
                {top: 2, left: 2, height: 1, width: 1, color: 'rgb(198,0,180)'}],
        },
        {
            grid: {rows: 2, columns: 3},
            tiles: [{top: 1, left: 1, height: 1, width: 1, color: 'rgb(63,65,198)'},
                {top: 1, left: 2, height: 2, width: 1, color: 'rgb(198,36,55)'},
                {top: 1, left: 3, height: 1, width: 1, color: 'rgb(198,141,4)'},
                {top: 2, left: 1, height: 1, width: 1, color: 'rgb(198,0,180)'},
                {top: 2, left: 3, height: 1, width: 1, color: 'rgb(140,198,0)'}],
        }];

    onData(data) {
        // console.log(data);
        // this.inputs.data = data.result[0];
    }
}
