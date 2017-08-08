import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AddTaskPage } from '../add-task/add-task';
// TODO: maybe move this.
import { Task } from '../../app/Task';

/**
 * Generated class for the ViewBoardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-board',
  templateUrl: 'view-board.html',
})
export class ViewBoardPage {
  title: string;
  description: string;
  tasks: Task[] = new Array();

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    this.title = this.navParams.get('board').title;
    this.description = this.navParams.get('board').description;
    this.tasks = this.navParams.get('board').tasks.splice(0);
  }

  addTask(status: string) {
    let modal = this.modalCtrl.create(AddTaskPage, { status: status});
    modal.onDidDismiss((Task) => {
      if (Task) {
        this.saveTask(Task);
      }
    });
    modal.present();
  }

  saveTask(task: Task) {
    this.tasks.push(task);
  }

  todoTasks() {
    return this.tasks.filter(task => task.status === 'todo');
  }

  inProgressTasks() {
    return this.tasks.filter(task => task.status === 'inprogress');
  }

  completeTasks() {
    return this.tasks.filter(task => task.status === 'complete');
  }
}
