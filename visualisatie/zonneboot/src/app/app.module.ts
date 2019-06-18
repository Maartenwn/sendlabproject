import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {MaterialModule} from './material-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxWidgetGridModule} from 'ngx-widget-grid';
import {GridComponent} from './grid/grid.component';
import {HeaderComponent, HelpDialog} from './header/header.component';
import {MapComponent} from './map/map.component';
import {LivestreamComponent} from './livestream/livestream.component';
import { ThrottleComponent } from './throttle/throttle.component';
import {DynamicModule} from 'ng-dynamic-component';
import { MotorFlagsComponent } from './motor-flags/motor-flags.component';
import { MotorVerboseComponent } from './motor-verbose/motor-verbose.component';
import { SolarPanelComponent } from './solar-panel/solar-panel.component';
import {BatteryComponent} from './battery/battery.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        GridComponent,
        HeaderComponent,
        MapComponent,
        LivestreamComponent,
        ThrottleComponent,
        HelpDialog,
        MotorFlagsComponent,
        MotorVerboseComponent,
        BatteryComponent,
        SolarPanelComponent,
    ],
    imports: [
        HttpClientModule,
        FormsModule,
        DynamicModule,
        NgxWidgetGridModule,
        BrowserAnimationsModule,
        BrowserModule,
        MaterialModule,
        DynamicModule.withComponents([ThrottleComponent])
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [MapComponent, ThrottleComponent, LivestreamComponent, MotorFlagsComponent, HelpDialog, MotorVerboseComponent,
        SolarPanelComponent, BatteryComponent]
})
export class AppModule {
}
