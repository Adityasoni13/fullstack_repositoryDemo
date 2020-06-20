import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component'
import { WebsiteComponent } from './website/website.component';
import { GalleryComponent } from './gallery/gallery.component';


const routes: Routes = [
  {path:'', component:WebsiteComponent, children:[
                                       {
                                                path:'', component:HomeComponent
                                           },
                                       {
                                                path:'about', component:AboutComponent
                                           },
                                       {
                                                path:'contact', component:ContactComponent
                                           },
                                       {
                                                path:'login', component:LoginComponent
                                           },
    
                                        {
                                                path:'signin', component:SigninComponent
                                           },
                                        {
                                                 path:'gallery', component:GalleryComponent
                                            },
                                        {
                                                 path:'login', component:LoginComponent
                                        }
]}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
