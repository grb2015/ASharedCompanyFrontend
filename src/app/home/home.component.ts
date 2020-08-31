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
  private listInfos= [];              // 总的数据
  private listInfoSelected = []   // 筛选后的数据
  private ConstlistInfoAll= []   // 筛选后的数据
  private curProvince ;   // 保存当前选中的省份
  private curCity ;       // 保存当前选中的城市
  private curconunty ;       // 保存当前选中的区县

  private provinces = [
    {
      name: '全部省份',
      id: '全部省份'
    },
    {
      name: '安徽省',
      id: '安徽省'
    },
    {
      name: '北京市',
      id: '北京市'
    },
    {
      name: '重庆市',
      id: '重庆市'
    },
    {
      name: '福建省',
      id: '福建省'
    },
    {
      name: '甘肃省',
      id: '甘肃省'
    },
    {
      name: '广东省',
      id: '广东省'
    },
    {
      name: '广西壮族自治区',
      id: '广西壮族自治区'
    },
    {
      name: '贵州省',
      id: '贵州省'
    },
    {
      name: '海南省',
      id: '海南省'
    },
    {
      name: '河北省',
      id: '河北省'
    },
    {
      name: '河南省',
      id: '河南省'
    },
    {
      name: '黑龙江省',
      id: '黑龙江省'
    },
    {
      name: '湖北省',
      id: '湖北省'
    },
    {
      name: '湖南省',
      id: '湖南省'
    },
    {
      name: '吉林省',
      id: '吉林省'
    },
    {
      name: '江苏省',
      id: '江苏省'
    },
    {
      name: '江西省',
      id: '江西省'
    },
    {
      name: '辽宁省',
      id: '辽宁省'
    },
    {
      name: '内蒙古自治区',
      id: '内蒙古自治区'
    },
    {
      name: '宁夏回族自治区',
      id: '宁夏回族自治区'
    },
    {
      name: '青海省',
      id: '青海省'
    },
    {
      name: '山东省',
      id: '山东省'
    },
    {
      name: '山西省',
      id: '山西省'
    },
    {
      name: '陕西省',
      id: '陕西省'
    },
    {
      name: '上海市',
      id: '上海市'
    },
    {
      name: '四川省',
      id: '四川省'
    },
    {
      name: '天津市',
      id: '天津市'
    },

    {
      name: '西藏自治区',
      id: '西藏自治区'
    },
    {
      name: '新疆维吾尔自治区',
      id: '新疆维吾尔自治区'
    },
    {
      name: '云南省',
      id: '云南省'
    },
    {
      name: '浙江省',
      id: '浙江省'
    }
  ]
  private cities = [
    {
      name: '全部城市',
      id: '全部城市'
    },
  ];

  private conunties = [
    {
      name: '全部区县',
      id: '全部区县'
    },
  ];
  constructor(private formbuilder: FormBuilder,private title: Title,private backendApi: httpservice)
  {
    title.setTitle('上市公司完整名单');
    this.emailForm = this.formbuilder.group(
      {
        'email' : ['', Validators.required]
      }
    );
  }

  ngOnInit() {
    this.backendApi.get_data_from_json("./assets/json/all_province_commanpy_info_all_country_formated_addr.json").subscribe(
      (data) => {
        // console.log("data  = ")
        // console.log(data)
        this.listInfos = data.json();
        this.ConstlistInfoAll  = data.json();
        // console.log("this.listInfos = ")
        // console.log(this.listInfos)
      }
    );
  }

  queryData() {
    // @ts-ignore
      let select = (document.getElementById("provinceSelect")) as HTMLSelectElement;
      // console.log("select =")
      // console.log(select)
      // @ts-ignore
      let index = (<HTMLSelectElement>document.getElementById('provinceSelect')).selectedIndex;
      // @ts-ignore
      let value = (<HTMLSelectElement>document.getElementById('provinceSelect')).value;
      this.curProvince = value;
      // console.log("### this.ConstlistInfoAll.length = ",this.ConstlistInfoAll.length)
      // console.log("### index = ",index)
      // console.log("### value = ",value)
      if (value === '全部省份'){
        this.listInfos = this.ConstlistInfoAll;
        return ;
      }
      this.listInfoSelected = [];
      for(let i = 0;i<this.ConstlistInfoAll.length;i++){
        if(this.ConstlistInfoAll[i]['province'] === value){
          this.listInfoSelected.push(this.ConstlistInfoAll[i])
        }
      }
      // console.log("this.listInfoSelected = ")
      // console.log(this.listInfoSelected)      
      this.listInfos = this.listInfoSelected

      /* 得到该省下面的所有地级市，作为第二个下拉框的数据
         遍历所有数据
       */
      let tmpList = [];
      this.cities = [
        {
          name: '全部城市',
          id: '全部城市'
        },
      ];
      for(let i = 0;i<this.ConstlistInfoAll.length;i++){
        if(this.ConstlistInfoAll[i]['province'] === value && tmpList.indexOf(this.ConstlistInfoAll[i]['city']) === -1 ){
          tmpList.push(this.ConstlistInfoAll[i]['city'])
        }
      }
      console.log(tmpList)
      for(let i = 0;i< tmpList.length;i++){
        this.cities.push( {'name':tmpList[i],'id':tmpList[i]})
      }
      console.log(this.cities)
    }



  cityChange(){
    // @ts-ignore
    let select = (document.getElementById("citySelect")) as HTMLSelectElement;
    // console.log("select =")
    // console.log(select)
    // @ts-ignore
    let index = (<HTMLSelectElement>document.getElementById('citySelect')).selectedIndex;
    // @ts-ignore
    let value = (<HTMLSelectElement>document.getElementById('citySelect')).value;
    this.curCity = value;
    console.log("### [cityChange] this.ConstlistInfoAll.length = ",this.ConstlistInfoAll.length)
    console.log("### [cityChange] index = ",index)
    console.log("### [cityChange] value = ",value)
    if (value === '全部城市'){
      return ;
    }
    this.listInfoSelected = [];
    for(let i = 0;i<this.ConstlistInfoAll.length;i++){
      if(this.ConstlistInfoAll[i]['city'] === value){
        this.listInfoSelected.push(this.ConstlistInfoAll[i])
      }
    }
    // console.log("this.listInfoSelected = ")
    // console.log(this.listInfoSelected)      
    this.listInfos = this.listInfoSelected

    // 选中地级市后，构造区县的下拉框数据
      let tmpList = [];
      this.conunties = [
        {
          name: '全部城市',
          id: '全部城市'
        },
      ];
      console.log("curProvince= ",this.curProvince)
      console.log("curCity= ",this.curCity)
      for(let i = 0;i<this.ConstlistInfoAll.length;i++){
        // console.log("this.ConstlistInfoAll[i]['conunty'] =",this.ConstlistInfoAll[i]['conunty'])
        if(this.ConstlistInfoAll[i]['province'] === this.curProvince && this.ConstlistInfoAll[i]['city'] === this.curCity  && tmpList.indexOf(this.ConstlistInfoAll[i]['conunty']) === -1 ){
          tmpList.push(this.ConstlistInfoAll[i]['conunty'])
        }
      }
      console.log(tmpList)
      for(let i = 0;i< tmpList.length;i++){
        this.conunties.push( {'name':tmpList[i],'id':tmpList[i]})
      }
      console.log(this.conunties)
    }




  conuntyChange(){

        // @ts-ignore
        let select = (document.getElementById("conuntySelect")) as HTMLSelectElement;
        // console.log("select =")
        // console.log(select)
        // @ts-ignore
        let index = (<HTMLSelectElement>document.getElementById('conuntySelect')).selectedIndex;
        // @ts-ignore
        let value = (<HTMLSelectElement>document.getElementById('conuntySelect')).value;
        this.curconunty = value;
        console.log("### [conuntyChange] this.ConstlistInfoAll.length = ",this.ConstlistInfoAll.length)
        console.log("### [conuntyChange] index = ",index)
        console.log("### [conuntyChange] value = ",value)
        console.log("### [conuntyChange] this.curProvince = ",this.curProvince)
        console.log("### [conuntyChange] this.curCity = ",this.curCity)
        if (value === '全部区县'){
          return ;
        }
        this.listInfoSelected = [];
        for(let i = 0;i<this.ConstlistInfoAll.length;i++){
          if(this.ConstlistInfoAll[i]['province'] === this.curProvince && this.ConstlistInfoAll[i]['city'] === this.curCity && this.ConstlistInfoAll[i]['conunty'] === value){
            this.listInfoSelected.push(this.ConstlistInfoAll[i])
          }
        }
        this.listInfos = this.listInfoSelected

  }

}
