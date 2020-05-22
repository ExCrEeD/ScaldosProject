import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  name = 'Angie Fajardo';
  Lista=["HOLA SOY EL GRUPO 1","HOLA SOY EL GRUPO 6", "HOLA SOY EL GURPO 2", "HOLA SOY EL GRUPO 3", "HOLA SOY EL GRUPO 4", "HOLA SOY EL GRUPO 5"]
  role= 'docente'
  constructor() { }

  ngOnInit(): void {
  }
  private loadName() {
   
    }
  
}
