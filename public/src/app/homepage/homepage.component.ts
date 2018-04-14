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
  }
  changeProgressBar(name: string, compare: string, value: number) {
   // document.getElementsByClassName("progress-bar").style.width = "40%";
    if ($(name).width() < $(compare).width()) {
      $(name).width($(name).width() + value);
    }
  }
  increaseMoney() {
    this.money++;
    this.changeProgressBar('.stress-bar', '.progress', 10);
  }


}
