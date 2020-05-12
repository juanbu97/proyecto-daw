import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { AlumnosService } from '../services/alumnos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public isLogged:boolean;
  
  constructor(
    public auth: AuthService,
    public alumno: AlumnosService,
    public rout: Router
  ) { }

  ngOnInit(): void {
    this.alumno.getAlumno().subscribe(res => {
      if (res['code']!=200) {
        console.log(res);
      } else {
        console.log(res['data']);
      }
    }, error =>{
      console.log(<any>error);
    });
  }

  logout(){
    this.auth.logout()
      .then((res) => {
        this.rout.navigate(['/']);
      }).catch(err => console.log(err.message))
  }
}
