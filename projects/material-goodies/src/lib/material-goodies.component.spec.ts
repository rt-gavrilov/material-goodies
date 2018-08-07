import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialGoodiesComponent } from './material-goodies.component';

describe('MaterialGoodiesComponent', () => {
  let component: MaterialGoodiesComponent;
  let fixture: ComponentFixture<MaterialGoodiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterialGoodiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialGoodiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
