import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Task } from '../../models/Task';

/**
 * Generated class for the AddTaskPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-task',
  templateUrl: 'add-task.html',
})
export class AddTaskPage {
  task: Task = new Task(0, '', '', '');

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
  }

  ionViewDidLoad() {
    this.task.status = this.navParams.get('status');
  }

  saveTask() {
    this.view.dismiss(this.task);
  }

  close() {
    this.view.dismiss();
  }
}
