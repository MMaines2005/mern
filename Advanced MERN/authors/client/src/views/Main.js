import axios from 'axios';
import React, {useEffect, useState} from 'react';
import AuthorForm from '../components/AuthorForm';

const Main = () => {
    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/author')
            .then(res => {
                setAuthors(res.data);
                setLoaded(true);
            });
    }, [])
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author.id != authorId));
    }
    const createAuthor = author => {
        axios.post('http://localhost:8000/api/author', author)
            .then(res => {
                setAuthors([...authors, res.data]);
            })
    }
    return (
        <div>
        <AuthorForm onSubmitProp={createAuthor} initFirstName="" initLastName="" />
        <hr/>
        </div>
    )
}

export default Main;