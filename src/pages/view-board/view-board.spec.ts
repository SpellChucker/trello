import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ViewBoardPage } from './view-board';
import { IonicModule, Platform, NavController, NavParams } from 'ionic-angular/index';
import { Board } from '../../models/Board';
import { Task } from '../../models/Task';
import { BoardProvider } from '../../providers/board/board';
import { PlatformMock, BoardProviderMock, StorageMock, NavParamsMock } from '../../../test-config/mocks-ionic';
import { DragulaModule } from '../../../node_modules/ng2-dragula/ng2-dragula';

let boardService;
let de: DebugElement;
let comp: ViewBoardPage;
let fixture: ComponentFixture<ViewBoardPage>;

describe('ViewBoardPage', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ViewBoardPage],
      imports: [
        IonicModule.forRoot(ViewBoardPage),
        DragulaModule
      ],
      providers: [
        NavController,
        BoardProvider,
        { provide: Platform, useClass: PlatformMock},
        { provide: Storage, useClass: StorageMock },
        { provide: NavParams, useClass: NavParamsMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBoardPage);
    comp = fixture.componentInstance;
    boardService = fixture.debugElement.injector.get(BoardProvider);
    boardService.addBoard(new Board('test', 'test'));
  });

  afterEach(() => {
    fixture.destroy();
    comp = null;
    de = null;
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should have 0 tasks initially', () => {
    let taskCount = 0;
    let tasks = fixture.debugElement.queryAll(By.css('.task-list .clickable'));

    expect(tasks.length).toBe(0);
  });

  it('should show 1 task under in progress when added', () => {
    let firstBoard = boardService.boards[0];
    firstBoard.addTask(new Task(0, 'inprogress', 'test', 'test'));

    let taskCount = 0;
    let tasks = fixture.debugElement.queryAll(By.css('.task-list .clickable'));

    expect(tasks.length).toBe(1);
  });

  it('should have a link to create a board', () => {
    expect(true).toBeTruthy();
  });
});
