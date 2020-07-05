import { Component, OnInit } from '@angular/core';
import { DataService } from '../DataService';

@Component({
  selector: 'app-contactqurrey',
  templateUrl: './contactqurrey.component.html',
  styleUrls: ['./contactqurrey.component.css']
})
export class ContactqurreyComponent implements OnInit {
  emailProp;
  nameProp;
  subProp;
  msgProp;
  form;
  constructor(private ds:DataService) { }

  ngOnInit(): void {
  }

  fun(){

    alert({name:this.nameProp,email:this.emailProp,subject:this.subProp,message:this.msgProp});
     //if(this.mm.invalid){
    this.ds.sendData({name:this.nameProp,email:this.emailProp,subject:this.subProp,message:this.msgProp})
    .subscribe((f,response)=>{
      // alert(JSON.stringify(response))
        if(f.status=="success"){
          alert("Data is submitted");
        }
        else{
        alert("some errors are there");
        }
      })
    }

}
