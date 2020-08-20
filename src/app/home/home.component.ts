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
      {'province':1,'city':2,'region':3,'jianchen':4,'quanmin':5,'hangye':1,"yiyee":1,"lirun":1,"lirunlv":1,"zhucedi":1,"bangongdi":1,"guanwan":1,"shangshiriqi":1},
      {'province':1,'city':2,'region':3,'jianchen':4,'quanmin':5,'hangye':1,"yiyee":1,"lirun":1,"lirunlv":1,"zhucedi":1,"bangongdi":1,"guanwan":1,"shangshiriqi":1},
      {'province':1,'city':2,'region':3,'jianchen':4,'quanmin':5,'hangye':1,"yiyee":1,"lirun":1,"lirunlv":1,"zhucedi":1,"bangongdi":1,"guanwan":1,"shangshiriqi":1},
      {'province':1,'city':2,'region':3,'jianchen':4,'quanmin':5,'hangye':1,"yiyee":1,"lirun":1,"lirunlv":1,"zhucedi":1,"bangongdi":1,"guanwan":1,"shangshiriqi":1},
      {'province':1,'city':2,'region':3,'jianchen':4,'quanmin':5,'hangye':1,"yiyee":1,"lirun":1,"lirunlv":1,"zhucedi":1,"bangongdi":1,"guanwan":1,"shangshiriqi":1},
      {'province':1,'city':2,'region':3,'jianchen':4,'quanmin':5,'hangye':1,"yiyee":1,"lirun":1,"lirunlv":1,"zhucedi":1,"bangongdi":1,"guanwan":1,"shangshiriqi":1},
      {'province':1,'city':2,'region':3,'jianchen':4,'quanmin':5,'hangye':1,"yiyee":1,"lirun":1,"lirunlv":1,"zhucedi":1,"bangongdi":1,"guanwan":1,"shangshiriqi":1},
    ]
    
  }



}
