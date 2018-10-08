import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProjectComponent } from './project/project.component';
import { ProjectsComponent } from './projects/projects.component';
import { LoginComponent } from './login/login.component';
import { MzButtonModule, MzInputModule } from 'ngx-materialize';

import {Routes, RouterModule} from '@angular/router';
import { ProfileComponent } from './profile/profile.component';

const appRoutes: Routes =[
    { path: 'profile' , component: ProfileComponent },
    { path: '', component: ProjectsComponent}
    //{ path: '**', component: NotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectComponent,
    ProjectsComponent,
    LoginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MzButtonModule,
    MzInputModule,
    RouterModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
