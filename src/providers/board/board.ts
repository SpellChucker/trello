import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

import { Board } from '../../models/Board';

/*
  Generated class for the BoardProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class BoardProvider {

  constructor(public storage: Storage) {

  }

  getBoards() {
    return this.storage.get('boards');
  }

  returnBoard(board: Board) {
    return board;
  }

  getBoard(id: number) {
    return this.getBoards().then((boards) => {
      return boards[id];
    });
  }

  getTask(boardId:number, taskId: number) {
    return this.getBoards().then((boards) => {
      return boards[boardId];
    }).then((board) => {
      return board.tasks[taskId];
    });
  }

  saveBoards(boards: Board[]) {
    this.storage.set('boards', boards);
  }

  saveBoard(board: Board, id: number) {
    this.getBoards().then((boards) => {
      boards[id] = board;
      this.saveBoards(boards);
    });
  }
}
