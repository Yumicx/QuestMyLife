import { Component, OnInit } from '@angular/core';
import {StorageService} from "../services/storage.service";
import {Storage} from "@ionic/storage-angular";
import {ToastController} from "@ionic/angular";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  public name: string;
  private tasks = [''];

  constructor(private storageService: StorageService,
              private storage: Storage,
              private toastController: ToastController) {

  }

  ngOnInit() {
    this.storage.get('tasks').then(response => {
      if (response === undefined || response === null) {
        this.storage.set('tasks', this.tasks)
      } else {
        this.tasks = response;
      }
    });
  }

  addTask() {
    this.tasks.push(this.name);
    this.storage.set('tasks', this.tasks).then( () => {
      this.presentToast();
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Task added successfully! :)',
      duration: 3000
    });
    await toast.present();
  }

}
