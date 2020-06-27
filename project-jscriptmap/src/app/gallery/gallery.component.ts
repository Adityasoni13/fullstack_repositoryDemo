import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  myimages ="../../assets/images/jaipur1.jpg";
  myimages1 ="../../assets/images/bijapur.jpg";
  myimages2 ="../../assets/images/taj.jpg";
  myimages3 ="../../assets/images/manali1.jpg";
  myimages4 ="../../assets/images/jslmar.jpg";
  myimages5 ="../../assets/images/mumbai.jpg";
  myimages6 ="../../assets/images/channai.jpg";
  myimages7 ="../../assets/images/rep.jpg";
  myimages8 ="../../assets/images/kolkata.jpg";
  myimages9 ="../../assets/images/assam.jpg";
  myimages10 ="../../assets/images/varanasii.jpg";
  myimages11 ="../../assets/images/kerala.jpg";
  myimages12 ="../../assets/images/history.jpg";
  myimages13 ="../../assets/images/andman.jpg";
  myimages14 ="../../assets/images/kota.jpg";
  
 
  constructor() { }

  ngOnInit(): void {
  }
  
}