import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

    const history = useHistory()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('Smith')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            title: title,
            body: body,
            author: author,
        }

        setIsLoading(true)

        setTimeout(()=> {
            fetch('http://localhost:8000/blogs/',{
            method: "POST",
            headers:{"Content-Type" : "application/json"},
            body: JSON.stringify(data)
        })
        .then(()=>{
            history.push('/')
            console.log('New Blog added')
            setIsLoading(false)
        })
        }, 2000)
        
    }
    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={ handleSubmit }>
                <label>title</label>
                <input type="text"
                required
                value = { title }
                onChange={ e => setTitle(e.target.value)}
                placeholder="Enter your title" 
                />
                <label>body</label>
                <textarea 
                required
                placeholder="Enter your blog"
                value={ body }
                onChange={ e => setBody(e.target.value)}
                >

                </textarea>
                <label>Add author</label>
                <select
                value={ author }
                onChange={ e => setAuthor(e.target.value)}
                >
                    <option value="Smith">Smith</option>
                    <option value="James">James</option>
                    <option value="Doris">Doris</option>
                    <option value="Monalisa">Monalisa</option>
                </select>
                {!isLoading && <button> Add blog </button>}
                {isLoading && <button disabled>Adding blog..</button>}
            </form>
        </div>
    );
}
 
export default Create;