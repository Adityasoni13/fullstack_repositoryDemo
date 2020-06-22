import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myimageA="../../assets/images/channai.jpg"
  myimageB="../../assets/images/history.jpg"
  myimageC="../../assets/images/jpr.jpg"
  myimageD="../../assets/images/karnatk.jpg"
  myimageE="../../assets/images/MUNNAR.jpg"
  myimageF="../../assets/images/mumbai.jpg"
  myimageG="../../assets/images/wild1.jpg"
  myimageH="../../assets/images/andman.jpg"

  constructor() { }

  ngOnInit(): void {
  }

}
