import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  myimg = "../../assets/images/incredible-india-website.jpg"

  constructor() { }

  ngOnInit(): void {
    
  }
 
}
