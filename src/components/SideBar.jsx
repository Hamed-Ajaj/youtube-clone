import { Stack } from '@mui/material'
import {categories} from '../utils/constants'
const SideBar = ({selectedCategory,setSelectedCategory}) => {
    const handleCategoryClick = (name) => {
        setSelectedCategory(name)
    }
  return (
    <Stack
    direction={"row"}
    sx={{
        overflowY: 'auto',
        overflowX: 'auto',
        height: {sx:"auto",md:"95%"},
        flexDirection: { sx: 'row', md: 'column' },
    }}
    >
    {
        categories.map((category,index) => (
            <button key={index}
            className='category-btn'
            style={{
                background:category.name === selectedCategory && '#fc1503',
                color:"white"
            }}
            onClick={() => handleCategoryClick(category.name)}
            >
                <span
                style={{
                    color:category.name === selectedCategory ?'white':"red",
                    marginRight:"15px"
                }}
                >{category.icon}</span>
                <span
                style={{
                    opacity:category.name === selectedCategory ?1:0.8,
                }}
                >{category.name}</span>
            </button>
        ))
    }
    </Stack>
  )
}

export default SideBar
