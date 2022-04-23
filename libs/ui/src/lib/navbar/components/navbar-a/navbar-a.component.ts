import {Component, Input, ViewEncapsulation} from '@angular/core'
import {NgxTippyProps} from "ngx-tippy-wrapper";

@Component({
  selector: 'ionhour-navbar-a',
  templateUrl: './navbar-a.component.html',
  styleUrls: ['./navbar-a.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavbarAComponent {
  @Input() componentData!: any;
  public baseProps: NgxTippyProps = {
    arrow: true,
    theme: 'material',
    placement: 'bottom'
  };

  templateRef: NgxTippyProps = {
    ...this.baseProps,
    allowHTML: true,
    appendTo: "parent",
    interactive: true,
    interactiveBorder: 50,

  };

}
