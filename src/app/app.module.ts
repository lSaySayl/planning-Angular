import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './components/loading/loading.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormToCreateGameComponent } from './components/form-to-create-game/form-to-create-game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormPersonComponent } from './components/form-person/form-person.component';
import { PokerTableComponent } from './components/poker-table/poker-table.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    FormToCreateGameComponent,
    FormPersonComponent,
    PokerTableComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],


  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
