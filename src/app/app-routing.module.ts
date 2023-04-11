import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { PrivateInfoComponent } from './private-info/private-info.component';

const routes: Routes = [
  { path:"", component: HomePageComponent},
  { path:"private", component: PrivateInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
