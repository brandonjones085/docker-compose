import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {  MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatInputModule} from '@angular/material/input/'
import { MatCardModule} from '@angular/material/card'
import { MatToolbarModule} from '@angular/material/toolbar'
import { MatExpansionModule} from '@angular/material/expansion'
import {AppComponent} from './app.component'
import { PostCreateComponent} from './posts/post-create/post-create.component'
import { HeaderComponent } from "./header/header.component";
import { PostListComponent } from "./posts/post-list/post-list.component";
import { AppRoutingModule } from "./app-routing.module";
import { RateComponent } from './rate/rate.component';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent,
    RateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
