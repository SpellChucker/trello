import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddBoardPage } from '../add-board/add-board';
import { ViewBoardPage } from '../view-board/view-board';
import { BoardProvider } from '../../providers/board/board';
import { Board } from '../../models/Board';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  boards: Board[];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public boardService: BoardProvider) {
    this.boardService.getBoards().then((boards) => {
      if (boards) {
        this.boards = boards;
      } else {
        this.boards = new Array();
      }
    });
  }

  addBoard() {
    let modal = this.modalCtrl.create(AddBoardPage);
    modal.onDidDismiss((Board) => {
      if (Board) {
        this.saveBoard(Board);
      }
    });
    modal.present();
  }

  loadBoard(id: number) {
    this.navCtrl.push(ViewBoardPage, {
      id: id 
    });
  }

  saveBoard(board: Board) {
    this.boards.push(board);
    this.boardService.saveBoards(this.boards);
  }
}
