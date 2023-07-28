// Checkbox

import { useState } from "react";

const courses = [
    {
        id : 1,
        name : 'HTML, CSS',
    },
    {
        id : 2,
        name : 'Javascript',
    },
    {
        id : 3,
        name : 'ReactJS',
    }
]
function XS_1706_3(){


    const [checked, setCkeck] = useState([])
    // thử useState(2)


    const handleSubmit = () => {
        //Call API
        console.log({id: checked})
    }

    // checked là mảng đang lựa chọn

    const handleChecked = (id) => {
        setCkeck(prev => {
            const isChecked = checked.includes(id)
            if(isChecked) {
                return checked.filter(item => item !== id)
            }else{
                return [...prev, id]
            }
        })
    }
    return (
        <div style={{ padding: 32}}>
        {courses.map(course => (

            <div key={course.id}>

{/* Thay type ="checkbox", lựa chọn sẽ là cái mảng thì sẽ thay useSate([]) */}
            <input type="checkbox"
            checked={checked.includes(course.id)}
            onChange={() => {handleChecked(course.id)}}
            />

            {course.name}

            </div>
        ))}

            <button onClick={handleSubmit}>Register</button>
        </div>

    );
}

export default XS_1706_3;