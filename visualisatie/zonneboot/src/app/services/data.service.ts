import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {interval, Observable, throwError} from 'rxjs';
import {catchError, retryWhen} from 'rxjs/operators';
import {Message} from "@angular/compiler/src/i18n/i18n_ast";
import {WebSocketSubject} from "rxjs/webSocket";

const url = 'https://SendLab.AvansTi.nl';
const wssUrl = 'wss://sendlab.AvansTi.nl:8080';
const port = '23450';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    private socket$: WebSocketSubject<Message>;

    listener: DataListener;

    constructor(private http: HttpClient) {
         this.socket$ = WebSocketSubject.create(wssUrl);

         this.socket$
            .subscribe(
            (data) => this.listener.onData(data),
            (err) => this.handleError(err),
            () => console.warn('Completed!')
            );
    }

    public getCurrentData(): Observable<any> {
        return this.http.get(url + ':' + port + '/IoT/api/current/device/zonneboot/data')
            .pipe(
                catchError(this.handleError)
            );
    }

    public getHistoricData(start: string, end: string, interval: string): Observable<any> {
        return this.http.get(url + '/api/')
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error: HttpErrorResponse) {
        let errMsg = '';
        // Client Side Error
        if (error.error instanceof ErrorEvent) {
            errMsg = `Error: ${error.error.message}`;
        } else {  // Server Side Error
            errMsg = `Error Code: ${error.status},  Message: ${error.message}`;
        }
        console.error(errMsg);
        // return an observable
        return throwError(errMsg);
    }
}

export interface DataListener{
  onData(data: any)
}
