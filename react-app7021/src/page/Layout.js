import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <a class="navbar-brand" href="/">React and Bootstrap 4</a>
          </div>
          <ul class="nav navbar-nav">
            <li class="nav-item" >
              <Link class="nav-link active" to="/">Home</Link>
            </li>
            <li class="dropdown">
              <Link to="/blogs"  class="dropdown-toggle" data-toggle="dropdown" >Blogs1 <span class="caret"></span>  </Link>
              <ul class="dropdown-menu">
                <li>  <Link to="/contact">Contact11</Link>  </li>   
                <li>  <a href="/django/index4122.py" >404 page</a>  </li>   
              </ul>
            </li>         

            <li><a href="http://127.0.0.1:8000" target="_blank">Django2</a></li>   

            <li class="dropdown"> 
              <Link to="/neo"  class="dropdown-toggle" data-toggle="dropdown">Neo<span class="caret"></span>  </Link>
              <ul class="dropdown-menu">
                <li>  <Link to="/new">Neo 11</Link>  </li>
                
              </ul>
            </li>      

            <li><a href="/other">Other</a></li>
          </ul>

          <ul class="nav navbar-nav navbar-right">
            <li><a href="/"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
            <li><a href="/"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
          </ul>

        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;