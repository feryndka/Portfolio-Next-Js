'use client'
import { Particles } from 'react-tsparticles'
import { loadFull } from 'tsparticles';
import React, { useCallback } from 'react'

export default function Particle() {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine)
    }, [])

    const particlesLoaded = useCallback(async () => {}, [])

    return (
        <Particles
            className="w-full h-full absolute translate-z-0" 
            init={particlesInit} 
            loaded={particlesLoaded} 
            options={{
                fullScreen: { enable: false },
                background: {
                    color: {
                        value: '',
                    },
                },
                fpsLimit: 120,
                interactivity: {
                    events: {
                        onClick: {
                            enable: false,
                            mode: 'push',
                        },
                        onHover: {
                            enable: true,
                            mode: 'repulse',
                        },
                        resize: true,
                    },
                    modes: {
                        push: {
                            quantity: 90
                        },
                        repulse: {
                            distance: 200,
                            duration: 0.5,
                        }
                    }
                },
                particles: {
                    color: {
                        value: '#fff'
                    },
                    links: {
                        color: '#00dc93',
                        distance: 200,
                        enable: true,
                        opacity: 0.5,
                        width: 1
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        directions: 'none',
                        enable: true,
                        outModes: {
                            default: 'bounce',
                        },
                        random: false,
                        speed: 1,
                        straight: false
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 900
                        },
                        value: 70
                    },
                    opacity: {
                        value: 0.5,
                    },
                    shape: {
                        type: 'circle'
                    },
                    size: {
                        value: {min: 1, max: 5},
                    },
                },
                detectRetina: true,
            }} 
        />
    ) 
}