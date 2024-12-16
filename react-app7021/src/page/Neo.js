import styles from '../app.module.css'
import ReactDOM from 'react-dom/client';

const Neo = () => {
    return <>  
      <h3>Neo</h3>
      <div class="container">   
        <div id="accordion">
          <u>Neo 01</u>

          <div class="card">
            <div class="card-header">
              <a class="collapsed card-link" data-toggle="collapse" href="#62c">
                62c orange9
              </a>
            </div>
            <div id="62c" class="collapse">
              <div class="card-body">      
                  <div className={styles.orange9} >   zzzz</div>           
              </div>
            </div>
          </div>

          <br/>
          <u>cmp6203expense</u> 
        
        </div>
      </div>
    
    </>;
  };
  
  export default Neo;