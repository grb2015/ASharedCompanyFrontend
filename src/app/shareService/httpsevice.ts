import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";


@Injectable()
export class httpservice {

  constructor(private _http: Http) {
  }


get_data_from_json(path){
  return  this._http.get(path);
}

}
