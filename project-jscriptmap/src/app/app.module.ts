import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule} from '@agm/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { WebsiteComponent } from './website/website.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MapComponent } from './map/map.component';
import { TourismComponent } from './tourism/tourism.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardheaderComponent } from './dashboardheader/dashboardheader.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LocationmapComponent } from './locationmap/locationmap.component';
import { ListoffeedbackComponent } from './listoffeedback/listoffeedback.component';
import { DetailComponent } from './detail/detail.component';
import { ContactqurreyComponent } from './contactqurrey/contactqurrey.component';
import { ReligiousComponent } from './religious/religious.component';
import { PhilosiphyComponent } from './philosiphy/philosiphy.component';
import { WeddingComponent } from './wedding/wedding.component';
import { SculptureComponent } from './sculpture/sculpture.component';
import { FestivalsComponent } from './festivals/festivals.component';
import { ClothingComponent } from './clothing/clothing.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    GalleryComponent,
    ContactComponent,
    SigninComponent,
    LoginComponent,
    HeaderComponent,
    WebsiteComponent,
    DashboardComponent,
    MapComponent,
    TourismComponent,
    FooterComponent,
    DashboardheaderComponent,
    LocationmapComponent,
    ListoffeedbackComponent,
    DetailComponent,
    ContactqurreyComponent,
    ReligiousComponent,
    PhilosiphyComponent,
    WeddingComponent,
    SculptureComponent,
    FestivalsComponent,
    ClothingComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyBBK6_E1hrwmL-6Jb1497_yv_pwR8ivpvU'
    }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
