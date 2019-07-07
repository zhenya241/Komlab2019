var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { first } from 'rxjs/operators';
import { UserService } from '@/services/user.service';
import { AuthenticationService } from '@/services/authentication.service';
var UserlistComponent = /** @class */ (function () {
    function UserlistComponent(userService, authenticationService) {
        var _this = this;
        this.userService = userService;
        this.authenticationService = authenticationService;
        this.users = [];
        this.authenticationService.currentUser.subscribe(function (x) { return _this.currentUser = x; });
    }
    UserlistComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
    };
    UserlistComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.userService.delete(id)
            .pipe(first())
            .subscribe(function () { return _this.loadAllUsers(); });
    };
    UserlistComponent.prototype.loadAllUsers = function () {
        var _this = this;
        this.userService.getAll()
            .pipe(first())
            .subscribe(function (users) { return _this.users = users; });
    };
    UserlistComponent = __decorate([
        Component({
            selector: 'app-userlist',
            templateUrl: './userlist.component.html',
            styleUrls: ['./userlist.component.css']
        }),
        __metadata("design:paramtypes", [UserService,
            AuthenticationService])
    ], UserlistComponent);
    return UserlistComponent;
}());
export { UserlistComponent };
//# sourceMappingURL=userlist.component.js.map