import { Component, OnInit } from '@angular/core';
import {UnluckyService} from "../unlucky.service";
import * as $ from 'jquery';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public send: number = 45;
  public money: number = 0;
  constructor(private _service: UnluckyService) { }

  ngOnInit() {
    this._service.sendData(this.send)
      .subscribe(result => {
        console.log(result);
      }, error => {console.log(error)});
    this.initBars();
  }
  initBars() {
    $('.stress-bar').width("20%");
    var red = Math.floor($(name).width()/$('.progress').width()*255);
    $('.progress-bar').css('background-color', "rgb("+red.toString()+","+(255-red).toString()+",0)");
  }
  changeProgressBar(name: string, compare: string, value: number) {
   // document.getElementsByClassName("progress-bar").style.width = "40%";
    if ($(name).width() < $(compare).width()) {
      $(name).width($(name).width() + value);
      if (name === '.stress-bar') {
        // console.log("rgb("+$(name).width()+", 0, 0)");
        var red = Math.floor($(name).width()/$('.progress').width()*255);
        $('.progress-bar').css('background-color', "rgb("+red.toString()+","+(255-red).toString()+",0)");
      }
    }

  }
  increaseMoney() {
    this.money++;
    this.changeProgressBar('.stress-bar', '.progress', 100);
  }


}
