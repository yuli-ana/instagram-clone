import React from "react";
import { useProfilePictureStyles } from "../../styles";
import { Person } from "@material-ui/icons";

const img =
  "https://i.picsum.photos/id/1005/367/267.jpg?hmac=bl_eyI1wwd6n-Q120mDottBNmCDNBurz7Z-b5IOeJU0";

function ProfilePicture({ size, image = img, isOwner }) {
  const classes = useProfilePictureStyles({ size, isOwner });

  return (
    <section className={classes.section}>
      {image ? (
        <div className={classes.wrapper}>
          <img src={image} alt="user profile" className={classes.image} />
        </div>
      ) : (
        <div className={classes.wrapper}>
          <Person className={classes.person} />
        </div>
      )}
    </section>
  );
}

export default ProfilePicture;
