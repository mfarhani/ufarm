import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() showNumber: number;
  @Input() avatars: { url: string, title: string } [];
  model: { url: string, title: string };
  currentIndex = 1;
  speed = 50;
  infinite = false;
  direction = 'right';
  directionToggle = true;
  autoplay = true;

  constructor() {
  }


  ngOnInit() {
    this.model = this.avatars[this.currentIndex];
    setInterval(() => {
      this.currentIndex++;
      if (this.currentIndex === this.avatars.length) {
        this.currentIndex = 0;
      }
      this.model = this.avatars[this.currentIndex];
    }, 5 * 1000);
  }

  next() {
    if (this.currentIndex < this.avatars.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.model = this.avatars[this.currentIndex];
  }

  prev() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.avatars.length - 1;
    }
    this.model = this.avatars[this.currentIndex];
  }

  selectImage(index: number) {
    this.currentIndex = index;
    this.model = this.avatars[index];
  }

}
