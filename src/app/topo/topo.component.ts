import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss'],
  providers: [OfertasService]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>
  public ofertas2: Oferta[]
  private subjectPesquisa: Subject<string> = new Subject<string>()

  constructor(
    private ofertasService: OfertasService
  ) { }

  ngOnInit(): void {
    this.ofertas = this.subjectPesquisa 
    .debounceTime(1000) //executa a ação do switcMap após 1 segundo
    .distinctUntilChanged() //para fazer pesquisas distintas
      .switchMap((termo: string) => { //retorno Oferta[]
        console.log('Requisição HTTP')

        if(termo.trim() === ''){
          //retornar observable de array de ofertas vazio
          return Observable.of<Oferta[]>([])
        }
         return this.ofertasService.pesquisaOfertas(termo)
      })
      .catch((err: any) => {
        console.log(err)
        return Observable.of<Oferta[]>([])
      })

      this.ofertas.subscribe((ofertas: Oferta[]) => {
        this.ofertas2 = ofertas
      })
  }

  public pesquisa(termoDaPesquisa: string): void{
    console.log('caracter', termoDaPesquisa)
    this.subjectPesquisa.next(termoDaPesquisa)
  }

}
