import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-festivals',
  templateUrl: './festivals.component.html',
  styleUrls: ['./festivals.component.css']
})
export class FestivalsComponent implements OnInit {
  myimage1="../../assets/images/diwali.jpg"
  myimage2="../../assets/images/holi1.jpg"
  myimage3="../../assets/images/navratri.jpg"
  myimage4="../../assets/images/ganshji2.jpg"
  myimage5="../../assets/images/Bihu.jpg"
  myimage6="../../assets/images/j.jpg"
  myimage7="../../assets/images/Kathakali.jpg"
  myimage8="../../assets/images/d.jpg"
  

  constructor() { }

  ngOnInit(): void {
  }

}
