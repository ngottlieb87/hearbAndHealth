import { Component, Input, OnInit } from '@angular/core';
import { Plant } from '../plant.model';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-edit-plant',
  templateUrl: './edit-plant.component.html',
  styleUrls: ['./edit-plant.component.css'],
  providers: [PlantService]
})

export class EditPlantComponent implements OnInit {
  @Input() selectedPlant;

  constructor(private plantService: PlantService) { }

  ngOnInit() {
  }

}
