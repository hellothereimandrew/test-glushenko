import { Component } from "react";
import '../main/main.scss'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            health: this.props.data.health,
            evasion: this.props.data.evasion,
            energy: this.props.data.energy,
            strenght: this.props.data.strenght,
            agility: this.props.data.agility,
            intellect: this.props.data.intellect,
            charisma: this.props.data.charisma,
            attack: this.props.data.attack,
            stealth: 0,
            shoot: 0,
            study: 0,
            survive: 0,
            medicine: 0,
            fear: 0,
            insight: 0,
            look: 0,
            manipulate: 0
        }
    }

    //Передать все функции как пропсы
    // Сделать выгрузку и загрузку в json

    getDamage = () => {
        this.setState({
            health: this.state.health - 1
        })
    }

    strenghtUp = () => {
        this.setState({
            strenght: this.state.strenght + 1,
            health: (this.state.health + 3) + this.state.strenght + 1,
            attack: this.state.attack + 1
        })
        if (this.strenght = 1) {
        }
    }

    agilityUp = () => {
        this.setState({
            agility: this.state.agility + 1,
            evasion: (this.state.evasion + 10) + this.state.agility + 1
        })
    }

    intellectUp = () => {
        this.setState({
            intellect: this.state.intellect + 1,
        })
    }

    charismaUp = () => {
        this.setState({
            charisma: this.state.charisma + 1,
        })
    }

    energyUp = () => {
        this.setState({
            energy: this.state.agility + this.state.intellect
        })
    }

    render() {

        let { health, evasion, energy, strenght, agility, intellect, charisma, attack, stealth, shoot, study, survive, medicine, fear, insight, look, manipulate } = this.state

        let char = {
            name: "",
            health: this.props.data.health,
            evasion: this.props.data.evasion,
            energy: this.props.data.energy,
            strenght: this.props.data.strenght,
            agility: this.props.data.agility,
            intellect: this.props.data.intellect,
            charisma: this.props.data.charisma,
            attack: this.props.data.attack,
            stealth: 0,
            shoot: 0,
            study: 0,
            survive: 0,
            medicine: 0,
            fear: 0,
            insight: 0,
            look: 0,
            manipulate: 0
        }

        return (
            <div className="main">
                <div className="char-info">
                    <p className="char-info__header">Персонаж</p>
                    <div className="char-info-wrap">
                        <div className="charname-box">
                            <p className="charname-box__name">Имя:</p>
                            <input
                                className="charname-box__input"
                                type="text"
                                placeholder="Name"
                            />
                        </div>
                    </div>
                    <div className="health-box">
                        <p className="health-box__number">ЖС:{health}</p>
                        <button
                            onClick={this.getDamage}
                            className="health-box__damage">
                            Получить урон</button>
                    </div>
                    <div className="evasion-box">
                        <p className="evasion-box__number">Уклонение:{evasion}</p>
                    </div>
                    <div className="energy-box">
                        <p className="energy-box__number">Энергичность:{energy}</p>
                        <button
                            className="energy-box__up"
                            onClick={this.energyUp}>+</button>
                    </div>
                </div>
                <div className="abilities-box">
                    <p className="abilities-box__header">Характеристики</p>
                    <div className="ability">
                        <div className="ability-stat">
                            <p className="ability-stat__number">Сила:{strenght}</p>
                            <button
                                onClick={this.strenghtUp}
                                className="ability-stat__upgrade"
                            >+</button>
                        </div>
                        <div className="ability-secondary">
                            <p className="ability-secondary__number">Атака:{attack}</p>
                        </div>
                    </div>
                    <div className="ability">
                        <div className="ability-stat">
                            <p className="ability-stat__number">Ловкость:{agility}</p>
                            <button
                                onClick={this.agilityUp}
                                className="ability-stat__upgrade"
                            >+</button>
                        </div>
                        <div className="ability-secondary">
                            <p className="ability-secondary__number">Стелс:0</p>
                            <p className="ability-secondary__number">Стрельба:0</p>
                        </div>
                    </div>
                    <div className="ability">
                        <div className="ability-stat">
                            <p className="ability-stat__number">Интеллект:{intellect}</p>
                            <button
                                onClick={this.intellectUp}
                                className="ability-stat__upgrade"
                            >+</button>
                        </div>
                        <div className="ability-secondary">
                            <p className="ability-secondary__number">Обучаемость:0</p>
                            <p className="ability-secondary__number">Выживание:0</p>
                            <p className="ability-secondary__number">Медицина:0</p>
                        </div>
                    </div>
                    <div className="ability">
                        <div className="ability-stat">
                            <p className="ability-stat__number">Харизма:{charisma}</p>
                            <button
                                onClick={this.charismaUp}
                                className="ability-stat__upgrade">+</button>
                        </div>
                        <div className="ability-secondary">
                            <p className="ability-secondary__number">Запугивание:0</p>
                            <p className="ability-secondary__number">Проницательность:0</p>
                            <p className="ability-secondary__number">Внешний вид:0</p>
                            <p className="ability-secondary__number">Манипулирование:0</p>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <button className="buttons__save">Сохранить персонажа</button>
                    <button type="download" className="buttons__load">Загрузить персонажа</button>
                </div>
            </div >
        )
    }
}

export default Main