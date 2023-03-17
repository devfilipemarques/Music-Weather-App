import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMusicStorageComponent } from './list-music-storage.component';

describe('ListMusicStorageComponent', () => {
  let component: ListMusicStorageComponent;
  let fixture: ComponentFixture<ListMusicStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMusicStorageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListMusicStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
