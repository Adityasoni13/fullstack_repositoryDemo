import { Component, OnInit } from '@angular/core';
import { DataService } from '../DataService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-locationmap',
  templateUrl: './locationmap.component.html',
  styleUrls: ['./locationmap.component.css']
})
export class LocationmapComponent implements OnInit {
  textProp;
  emailProp;
  addressProp;
  latitudeProp;
  longitudeProp;
  myfileProp;

  constructor(private router:Router, private ds:DataService) { }

  ngOnInit(): void {
  }
   form()
   
   {     alert("working")
    this.ds.form({text:this.textProp, email:this.emailProp, address:this.addressProp, latitude:this.latitudeProp, longitude:this.longitudeProp, file:this.myfileProp})
    .subscribe((response)=>{
    alert(JSON.stringify(response))
     if(response.status=="ok")
       {
        
     

        alert('registration successfull you will be redirected to login');
        //  this.router.navigate(['/login']);


      }
      else
      {
        alert("you already register....thanks");
      }
  })
}

   
}
