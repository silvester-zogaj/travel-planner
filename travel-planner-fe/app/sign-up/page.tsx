export default function SignUp() {
  return (
    <>
      <h1>Sign Up!</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input placeholder="john doe" id="name" type="text" />
        <label htmlFor="email">Email:</label>
        <input placeholder="johndoe@hotmail.com" id="email" type="text" />
        <label htmlFor="password">password:</label>
        <input placeholder="password" id="password" type="text" />
        <br></br>
        <button type="submit">Sumbit</button>
      </form>
    </>
  );
}
