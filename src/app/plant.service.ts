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
<<<<<<< HEAD
}

  updatePlant(localUpdatedPlant){
   var plantEntryInFirebase = this.getPlantById(localUpdatedPlant.$key);
   plantEntryInFirebase.update({name: localUpdatedPlant.name,
                               nutrients: localUpdatedPlant.nutrients,
                               uses: localUpdatedPlant.uses});
 }

 deletePlant(localPlantToDelete){
    var plantEntryInFirebase = this.getPlantById(localPlantToDelete.$key);
    plantEntryInFirebase.remove();
=======
>>>>>>> 91ff6bce6876b316c3ae70f2096d6cae8a03542a
  }

}
