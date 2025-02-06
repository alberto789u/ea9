import { Component } from '@angular/core';
import { NasaService } from '../nasa.service';
import { RandomService } from '../random.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

categories: any;
random: any;

  constructor(private nasaService: NasaService, private randomService: RandomService) {}

  ngOnInit(){
    this.nasaService.getcategories().subscribe((data) => {
      this.categories = data;
      console.log(data);
        
    })

    
    this.randomService.getrandom().subscribe((data) => {
      this.random = data;
      console.log(data);
      })
  }

  

}