import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../DataService';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styles: [`
    agm-map {
      height: 300px;
    }
  `],
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  details;
  id;
  
  //about map

  latitude = 20.5937;
  longitute = 78.9629;
  
  constructor(private ds:DataService,private route:ActivatedRoute, private router:Router) { }
 
  
  ngOnInit(): void {
    this.route.queryParamMap.subscribe((p)=>{
      this.id=p.get('id');
      //alert("id"+ this.id);

    this.ds.getEvents().subscribe((d)=>{
      this.details=d.desc;
    
      this.details= this.details.filter((p1)=>{
        return p1._id==this.id;
      });
      //alert(JSON.stringify(this.details));
    })
  });

  }
 close(){
   
   this.router.navigate(['/dashboard/listoffeedback']);
  }
}
