import { useContext } from "react";
import AppContext from "../../context/store";
import { useTranslation } from "react-i18next";
import './home.css'

const Home = () => {
  const {t, i18n} = useTranslation();
  const [state, dispatch] = useContext(AppContext);
  return (
    
<>
</>
  )
}

export default Home;