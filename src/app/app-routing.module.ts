import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormToCreateGameComponent } from './components/form-to-create-game/form-to-create-game.component';
import { PokerTableComponent } from './components/poker-table/poker-table.component';
import { SelectCardsComponent } from './components/select-cards/select-cards.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'game', component: FormToCreateGameComponent },
  { path: 'table', component: PokerTableComponent },
  { path: 'admin', component: SelectCardsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
