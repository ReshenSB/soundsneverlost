import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-player-controls',
  templateUrl: './player-controls.component.html',
  styleUrls: ['./player-controls.component.scss']
})
export class PlayerControlsComponent implements OnInit {
  @Input() name = 'Thousand Foot Krutch - Lifeline (Lyric Video)';
  @Input() thumbnail = 'https://i.ytimg.com/vi/-HXUyEWP1DE/default.jpg'
  @Input() source = 'YouTube'
  @Input() playing = false;
  @Input() active = false;
  @Input() disabled = false;


  constructor() { }

  ngOnInit(): void {
    console.log(environment)
  }

  disable() {
    this.disabled = !this.disabled
    // if (this.disabled) this.play()
    // else this.pause()
  }

  control() {
    if (this.playing) this.play()
    else this.pause()
  }

  pause() {
    this.playing = !this.playing;
    // this.active=(this.showPause ? this.pausePath : this.playPath )
  }

  play() {
    this.playing = !this.playing;
    // this.active=(this.showPause ? this.pausePath : this.playPath )
  }


  stop() {
    this.active = !this.active;
    // this.active=(this.showPause ? this.pausePath : this.playPath )
  }

}
