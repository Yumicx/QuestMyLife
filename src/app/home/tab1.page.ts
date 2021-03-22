import { Component } from '@angular/core';
import {StorageService} from '../services/storage.service';
import {Storage} from '@ionic/storage-angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  name: string;
  showName: string;
  showItem: boolean = true;

  constructor(private storageService: StorageService) {
  }

  btnClicked() {
      this.storageService.set('name', this.name).then( () => {
        console.log('btnClicked: ' + this.name);
        this.storageService.get('name').then( response => {
          this.showName = response;
          this.showItem = false;
        });
      });
  }
}
