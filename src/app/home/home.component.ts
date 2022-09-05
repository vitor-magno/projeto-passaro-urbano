import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [OfertasService]
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[]
  
  constructor(
    public ofertasServices: OfertasService
  ) { }

  ngOnInit(): void {
    //this.ofertas = this.ofertasServices.getOfertas()

    this.ofertasServices.getOfertas()
      .then((ofertas: Oferta[]) => {
        // console.log('A função foi resolvido depois de 3 segundoss')
        this.ofertas = ofertas
      })
      .catch((param:any) => console.log(param))
  }

}
