import { motion, useAnimationControls } from 'framer-motion'
import './index.scss'
import GuildIcon from '../guild-icon'

let demoGuilds = [
    {
        name: 'demo a',
        url: 'https://cdn.discordapp.com/avatars/275787354688585730/44c5228ff7252802c17d4fd838845393.webp?size=4096',
        charrid: '110330508760088562',
        unread: true,
        active: false,
    },
    {
        name: 'demo b',
        charrid: '110330510671970298',
        unread: true,
        active: true,
    },
]

function GuildsBar() {
    return (
        <div className="guilds-bar">
            {demoGuilds.map((guild, i, r) => {
                return (
                    <GuildIcon
                        guildName={guild.name}
                        url={guild.url}
                        key={guild.charrid}
                        charrid={guild.charrid}
                        unread={guild.unread}
                        active={guild.active}
                    ></GuildIcon>
                )
            })}
        </div>
    )
}

export default GuildsBar
