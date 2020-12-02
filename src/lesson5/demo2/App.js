import React, { useState, useEffect, useReducer, useCallback } from 'react'
import axios from "axios"

import { InputLable } from './components/Item'
import List from "./components/List"

const API_URL = "https://hn.algolia.com/api/v1/search?query="

const storiesReducer = (state, action) => {
    switch (action.type) {
        case 'STORIES_FETCH_INIT':
            return {
                ...state,
                isLoading: true,
                isError: false
            }
        case 'STORIES_FETCH_SUCCESS':
            return {
                ...state,
                isLoading: false,
                isError: false,
                data: action.payload

            }
        case 'STORIES_FETCH_FAIL':
            return {
                ...state,
                isLoading: false,
                isError: true
            }
        default:


    }
}

const App = () => {
    const [searchItem, setSearchItem] = useState('React')
    const [stories, dispatch] = useReducer(
        storiesReducer,
        { data: [], isLoading: false, isError: false }
    )
    const [url, setUrl] = useState(`${API_URL}${searchItem}`)
    const list = [
        {
            title: "yyyy",
            url: "www.baidu.com",
            author: "test",
            num_comments: 5,
            points: 3
        }
    ]

    const handleFetchStories = useCallback(
        () => {
            dispatch({ type: "STORIES_FETCH_INIT" })
            axios
                .get(url)
                .then(res => {
                    console.log(res.data)
                    dispatch(
                        {
                            type: "STORIES_FETCH_SUCCESS",
                            payload: res.data.hits
                        }
                    )
                })
                .catch(() => {
                    dispatch({ type: "STORIES_FETCH_FAIL" })
                })
        },
        [url],
    )
    useEffect(() => {
        handleFetchStories()
    }, [handleFetchStories])

    const handleSearchSubmit = e => {
        setUrl(`${API_URL}${e.target.value}`)
    }
    return (
        <div>
            <h1>My Hacker News</h1>
            <InputLable id="search">
                <strong> Search:</strong>
            </InputLable>

            <button
                type="button"
                onClick={handleSearchSubmit}
            >
                Submit
            </button>
            {stories.isLoading ? <p>loading...</p> : <List list={stories.data} onRemoveItem={f => f}></List>}

        </div>
    )
}

export default App