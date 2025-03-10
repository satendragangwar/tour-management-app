import  React , {useRef,useEffect,useContext} from 'react'
import {Container,Row , Button} from 'reactstrap'
import {NavLink,Link,useNavigate}  from 'react-router-dom'
import './header.css';
import { AuthContext } from '../context/AuthContext';

const nav_links = [
    {
        path:'/home',
        display:'Home',
        icon: 'ri-home-4-line'
    },
    // {
    //     path:'/about',
    //     display:'About'
    // },
    {
        path:'/tours',
        display:'Tours',
        icon: 'ri-compass-3-line'
    },
]

const Header = () => {
    const headerRef = useRef(null)
    const menuRef = useRef(null)
    const navigate =  useNavigate();
    const {user,dispatch} = useContext(AuthContext) 
    const logout = ()=> {
        dispatch({type:'LOGOUT'})
        navigate('/')
    }
    const stickyHeaderFunc = ()=>{
        window.addEventListener('scroll' ,()=>{
            if(document.body.scrollTop >80 || document.documentElement.scrollTop>80){
                headerRef.current.classList.add('sticky__header')
            }else{
                headerRef.current.classList.remove('sticky__header')
            }
        })
    }

    useEffect(()=>{
        stickyHeaderFunc()
        return window.removeEventListener('scroll',stickyHeaderFunc)
    });

    const toggleMenu=  ()=> menuRef.current.classList.toggle('show__menu')
 
    return <header className='header' ref={headerRef}>
        <Container>
            <Row>
                <div className="nav__wrapper d-flex align-items-cenetr justify-content-between">
                    <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                        <ul className="menu d-flex align-items-center gap-5">
                            {
                                nav_links.map((item,index)=>(
                                    <li className='nav__item'>
                                        <NavLink to={item.path} className={navClass=> navClass.isActive ? 'active__link':""}>
                                            <i className={item.icon} ></i> {item.display}
                                        </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                    <div className="nav__right d-flex align-items-center gap-4">
                        <div className="nav__btns d-flex align-items-center gap-4">
                            {
                                user? <>
                                    <h5 className='mb-0'><i className="ri-user-line"></i> {user.username}</h5>
                                    <Button className='btn btn-dark' onClick={logout}>
                                        <i className="ri-logout-box-line"></i> Logout
                                    </Button>
                                </> : <>
                                    <Button className='btn secondary__btn'>
                                        <Link to='/login'><i className="ri-login-box-line"></i> Login</Link>
                                    </Button>
                                    <Button className='btn primary__btn'>
                                        <Link to='/register'><i className="ri-user-add-line"></i> Register</Link>
                                    </Button>
                                </>
                            }
                        </div>
                        <span className="mobile__menu" onClick={toggleMenu}>
                            <i className="ri-menu-line"></i>
                        </span>
                    </div>
                </div>
            </Row>
        </Container>
    </header>
}

export default Header
