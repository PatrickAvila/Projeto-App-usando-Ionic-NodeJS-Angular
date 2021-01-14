import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NoticiasPage } from './noticias.page';
import {HttpClientModule} from '@angular/common/http';

import { NoticiasPageRoutingModule } from './noticias-routing.module';

@NgModule({
  imports: [
    HttpClientModule,
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule,
    NoticiasPageRoutingModule
  ],
  declarations: [NoticiasPage]
})
export class NoticiasPageModule {}

