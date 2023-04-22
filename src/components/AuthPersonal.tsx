import PersonalAuth from './PersonalAuth';
import CloseHeader from './CloseHeader';
import Container from './Container';

function AuthPersonal() {
    return (
        <>
            <CloseHeader/>
            <Container>
                <PersonalAuth />
            </Container>
        </>
    );
}

export default AuthPersonal;
