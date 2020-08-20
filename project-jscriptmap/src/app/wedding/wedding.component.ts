import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wedding',
  templateUrl: './wedding.component.html',
  styleUrls: ['./wedding.component.css']
})
export class WeddingComponent implements OnInit {
  myimage1="../../assets/images/7fere.jpg"
  myimage2="../../assets/images/marriage1.jpg"
  myimage3="../../assets/images/haldi1.jpg"
  myimage4="../../assets/images/marriage.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
