import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialAddComponent } from './material-add.component';

describe('MaterialAddComponent', () => {
  let component: MaterialAddComponent;
  let fixture: ComponentFixture<MaterialAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
