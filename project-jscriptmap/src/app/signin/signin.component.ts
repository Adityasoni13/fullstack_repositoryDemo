import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../DataService';
// import { FormBuilder, AbstractControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  nameProp;
  mobileProp;
  emailProp;
  passwordProp;
  form;
  // rf:FormGroup; 
  

  constructor(private ds:DataService, private router:Router, ) { 
 
  }

  ngOnInit(): void {
   
  }
    
  signUp()
  {   
      this.ds.signUp({name:this.nameProp, email:this.emailProp, password:this.passwordProp, mobile:this.mobileProp})
      .subscribe((response)=>{
        alert(JSON.stringify(response))
        if(response.status=="ok")
        {
          
       

          alert('registration successfull you will be redirected to login');
          this.router.navigate(['/login']);


        }
        else
        {
          alert("you already register....thanks");
        }
      })
  }

}
