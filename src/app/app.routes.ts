import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InventoryComponent } from './components/inventory/inventory.component';
//import { RegisterComponent } from './register/register.component';
import path from 'path';
import { Component } from '@angular/core';
export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'inventory', component: InventoryComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
