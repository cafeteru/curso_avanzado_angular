import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent implements OnInit {
  @Input() invalidFeedbackMessage: string;
  @Input() label: string;

  constructor() { }

  ngOnInit(): void {
  }

}
