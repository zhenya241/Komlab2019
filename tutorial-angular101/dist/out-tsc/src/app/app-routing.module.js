var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// import page
import { HomeComponent } from './home/home.component';
import { MicroMapBasicComponent } from './micro-map-basic/micro-map-basic.component';
import { Modify2Component } from './program/modify2/modify2.component';
import { Test2Component } from './program/test2/test2.component';
import { Modify1Component } from './computerScience/modify1/modify1.component';
import { Modify3Component } from './variable/modify3/modify3.component';
import { VariableComponent } from './variable/variable.component';
import { ComputerScienceComponent } from './computerScience/computerScience.component';
import { ProgramComponent } from './program/program.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './helpers/auth.guard';
import { SingleChoiceComponent } from './program/singleChoice/singleChoice.component';
import { Test3Component } from './variable/test3/test3.component';
import { Test1Component } from './computerScience/test1/test1.component';
import { ObjectComponent } from './object/object.component';
import { PrimitiveTypeComponent } from './primitive-type/primitive-type.component';
// Create Path Here
var routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'home', component: HomeComponent },
    { path: 'computerScience', component: ComputerScienceComponent },
    { path: 'program', component: ProgramComponent },
    { path: 'variable', component: VariableComponent },
    { path: 'object', component: ObjectComponent },
    { path: 'primitiveType', component: PrimitiveTypeComponent },
    // don't use children here because svg will be covered by the parent svg
    // children: [
    //   {
    //     path: 'modify2', component: Modify2Component
    //   }]
    { path: 'program/modify2', component: Modify2Component },
    { path: 'program/test2', component: Test2Component },
    { path: 'computerScience/modify1', component: Modify1Component },
    { path: 'computerScience/test1', component: Test1Component },
    { path: 'variable/modify3', component: Modify3Component },
    { path: 'variable/test3', component: Test3Component },
    { path: 'micro-basic', component: MicroMapBasicComponent },
    { path: 'program/singleChoice', component: SingleChoiceComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map