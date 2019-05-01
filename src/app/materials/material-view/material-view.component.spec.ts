import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialViewComponent } from './material-view.component';

describe('MaterialViewComponent', () => {
  let component: MaterialViewComponent;
  let fixture: ComponentFixture<MaterialViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
