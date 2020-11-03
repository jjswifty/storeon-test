import { Clicker } from './components/Clicker'
import s from './App.module.sass'

const App = () => {
    return (
        <div className={s.container}>
           <Clicker />
        </div>
    )
}

export default App;
