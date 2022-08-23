
import './layout.css'
import {Link, Outlet} from 'react-router-dom'
export function Layout(){
    return(
        <div className="layoutcontainer">
            <div className="mt-3 header">
                <ol className="menu">
                    <li className="menu-item">
                        <Link to='/home'>Home </Link>
                    </li>
                    <li className="menu-item"style={{"position":"relative"}}>
                        <Link to='/sitereg'>Site Register</Link>
                    </li>
                    <li className="menu-item"style={{"position":"relative"}}>
                        <Link to='/sites'>Sites</Link>
                        <ol className="sub-menu"style={{"position":"absolute", "left":0}}>
                            <li className="sub-menu-item">
                                <Link to='/sites/apartment'>Apartments</Link>
                            </li>
                            <li className="sub-menu-item">
                                <Link to='/sites/villas'>Villas</Link>
                            </li>
                            <li className="sub-menu-item">
                                <Link to='/sites/land'>Lands</Link>
                            </li>
                            <li className="sub-menu-item">
                                <Link to='/sites/commercial-complex'>Commercial Complex</Link>
                            </li>
                        </ol>
                    </li>
                    <li className="menu-item" style={{"position":"relative"}}>
                        <Link to='/customer-reg'>Customer Registration</Link>
                    </li>
                    <li className="menu-item">
                        <Link to='/contact'> Contact </Link>
                    </li>
                </ol>
            </div>
            <Outlet></Outlet>
        </div>
    );
}