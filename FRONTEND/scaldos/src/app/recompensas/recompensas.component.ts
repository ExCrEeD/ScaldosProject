import { Component, OnInit } from "@angular/core";
import { RecompensasService } from "../Services/recompensas.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Observable } from "rxjs";
import { Recompensa } from "../Model/recompensa";

@Component({
  selector: "app-recompensas",
  templateUrl: "./recompensas.component.html",
  styleUrls: ["./recompensas.component.css"],
})
export class RecompensasComponent implements OnInit {
  public RecompensaForm: FormGroup;
  allRecompensas$: Observable<Recompensa>;

  constructor(
    private recompensasService: RecompensasService,
    private formBuilder: FormBuilder
  ) {
    this.getRecompensas();
  }

  ngOnInit(): void {
    this.RecompensaForm = this.formBuilder.group({
      Nombre: ["", Validators.required],
      Valor: ["", Validators.required],
    });
  }

  async crearRecompensa() {
    let recompensa = this.RecompensaForm.value;
    let response = <Recompensa>(
      await this.recompensasService.add(recompensa).toPromise()
    );
    this.getRecompensas();
  }

  async getRecompensas() {
    this.allRecompensas$ = this.recompensasService.obtenerRecompensas();
  }
}
