import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clothing',
  templateUrl: './clothing.component.html',
  styleUrls: ['./clothing.component.css']
})
export class ClothingComponent implements OnInit {
  myimage1="../../assets/images/cl.jpg"
  myimage2="../../assets/images/cloth2.jpg"
  myimage3="../../assets/images/cloth3.jpg"
  myimage4="../../assets/images/cloth4.jpg"


  constructor() { }

  ngOnInit(): void {
  }

}
