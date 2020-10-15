import { Injectable } from '@angular/core';
import { ApplicationInsights, DistributedTracingModes } from '@microsoft/applicationinsights-web';

@Injectable({
  providedIn: 'root'
})
export class ApplicationInsightsService {

  private appInsights: ApplicationInsights = new ApplicationInsights({
    config: {
      instrumentationKey: '0e6d779e-d54e-4814-a43b-fad885868d30',
      distributedTracingMode: DistributedTracingModes.W3C,
      autoTrackPageVisitTime: true,
      disableFetchTracking: false,
      enableAutoRouteTracking: true,
      enableAjaxErrorStatusText: true,
      enableCorsCorrelation: true
    }
  });

  constructor() {
      this.appInsights.loadAppInsights();
  }

  setUserId(userId: string) {
      this.appInsights.setAuthenticatedUserContext(userId);
  }

  clearUserId() {
      this.appInsights.clearAuthenticatedUserContext();
  }

  logStartTrackPage(name?: string) {
    this.appInsights.startTrackPage(name);
  }

  logStopTrackPage(name?: string) {
    this.appInsights.stopTrackPage(name);
  }

  logException(exception: Error, severityLevel?: number) {
    this.appInsights.trackException({ exception, severityLevel });
  }

}
