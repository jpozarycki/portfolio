import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutMeComponent} from './about-me/about-me.component';
import {MainComponent} from './main/main.component';
import {MoreComponent} from './more/more.component';
import {ProjectsComponent} from './projects/projects.component';
import {ContactComponent} from './contact/contact.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: MainComponent, data: {animation: 'Main'}},
  {path: 'more', component: MoreComponent, data: {animation: 'More'},
  children: [
    {path: 'about-me', component: AboutMeComponent, data: {animation: 'AboutMe'}},
    {path: 'projects', component: ProjectsComponent, data: {animation: 'Projects'}},
    {path: 'contact', component: ContactComponent, data: {animation: 'Contact'}},
    {path: 'login', component: LoginComponent, data: {animation: 'Login'}}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
