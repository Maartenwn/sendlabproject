import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {interval, Observable, throwError} from 'rxjs';
import {catchError, retryWhen} from 'rxjs/operators';

const url = 'http://SendLab.AvansTi.nl';
const dataPort = '23450';
const Port = '34219';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    constructor(private http: HttpClient) {
    }

    public Login(username: string, password: string): Observable<any> {
        return this.http.post(url + ':' + Port + '/login', {userName: username, password})
            .pipe(retryWhen(_ => {
                return interval(5000);
            }));
    }

    public Refresh(username: string, refreshToken: string): Observable<any> {
        return this.http.post(url + ':' + Port + '/refresh', {userName: username, refresh_token: refreshToken})
            .pipe(retryWhen(_ => {
                return interval(5000);
            }));
    }

    public getCurrentData(authorizationToken: string): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'bearer ' + authorizationToken,
            })
        };
        return this.http.get(url + ':' + dataPort + '/IoT/api/current/device/zonneboot/data', httpOptions)
            .pipe(
                catchError(this.handleError)
            );
    }

    public getHistoricData(deviceId: string, start: string, end: string, interval: string, authorizationToken: string): Observable<any> {
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
