export default function SignIn() {
  return (
   <>
    <h1>Sign in!</h1>
        <form>
            <label htmlFor="email">Email:</label>
            <input placeholder="johndoe@hotmail.com" id="email" type="text"/>
            <label htmlFor="password">password:</label>
            <input placeholder="password" id="password" type="text"/>
            <br></br>
            <a href="/">Forgot Password</a>
            <br></br>
            <button type="submit">Sumbit</button>
        </form>
   
   </> 
  );
}



