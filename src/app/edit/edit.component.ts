import { Component, Input, OnInit } from '@angular/core';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [PlantService]
})
export class EditComponent implements OnInit {
  @Input() selectedPlant;

  constructor(private plantService: PlantService) { }

  ngOnInit() {
  }
  beginUpdatingPlant(plantToUpdate){
     this.plantService.updatePlant(plantToUpdate);
   }

   beginDeletingPlant(plantToDelete){
     if(confirm("Are you sure you want to delete this item from the inventory?")){
       this.plantService.deletePlant(plantToDelete);
     }
   }

 }
