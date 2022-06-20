import {AfterViewInit, Component, OnDestroy} from '@angular/core'
import {IComponent} from '@ionhour/interfaces'
import {ElementsService} from '../../services'
import {FormGroup} from '@angular/forms'
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core'
import {map, takeWhile} from 'rxjs'
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'ionhour-component-dynamic-form',
  templateUrl: './component-dynamic-form.component.html',
  styleUrls: ['./component-dynamic-form.component.scss']
})
export class ComponentDynamicFormComponent implements AfterViewInit, OnDestroy {
  component!: IComponent
  form = new FormGroup({})
  options: FormlyFormOptions = {}
  alive = true
  model = {}
  fields!: FormlyFieldConfig[]

  constructor(private elementsService: ElementsService, private translation: TranslateService) {
  }

  ngAfterViewInit(): void {
    this.getComponent()
    this.form.valueChanges.pipe(takeWhile(() => this.alive)).subscribe((form) => {
      const changed = this.getDirtyValues(this.form)
      changed && this.elementsService.setContent({
        componentName: this.component.componentName,
        componentData: form,
        changed
      })
    })
  }

  getDirtyValues(form: any) {
    const dirtyValues: any = {}
    Object.keys(form.controls).forEach((key) => {
      const currentControl = form.controls[key]
      if (currentControl.dirty) {
        if (currentControl.controls) dirtyValues[key] = this.getDirtyValues(currentControl)
        else dirtyValues[key] = currentControl.value
      }
    })
    return dirtyValues
  }

  translateFieldLabel(field: FormlyFieldConfig): string {
    const fieldLabel: string = field?.templateOptions?.label ?? '';
    return this.translation.instant(fieldLabel);
  }

  getComponent() {
    return this.elementsService.component$.pipe(
      takeWhile(() => this.alive),
      map((component: any) => {
        this.component = component;
        this.model = component?.componentData;
        component.fields = component?.fields.map((field: FormlyFieldConfig) => {
          if (field?.templateOptions?.label) {
            field.templateOptions.label = this.translateFieldLabel(field);
          }
          if (field?.fieldGroup?.length) {
            field.fieldGroup = field.fieldGroup.map(nestedField => ({
              ...nestedField,
              templateOptions: {
                ...nestedField.templateOptions,
                label: this.translateFieldLabel(nestedField)
              }
            }))
          }
          if (field?.fieldArray?.fieldGroup?.length) {
            field.fieldArray = {
              ...field.fieldArray,
              fieldGroup: field.fieldArray.fieldGroup.map(nestedField => ({
                ...nestedField,
                templateOptions: {
                  ...nestedField.templateOptions,
                  label: this.translateFieldLabel(nestedField)
                }
              }))
            }
          }
          return field;
        });
        return component;
      })).subscribe((component: any) => {
      this.fields = component.fields;
    })
  }

  ngOnDestroy() {
    this.alive = false
  }
}
