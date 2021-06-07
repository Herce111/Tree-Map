import { Component, OnInit } from '@angular/core';
import { StatusIconData } from 'desy-angular';


@Component({
  selector: 'app-demo-status',
  templateUrl: './demo-status.component.html'
})
export class DemoStatusComponent implements OnInit {

  nameComponent = 'status';

  text: string;
  id: string;
  classes: string;

  icon: StatusIconData;

  role: string;
  ariaLabel: string;
  ariaDescribedBy: string;
  ariaLabelledBy: string;
  ariaHidden: string;
  ariaDisabled: string;
  ariaControls: string;
  ariaCurrent: string;
  ariaLive: string;
  ariaExpanded: string;
  ariaErrorMessage: string;
  ariaHasPopup: string;
  tabindex: string;

  ngOnInit(): void {
    this.icon = {
      html: '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 140 140\' width=\'1em\' height=\'1em\' class=\'w-4 h-4 text-alert-base\' aria-hidden=\'true\' focusable=\'false\'><path d=\'M70 75a7.5 7.5 0 007.5-7.5v-25a7.5 7.5 0 00-15 0v25A7.5 7.5 0 0070 75zM60 92.5a10 10 0 1020 0 10 10 0 10-20 0z\' fill=\'currentColor\'/><path d=\'M139.78 101.83L135 82.6a7.51 7.51 0 00-9.1-5.45l-19.22 4.8a7.5 7.5 0 00-2 13.71l6.11 3.66A55.31 55.31 0 0170 120.19a50.47 50.47 0 01-47.16-33.06 7.503 7.503 0 00-14.09 5.16A65.52 65.52 0 0070 135.19 71.27 71.27 0 00123.57 107l5.07 3a7.5 7.5 0 0011.14-8.25zM14.13 62.85l19.22-4.8a7.5 7.5 0 002.05-13.71L29.76 41A56.18 56.18 0 0170 19.81a50.47 50.47 0 0147.16 33.06 7.51 7.51 0 007 4.92 7.61 7.61 0 002.59-.46 7.51 7.51 0 004.46-9.62A65.52 65.52 0 0070 4.81 71.53 71.53 0 0016.83 33.2l-5.47-3.28A7.5 7.5 0 00.22 38.17L5 57.4a7.51 7.51 0 007.27 5.68 7.65 7.65 0 001.86-.23z\' fill=\'currentColor\'/></svg>',
      type: ''
    };

    this.text = 'texto editable';
  }

}
