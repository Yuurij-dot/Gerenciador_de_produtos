import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { DashBoardSideBar } from "../../Components/DashBoardSideBar";

export default function Dashboard() {
    const navigate = useNavigate()

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    useEffect(() => {
        // Verifica se o usuário está logado
        const user = localStorage.getItem('user');
        if (!user) {
          // Se não estiver logado, redireciona para a página de login
          navigate('/login');
        } else {
          setIsLoggedIn(true);
        }
      }, [navigate]);


    return(
        <div className="w-full flex">
            <DashBoardSideBar/>
            <div>
              <h1>Dashboard</h1>
            </div>
        </div>
    )
}