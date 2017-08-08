import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  tasks: Task[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.title = this.navParams.get('board').title;
    this.description = this.navParams.get('board').description;
    this.tasks = this.navParams.get('board').tasks;
  }

  todoTasks() {
    return this.tasks.filter(task => task.status === 'todo') || [];
  }

  inProgressTasks() {
    return this.tasks.filter(task => task.status === 'inprogress') || [];
  }

  completeTasks() {
    return this.tasks.filter(task => task.status === 'complete');
  }
}
