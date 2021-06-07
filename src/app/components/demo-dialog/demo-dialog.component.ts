import {
  Component,
  ElementRef,
  TemplateRef,
  ViewChild
} from '@angular/core';
import { DialogService, DialogOptions, ModalOptions, ModalButtonData } from 'desy-angular';
import { DialogComponent, ModalComponent } from 'desy-angular';

@Component({
  selector: 'app-demo-dialog',
  templateUrl: './demo-dialog.component.html'
})
export class DemoDialogComponent {

  constructor(private dialogService: DialogService) { }

  nameComponent = 'dialog';
  @ViewChild('focusMe') searchElement: ElementRef;

  staticDialogActive = false;
  currentDialogWithTemplate: DialogComponent;

  dialogOptions: DialogOptions = {
    id: 'dialog',
    dismissOnBackdrop: true
  };
  modalItemPrimary: ModalButtonData = {
    text: 'texto itemPrimary ',
    classes: 'c-button--primary'
  };
  modalItemSecundary: ModalButtonData = {
    text: 'texto itemsSecondary ',
    classes: 'c-button--secondary'
  };
  modalOptions: ModalOptions = {
    id: 'modal',
    title: {
      text: 'Aviso',
      html: null,
      classes: ''
    },
    description: {
      text: 'Estamos realizando labores de mantenimiento en el sistema. Es posible que algunos procesos tarden más de lo esperado. Rogamos disculpas.',
      html: null,
      classes: null
    },
    icon: {
      html: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140" width="1em" height="1em" class="block w-16 h-16 text-primary-light" aria-label="Pregunta" focusable="false"><g fill="none" stroke="currentColor" stroke-width="1.5"><path d="M52.5 52.5a17.5 17.5 0 1123.333 16.503A8.75 8.75 0 0070 77.257v5.868M70 100.625a2.188 2.188 0 102.188 2.188A2.188 2.188 0 0070 100.624h0" stroke-linecap="round" stroke-linejoin="round" stroke-width="8.749995"/><path d="M4.375 70a65.625 65.625 0 10131.25 0 65.625 65.625 0 10-131.25 0z" stroke-miterlimit="10" stroke-width="8.749995"/></g></svg>',
      type: null
    },
    itemsPrimary: [
      this.modalItemPrimary
    ],
    itemsSecondary: [
      this.modalItemSecundary
    ],
    isDismissible: true,
    classes: 'relative max-w-lg mx-auto p-base lg:p-lg border border-neutral-base rounded bg-white mt-2xl',
    caller: undefined
  };

  openDialogDynamic(): void {
    this.dialogService.openDialog(this.modalOptions, this.dialogOptions).then();
  }

  openDialogDynamicWithTemplate(modalRef: TemplateRef<any>): void {
    this.dialogService.openDialog(modalRef, this.dialogOptions)
      .then(result => this.currentDialogWithTemplate = result.dialog.instance);
  }

  openDialogDynamicWithComponent(): void {
    const dialogOptions: DialogOptions = {
      id: 'dialog',
      dismissOnBackdrop: true,
      focusOnClose: 'dialog-btn',
    };
    this.dialogService.openDialog(ModalComponent, dialogOptions).then(result => {
      result.component.instance.title = {
        text: 'Editar servicio publicado',
        classes: ''
      };
      result.component.instance.description = {
        html: '<p>Actualmente este servicio está publicado.</p><p>Los cambios realizados no serán visibles hasta que sean validados</p>',
      };
      result.component.instance.itemsPrimary = [
        {
          text: 'Editar servicio',
          classes: 'c-button--primary'
        }
      ];

      result.component.instance.isDismissible = true;
      result.component.instance.id = 'modal';
      result.component.instance.classes = 'relative max-w-lg mx-auto p-base lg:p-lg border border-neutral-base rounded bg-white mt-2xl';

      const subscription = result.component.instance.closeModal.subscribe(() => {
        this.dialogService.closeDialog(result.dialog);
        subscription.unsubscribe();
      });
    });
  }

  openDialogDynamicWithAutoclose(): void {
    this.dialogService.openDialog(this.modalOptions, this.dialogOptions)
      .then((result => setTimeout(() => this.dialogService.closeDialog(result.dialog.instance), 3000)));
  }

  closeDialogDynamicWithTemplate(): void {
    if (this.currentDialogWithTemplate) {
      this.dialogService.closeDialog(this.currentDialogWithTemplate);
      this.currentDialogWithTemplate = null;
    }
  }

  openDialogStatic(): void {
    this.staticDialogActive = true;
  }

  closeDialogStatic(): void {
    this.staticDialogActive = false;
  }

}
