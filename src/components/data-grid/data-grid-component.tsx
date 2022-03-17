import React, { createContext, useEffect, useState } from "react";
// import constants/types here
import { CustomerGridModel } from "../../types/global-model";
import { CUSTOMER_GRID_DATA } from "../../utils/global-constants";
import MoreDetailsComponent from "../more-details/more-details-component";
// import styles here
import "react-responsive-modal/styles.css";
import "./data-grid-component.scss";
import axios from "axios";

export const CustomerGridDataContext = createContext({} as CustomerGridModel);
const DataGridComponent: React.FC = () => {
  // ============================================================
  // declaring component varibales
  // ============================================================
  const [customerGridList, setCustomerGridList] = useState(
    [] as CustomerGridModel[]
  );
  const [searchText, setSerachText] = useState("");
  const [toggleModal, setToggleModal] = useState(false);
  const [customerMoreDetails, setCustomerMoreDetails] = useState(
    {} as CustomerGridModel
  );
  const [customerGridListForFilter, setCustomerGridListForFilter] = useState(
    [] as CustomerGridModel[]
  );

  /**
   * @desc used to fetch the customers list onload
   */
  useEffect(() => {
    console.log("inside use effect");
    axios.get("http://localhost:3001/api/customers/").then((response) => {
      console.log(response.data);
      response.data = sortCustomersGridList(response.data);
      console.log(response.data);
      setCustomerGridListForFilter(response.data);
      setCustomerGridList(response.data);
    });
  }, []);

  /**
   * @method sortCustomersGridList
   * @param customersList<CustomerGridModel[]>
   * @desc handler to sort the customer grid list by username
   * @returns customersList<CustomerGridModel[]>
   */
  const sortCustomersGridList = (customersList: CustomerGridModel[]) => {
    customersList.sort((currentObj, previousObj) =>
      currentObj.customerId > previousObj.customerId
        ? 1
        : previousObj.customerId > currentObj.customerId
        ? -1
        : 0
    );
    return customersList;
  };

  /**
   * @method filterCustomerList
   * @param customersList<CustomerGridModel[]>
   * @param searchText<string>
   * @desc handler to update the customer details on grid
   * @returns customersList<CustomerGridModel[]>
   */
  const filterCustomerList = (
    customersList: CustomerGridModel[],
    searchText: string
  ) => {
    return customersList.filter((customerDetails) => {
      return (
        customerDetails.userName
          .toLowerCase()
          .indexOf(searchText.toLowerCase()) > -1
      );
    });
  };

  /**
   * @method updateCustomerGridList
   * @param none
   * @desc handler to update the customer details on grid
   * @returns none
   */
  const updateCustomerGridList = () => {
    if (!customerGridList) {
      return;
    }
    if (!searchText) {
      return customerGridList;
    }

    // ============================================================
    // If searchText && customerData present then perform filter
    // ============================================================

    const filteredCustomerList = filterCustomerList(
      customerGridListForFilter,
      searchText
    );
    setCustomerGridList(filteredCustomerList);
  };

  /**
   * @method handleInputChange
   * @param element<HTMLElement>
   * @desc handler to update the search text state
   * @returns none
   */
  const handleInputChange = (element: any) => {
    setSerachText(element.target.value);
  };

  return (
    <CustomerGridDataContext.Provider value={customerMoreDetails}>
      <div className="data-grid-component">
        <div className="data-grid-component__input-wrapper">
          <input
            type="text"
            name="searchBox"
            placeholder="Search by user name"
            onChange={handleInputChange}
          />
          <button onClick={updateCustomerGridList}>
            <img src="./search_icon.svg" alt="search icon" />
          </button>
        </div>
        <div className="data-grid-component__wrapper">
          <div className="data-grid-component__wrapper__header">
            {CUSTOMER_GRID_DATA?.map((item) => (
              <div className={`${item.className} label`}>
                {item.headerTitle}
              </div>
            ))}
          </div>
          <div className="data-grid-component__wrapper__body">
            {customerGridList?.map((item) => (
              <div className="data-grid-component__wrapper__body__row">
                <div className="customer-id">{item.customerId}</div>
                <div className="full-name">{item.fullName}</div>
                <div className="user-name">{item.userName}</div>
                <div className="email">{item.emailId}</div>
                <div className="picture">{item.picture}</div>
                <div
                  className="more-details"
                  onClick={() => {
                    setCustomerMoreDetails(item);
                    setToggleModal(true);
                  }}
                >
                  More Details
                </div>
              </div>
            ))}
            {!customerGridList ||
              (!customerGridList.length && (
                <div className="data-not-found">
                  Customers information is not available
                </div>
              ))}
          </div>
        </div>
        {toggleModal && (
          <MoreDetailsComponent
            modalDetails={toggleModal}
            onClick={() => {
              setToggleModal(false);
            }}
          ></MoreDetailsComponent>
        )}
      </div>
    </CustomerGridDataContext.Provider>
  );
};

export default DataGridComponent;
