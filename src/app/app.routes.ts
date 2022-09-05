import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component'
import {RestaurantesComponent} from './restaurantes/restaurantes.component'
import {DiversaoComponent} from './diversao/diversao.component'
import { OfertasComponent } from './ofertas/ofertas.component';
import { ComoUsarComponent } from './ofertas/como-usar/como-usar.component';
import { OndeFicaComponent } from './ofertas/onde-fica/onde-fica.component';

export const ROUTES: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'diversao',
        component: DiversaoComponent
    },
    {
        path: 'restaurantes',
        component: RestaurantesComponent
    },
    {
        path: 'oferta',
        component: HomeComponent
    },
    {
        path: 'oferta/:id',
        component: OfertasComponent,
        children: [
            {
                path: '',
                component: ComoUsarComponent
            },

            {
                path: 'como-usar',
                component: ComoUsarComponent
            },

            {
                path: 'onde-fica',
                component: OndeFicaComponent
            },
        ]
    },
]