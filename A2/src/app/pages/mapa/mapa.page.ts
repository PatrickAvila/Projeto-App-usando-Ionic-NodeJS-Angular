import { Component,ElementRef,ViewChild, OnInit } from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx'

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage implements OnInit {

  ngOnInit() {
  }

  map: google.maps.Map;
  minhaPosicao: google.maps.LatLng;


  @ViewChild('map', {read: ElementRef, static:false}) mapRef: ElementRef;

  constructor(private geoLocation:Geolocation) {}

  ionViewWillEnter(){
    this.exibirMapa();
  }

  exibirMapa(){
    const posicao = new google.maps.LatLng(-22.8862331,-43.4162287);
    const opcoes = {
      center: posicao,
      zoom: 1,
      disableDefaultUI: true, 
    };

    this.map = new google.maps.Map(this.mapRef.nativeElement, opcoes);


    // new google.maps.Marker({
    //   position: posicao,
    //   map:this.map,
    //   title: 'Minha localização',
    //   animation: google.maps.Animation.BOUNCE
    // });

    this.buscarPosicao();
    
    
  }

  buscarPosicao(){
    this.geoLocation.getCurrentPosition().then((resp)=>{
      this.minhaPosicao = new google.maps.LatLng(resp.coords.latitude,resp.coords.longitude);
      this.irParaMinhaPosicao();
    }).catch((error)=>{
      console.log('Erro ao achar sua posição')
    });

    
  }

  irParaMinhaPosicao(){
    this.map.setCenter(this.minhaPosicao);
    this.map.setZoom(18);

    const marker = new google.maps.Marker({
      position:this.minhaPosicao,
      title:'Minha Posição',
      animation:google.maps.Animation.BOUNCE,
      map: this.map
    })
  }


}
