import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-media-object',
  templateUrl: './demo-media-object.component.html'
})
export class DemoMediaObjectComponent {

  nameComponent = 'media-object';

  figureHtml = '<div class=\'w-20 h-20\'><div class=\'h-full border-4 border-dashed border-gray-200 rounded-lg\'></div></div>';
  classes: string;
  id: string;
  center: boolean;
  reverse: boolean;
  figureClasses: string;
  contenClasses: string;

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

  // caller
  aux = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer maximus, elit et faucibus finibus, massa enim egestas leo, et lobortis lorem elit non enim. Nullam molestie nunc eget eleifend porttitor. Suspendisse ornare ligula erat, non dapibus nunc rhoncus at. Maecenas vitae urna viverra, semper mauris vitae, euismod ante. Sed finibus quam ut orci pellentesque, in tincidunt risus tristique. Vivamus efficitur purus urna, sed blandit lorem convallis vel. Mauris tincidunt tincidunt ipsum finibus euismod. Sed eget tincidunt mauris. Duis viverra commodo consectetur. Nullam viverra tincidunt nisl, sit amet dignissim lacus mattis imperdiet.';

  constructor() { }

}
