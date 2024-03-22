import { useState } from 'react';
import supabase from '../supabase';

const MyForm = () => {
    const [profilePhotoId, setProfilePhotoId] = useState(null);
    const handleUpload = async (photo) => {
        const fileName = photo.name;
        const { data, error } = await supabase.storage
            .from('profile-photos')
            .upload(`test/${fileName}`, photo);
        console.log('data, or error', data, error);
        setProfilePhotoId(data.id);
    };

    const handleChange = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target.form);
        const photo = formData.get('photo2');
        return handleUpload(photo);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.append('photo', profilePhotoId);
        // Display the key/value pairs
        for (const pair of formData.entries()) {
            console.log(pair[0], pair[1]);
        }
        return;
    };

    return (
        <>
            <p>
                This example has a <code>&lt;form&gt;</code> that uses a{' '}
                <code>handleSubmit()</code> and <code>FormData()</code> to
                submit a file.
            </p>
            <form onSubmit={handleSubmit}>
                <label htmlFor='photo2'>File: </label>
                <input type='file' name='photo2' onChange={handleChange} />
                <button type='submit'>Submit</button>
            </form>
        </>
    );
};

export default MyForm;
