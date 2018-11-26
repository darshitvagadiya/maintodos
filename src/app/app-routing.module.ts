import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoFooterComponent } from './todo-footer/todo-footer.component';

const routes: Routes = [
	{ path: ':status', component: TodoFooterComponent },
	{ path: '**', redirectTo: '/all' }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}