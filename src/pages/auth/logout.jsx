import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Spinner from '../../components/utils/spinner';
import fetchAPI from '../../helpers/fetch';
import * as ROUTES from '../../constants/routes';

const Logout = () =>  {
    const fetch = new fetchAPI();
    const history = useHistory()
    useEffect(() => {
        fetch.post("https://api-nodejs-todolist.herokuapp.com/user/logout", {})
        .then(res => {
            console.log('Logged Out!', res);
            localStorage.removeItem('token');
        }).then(res => history.push(ROUTES.TASKS))
    },[])
    return (
        <Spinner />
    )
}

export default Logout;
