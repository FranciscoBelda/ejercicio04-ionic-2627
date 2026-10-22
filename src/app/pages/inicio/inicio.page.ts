import {Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  InfiniteScrollCustomEvent,
  IonAvatar,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon, IonInfiniteScroll, IonInfiniteScrollContent,
  IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel,
  IonList, IonText,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {ZeldaService} from "../../services/zelda-service";
import {DataZelda} from "../../common/models/zelda.model";
import {addIcons} from "ionicons";
import {construct, gift, informationCircleOutline, paw, shield, skull} from "ionicons/icons";
import {ToastService} from "../../services/toast-service";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonIcon, IonList, IonItem, IonAvatar, IonLabel, IonText, IonInfiniteScroll, IonInfiniteScrollContent, IonItemSliding, IonItemOptions, IonItemOption]
})
export class InicioPage {
  private readonly zeldaService = inject(ZeldaService);
  private readonly toastService = inject(ToastService);
  selectedCategory = signal<string | undefined>(undefined);
  categories = [
    {
      category: 'creatures',
      icon: 'paw',
      color: 'success'
    },
    {
      category: 'monsters',
      icon: 'skull',
      color: 'dark'
    },
    {
      category: 'materials',
      icon: 'construct',
      color: 'primary'
    },
    {
      category: 'equipment',
      icon: 'shield',
      color: 'secondary'
    },
    {
      category: 'treasure',
      icon: 'gift',
      color: 'warning'
    },
  ];
  dataZeldaArray = signal<DataZelda[]>([]);
  dataZeldaArrayShow = signal<DataZelda[]>([]);

  constructor() {
    addIcons({paw, skull, construct, shield, gift,informationCircleOutline});
  }


  changeCategory(category: string) {
    this.selectedCategory.set(category);
    this.loadDataZelda();
  }

  private loadDataZelda() {
    this.zeldaService.getDataZelda(this.selectedCategory() as string).subscribe(
      {
        next: resp => {
          this.dataZeldaArray.set(resp.data);
          if (this.dataZeldaArray().length <= 20){
            this.dataZeldaArrayShow.set([...this.dataZeldaArray()]);
          }else {
            this.dataZeldaArrayShow.set([...this.dataZeldaArray().splice(0, 20)]);
          }
        },
        error: err => {
          console.error(err);
        }
      }
    )
  }

  loadMore(event: InfiniteScrollCustomEvent) {
    if (this.dataZeldaArray().length <= 10) {
      this.dataZeldaArrayShow.update(items => [...items, ...this.dataZeldaArray()]);
      event.target.complete();
      event.target.disabled = true;
    }else {
      this.dataZeldaArrayShow.update(items => [...items, ...this.dataZeldaArray().splice(0, 10)]);
      event.target.complete();
    }
  }

  showToast(description: string) {
    this.toastService.showToast(description);
  }
}
