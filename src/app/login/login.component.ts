import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from "./login.services";
import 'style-loader!./login.scss';
import { UserAuth } from "../shareService/usreAuth.service";
// import { Md5 } from "ts-md5/dist/md5";
import { Router } from "@angular/router";
import * as myGlobals from '../shareService/globals';
declare var $: any;

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styleUrls: ["./login.scss"]
})
export class Login implements OnInit {

  public form: FormGroup;
  public userName: AbstractControl;
  public password: AbstractControl;
  public passwords: FormGroup;
  public submitted: boolean = false;

  constructor(private router: Router, private fb: FormBuilder,private loginService: LoginService,private userAuth: UserAuth) {
    this.form = fb.group({
      'userName': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      })
    });

    this.userName = this.form.controls['userName'];
    this.passwords = <FormGroup>this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.form.valueChanges.subscribe(() => {
    });
  }

  ngOnInit() {
    console.log("login init ")
  }

  public onSubmit(): void {
    if (this.form.valid) {
      let temp = { type: "login" };
      temp["userName"] = this.delete_space(this.userName.value);
      // temp["password"] = Md5.hashStr(this.password.value).toString();
      temp["password"] = this.password.value
      this.submitted = true;
      if (this.form.valid) {
        this.loginService.login(temp).subscribe(
          (data) => {
            console.log("data.json().result")
            console.log(data.json().result)
            if (data.json().result === "success") {
              // this.userAuth.userGuid = data.json().userGuid;
              // 跳转到首页
              myGlobals.setLoginStatus(true);
              console.log("####login sucess grbGlobals.g_is_login_in =")
              console.log(myGlobals.g_is_login_in)
              this.router.navigateByUrl("home");
            }
            else{
              myGlobals.setLoginStatus(false);
              console.log("####login fail grbGlobals.g_is_login_in =")
              console.log(myGlobals.g_is_login_in)
              alert("用户名或密码不正确 !")
            }
          },
          (error) => {
            console.log(" 登录出错,请检查网络正常且后端服务器已开启!")
            alert(" 登录出错,请检查网络正常且后端服务器已开启!")
          },
          () => {
          }
        );
      }
    }
  }

  //删除左右两端的空格
  delete_space(str){ 
    　　     return str.replace(/(^\s*)|(\s*$)/g, "");
    　　 }
}
