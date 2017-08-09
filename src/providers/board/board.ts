import { Injectable } from '@angular/core';

import { Board } from '../../models/Board';

/*
  Generated class for the BoardProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class BoardProvider {
  boards: Board[] = new Array();

  constructor() {
    this.boards = new Array();
  }

  returnBoard(board: Board) {
    return board;
  }

  getBoard(id: number) {
    return this.boards[id];
  }

  getTask(boardId:number, taskId: number) {
    return this.boards[boardId].tasks[taskId];
  }

  saveBoards(boards: Board[]) {
    this.boards = boards;
  }

  addBoard(board: Board) {
    this.boards.push(board);
    this.saveBoards(this.boards);
  }
}
