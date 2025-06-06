import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { TesteComponent } from './components/teste/teste.component';
import { CardsTermosComponent } from './components/cards-termos/cards-termos.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'teste',
        component: TesteComponent
    },
    {
        path: 'cards-termos',
        component: CardsTermosComponent
    }
];
