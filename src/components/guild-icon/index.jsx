import { motion, useAnimationControls } from 'framer-motion'
import './index.scss'

function GuildIcon(props) {
    const controls = useAnimationControls()

    let isActive = props.active
    let hasUnread = props.unread
    let icon = props.url ? (
        <img src={props.url} alt={props.guildName}></img>
    ) : (
        props.guildName
            .match(/\b(\w)/g)
            .join()
            .toUpperCase()
    )

    return (
        <div className="icon-wrapper">
            {hasUnread && (
                <motion.div
                    className={isActive ? 'pill active' : 'pill'}
                    animate={controls}
                ></motion.div>
            )}
            <motion.div
                className={isActive ? 'guild-icon active' : 'guild-icon'}
                whileHover={!isActive && { borderRadius: '16px' }}
                onHoverStart={
                    isActive
                        ? null
                        : () => {
                              controls.start({
                                  width: '20px',
                              })
                          }
                }
                onHoverEnd={
                    isActive
                        ? null
                        : () => {
                              controls.start({ width: '8px' })
                          }
                }
            >
                {icon}
            </motion.div>
        </div>
    )
}

export default GuildIcon
