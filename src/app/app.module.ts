import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopoComponent } from './topo/topo.component';
import { RodapeComponent } from './rodape/rodape.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { OfertasComponent } from './ofertas/ofertas.component';
import { ComoUsarComponent } from './ofertas/como-usar/como-usar.component';
import { OndeFicaComponent } from './ofertas/onde-fica/onde-fica.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopoComponent,
    RodapeComponent,
    RestaurantesComponent,
    DiversaoComponent,
    OfertasComponent,
    ComoUsarComponent,
    OndeFicaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
