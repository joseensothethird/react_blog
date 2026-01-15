import { useState } from "react";

export default function Blogs() {
  const [editing, setEditing] = useState(false);
  
    return (
        <div style={{ maxWidth: 900, margin: "auto" }}>
              <h1>Blog</h1>
              
                    {/* CREATE / UPDATE */}
                          <section>
                                  <h2>{editing ? "Update Blog" : "Create Blog"}</h2>
                                          <input placeholder="Title" />
                                                  <textarea placeholder="Content" />
                                                          <button>{editing ? "Update" : "Create"}</button>
                                                                  {editing && <button onClick={() => setEditing(false)}>Cancel</button>}
                                                                        </section>
                                                                        
                                                                              {/* BLOG LIST */}
                                                                                    <section>
                                                                                            <h2>All Blogs</h2>
                                                                                                    <div>
                                                                                                              <h3>Sample Blog</h3>
                                                                                                                        <p>Sample content...</p>
                                                                                                                                  <button onClick={() => setEditing(true)}>Edit</button>
                                                                                                                                            <button>Delete</button>
                                                                                                                                                    </div>
                                                                                                                                                          </section>
                                                                                                                                                          
                                                                                                                                                                {/* PAGINATION */}
                                                                                                                                                                      <footer>
                                                                                                                                                                              <button>Prev</button>
                                                                                                                                                                                      <span>Page 1 of 5</span>
                                                                                                                                                                                              <button>Next</button>
                                                                                                                                                                                                    </footer>
                                                                                                                                                                                                        </div>
                                                                                                                                                                                                          );
                                                                                                                                                                                                          }                                                                                      )