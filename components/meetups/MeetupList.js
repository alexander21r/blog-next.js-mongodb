import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

function MeetupList(props) {
  function refresher() {
    window.location.reload();
  }
  return (
    <ul className={classes.list}>
      <div className={classes.button}>
        <a onClick={refresher}>Refresh Posts</a>
      </div>
      {props.meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
