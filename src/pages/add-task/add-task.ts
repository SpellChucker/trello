import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Task } from '../../app/Task';

/**
 * Generated class for the AddTaskPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-task',
  templateUrl: 'add-task.html',
})
export class AddTaskPage {
  task: Task = new Task('', '', '');

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
