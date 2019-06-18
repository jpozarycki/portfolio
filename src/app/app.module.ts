import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {MainComponent} from './main/main.component';
import {AboutMeComponent} from './about-me/about-me.component';
import {ProjectsComponent} from './projects/projects.component';
import {ContactComponent} from './contact/contact.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MoreComponent} from './more/more.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {LoadingSpinnerComponent} from './login/loading-spinner/loading-spinner.component';
import {AdminComponent} from './admin/admin.component';
import {EditProjectComponent} from './admin/edit-project/edit-project.component';
import {EditResumeComponent} from './admin/edit-resume/edit-resume.component';
import {DataStorageInterceptorService} from './shared/data-storage-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AboutMeComponent,
    ProjectsComponent,
    ContactComponent,
    MoreComponent,
    LoginComponent,
    LoadingSpinnerComponent,
    AdminComponent,
    EditProjectComponent,
    EditResumeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: DataStorageInterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
