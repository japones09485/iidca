import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RecursoshumanosComponent } from './recursoshumanos.component';

describe('RecursoshumanosComponent', () => {
  let component: RecursoshumanosComponent;
  let fixture: ComponentFixture<RecursoshumanosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecursoshumanosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecursoshumanosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
