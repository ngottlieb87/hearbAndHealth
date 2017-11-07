import { Injectable } from '@angular/core';
import { Plant } from './plant.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PlantService {
  plants: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
      this.plants = database.list('plants');
  }

  getPlants(){
    return this.plants;
  }

  getPlantById(plantId: string){
    return this.database.object('/plants/' + plantId);
}

  updatePlant(localUpdatedPlant){
   var plantEntryInFirebase = this.getPlantById(localUpdatedPlant.$key);
   plantEntryInFirebase.update({name: localUpdatedPlant.name,
                               nutrients: localUpdatedPlant.nutrients,
                               uses: localUpdatedPlant.uses});
 }

}
