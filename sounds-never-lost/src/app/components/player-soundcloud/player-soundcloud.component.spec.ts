import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerSoundcloudComponent } from './player-soundcloud.component';

describe('PlayerSoundcloudComponent', () => {
  let component: PlayerSoundcloudComponent;
  let fixture: ComponentFixture<PlayerSoundcloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerSoundcloudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerSoundcloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
