import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WomenComponent,
    MenComponent,
    CheckoutComponent
  ]
})
export class AppModule { }
