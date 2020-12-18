import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';

declare global {
  interface Window { YT: any; }
}

@Component({
  selector: 'app-player-youtube',
  templateUrl: './player-youtube.component.html',
  styleUrls: ['./player-youtube.component.scss']
})
export class PlayerYouTubeComponent implements AfterViewInit {
  /** The ID of the YouTube video. Found in the `v` value of a YouTube video URL. */
  @Input() videoID = 'M7lc1UVf-VE';

  /** 
   * The state of the YouTube video. 
   * @see onPlayerStateChange(event: any)
   */
  @Output() videoState: EventEmitter<any> = new EventEmitter();

  /** The container in which the YouTube player will be in. */
  @ViewChild('playerContainer') playerContainer!: ElementRef<HTMLElement>;

  /** The control for the YouTube Player */
  player: any;

  /** The base URL of this website. */
  origin = window.location.origin;

  constructor(private renderer: Renderer2) { };

  ngAfterViewInit() {
    // Creating the YouTube iframe to embed the video.
    let div = this.renderer.createElement('iframe');
    this.renderer.setAttribute(div, 'id', 'player');
    this.renderer.setAttribute(div, 'frameborder', '0');
    this.renderer.setAttribute(div, 'allowfullscreen', '1');
    this.renderer.setAttribute(div, 'allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    this.renderer.setAttribute(div, 'title', 'YouTube video player');
    this.renderer.setAttribute(div, 'src', 'https://www.youtube.com/embed/' + this.videoID + '?enablejsapi=1;origin=' + this.origin + ';widgetid=1');
    this.renderer.addClass(div, 'w-100');
    this.renderer.addClass(div, 'h-100');
    this.renderer.appendChild(this.playerContainer.nativeElement, div);
    // Starts the video
    this.onYouTubeIframeAPIReady();
  }

  /**
   * Adds the `onReady` and `onStateChange` events to `this.player`.
   */
  onYouTubeIframeAPIReady(): void {
    this.player = new window.YT.Player('player', {
      events: {
        'onReady': this.onPlayerReady.bind(this),
        'onStateChange': this.onPlayerStateChange.bind(this)
      }
    });
  }

  /**
   * Starts the video when the video is ready for playback.
   */
  onPlayerReady(event: any) {
    this.play();
    // event.target.playVideo();
  }

  /**
   * Emits the state of the video.
   */
  onPlayerStateChange(event: any) {
    switch (event.data) {
      case window.YT.PlayerState.BUFFERING:
        this.videoState.emit('BUFFERING');
        break;
      case window.YT.PlayerState.CUED:
        this.videoState.emit('CUED');
        break;
      case window.YT.PlayerState.ENDED:
        this.videoState.emit('ENDED');
        break;
      case window.YT.PlayerState.PAUSED:
        this.videoState.emit('PAUSED');
        break;
      case window.YT.PlayerState.PLAYING:
        this.videoState.emit('PLAYING');
        break;
      case window.YT.PlayerState.UNSTARTED:
        this.videoState.emit('UNSTARTED');
        break;
      default:
        // Do Nothing.
        break;
    }
  }

  /**
   * Stops the video.
   */
  stop() {
    this.player.stopVideo();
  }

  /**
   * Pauses the video.
   */
  pause() {
    this.player.pauseVideo();
  }

  /**
   * Plays the video.
   */
  play() {
    this.player.playVideo();
  }

}
