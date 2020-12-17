import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomeComponent } from '../components/home/home.component';
import { PlayerYouTubeModule } from './player-youtube.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    PlayerYouTubeModule
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class HomeModule { }
