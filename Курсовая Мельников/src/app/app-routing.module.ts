import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EditComponent } from './edit/edit.component';
import { ProductComponent } from './product/product.component';
import { BuyComponent } from './buy/buy.component';
import { BucketComponent } from './bucket/bucket.component';
import { SearchComponent } from './search/search.component';
import { AdminComponent } from './admin/admin.component';
import { ModeratorComponent } from './moderator/moderator.component';
import { OperatorComponent } from './operator/operator.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductAddComponent } from './product-add/product-add.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "buy", component: BuyComponent },
  { path: "product/:idid", component: ProductComponent },
  { path: "product-edit/:idid", component: ProductEditComponent },
  { path: "profile/:idid", component: ProfileComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "edit", component: EditComponent },
  { path: "bucket", component: BucketComponent },
  { path: "search", component: SearchComponent },
  { path: "admin", component: AdminComponent },
  { path: "moderator", component: ModeratorComponent },
  { path: "operator", component: OperatorComponent },
  { path: "product-add", component: ProductAddComponent },
  { path: "**", component: ErrorComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  ErrorComponent,
  ProfileComponent,
  LoginComponent,
  RegisterComponent,
  EditComponent,
  ProductComponent,
  BuyComponent,
  BucketComponent,
  SearchComponent,
  AdminComponent,
  ModeratorComponent,
  OperatorComponent,
  ProductEditComponent,
  ProductAddComponent
];
