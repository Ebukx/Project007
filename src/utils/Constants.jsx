import {BiTrendingUp, BiTrendingup} from 'react-icons/bi'
import {BsPeopleFill} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'

export const categories = [
    {name: 'popular Movies', icons: <BiTrendingUp/>, href: 'movies/popular'},
    {
        name: 'Top Rated Movies',
        icon: <BsPeopleFill/>,
        href: 'movies/top_rated',
    },
    {name: 'popular people', icon: <AiFillStar/>, href: 'person/popular'},
]