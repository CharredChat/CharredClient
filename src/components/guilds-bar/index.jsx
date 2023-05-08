import { motion, useAnimationControls } from 'framer-motion'
import './index.scss'
import GuildIcon from '../guild-icon'

function GuildsBar(props) {
    return (
        <div className="guilds-bar">
            {props.guilds.map((guild, i, r) => {
                return (
                    <GuildIcon
                        guildName={guild.name}
                        url={guild.url}
                        key={guild.charrid}
                        charrid={guild.charrid}
                        unread={guild.unread}
                        active={guild.active}
                        onClick={() => props.onClick(i)}
                    ></GuildIcon>
                )
            })}
        </div>
    )
}

export default GuildsBar
