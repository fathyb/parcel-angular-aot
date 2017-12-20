import { NgModule }           from '@angular/core';
import { RouterModule }       from '@angular/router';
import { CommonModule }  from '@angular/common';

import { HomeComponent } from './home.component';

import { routing } from './home.routes';


@NgModule({
  imports:      [ RouterModule,
                  CommonModule,
                  routing ],

  declarations: [ HomeComponent ]
})

export class HomeModule {}
