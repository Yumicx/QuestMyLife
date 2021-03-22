import { Component, OnInit } from '@angular/core';
import {StorageService} from "../services/storage.service";
import {Storage} from "@ionic/storage-angular";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  name: any;

  constructor(private storageService: StorageService, private storage: Storage) { }

  ngOnInit() {}

  addTask() {

    this.storage.set('test', 'hahahah').then( x => {
      this.storage.get('test').then( x => {
        console.log('asddsd---> ' + x);
      });
    });

/*
  this.storageService.set('name', 'HALLLO');
    this.storageService.get('name').then(task => {
      console.log('TASK ----> ' + task);

    });
*/

  }
}
