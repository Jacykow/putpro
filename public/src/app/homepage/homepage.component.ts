import { Component, OnInit } from '@angular/core';
import {UnluckyService} from "../unlucky.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public send: number = 45;
  constructor(private _service: UnluckyService) { }

  ngOnInit() {
    console.log(this.send);
    this._service.sendData(this.send)
      .subscribe(result => {
        console.log(result);
      }, error => {console.log(error)});
  }

}
