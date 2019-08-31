import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {SchemaFormModule, WidgetRegistry} from 'ngx-schema-form';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {HTTP_INTERCEPTORS, HttpClient} from '@angular/common/http';
import {createTranslateLoader} from './shared/shared-lib/gl-translate/gl-translate.module';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {ToastrModule, ToastrService} from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    SharedModule,
    ToastrModule.forRoot(),
    SchemaFormModule.forRoot(),
    NgxWebstorageModule.forRoot({prefix: 'gl', separator: '.'}),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap:
    [AppComponent]
})

export class AppModule {
}
