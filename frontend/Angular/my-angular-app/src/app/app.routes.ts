import { Routes } from '@angular/router';
import { HelloComponent } from './components/hello/hello.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [ 
    { path: 'hello', component: HelloComponent },  // Hello route
    ]