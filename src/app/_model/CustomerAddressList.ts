export interface Welcome3 {
    status:          boolean;
    customerAddress: CustomerAddress[];
}

export interface CustomerAddress {
    Customer:          string;
    Address_Code:      string;
    Customer_Name:     string;
    Address_Line_1:    string;
    Address_Line_2:    string;
    Address_Line_3:    string;
    County:            string;
    Post_Code:         string;
    Post_Town:         string;
    Terms_Code:        string;
    Comments:          string;
    ContactMobile:     string;
    EMail:             string;
    Source:            string;
    DefaultCarrier:    string;
    DelInstCode:       string;
    PriorityCustomer1: string;
    Contact_Name1:     string;
}
