import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AutenticacaoService } from 'src/app/usuario/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public autenticacao:AutenticacaoService,public router:Router,public toastController:ToastController) { }

  ngOnInit() {

  }

  public email:string="";
  public senha:string="";
  public mensagem:string="";

  loginUsuario(){
    this.autenticacao.loginNoFireBase(this.email,this.senha).
    then((res=>{
      this.router.navigate(['folder/inbox']);
    })).catch((error=>{
      this.mensagem="Email e/ou Senha incorreto(s)";
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
