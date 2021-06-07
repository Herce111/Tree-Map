import { Component, OnInit } from '@angular/core';
import { NotificationDescriptionData, NotificationIconData, NotificationItemsData, NotificationTitleData, NotificationContentData } from 'desy-angular';
import { NotificationItemModel } from '../../shared/models/notification-model';

@Component({
  selector: 'app-demo-notification',
  templateUrl: './demo-notification.component.html'
})
export class DemoNotificationComponent implements OnInit {

  nameComponent = 'notification';

  id: string;
  classes: string;
  isOpen = true;

  title: NotificationTitleData;
  description: NotificationDescriptionData;
  content: NotificationContentData = {};
  items: Array<NotificationItemsData>;
  item: NotificationItemModel;

  icon: NotificationIconData;
  type: string;
  isDismissible: boolean;

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


  constructor() { }

  ngOnInit(): void {

    this.classes = 'border-warning-base bg-warning-light';
    this.id = 'with-custom-icon';
    this.type = 'alert';

    this.title = {
      text: 'Acaba de publicarse la lista de admitidos y excluidos de la convocatoria publicado en el BOA',
      html: '',
      classes: ''
    };

    this.description = {
      text: '',
      html: '<a class=\' c-link break-all\' href=\' # \'>http://www.boa.aragon.es/cgi-bin/EBOA/BRSCGI?CMD=VEROBJ&MLKOB=1119520063030&type=pdf</a>',
      classes: ''
    };

    this.icon = {
      html: '<svg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 140 140\' width=\'1em\' height=\'1em\' class=\'w-8 h-8\' aria-label=\'Atención\' focusable=\'false\'><path d=\'M138.42 118.29l-55-110a15 15 0 00-26.84 0l-55 110A15 15 0 0015 140h110a15 15 0 0013.42-21.71zM62.5 50a7.5 7.5 0 0115 0v30a7.5 7.5 0 01-15 0zm7.5 70a10 10 0 1110-10 10 10 0 01-10 10z\' fill=\'currentColor\'/></svg>',
    };

    this.item = new NotificationItemModel();
    this.item.text = 'Texto editable';
    this.item.html = '';
    this.item.href = '';
    this.item.id = '';

    this.items = [];
    this.items.push(this.item);

  }

}
