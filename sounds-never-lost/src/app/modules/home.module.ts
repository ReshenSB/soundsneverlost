import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from '../components/home/home.component';
import { PlayerControlsModule } from './player-controls.module';
import { PlayerSoundCloudModule } from './player-soundcloud.module';
import { PlayerYouTubeModule } from './player-youtube.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PlayerYouTubeModule,
    PlayerSoundCloudModule,
    PlayerControlsModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
