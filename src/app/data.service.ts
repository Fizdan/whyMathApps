import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: any;
  constructor(public http: Http) { }

  load(){

    if(this.data){
        return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
        this.http.get('assets/data/questions.json').pipe(map(res => res.json())).subscribe(data => {
            this.data = data.questions;
            resolve(this.data);
        });

    });

}

}
