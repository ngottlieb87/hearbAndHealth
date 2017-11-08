import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditPlantComponent } from './admin-edit-plant.component';

describe('AdminEditPlantComponent', () => {
  let component: AdminEditPlantComponent;
  let fixture: ComponentFixture<AdminEditPlantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminEditPlantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminEditPlantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
