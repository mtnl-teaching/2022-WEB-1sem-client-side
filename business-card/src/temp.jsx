import { useEffect, useState } from "react";
import { transformToArray } from "../firebase-utils";

const url =
  "https://roombookings-f0b23-default-rtdb.europe-west1.firebasedatabase.app/.json";

export default function BookingForm({ closeModal }) {
  // Jeres alleLokaler state vil være her.

  const [room, setRoom] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [time, setTime] = useState("");

  useEffect((data) => {
    // Håndtere async logik/kode
    async function getData() {
      // Vi laver vores fetch kald, og får et http response fra vores firebase
      const response = await fetch(url);
      // Vi får body ud af det http response
      const body = await response.json();
      // Vi laver det mærkelige firebase object om til et array.
      const asArray = transformToArray(body);
      console.log(asArray);
    }
    getData();
  }, []);

  const handleRoom = (event) => {
    const input = event.target.value;
    setRoom(input);
  };
  const handleDate = (event) => {
    // date
    setDate(event.target.value);
  };
  const handleName = (event) => {
    // date
    setName(event.target.value);
  };
  const handleTime = (event) => {
    // date
    setTime(event.target.value);
  };

  const handleSubmit = async (data) => {
    let booking = { room: room, name: name, date: date, time: time };

    if (name === "" || room == "" || date == "" || time == "") {
      // Hvis de ikke har udfyldt felterne.
    } else if (validateAlreadyBooked(booking)) {
      // Hvis der er dobbelt booking
      // Aktiver condtional rendering på fejlbeskeden. (Fejlbesked skal vises)
    } else {
      //Hvis alt er godt.
      // Deaktiver condtional rendering på fejlbeskeden. (Fejlbesked skal IKKE vises)

      const response = await fetch(
        "https://roombookings-f0b23-default-rtdb.europe-west1.firebasedatabase.app/.json",
        {
          method: "POST",
          body: JSON.stringify(booking),
        }
      );
      closeModal();
    }
  };

  const alleEksisterendeBookinger = [
    { room: 2.01, date: "1/12/2022" },
    { room: 2.03, date: "1/12/2022" },
    { room: 2.05, date: "1/12/2022" },
  ];

  function validateAlreadyBooked(booking) {
    // Vi starter med at finde alle bookinger, der har samme lokale som den ønskede booking
    const matchingRoom = alleEksisterendeBookinger.filter((eksisterende) => {
      return (
        eksisterende.room == booking.room &&
        eksisterende.date == booking.date &&
        eksisterende.time == booking.time
      );
    });

    if (matchingRoom.length === 0) {
      // Hvis den IKKE ER dobbelt booket
      return false;
    } else {
      // Hvis den ER dobbelt.
      return true;
    }
  }

  return (
    <>
      <div className="bookingOverskrift">
        <h1>BOOK ET LOKALE</h1>
      </div>
      <form className="BookingForm">
        <div>
          <label>Navn og efternavn</label>
          <input
            type="text"
            name="name"
            placeholder="Navn"
            required
            onChange={handleName}
          />
        </div>

        <div>
          <label>Lokale</label>
          <select required name="room" id="cars" onChange={handleRoom}>
            <option value="" disabled selected hidden>
              Vælg lokale
            </option>
            <option value="Lokale 1">Lokale 1</option>
            <option value="Lokale 2">Lokale 2</option>
            <option value="Lokale 3">Lokale 3</option>
            <option value="Lokale 4">Lokale 4</option>
            <option value="Lokale 5">Lokale 5</option>
            <option value="Lokale 6">Lokale 6</option>
            <option value="Lokale 7">Lokale 7</option>
            <option value="Møde lokale 1">Møde lokale 1</option>
            <option value="Møde lokale 2">Møde lokale 2</option>
            <option value="Møde lokale 3">Møde lokale 3</option>
            <option value="Møde lokale 4">Møde lokale 4</option>
            <option value="Møde lokale 5">Møde lokale 5</option>
            <option value="Møde lokale 6">Møde lokale 6</option>
          </select>{" "}
        </div>

        <div>
          {" "}
          <label>Vælg en dato</label>
          <input
            name="date"
            type="date"
            placeholder="Dato - f.eks 10-01-2022"
            required
            onChange={handleDate}
          />
        </div>

        <div>
          {" "}
          <label>Vælg et tidspunkt</label>
          <select name="time" required onChange={handleTime}>
            <option value="" disabled selected hidden>
              Vælg en tid
            </option>
            <option value="08:30-12:00">08:30-12:00</option>
            <option value="12:30-16:00">12:30-16:00</option>
          </select>{" "}
        </div>

        <div>
          <p>
            Der er desværre allerede en booking på dette lokale på dit ønskede
            tidspunkt.
          </p>
          <button type="button" onClick={handleSubmit}>
            Gem booking
          </button>
        </div>
      </form>
    </>
  );
}
