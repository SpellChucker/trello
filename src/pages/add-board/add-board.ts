import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Board } from '../../models/Board';

/**
 * Generated class for the AddBoardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-add-board',
  templateUrl: 'add-board.html',
})
export class AddBoardPage {
  public board: Board = new Board('', '');

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddBoardPage');
  }

  close() {
    this.view.dismiss();
  }

  saveBoard() {
    this.view.dismiss(this.board);
  }
}
