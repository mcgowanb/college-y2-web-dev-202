import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {

  constructor(private http: Http) { }

  getProgrammeTitle(){
    return this.http.get('http://localhost:3000').map(
      (res:Response) => res.text()
    );
  }


}
