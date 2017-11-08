import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant.model';
import { Router } from '@angular/router';
import { PlantService } from '../plant.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-admin-plant-list',
  templateUrl: './admin-plant-list.component.html',
  styleUrls: ['./admin-plant-list.component.css'],
  providers: [PlantService]
})

export class AdminPlantListComponent implements OnInit {
  plants: FirebaseListObservable<any[]>;
  constructor(private router: Router, private plantService: PlantService) { }

  ngOnInit() {
    this.plants = this.plantService.getPlants();

  };

  goToPlantDetailPage(clickedPlant){
    this.router.navigate(['admin-edit-plant',clickedPlant.$key])
  };
}
