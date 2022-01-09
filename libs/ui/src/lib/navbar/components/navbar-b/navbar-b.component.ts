import { Component } from '@angular/core';

@Component({
  selector: 'ionhour-navbar-b',
  templateUrl: './navbar-b.component.html',
  styleUrls: ['./navbar-b.component.scss'],
})
export class NavbarBComponent {
  name = 'navber component';

  test() {
    this.name = 'sami';
    console.log(this.nativeHtml(this.name));
  }

  nativeHtml(data: any) {
    const html = `
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">${data}</a>
        </div>
      </nav>
    `;
    return html;
  }

  post() {
    return {
      sectionName: `NavbarBComponent`,
      data: {
        name: this.name,
      },
    };
  }
}
