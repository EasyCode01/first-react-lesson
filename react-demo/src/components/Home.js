import useFetch from "./useFetch";
import BlogList from "./BlogList";

const Home = () => {

    const {data:blogs, isLoading, error} = useFetch('http://localhost:8000/blogs')
  
    return (
        <div className="">
            {error && <div> {error} </div>}
           {isLoading ? <div> Loading... </div> : blogs && <BlogList blogs = {blogs}/> }
        </div>
    );
}
 
export default Home; 