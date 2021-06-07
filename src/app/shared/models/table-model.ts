import { CellData, RowData, HeadCellData, OrderBy } from 'desy-angular';


export class CellModel implements CellData{
    text: string;
    html: string;
    classes: string;
    id: string;
    colspan: number;
    rowspan: number;

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

export class RowModel implements RowData{
    id: string;
    cellsList: CellData[];
}

export class HeadCellModel implements HeadCellData {
    orderBy?: OrderBy;
    hasFilter?: boolean;
    filterClasses?: string;
    text?: string;
    html?: string;
    classes?: string;
    id?: string;
    colspan?: number;
    rowspan?: number;
    role?: string;
    ariaLabel?: string;
    ariaDescribedBy?: string;
    ariaLabelledBy?: string;
    ariaHidden?: string;
    ariaDisabled?: string;
    ariaControls?: string;
    ariaCurrent?: string;
    ariaLive?: string;
    ariaExpanded?: string;
    ariaErrorMessage?: string;
    ariaHasPopup?: string;
    tabindex?: string;

}
