import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewBoardPage } from './view-board';

@NgModule({
  declarations: [
    ViewBoardPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewBoardPage),
  ],
})
export class ViewBoardPageModule {}
