import { motion, useAnimationControls } from 'framer-motion'
import './index.scss'
import { useEffect, useState } from 'react'

function GuildIcon(props) {
    let isActive = props.active
    let hasUnread = props.unread

    const pillControls = useAnimationControls()

    const iconControls = useAnimationControls()

    const [width, setWidth] = useState('8px')
    const [radius, setRadius] = useState('24px')

    useEffect(() => {
        if (!isActive) {
            setWidth('8px')
            setRadius('24px')
        }
    }, [isActive])

    useEffect(() => {
        async function changeWidth() {
            await pillControls.start({ width: width })
        }
        changeWidth()
    }, [width])

    useEffect(() => {
        async function changeRadius() {
            await iconControls.start({ borderRadius: radius })
        }
        changeRadius()
    }, [radius])

    let icon = props.url ? (
        <img src={props.url} alt={props.guildName}></img>
    ) : (
        props.guildName
            .match(/\b(\w)/g)
            .join('')
            .toUpperCase()
    )

    return (
        <div className="icon-wrapper" id={`guild-${props.charrid}`}>
            {hasUnread && (
                <motion.div
                    className={isActive ? 'pill active' : 'pill'}
                    animate={pillControls}
                ></motion.div>
            )}
            <motion.div
                className={isActive ? 'guild-icon active' : 'guild-icon'}
                // whileHover={!isActive && { borderRadius: '16px' }}
                onHoverStart={
                    isActive
                        ? null
                        : () => {
                              setWidth('20px')
                              setRadius('16px')
                          }
                }
                onTap={() => {
                    setWidth('40px')
                    setRadius('16px')

                    return props.onClick()
                }}
                onHoverEnd={
                    isActive
                        ? null
                        : () => {
                              setWidth('8px')
                              setRadius('24px')
                          }
                }
                animate={iconControls}
            >
                {icon}
            </motion.div>
        </div>
    )
}

export default GuildIcon
