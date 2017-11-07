import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';
import { PlantDetailComponent} from './plant-detail/plant-detail.component';
<<<<<<< HEAD
import { PlantListComponent} from './plant-list/plant-list.component';
import { EditPlantComponent} from './edit-plant/edit-plant.component';
=======
import { PlantListComponent } from './plant-list/plant-list.component';
>>>>>>> 91ff6bce6876b316c3ae70f2096d6cae8a03542a

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'public',
    component: PublicComponent
  },
  {
    path: 'private',
    component: PrivateComponent
  },
  {
    path: 'plants/:id',
    component: PlantDetailComponent
  },
  {
    path: 'plant-list',
    component: PlantListComponent
<<<<<<< HEAD
  },
  {
    path: 'edit-plant',
    component: EditPlantComponent
=======
>>>>>>> 91ff6bce6876b316c3ae70f2096d6cae8a03542a
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
