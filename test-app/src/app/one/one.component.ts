import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html'
})
export class OneComponent {
  constructor(private router: Router) { }

  public redirectTo(url: string): void {
    console.log(`Redirecting to ${url}`);
    this.router.navigateByUrl(url);
  }
}
