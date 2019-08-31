import {NgModule} from '@angular/core';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {GlTranslateModule} from './gl-translate/gl-translate.module';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {Ng7MatBreadcrumbModule} from 'ng7-mat-breadcrumb';
import {ExportAsModule} from 'ngx-export-as';
import {NgxHmCarouselModule} from 'ngx-hm-carousel';

@NgModule({
  imports: [
    CommonModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    GlTranslateModule,
    AngularFontAwesomeModule,
    Ng7MatBreadcrumbModule,
    NgxHmCarouselModule,
    ExportAsModule,
    FormsModule
  ],
  exports: [
    AngularMaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    GlTranslateModule,
    AngularFontAwesomeModule,
    Ng7MatBreadcrumbModule,
    NgxHmCarouselModule,
    ExportAsModule,
    FormsModule
  ]
})
export class SharedLibModule {
}
