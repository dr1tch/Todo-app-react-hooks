import Container from './container';
import Header from './header';
const Layout = (props) => {
    return (
        <>
            <Header />
            <Container>
                <h1>This is the layout!</h1>
            </Container>
        </>
    )
}