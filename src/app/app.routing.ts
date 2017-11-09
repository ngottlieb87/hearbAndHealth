import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlantDetailComponent} from './plant-detail/plant-detail.component';
import { PlantListComponent} from './plant-list/plant-list.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AuthGuard } from './auth-guard/auth-guard.service';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'plants/:id',
    component: PlantDetailComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'plant-list',
    component: PlantListComponent
  },
  {
    path: "add",
    component: AddComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit',
    component: EditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin-edit',
    component: AdminEditComponent,
    canActivate: [AuthGuard]
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
