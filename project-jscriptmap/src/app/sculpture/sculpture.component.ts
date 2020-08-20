import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sculpture',
  templateUrl: './sculpture.component.html',
  styleUrls: ['./sculpture.component.css']
})
export class SculptureComponent implements OnInit {
  myimage1="../../assets/images/sculpture1.jpg"
  myimage2="../../assets/images/sculpture2.jpg"
  myimage3="../../assets/images/sculpture3.jpg"
  myimage4="../../assets/images/sculpture4.jpg"
  myimage5="../../assets/images/art.jpg"
  myimage6="../../assets/images/art2.jpg"
  
  constructor() { }

  ngOnInit(): void {
  }

}
