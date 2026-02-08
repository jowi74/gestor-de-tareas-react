import { useEffect, useState } from "react";
import Column from "./components/Column";
import TaskForm from "./components/TaskForm";
import { jwtDecode } from "jwt-decode";
import googleOneTap from "google-one-tap";
import "./index.css";

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    useEffect(() => {
        if (user) return;

        googleOneTap({
            client_id: "1067853493081-709rl72ujk0j2ei9vc2qm81p16ql6udj.apps.googleusercontent.com",
            callback: (response) => {
                const decodedUser = jwtDecode(response.credential);
                setUser(decodedUser);
                localStorage.setItem("user", JSON.stringify(decodedUser));
            }
        });
    }, [user]);

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    return ( <
        div >
        <
        h1 > Gestor de Tareas < /h1>

        { /* PERFIL */ } {
            user ? ( <
                div style = {
                    { display: "flex", alignItems: "center", gap: "10px" }
                } >
                <
                img src = { user.picture }
                alt = "perfil"
                width = "40"
                style = {
                    { borderRadius: "50%" }
                }
                /> <
                span > { user.name } < /span> <
                button onClick = { logout } > Cerrar sesión < /button> < /
                div >
            ) : ( <
                p > Inicia sesión con Google para acceder al tablero < /p>
            )
        }

        {
            user && ( <
                >
                <
                TaskForm author = { user.name }
                />

                <
                div className = "board" >
                <
                Column title = "Pendientes"
                status = "todo" / >
                <
                Column title = "En Progreso"
                status = "progress" / >
                <
                Column title = "Completadas"
                status = "done" / >
                <
                /div> < / >
            )
        } <
        /div>
    );
}

export default App;