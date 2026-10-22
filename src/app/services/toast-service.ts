import {inject, Service} from '@angular/core';
import {ToastController} from "@ionic/angular";

@Service()
export class ToastService {
  private readonly toastController: ToastController = inject(ToastController);

  async showToast(description: string) {
    const toast = await this.toastController.create({
      message: description,
      duration: 2000,
      position: 'middle',
      color: 'secondary'
    });
    await toast.present();
  }

}
