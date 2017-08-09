import { BoardProvider } from './board';
import { Board } from '../../models/Board';
import { Task } from '../../models/Task';

let boardService;

describe('Provider: BoardProvider', () => {

  beforeEach(() => {
    boardService = new BoardProvider();
  });

  it('should have 0 boards initially', () => {
    expect(Array.isArray(boardService.boards)).toBeTruthy();
    expect(boardService.boards.length).toBe(0);
  });

  it('should have 1 board when 1 board added', () => {
    boardService.addBoard(new Board('test', 'test'));
    expect(Array.isArray(boardService.boards)).toBeTruthy();
    expect(boardService.boards.length).toBe(1);
  });

  it('should update board tasks when board saved', () => {
    let board = new Board('test', 'test');
    let task = new Task(0, 'inprogress', 'Run', 'Cause it be good');
    board.tasks.push(task);

    boardService.addBoard(board);

    expect(Array.isArray(boardService.boards)).toBeTruthy();
    expect(boardService.boards[0].tasks.length).toBe(1);
  });
});
