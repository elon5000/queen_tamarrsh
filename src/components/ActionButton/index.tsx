
// * Components
import AnchorLink from "react-anchor-link-smooth-scroll"

// * Types
import { SelectedPage } from '../../shared/types'

type Props = {
    title: string
    value: SelectedPage
    children: React.ReactNode
    setSelectedPage: (value: SelectedPage) => void
}

const anchorLinkStyles = 'rounded-md cursor-pointer bg-primary-500 hover:bg-red-100 px-6 py-2 text-primary-100 text-center'

export default function ActionButton({ value, title, children, setSelectedPage }: Props) {
    return <AnchorLink
        className={anchorLinkStyles}
        title={title}
        href={`#${value}`}
        onClick={() => setSelectedPage(value)}>
        {children}
    </AnchorLink>
}