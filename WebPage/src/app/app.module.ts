import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BookTradeComponent } from './book-trade/book-trade.component';
import { PrintTradeComponent } from './print-trade/print-trade.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FxtradebookingComponent } from './fxtradebooking/fxtradebooking.component';
import { FormsModule } from '@angular/forms';
import { ExitComponent } from './exit/exit.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxPaginationModule } from 'ngx-pagination';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './shared/material.module';
import { MatConfirmDialogComponent } from './shared/mat-confirm-dialog/mat-confirm-dialog.component';
import { ExitConfirmComponent } from './shared/exit-confirm/exit-confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookTradeComponent,
    PrintTradeComponent,
    NotFoundComponent,
    FxtradebookingComponent,
    ExitComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    NgxPaginationModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [MatConfirmDialogComponent, ExitConfirmComponent],
})
export class AppModule {}
