
import './App.css';
import ContactHeader from './Components/ContactHeader/ContactHeader';
import Navigation from './Components/Navigation/Navigation';
import Button from './Components/Button/Button';
import Images from './Components/Tasweer/Images';
import Logo from './Components/Logos/Logo';
import ContactForm from './Components/Contacts/ContactForm';


function App() {
  return (
    <div>
      <Navigation/>
      <ContactHeader/>
      <Images/>
      <Logo/>
      <Button/>
      <ContactForm/>
    </div>
  );
};

export default App;
