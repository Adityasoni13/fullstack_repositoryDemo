import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../DataService';

@Component({
  selector: 'app-listoffeedback',
  templateUrl: './listoffeedback.component.html',
  styleUrls: ['./listoffeedback.component.css']
})
export class ListoffeedbackComponent implements OnInit {
  details;
  id;


  constructor(private ds: DataService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.ds.getEvents().subscribe((d)=>{
      this.details=d.desc;
    })
  }
  fun1(id):any{
    //alert(id);
    this.router.navigate(['/dashboard/detail'],{queryParams:{id:id}});
    } 

}
