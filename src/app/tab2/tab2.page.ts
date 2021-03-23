import {Component, OnInit} from '@angular/core';
import {Storage} from "@ionic/storage-angular";


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  public tasks: [];

  constructor(private storage: Storage) {

  }

  ngOnInit() {
    this.storage.get('tasks').then( response => {
      this.tasks = response;
    });
  }

}
