import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlantDetailComponent} from './plant-detail/plant-detail.component';
import { PlantListComponent} from './plant-list/plant-list.component';
import { AdminComponent} from './admin/admin.component';
import { AdminPlantListComponent } from './admin-plant-list/admin-plant-list.component';
import { AdminEditPlantComponent } from './admin-edit-plant/admin-edit-plant.component';
import { AddComponent } from './add/add.component';
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'plants/:id',
    component: PlantDetailComponent
  },
  {
    path: 'plant-list',
    component: PlantListComponent
  },
  {
    path: "add",
    component: AddComponent
  },
  {
    path: 'admin-plant-list',
    component: AdminPlantListComponent
  },
  {
    path: 'admin-edit-plant/:id',
    component: AdminEditPlantComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'admin-edit-plant/:id',
    component: AdminEditPlantComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
