import { NgModule, isDevMode } from '@angular/core';
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
import { StoreModule } from '@ngrx/store';
import { cardReducer } from './state/reducers/card.reducers';
import { SelectCardsComponent } from './components/select-cards/select-cards.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    FormToCreateGameComponent,
    FormPersonComponent,
    PokerTableComponent,
    CardComponent,
    SelectCardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    StoreModule.forRoot({ 'cardReducer':cardReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
