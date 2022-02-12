import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  componentData$: Subject<any> = new Subject<any>()

  setComponentData(componentData: any) {
    this.componentData$.next(componentData)
  }
}
