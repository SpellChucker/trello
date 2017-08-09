import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { DragulaModule } from '../../node_modules/ng2-dragula/ng2-dragula';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddBoardPage } from '../pages/add-board/add-board';
import { ViewBoardPage } from '../pages/view-board/view-board';
import { AddTaskPage } from '../pages/add-task/add-task';
import { BoardProvider } from '../providers/board/board';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddBoardPage,
    ViewBoardPage,
    AddTaskPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    DragulaModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddBoardPage,
    ViewBoardPage,
    AddTaskPage
  ],
  providers: [
    BoardProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
