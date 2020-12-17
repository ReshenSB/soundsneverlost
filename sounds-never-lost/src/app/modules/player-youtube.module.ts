import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PlayerYouTubeComponent } from '../components/player-youtube/player-youtube.component';

@NgModule({
  declarations: [
    PlayerYouTubeComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports:[
    PlayerYouTubeComponent
  ]
})
export class PlayerYouTubeModule { }
