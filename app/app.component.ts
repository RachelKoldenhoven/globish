import { Component }       from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HomeComponent } from './home.component';
import { MatchingComponent } from './matching.component';
import { InboxComponent } from './inbox.component';



@Component({
    selector: 'globish',
    template: `
    <h1>{{title}}</h1>
    <nav>
        <a [routerLink]="['Home']">Dashboard</a>
        <a [routerLink]="['Volcanoes']">Volcanoes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
    directives: [ROUTER_DIRECTIVES],
    providers: [
        ROUTER_PROVIDERS
    ]
})

@RouteConfig([
    {
        path: '/home',
        name: 'Home',
        component: HomeComponent
    },
    {
        path: '/matching',
        name: 'Matching',
        component: MatchingComponent,
        useAsDefault: true
    },
    {
        path: '/inbox',
        name: 'Inbox',
        component: InboxComponent
    }
])

export class AppComponent {
    title = 'Globish';
}
