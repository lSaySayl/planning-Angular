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
import { GameInviteModalComponent } from './components/game-invite-modal/game-invite-modal.component';
import {ClipboardModule} from '@angular/cdk/clipboard';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {AngularFireModule} from '@angular/fire/compat';
import {AngularFireAuthModule} from '@angular/fire/compat/auth';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    FormToCreateGameComponent,
    FormPersonComponent,
    PokerTableComponent,
    CardComponent,
    SelectCardsComponent,
    GameInviteModalComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
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
    ClipboardModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
