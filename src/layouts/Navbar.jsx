import React, {useState} from "react";
import { Container, Menu } from "semantic-ui-react";
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";

export default function Navbar() {
    const [isAuthenticated, setIsAuthenticated] = useState(true)
    
    function handleSignOut() {
        setIsAuthenticated(false)
      }
    
      function handleSignIn() {
        setIsAuthenticated(true)
      }

  return (
    <div>
      <div>
        <Menu inverted fixed="top">
          <Container>
            <Menu.Item name="Ana Sayfa" />
            <Menu.Item name="Mesajlar" />
            <Menu.Item name="İş İlanları"/>
            <Menu.Item name="İş İlanı Ekle"/>

            <Menu.Menu position="right">
                {isAuthenticated?<SignedIn signOut={handleSignOut}/>:<SignedOut signIn={handleSignIn}/>} 
            </Menu.Menu>
          </Container>
        </Menu>
      </div>
    </div>
  );
}
