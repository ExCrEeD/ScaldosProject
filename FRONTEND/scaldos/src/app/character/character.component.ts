import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  public images=[
    {href:'https://www.poli.edu.co/sites/default/files/maratones-de-programacion-evento.jpg'},
    {href:'https://www.poli.edu.co/sites/default/files/maratones-de-programacion-evento.jpg'},
    {href:'https://www.poli.edu.co/sites/default/files/maratones-de-programacion-evento.jpg'} ];
  constructor() { }

  ngOnInit(): void {
  }

}
