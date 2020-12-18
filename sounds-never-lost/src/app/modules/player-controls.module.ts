import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PlayerControlsComponent } from '../components/player-controls/player-controls.component';

@NgModule({
  declarations: [
    PlayerControlsComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  exports:[
    PlayerControlsComponent
  ]
})
export class PlayerControlsModule { }
