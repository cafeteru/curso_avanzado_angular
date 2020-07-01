import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  overlayRef: OverlayRef;

  constructor(public overlay: Overlay) { }

  openToast(component: any): void {
    if (!this.overlayRef) {
      // Configurar el overlay
      const config = new OverlayConfig();
      config.positionStrategy = this.overlay.position()
        .global()
        .right('20px')
        .top('20px');

      // Crearlo y enlazarle el componente referenciado
      this.overlayRef = this.overlay.create(config);
      this.overlayRef.attach(new ComponentPortal(component));

      // Los toast messages solo se deben mostrar 4 segundos
      setTimeout(() => this.hideOverlay(), 4000);
    }
  }

  hideOverlay(): void {
    this.overlayRef.dispose();
    this.overlayRef = null;
  }
}
