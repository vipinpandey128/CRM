export interface Welcome6 {
    status:           boolean;
    contractCustomer: ContractCustomer[];
}

export interface ContractCustomer {
    Customer:      string;
    Address_Code:  AddressCode;
    Customer_Name: string;
    Post_Code:     string;
    Terms_Code:    TermsCode;
    Telephone:     string;
    EMail:         string;
    Contact_Name1: string;
}

export enum AddressCode {
    AddressCode = "        ",
    Empty = "",
}

export enum TermsCode {
    Cash = "CASH  ",
    Cod = "COD   ",
    Empty = "      ",
    The30 = "30    ",
    The60 = "60    ",
}
