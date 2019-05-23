import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MqttConnectComponent } from './logger/mqtt-connect/mqtt-connect.component';
import { MqttListenComponent } from './logger/mqtt-listen/mqtt-listen.component';
import { LoggerModule } from './logger/logger.module';

const routes: Routes = [
    {path: 'mqtt-connect', component: MqttConnectComponent},
    {path: 'mqtt-listen', component: MqttListenComponent},
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes),
      LoggerModule,
    ],
  exports: [
      RouterModule,
    ]
})
export class AppRoutingModule { }
