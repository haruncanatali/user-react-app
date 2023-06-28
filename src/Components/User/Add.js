import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { FormGroup, FormLabel, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const schema = Yup.object().shape({
    email : Yup.string().min(5,'Çok Kısa').max(100,'Çok Uzun').required('Gerekli'),
    fullName : Yup.string().min(5,'Çok Kısa').max(100,'Çok Uzun').required('Gerekli'),
    username : Yup.string().min(5,'Çok Kısa').max(100,'Çok Uzun').required('Gerekli'),
    profilePicture : Yup.string().min(6,'Çok Kısa').max(500,'Çok Uzun').required('Gerekli'),
    bio : Yup.string().min(10,'Çok Kısa').max(50,'Çok Uzun').required('Gerekli')
});

const url = "http://localhost:5135/api/User/Add"

function UserAdd(){

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
          await axios.post(url, values);
          alert('Ekleme başarılı oldu');
        } catch (error) {
          console.error(error);
        }
        setSubmitting(false);
    };

    return (
        <>
        <Formik
            initialValues={{ email: '', fullName: '', username: '', profilePicture : '', bio: '' }}
            validationSchema={schema}
            onSubmit={handleSubmit}
        >
        {({ errors, touched }) => (
         <Form className='p-5'>
            <FormGroup>
                <FormLabel>E-Posta</FormLabel>
                <Field className="form-control" type="email" name='email' id='email' />
                {errors.email && touched.email ? (
                    <div className='text-danger'>*{errors.email}</div>
                ) : null}
            </FormGroup>
            <FormGroup className='mt-2'>
                <FormLabel>Adınız ve Soyadınız</FormLabel>
                <Field className="form-control" type="text" name='fullName' id='fullName' />
                {errors.fullName && touched.fullName ? (
                    <div className='text-danger'>*{errors.fullName}</div>
                ) : null}
            </FormGroup>
            <FormGroup className='mt-2'>
                <FormLabel>Kullanıcı Adınız</FormLabel>
                <Field className="form-control" type="text" name='username' id='username' />
                {errors.username && touched.username ? (
                    <div className='text-danger'>*{errors.username}</div>
                ) : null}
            </FormGroup>
            <FormGroup className='mt-2'>
                <FormLabel>Profil Fotoğrafınız</FormLabel>
                <Field className="form-control" type="text" name='profilePicture' id='profilePicture' />
                {errors.profilePicture && touched.profilePicture ? (
                    <div className='text-danger'>*{errors.profilePicture}</div>
                ) : null}
            </FormGroup>
            <FormGroup className='mt-2'>
                <FormLabel>Bio</FormLabel>
                <Field className="form-control" type="text" name='bio' id='bio' />
                {errors.bio && touched.bio ? (
                    <div className='text-danger'>*{errors.bio}</div>
                ) : null}
            </FormGroup>
           
           <br/>
           <Button type='submit' className='btn btn-success'>Kaydet</Button>
           <Link to="/users" className='btn btn-warning m-2'>Geri Dön</Link>
         </Form>
       )}
     </Formik></>
    );
}

export default UserAdd;