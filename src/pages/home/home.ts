import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { AddBoardPage } from '../add-board/add-board';
import { ViewBoardPage } from '../view-board/view-board';
// TODO: maybe move this.
import { Board } from '../../app/Board';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  boards: Board[] = [{title: 'Test Board', description: 'Just a test!'}];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

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

  loadBoard(board: Board) {
    this.navCtrl.push(ViewBoardPage, {
      board: board
    });
  }

  saveBoard(board: Board) {
    this.boards.push(board);
  }
}
