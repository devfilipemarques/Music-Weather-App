import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RockListComponent } from './rock-list.component';

describe('RockListComponent', () => {
  let component: RockListComponent;
  let fixture: ComponentFixture<RockListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RockListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RockListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
