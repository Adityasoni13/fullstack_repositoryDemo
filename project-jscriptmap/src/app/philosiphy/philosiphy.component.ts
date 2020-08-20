import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-philosiphy',
  templateUrl: './philosiphy.component.html',
  styleUrls: ['./philosiphy.component.css']
})
export class PhilosiphyComponent implements OnInit {
  myimage1="../../assets/images/hindu_p.jpg"
  myimage2="../../assets/images/budda-p.jpg"
  myimage3="../../assets/images/sikhp.jpg"
  myimage4="../../assets/images/jain_p.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
