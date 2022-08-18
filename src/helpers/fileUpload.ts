export const fileUpload = async (file : File): Promise<string> =>{
    if(!file) throw new Error('file is required');

    const cloudURL = 'https://api.cloudinary.com/v1_1/dbfueqhpu/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'journal-app');
    formData.append('file', file);

    try {
        const resp = await fetch(cloudURL,{
            method: 'POST',
            body: formData
        });
        const data = await resp.json();
        return data.secure_url;
    } catch (error) {
        if(error instanceof Error){
            throw new Error (error.message);
        }
        return 'Error uploading image'
    }
}