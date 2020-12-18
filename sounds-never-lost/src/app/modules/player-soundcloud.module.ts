import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PlayerSoundCloudComponent } from '../components/player-soundcloud/player-soundcloud.component';

@NgModule({
  declarations: [
    PlayerSoundCloudComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports:[
    PlayerSoundCloudComponent
  ]
})
export class PlayerSoundCloudModule { }
