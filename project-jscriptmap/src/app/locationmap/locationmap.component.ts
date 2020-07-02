import { Component, OnInit } from '@angular/core';
import { DataService } from '../DataService';
import { Router } from '@angular/router';
// import { createform } from "../module/createform.2";



@Component({
  selector: 'app-locationmap',
  templateUrl: './locationmap.component.html',
  styleUrls: ['./locationmap.component.css']
})
export class LocationmapComponent implements OnInit {
  banner: any;
  logo:any;
  textprop;
  emailprop;
  addressprop;
  locprop;
  latitudeprop;
  longitudeprop;
  

  constructor( private ds:DataService) { }
  getFile(evnt: any) {
    // console.log(evnt);
     this.banner = evnt.target.files[0];
 
  }
  getFile2(evnt: any) {
 
      this.logo = evnt.target.files[0];
  }
  
  
   form()
   { const formdata = new FormData();
    formdata.set('banner', this.banner);
    formdata.set('logo', this.logo);
    formdata.set('text', this.textprop);
    formdata.set('email', this.emailprop);
    formdata.set('location', this.locprop);
    formdata.set('address', this.addressprop);
    formdata.set('latitude', this.latitudeprop);
    formdata.set('longitute', this.longitudeprop);

    this.ds.form(formdata).subscribe( data =>{
        alert("form submited successfull")
    });
    
   }

  ngOnInit(): void {
  }

  
   
  //  {     
  //   this.ds.form({text:this.textProp, email:this.emailProp, address:this.addressProp, latitude:this.latitudeProp, longitude:this.longitudeProp, file:this.myfileProp})
  //   .subscribe((response)=>{
  //   alert(JSON.stringify(response));
  //    if(response.status=="ok")
  //      {
        
     

  //       alert('submit successfull');

        //  this.router.navigate(['/login']);


//       }
//       else
//       {
//         alert("some problem");
//       }
//   })
// }


   
}
