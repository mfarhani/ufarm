import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'UFarm';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['en', 'fa']);
    this.translate.setDefaultLang('fa');
    this.translate.onLangChange.subscribe(lang => {
      if (lang.lang === 'en') {
        window.document.body.dir = 'ltr';
      } else {
        window.document.body.dir = 'rtl';
      }
    });
  }
}
