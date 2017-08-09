import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { AddTaskPage } from '../add-task/add-task';
import { BoardProvider } from '../../providers/board/board';
import { Board } from '../../models/Board';
import { Task } from '../../models/Task';
// Import Dragula for drag 'n drop.
import { DragulaService } from '../../../node_modules/ng2-dragula/ng2-dragula';

/**
 * Generated class for the ViewBoardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-view-board',
  templateUrl: 'view-board.html'
})
export class ViewBoardPage {
  board: Board = new Board('', '');

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
    public boardProvider: BoardProvider, public dragulaService: DragulaService, public toastCtrl: ToastController) {
    // Use our board provider to get the specified board.
    this.boardProvider.getBoard(this.navParams.get('id')).then((board) => {
      this.board = board;
    });

    // Need to remove the bag if the service has already registered it.
    const bag: any = this.dragulaService.find('task-bag');
    if (bag !== undefined) {
      this.dragulaService.destroy('task-bag');
    }

    this.dragulaService.setOptions('task-bag', {
      revertOnSpill: true
    });

    this.dragulaService.drop.subscribe((value) => {
      let [e, el, container] = value;

      // Since we dropped the task, set it's status.
      let task = this.board.tasks[el.dataset.id];
      task.status = container.dataset.status;
      this.boardProvider.saveBoard(this.board, this.navParams.get('id'));
      let toast = this.toastCtrl.create({
        message: 'Task status updated',
        duration: 2000,
        position: 'top'
      });

      toast.present();
    });
  }

  addTask(status: string) {
    // Open up the modal to add a task, and save it on close (if we have a task).
    let modal = this.modalCtrl.create(AddTaskPage, { status: status});
    modal.onDidDismiss((Task) => {
      if (Task) {
        this.saveTask(Task);
      }
    });
    modal.present();
  }

  saveTask(task: Task) {
    // Save the task to our local variable and then save the specified board.
    // We're saving an id attribute so we can reference it when changing status.
    task.id = this.board.tasks.length;
    this.board.tasks.push(task);
    this.boardProvider.saveBoard(this.board, this.navParams.get('id'));
  }

  todoTasks() {
    // If we have a board, find the tasks that are in status todo.
    if (this.board) {
      return this.board.tasks.filter(task => task.status === 'todo');
    }
    return [];
  }

  inProgressTasks() {
    // If we have a board, find the tasks that are in status inprogress.
    if (this.board) {
      return this.board.tasks.filter(task => task.status === 'inprogress');
    }
    return [];
  }

  completeTasks() {
    // If we have a board, find the tasks that are in status completed.
    if (this.board) {
      return this.board.tasks.filter(task => task.status === 'complete');
    }
    return [];
  }
}
