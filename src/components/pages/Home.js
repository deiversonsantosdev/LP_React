import React from 'react';
import '../../App';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from '../../components/Navbar';

export default function Home() {
  return (

    <>
      <Navbar></Navbar>

      <div className="col-md-12" id="title">
        <h3>Our Best Recipes</h3>
        <p className='paragrafo'>Far far away, behind the word mountains, far from the countries</p>
        <p className='paragrafo'> Vokalia and Consonantia, there live the blind texts.</p>
      </div>
      <div className="blog-card">

      </div>

      <div className='grid1'>

        <div className="courses-container">
          <div className="course">
            <div className="course-preview bgImg">
            </div>
            <div className="course-info">
              <div className="progress-container">
                <div className="progress"></div>
              </div>
              <h2 className='textoGrid'>Broccoli Salad with bacon</h2>
              <button className="btn2">See Recipe</button>
            </div>
          </div>
        </div>


        <div className="courses-container">
          <div className="course">
            <div className="course-preview bgImg2">
            </div>
            <div className="course-info">
              <div className="progress-container">
                <div className="progress"></div>
              </div>
              <h2 className='textoGrid' >Classic Beef Burgers</h2>
              <button className="btn2">See Recipe</button>
            </div>
          </div>
        </div>


        <div className="courses-container">
          <div className="course">
            <div className="course-preview bgImg3">
            </div>
            <div className="course-info">
              <div className="progress-container">
                <div className="progress"></div>
              </div>
              <h2 className='textoGrid'>Classic Potato Salad</h2>
              <button className="btn2">See Recipe</button>
            </div>
          </div>
        </div>


        <div className="courses-container">
          <div className="course">
            <div className="course-preview bgImg4">
            </div>
            <div className="course-info">
              <div className="progress-container">
                <div className="progress"></div>
              </div>
              <h2 className='textoGrid'>Cherry Cobbler on the Grill</h2>
              <button className="btn2">See Recipe</button>
            </div>
          </div>
        </div>


        <div className='bloco3'>
          <div className="col-md-12" id="title2">
            <h3 className='title3'>The best services ready</h3>
            <h3 className='title3'> To serve you</h3>
            <div className='scroller'>
              <p className='paragrafo1'>Far far away, behind the word mountains, far from &nbsp; the countries
                Vokalia and Consonantia, there live the blind texts.</p>
              <p className='paragrafo1'>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <p className='paragrafo1'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
            </div>
            <p> <button className="btn3">Know More</button> </p>

          </div>
        </div>
      </div>

      <div className="col-md-12" id="title">
        <h3>Read Our Blog</h3>
        <p className='paragrafo'>Far far away, behind the word mountains, far from the countries</p>
        <p className='paragrafo'> Vokalia and Consonantia, there live the blind texts.</p>
      </div>

      <div className='container container-space'>
        <div className="container carousel">
          <div className="card">
            <div className="card-header">
              <img src="https://eco.nomia.pt/contents/casos/nordwood-themes-kyaiexscof0-unsplash.jpg" alt="rover" />
            </div>
            <div className="card-body">
              <h4>
                Quick-start guide to nuts and seeds
              </h4>
              <div className="user">
                <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" />
                <div className="user-name">
                  <small>Kevin Ibrahim</small>
                </div>
              </div>
            </div>
          </div>


          <div className="card">
            <div className="card-header">
              <img src="https://img.estadao.com.br/thumbs/640/resources/jpg/2/0/1549384613302.jpg" alt="ballons" />
            </div>
            <div className="card-body">
              <h4>
                Nutrition: Tips for Improving Your Health
              </h4>


              <div className="user">
                <img src="https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo" alt="user" />
                <div className="user-name">
                  <small>Mike Jackson</small>
                </div>
              </div>
            </div>
          </div>


          <div className="card">
            <div className="card-header">
              <img src="https://d26lpennugtm8s.cloudfront.net/stores/001/182/439/rte/quemsomos.jpg" alt="city" />
            </div>
            <div className="card-body">
              <h4>
                The top 10 benefits of eating he
              </h4>
              <div className="user">
                <img src="https://studyinbaltics.ee/wp-content/uploads/2020/03/3799Ffxy.jpg" alt="user" />
                <div className="user-name">
                  <small>Bryan McGregor</small>
                </div>
              </div>
            </div>
          </div>


          <div className="card">
            <div className="card-header">
              <img src="https://ep01.epimg.net/elcomidista/imagenes/2019/07/22/articulo/1563805648_386475_1563808657_noticia_normal_recorte1.jpg" alt="ballons" />
            </div>
            <div className="card-body">
              <h4>
                Nutrition: Tips for Improving Your Health
              </h4>

              <div className="user">
                <img src="https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo" alt="user" />
                <div className="user-name">
                  <small>Mike Jackson</small>
                </div>
              </div>
            </div>
          </div>



          <div className="card">
            <div className="card-header">
              <img src="https://img.estadao.com.br/thumbs/640/resources/jpg/2/0/1549384613302.jpg" alt="ballons" />
            </div>
            <div className="card-body">
              <h4>
                Nutrition: Tips for Improving Your Health
              </h4>


              <div className="user">
                <img src="https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo" alt="user" />
                <div className="user-name">
                  <small>Mike Jackson</small>
                </div>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <img src="https://eco.nomia.pt/contents/casos/nordwood-themes-kyaiexscof0-unsplash.jpg" alt="rover" />
            </div>
            <div className="card-body">
              <h4>
                Quick-start guide to nuts and seeds
              </h4>
              <div className="user">
                <img src="https://yt3.ggpht.com/a/AGF-l7-0J1G0Ue0mcZMw-99kMeVuBmRxiPjyvIYONg=s900-c-k-c0xffffffff-no-rj-mo" alt="user" />
                <div className="user-name">
                  <small>Kevin Ibrahim</small>
                </div>
              </div>
            </div>
          </div>


          <div className="card">
            <div className="card-header">
              <img src="https://ep01.epimg.net/elcomidista/imagenes/2019/07/22/articulo/1563805648_386475_1563808657_noticia_normal_recorte1.jpg" alt="ballons" />
            </div>
            <div className="card-body">
              <h4>
                Nutrition: Tips for Improving Your Health
              </h4>


              <div className="user">
                <img src="https://lh3.googleusercontent.com/ogw/ADGmqu8sn9zF15pW59JIYiLgx3PQ3EyZLFp5Zqao906l=s32-c-mo" alt="user" />
                <div className="user-name">
                  <small>Mike Jackson</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='bloco4'>

        <h3 className='title4'>Join our membership to get special offer</h3>

        <div className='barsearch'>
          <header>
            <form action="#" method="post" className='search01 search02'>
              <input type="text" name="search" id="search1" placeholder="Enter your email address" required></input>
              <in type="submit"><i className="fas fa-search"></i></in>
            </form>
          </header>
        </div>

        <header>
          <form action="#" method="post" className='search2'>
            <input type="text" name="search" id="search2" placeholder="Enter your email address" required></input>
            <button className="btn3 btnJoin">Join</button>
          </form>
        </header>
      </div>

      <div className='parag123'>
        <div className='paragrafoF'>
          <div className='paragrafoc'> © Copyrights 2019 Stack. All Rights Reserved.
            <div className='paragrafoF1'>Privacy Policy Terms and Conditions </div>
          </div>
        </div>
      </div>
    </>
  );

}

