import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgImageSliderModule } from 'ng-image-slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './bar/header/header.component';
import { FooterComponent } from './bar/footer/footer.component';
import { TopbarComponent } from './bar/topbar/topbar.component';
import { CarouselHomeComponent } from './slider/carousel-home/carousel-home.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { VisionComponent } from './vision/vision.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TopbarComponent,
    CarouselHomeComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    VisionComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgImageSliderModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
