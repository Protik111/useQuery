import { useState, useEffect } from "react";
import axios from "axios";

const defaultConfig = {
    onSuccess: () => { },
    onError: () => { }
}

const useQuery = (fn, config = defaultConfig) => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        isError: false,
        isSuccess: false,
        error: ""
    });

    const { onSuccess, onError } = config;

    const runQuery = () => {
        if (!fn) return;
        setState((prev) => ({ ...prev, isLoading: true }));

        fn()
            .then((data) => {
                setState({
                    data,
                    isLoading: false,
                    isError: false,
                    isSuccess: true,
                    error: ''
                });
                onSuccess(data)
            })
            .catch((err) => {
                setState({
                    data: null,
                    isLoading: false,
                    isSuccess: false,
                    isError: true,
                    error: err.message || 'Failed'
                })
                onError(err)
            })
    }

    useEffect(runQuery, []);

    return { ...state, refetch: runQuery }
}

export default useQuery;