import contactListData from "../../mockData/users.js";

const mockData: DataItem = contactListData;
export const CONTACT_LIST_LOAD_REQUEST = "CONTACT_LIST_LOAD_REQUEST";
export const CONTACT_DETAIL_LOAD_REQUEST = "CONTACT_DETAIL_LOAD_REQUEST";
export type DataItem = {
  id: number,
  name: string,
  number: string,
  location: string,
  description: string,
  avatar: string
};

export function load() {
  return { type: CONTACT_LIST_LOAD_REQUEST, payload: mockData };
}

export function setDetailsContact(value) {
  const contactDetail: Array<DataItem> = [];
  for (let i = 0; i < contactListData.length; i++) {
    if (contactListData[i].id == value) {
      contactDetail.push(contactListData[i]);
    }
  }
  return { type: CONTACT_DETAIL_LOAD_REQUEST, payload: contactDetail };
}
