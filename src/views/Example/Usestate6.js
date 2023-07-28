import { useState } from 'react';

const gifts = [
    'Vợ Nhặt',
    'Sóng',
    'Ai đã đặt tên cho dòng sông',
    'Chiếc thuyền ngoài xa',
    'Vợ Chồng A Phủ',
    'Người Lái Đò Sông Đà',

]

function Usestate6(){
    const [gift, setGift] = useState();

    const randomGift = () => {
        const index = Math.floor(Math.random() * gifts.length);

        setGift(gifts[index]);
    }
    return(
        <div>
            <h1>{gift || 'Chưa chọn'}</h1>
            <button onClick={randomGift}>Lựa chọn của bạn</button>
        </div>

    );
}

export default Usestate6;