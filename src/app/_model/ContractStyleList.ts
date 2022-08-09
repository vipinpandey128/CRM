export interface Welcome4 {
    status:         boolean;
    contractStyles: ContractStyle[];
}

export interface ContractStyle {
    Style:       string;
    Description: string;
    Status:      Status;
    Type:        Type;
    ArtworkType: string;
    SupplierRef: string;
    Supplier:    string;
    Status1:     Status1;
    BOM:         BOM;
}

export enum BOM {
    No = "No",
    Yes = "Yes",
}

export enum Status {
    Active = "Active",
    InActive = "In Active",
    InProcess = "In Process",
    OnHold = "On Hold",
    Open = "OPEN",
}

export enum Status1 {
    NotOnline = "Not Online",
    Online = "Online",
}

export enum Type {
    Style = "Style",
}
