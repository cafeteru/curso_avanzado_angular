import { Component, OnInit } from '@angular/core';

import { ToastComponent } from '../toast/toast.component';

@Component({
  selector: 'app-toast-warning',
  templateUrl: './toast-warning.component.html',
  styleUrls: ['./toast-warning.component.css']
})
export class ToastWarningComponent extends ToastComponent implements OnInit {

  constructor() {
    super();
  }

  ngOnInit(): void {
  }

}
