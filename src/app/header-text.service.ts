import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderTextService {

  private headerTextSubject = new BehaviorSubject<string>('Default Header Text');
  headerText$ = this.headerTextSubject.asObservable();

  setHeaderText(text: string) {
    this.headerTextSubject.next(text);
  }
}
