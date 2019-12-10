import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EuLoaderComponent } from './eu-loader.component';

describe('EuLoaderComponent', () => {
  let component: EuLoaderComponent;
  let fixture: ComponentFixture<EuLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EuLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EuLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
