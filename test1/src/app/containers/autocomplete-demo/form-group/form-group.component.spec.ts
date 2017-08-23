import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCompleteFormGroupComponent } from './form-group.component';

describe('AutoCompleteFormGroupComponent', () => {
  let component: AutoCompleteFormGroupComponent;
  let fixture: ComponentFixture<AutoCompleteFormGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoCompleteFormGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCompleteFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
