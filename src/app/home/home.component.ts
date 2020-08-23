import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {Title} from '@angular/platform-browser';
import {httpservice } from "../shareService/httpsevice";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  emailForm: FormGroup;
  private listInfos;
  constructor(private formbuilder: FormBuilder,private title: Title,private backendApi: httpservice)
  {
    title.setTitle('Home');
    this.emailForm = this.formbuilder.group(
      {
        'email' : ['', Validators.required]
      }
    );
  }

  ngOnInit() {
    this.backendApi.get_data_from_json("./assets/json/all_province_commanpy_info_all_country_formated_addr.json").subscribe(
      (data) => {
        console.log("data  = ")
        console.log(data)
        this.listInfos = data.json();
        console.log("this.listInfos = ")
        console.log(this.listInfos)
      }
    );
  }


}
