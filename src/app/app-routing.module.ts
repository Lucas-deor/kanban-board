import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Routes } from "@angular/router"
import { AppComponent } from "./app.component";
import { ErrorComponent } from "./error/error.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'kanban', component: AppComponent},
  { path: 'login', component: LoginComponent, pathMatch:'full'} ,
  { path: 'error', component: ErrorComponent},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
