import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms';
import {GroupService} from '../services/group.service';
import {adduserModel} from '../Model/addUser';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  public AddUserForm: FormGroup;
  private addUserm: adduserModel;
  constructor( private formBuilder : FormBuilder,
    private groupservice : GroupService) { }

  ngOnInit(): void {
    this.AddUserForm=this.formBuilder.group({
      Name_Group: ["",Validators.required],
      Name_User: ["",Validators.required]
    });
  }
  async addUser(){
    let adduser = this.AddUserForm.value;
    let response = <adduserModel> await this.groupservice.addUserToGroup(adduser).toPromise(); 
    alert("Usuario agregado Correctamente");
  }
}
