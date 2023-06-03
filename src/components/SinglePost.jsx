import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useQuery from '../hooks/useQuery';
import { getPostById } from '../api/API';

const EditPost = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [singlePost, setSinglePost] = useState({});


    const { data: initialData, isLoading, isSuccess, error } = useQuery(() => getPostById(id), {
        onSuccess: (data) => {
            setSinglePost(data);
            console.log('data', data);
        }
    });

    return (
        <div>
            <button
                onClick={() => navigate("/")}
            >Go Home</button>
            <div>
                <div>
                    {isLoading && <p>Loading...</p>}
                    {error && <p>{error}</p>}

                    {isSuccess && (
                        <div >
                            <p>{singlePost?.title}</p>
                            <p>{singlePost?.body}</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EditPost;