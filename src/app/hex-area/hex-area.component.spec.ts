import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HexAreaComponent } from './hex-area.component';

describe('HexAreaComponent', () => {
  let component: HexAreaComponent;
  let fixture: ComponentFixture<HexAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HexAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HexAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
