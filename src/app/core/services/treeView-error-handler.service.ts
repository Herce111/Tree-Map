import { ErrorHandler, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TreeView } from '../models';

@Injectable({
  providedIn: 'root'
})
export class TreeViewErrorHandlerService implements ErrorHandler {

  constructor() { }

  handleError(error: any, code?: number, name?: string): void {
    if (!environment.production) {
      console.error("ERROR: ", error);
    }
    const customError: TreeView = {
      code: code,
      message: error.message,
      name: name
    };
    throw customError;
  }
}
