import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPlantListComponent } from './admin-plant-list.component';

describe('AdminPlantListComponent', () => {
  let component: AdminPlantListComponent;
  let fixture: ComponentFixture<AdminPlantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPlantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPlantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
