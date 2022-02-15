import React from "react";
import classes from "./MeetupDetail.module.css";
import styles from "./MeetupItem.module.css";
import Link from "next/link";

function MeetupDetail(props) {
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>

      <div className={styles.actions}>
        <button>
          <Link href="/">Go Back </Link>
        </button>
      </div>
    </section>
  );
}

export default MeetupDetail;
