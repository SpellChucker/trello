import { Task } from './Task';

export class Board {
  tasks?: Task[] = new Array();

  constructor(public title: string, public description: string) {}

  addTask(task: Task) {
    this.tasks.push(task);
  }
}
