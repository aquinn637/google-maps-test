import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { MapsPageComponent } from "./maps-page/maps-page.component";

const routes: Routes = [
    { path: "", redirectTo: "/maps-page", pathMatch: "full" },
    { path: "maps-page", component: MapsPageComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
