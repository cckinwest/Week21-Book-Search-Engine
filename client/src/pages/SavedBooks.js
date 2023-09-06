import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import { useQuery } from "@apollo/client";
import { GET_ME } from "../utils/queries";

import BookList from "../components/BookList";

const SavedBooks = () => {
  const [userData, setUserData] = useState({
    _id: "",
    username: "",
    email: "",
    savedBooks: [],
  });

  const { data } = useQuery(GET_ME, {
    onCompleted: () => {
      setUserData(data.me);
    },
  });

  return (
    <>
      <div fluid className="text-light bg-dark p-5">
        <Container>
          <h1>Viewing saved books!</h1>
        </Container>
      </div>
      <Container>
        <h2 className="pt-5">
          {userData.savedBooks.length
            ? `Viewing ${userData.savedBooks.length} saved ${
                userData.savedBooks.length === 1 ? "book" : "books"
              }:`
            : "You have no saved books!"}
        </h2>
        <BookList books={userData.savedBooks} setUserData={setUserData} />
      </Container>
    </>
  );
};

export default SavedBooks;
