import React, { useState } from "react";
import { ContactItem } from "@/components/Contacts/ContactItem";
import { ContactInfo } from "@/components/Contacts/ContactInfo";
import { ToolBar } from "@/components/Contacts/ToolBar";
import { people } from "../../FakeData";
import { sorter } from "@/utils";

export interface Contact {
  id: number;
  name: string;
  status: string;
  statusHoursAgo: number;
  picture: string;
  mobilePhone: string;
  workPhone: string;
}

export const Contacts = () => {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [checkedContacts, setCheckedContacts] = useState<Array<Contact>>([]);
  const [checkListShow, setCheckListShow] = useState<boolean>(false);

  const peopleList: Contact[] = people.sort(sorter);
  const [contactsList, setContactsList] = useState<Contact[]>(peopleList);

  const getFirstLetter = (name: string) => name.charAt(0).toUpperCase();
  const screenWidth = window.screen.width;

  return (
    <div className="w-full h-full flex customMd:pl-12">
      <div
        className={`${
          screenWidth < 800 && selectedContact ? "hidden" : "flex"
        } w-full customMd:w-80 flex-col`}
      >
        <ToolBar
          checkedContacts={checkedContacts}
          checkListShow={checkListShow}
          setCheckListShow={setCheckListShow}
          setContactsList={setContactsList}
          selectedContact={selectedContact}
          setSelectedContact={setSelectedContact}
          setCheckedContacts={setCheckedContacts}
        />
        <div
          className={
            "flex-col h-[calc(100%-48px)] overflow-y-auto py-[7px] mt-[50px] w-full customMd:w-80"
          }
        >
          {contactsList.map((person, i, arr) => (
            <React.Fragment key={person.id}>
              {i === 0 ||
              getFirstLetter(person.name) !==
                getFirstLetter(arr[i - 1].name) ? (
                <div className="w-full pl-3">
                  <div className="flex justify-center items-center text-[15px] w-8 h-8 p-2 my-3 first-of-type:mt-0 bg-main-blue text-white">
                    {getFirstLetter(person.name)}
                  </div>
                </div>
              ) : null}
              <ContactItem
                person={person}
                checkListShow={checkListShow}
                checkedContacts={checkedContacts}
                setCheckedContacts={setCheckedContacts}
                selectedContact={selectedContact}
                setSelectedContact={setSelectedContact}
              />
            </React.Fragment>
          ))}
        </div>
      </div>
      {!selectedContact || checkListShow ? (
        <div className="hidden customMd:flex w-full justify-center items-center text-[46px] font-light">
          <div className="text-text-gray">No Selection</div>
        </div>
      ) : (
        <ContactInfo selectedContact={selectedContact} />
      )}
    </div>
  );
};
