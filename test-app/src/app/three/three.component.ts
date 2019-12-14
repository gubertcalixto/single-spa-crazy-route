import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html'
})
export class ThreeComponent {
  constructor(private router: Router) { }

  public redirectTo(url: string): void {
    console.log(`Redirecting to ${url}`);
    this.router.navigateByUrl(url);
  }
}
