import { NgModule } from '@angular/core';


import { MqttListenComponent } from './mqtt-listen/mqtt-listen.component';
import { MqttConnectComponent } from './mqtt-connect/mqtt-connect.component';

@NgModule({
    imports: [
    ],
    exports:[
        MqttListenComponent,
        MqttConnectComponent,
    ],
    declarations: [
        MqttListenComponent,
        MqttConnectComponent,
    ],
    providers: []
})
export class LoggerModule {}