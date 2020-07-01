import { Component, OnInit } from '@angular/core';

import { ToastComponent } from '../toast/toast.component';

@Component({
  selector: 'app-toast-success',
  templateUrl: './toast-success.component.html',
  styleUrls: ['./toast-success.component.css']
})
export class ToastSuccessComponent extends ToastComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
