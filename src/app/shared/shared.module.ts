import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LayoutModule} from './layout/layout.module';
import {AngularMaterialModule} from './shared-lib/angular-material/angular-material.module';
import {FormsModule} from '@angular/forms';
import {SharedLibModule} from './shared-lib/shared-lib.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    AngularMaterialModule,
    SharedLibModule,
  ],
  exports: [
    LayoutModule,
    AngularMaterialModule,
    FormsModule,
    SharedLibModule,
  ]
})
export class SharedModule {
}
