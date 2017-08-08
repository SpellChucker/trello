import { Task } from './Task';

export class Board {
  tasks?: Task[];

  constructor(public title: string, public description: string) {}

}
