import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule  } from '@angular/router';

import { HomeComponent } from './components/pages/home.component';
import { AboutComponent } from './components/pages/about.component';
import { ContactComponent } from './components/pages/contact.component';
import { RegisterComponent } from './components/pages/register.component';

 const router: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent }

 ];

 export const routing: ModuleWithProviders = RouterModule.forRoot(router);



//  @NgModule({
//   imports: [

//     RouterModule.forRoot(routes)
//   ],
//    exports: [RouterModule],
//   declarations: []
// })
// export class AppRoutingModule { }
 // export class AppRoutingModule{}
// export const routes: ModuleWithProviders = RouterModule.forRoot(router);

