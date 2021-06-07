import { ErrorSummaryData } from 'desy-angular';

export class ErrorSummaryModel implements ErrorSummaryData {

    fragment: string;
    text: string;
    html: string;
    id: string;

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

}
