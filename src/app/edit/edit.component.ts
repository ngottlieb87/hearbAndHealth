import { Component, Input, OnInit } from '@angular/core';
import { PlantService } from '../plant.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { Plant } from '../plant.model';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [PlantService]
})
export class EditComponent implements OnInit {
  plants: FirebaseListObservable<any[]>;
  @Input() selectedPlant;
  plantToDisplay;

  constructor(private plantService: PlantService, private route: ActivatedRoute,) { }

  ngOnInit() {
  }

  beginUpdatingPlant(plantToUpdate){
    this.selectedPlant.nutrients=this.selectedPlant.nutrients.split(",");
    this.selectedPlant.uses=this.selectedPlant.uses.split(",");
    this.plantService.updatePlant(plantToUpdate);
   }

   beginDeletingPlant(plantToDelete){
     if(confirm("Are you sure you want to delete this item from the inventory?")){
       this.plantService.deletePlant(plantToDelete);
     }
   }

 }
