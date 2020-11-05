import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-endereco',
  templateUrl: './edit-endereco.component.html',
  styleUrls: ['./edit-endereco.component.scss'],
})
export class EditEnderecoComponent implements OnInit {

  constructor(private modalCTRL: ModalController) { }

  ngOnInit() {}

  

  close() {
    this.modalCTRL.dismiss();
  }
  

}
