import { AfterViewInit, Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

declare global {
  interface Window { SC: any; }
}

@Component({
  selector: 'app-player-soundcloud',
  templateUrl: './player-soundcloud.component.html',
  styleUrls: ['./player-soundcloud.component.scss']
})
export class PlayerSoundCloudComponent implements OnInit, AfterViewInit {
  /** The ID of the SoundCloud track. */
  @Input() soundID = '351827211';


  /** The control for the SoundCloud Player */
  player: any;

  /** The container in which the SoundCloud player will be in. */
  @ViewChild('playerContainer') playerContainer!: ElementRef<HTMLElement>;

  constructor(private renderer: Renderer2) { };

  ngOnInit(): void {
    // var iframeElement = document.querySelector('iframe');
    // var iframeElementID = iframeElement.id;
    // var widget1 = SC.Widget(iframeElement);
    // var widget2 = SC.Widget(iframeElementID);
    // widget1 === widget2
  }


  ngAfterViewInit() {
    // Creating the SoundCloud iframe to embed the frame.

    // Query Params
    // auto_play	true/false	Start playing the item automatically
    // color	hex code	Color play button and other controls. e.g. “#0066CC”
    // buying	true/false	Show/Hide buy buttons
    // sharing	true/false	Show/Hide share buttons
    // download	true/false	Show/Hide download buttons
    // show_artwork	true/false	Show/Hide the item’s artwork
    // show_playcount	true/false	Show/Hide number of track plays
    // show_user	true/false	Show/Hide the uploader name
    // start_track	number	A number from 0 to the playlist length which reselects the track in a playlist
    // single_active	true/false	If set to false the multiple players on the page won’t toggle each other off when playing
    let div = this.renderer.createElement('iframe');
    this.renderer.setAttribute(div, 'id', 'player');
    this.renderer.setAttribute(div, 'scrolling', 'no');
    this.renderer.setAttribute(div, 'frameborder', 'no');
    this.renderer.setAttribute(div, 'allow', 'autoplay');
    this.renderer.setAttribute(div, 'title', 'SoundCloud audio player');
    this.renderer.setAttribute(div, 'src', 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/'+this.soundID+'&buying=false&visual=true&download=true');//color=0066cc&
    this.renderer.addClass(div, 'w-100');
    this.renderer.addClass(div, 'h-100');
    this.renderer.appendChild(this.playerContainer.nativeElement, div);


    // <iframe width="100%" height = "166" scrolling = "no" frameborder = "no" allow = "autoplay"
    // src = "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/34019569&color=0066cc" >
    //   </iframe> 
    // Starts the video
    this.onSoundCloudIframeAPIReady();
  }

  // PLAY(event: any) {
    // console.log(event)
    // console.log('event')
    // this.player.getVolume((vol: any) => {
    //   console.log(vol)
    // })
    // event.target.playVideo();
    // console.log(this.player.getVolume())
    // console.log(this.player.getDuration())
    
    // setTimeout(() => {
    //   // console.log(this.player.getVolume())
    //   // console.log(this.player.getDuration())
    //   // console.log(this.player.Events)
    //   // console.log(this.player)
    //   // this.player.getVolume((vol: any) => {
    //   //   console.log(vol)
    //   // })

    // }, 5000);
  // }

  onPlayerReady(event: any) {
    // console.log(this.player)
    this.player.play()
    
    this.player.getVolume((volume: any) => {
      console.log(volume)
    })
    this.player.getDuration((duration: any) => {
      console.log(duration)
    })
    // console.log(this.player.getVolume())
    // console.log(this.player.getDuration())
    // console.log('event')
    // event.target.playVideo();
  }
  onPlayerFinish(){
    console.log('finished')
  }
  PLAY_PROGRESS(event: any){
    console.log('p', event)
    // {soundId: 351827211, loadedProgress: 0.5420645161290325, currentPosition: 17115.131999999998, relativePosition: 0.08453294610973638}

  }
  /**
   * Adds the `onReady` and `onStateChange` events to `this.player`.
   */
  onSoundCloudIframeAPIReady(): void {
    this.player = new window.SC.Widget('player');
    this.player.bind(window.SC.Widget.Events.READY, this.onPlayerReady.bind(this))
    this.player.bind(window.SC.Widget.Events.FINISH, this.onPlayerFinish.bind(this))
    // this.player.bind(window.SC.Widget.Events.PLAY_PROGRESS, this.PLAY_PROGRESS.bind(this))
    // this.player.bind(window.SC.Widget.Events.PLAY, this.PLAY.bind(this))

    // LOAD_PROGRESS
    // PLAY_PROGRESS
    // PLAY
    // PAUSE
    // FINISH
    // SEEK
    // READY
    // OPEN_SHARE_PANEL
    // CLICK_DOWNLOAD
    // CLICK_BUY
    




    // var eventKey: any, eventName: any;
    // console.log('sdsd',window.SC.Widget.Events.READY)

    // for (eventKey in window.SC.Widget.Events) {
    //   console.log(eventKey);
    //   ((eventName: any, eventKey: any) => {
    //     eventName = window.SC.Widget.Events[eventKey];
    //     this.player.bind(eventName,  (eventData: any) => {
    //       console.log("SC.Widget.Events." + eventKey + " " + JSON.stringify(eventData || {}));
    //     });
    //   });
    // }


    // window.SC.addEventListener('onPlayerReady', function(player:any, data:any) {
    //   console.log("widget ready, let's play");
    //   player.api_play();
    // });
    // let iframeElement = document.querySelector('iframe');
    // console.log(iframeElement)
    // let iframeElementID = iframeElement?.id;
    // let widget1 = new window.SC.Widget(iframeElement);
    // let widget2 = new window.SC.Widget(iframeElementID);
    // console.log(widget1, widget2)
    // this.player = window.SC.Widget('player');

    // setTimeout(() => {
    //   console.log(this.player.getVolume())
    //   console.log(this.player.getDuration())
    //   console.log(this.player.Events)
    //   console.log(this.player)
    //   this.player.getVolume((vol: any) => {
    //     console.log(vol)
    //   })

    // }, 5000);

    // window.addEventListener("getVolume", (event) => {
    //   console.log(event)
    // //   if (event.origin !== "http://example.org:8080")
    // //     return;

    // //   // ...
    // }, false);
    // this.player.Events.subscribe((event:any)=>{
    //   console.log(event);
    // })

  }


  pause() {
    this.player.pause();

  }
  play() {
    this.player.play();
  }
  stop() {
    this.pause();
    this.seekTo(0);
  }
  seekTo(milliseconds: number) {
    this.player.seekTo(milliseconds);
  }
  setVolume(volume: number) {
    this.player.setVolume(volume);
  }
  // bind(eventName, listener) — adds a listener function for the specified eventName. See below for the list of possible event names.
  // unbind(eventName) — removes all listener functions previously added for the specified eventName. See below for the list of possible event names.
  // load(url, options) — reloads the iframe element with a new widget specified by the url. All previously added event listeners will continue working. options is an object which allows you to define all possible widget parameters as well as a callback function which will be executed as soon as new widget is ready. See below for detailed list of widget parameters.
  // play() — plays the sound.
  // pause() — pauses the sound.
  // toggle() — toggles the sound.
  // seekTo(milliseconds) — jumps to a certain position in a sound.
  // setVolume(volume) — sets the widget volume to a certain value in the range 0-100.
  // next() — skips to the next sound (only if the widget contains multiple sounds).
  // prev() — skips to the previous sound (only if the widget contains multiple sounds).
  // skip(soundIndex) — jumps to the soundIndex sound, starting from 0 (only if the widget contains multiple sounds).



  // getVolume(callback) — returns the current volume, in the range of [0, 100].
  // getDuration(callback) — returns current sound duration in milliseconds.
  // getPosition(callback) — returns current sound position in milliseconds.
  // getSounds(callback) — returns the list of sound objects.
  // getCurrentSound(callback) — returns current sound object.
  // getCurrentSoundIndex(callback) — returns the index of current sound.
  // isPaused(callback) — whether the widget is paused.


  // SC.Widget.Events.LOAD_PROGRESS — fired periodically while the sound is loading.
  // SC.Widget.Events.PLAY_PROGRESS — fired periodically while the sound is playing.
  // SC.Widget.Events.PLAY — fired when the sound begins to play.
  // SC.Widget.Events.PAUSE — fired when the sound pauses.
  // SC.Widget.Events.FINISH — fired when the sound finishes.
  // SC.Widget.Events.SEEK — fired when the user seeks.
}
