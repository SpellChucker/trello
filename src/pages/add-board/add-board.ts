import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
// TODO: maybe move this.
import { Board } from '../../app/Board';

/**
 * Generated class for the AddBoardPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
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
