import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {MainLayoutComponent} from './main-layout/main-layout.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LayoutRoutingModule {

}
