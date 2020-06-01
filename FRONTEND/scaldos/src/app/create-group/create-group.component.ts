import { Component, OnInit } from '@angular/core';
import { GroupService } from '../services/group.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Group } from '../Model/group';

@Component({
  selector: 'app-create-group',
  templateUrl: './create-group.component.html',
  styleUrls: ['./create-group.component.css']
})
export class CreateGroupComponent implements OnInit {

  private group: Group;
  public createGroupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private groupservice: GroupService
  ) { }

  ngOnInit(): void {
    this.createGroupForm = this.formBuilder.group({
      Name: ["", Validators.required],
      Description: ["", Validators.required]
    });
  }
  async createGroup() {
    if (this.createGroupForm.value == null) {
      alert("CAMPOS VACÍOS POR FAVOR LLENALOS CORRECTAMENTE");
    }
    else {
      let group = this.createGroupForm.value;
      let response = <Group>await this.groupservice.add(group).toPromise();
      alert("Grupo Registrado Correctamente");
    }
  }

}
