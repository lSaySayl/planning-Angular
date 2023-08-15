import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormToCreateGameComponent } from './components/form-to-create-game/form-to-create-game.component';
import { PokerTableComponent } from './components/poker-table/poker-table.component';

const routes: Routes = [
  {path: "", component:FormToCreateGameComponent},
  {path: "table", component:PokerTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
