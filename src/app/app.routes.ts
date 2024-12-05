import { Routes, RouterModule} from '@angular/router';
import { WomenComponent } from './women/women.component';
import { MenComponent } from './men/men.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'women', component:WomenComponent},
    { path: 'men', component:MenComponent},
    { path: 'checkout', component:CheckoutComponent},
    { path: '', component:HomeComponent}
];
