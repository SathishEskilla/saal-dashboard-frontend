/**
 * declare application level models
 */
export interface CustomerGridModel {
  customerId: string;
  fullName: string;
  emailId: string;
  mobileNumber: string;
  gender: string;
  userName: string;
  picture: string;
  address: string;
}

export type MoreDetailsProps = {
  customerDetails: CustomerGridModel;
  toggleModal: boolean;
};
