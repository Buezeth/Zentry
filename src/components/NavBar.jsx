import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti'

const NavBar = () => {
    const [isAudioPlaying, setIsAudioPlaying] = useState(false)
    const [isIndicatorActive, setIsIndicatorActive] = useState(false)
    const navContainerRef = useRef(null)
    const audioElementRef = useRef(null)

    const navItems = ['Nexus', 'Vault', 'Prologue', 'About', 'Contact']

    const toggleAudioIndicator = () => {
        setIsAudioPlaying((prev) => !prev)
        setIsIndicatorActive((prev) => !prev)
    }


    useEffect(() => {
        if(isAudioPlaying) {
            audioElementRef.current.play()
        } else {
            audioElementRef.current.pause()
        }
    }, [isAudioPlaying])

  return (
    <div ref={navContainerRef} className='fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6'>
        <header className='absolute top-1/2 w-full -translate-y-1/2'>
            <nav className='flex size-full items-center justify-between p-4'>
                <div className='flex items-center gap-7'>
                    <img src="/img/logo.png" alt="logo" className='w-10' />
                    <Button
                        id="product-button"
                        title="Products"
                        rightIcon={<TiLocationArrow />}
                        containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
                    />
                </div>
                <div className='flex h-full items-center'>
                    <div className='hidden md:block'>
                        {navItems.map((item) => (
                            <a key={item} className='nav-hover-btn' href={`#${item.toLowerCase()}`}>
                                {item}
                            </a>
                        ))}
                    </div>

                    <button onClick={toggleAudioIndicator} className='ml-10 flex items-center space-x-0.5'>
                        <audio ref={audioElementRef} className='hidden' src="/audio/loop.mp3" loop />
                            {[1, 2, 3, 4].map((bar) => (
                                <div key={bar} className={`indicator-line ${isIndicatorActive ? 'active': ''}` } style={{animationDelay: `${bar * 0.1}s`}} />
                            ))}
                    </button>
                </div>

            </nav>
        </header>
    </div>
  )
}

export default NavBar