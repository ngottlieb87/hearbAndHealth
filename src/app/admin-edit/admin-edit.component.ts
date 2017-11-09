import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant.model';
import { Router } from '@angular/router';
import { PlantService } from '../plant.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-admin-edit',
  templateUrl: './admin-edit.component.html',
  styleUrls: ['./admin-edit.component.css'],
  providers: [PlantService]
})

export class AdminEditComponent implements OnInit {
  plants: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private plantService: PlantService){}

  ngOnInit(){
    this.plants = this.plantService.getPlants();
  }

  goToDetailPage(clickedPlant) {
    this.router.navigate(['plants', clickedPlant.$key]);
  };
}
