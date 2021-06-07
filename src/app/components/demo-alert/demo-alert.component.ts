import { Component, ComponentRef, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { AlertService, AlertOptions, AlertComponent, NotificationOptions } from 'desy-angular';

@Component({
  selector: 'app-demo-alert',
  templateUrl: './demo-alert.component.html'
})
export class DemoAlertComponent {

  @ViewChild('alertPlaceTemplate', {read: ViewContainerRef}) alertPlaceTemplate: ViewContainerRef;
  @ViewChild('alertPlace', {read: ViewContainerRef}) alertPlace: ViewContainerRef;

  nameComponent = 'alert';
  templateActive = false;
  dynamicAlertCount = 0;

  alertOptions: AlertOptions = {
    id: 'alert',
    place: undefined,
    role: 'alert',
    ariaLive: 'assertLive'
  };

  constructor(private alertService: AlertService) { }

  openTemplateAlert(): void {
    this.templateActive = true;
  }

  openServiceAlertWithTemplate(caller: TemplateRef<any>): void {

    this.dynamicAlertCount++;
    this.alertOptions.place = this.alertPlaceTemplate;

    this.alertService.openAlert(caller, this.alertOptions).then(result => {
      result.alert.instance.callerContext = {
        alertRef: result.alert,
        alertCount: this.dynamicAlertCount
      };
    });
  }

  openServiceAlert(): void {

    this.dynamicAlertCount++;
    this.alertOptions.place = this.alertPlace;

    const notificationOptions: NotificationOptions = {
      id: 'alert-service',
      title: {
        text: 'El documento ' + this.dynamicAlertCount + ' se ha cargado correctamente'
      },
      type: 'success',
      isDismissible: true
    };

    this.alertService.openAlert(notificationOptions, this.alertOptions).then();
  }

  closeServiceAlert(alertRef: ComponentRef<AlertComponent>): void {
    this.alertService.closeAlert(alertRef);
  }

}
