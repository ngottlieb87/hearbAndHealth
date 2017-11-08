import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Plant } from '../plant.model';
import { PlantService } from '../plant.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

 @Component({
  selector: 'app-plant-detail',
  templateUrl: './plant-detail.component.html',
  styleUrls: ['./plant-detail.component.css'],
  providers: [PlantService]
})
export class PlantDetailComponent implements OnInit {
  plantId: string;
  plantToDisplay;


  constructor(private route: ActivatedRoute,
              private location: Location,
              private plantService: PlantService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters)=>{
      this.plantId = urlParameters['id'];
    });
    // this.plantToDisplay = this.plantService.getPlantById(this.plantId);
    this.plantService.getPlantById(this.plantId).subscribe(lastData=>{
      this.plantToDisplay = lastData;

      console.log(this.plantToDisplay);
      this.plantToDisplay.nutrients.forEach(function(nutrient){
        return nutrient;
      })
    });
  }
}
