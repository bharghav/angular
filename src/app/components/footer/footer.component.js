"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var FooterComponent = (function () {
    function FooterComponent() {
    }
    return FooterComponent;
}());
FooterComponent = __decorate([
    core_1.Component({
        selector: 'footer',
        template: "\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <h3>About</h3>\n        <p>We strive to deliver a level of service that exceeds the expectations of our customers. <br />\n          <br />\n          If you have any questions about our products or services, please do not hesitate to contact us. We have friendly,\n          knowledgeable representatives available seven days a week to assist you.</p>\n      </div>\n      <div class=\"col-md-3\">\n        <h3>Tweets</h3>\n        <p><span>Tweet</span> <a href=\"#\">@You</a><br />\n          Etiam egestas, ipsum posuere accumsan sollicitudin, nulla mauris volutpat sem, sit amet rutrum risus. </p>\n        <p><span>Tweet</span> <a href=\"#\">@You</a><br />\n          Quisque porta tellus vitae adipiscing molestie. Mauris et lacus blandit, malesuada.</p>\n      </div>\n      <div class=\"col-md-3\">\n        <h3>Mailing list</h3>\n        <p>Subscribe to our mailing list for offers, news updates and more!</p>\n        <br />\n        <form action=\"#\" method=\"post\" class=\"form-inline\" role=\"form\">\n          <div class=\"form-group\">\n            <label class=\"sr-only\" for=\"exampleInputEmail2\">your email:</label>\n            <input type=\"email\" class=\"form-control form-control-lg\" id=\"exampleInputEmail2\" placeholder=\"your email:\">\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\">subscribe</button>\n        </form>\n      </div>\n      <div class=\"col-md-3\">\n        <h3>Social</h3>\n        <p>123 Business Way<br />\n          San Francisco, CA 94108<br />\n          USA<br />\n          <br />\n          Phone: (888) 123-4567<br />\n          Fax: (887) 123-4567<br />\n          <br />\n        </p>\n        <div class=\"social__icons\"> <a href=\"#\" class=\"socialicon socialicon-twitter\"></a>\n        <a href=\"#\" class=\"socialicon socialicon-facebook\"></a>\n        <a href=\"#\" class=\"socialicon socialicon-google\"></a>\n        <a href=\"#\" class=\"socialicon socialicon-mail\"></a> </div>\n      </div>\n    </div>\n    <hr>\n    <p class=\"text-center\">&copy; Copyright ABC Company. All Rights Reserved.</p>\n  </div>\n  ",
    })
], FooterComponent);
exports.FooterComponent = FooterComponent;
//# sourceMappingURL=footer.component.js.map