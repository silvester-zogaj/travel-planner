"use client";
import Image from "next/image";
import styles from "../page.module.css";
import Typography from "@mui/material/Typography";

export default function ProfileSettings() {
  return (
    <>
      <Typography variant="h3">Profile Settings for x</Typography>
      <Image
        className={styles.img}
        src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
        alt="Default avatar icon"
      />
      <br></br>
      <button>Edit avatar</button>
      <Typography variant="body2">
        Name: x <button>Edit name</button>
      </Typography>

      <button>Change password</button>
      <button className={styles.delete}>Delete account</button>
    </>
  );
}
