import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WifiNameComponent } from './wifi-name.component';

describe('WifiNameComponent', () => {
  let component: WifiNameComponent;
  let fixture: ComponentFixture<WifiNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WifiNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WifiNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
