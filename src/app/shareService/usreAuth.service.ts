import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { ConstValueService } from "../shareService/constValue.service";
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserAuth {
  public userGuid: string ="";

  public userAuthStr: string = '';
  // 登录的用户
  public loginUser: string="";
  private loginUrl = ConstValueService.newSeedapiUrl + "/seedapi/login/";
  constructor(private _http: Http) {

    // 页面刷新时,去cookie读取user
    if (document.cookie.includes('userName')) {

      this.loginUser = document.cookie.split(";")[0].split("=")[1].split(":")[0];

    }
  }
  // 检查用户登录状态
  checkLoginState() {

    if (document.cookie.includes('userName')) {
      this.loginUser = document.cookie.split(";")[0].split("=")[1].split(":")[0];

    }

    let temp = {
      type: "status",
      userName: this.loginUser
    };
    console.log("loginUser");
    console.log(this.loginUser);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    let json = JSON.stringify(temp);
    console.log("userAuth");
    return this._http.post(this.loginUrl, json, { headers: headers, withCredentials: true }).toPromise().then(
      (data)=>{
        console.log("data.json().result");
              console.log(data.json().result);
              console.log(data.json());
              if (data.json().result === 'loginstatus') {
                this.userAuthStr = data.json().userAuthStr;
                this.userGuid = data.json().guid;
                return true;
              } else {
                return false;
              }
      }
    ).catch(
      err=>{
        console.log("err");
        // alert("err");
      }
    );
  }
}
