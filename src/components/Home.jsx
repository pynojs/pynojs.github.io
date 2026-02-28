import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Home.css'
import { SiGithub } from "react-icons/si"
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

export default function Home() {
    return (
        <>
            <Navbar className='navBar row'>
                <div className='d-flex col d-flex justify-content-start align-items-center gap-4'>
                    <Navbar.Brand className='logo'>PYNOJS</Navbar.Brand>
                    <Nav.Link>首页</Nav.Link>
                    <Nav.Link>关于</Nav.Link>
                    <NavDropdown title='更多'>
                        <NavDropdown.Item>简历</NavDropdown.Item>
                        <NavDropdown.Item>博文</NavDropdown.Item>
                    </NavDropdown>
                </div>

                <div className='col d-flex justify-content-center align-items-center'>
                    这是搜索框
                </div>

                <div className='col d-flex justify-content-end align-items-center'>
                    <Nav.Link href='https://github.com/pynojs'><SiGithub size="2.5rem" /></Nav.Link>
                </div>
                
            </Navbar>
            <div>这是内容部分</div>
            <div>这是注脚部分</div>
        </>
    )
}