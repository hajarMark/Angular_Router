import { Routes } from "@angular/router";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { UserComponent } from "./user/user.component";

const ROUTES: Routes = [
  {path: 'user', component: UserComponent},
  {path: 'signup', component: SignUpComponent},
  {path: '', redirectTo: '/user', pathMatch: 'full'},
]

export { ROUTES }