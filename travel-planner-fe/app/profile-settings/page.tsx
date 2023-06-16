import styles from "../page.module.css";

export default function ProfileSettings() {
  return (
    <>
      <h1>Profile Settings for x</h1>
      <img
        className={styles.img}
        src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
      />
      <button>Edit avatar</button>
      <p>Name:</p>
      <button>Edit name</button>
      <button>Change password</button>
      <button className={styles.delete}>Delete account</button>
    </>
  );
}
