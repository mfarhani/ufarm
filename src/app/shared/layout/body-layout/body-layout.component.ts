import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'body-layout',
  templateUrl: './body-layout.component.html',
  styleUrls: ['./body-layout.component.scss']
})
export class BodyLayoutComponent implements OnInit {
  box1Images = [];

  constructor() {
    this.box1Images = [
      {
        url: '../../../../assets/images/slide/1000008961.jpg',
        title: 'sdfas'
      },
      {
        url: '../../../../assets/images/slide/1000009022.jpg',
        title: 'sdfsa'
      },
      {
        url: '../../../../assets/images/slide/1000009104.jpg',
        title: 'sdfas'
      }
    ];
  }

  ngOnInit() {
  }
}
