import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent } from '@angular/router';
import { ApplicationInsightsService } from './application-insight.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'application-insight-test';

  constructor(
    private applicationInsightsService: ApplicationInsightsService,
    private router: Router,
  ) {
    // Subscribe to router events to handle page transition
    this.router.events.subscribe(this.navigationInterceptor.bind(this));
  }

  private navigationInterceptor(e: RouterEvent) {
    if (e instanceof NavigationStart) {
      // document.body.classList.add('app-loading');
      this.applicationInsightsService.logStartTrackPage(e.url);
    }

    if (e instanceof NavigationEnd) {
      this.applicationInsightsService.logStopTrackPage(e.url);
    }
  }

}
