import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class DataService {
    constructor(public http: Http) {
        this.getJSON().subscribe(data => {
            console.log(data)
        });
    }

    public getJSON(): Observable<any> {
        return this.http.get("./assets/stores.json")
    }
}