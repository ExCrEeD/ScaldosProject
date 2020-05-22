import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { NavPageService } from "../Services/nav-page.service";
import { EmailService } from "src/app/Services/mail.service";

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {
  public mailForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public tools: NavPageService,
    private mailService: EmailService,
  ) {}

  ngOnInit(): void {
    this.mailForm = this.formBuilder.group({
      Email: ["", [Validators.required, Validators.email]],
    });
  }

  async sendMail(){
    try {
      this.mailService.send(this.mailForm.value);
    }catch {
      alert("Email no existente");
    }
  }
  
}
