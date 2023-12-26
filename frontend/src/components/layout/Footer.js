import { InstagramFilled, YoutubeFilled } from '@ant-design/icons';
import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';


export default function Footer() {
    const [isHovered, setIsHovered] = React.useState(false);

    const handleMouseOver = () => {
      setIsHovered(true);
    };
  
    const handleMouseOut = () => {
      setIsHovered(false);
    };

    return (
        <>
            {/* footer */}
            <div id='footer_whole'>
                <div id='footer_wrapper'>
                    <footer className='footer'>
                        <div>
                            <div className='footer_text'>
                                이름 : 정제영
                            </div>
                            <div className='footer_text'>
                                이메일 : jjy9678@naver.com
                            </div>
                            <div className='footer_text'>
                                <Link to='/policy/terms-of-service'>
                                    이용약관  |
                                </Link>
                                <Link to='/policy/privacy-information-process'>
                                    &nbsp;&nbsp;개인정보처리방침
                                </Link>
                            </div>
                            <div className='footer_text'>
                                ©IINTHEWORLD. ALL RIGHTS RESERVED
                            </div>
                        </div>
                        <div className='footer-link'>
                            <div className='link-icon'>
                                <a href='https://www.instagram.com/i_intheworld/'>
                                    {/* <img src={logo_instagram_with_circle_black} style={{width:'30px'}} /> */}
                                    <div style={{width:'30px',height:'30px', border:'2.5px solid #323232', borderRadius:'50%', display:'flex', justifyContent:'center', backgroundColor:'#fff'}} >
                                    <InstagramFilled style={{margin: 'auto auto', display:'block', backgroundColor:'#fff'}} />
                                    </div>
                                </a>
                            </div>
                            <div className='link-icon'>
                                <a href='https://www.linkedin.com/in/jeongjaeyoung/'>
                                    {/* <img src={logo_linkedin_with_circle_black} style={{width:'30px'}} /> */}
                                    <div style={{width:'30px', height:'30px', border:'2.5px solid #323232', borderRadius:'50%', display:'flex', justifyContent:'center', backgroundColor:'#fff'}} >
                                    {/* <LinkedinFilled style={{margin: 'auto auto', display:'block'}} /> */}
                                    <img 
                                     style={{width:'13px',height:'13px', margin:'8px 0 0 1px'}}        
                                      src={isHovered ? '/image/logo/linkedin_outlined.png' : '/image/logo/linkedin_outlined2.png'}
                                      onMouseOver={handleMouseOver}
                                        onMouseOut={handleMouseOut}
                                         />
                                    </div>
                                </a>
                            </div>
                            <div className='link-icon'>
                                <a href='https://www.youtube.com/@i_intheworld'>
                                {/* <img src={logo_youtube_with_circle_black} style={{width:'30px'}} /> */}
                                <div style={{width:'30px',height:'30px', border:'2.5px solid #323232', borderRadius:'50%', display:'flex', justifyContent:'center', backgroundColor:'#fff'}} >
                                    <YoutubeFilled style={{margin: 'auto auto', display:'block'}} />
                                </div>
                                </a>
                            </div>
                            <div className='link-icon' style={{width:'30px',height:'30px', border:'2.5px solid #323232', borderRadius:'50%', display:'flex', justifyContent:'center', backgroundColor:'#fff'}}>
                                <a href='https://brunch.co.kr/@i-intheworld'>
                                <img src='/image/logo/brunch_logo_outlined2.png' style={{width:'20px',height:'20px',margin:'4px 0 0 0'}}  />
                                </a>
                            </div>
                        </div>   
                    </footer>
                </div>
            </div>
        </>
    );
}