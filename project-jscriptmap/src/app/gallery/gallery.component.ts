import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  myimages ="../../assets/images/Manali.jpg";
  myimages1 ="../../assets/images/jaipur1.jpg";
  myimages2 ="../../assets/images/taj.jpg";
  

  constructor() { }

  ngOnInit(): void {
  }
}