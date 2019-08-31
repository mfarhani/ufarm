import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'header',
  templateUrl: './header-layout.component.html',
  styleUrls: ['./header-layout.component.scss']
})
export class HeaderLayoutComponent implements OnInit {
  @Output() toggleSideNave: EventEmitter<void> = new EventEmitter();
  public selectedLang: string;

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
    this.selectedLang = 'EN';
  }

  toggle() {
    this.toggleSideNave.emit();
  }

  public switchLang(lang: string): void {
    this.selectedLang = lang.toUpperCase();
    this.translate.use(lang);
  }
}
