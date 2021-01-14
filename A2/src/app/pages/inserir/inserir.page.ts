import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ToastController} from '@ionic/angular';
import {AutenticacaoService} from 'src/app/usuario/autenticacao.service';

@Component({
  selector: 'app-inserir',
  templateUrl: './inserir.page.html',
  styleUrls: ['./inserir.page.scss'],
})
export class InserirPage implements OnInit {

  constructor(public autenticacao:AutenticacaoService,public router:Router,public toastController:ToastController) { }

  ngOnInit() {
  }

  public email:string="";
  public senha:string="";
  public mensagem:string="";

  inserirUsuario(){
    this.autenticacao.insereNoFireBase(this.email,this.senha).
    then((res=>{
      this.router.navigate(['login']);
      this.mensagem="Usuário Cadastrado com sucesso";
      this.exibeMensagem();
    })).catch((error=>{
      this.mensagem="Erro ao cadastrar usuário";
      this.exibeMensagem();
    })
    )
  }

  async exibeMensagem(){
    const toast = await this.toastController.create({
      message:this.mensagem,
      duration:2000
    });
    toast.present();
  }


}
