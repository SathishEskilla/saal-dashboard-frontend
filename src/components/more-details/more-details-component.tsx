import React, { useContext, useState } from "react";
import { Modal } from "react-responsive-modal";
import { CustomerGridDataContext } from "../data-grid/data-grid-component";

import "./more-details-component.scss";

const MoreDetailsComponent: React.FC<any> = (props: any) => {
  const [toggleModal, setToggleModal] = useState(props.modalDetails);
  const customerDetails = useContext(CustomerGridDataContext);

  const onCloseModal = () => {
    props.onClick(false);
    setToggleModal(false);
  };
  return (
    <Modal open={toggleModal} onClose={onCloseModal}>
      <div className="more-details-component">
        <div className="more-details-component__data-section user-name">
          <div className="more-details-component__data-section__label">
            User Name
          </div>
          <div className="more-details-component__data-section__value">
            {customerDetails.userName}
          </div>
        </div>
        <div className="more-details-component__data-section">
          <div className="more-details-component__data-section__label">
            Email ID
          </div>
          <div className="more-details-component__data-section__value">
            {customerDetails.emailId}
          </div>
        </div>
        <div className="more-details-component__data-section">
          <div className="more-details-component__data-section__label">
            Gender
          </div>
          <div className="more-details-component__data-section__value">
            {customerDetails.gender}
          </div>
        </div>
        <div className="more-details-component__data-section">
          <div className="more-details-component__data-section__label">
            Mobile Number
          </div>
          <div className="more-details-component__data-section__value">
            {customerDetails.mobileNumber}
          </div>
        </div>
        <div className="more-details-component__data-section">
          <div className="more-details-component__data-section__label">
            Address
          </div>
          <div className="more-details-component__data-section__value">
            {customerDetails.address}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MoreDetailsComponent;
