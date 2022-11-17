import { Component } from '@angular/core';
import { Aportes } from './model/aportes';
import { Test } from './model/test';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'testProyect';
 
  test: Test = new Test();
  aportes:Aportes=new Aportes();
  SMV:number=1000000;
  suma:Number=0;
/*
  calcular(){
    this.sumaTotal();
    console.log(this.test.Total);
    this.resultado();
    console.log(this.test.ResultadoTipoEstres);
  }

  capturarP1(vanr:any){
    this.test.P1=vanr;
  }
  capturarP2(vanr:any){
    this.test.P2=vanr;
  }
  capturarP3(vanr:any){
    this.test.P3=vanr;
  }
  capturarP4(vanr:any){
    this.test.P4=vanr;
  }
  capturarP5(vanr:any){
    this.test.P5=vanr;
  }
  capturarP6(vanr:any){
    this.test.P6=vanr;
  }
  capturarP7(vanr:any){
    this.test.P7=vanr;
  }
  capturarP8(vanr:any){
    this.test.P8=vanr;
  }
  capturarP9(vanr:any){
    this.test.P9=vanr;
  }
  capturarP10(vanr:any){
    this.test.P10=vanr;
  }
  capturarP11(vanr:any){
    this.test.P11=vanr;
  }
  capturarP12(vanr:any){
    this.test.P12=vanr;
  }
  capturarP13(vanr:any){
    this.test.P13=vanr;
  }
  capturarP14(vanr:any){
    this.test.P14=vanr;
  }
  capturarP15(vanr:any){
    this.test.P15=vanr;
  }

  sumaTotal(){
    var total = (this.test.P1 +this.test.P2+this.test.P3+this.test.P4+this.test.P5
      +this.test.P6+this.test.P7+this.test.P8+this.test.P9+this.test.P10+
      this.test.P11+this.test.P12+this.test.P13+this.test.P14+this.test.P15)
      this.test.Total=total;
  }

  resultado(){
    if(this.test.Total<=15){
      this.test.ResultadoTipoEstres = "Usted no presenta estres";
      this.test.ResultadoDescripcion = "Según este breve test, no presentas síntomas de estrés laboral. A grandes rasgos, te sientes seguro/a en tu puesto de trabajo y sientes que tus responsabilidades son coherentes con tus capacidades. Prueba a mantener las mismas dinámicas en tu entorno laboral para cuidar de tu bienestar psicológico."
    }else if(this.test.Total<=30){
      this.test.ResultadoTipoEstres = "Uste presenta estres moderado";
      this.test.ResultadoDescripcion = "Según este breve test, presentas estrés moderado es señal de que pocos factores de tu entorno laboral pueden producirte malestar y estrés. A pesar de que actualmente no presentas síndrome de Burnout, puedes tomar acciones para mejorar estos factores que te ocasionan molestias."
    }else if(this.test.Total<=45){
      this.test.ResultadoTipoEstres = "Uste presenta estres medio";
      this.test.ResultadoDescripcion = "Según este breve test, presentas estrés medio es señal de que algunos factores de tu entorno laboral pueden producirte malestar y estrés. A pesar de que actualmente no presentas síndrome de Burnout, puntuar en estrés medio en este test refleja una tendencia a padecerlo en un futuro. En este caso, es importante detectar aquello que te causa incomodidad y malestar para poder gestionarlo de la mejor manera posible."
    }else if(this.test.Total<=60){
      this.test.ResultadoTipoEstres = "Uste presenta estres alto";
      this.test.ResultadoDescripcion = "Según este breve test, presentas estrés alto es señal de que muchos factores de tu entorno laboral pueden producirte malestar y estrés, lo que llega a ocasionarte daños en tu bienestar emocional y físico."
    }else if (this.test.Total<=75){
      this.test.ResultadoTipoEstres = "Uste presenta estres grave";
      this.test.ResultadoDescripcion = "Según este breve test, presentas estrés grave en el test burnout sugiere que tu nivel de estrés laboral está afectando gravemente a tu bienestar emocional. El síndrome del burnout puede tener consecuencias muy negativas en nuestro cuerpo y mente, por lo tanto, es importante que acudas a un especialista para que te sugiera nuevas dinámicas y así mejorar tu ambiente laboral."
    }
  }*/

  salario: number = 0;
  tipoDeRiesgo:String = "";
  tipoDeTrabajador:String = "Trabajador dependiente."

  cambiarTipoEmpleado(valor:any){
    this.tipoDeTrabajador = valor
  }

  capturarSalario(){
    let aux=((this.aportes.Salario*40)/100);
    if( aux< this.SMV){
      this.aportes.IBC= this.SMV;
    }else if(aux>=this.SMV){
      this.aportes.IBC=aux;
    }
    this.aportes.TipoTrabajador = this.tipoDeTrabajador
    this.CapturarTipoRiesgo(this.tipoDeRiesgo);
    this.CalcularAportes();
  }



  CapturarTipoRiesgo(val:any){
    if(val=="I Riesgo mínimo"){
      this.aportes.ValotRiesgo=0.522;
    }else if(val=="II Riesgo bajo"){
      this.aportes.ValotRiesgo=1.044;
    }else if(val=="III Riesgo medio"){
      this.aportes.ValotRiesgo=2.436;
    }else if(val=="IV Riesgo alto"){
      this.aportes.ValotRiesgo=4.350;
    }else if(val=="V Riesgo máximo"){
      this.aportes.ValotRiesgo=6.960;
    }

  }

  CalcularAportes(){
    debugger
    if(this.aportes.TipoTrabajador=="Trabajador dependiente."){
     this.aportes.AFPE =( (this.aportes.Salario*12)/100);
     this.aportes.AFPT =( (this.aportes.Salario*4)/100);
     this.aportes.EPSE=( (this.aportes.Salario*8.5)/100);
     this.aportes.EPST=( (this.aportes.Salario*4)/100);
     this.aportes.ARLE=( (this.aportes.Salario*this.aportes.ValotRiesgo)/100);
     this.aportes.ARLT=0;
    
    }else if(this.aportes.TipoTrabajador=="Trabajador independiente."){
      this.aportes.AFPE = 0;
      this.aportes.AFPT =( (this.aportes.IBC*16)/100);
      this.aportes.EPSE=0;
      this.aportes.EPST=( (this.aportes.IBC*12.5)/100);
      if((this.aportes.ValotRiesgo==0.522 ) || (this.aportes.ValotRiesgo ==1.044) || (this.aportes.ValotRiesgo==2.436)){
        this.aportes.ARLE=0;
        this.aportes.ARLT=( (this.aportes.IBC*this.aportes.ValotRiesgo)/100);
      }else{
        this.aportes.ARLE=( (this.aportes.IBC*this.aportes.ValotRiesgo)/100);
        this.aportes.ARLT=0;
      }
    }
    this.aportes.SubtotalEmpleador=(this.aportes.AFPE+this.aportes.EPSE+this.aportes.ARLE);
    this.aportes.SubtotalTrabajador=( this.aportes.AFPT+ this.aportes.EPST+this.aportes.ARLT);
    this.aportes.Total=(this.aportes.SubtotalEmpleador+this.aportes.SubtotalTrabajador);
    //alert("Total: "+this.aportes.Total+ " SubTotalEmpleador: "+ this.aportes.SubtotalEmpleador+ " subTotalTrabajador: " + this.aportes.SubtotalTrabajador)
  }
}
