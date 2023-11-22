import React from 'react'

const Section = () => {
  return (
    <>
   <section>
    <div className="wraper">
    <div className="section">
        <h2>What you can do 
            <br />
          <span className='access'>  with Buddy</span>
        </h2>
        <p>We provide various features to make your <br />
         academic journey easy</p>
 <div className="dis">
         <p className="lines"></p>
         <p className="line"></p>
         <p className="line"></p>
    </div>
    </div>
    <div className="container">
        <div className="contain">
            <img src="/src/component/media/calculate.PNG" alt="" />
            <p>Calculate Your CGPA</p>
            <p>
            Lorem ipsum dolor sit amet <br /> 
            consectetur. In cum nibh feugiat 
            <br />
            sagittis turpis in volutpat gravida <br />
             nullam. Volutpat non tincidunt <br />
              augue amet pellentesque velit.
            </p>
        </div>
    </div>
    {/* 2 */}
    <div className="container">
        <div className="contain">
            <img src="/src/component/media/upload.PNG" alt="" />
            <p>Get materials & past question</p>
            <p>
            Lorem ipsum dolor sit amet <br /> 
            consectetur. In cum nibh feugiat 
            <br />
            sagittis turpis in volutpat gravida <br />
             nullam. Volutpat non tincidunt <br />
              augue amet pellentesque velit.
            </p>
        </div>
    </div>
    {/* 3 */}
    <div className="container">
        <div className="contain">
            <img src="/src/component/media/calcu2.PNG" alt="" />
            <p>Courses mock test</p>
            <p>
            Lorem ipsum dolor sit amet <br /> 
            consectetur. In cum nibh feugiat 
            <br />
            sagittis turpis in volutpat gravida <br />
             nullam. Volutpat non tincidunt <br />
              augue amet pellentesque velit.
            </p>
        </div>
    </div>
    </div>

    <div className="display">
        <div className="image">
            <img src="/src/component/media/Frame 6429.png" alt="" srcset="" />
        </div>
        <div className="text">
            <h3>Get yourself <span className='access bbb'> 
            <span><img src="/src/component/media/Vector 3.png" alt="" /></span>
            prepared
            </span>  for exams  <br /> with muck tests</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Amet ipsum pretium 
                <br />
                mauris eu malesuada et aliquam dolor vitae. Ultrices nulla egestas <br /> quisque eu blandit et neque amet. Morbi et egestas egestas in. <br />
                 Vitae elit felis dictum diam .</p>

                 <button>try it out</button>
        </div>
    </div>


    <div className="display">
        <div className="image">
            <img src="/src/component/media/Frame 120.png" alt="" srcset="" />
        </div>
        <div className="text">
            <h3> <span className='access'>Upload</span> and <span className='access'>download</span> <br />
              materials for your courses</h3>
            <p>Lorem ipsum dolor sit amet consectetur. Amet ipsum pretium 
                <br />
                mauris eu malesuada et aliquam dolor vitae. Ultrices nulla egestas <br /> quisque eu blandit et neque amet. Morbi et egestas egestas in. <br />
                 Vitae elit felis dictum diam .</p>

                 <button>try it out</button>
        </div>
    </div>


    <div className="form">
       <div className="texts">
       <h3>We’d love to hear your 
            <br />
       <span className='access'> feedback</span> and <span className='access'>suggestions</span></h3>
       <p>We value your opinion as it is important to the <br /> 
       improvement of this product, help thousands of students <br />
        by sharing your thought.</p>
       </div>
       <div className="contain">
        <p>Input your suggection here</p>
        <input type="text" placeholder='input your name' required/>
        <br />
        <input type="email"  placeholder='Enter your email' required/>
        <br />
        <textarea Type="Textarea" State="Default"M ode="—" cols="30" rows="10" placeholder='type your suggection hear'>
    
        </textarea>
        <br />
        <button type='submit'>submit suggection</button>
       </div>
    </div>

    <div className="faq">
        <h3 className='access'>FAQ</h3>
        <p>What people always ask us</p>
        <div className="select">
            <select name="" id="">
            <option value="1">Frequently ask question will be here</option>
            </select>
        </div>

        <div className="select">
            <select name="" id="">
            <option value="1">Frequently ask question will be here</option>
            </select>
        </div>
        <div className="select">
            <select name="" id="">
            <option value="1">Frequently ask question will be here</option>
            </select>
        </div>
        <div className="select">
            <select name="" id="">
            <option value="1">Frequently ask question will be here</option>
            </select>
        </div>
        <div className="select">
            <select name="" id="">
            <option value="1">Frequently ask question will be here</option>
            </select>
        </div>
    </div>
   </section>
    </>
  )
}

export default Section