import { Component, OnInit } from '@angular/core';
import {UnluckyService} from "../unlucky.service";
import {Activity} from "../activity";
import {Event} from '../event';
import * as $ from 'jquery';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public send = 45;
  private money = 0;
  private stress = 20;
  private jobPosition = 0;
  private score = 0;

  private friends = 10;
  private cigarettes = 0;
  private alcohol = 0;
  private drugs = 0;


  // private event: Event = {event_title: "dfd", event_description:"dff",event_image:"dsfdf", event_choice_1: "sdsd", event_choice_2: "sdsd"};
  private activities: any;
  private events: any;
  private randEvent: Event;
  public timeTillLastEvent = 0;
  constructor(private _service: UnluckyService) { }

  ngOnInit() {
    // this._service.sendData(this.send)
    //   .subscribe(result => {
    //     console.log(result);
    //   }, error => {console.log(error)});

    // this._service.getEvent()
    //   .subscribe(result => {
    //     console.log(result);
    //   }, error => {console.log(error)});
    this.getActivities();
    this.getEvents();
    this.initBars();
    var interval = setInterval(()=>{
      this.animateApp();
    },25);
  }

  getActivities() {
      this._service.getActivities()
      .subscribe(result => {
        this.activities = result;
      }, error => {console.log(error)});

  }

  animateApp() {
    this.changeProgressBar('.stress-bar', '.progressBottom');
    // this.timeTillLastEvent++;
    // if (this.timeTillLastEvent >= 100) {
    //   //this.getEvent();
    //   this.timeTillLastEvent = 0;
    // }
  }
  initBars() {
    $('.stress-bar').width(this.stress + '%');
    // var red = Math.floor($(name).width()/$('.progress').width()*255);
    // $('.progress-bar').css('background-color', "rgb("+red.toString()+","+(255-red).toString()+",0)");
  }

  changeProgressBar(name: string, compare: string) {
   // document.getElementsByClassName("progress-bar").style.width = "40%";
    //console.log($('.stress-bar').width(), $('.progressBottom').width());
    if ($(name).width() < $(compare).width()) {
       $(name).width(this.stress + '%');
       console.log($(name).width());
      if (name === '.stress-bar') {
        // console.log("rgb("+$(name).width()+", 0, 0)");
        var red = Math.floor($(name).width()/$('.progressBottom').width()*255);
        $(name).css('background-color', "rgb("+red.toString()+","+(255-red).toString()+",0)");
      }
    }

  }



  getEvents() {
    this._service.getEvent()
      .subscribe(result => {
        this.events = result;
      }, error => {console.log(error)});
}
  randomEvent() {
    this.randEvent = this.events[Math.floor(Math.random()*7)];
    $('.event').css('display','block');
    //console.log(this.randEvent);
  }
  close($e) {
    $('.event').css('display', 'none');
    if($e===1) {
      this.stress += this.randEvent.stress1;
      this.friends += this.randEvent.friends1;
      this.cigarettes += this.randEvent.cigaretes1;
      this.alcohol += this.randEvent.alcochol1;
      this.drugs += this.randEvent.drugs1;
    } else if($e===2) {
      this.stress += this.randEvent.stress2;
      this.friends += this.randEvent.friends2;
      this.cigarettes += this.randEvent.cigaretes2;
      this.alcohol += this.randEvent.alcochol2;
      this.drugs += this.randEvent.drugs2;
    }
  }

  increaseMoney() {
    this.money++;
    this.stress++;
    //console.log(this.stress);
  }
  touchActivity($e) {

    if ($e.price3 <= this.money) {
      this.money -= $e.price3;
      this.stress += $e.stress3;
      this.friends += $e.friends3;
      this.cigarettes += $e.cigaretes3;
      this.alcohol += $e.alcochol3;
      this.drugs += $e.drugs3;

    }
  }

}
