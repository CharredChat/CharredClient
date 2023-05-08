import { motion, useAnimationControls } from 'framer-motion'
import './index.scss'
import GuildIcon from '../guild-icon'

let demoGuilds = [
    {
        name: 'demo a',
        url: 'https://cdn.discordapp.com/avatars/275787354688585730/44c5228ff7252802c17d4fd838845393.webp?size=4096',
        charrid: '110330508760088562',
    },
    {
        name: 'demo b',
        charrid: '110330510671970298',
    },
]

function GuildsBar() {
    return (
        <div className="guilds-bar">
            {/* {demoGuilds.map()} */}
            <GuildIcon
                guildName="Midpack"
                url="https://cdn.discordapp.com/icons/1051705859064987698/40c1f7650932b133da5161f3fd9e3d48.webp?size=96"
                unread={true}
            ></GuildIcon>
            <GuildIcon
                guildName="GloomedMC"
                url="https://cdn.discordapp.com/icons/899972859441590282/671076ea1333421e821670ead4bb0d40.webp?size=96"
                unread={true}
                active={true}
            ></GuildIcon>
            <div className="icon-wrapper">
                <div className="guild-icon">test</div>
            </div>
        </div>
    )
}

export default GuildsBar
