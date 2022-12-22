import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListTaskComponent } from './components/list-estudiante/list-task.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddTaskComponent } from './components/add-task/add-task.component'
import {MatRadioModule} from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatGridListModule} from '@angular/material/grid-list';
/*import { MatNativeDateModule } from '	@angular/material/core';*/
import { MatButtonModule } from
    '@angular/material/button';
import { MatButtonToggleModule } from
    '@angular/material/button-toggle';
import { MatInputModule } from
    '@angular/material/input';
import { MatFormFieldModule } from
    '@angular/material/form-field';
import { MatNativeDateModule } from
    '@angular/material/core';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatAccordion} from '@angular/material/expansion';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { AddGroupComponent } from './components/add-group/add-group.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ListTaskComponent,
    HomeComponent,
    AddTaskComponent,
    RegisterComponent,
    LoginComponent,
    AddGroupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,MatMenuModule,MatIconModule,
    MatSelectModule,
    MatExpansionModule,
    CdkAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
