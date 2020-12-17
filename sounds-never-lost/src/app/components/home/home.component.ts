import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  show = false;
  constructor() { }

  ngOnInit(): void {
 
  }

  log(event: any){
    console.log(event);
  }

}
