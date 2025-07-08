import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';
import TextInput from '../components/FormikTextInput';
import { useNavigate } from 'react-router-native';

const validationSchema = Yup.object().shape({
  ownerName: Yup.string().required('Owner name is required'),
  repositoryName: Yup.string().required('Repository name is required'),
  rating: Yup.number()
    .required('Rating is required')
    .min(0, 'Min 0')
    .max(100, 'Max 100'),
  text: Yup.string(),
});

const CreateReview = () => {
  const [createReview] = useMutation(CREATE_REVIEW);
  const navigate = useNavigate();

  const onSubmit = async (values, { resetForm }) => {
    const { ownerName, repositoryName, rating, text } = values;
    const { data } = await createReview({
      variables: {
        review: {
          ownerName,
          repositoryName,
          rating: Number(rating),
          text,
        },
      },
    });
    resetForm();
    navigate(`/repository/${data.createReview.repositoryId}`);
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{ ownerName: '', repositoryName: '', rating: '', text: '' }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <>
            <TextInput name="ownerName" placeholder="Repository owner name" />
            <TextInput name="repositoryName" placeholder="Repository name" />
            <TextInput name="rating" placeholder="Rating between 0 and 100" keyboardType="numeric" />
            <TextInput name="text" placeholder="Review" multiline />
            <Button onPress={handleSubmit} title="Create a review" />
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({ container: { padding: 16 } });

export default CreateReview;
