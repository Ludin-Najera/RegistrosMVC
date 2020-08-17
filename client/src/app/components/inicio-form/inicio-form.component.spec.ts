import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioFormComponent } from './inicio-form.component';

describe('InicioFormComponent', () => {
  let component: InicioFormComponent;
  let fixture: ComponentFixture<InicioFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
