
type Props = {
    imgs: string[]
}

export default function ImgGallery({ imgs }: Props) {
    return <ul className="flex gap-3 py-4 align-stretch">
        {imgs.map((imgUrl, idx) => {
            return <li className="px-4 min-w-[380px]" key={idx}>
                <img
                    src={imgUrl}
                    alt="Costumer tattoo"
                    className="object-cover h-full rounded-xl w-full"
                />
            </li>
        })}
    </ul>
}