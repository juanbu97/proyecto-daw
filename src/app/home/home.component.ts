import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { AlumnosService } from '../services/alumnos.service';
import { Alumno } from '../model/alumno';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title:string;
  public alumno:Alumno;


  constructor(
    private _authService: AuthService,
    private _alumnoService: AlumnosService,
  ) { }

  ngOnInit(): void {
    this._alumnoService.getAlumno().subscribe(
      result => {
        if(result['code'] != 200){
          console.log(result);
        }else{
          this.alumno = result['data'];
        }
      },
      error => {
        console.log(<any>error);
      }
    );
    document.body.style.backgroundColor = "white";

  }

  onClickLogout(){
    this._authService.logout();
  }

  openNav(){
    document.getElementById("menuLateral").style.width = "300px";
    document.body.style.backgroundColor = "gray";
  }

  closeNav() {
    document.getElementById("menuLateral").style.width = "0";
    document.body.style.backgroundColor = "white";

  }

}
