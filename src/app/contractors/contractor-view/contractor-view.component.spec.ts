import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractorViewComponent } from './contractor-view.component';

describe('ContractorViewComponent', () => {
  let component: ContractorViewComponent;
  let fixture: ComponentFixture<ContractorViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractorViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractorViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
