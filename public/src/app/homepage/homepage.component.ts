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
  private animationCross = 0;
  public money = 0;
  private stress = 20;
  private salary = 1;
  public score = 0;
  private avanceChance = 0;

  public friends = 10;
  private cigarettes = 0;
  private alcohol = 0;
  private drugs = 0;

  private dictionary = {
    "money":this.money,
    "stress":this.stress,
    "salary": this.salary,
    "score":this.score,
    "friends":this.friends,
    "cigarettes":this.cigarettes,
    "alcohol":this.alcohol,
    "drugs":this.drugs
  }
  // private event: Event = {event_title: "dfd", event_description:"dff",event_image:"dsfdf", event_choice_1: "sdsd", event_choice_2: "sdsd"};
  public activities: any;
  private event: any;
  public randEvent: Event;
  private salaryTime = 0;
  public timeFromLastEvent = 0;
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

    //this.getActivities();
    // this.getRandomEvent();
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
    if(this.stress >= 100) this.stress = 100;
    this.updateDict();
    this.animationCrossFunc();
    this.checkEvent();
    this.addSalary();
    // this.timeTillLastEvent++;
    // if (this.timeTillLastEvent >= 100) {
    //   //this.getEvent();
    //   this.timeTillLastEvent = 0;
    // }
  }
  checkEvent() {
    if($('.salary').i) {
      this.timeFromLastEvent++;
    }
    if(this.timeFromLastEvent >= 50) {
      // var ev = this.getRandomEvent();
      // console.log(ev);
      // if(this.timeFromLastEvent >= 100) {
      //   this.timeFromLastEvent = 0;
      //   if(ev !== this.event) {
      //     console.log(ev);
      //   }
      // }
      this.getRandomEvent();
      this.timeFromLastEvent = 0;
    }

  }
  addSalary() {
    this.salaryTime++;
    if(this.salaryTime >= 120) {
      this.money += this.salary;
      this.salaryTime = 0;
    }
  }
  animationCrossFunc() {
    this.animationCross++;
    if( this.stress < 80) {
      $('.outerCross').css('display','none');
    }
    if(this.animationCross > 13 && this.stress >= 80) {
      if($('.outerCross').hasClass('visible')) {
        $('.outerCross').removeClass('visible');
      } else {
        $('.outerCross').addClass('visible');
      }
      this.animationCross = 0;
    }
    if(this.animationCross > 8 && this.stress >= 90) {
      if($('.outerCross').hasClass('visible')) {
        $('.outerCross').removeClass('visible');
      } else {
        $('.outerCross').addClass('visible');
      }
      this.animationCross = 0;
    }
  }
  initBars() {
    $('.stress-bar').width(this.stress + '%');
    // var red = Math.floor($(name).width()/$('.progress').width()*255);
    // $('.progress-bar').css('background-color', "rgb("+red.toString()+","+(255-red).toString()+",0)");
  }

  changeProgressBar(name: string, compare: string) {
   // document.getElementsByClassName("progress-bar").style.width = "40%";
    //console.log($('.stress-bar').width(), $('.progressBottom').width());
    if ($(name).width() <= $(compare).width()) {
       $(name).width(this.stress + '%');
      if (name === '.stress-bar') {
        // console.log("rgb("+$(name).width()+", 0, 0)");
        var red = Math.floor($(name).width()/$('.progressBottom').width()*255);
        $(name).css('background-color', "rgb("+red.toString()+","+(255-red).toString()+",0)");
      }
    }

  }

  updateDict() {
  this.dictionary['money'] = this.money;
    this.dictionary['stress'] = this.stress;
    this.dictionary['salary'] = this.salary;
    this.dictionary['score'] =  this.score;
    this.dictionary['friends'] = this.friends;
    this.dictionary['cigarettes'] =  this.cigarettes;
    this.dictionary['alcohol'] =  this.alcohol;
    this.dictionary['drugs'] = this.drugs;

  }

  getRandomEvent() {
    this._service.getRandomEvent()
      .subscribe(result => {
        this.event = result;
        // console.log(this.event);
        $('.event').css('display', 'block');
      }, error => {console.log(error)});
}
  // randomEvent() {
  //   this.randEvent = this.events[Math.floor(Math.random()*7)];
  //   $('.event').css('display','block');
  //   //console.log(this.randEvent);
  // }
  close($e) {
    $('.event').css('display', 'none');
    if($e===1) {
      if(this.stress<=100) {
        this.stress += this.randEvent.stress1;
        if(this.stress > 100) this.stress = 100;
      }
      this.friends += this.randEvent.friends1;
      this.cigarettes += this.randEvent.cigaretes1;
      this.alcohol += this.randEvent.alcochol1;
      this.drugs += this.randEvent.drugs1;
    } else if($e===2) {
      if(this.stress<=100) {
        this.stress += this.randEvent.stress2;
        if(this.stress > 100) this.stress = 100;
      }
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
  onMouseDown($event, $activit) {
    // console.log($activit);
    $($event.toElement).css('background-image', 'url(' + $activit.obrazek_image2 + ')');
  }
  onMouseUp($event, $activit) {
    // console.log($activit);
    $($event.toElement).css('background-image', 'url(' + $activit.obrazek_image + ')');
  }

}
