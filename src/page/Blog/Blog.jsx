import React from 'react';
import './blog.css'
import rectangleblog from '../../assets/Rectangleblog.png'
import img1blog from '../../assets/img1blog.png'
import img2blog from '../../assets/Img2blog.png'
import img3blog from '../../assets/Img3blog.png'
import buttonshareblog from '../../assets/buttonshareblog.png'



const Blog = () => {
    return (
        <div className='containerblog'>
            <div className='principalcardblog'>

                <div className='titleblog'>
                    Blog de CAI Ventures
                    <p className='subtitleblog'>
                        Donde  compartimos consejos, webinars y demás
                    </p>

                </div>

            </div>

            {/* segunda carta */}

            <div className='segondcardblog'>

                <div className='card2blog'>
                    <div className='card2blogimg'>
                        <img src={img1blog} alt="" />

                    </div>
                    <div className='card2blogtext'>


                        <div className='text-section'>
                            <p className='text-sectionSubtitle'>Subtitulo</p>
                            <p className='text-sectionTitle'>titulo</p>
                            <p className='text-sectionDescription'>“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi</p>

                        </div>



                        <button className='buttonshareblog'>
                            <img src={buttonshareblog} alt="" />
                        </button>



                    </div>

                </div>



                <div className='card2blog'>
                    <div className='card2blogimg'>
                        <img src={img2blog} alt="" />

                    </div>
                    <div className='card2blogtext'>


                        <div className='text-section'>
                            <p className='text-sectionSubtitle'>Subtitulo</p>
                            <p className='text-sectionTitle'>titulo</p>
                            <p className='text-sectionDescription'>“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi</p>

                        </div>



                        <button className='buttonshareblog'>
                            <img src={buttonshareblog} alt="" />
                        </button>



                    </div>

                </div>


                <div className='card2blog'>
                    <div className='card2blogimg'>
                        <img src={img3blog} alt="" />

                    </div>
                    <div className='card2blogtext'>


                        <div className='text-section'>
                            <p className='text-sectionSubtitle'>Subtitulo</p>
                            <p className='text-sectionTitle'>titulo</p>
                            <p className='text-sectionDescription'>“Learn as if you will live forever, live like you will die tomorrow.” — Mahatma Gandhi</p>

                            

                        </div>



                        <button className='buttonshareblog'>
                            <img src={buttonshareblog} alt="" />
                        </button>



                    </div>

                </div>


                


               





            </div>


        </div>
    );
};

export default Blog;