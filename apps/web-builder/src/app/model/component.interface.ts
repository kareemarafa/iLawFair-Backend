import { Type } from "@angular/core";

export interface ComponentItem {
    component: Type<any>,
    data?: any
}