import { Component, ViewChild } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { IonInfiniteScroll } from '@ionic/angular';
import {MoviesService} from '../noticias/theMovieDB/movies.service'

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.page.html',
  styleUrls: ['./noticias.page.scss'],
  providers:[MoviesService]
})
export class NoticiasPage {

  constructor(public movieService:MoviesService, public loadingController: LoadingController) { }

  public lista_filmes = new Array<any>();
  public page:number = 1;

  carregaPagina(){
    this.movieService.getPopularMovies(this.page,'pt').subscribe(
      data => {
        const response = (data as any);
        if(this.page==1){
          this.lista_filmes = response.articles
        }else{
          this.lista_filmes = this.lista_filmes.concat(response.articles);
        }
        console.log(this.lista_filmes);
      },
      error => {
      console.log(error);
      }
    )
  }

  async efeitoLoading(){
    const loading = await this.loadingController.create({
        message:'Carregando Notícias',
        duration: 500
      });
    await loading.present();
    const {} = await loading.onDidDismiss();
  }

  

  efeitoRefresh(event){
    this.carregaPagina();
    console.log('Iniciando operação asíncrona');

    setTimeout(()=>{
      console.log('finalizando refresh');
      event.target.complete();
      },500
    );
  }

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  efeitoScrolInfinito(event) {
    this.page++;
    this.carregaPagina();
    setTimeout(() => {
      event.target.complete();
    }, 5000);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

  ionViewDidEnter() {
    this.efeitoLoading();
    this.carregaPagina();
    this.efeitoRefresh(event);
  }

}
