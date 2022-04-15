import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageObject = [{
    image: 'assets/property/2gethr.jpg',
    thumbImage: 'assets/property/2gethr.jpg',
    title: 'Civil & Flooring Works M/s:-2gethr HUB Pvt. Ltd  Loaction – bangalore'
  }, {
    image: 'assets/property/20191125_121530-scaled.jpg',
    thumbImage: 'assets/property/20191125_121530-scaled.jpg',
    title: 'Residential House Mr Tanvir Location – Bangalore'
  }, {
    image: 'assets/property/fffffffffff.jpg',
    thumbImage: 'assets/property/fffffffffff.jpg',
    title: 'Civil & Design Works M/s:-Open finance technologies Pvt Ltd Location – Bangalore'
  }, {
    image: 'assets/property/IMG_20191104_193550.jpg',
    thumbImage: 'assets/property/IMG_20191104_193550.jpg',
    title: 'Duplex House Interior with modular kitchen Dr Chandrasekhar House Location – Bangalore'
  }, {
    image: 'assets/property/nice-scaled.jpeg',
    thumbImage: 'assets/property/nice-scaled.jpeg',
    title: 'Duplex Home Construction Mr Jothi, Mrs Lalitha House Location- Nagercoil'
  }, {
    image: 'assets/property/nn-480x480.jpg',
    thumbImage: 'assets/property/nn-480x480.jpg',
    title: 'Villa Construction M/s Shobha M Bhat Loaction: Bangalore.'
  }, {
    image: 'assets/property/Traveloka.png',
    thumbImage: 'assets/property/Traveloka.png',
    title: 'Civil & Flooring Works M/s:-Traveloka India Pvt Ltd Loaction – bangalore'
  }, {
    image: 'assets/property/Veoneer.png',
    thumbImage: 'assets/property/Veoneer.png',
    title: 'Civil Works M/s:- Veoneer  Loaction – bangalore'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
