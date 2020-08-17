import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  emailForm: FormGroup;
  private listInfos;
  constructor(private formbuilder: FormBuilder,private title: Title)
  {
    title.setTitle('Home');
    this.emailForm = this.formbuilder.group(
      {
        'email' : ['', Validators.required]
      }
    );
  }

  ngOnInit() {
    this.listInfos=[
      {'1':1,'2':2,'3':3,'4':4,'5':5,'6':1,'7':2,'8':3,'9':4,'10':5,'11':1,'12':2,'13':3},
      {'1':1,'2':2,'3':3,'4':4,'5':5,'6':1,'7':2,'8':3,'9':4,'10':5,'11':1,'12':2,'13':3},
      {'1':1,'2':2,'3':3,'4':4,'5':5,'6':1,'7':2,'8':3,'9':4,'10':5,'11':1,'12':2,'13':3},
      {'1':1,'2':2,'3':3,'4':4,'5':5,'6':1,'7':2,'8':3,'9':4,'10':5,'11':1,'12':2,'13':3},
      {'1':1,'2':2,'3':3,'4':4,'5':5,'6':1,'7':2,'8':3,'9':4,'10':5,'11':1,'12':2,'13':3},
    ]
  }



}
