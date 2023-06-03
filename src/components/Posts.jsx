import { useNavigate } from 'react-router-dom';
import { getPosts } from '../api/API';
import useQuery from '../hooks/useQuery';


const Posts = () => {

    const navigate = useNavigate();

    const {
        data = [],
        isLoading,
        isError,
        isSuccess,
        error,
        refetch
    } = useQuery(getPosts);

    return (
        <div>
            <h1>Posts</h1>

            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <button onClick={refetch}>
                    Refetch
                </button>
            )}
            {error && <p>{error}</p>}
            {isSuccess && (
                <div >
                    {data.map(({ id, title, body }) => (
                        <div key={id}>
                            <p>
                                {title}
                            </p>
                            <p
                            >
                                {body}
                            </p>
                            <button onClick={() => navigate(`/posts/${id}/edit`)}>
                                Edit
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Posts;