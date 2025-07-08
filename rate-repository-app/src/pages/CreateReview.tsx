import React from 'react';
import { useNavigate } from 'react-router-native';

import ReviewForm from './ReviewForm';
import useCreateReview from '../hooks/useCreateReview';

const CreateReview = () => {
  const [createReview] = useCreateReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { ownerName, repositoryName, rating, text } = values;

    try {
      const { data } = await createReview({
        ownerName,
        repositoryName,
        rating: Number(rating),
        text,
      });

      const repositoryId = data.createReview.repositoryId;
      navigate(`/repositories/${repositoryId}`);
    } catch (e) {
      console.log(e);
    }
  };

  return <ReviewForm onSubmit={onSubmit} />;
};

export default CreateReview;
