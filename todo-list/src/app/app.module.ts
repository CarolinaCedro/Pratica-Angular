import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {DisplayComponent} from "./home/components/display/display.component";
import {BtnAddTaskComponent} from "./home/components/btn-add-task/btn-add-task.component";
import {BtnDeleteComponent} from "./home/components/btn-delete/btn-delete.component";
import {HeaderComponent} from "./home/components/header/header.component";


@NgModule({
  declarations: [
    AppComponent,
    DisplayComponent,
    BtnAddTaskComponent,
    BtnDeleteComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
