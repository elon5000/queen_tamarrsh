
// * Hooks
import { useState, useEffect, useCallback } from 'react'

// * Modules
import { formService } from '@/services/form.service'
import { utilService } from '@/services/util.service'

// * Types
import { Form as FormType } from "@/shared/types"


type Props = {
    setIsFormSubmitted: (value: boolean) => void
}

type IsPristineMap = {
    name: boolean
    email: boolean
    mobile: boolean
}

export default function Form({ setIsFormSubmitted }: Props) {

    const [form, setForm] = useState<FormType>(formService.getEmptyForm())
    const [isNameValid, setIsNameValid] = useState<boolean>(false)
    const [isEmailValid, setIsEmailValid] = useState<boolean>(false)
    const [isMobileValid, setIsMobileValid] = useState<boolean>(false)
    const [isPristineMap, setIsPristineMap] = useState<IsPristineMap>({
        name: true,
        email: true,
        mobile: true
    })
    const [isSubmitDisabled, setIsSubmitDisabled] = useState<boolean>(true)

    useEffect(checkDisabled, [form])

    const debouncedSetIsEmailValid = useCallback(utilService.debounce(setIsEmailValid, 500), []);
    const debouncedSetIsMobileValid = useCallback(utilService.debounce(setIsMobileValid, 500), []);
    const debouncedSetIsPristineMap = useCallback(utilService.debounce(setIsPristineMap, 500), []);

    function onHandleChange({ target }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name: field, value } = target
        setForm((prevForm) => ({ ...prevForm, [field]: value }))
        if (field === 'name') setIsNameValid(formService.validateName(value))
        else if (field === 'email') debouncedSetIsEmailValid(formService.validateEmail(value))
        else if (field === 'mobile') debouncedSetIsMobileValid(formService.validateMobile(value))
        debouncedSetIsPristineMap((prevIsPristineMap: IsPristineMap) => ({ ...prevIsPristineMap, [field]: false }))
    }

    function checkDisabled() {
        if (!isNameValid) return setIsSubmitDisabled(true)
        if (!isEmailValid) return setIsSubmitDisabled(true)
        if (!isMobileValid) return setIsSubmitDisabled(true)
        setIsSubmitDisabled(false)
    }

    async function onHandleSubmit(ev: React.FormEvent<HTMLFormElement>) {
        ev.preventDefault()
        try {
            await formService.postForm(form)
            setIsFormSubmitted(true)
        } catch (err) {
            alert('Could not post request')
        }
    }

    const submitBtnStyles = 'mt-3 disabled:cursor-not-allowed font-bold uppercase text-2xl disabled:bg-gray-100 bg-primary-500 text-gray-20 hover:bg-red-100 w-[220px] p-2 rounded-lg'

    return <form
        onSubmit={onHandleSubmit}
        className="flex flex-1 flex-col items-center gap-4"
    >
        <div className="form-input-container">
            {(!isNameValid && !isPristineMap.name) && <p className="invalid-input-warning">*Required</p>}
            <input
                type="text"
                name="name"
                className="form-input"
                placeholder="name"
                value={form.name}
                onChange={onHandleChange}
            />
        </div>
        <div className="form-input-container">
            {(!isEmailValid && !isPristineMap.email) && <p className="invalid-input-warning">*Please make sure your email address is valid</p>}
            <input
                type="email"
                name="email"
                className="form-input"
                placeholder="email"
                value={form.email}
                onChange={onHandleChange}

            />
        </div>
        <div className="form-input-container">
            {(!isMobileValid && !isPristineMap.mobile) && <p className="invalid-input-warning">*Please make sure your mobile is valid</p>}
            <input
                type="tel"
                name="mobile"
                className="form-input"
                placeholder="mobile"
                value={form.mobile}
                onChange={onHandleChange}

            />
        </div>
        <textarea
            name="message"
            className="form-input max-w-[520px]"
            value={form.message}
            rows={6}
            placeholder="message"
            onChange={onHandleChange}
        />
        <button
            type="submit"
            className={submitBtnStyles}
            disabled={isSubmitDisabled}
        >
            Submit
        </button>
    </form>
}