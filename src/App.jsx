import { useEffect, useState } from 'react'
import { invoke } from '@tauri-apps/api/tauri'
import WebSocket from 'tauri-plugin-websocket-api'
import './App.scss'
import { labels, variants } from '@catppuccin/palette'
import GuildsBar from './components/guilds-bar'

var socket = null

function App(props) {
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
            <GuildsBar></GuildsBar>
        </div>
    )
}

export default App
