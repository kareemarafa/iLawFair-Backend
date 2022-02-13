import { Injectable } from '@angular/core'
import { StorageTypeEnum } from './storage-type.enum'

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  setItem(storageType: StorageTypeEnum, key: string, payload: unknown): void {
    switch (storageType) {
      case StorageTypeEnum.SESSION:
        sessionStorage.setItem(key, JSON.stringify(payload))
        break
      case StorageTypeEnum.LOCAL:
        localStorage.setItem(key, JSON.stringify(payload))
    }
  }

  getItem(storageType: StorageTypeEnum, key: string): any {
    let store: any
    switch (storageType) {
      case StorageTypeEnum.SESSION:
        store = sessionStorage.getItem(key)
        break
      case StorageTypeEnum.LOCAL:
        store = localStorage.getItem(key)
    }
    return store
  }

  removeItem(storageType: StorageTypeEnum, key: string): void {
    switch (storageType) {
      case StorageTypeEnum.SESSION:
        sessionStorage.removeItem(key)
        break
      case StorageTypeEnum.LOCAL:
        localStorage.removeItem(key)
    }
  }
}
