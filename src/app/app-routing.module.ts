import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AboutMeComponent} from './about-me/about-me.component';
import {MainComponent} from './main/main.component';
import {MoreComponent} from './more/more.component';
import {ProjectsComponent} from './projects/projects.component';
import {ContactComponent} from './contact/contact.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: MainComponent, data: {animation: 'Main'}},
  {path: 'more', component: MoreComponent, data: {animation: 'More'},
  children: [
    {path: 'about-me', component: AboutMeComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'contact', component: ContactComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
