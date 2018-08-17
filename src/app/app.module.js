"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./components/navbar/navbar.component");
var home_component_1 = require("./components/pages/home.component");
var footer_component_1 = require("./components/footer/footer.component");
var about_component_1 = require("./components/pages/about.component");
var contact_component_1 = require("./components/pages/contact.component");
var app_routing_module_1 = require("./app-routing.module");
var register_component_1 = require("./components/pages/register.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routing_module_1.routing, forms_1.FormsModule],
        declarations: [app_component_1.AppComponent,
            navbar_component_1.NavbarComponent,
            home_component_1.HomeComponent,
            footer_component_1.FooterComponent,
            about_component_1.AboutComponent,
            contact_component_1.ContactComponent,
            register_component_1.RegisterComponent
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map