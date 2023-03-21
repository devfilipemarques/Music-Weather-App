import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicGenderComponent } from './music-gender.component';

describe('MusicGenderComponent', () => {
  let component: MusicGenderComponent;
  let fixture: ComponentFixture<MusicGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicGenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
