import { useRouter } from "next/router";
import Head from "next/head";
import React from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetUp = () => {
  const router = useRouter();

  const addMeetupHandler = async (enteredMeetupData) => {
    const res = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Add a new post</title>
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetUp;
