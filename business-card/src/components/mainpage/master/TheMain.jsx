import styles from "./TheMain.module.css";
import BusinessCard from "./BusinessCard.jsx";
import BusinessDetails from "../details/BusinessDetails.jsx";
import { useEffect } from "react";
import { transformToArray } from "../../utils/firebase-utils";
import { useState } from "react";
import { useGlobalContext } from "../../../context/GlobalContext";

const url =
  "https://web-1st-semester-default-rtdb.europe-west1.firebasedatabase.app/business-contacts.json";

export default function TheMain() {
  const { contacts, setContacts } = useGlobalContext();

  const businessDetails = {
    name: "Mathias Nielsen",
    job: "Adjunkt",
    website: "mathiasnielsen.io",
    email: "mtnl@cphbusiness.dk",
    about:
      'Hey! I\'m a new Adjunkt here at CPH Business. I have since my graduation in 2018, worked 2,5 years as a consultant, where i have been far and wide, and gained lots of experience, both in frontend and backend, so I have a pretty solid knowledge to the stack. Just before i joined CPH Business, I was a year with "Udviklings- og Forenklingsstyrelsen", as a frontend developer.',
    interests:
      "My spare time is pretty stereotypical with family, friends, tv-shows and gaming (currently Dota 2 and Apex Legends), but enough about me!",
  };

  // Using Promise chains
  useEffect(() => {
    // TODO: Activating the spinner
    // console.log("useEffect executed");
    fetch(url)
      .then((response) => response.json())
      .then((body) => {
        console.log("promise chains", body);
        const asArray = transformToArray(body);
        setContacts(asArray);
        // TODO: Hide the spinner.
      });
  }, []);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);

  // Using async/await
  /*
  useEffect(() => {
    async function getData() {
      const response = await fetch(url);
      const body = await response.json();
      console.log("async/await", body);
    }
    getData();
  }, []);
  */

  return (
    <main className={styles.main}>
      <div className={styles.split}>
        <div className={styles.cardLayout}>
          {contacts.map((contact, index) => {
            return (
              <BusinessCard
                key={"business-cards-" + index}
                name={contact.name}
                job={contact.job}
                website={contact.website}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.split}>
        <BusinessDetails details={businessDetails} />
      </div>
    </main>
  );
}
