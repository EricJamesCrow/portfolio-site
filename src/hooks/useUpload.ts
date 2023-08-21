const UPLOAD_URL = '/api/upload';

export const useUpload = () => {
    
    const uploadImage = async (file: File) => {
        const filename = file.name;
        const fileType = file.type;
        
        const res = await fetch(UPLOAD_URL, {
            method: 'POST',
            body: JSON.stringify({ file: filename, fileType: fileType }),
        })

        if (!res.ok) {
            console.error('Presigned post data request failed')
            return null
        }

        const { url, fields } = await res.json()
        const formData = new FormData()
        
        Object.entries({ ...fields, file }).forEach(([key, value]) => {
            formData.append(key, value as string)
        })
        
        const upload = await fetch(url, {
                method: 'POST',
                body: formData,
            })

        if (upload.ok) {
            return `https://crowdevelopment.s3.amazonaws.com/${filename}`
        } else {
            console.error('Upload failed.')
            return null
        }
    }

    return { uploadImage };
}