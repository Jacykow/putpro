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

  private friends = 0;
  private cigarettes = 0;
  private alcohol = 0;
  private drugs = 0;


  // private event: Event = {event_title: "dfd", event_description:"dff",event_image:"dsfdf", event_choice_1: "sdsd", event_choice_2: "sdsd"};
  private activities: Array<Activity>;
  private event: Event;
  public timeTillLastEvent = 0;
  constructor(private _service: UnluckyService) { }

  ngOnInit() {
    // this._service.sendData(this.send)
    //   .subscribe(result => {
    //     console.log(result);
    //   }, error => {console.log(error)});

    this._service.getEvent()
      .subscribe(result => {
        console.log(result);
      }, error => {console.log(error)});
    this.getActivities();
    this.initBars();
    var interval = setInterval(()=>{
     //this.animateApp();
    },25);
  }

  getActivities() {

  }

  animateApp() {
    this.changeProgressBar('.stress-bar', '.progress');
    this.timeTillLastEvent++;
    if (this.timeTillLastEvent >= 100) {
      this.getEvent();
      this.timeTillLastEvent = 0;
    }
  }
  initBars() {
    $('.stress-bar').width("20%");
    // var red = Math.floor($(name).width()/$('.progress').width()*255);
    // $('.progress-bar').css('background-color', "rgb("+red.toString()+","+(255-red).toString()+",0)");
  }

  changeProgressBar(name: string, compare: string) {
   // document.getElementsByClassName("progress-bar").style.width = "40%";
    if ($(name).width() < $(compare).width()) {
      // $(name).width($(name).width() + value);
      if (name === '.stress-bar') {
        // console.log("rgb("+$(name).width()+", 0, 0)");
        var red = Math.floor($(name).width()/$('.progress').width()*255);
        $('.progress-bar').css('background-color', "rgb("+red.toString()+","+(255-red).toString()+",0)");
      }
    }

  }



  getEvent() {
    // this._service.getEvent()
    //   .subscribe(result => {
    //     if(this.event !== result[0]) {
    //       this.event = result[0];
    //       this.showEvent();
    //     }
    //   }, error => {console.log(error)});
    this.showEvent();
}
  showEvent() {
    console.log(this.event);

  }
  close() {
    $('.event').css('display', 'none');
  }

  increaseMoney() {
    this.money++;
    $('.progress-bar').width($('.progress-bar').width() + 50);
  }


}
