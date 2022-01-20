import { Component, Input } from '@angular/core'

@Component({
  selector: 'ionhour-navbar-b',
  templateUrl: './navbar-b.component.html',
  styleUrls: ['./navbar-b.component.scss']
})
export class NavbarBComponent {
  name = 'navbar component'

  test() {
    this.name = 'sami'
  }

  nativeHtml(data: any) {
    return `
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">${data}</a>
        </div>
      </nav>
    `
  }

  post() {
    return {
      sectionName: `NavbarBComponent`,
      data: {
        name: this.name
      }
    }
  }
}
