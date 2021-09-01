import { Segment, Sidebar } from 'semantic-ui-react'
import Logo from './Logo';

const Navbar = (props) => {
    const { visible } = props;
    return (
        <Sidebar
            as={Segment}
            animation="scale down"
            direction="top"
            visible={visible}
        >
            <div className="sidebar-content">
                <Logo />
            </div>
        </Sidebar>);
}

export default Navbar