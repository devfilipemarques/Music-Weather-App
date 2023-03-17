import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LofiListComponent } from './lofi-list.component';

describe('LofiListComponent', () => {
  let component: LofiListComponent;
  let fixture: ComponentFixture<LofiListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LofiListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LofiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
