import {
  IconData,
  MetaData,
  MetaItemData,
  NavigationData, NavigationItemData
} from "desy-angular";

export class FooterModel {

  meta: MetaData = new MetaDataModel();
  navigation: NavigationDataModel[] = [];
  icon: IconData = new IconDataModel();
  containerClasses: string;
  classes: string;
}

export class MetaDataModel implements MetaData {
  html: string;
  items: MetaItemDataModel[] = [];
  text: string;
  visuallyHiddenTitle: string;
}

export class NavigationDataModel implements NavigationData {
  columns: number;
  items: NavigationItemDataModel[] = [];
  title: string;
}

class IconDataModel implements IconData {
  html: string;
}

export class MetaItemDataModel implements MetaItemData {
  ariaControls: string;
  ariaCurrent: string;
  ariaDescribedBy: string;
  ariaDisabled: string;
  ariaErrorMessage: string;
  ariaExpanded: string;
  ariaHasPopup: string;
  ariaHidden: string;
  ariaLabel: string;
  ariaLabelledBy: string;
  ariaLive: string;
  href: string;
  role: string;
  tabindex: string;
  text: string;
}

export class NavigationItemDataModel implements NavigationItemData {
  ariaControls: string;
  ariaCurrent: string;
  ariaDescribedBy: string;
  ariaDisabled: string;
  ariaErrorMessage: string;
  ariaExpanded: string;
  ariaHasPopup: string;
  ariaHidden: string;
  ariaLabel: string;
  ariaLabelledBy: string;
  ariaLive: string;
  href: string;
  role: string;
  tabindex: string;
  text: string;
}
