import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {AppRoutingModule} from '../../app-routing.module';
import {SharedLibModule} from '../shared-lib/shared-lib.module';
import {HeaderLayoutComponent} from './header-layout/header-layout.component';
import {LayoutRoutingModule} from './layout-routing.module';
import {BodyLayoutComponent} from './body-layout/body-layout.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [HeaderLayoutComponent, MainLayoutComponent, BodyLayoutComponent, CarouselComponent],
  exports: [],
  imports: [CommonModule, AppRoutingModule, LayoutRoutingModule, SharedLibModule]
})
export class LayoutModule {
}
