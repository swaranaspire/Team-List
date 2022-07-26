import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeammembersComponent } from './teammembers/teammembers.component';

const routes: Routes = [
  {path:'', component:TeammembersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
