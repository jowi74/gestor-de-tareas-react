import Column from "./components/Column";
import TaskForm from "./components/TaskForm";
import "./index.css";

function App() {
    return ( <
        div >
        <
        h1 > Gestor de Tareas < /h1>

        <
        TaskForm / >

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
        /div> < /
        div >
    );
}

export default App;