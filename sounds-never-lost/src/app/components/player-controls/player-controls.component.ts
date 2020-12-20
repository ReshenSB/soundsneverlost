import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-controls',
  templateUrl: './player-controls.component.html',
  styleUrls: ['./player-controls.component.scss']
})
export class PlayerControlsComponent implements OnInit {


  showPause = false;

  playPath= '"M8 5v14l11-7z"'
  pausePath= '"M6 19h4V5H6v14zm8-14v14h4V5h-4z"'
  active='"M8 5v14l11-7z"'

  disabled = false;

  constructor() { }

  ngOnInit(): void {
  }

  pause(){
    this.showPause=!this.showPause;
    // this.active=(this.showPause ? this.pausePath : this.playPath )
  }
  
  play(){
    this.showPause=!this.showPause;
    // this.active=(this.showPause ? this.pausePath : this.playPath )
  }


  stop(){
    this.showPause=!this.showPause;
    // this.active=(this.showPause ? this.pausePath : this.playPath )
  }

}
