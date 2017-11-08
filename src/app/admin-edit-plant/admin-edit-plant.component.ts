import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Plant } from '../plant.model';
import { PlantService } from '../plant.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

 @Component({
  selector: 'app-admin-edit-plant',
  templateUrl: './admin-edit-plant.component.html',
  styleUrls: ['./admin-edit-plant.component.css'],
  providers: [PlantService]
})
export class AdminEditPlantComponent implements OnInit {
  @Input() selectedPlant;
  plantId: string;
  plantToDisplay;

  constructor(private route: ActivatedRoute,
              private location: Location,
              private plantService: PlantService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters)=>{
      this.plantId = urlParameters['id'];
    });
    this.plantToDisplay = this.plantService.getPlantById(this.plantId);
  }

  beginUpdatingPlant(plantToUpdate){
    this.plantService.updatePlant(plantToUpdate);
  }

  beginDeletingPlant(plantToDelete){
    if(confirm("Are you sure you want to delete this plant?")){
      this.plantService.deletePlant(plantToDelete);
    }
  }

}
