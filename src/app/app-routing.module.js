"use strict";
var router_1 = require("@angular/router");
var home_component_1 = require("./components/pages/home.component");
var about_component_1 = require("./components/pages/about.component");
var contact_component_1 = require("./components/pages/contact.component");
var register_component_1 = require("./components/pages/register.component");
var router = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'register', component: register_component_1.RegisterComponent }
];
exports.routing = router_1.RouterModule.forRoot(router);
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
//# sourceMappingURL=app-routing.module.js.map