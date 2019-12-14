import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html'
})
export class TwoComponent {
  constructor(private router: Router) { }

  public redirectTo(url: string): void {
    console.log(`Redirecting to ${url}`);
    this.router.navigateByUrl(url);
  }

  public redirectToFailureRedirecting(url: string): void {
    console.warn(`Redirecting (failure) to ${url}`);
    this.router.navigateByUrl(url).catch(res => {
      console.log(`Redirecting to ${url} failed`);
      console.log('Catch: ' + res);
      this.router.navigateByUrl('one');
    });
  }
}
