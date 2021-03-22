import { Component } from '@angular/core';
import {StorageService} from "../services/storage.service";


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  public tasks: any;
  constructor(private storageService: StorageService) {

  }

  async ngOnInit() {
    this.storageService.get('name').then( task => {
      this.tasks = task;
    });
  }

  pushToCreationPage() {

  }
}
