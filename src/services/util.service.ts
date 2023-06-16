
function debounce(func: (...args: any[]) => void, timeout: number = 300): (...args: any[]) => void {
    let timer: NodeJS.Timeout | undefined
    return (...args: any[]) => {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => { func(...args) }, timeout)
    }
};


export const utilService = {
    debounce
}