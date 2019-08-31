import {CommonModule} from '@angular/common';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [TranslateModule]
})
export class GlTranslateModule {
}
