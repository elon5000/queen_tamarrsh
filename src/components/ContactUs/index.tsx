
// * Components
import Form from '../Form'

// * Hooks
import { useState } from 'react'

// * Modules
import { motion } from "framer-motion"

// * Types
import { SelectedPage } from "@/shared/types"

// * Images
import QR from '@/assets/qr.png'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

type Form = {
    name: string
    mobile: string
    message: string
}

export default function ContactUs({ setSelectedPage }: Props) {

    const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false)

    return <motion.section
        id={SelectedPage.ContactUs}
        onViewportEnter={() => { setSelectedPage(SelectedPage.ContactUs) }}
        className="main-layout py-12 flex flex-col gap-8"
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.1 }}
        variants={{
            hidden: { opacity: 0, x: -60 },
            visible: { opacity: 1, x: 0 }
        }}
    >
        <div>
            <h3 className="card-title mb-2 md:text-center"><span className="text-red-100">Schedule a consultation</span> to get inked</h3>
            <p className="card-paragraph mb-2 md:text-center">
                Leave your details to make your first step into a new tattoo adventure with Koolkat.
            </p>
        </div>
        <motion.div
            className="flex gap-12 flex-col items-center justify-center md:flex-row"
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.1 }}
            variants={{
                hidden: { opacity: 0, x: -60 },
                visible: { opacity: 1, x: 0 }
            }}
        >
            {!isFormSubmitted && <Form setIsFormSubmitted={setIsFormSubmitted} />}
            {isFormSubmitted && <h3 className="text-center py-6">Request has been sent successfully ✅</h3>}
                <img src={QR} className="object-cover max-w-sm" alt="Contact us graphics" />
        </motion.div>
    </motion.section>
}