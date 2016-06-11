import { Component }       from '@angular/core';
import { VolcanoService }     from './volcano.service';
import { VolcanoesComponent } from './volcanoes.component';
import { DashboardComponent } from './dashboard.component';
import { VolcanoDetailComponent } from './volcano-detail.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{title}}</h1>
    <nav>
        <a [routerLink]="['Dashboard']">Dashboard</a>
        <a [routerLink]="['Volcanoes']">Volcanoes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        VolcanoService,
        ROUTER_PROVIDERS
    ]
})

@RouteConfig([
    {
        path: '/volcanoes',
        name: 'Volcanoes',
        component: VolcanoesComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/detail/:id',
        name: 'VolcanoDetail',
        component: VolcanoDetailComponent
    }
])

export class AppComponent {
    title = 'Tour of Volcanoes';
}
