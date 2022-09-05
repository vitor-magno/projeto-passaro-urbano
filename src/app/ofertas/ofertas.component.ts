import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import { Observable } from 'rxjs/Observable'

import 'rxjs/Rx' //para usar o interval do Obeservable
import { Observer, Subscription } from 'rxjs/Rx';

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrls: ['./ofertas.component.scss'],
  providers: [OfertasService]
})
export class OfertasComponent implements OnInit, OnDestroy {

  private tempoObservableSubscription: Subscription
  private tempoObservableTesteSubscription: Subscription

  public oferta: Oferta
  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  ngOnInit() {
    // this.route.snapshot.params['id']
    // this.route.params.subscribe((parametro: any) => {
    //   console.log(parametro.id)
    // })
    this.ofertasService.getOfertasPorId(this.route.snapshot.params['id'])
      .then((oferta: Oferta) => {
        this.oferta = oferta
      })

      // this.route.params.subscribe(
      //   (parametro: any) => {console.log(parametro)},
      //   (erro:any) => console.log(erro), 
      //   () => console.log('Processamento dado como concluído')
      // )

     // let tempo = Observable.interval(2000) será o observável


      // this.tempoObservableSubscription = tempo.subscribe((intervalo: number) => {
        //aqui estaremos assistindo este observável
        // console.log(intervalo)
      // })


      //observable (observável)
      // let meuObservableTeste = Observable.create((observer: Observer<string>) => {
      //   observer.next('Pirmeiro evento da strem')
      //   observer.complete()
      //   observer.error('Erro encotrado nas strem')
      // })

      //observable(observador)
      // this.tempoObservableSubscription = meuObservableTeste.subscribe(
      //   (resultado: any) => console.log(resultado),
      //   (erro: string) => console.log(erro),
      //   () => console.log('Strem finalizada')
      // )
  }

  ngOnDestroy(){
    // this.tempoObservableTesteSubscription.unsubscribe()
    // this.tempoObservableSubscription.unsubscribe()
  }

}