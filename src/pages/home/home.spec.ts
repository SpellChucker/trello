import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { HomePage } from './home';
import { IonicModule, Platform, NavController} from 'ionic-angular/index';
import { Board } from '../../models/Board';
import { Storage } from '@ionic/storage';
import { BoardProvider } from '../../providers/board/board';
import { PlatformMock, BoardProviderMock, StorageMock } from '../../../test-config/mocks-ionic';

let boardService;
let de: DebugElement;
let comp: HomePage;
let fixture: ComponentFixture<HomePage>;

describe('HomePage', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomePage],
      imports: [
        IonicModule.forRoot(HomePage)
      ],
      providers: [
        NavController,
        BoardProvider,
        { provide: Platform, useClass: PlatformMock},
        { provide: Storage, useClass: StorageMock }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    comp = fixture.componentInstance;
    boardService = fixture.debugElement.injector.get(BoardProvider);
  });

  afterEach(() => {
    fixture.destroy();
    comp = null;
    de = null;
  });

  it('should create component', () => expect(comp).toBeDefined());

  it('should have 0 boards initially', () => {
    let boards = boardService.boards;
    expect(Array.isArray(boards)).toBeTruthy();
    expect(boards.length).toBe(0);
  });

  it('should show 1 board when there is 1 board', () => {
    boardService.addBoard(new Board('test', 'test'));

    let firstBoard = boardService.boards[0];

    fixture.detectChanges();

    let boardElement = fixture.debugElement.query(By.css('.row:first-child .card-header'));

    const boardEl = boardElement.nativeElement;
    expect(boardEl.innerText).toBe(firstBoard.title);
  });

  it('should have a link to create a board', () => {
    de = fixture.debugElement.query(By.css('.card-header'));
    const card = de.nativeElement;
    expect(card.innerText).toMatch(/Add a Board/i, '<card> Should allow you to add a board');
  });
});
