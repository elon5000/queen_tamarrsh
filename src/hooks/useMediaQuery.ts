
// * Hooks
import { useState, useEffect } from "react"

export default function (query: string): boolean {
    const [matches, setMatches] = useState<boolean>(false)

    useEffect(() => {
        const media = window.matchMedia(query)
        if (media.matches !== matches) setMatches(media.matches)
        const setCurrMedia = () => setMatches(media.matches)
        window.addEventListener('resize', setCurrMedia)

        return () => window.removeEventListener('resize', setCurrMedia)
    }, [matches, query])

    return matches
}