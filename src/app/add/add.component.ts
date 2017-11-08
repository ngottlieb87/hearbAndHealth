import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant.model';
import { PlantService } from '../plant.service';
import * as firebase from "firebase";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
  providers: [PlantService]
})
export class AddComponent implements OnInit {
  user;
  constructor(private plantService: PlantService) { }

  ngOnInit() {
  }

  submitForm(name: string, nutrients: string[], uses: string[]) {
    var newPlant: Plant = new Plant(name, nutrients, uses);
    this.plantService.addPlant(newPlant);
  }

  ngDoCheck() {
    this.user = firebase.auth().currentUser;
  }
}
