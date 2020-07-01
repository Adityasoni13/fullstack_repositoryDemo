import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../DataService';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  details;
  id;

  constructor(private ds:DataService,private route:ActivatedRoute) { }

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

}
