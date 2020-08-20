import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-religious',
  templateUrl: './religious.component.html',
  styleUrls: ['./religious.component.css']
})
export class ReligiousComponent implements OnInit {
  myimage1="../../assets/images/hindutemple.jpg"
  myimage2="../../assets/images/buddhisttemple.jpg"
  myimage3="../../assets/images/sikhtemple.jpg"
  myimage4="../../assets/images/jain.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
