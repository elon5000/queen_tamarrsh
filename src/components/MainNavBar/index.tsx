
// * Cmps
import { Link } from './Link'

// * Hooks
import { useRef } from 'react'
import useMediaQuery from '@/hooks/useMediaQuery'

// * Svgs
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

// * Types
import { SelectedPage } from '../../shared/types'

type Props = {
    isTopOfPage: boolean
    isMainNavOpen: boolean
    selectedPage: SelectedPage
    setIsMainNavOpen: (value: boolean) => void
    setSelectedPage: (value: SelectedPage) => void
}

export default function MainNavBar({ selectedPage, isMainNavOpen, isTopOfPage, setSelectedPage, setIsMainNavOpen }: Props) {

    const navRef = useRef<HTMLElement | null>(null)
    const isAboveMediumScreen = useMediaQuery('(min-width: 1060px)')

    const onToggleModal = (ev: React.MouseEvent<HTMLElement>) => {
        ev.stopPropagation()
        if (isMainNavOpen && navRef.current) {
            navRef.current.classList.add('animate-slide-out-right')
        }
        if (!isAboveMediumScreen && (typeof setIsMainNavOpen === 'function')) {
            const delay = isMainNavOpen ? 300 : 0
            setTimeout(() => setIsMainNavOpen(!isMainNavOpen), delay)
        }
    }

    const MainNavBtnIcon = isMainNavOpen ? XMarkIcon : Bars3Icon
    const darkScreenStyles = (!isAboveMediumScreen && isMainNavOpen) ?
        'fixed w-full h-full inset-0 bg-zinc-950/90 cursor-pointer'
        : 'relative bg-transparent flex-1'
    const navStyles = `flex-between cursor-default ${(!isAboveMediumScreen && isMainNavOpen) ?
        'justify-start flex-col h-full absolute w-3/5 bg-gray-20 top-0 end-0 animate-slide-in-left'
        : 'mx-auto w-full justify-end justify-self-end'}`
    const navUlStyles = isAboveMediumScreen ? 'flex-between gap-8 flex-[0.8] text-sm'
        : 'flex-between flex-col max-h-[400px] gap-8 flex-1 text-xl'

    const toggleModalBtnStyles = `w-12 p-2 hover:text-red-100 ${isMainNavOpen ? 'self-start my-10' : 'justify-self-end rounded-full bg-primary-500 text-primary-100 hover:bg-zinc-950/90'}
    ${(!isTopOfPage && !isMainNavOpen) ? 'border-2 border-solid border-white' : ''}`

    return <div onClick={onToggleModal} className={darkScreenStyles}>
        <nav ref={navRef} className={navStyles}>
            {!isAboveMediumScreen && <button
                title="Toggle navigation bar"
                className={toggleModalBtnStyles}
                onClick={onToggleModal}>
                <MainNavBtnIcon />
            </button>}
            {((isMainNavOpen && !isAboveMediumScreen) || isAboveMediumScreen) && <ul className={navUlStyles}>
                <Link setSelectedPage={setSelectedPage} selectedPage={selectedPage} pageName="home" />
                <Link setSelectedPage={setSelectedPage} selectedPage={selectedPage} pageName="benefits" />
                <Link setSelectedPage={setSelectedPage} selectedPage={selectedPage} pageName="portfolio" />
                <Link setSelectedPage={setSelectedPage} selectedPage={selectedPage} pageName="contact us" />
            </ul>
            }
        </nav>
    </div>
}