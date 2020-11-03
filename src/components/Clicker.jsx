import { useStoreon } from 'storeon/react'
import s from './Clicker.module.sass'

export const Clicker = props => {

    const { dispatch, clickCounts, history, attempts } = useStoreon(
        'clicker', 'clickCounts', 'history', 'attempts'
    )

    return (
        <div className={s.container}>
            <div className={s.clicker}>
                <span>Clicker</span>
                <button onClick={() => dispatch('clicker/click')}> Click me </button>
                <p> - Кол-во кликов {clickCounts}</p>
            </div>
            <div className={s.newAtt}>
                <button onClick={() => dispatch('clicker/newAttempt')}
                    disabled={clickCounts === 0}> 
                    Новая попытка 
                </button>
            </div>
            <p>История: </p>
            <div className={s.history}>
                <ul>
                    {history.map((e, i) => <li key={i}>{e}</li>)}
                </ul>
            </div>
            <p>Попытка номер: {attempts}</p>
        </div>
    )
}