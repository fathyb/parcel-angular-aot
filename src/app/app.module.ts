import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { routing } from './app.routes';


@NgModule({

    imports: [BrowserModule,
              BrowserAnimationsModule,
              CommonModule,
              HttpClientModule,
              routing],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule { }
