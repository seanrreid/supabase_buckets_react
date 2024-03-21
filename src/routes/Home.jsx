import { useLoaderData, Form } from 'react-router-dom';
import supabase from '../supabase';

import MyForm from '../components/Form';

export const loader = async () => {
    try {
        const { data } = await supabase.storage.listBuckets();
        return data;
    } catch (error) {
        return error;
    }
};

export const action = async ({ request }) => {
    const formData = await request.formData();
    const photo = formData.get('photo');
    try {
        console.log('PHOTO', photo);
        if (photo instanceof File) {
            const fileName = photo.name;

            const { data, error } = await supabase.storage
                .from('profile-photos')
                .upload(`test/${fileName}`, photo);
            console.log('data, or error', data, error);
        } else {
            console.log('NOT A PHOTO??');
        }
        return null;
    } catch (error) {
        return error;
    }
};

const Home = () => {
    const data = useLoaderData();
    console.log('LOADER DATA:', data);

    return (
        <>
            <h1>Home</h1>
            <p>Welcome home, you&apos;ve arrived.</p>
            <Form method='post' encType='multipart/form-data'>
                <label htmlFor='photo'>Upload a File</label>
                <input type='file' id='photo' name='photo' accept='image/*' />
                <button type='submit'>Add Photo</button>
            </Form>
            <br />
            <MyForm />
        </>
    );
};

export default Home;
