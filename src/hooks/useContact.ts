const CONTACT_URL = `${process.env.NEXTAUTH_URL}/api/send`;

export const useContact = () => {

    const contact = async (name: string, email: string, subject: string, message: string) => {
        const res = await fetch(CONTACT_URL, {
            method: 'POST',
            body: JSON.stringify({ name, email, subject, message }),
        })

        if (!res.ok) {
            console.error('Email failed to send')
            return null
        }

        const data = await res.json()
        return data
    }

    return { contact };
};