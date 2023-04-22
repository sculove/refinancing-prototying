import PhoneAuth from './PhoneAuth';
import CloseHeader from './CloseHeader';
import Container from './Container';

function AuthPhone() {
    return (
        <>
            <CloseHeader/>
            <Container>
                <PhoneAuth />
            </Container>
        </>
    );
}

export default AuthPhone;
