import Image from "next/image";
import styles from "../page.module.css";

export default function ProfileSettings() {
  return (
    <>
      <h1>Profile Settings for x</h1>
      <Image
        className={styles.img}
        src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
        alt="Default avatar icon"
      />
      <br></br>
      <button>Edit avatar</button>
      <p>
        Name: x <button>Edit name</button>
      </p>

      <button>Change password</button>
      <button className={styles.delete}>Delete account</button>
    </>
  );
}
