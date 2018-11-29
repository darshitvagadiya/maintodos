import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';

const routes: Routes = [
	{ path: ':status', component: HomeComponentComponent },
	{ path: '**', redirectTo: '/all' }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}