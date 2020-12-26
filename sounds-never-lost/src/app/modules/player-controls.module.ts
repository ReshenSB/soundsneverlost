import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTooltipModule} from '@angular/material/tooltip';
import { PlayerControlsComponent } from '../components/player-controls/player-controls.component';

@NgModule({
  declarations: [
    PlayerControlsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    MatIconModule,
    MatButtonModule,
    // MatCheckboxModule,
    // MatProgressBarModule,
    // MatSlideToggleModule,
    MatTooltipModule,
  ],
  providers: [],
  exports:[
    PlayerControlsComponent
  ]
})
export class PlayerControlsModule { }
