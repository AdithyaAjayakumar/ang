import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import {BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';


 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FormsModule, 
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatCardModule,
    MatRadioModule,
    MatSelectModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
