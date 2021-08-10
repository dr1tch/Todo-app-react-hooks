import Header from "../layout/header";
import Container from '../layout/container';
import Sidebar from "../layout/sidebar";
const Dashboard = () => {
    return (
        <>
            <Header />
            <Container >
                <Sidebar />
                <div>
                    This is the main!
                </div>
            </Container>
        </>
    )
}

export default Dashboard;