import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HexDetailsComponent } from './hex-details.component';

describe('HexDetailsComponent', () => {
  let component: HexDetailsComponent;
  let fixture: ComponentFixture<HexDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HexDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HexDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
