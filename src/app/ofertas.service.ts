import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs'
import { URL_API } from './app.api'
import { Oferta } from './shared/oferta.model'

@Injectable()
export class OfertasService {

    
    
    constructor(
        private http: Http
    ){

    }

    // public ofertas: Array<Oferta> = [
    //     {
    //         id: 1,
    //         categoria: "restaurante",
    //         titulo: "Super Burger",
    //         descricao_oferta: "Rodízio de Mini-hambúrger com opção de entrada.",
    //         anunciante: "Original Burger",
    //         valor: 29.90,
    //         destaque: true,
    //         imagens: [
    //             { url: "/assets/ofertas/1/img1.jpg" },
    //             { url: "/assets/ofertas/1/img2.jpg" },
    //             { url: "/assets/ofertas/1/img3.jpg" },
    //             { url: "/assets/ofertas/1/img4.jpg" }
    //         ]
    //     },
    //     {
    //         id: 2,
    //         categoria: "restaurante",
    //         titulo: "Cozinha Mexicana",
    //         descricao_oferta: "Almoço ou Jantar com Rodízio Mexicano delicioso.",
    //         anunciante: "Mexicana",
    //         valor: 32.90,
    //         destaque: true,
    //         imagens: [
    //             { url: "/assets/ofertas/2/img1.jpg" },
    //             { url: "/assets/ofertas/2/img2.jpg" },
    //             { url: "/assets/ofertas/2/img3.jpg" },
    //             { url: "/assets/ofertas/2/img4.jpg" }
    //         ]

    //     },
    //     {
    //         id: 4,
    //         categoria: "diversao",
    //         titulo: "Estância das águas",
    //         descricao_oferta: "Diversão garantida com piscinas, trilhas e mais.",
    //         anunciante: "Estância das águas",
    //         valor: 31.90,
    //         destaque: true,
    //         imagens: [
    //             { url: "/assets/ofertas/3/img1.jpg" },
    //             { url: "/assets/ofertas/3/img2.jpg" },
    //             { url: "/assets/ofertas/3/img3.jpg" },
    //             { url: "/assets/ofertas/3/img4.jpg" },
    //             { url: "/assets/ofertas/3/img5.jpg" },
    //             { url: "/assets/ofertas/3/img6.jpg" }
    //         ]
    //     }
    // ]
    public getOfertas(): Promise<Oferta[]> {
        //efetuar requisição http
        return this.http.get(`${URL_API}/ofertas?destaque=true`)
            .toPromise()
            .then((resposta: Response) => resposta.json())
        //retornar priomise
    }

    public getOfertasPorId(id: number): Promise<Oferta>{
        return this.http.get(`${URL_API}/ofertas?id=${id}`)
        .toPromise()
        .then((resposta: Response) => {
            return resposta.json()[0]
        })
    }

    // public getOfertas2(): Promise<Array<Oferta>>{
    //     return new Promise((resolve, reject) => {
    //         //algum tipo de processamento que ao finalizar chama o resolve ou o reject
    //         let deu_certo = true
    //         if(deu_certo){
    //             //esse setTimeout é como se fosse uma API rest, que onde tem que esperar o tempo dela ser executada
    //             setTimeout(() => resolve(this.ofertas), 3000)
                
    //         }else{

    //             reject({codigo_erro: 404, mensagem_erro: 'Error 404, recurso não encontrado'})
    //         }
    //     })

    //     .then((ofertas: Oferta[]) => {
    //         //fazer alguma tratavia
    //         console.log('Primeiro then')
    //         return ofertas
    //     })
    //     .then((ofertas: Oferta[]) => {
    //         //fazer alguma tratavia
    //         console.log('Segundo then')
    //         return new Promise((resolve2, reject2) => {
    //             setTimeout(() => {
    //                 return resolve2(ofertas)
    //             }, 3000);
    //         })
    //     })
    //     .then((ofertas: Oferta[]) => {
    //         console.log('Terceiro then, poq tava aguardando os outros')
    //         return ofertas
    //     })
    // }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {

        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
         .toPromise()
         .then((resposta: Response) =>resposta.json())
    }

    public getOfertasPorCategoriaDiversao(categoria: string): Promise<Oferta[]> {

        return this.http.get(`${URL_API}/ofertas?categoria=${categoria}`)
         .toPromise()
         .then((resposta: Response) =>resposta.json())
    }

    public getComoUsarOfertaPorId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/como-usar?id=${id}`)
            .toPromise()
            //promise serve para transformar o observable em uma promessa
            .then((resposta: Response) => {
                
                return resposta.json()[0].descricao
            })
    }
    public getOndeFicaPorId(id: number): Promise<string> {
        return this.http.get(`${URL_API}/onde-fica?id=${id}`)
            .toPromise()
            .then((resposta: Response) => {
                
                return resposta.json()[0].descricao
            })
    }

    public pesquisaOfertas(termo: string): Observable<Oferta[]>{
        return this.http.get(`${URL_API}/ofertas?descricao_oferta_like=${termo}`)
            .retry(10)
            .map((resposta: Response) => resposta.json())
            
    }
}