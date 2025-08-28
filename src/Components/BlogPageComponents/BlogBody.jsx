import React, { useContext } from 'react'
import { Container, Row } from 'react-bootstrap'
import { assets } from '../../assets/assets'
import { myContext } from '../../Context/MyContextProvider'

const BlogBody = () => {

  const { navigate, blogs, blogID, max_id, nextDesc, prevDesc } = useContext(myContext)
  
  return (
    <>
      <Container>
          
        <div className='text-start p-lg-5 mx-lg-5 py-md-4 pb-3'>
          <p className='display-3 text-black fw-medium'>{blogs?.desc}</p>
            
          <div className="d-flex gap-2">
            <img src={assets.admin_img} alt="" className='rounded-circle' height={40}/>
            <p className='text-secondary mt-1'> <span className='text-black'>admin</span> {blogs?.date}</p>
          </div>
        </div>

        <div>
          <img src={blogs?.img} alt="" className='w-100' />
        </div>

        <Row>

          <div className="col-lg-2"></div>

          <div className="col-lg-8 col-12">

            <div className='blog-paragraph text-secondary fs-5 py-4 mx-1'>

              <p>What makes a purchase “worth it”? The answer is different for everybody, so we’re asking some of the coolest, most shopping-savvy people we know—from small-business owners to designers, artists, and actors—to tell us the story behind one of their most prized possessions.</p>

              <p className='display-6 text-black fw-normal py-2'>Who?</p>

              <p>Phoebe Sung and Peter Buer met and fell in love as fashion school students in mid-aughts Boston. After they graduated, the couple began to craft together as a way to decompress from their corporate fashion jobs. They made jewelry, then bags, then home goods like wall hangings, which were ultimately the gateway to launching their now-beloved New York–based textile brand Cold Picnic.</p>

              <img src={assets.common_img} alt="" className='w-100' />

              <p className='fs-6 pb-3'>Phoebe and Peter in their Ridgewood home</p>

              <p>Since 2010, Phoebe and Peter have been designing colorful, abstract rugs and bath mats that double as works of art. Nearly every collection is informed by old movies, either in composition (they print out stills and trace shapes over them) or palette (think retro hues). “There was one series of films that we were really inspired by that were all set in the desert, so the colors were very chalky and powdery but still saturated,” Phoebe shares. “We still use a lot of peaches and mints and citrons and tans.”</p>

              <p className='display-6 text-black fw-normal py-2'>What?</p>

              <p>The couple’s 1910s Ridgewood, Queens, home is filled with their own creations, including a HAY sofa (the <span className='text-black'>Mags Soft Low sectional</span> to be exact) that they reupholstered using hand-tufted rugs after the sofa’s original pink tweed got ruined. “We were trying to think of what kind of upholstery we could actually live with and the rugs are pretty durable,” Phoebe says. “We thought that something a little bit heartier with a lot of color and design would survive our family.” </p>

              <p>For the sofa’s seat and back cushions, Phoebe and Peter chose designs from their Beau Travail collections, which are an homage to the Claire Denis film of the same name. But instead of using the handmade, high-low pile wool rugs that are sold on the Cold Picnic website, Peter tufted the rugs himself—twice. “He bought a frame and a gun and he watched all these videos, but we used the wrong glue backing, so it was too stiff and he had to do it all over again,” Phoebe laments.</p>

              <p className='display-6 text-black fw-normal py-2'>Where and When?</p>

              <p>Peter undertook this grueling project at home in 2021—injuring his back in the process. “Everything he does, he does very intensely. He just wanted to finish it, but then he put his back out and couldn’t walk or get out of bed for a week after. He paid for it, but it was worth it,” Phoebe says, adding that a <span className='text-black'> local upholsterer</span> then covered the HAY sofa in the hand-tufted rugs and a greenish-mustard wide wale corduroy.</p>

              <p className='display-6 text-black fw-normal py-2'>Why?</p>

              <p>In addition to being durable and stylish, the one of a kind sectional holds lots of sentimental value for the couple. “I actually had a mustard corduroy sofa growing up, so it’s nostalgic, but it is our take on it,” Phoebe explains. “And that’s how we think about designing. That’s why we always use old movies and these ’70s powdery palettes. It’s exactly our personal style, which is hard to encapsulate.”</p>

              <p>Phoebe and Peter paired their special sofa with one of the rugs that’s featured in the design, the <span className='text-black'> Denis Denis</span>, as well as a vintage coffee table, a Noguchi-style pendant, and a papier-mâché tulip lamp they made during the pandemic. “We thought using one of the rugs that it was based on would be too much, so we made a brown rug to go with it, but actually that was too much,” Phoebe says. “The effect was more low-key when we just really went for it and did the whole room in the same print.”</p>

              <i className='bi bi-facebook bg-black text-white p-1 m-1 fs-6'></i>
              <i className='bi bi-twitter bg-black text-white p-1 m-1 fs-6'></i>
              <i className='bi bi-linkedin bg-black text-white p-1 m-1 fs-6'></i>

            </div>
              
            <hr/>

            <div className='d-flex justify-content-between'>
              {Number(blogID)>=2?
              <div className="d-flex gap-2 align-items-center" role='button' onClick={()=>{navigate(`/blog/${Number(blogID) - 1}`)}}>
                <i className="text-secondary bi bi-arrow-left"></i>
                <div>
                  <p className='m-0'>PREV POST</p>
                  <p className='m-0'>{prevDesc}...</p>
                </div>

              </div>:<div className="d-flex gap-2 align-items-center"></div>}
            
              {Number(blogID)===max_id?(''):
              <div className="d-flex gap-2 align-items-center text-end" role='button' onClick={()=> navigate(`/blog/${Number(blogID) + 1}`)}>
                <div>
                  <p className='m-0'>NEXT POST</p>
                  <p className='m-0'>{nextDesc}...</p>
                </div>
                <i className="text-secondary bi bi-arrow-right"></i>
              </div>}
            </div>

            <hr/>
              
            <div>

              <div className='my-5'>
                <p className='fs-5 text-black fw-medium m-0'>Leave a Reply</p>
                <p className="text-secondary my-1 fs-6">Your email address will not be published. Required fields are marked *</p>
              </div>

              <label htmlFor="" className='text-dark fs-6'>Comment*</label><br />
              <textarea name="" id="" className='w-100 pb-5'></textarea>

              <Row className='py-3'>
                <div className="col-lg-4 col-mb-4 col-12">
                  <label htmlFor="" className='text-dark fs-6'>Name*</label><br />
                  <input type="text" className='w-100 pb-3' name="" id="" />
                </div>
                <div className="col-lg-4 col-mb-4 col-12">
                  <label htmlFor="" className='text-dark fs-6'>Email*</label><br />
                  <input type="email" className='w-100 pb-3' name="" id="" />
                </div>
                <div className="col-lg-4 col-mb-4 col-12">
                  <label htmlFor="" className='text-dark fs-6'>Website*</label><br />
                  <input type="text" className='w-100 pb-3' name="" id="" />
                </div>
              </Row>

              <input type="checkbox" name="" id=""/>
              <label htmlFor="" className='mx-2 fs-6'>Save my name, email, and website in this browser for the next time I comment.</label><br />
              <button className='btn btn-dark bg-black rounded-1 py-2 px-4 mt-3 mb-5'>Post Comment</button>

            </div>

          </div>

          <div className="col-lg-2"></div>

        </Row>

      </Container>
    </>
  )
}

export default BlogBody