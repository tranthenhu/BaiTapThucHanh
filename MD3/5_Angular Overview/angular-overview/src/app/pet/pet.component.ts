import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.scss']
})
export class PetComponent implements OnInit {

  

  ngOnInit() {
  }
  petName = 'puppie';
  petImage = 'https://media1.tenor.com/images/0da9f019dd0daf2b9b44c27257ec71a5/tenor.gif?itemid=11151590';
  constructor() { }

  updateName(name) {
    this.petName = name;
  }

  updateImage(image) {
    this.petImage = image;
  }

}
