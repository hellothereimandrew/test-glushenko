import { Component } from "react";
import Main from "../main/main";


class Logic extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: {
                health: 100,
                evasion: 0,
                energy: 0,
                strenght: 0,
                agility: 0,
                intellect: 0,
                charisma: 0,
                attack: 0,
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
    }

    render() {

        return (
            <Main data={this.state.data}></Main>
        )
    }
}

export default Logic