import { Component } from '@angular/core';
import { NasaService } from '../nasa.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

imageData: any;
fecha = new FormControl(new Date());

  constructor(private nasaService: NasaService) {}

  ngOnInit(){
    this.nasaService.getImageOfTheDay().subscribe((data) => {
      this.imageData = data;
      console.log(data);
    })
  }

  

}