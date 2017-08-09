import { Board } from '../src/models/Board';

export class PlatformMock {
  public ready(): Promise<{String}> {
    return new Promise((resolve) => {
      resolve('READY');
    });
  }

  public getQueryParam() {
    return true;
  }

  public registerBackButtonAction(fn: Function, priority?: number): Function {
    return (() => true);
  }

  public hasFocus(ele: HTMLElement): boolean {
    return true;
  }

  public doc(): HTMLDocument {
    return document;
  }

  public is(): boolean {
    return true;
  }

  public getElementComputedStyle(container: any): any {
    return {
      paddingLeft: '10',
      paddingTop: '10',
      paddingRight: '10',
      paddingBottom: '10',
    };
  }

  public onResize(callback: any) {
    return callback;
  }

  public registerListener(ele: any, eventName: string, callback: any): Function {
    return (() => true);
  }

  public win(): Window {
    return window;
  }

  public raf(callback: any): number {
    return 1;
  }

  public timeout(callback: any, timer: number): any {
    return setTimeout(callback, timer);
  }

  public cancelTimeout(id: any) {
    // do nothing
  }

  public getActiveElement(): any {
    return document['activeElement'];
  }
}

export class BoardProviderMock {
  boards: Board[] = new Array();

  addBoard(board: Board) {
    this.boards.push(board);
  }
}

export class StorageMock {
  get(key: string) {
    return new Promise((resolve, reject) => {
      return resolve([]);
    })
  }

  set(key: string, value: string) {
    return new Promise((resolve, reject) => {
      resolve([]);
    })
  }
}

export class NavParamsMock {
  static returnParams:any = {};

  public get(key): any {
    if (NavParamsMock.returnParams[key]) {
      return NavParamsMock.returnParams[key];
    }
    return 'default';
  }

  static setParams(key, value) {
    NavParamsMock.returnParams[key] = value;
  }
}

export class ViewControllerMock {
  public _setHeader(): any {
    return {};
  };

  public _setIONContent(): any {
    return {};
  };

  public _setIONContentRef(): any {
    return {};
  };
}
