import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookTradeComponent } from './book-trade/book-trade.component';
import { ExitComponent } from './exit/exit.component';
import { FxtradebookingComponent } from './fxtradebooking/fxtradebooking.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PrintTradeComponent } from './print-trade/print-trade.component';

const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:"FxTradeBooking", component:FxtradebookingComponent
  },
  {
    path:'BookTrade', component: BookTradeComponent
  },
  {
    path:'PrintTrade', component: PrintTradeComponent
  },
  {
    path:'Exit', component:ExitComponent
  },
  {
    path:"**", component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
