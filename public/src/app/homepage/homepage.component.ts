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
  // public money = 0;
  // private stress = 20;
  // private salary = 1;
  // public score = 0;
  private avanceChance = 0;

  // public friends = 10;
  // private cigarettes = 0;
  // private alcohol = 0;
  // private drugs = 0;
  private names: Array<string>=["money", "stress", "salary", "score", "friends"];
  public dictionary = {
    "money":0,
    "stress":20,
    "salary": 1,
    "score":0,
    "friends":10
  }
  // private event: Event = {event_title: "dfd", event_description:"dff",event_image:"dsfdf", event_choice_1: "sdsd", event_choice_2: "sdsd"};
  public activities: any = [];
  public event: any;
  public randEvent: Event;
  private salaryTime = 0;
  public visible = 0;
  public timeFromLastEvent = 0;
  private timeBetweenEvents = 200;
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
    // this.getRandomEvent();
    var interval = setInterval(()=>{
      this.animateApp();
    },25);
  }



  // getActivities() {
  //     this._service.getActivities()
  //     .subscribe(result => {
  //       this.activities = result;
  //     }, error => {console.log(error)});
  //
  // }

  animateApp() {
    this.changeProgressBar('.stress-bar', '.progressBottom');
    if(this.dictionary.stress >= 100) this.dictionary.stress = 100;
    // this.updateDict();
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
    // console.log(this.timeFromLastEvent);
    if(this.visible===0) {
      this.timeFromLastEvent++;
    }
    if(this.timeFromLastEvent >= this.timeBetweenEvents) {
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
      this.dictionary.money += this.dictionary.salary;
      this.salaryTime = 0;
    }
  }
  animationCrossFunc() {
    this.animationCross++;
    if( this.dictionary.stress < 80) {
      $('.outerCross').css('display','none');
    }
    if(this.animationCross > 13 && this.dictionary.stress >= 80) {
      if($('.outerCross').hasClass('visible')) {
        $('.outerCross').removeClass('visible');
      } else {
        $('.outerCross').addClass('visible');
      }
      this.animationCross = 0;
    }
    if(this.animationCross > 8 && this.dictionary.stress >= 90) {
      if($('.outerCross').hasClass('visible')) {
        $('.outerCross').removeClass('visible');
      } else {
        $('.outerCross').addClass('visible');
      }
      this.animationCross = 0;
    }
  }
  initBars() {
    $('.stress-bar').width(this.dictionary.stress + '%');
    // var red = Math.floor($(name).width()/$('.progress').width()*255);
    // $('.progress-bar').css('background-color', "rgb("+red.toString()+","+(255-red).toString()+",0)");
  }

  changeProgressBar(name: string, compare: string) {
    // document.getElementsByClassName("progress-bar").style.width = "40%";
    //console.log($('.stress-bar').width(), $('.progressBottom').width());
    if ($(name).width() <= $(compare).width()) {
      $(name).width(this.dictionary.stress + '%');
      if (name === '.stress-bar') {
        // console.log("rgb("+$(name).width()+", 0, 0)");
        var red = Math.floor($(name).width()/$('.progressBottom').width()*255);
        $(name).css('background-color', "rgb("+red.toString()+","+(255-red).toString()+",0)");
      }
    }

  }


  getRandomEvent() {
    this._service.getRandomEvent()
      .subscribe(result => {
        this.event = result;
        $('.event').css('display', 'block');
        this.visible = 1;
      }, error => {console.log(error)});
  }

  getNotRandom(n:number) {
    this._service.getNotRandomEvent(n)
      .subscribe(result => {
        this.event = result;
        console.log(result);
        $('.event').css('display', 'block');
        this.visible = 1;
      }, error => {console.log(error)});
  }
  // randomEvent() {
  //   this.randEvent = this.events[Math.floor(Math.random()*7)];
  //   $('.event').css('display','block');
  //   //console.log(this.randEvent);
  // }
  close($e,n:number) {
    // this.visible = 0;
    $('.event').css('display', 'none');
    if(n===1) {
      if ($e.choiceAId!==0) {
        this.event = this.getNotRandom($e.choiceAId);
      }
    } else if(n===2) {
      if ($e.choiceBId!==0) {
        this.event = this.getNotRandom($e.choiceBId);
      }
    }
    if ($e.choiceAId === 0) {

      this.getByName($e);
      //console.log(this.dictionary);
      // if ($e.values.money !== undefined)
      //   this.dictionary.money += $e.values.money;
      // if ($e.values.stress !== undefined)
      //   this.dictionary.stress += $e.values.stress;
      // if ($e.values.salary !== undefined)
      //   this.dictionary.salary += $e.values.salary;
      // if ($e.values.score !== undefined)
      //   this.dictionary.score += $e.values.score;
      // if ($e.values.friends !== undefined)
      //   this.dictionary.friends += $e.values.friends;
      // if ($e.values.cigarettes !== undefined)
      //   this.dictionary.cigarettes += $e.values.cigarettes;
      // if ($e.values.alcohol !== undefined)
      //   this.dictionary.alcohol += $e.values.alcohol;
      // if ($e.values.drugs !== undefined)
      //   this.dictionary.drugs += $e.values.drugs;
      // if ($e.values.beer !== undefined)
      //   this.dictionary["beer"] += $e.values.beer;
      // "money":0,
      // "stress":20,
      // "salary": 1,
      // "score":0,
      // "friends":10,
      // "cigarettes":0,
      // "alcohol":0,
      // "drugs":0
      this.visible = 0;
    }
  }
  getByName($e) {
    // console.log($e.values);
    for(var k in $e.values) {
      if(!this.names.includes(k)) {
        this.names.push(k);
        this.dictionary[k] = 0;
        this.getByString(k);
      }
      // this.dictionary[k] += 1;
    }
    // this._service.getActivities()
    //   .subscribe(result => {
    //     this.event = result;
    //     $('.event').css('display', 'block');
    //     this.visible = 1;
    //   }, error => {console.log(error)});
  }
  getByString(k:string) {
    this._service.getActivities(k)
      .subscribe(result => {

        this.activities.push(result);
        // let topush = {} as Activity;
        // topush = result;
        console.log(this.activities);
        //this.activities[this.activities.length - 1] = topush;
      }, error => {console.log(error)});
  }
  increaseMoney() {
    this.dictionary.money++;
    this.dictionary.stress++;
    //console.log(this.stress);
  }
  touchActivity($e) {
    //
    // if ($e.price3 <= this.money) {
    //   this.money -= $e.price3;
    //   this.stress += $e.stress3;
    //   this.friends += $e.friends3;
    //   this.cigarettes += $e.cigaretes3;
    //   this.alcohol += $e.alcochol3;
    //   this.drugs += $e.drugs3;

    }
  // }
  onMouseDown($event, $activit) {
    // console.log($activit);
    $($event.toElement).css('background-image', 'url(' + $activit.obrazek_image2 + ')');
  }
  onMouseUp($event, $activit) {
    // console.log($activit);
    $($event.toElement).css('background-image', 'url(' + $activit.obrazek_image + ')');
  }

}
