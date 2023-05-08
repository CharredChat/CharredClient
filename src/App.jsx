import { useEffect, useState } from 'react'
import { invoke } from '@tauri-apps/api/tauri'
import WebSocket from 'tauri-plugin-websocket-api'
import './App.scss'
import { labels, variants } from '@catppuccin/palette'
import GuildsBar from './components/guilds-bar'

var socket = null

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

function App(props) {
    const [guilds, setGuilds] = useState(demoGuilds)

    if (typeof props.server !== 'string') {
        console.log(`Invalid address: ${props.server}`)
        return <></>
    }
    useEffect(() => {
        async function connectSock() {
            const ws = await WebSocket.connect(props.server)
            socket = ws
            ws.send(JSON.stringify({ op: 1, opdata: { say: 'aasdads' } }))
        }
        connectSock()
    }, [])

    return (
        <div className="app-mount">
            <GuildsBar
                guilds={guilds}
                onClick={(i) => {
                    console.log(`Click ${i}`)
                    let guildsNew = guilds.concat()
                    guildsNew.forEach((guild) => {
                        guild.active = false
                    })
                    guildsNew[i].active = true
                    setGuilds(guildsNew)
                }}
            ></GuildsBar>
        </div>
    )
}

export default App
