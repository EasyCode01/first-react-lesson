import { Link } from "react-router-dom";

const BlogList = ({blogs}) => {
    return ( 
        <div>
             {
                blogs.map(blog => {
                    return(
                        <div className="blog-preview" key={blog.id}> 
                            <img src={blog.img} alt="" width={150} height={150}/>
                            <div className="details">
                                <Link to ={`/blogs/${blog.id}`}>
                                    <h2>{blog.title}</h2>
                                    <p>{blog.author}</p>
                                </Link>
                                
                            </div>
                        </div>
                    )
                })
            }
         
           
        </div>
     );
}
 
export default BlogList;