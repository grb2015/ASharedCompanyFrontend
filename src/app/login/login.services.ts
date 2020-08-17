import { Injectable } from "@angular/core";
import 'rxjs/add/operator/toPromise';
import { ConstValueService } from "../shareService/constValue.service";
// import { ExpressionSettingModel } from "./expressionSettingModel";
import { Http, Headers } from "@angular/http";

@Injectable()
export class LoginService {

    private loginUrl = ConstValueService.newSeedapiUrl + "/hotel/login/";

    constructor(private _http: Http) { }

    /**
     * 登录
     */
    login(info) {
        // 这边要注意json需要严格模式的json格式
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
        // 初次登录 或者cookie过期
        let json = JSON.stringify(info);
        console.log("login");
        return this._http.post(this.loginUrl, json, { headers: headers, withCredentials: true });

    }
}
