import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant.model';
import { PlantService } from '../plant.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [PlantService]
})
export class AdminComponent implements OnInit {

  constructor(private plantService: PlantService) { }

  ngOnInit() {
  }

  // submitForm(name: string, nutrients: string[], uses: string[]) {
  //   var newPlant: Plant = new Plant(name, nutrients, uses);
  //   this.plantService.addPlant(newPlant);
  // }

}
