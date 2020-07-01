import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable } from '@angular/core';

import { ToastComponent } from '../shared/components/toast/toast.component';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  overlayRef: OverlayRef;

  constructor(public overlay: Overlay) { }

  openToast(component: any, toastMessage?: string): void {
    if (!this.overlayRef) {
      // Configurar el overlay
      const config = new OverlayConfig();
      config.positionStrategy = this.overlay.position()
        .global()
        .right('20px')
        .top('20px');

      // Crearlo y enlazarle el componente referenciado
      this.overlayRef = this.overlay.create(config);
      const compRef: ComponentRef<ToastComponent> = this.overlayRef.attach(
        new ComponentPortal(component));
      compRef.instance.toastMessage = toastMessage;

      // Los toast messages solo se deben mostrar 4 segundos
      setTimeout(() => this.hideOverlay(), 4000);
    }
  }

  hideOverlay(): void {
    this.overlayRef.dispose();
    this.overlayRef = null;
  }
}
