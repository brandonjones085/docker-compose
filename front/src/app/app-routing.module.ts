import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PostListComponent } from "./posts/post-list/post-list.component";
import { PostCreateComponent } from "./posts/post-create/post-create.component";
import { RateComponent } from './rate/rate.component';

const routes: Routes = [
  { path: "", component: RateComponent}, 
  { path: 'list', component: PostListComponent },
  { path: 'create', component: PostCreateComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
