import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboardheader',
  templateUrl: './dashboardheader.component.html',
  styleUrls: ['./dashboardheader.component.css']
})
export class DashboardheaderComponent implements OnInit {

  constructor(private router:Router) { }
  @Input() name
  
  ngOnInit(): void {
  }
  
  logout()
  {
    localStorage.removeItem("email");
    localStorage.removeItem('name')
    alert(localStorage.getItem('email'))
    this.router.navigate(['/home']);
  }


  openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }

  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }
}
