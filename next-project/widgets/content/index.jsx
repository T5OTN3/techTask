import Raect from 'react';
import Cards from '../../components/cards';

const Content = ({ blogs }) => {
    return(
        <Cards data={blogs}/>
    )
}

export default Content;